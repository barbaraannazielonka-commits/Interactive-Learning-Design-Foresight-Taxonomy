import React, { useState } from 'react';
import { CATEGORIES, TRENDS } from '../data/educationalTrends';
import { APA_SOURCES } from '../data/apaSources';
import { CategoryId } from '../types';
import {
  BookOpen,
  Cpu,
  Award,
  Layers,
  HeartHandshake,
  ShieldCheck,
  Globe,
  Leaf,
  Gamepad2,
  Smile,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Table as TableIcon,
} from 'lucide-react';

interface CategoryRationaleViewProps {
  onSelectCategoryInMap: (categoryId: CategoryId) => void;
  onExploreInSynthesizer: () => void;
  onExploreSources?: (categoryId?: CategoryId) => void;
}

export const CategoryRationaleView: React.FC<CategoryRationaleViewProps> = ({
  onSelectCategoryInMap,
  onExploreInSynthesizer,
  onExploreSources,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'priority'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const displayedCategories =
    filterMode === 'priority'
      ? CATEGORIES.filter((c) => c.isNewlyAddedHighlight)
      : CATEGORIES;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Lead-in Hero: Requested Title & Author */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            <span>Global Research Synthesis</span>
            <span aria-hidden="true">·</span>
            <span>Evidence-Based Taxonomy</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">Barbara Anna Zielonka</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display text-balance">
            Interactive Learning Design & Foresight Taxonomy
          </h1>

          <p className="text-sm sm:text-base font-semibold text-slate-700">
            Authored & Curated by <span className="text-indigo-600">Barbara Anna Zielonka</span>
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Educational systems globally are undergoing structural shifts driven by cognitive science insights, technological breakthroughs, geopolitical demographic realignments, and planetary ecological imperatives. This evidence-based synthesis unifies ten foundational categories—with specialized focus on <strong>Global Student Mobility and Cross-Border Education</strong>, <strong>Ecological and Climate Literacy</strong>, <strong>Inclusive Education & UDL</strong>, and <strong>Cyber-Physical Learning Spaces</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectCategoryInMap('global-mobility')}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore Interactive Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onExploreInSynthesizer}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Blueprint Synthesizer</span>
            </button>
            {onExploreSources && (
              <button
                onClick={() => onExploreSources()}
                className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>Sources ({APA_SOURCES.length} DOIs)</span>
              </button>
            )}
          </div>
        </div>



        {/* 4 Priority Pillar Highlights */}
        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
              <Globe className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Global Mobility</span>
            </div>
            <p className="text-xs text-blue-800 leading-relaxed">
              Regional transnational hubs (Singapore, UAE, Malaysia) and COIL virtual exchanges democratizing cross-border credits.
            </p>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
              <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Climate & Living Labs</span>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Interdisciplinary carbon curricula and institutional campuses operating as real-time decarbonization testbeds.
            </p>
          </div>

          <div className="bg-rose-50/60 border border-rose-200/80 rounded-xl p-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900">
              <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Inclusive UDL & AI</span>
            </div>
            <p className="text-xs text-rose-800 leading-relaxed">
              Neuroinclusive curriculum design by inception with real-time speech-to-text, sign synthesis, and eye-tracking.
            </p>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
              <Layers className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Cyber-Physical Spaces</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              Spatial audio seminar rooms, telepresence robotics, and 24/7 cloud teleoperation of physical STEM wet labs.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Foresight Panels: Level 3 Frontier & The Art of Becoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel 1: Level 3 Frontier Degree Redesign */}
        <div className="bg-gradient-to-br from-purple-50 via-indigo-50/40 to-white dark:from-purple-950/40 dark:via-indigo-950/30 dark:to-slate-900 border border-purple-200 dark:border-purple-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-600 text-white shadow-xs">
              Level 3 Frontier
            </span>
            <span className="text-xs font-mono font-semibold text-purple-700 dark:text-purple-300">
              Horizon 3 (3 – 5+ Years)
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 font-display">
            Total Redesign of University Titles: Bachelor & Master Degrees in the AI Thesis Era
          </h3>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            When examining the <strong>Implementation Horizon and Level 3 Frontier</strong>, educational systems must confront a seismic shift: <strong>now that artificial intelligence can make thesis papers, capstones, and dissertations in seconds</strong>, written prose no longer serves as a reliable proxy for individual human capability.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            This means that in the near future, <strong>there will be a brand-new model that we need to create</strong>—replacing static century-old degree titles like Bachelor’s and Master’s with dynamic, unforgeable capability registries, continuous live viva voce oral defenses, applied real-world problem verification, and stackable competency portfolios.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-purple-800 dark:text-purple-300 font-medium">
              • Post-Paper Capability Portfolios
            </span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-purple-800 dark:text-purple-300 font-medium">
              • Live Viva Voce Defenses
            </span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 rounded-md text-purple-800 dark:text-purple-300 font-medium">
              • W3C Verifiable Credentials
            </span>
          </div>
        </div>

        {/* Panel 2: The Art of Becoming - Education of the Whole Human Being */}
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
              Human Development
            </span>
            <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-300">
              Philosophical Core · Trend #27
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 font-display">
            The Art of Becoming: Education of the Whole Human Being
          </h3>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Beyond academic metrics and economic utility lies <strong>The Art of Becoming</strong>—education reconceived as the holistic process of becoming a good, thoughtful, compassionate, and responsible human being. In an automated world, technical knowledge alone is insufficient.
          </p>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Grounding pedagogy in the <strong>Human Development Approach (Sen & Nussbaum)</strong> and the classical tradition of <em>Bildung</em>, modern learning design must value character, moral courage, relational empathy, and ethical stewardship as much as academic achievement—nurturing the qualities that make us deeply human.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 rounded-md text-emerald-800 dark:text-emerald-300 font-medium">
              • Character & Ethical Formation
            </span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 rounded-md text-emerald-800 dark:text-emerald-300 font-medium">
              • Beyond Academic Metrics
            </span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 rounded-md text-emerald-800 dark:text-emerald-300 font-medium">
              • Civic & Relational Flourishing
            </span>
          </div>
        </div>
      </div>

      {/* Summary Matrix Section directly from Research Paper */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 transition-colors duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider">
              <TableIcon className="w-4 h-4 text-indigo-600" />
              <span>Evidence-Based Synthesis Matrix</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              Comparative Impact & Empirical Metrics
            </h2>
          </div>
          <span className="text-xs text-slate-500">10 Domains Evaluated</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-700 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Primary Driver</th>
                <th className="py-3 px-4">Core Evidence / Impact</th>
                <th className="py-3 px-4 text-right">Key Empirical Metric</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {CATEGORIES.map((cat, idx) => (
                <tr
                  key={cat.id}
                  className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                    cat.isNewlyAddedHighlight ? 'bg-amber-50/30' : ''
                  }`}
                  onClick={() => onSelectCategoryInMap(cat.id)}
                >
                  <td className="py-3.5 px-4 font-semibold text-slate-900 flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.accentHex }}
                    />
                    <span>{cat.shortTitle}</span>
                    {cat.isNewlyAddedHighlight && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                        Priority
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs">{cat.primaryDriver}</td>
                  <td className="py-3.5 px-4 text-slate-600">{cat.coreEvidence}</td>
                  <td className="py-3.5 px-4 text-right font-mono font-medium text-indigo-700 tabular-nums">
                    {cat.keyMetric || 'Documented'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The 10 Categories Deep Dive */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              The 10 Comprehensive Categories & Learning Science Rationale
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Curated by Barbara Anna Zielonka. Explore instructional architectures, theoretical frameworks, and documented trends.
            </p>
          </div>

          {/* Toggle between All 10 and 4 Priority Highlights */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 10 Categories
            </button>
            <button
              onClick={() => setFilterMode('priority')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                filterMode === 'priority'
                  ? 'bg-white text-amber-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Star className="w-3 h-3 text-amber-500" />
              <span>4 Critical Additions</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayedCategories.map((cat, index) => {
            const categoryTrends = TRENDS.filter((t) => t.categoryId === cat.id);
            return (
              <div
                key={cat.id}
                className={`bg-white border rounded-xl p-6 transition-all flex flex-col justify-between shadow-xs space-y-5 ${
                  cat.isNewlyAddedHighlight
                    ? 'border-amber-300 ring-1 ring-amber-100'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: cat.bgHex,
                          color: cat.accentHex,
                          border: `1px solid ${cat.borderHex}`,
                        }}
                      >
                        {getIcon(cat.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-slate-400">
                            Category 0{CATEGORIES.findIndex((c) => c.id === cat.id) + 1}
                          </span>
                          {cat.isNewlyAddedHighlight && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded">
                              Critical Addition
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-700 italic">
                    "{cat.tagline}"
                  </p>

                  {/* Primary Driver & Evidence Strip */}
                  <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                      <span>Primary Driver:</span>
                      <span className="text-slate-800 lowercase first-letter:uppercase font-medium">
                        {cat.primaryDriver}
                      </span>
                    </div>
                    <div className="text-slate-700 leading-relaxed">
                      <strong>Empirical Evidence:</strong> {cat.coreEvidence}
                    </div>
                  </div>

                  {/* Why this category is essential */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Learning Science Rationale
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cat.learningScienceRationale}
                    </p>
                  </div>

                  {/* Why it matters to learning design */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Impact on Course & Institutional Design
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cat.whyItMatters}
                    </p>
                  </div>

                  {/* Theorists & Frameworks */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Theoretical Foundations & Frameworks:
                    </span>
                    <div className="text-xs text-slate-500 space-y-0.5">
                      {cat.keyTheoristsAndFrameworks.map((theorist, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                          <span>{theorist}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Trends Sample */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Documented Trends ({categoryTrends.length}):
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                      {categoryTrends.map((trend, idx) => (
                        <span key={trend.id}>
                          <span className="font-medium text-slate-800">{trend.title}</span>
                          {idx < categoryTrends.length - 1 && (
                            <span className="text-slate-300 ml-1.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {categoryTrends.length} documented trends
                  </span>
                  <button
                    onClick={() => onSelectCategoryInMap(cat.id)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Category in Map</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
