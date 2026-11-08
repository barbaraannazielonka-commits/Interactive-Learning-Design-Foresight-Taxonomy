import React, { useState, useRef } from 'react';
import { CATEGORIES, TRENDS, TREND_CONNECTIONS } from '../data/educationalTrends';
import { CategoryId, HorizonLevel, Sector, Trend } from '../types';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Network,
  Info,
  ExternalLink,
  SlidersHorizontal,
} from 'lucide-react';

interface ConstellationMapProps {
  onSelectTrend: (trend: Trend) => void;
  selectedCategory: CategoryId | 'all';
  setSelectedCategory: (cat: CategoryId | 'all') => void;
}

export const ConstellationMap: React.FC<ConstellationMapProps> = ({
  onSelectTrend,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [selectedSector, setSelectedSector] = useState<Sector | 'all'>('all');
  const [selectedHorizon, setSelectedHorizon] = useState<HorizonLevel | 'all'>('all');
  const [hoveredTrendId, setHoveredTrendId] = useState<string | null>(null);
  const [showConnections, setShowConnections] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter trends
  const filteredTrends = TRENDS.filter((t) => {
    if (selectedCategory !== 'all' && t.categoryId !== selectedCategory) return false;
    if (selectedSector !== 'all' && !t.sectors.includes(selectedSector)) return false;
    if (selectedHorizon !== 'all' && t.horizon !== selectedHorizon) return false;
    return true;
  });

  const hoveredTrend = TRENDS.find((t) => t.id === hoveredTrendId);

  // Find active connected trend IDs
  const activeConnectedIds = React.useMemo(() => {
    if (!hoveredTrendId) return new Set<string>();
    const ids = new Set<string>();
    TREND_CONNECTIONS.forEach((conn) => {
      if (conn.sourceId === hoveredTrendId) ids.add(conn.targetId);
      if (conn.targetId === hoveredTrendId) ids.add(conn.sourceId);
    });
    return ids;
  }, [hoveredTrendId]);

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Category anchor centers for map reference across the 10 domains
  const categoryCenters: { [key in CategoryId]: { x: number; y: number } } = {
    'ai-analytics': { x: 380, y: 160 },
    'learning-science-assessment': { x: 210, y: 320 },
    'lifelong-microcredentials': { x: 180, y: 540 },
    'immersive-gamification': { x: 240, y: 740 },
    'stem-cybersecurity': { x: 410, y: 860 },
    'global-mobility': { x: 630, y: 870 },
    'climate-sustainability': { x: 820, y: 720 },
    'inclusive-udl': { x: 850, y: 480 },
    'cyber-physical-spaces': { x: 740, y: 250 },
    'wellbeing-sustainability': { x: 540, y: 310 },
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Controls Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs space-y-4 transition-colors duration-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Interactive Filter Deck
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              ({filteredTrends.length} of {TRENDS.length} trends visible)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Interconnections */}
            <button
              onClick={() => setShowConnections(!showConnections)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                showConnections
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>{showConnections ? 'Connections On' : 'Connections Off'}</span>
            </button>

            {/* Zoom In/Out/Reset */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 2.2))}
                title="Zoom In"
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.7))}
                title="Zoom Out"
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors cursor-pointer"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={resetView}
                title="Reset View"
                className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          {/* Category Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-800">All 10 Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id} className="dark:bg-slate-800">
                  {c.shortTitle}
                </option>
              ))}
            </select>
          </div>

          {/* Sector Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Target Learner Sector
            </label>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value as any)}
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-800">All Sectors</option>
              <option value="K-12" className="dark:bg-slate-800">K-12 Schooling</option>
              <option value="Higher Ed" className="dark:bg-slate-800">Higher Education & Universities</option>
              <option value="Corporate L&D" className="dark:bg-slate-800">Corporate L&D & Workforce</option>
              <option value="Informal/Lifelong" className="dark:bg-slate-800">Lifelong & Informal</option>
            </select>
          </div>

          {/* Horizon Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Implementation Horizon
            </label>
            <select
              value={selectedHorizon}
              onChange={(e) => setSelectedHorizon(e.target.value as any)}
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-800">All Horizons</option>
              <option value="Horizon 1: Adopted" className="dark:bg-slate-800">Horizon 1: Adopted (Now - 1 yr)</option>
              <option value="Horizon 2: Accelerating" className="dark:bg-slate-800">Horizon 2: Accelerating (2 - 3 yrs)</option>
              <option value="Horizon 3: Frontier" className="dark:bg-slate-800">Horizon 3: Frontier (3 - 5+ yrs)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Map Canvas Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md select-none h-[640px] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Informative Floating Legend */}
        <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 text-xs text-slate-300 pointer-events-none max-w-xs space-y-2">
          <div className="font-semibold text-slate-100 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-indigo-400" />
            <span>Map Navigation & Interaction</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Drag to pan. Click any node to open its Learning Design Profile. Hover to trace pedagogical interconnections.
          </p>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <span>● Node size = Horizon</span>
            <span>· Rings = Category Hubs</span>
          </div>
        </div>

        {/* Hover Inspector Tooltip Overlay */}
        {hoveredTrend && (
          <div className="absolute bottom-4 right-4 z-20 bg-slate-950/95 border border-slate-700/80 rounded-xl p-4 text-xs text-slate-200 pointer-events-none max-w-sm shadow-xl space-y-2">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor:
                    CATEGORIES.find((c) => c.id === hoveredTrend.categoryId)?.accentHex || '#fff',
                }}
              />
              <span className="font-bold text-sm text-white">{hoveredTrend.title}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {hoveredTrend.oneLiner}
            </p>
            <div className="text-[10px] text-slate-400 flex items-center gap-2 pt-1 border-t border-slate-800">
              <span>{hoveredTrend.horizon}</span>
              <span aria-hidden="true">·</span>
              <span>{hoveredTrend.sectors.join(', ')}</span>
            </div>
            <div className="text-[10px] text-indigo-300 font-medium pt-0.5">
              Click node to open full pedagogical breakdown & theories →
            </div>
          </div>
        )}

        {/* SVG Drawing Layer */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoomLevel})`}
            style={{ transformOrigin: '500px 500px', transition: isDragging ? 'none' : 'transform 0.15s ease-out' }}
          >
            {/* Category Cluster Hub Background Rings & Badges */}
            {CATEGORIES.map((cat, i) => {
              const center = categoryCenters[cat.id];
              const isCatActive = selectedCategory === 'all' || selectedCategory === cat.id;
              return (
                <g
                  key={cat.id}
                  opacity={isCatActive ? 1 : 0.2}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
                >
                  {/* Subtle orbital dashed boundary */}
                  <circle
                    cx={center.x}
                    cy={center.y}
                    r={90}
                    fill="none"
                    stroke={cat.accentHex}
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    opacity="0.3"
                  />
                  {/* Category Central Hub Circle */}
                  <circle
                    cx={center.x}
                    cy={center.y}
                    r={20}
                    fill="#0f172a"
                    stroke={cat.accentHex}
                    strokeWidth="2"
                  />
                  {/* Category Index Number */}
                  <text
                    x={center.x}
                    y={center.y + 1}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={cat.accentHex}
                    fontSize="11"
                    fontWeight="800"
                    fontFamily="Plus Jakarta Sans"
                  >
                    0{i + 1}
                  </text>
                  {/* Crisp Category Short Title Pill Badge */}
                  <text
                    x={center.x}
                    y={center.y + 32}
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="10"
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

            {/* Inter-Trend Connection Arcs */}
            {showConnections &&
              TREND_CONNECTIONS.map((conn, idx) => {
                const source = TRENDS.find((t) => t.id === conn.sourceId);
                const target = TRENDS.find((t) => t.id === conn.targetId);
                if (!source || !target) return null;

                const isConnectedToHovered =
                  hoveredTrendId &&
                  (conn.sourceId === hoveredTrendId || conn.targetId === hoveredTrendId);

                // Convert percentage coords to 1000x1000 scale
                const x1 = (source.coordinates.x / 100) * 1000;
                const y1 = (source.coordinates.y / 100) * 1000;
                const x2 = (target.coordinates.x / 100) * 1000;
                const y2 = (target.coordinates.y / 100) * 1000;

                return (
                  <g key={idx}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isConnectedToHovered ? '#818cf8' : '#334155'}
                      strokeWidth={isConnectedToHovered ? 2.5 : 1}
                      strokeDasharray={isConnectedToHovered ? '4 2' : 'none'}
                      opacity={
                        hoveredTrendId
                          ? isConnectedToHovered
                            ? 0.95
                            : 0.1
                          : 0.35
                      }
                      className="transition-all duration-200"
                    />
                  </g>
                );
              })}

            {/* Trend Satellite Nodes (Collision-Free Labels with Dark Scrim Halo) */}
            {filteredTrends.map((trend) => {
              const cat = CATEGORIES.find((c) => c.id === trend.categoryId);
              const cx = (trend.coordinates.x / 100) * 1000;
              const cy = (trend.coordinates.y / 100) * 1000;

              const isHovered = hoveredTrendId === trend.id;
              const isConnected = activeConnectedIds.has(trend.id);
              const isMuted =
                hoveredTrendId !== null && !isHovered && !isConnected;

              // Node radius based on horizon
              const nodeRadius =
                trend.horizon === 'Horizon 1: Adopted'
                  ? 12
                  : trend.horizon === 'Horizon 2: Accelerating'
                  ? 10.5
                  : 9;

              // Smart vertical offset for label
              const catCenter = cat ? categoryCenters[cat.id] : { y: 500 };
              const isAboveCenter = cy < catCenter.y;
              const labelY = isAboveCenter ? cy - nodeRadius - 6 : cy + nodeRadius + 13;

              return (
                <g
                  key={trend.id}
                  className="cursor-pointer transition-opacity duration-200"
                  opacity={isMuted ? 0.25 : 1}
                  onMouseEnter={() => setHoveredTrendId(trend.id)}
                  onMouseLeave={() => setHoveredTrendId(null)}
                  onClick={() => onSelectTrend(trend)}
                >
                  {/* Subtle active glow ring when hovered or connected */}
                  {(isHovered || isConnected) && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={nodeRadius + 8}
                      fill="none"
                      stroke={cat?.accentHex || '#6366f1'}
                      strokeWidth="2"
                      opacity="0.8"
                      strokeDasharray="3 3"
                    />
                  )}

                  {/* Main Trend Circle Node */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={nodeRadius}
                    fill={isHovered ? '#ffffff' : cat?.accentHex || '#6366f1'}
                    stroke="#020617"
                    strokeWidth={2}
                    className="transition-all duration-150"
                  />

                  {/* Radar index inside node for cross-referencing */}
                  <text
                    x={cx}
                    y={cy + 0.5}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isHovered ? '#0f172a' : '#ffffff'}
                    fontSize={isHovered ? '9.5' : '8'}
                    fontWeight="800"
                    fontFamily="Plus Jakarta Sans"
                    className="pointer-events-none select-none"
                  >
                    {trend.radarIndex}
                  </text>

                  {/* Concise Short Title Label with Dark Scrim Halo (Never overlaps lines or text!) */}
                  <text
                    x={cx}
                    y={labelY}
                    textAnchor="middle"
                    fill={isHovered ? '#ffffff' : '#cbd5e1'}
                    fontSize={isHovered ? '10' : '9'}
                    fontWeight={isHovered ? '700' : '600'}
                    fontFamily="Plus Jakarta Sans"
                    className="pointer-events-none transition-all duration-150 select-none"
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
            })}
          </g>
        </svg>
      </div>

      {/* Visual Navigation Footer Tip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
        <span>
          Tip: You can switch to the <strong className="text-slate-800">Horizon Radar</strong> tab to see maturity timelines or <strong className="text-slate-800">Trends Explorer</strong> for searchable card grids.
        </span>
        <button
          onClick={() => setSelectedCategory('all')}
          className="text-indigo-600 hover:text-indigo-800 font-medium underline self-start sm:self-auto cursor-pointer"
        >
          Reset Map Filters
        </button>
      </div>
    </div>
  );
};
