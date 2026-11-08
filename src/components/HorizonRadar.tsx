import React, { useState } from 'react';
import { CATEGORIES, TRENDS } from '../data/educationalTrends';
import { CategoryId, HorizonLevel, Sector, Trend } from '../types';
import { Filter, Star, Eye, Layers } from 'lucide-react';

interface HorizonRadarProps {
  onSelectTrend: (trend: Trend) => void;
}

export const HorizonRadar: React.FC<HorizonRadarProps> = ({ onSelectTrend }) => {
  const [selectedSector, setSelectedSector] = useState<Sector | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [hoveredTrendId, setHoveredTrendId] = useState<string | null>(null);

  // Filter trends by sector and category
  const filteredTrends = TRENDS.filter((t) => {
    if (selectedSector !== 'all' && !t.sectors.includes(selectedSector)) return false;
    if (selectedCategory !== 'all' && t.categoryId !== selectedCategory) return false;
    return true;
  });

  const hoveredTrend = TRENDS.find((t) => t.id === hoveredTrendId);

  // Calculate coordinates on the radar for each trend across 10 categories
  // 10 categories -> exactly 36 degrees each
  // Horizon 1: radius 155 - 195
  // Horizon 2: radius 265 - 315
  // Horizon 3: radius 375 - 415
  const getTrendRadarCoords = (trend: Trend, indexInSlice: number, totalInSlice: number) => {
    const categoryIndex = CATEGORIES.findIndex((c) => c.id === trend.categoryId);
    // Base center angle for category wedge
    const baseAngle = categoryIndex * 36 + 18;

    // Distribute nodes evenly within the 36-degree wedge
    const angleSpread = 20;
    const angleOffset =
      totalInSlice > 1
        ? (indexInSlice / (totalInSlice - 1) - 0.5) * angleSpread
        : 0;

    // Specific per-trend radial and angular adjustments for pristine spacing
    // User request: "number 6 needs to be lower on horizon radar cos now it is touching number 5"
    let customRadiusDelta = 0;
    let customAngleDelta = 0;
    let extraX = 0;
    let extraY = 0;

    if (trend.radarIndex === 6) {
      customAngleDelta = 8; // move further down toward 90 degrees
      customRadiusDelta = 22; // expand radius to outer threshold of Horizon 1
      extraY = 30; // shift distinctly lower
      extraX = -10; // shift slightly leftward for comfortable separation
    } else if (trend.radarIndex === 5) {
      customAngleDelta = -4;
      customRadiusDelta = -8;
    } else if (trend.radarIndex === 7) {
      customAngleDelta = 6;
      customRadiusDelta = -6;
    }

    const finalAngleDeg = baseAngle + angleOffset + customAngleDelta;
    const finalAngleRad = (finalAngleDeg * Math.PI) / 180;

    let radius = 175; // Horizon 1: Adopted
    if (trend.horizon === 'Horizon 2: Accelerating') {
      radius = 290;
    } else if (trend.horizon === 'Horizon 3: Frontier') {
      radius = 395;
    }

    // Slight deterministic offset by id so nodes at same horizon never collide
    const jitter = ((trend.radarIndex * 7) % 18) - 9;
    const finalRadius = radius + jitter + customRadiusDelta;

    const x = 500 + finalRadius * Math.cos(finalAngleRad) + extraX;
    const y = 500 + finalRadius * Math.sin(finalAngleRad) + extraY;
    return { x, y, angleDeg: finalAngleDeg };
  };

  // Group trends by category for radar plotting
  const trendsByCategory = CATEGORIES.map((cat) => {
    const inCat = filteredTrends.filter((t) => t.categoryId === cat.id);
    return {
      category: cat,
      trends: inCat,
    };
  });

  // Horizon counts
  const h1Count = filteredTrends.filter((t) => t.horizon === 'Horizon 1: Adopted').length;
  const h2Count = filteredTrends.filter((t) => t.horizon === 'Horizon 2: Accelerating').length;
  const h3Count = filteredTrends.filter((t) => t.horizon === 'Horizon 3: Frontier').length;

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Top Controls & Overview */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>Foresight Radar</span>
            <span aria-hidden="true">·</span>
            <span>Collision-Free Radial Topology</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">
            Educational Trends Maturity Radar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            10 research domains mapped across Adopted, Accelerating, and Frontier maturity horizons.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">Sector:</span>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value as any)}
              className="bg-transparent font-medium text-slate-900 dark:text-slate-100 focus:outline-none cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-900">All Sectors</option>
              <option value="K-12" className="dark:bg-slate-900">K-12</option>
              <option value="Higher Ed" className="dark:bg-slate-900">Higher Ed</option>
              <option value="Corporate L&D" className="dark:bg-slate-900">Corporate L&D</option>
              <option value="Informal/Lifelong" className="dark:bg-slate-900">Lifelong</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="bg-transparent font-medium text-slate-900 dark:text-slate-100 focus:outline-none cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-900">All 10 Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id} className="dark:bg-slate-900">
                  {c.shortTitle}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Horizon Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex items-center justify-between transition-colors duration-200">
          <div>
            <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Horizon 1: Adopted (Now - 1 Yr)
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
              {h1Count} Trends Active
            </div>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Core Ring</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex items-center justify-between transition-colors duration-200">
          <div>
            <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Horizon 2: Accelerating (2 - 3 Yrs)
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
              {h2Count} Trends Transitioning
            </div>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Mid Ring</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/80 rounded-xl p-3.5 flex items-center justify-between transition-colors duration-200">
          <div>
            <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Horizon 3: Frontier (3 - 5+ Yrs)
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 tabular-nums">
              {h3Count} Frontier Trends
            </div>
          </div>
          <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
            Degree Redesign Active
          </span>
        </div>
      </div>

      {/* Level 3 Frontier Strategic Focus Spotlight */}
      <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white dark:from-purple-950/40 dark:via-indigo-950/40 dark:to-slate-900 border border-purple-200 dark:border-purple-800/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs transition-colors duration-200">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-600 text-white shadow-xs">
              Level 3 Frontier Focus
            </span>
            <span className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider">
              Implementation Horizon (3 – 5+ Years)
            </span>
          </div>
          <span className="text-xs font-mono font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/60 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-700">
            Node #22 · Degree Redesign
          </span>
        </div>

        <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-slate-100 font-display">
          Total Redesign of University Titles (Bachelor & Master Degrees in the AI Thesis Era)
        </h3>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          When it comes to the <strong>Implementation Horizon and Level 3 Frontier</strong>, higher education faces a structural paradigm shift: <strong>now that artificial intelligence can make thesis papers, capstones, and dissertations in seconds</strong>, the traditional written thesis no longer validates individual human capability. This means that soon there will be a <strong>brand-new model that we need to create</strong>—replacing static century-old university titles like Bachelor’s and Master’s degrees with dynamic, unforgeable capability registries, continuous live viva voce oral defenses, applied real-world problem verification, and stackable competency portfolios.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-purple-900 dark:text-purple-300">New Model Foundations:</span>
          <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-slate-700 dark:text-slate-200 text-[11px] font-medium">
            Live Viva Voce Defenses
          </span>
          <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-slate-700 dark:text-slate-200 text-[11px] font-medium">
            W3C Verifiable Capability Ledgers
          </span>
          <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-slate-700 dark:text-slate-200 text-[11px] font-medium">
            Dynamic Problem Studios
          </span>
          <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-slate-700 dark:text-slate-200 text-[11px] font-medium">
            Real-World Impact Portfolios
          </span>
        </div>
      </div>

      {/* Two-Column Layout: Radar Canvas on Left (7 cols) + Synchronized Trend Index on Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Radar Graphic Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden flex items-center justify-center">
          {/* Subtle Radar Scanline Texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at center, #6366f1 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="w-full max-w-[660px] aspect-square relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="-170 -100 1340 1200"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Concentric Horizon Rings */}
              {/* Outer Horizon 3 */}
              <circle
                cx="500"
                cy="500"
                r="450"
                fill="#0f172a"
                fillOpacity="0.85"
                stroke="#334155"
                strokeWidth="1.5"
              />
              {/* Mid Horizon 2 */}
              <circle
                cx="500"
                cy="500"
                r="330"
                fill="#1e293b"
                fillOpacity="0.45"
                stroke="#334155"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Inner Horizon 1 */}
              <circle
                cx="500"
                cy="500"
                r="210"
                fill="#1e293b"
                fillOpacity="0.8"
                stroke="#475569"
                strokeWidth="2"
              />
              {/* Center Core */}
              <circle
                cx="500"
                cy="500"
                r="65"
                fill="#0f172a"
                stroke="#64748b"
                strokeWidth="1.5"
              />
              <text
                x="500"
                y="496"
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="11"
                fontWeight="700"
                fontFamily="Plus Jakarta Sans"
              >
                RADAR
              </text>
              <text
                x="500"
                y="512"
                textAnchor="middle"
                fill="#64748b"
                fontSize="9"
                fontWeight="600"
              >
                CORE
              </text>

              {/* 10 Category Radial Dividers */}
              {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x2 = 500 + 450 * Math.cos(rad);
                const y2 = 500 + 450 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1="500"
                    y1="500"
                    x2={x2}
                    y2={y2}
                    stroke="#1e293b"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Horizon Ring Watermark Ring Labels (Collision-free) */}
              <text
                x="500"
                y="285"
                textAnchor="middle"
                fill="#475569"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1.5"
              >
                HORIZON 1 · ADOPTED
              </text>
              <text
                x="500"
                y="172"
                textAnchor="middle"
                fill="#475569"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1.5"
              >
                HORIZON 2 · ACCELERATING
              </text>
              <text
                x="500"
                y="65"
                textAnchor="middle"
                fill="#475569"
                fontSize="9"
                fontWeight="700"
                letterSpacing="1.5"
              >
                HORIZON 3 · FRONTIER
              </text>

              {/* Perimeter Category Wedge Markers with Clean Radial Orientation */}
              {CATEGORIES.map((cat, i) => {
                const midAngle = i * 36 + 18;
                const rad = (midAngle * Math.PI) / 180;
                // Position perimeter labels with intelligent textAnchor so they never collide
                const isRight = Math.cos(rad) > 0.15;
                const isLeft = Math.cos(rad) < -0.15;
                const anchor = isRight ? 'start' : isLeft ? 'end' : 'middle';

                const dist = 468;
                const lx = 500 + dist * Math.cos(rad);
                const ly = 500 + dist * Math.sin(rad);

                const isCatActive = selectedCategory === 'all' || selectedCategory === cat.id;

                return (
                  <g
                    key={cat.id}
                    opacity={isCatActive ? 1 : 0.25}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
                  >
                    <text
                      x={lx}
                      y={ly}
                      textAnchor={anchor}
                      dominantBaseline="central"
                      fill={cat.accentHex}
                      fontSize="9.5"
                      fontWeight="700"
                      fontFamily="Plus Jakarta Sans"
                      style={{
                        paintOrder: 'stroke fill',
                        stroke: '#020617',
                        strokeWidth: '4px',
                        strokeLinejoin: 'round',
                      }}
                    >
                      {cat.shortTitle}
                    </text>
                  </g>
                );
              })}

              {/* Radar Nodes: High-Contrast Numbered Badges with Collision-Free Radial Labels */}
              {trendsByCategory.map((slice) => {
                return slice.trends.map((trend, idx) => {
                  const { x, y, angleDeg } = getTrendRadarCoords(trend, idx, slice.trends.length);
                  const isHovered = hoveredTrendId === trend.id;

                  // Label placement: offset away from center
                  const isRightSide = x >= 500;
                  const labelOffsetX = isRightSide ? 14 : -14;
                  const textAnchor = isRightSide ? 'start' : 'end';

                  return (
                    <g
                      key={trend.id}
                      className="cursor-pointer transition-all duration-150"
                      onMouseEnter={() => setHoveredTrendId(trend.id)}
                      onMouseLeave={() => setHoveredTrendId(null)}
                      onClick={() => onSelectTrend(trend)}
                    >
                      {/* Highlight Outer Pulse Halo when hovered */}
                      {isHovered && (
                        <circle
                          cx={x}
                          cy={y}
                          r={20}
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeDasharray="3 3"
                          opacity="0.9"
                        />
                      )}

                      {/* Radar Numbered Badge Node */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 13 : 10.5}
                        fill={isHovered ? '#ffffff' : slice.category.accentHex}
                        stroke="#0f172a"
                        strokeWidth={2}
                      />

                      {/* Number inside badge */}
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={isHovered ? '#0f172a' : '#ffffff'}
                        fontSize={isHovered ? '9.5' : '8.5'}
                        fontWeight="800"
                        fontFamily="Plus Jakarta Sans"
                        className="pointer-events-none select-none"
                      >
                        {trend.radarIndex}
                      </text>

                      {/* Short Label beside Node with Dark Scrim Stroke (Zero Collision!) */}
                      <text
                        x={x + labelOffsetX}
                        y={y}
                        textAnchor={textAnchor}
                        dominantBaseline="central"
                        fill={isHovered ? '#ffffff' : '#e2e8f0'}
                        fontSize={isHovered ? '10' : '8.5'}
                        fontWeight={isHovered ? '700' : '500'}
                        fontFamily="Plus Jakarta Sans"
                        className="pointer-events-none transition-all duration-100"
                        style={{
                          paintOrder: 'stroke fill',
                          stroke: '#020617',
                          strokeWidth: '4px',
                          strokeLinejoin: 'round',
                        }}
                      >
                        {trend.shortTitle}
                      </text>
                    </g>
                  );
                });
              })}
            </svg>
          </div>

          {/* Hover Overlay Tooltip */}
          {hoveredTrend && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 max-w-sm bg-slate-900/95 border border-slate-700 rounded-xl p-3.5 text-xs text-slate-200 shadow-2xl pointer-events-none space-y-1.5 z-20 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    {hoveredTrend.radarIndex}
                  </span>
                  <span>{hoveredTrend.title}</span>
                </div>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {hoveredTrend.oneLiner}
              </p>
              <div className="text-[10px] text-indigo-300 font-semibold pt-1 border-t border-slate-800 flex items-center justify-between">
                <span>{hoveredTrend.horizon}</span>
                <span>Click node for full Learning Design card →</span>
              </div>
            </div>
          )}
        </div>

        {/* Synchronized Trend Index / Directory (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4 transition-colors duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Synchronized Radar Index</span>
              </h3>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                Cross-reference radar numbers to full trend titles & metrics.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              {filteredTrends.length} Trends
            </span>
          </div>

          {/* Scrollable list of numbered trends */}
          <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
            {filteredTrends.map((trend) => {
              const cat = CATEGORIES.find((c) => c.id === trend.categoryId);
              const isHovered = hoveredTrendId === trend.id;

              return (
                <div
                  key={trend.id}
                  onMouseEnter={() => setHoveredTrendId(trend.id)}
                  onMouseLeave={() => setHoveredTrendId(null)}
                  onClick={() => onSelectTrend(trend)}
                  className={`p-3 rounded-xl border text-xs transition-all cursor-pointer space-y-1.5 ${
                    isHovered
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-600 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 text-white"
                        style={{ backgroundColor: cat?.accentHex || '#4f46e5' }}
                      >
                        {trend.radarIndex}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-slate-100 leading-snug">
                        {trend.title}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                    {trend.oneLiner}
                  </p>

                  <div className="pl-7 flex flex-wrap items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{cat?.shortTitle}</span>
                    <span aria-hidden="true">·</span>
                    <span>{trend.horizon.split(':')[0]}</span>
                    {trend.empiricalMetric && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-indigo-700 dark:text-indigo-400 font-medium">
                          {trend.empiricalMetric}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
