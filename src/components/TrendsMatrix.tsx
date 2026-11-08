import React, { useState } from 'react';
import { CATEGORIES, TRENDS } from '../data/educationalTrends';
import { CategoryId, HorizonLevel, Sector, Trend } from '../types';
import { Search, Bookmark, BookmarkCheck, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface TrendsMatrixProps {
  onSelectTrend: (trend: Trend) => void;
  savedTrendIds: string[];
  onToggleSaveTrend: (trendId: string) => void;
  onSendToSynthesizer: (trendId: string) => void;
}

export const TrendsMatrix: React.FC<TrendsMatrixProps> = ({
  onSelectTrend,
  savedTrendIds,
  onToggleSaveTrend,
  onSendToSynthesizer,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [selectedSector, setSelectedSector] = useState<Sector | 'all'>('all');
  const [selectedHorizon, setSelectedHorizon] = useState<HorizonLevel | 'all'>('all');

  // Filter trends
  const filteredTrends = TRENDS.filter((t) => {
    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchOneLiner = t.oneLiner.toLowerCase().includes(q);
      const matchTheories = t.learningTheories.some((th) => th.toLowerCase().includes(q));
      if (!matchTitle && !matchOneLiner && !matchTheories) return false;
    }

    if (selectedCategory !== 'all' && t.categoryId !== selectedCategory) return false;
    if (selectedSector !== 'all' && !t.sectors.includes(selectedSector)) return false;
    if (selectedHorizon !== 'all' && t.horizon !== selectedHorizon) return false;

    return true;
  });

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Header & Search */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs space-y-4 transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">
              Educational Trends Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Explore documented pedagogical shifts, cognitive frameworks, and instructional applications.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search trends, theories, theorists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Category Segmented Controls */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 items-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Categories ({TRENDS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = TRENDS.filter((t) => t.categoryId === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                style={{
                  backgroundColor: isSelected ? cat.accentHex : undefined,
                }}
              >
                {cat.shortTitle} ({count})
              </button>
            );
          })}
        </div>

        {/* Secondary filters (Sector & Horizon) */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500 dark:text-slate-400">Sector:</span>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value as any)}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 text-slate-800 dark:text-slate-100 font-medium focus:outline-none cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-800">All Sectors</option>
              <option value="K-12" className="dark:bg-slate-800">K-12</option>
              <option value="Higher Ed" className="dark:bg-slate-800">Higher Ed</option>
              <option value="Corporate L&D" className="dark:bg-slate-800">Corporate L&D</option>
              <option value="Informal/Lifelong" className="dark:bg-slate-800">Lifelong</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500 dark:text-slate-400">Horizon:</span>
            <select
              value={selectedHorizon}
              onChange={(e) => setSelectedHorizon(e.target.value as any)}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 text-slate-800 dark:text-slate-100 font-medium focus:outline-none cursor-pointer"
            >
              <option value="all" className="dark:bg-slate-800">All Horizons</option>
              <option value="Horizon 1: Adopted" className="dark:bg-slate-800">Horizon 1: Adopted</option>
              <option value="Horizon 2: Accelerating" className="dark:bg-slate-800">Horizon 2: Accelerating</option>
              <option value="Horizon 3: Frontier" className="dark:bg-slate-800">Horizon 3: Frontier</option>
            </select>
          </div>

          <span className="text-slate-400 dark:text-slate-500 ml-auto">
            Showing <strong className="text-slate-700 dark:text-slate-200">{filteredTrends.length}</strong> matching trends
          </span>
        </div>
      </div>

      {/* Grid of Trends Cards */}
      {filteredTrends.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-12 text-center space-y-3 transition-colors duration-200">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">No matching educational trends found</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Try adjusting your search query or reset filter selections.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedSector('all');
              setSelectedHorizon('all');
            }}
            className="px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-lg transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTrends.map((trend) => {
            const cat = CATEGORIES.find((c) => c.id === trend.categoryId);
            const isSaved = savedTrendIds.includes(trend.id);

            return (
              <div
                key={trend.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Category unboxed metadata line (Anti-slop zero-pill rule) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: cat?.accentHex || '#6366f1' }}
                      />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{cat?.shortTitle}</span>
                      <span aria-hidden="true">·</span>
                      <span>{trend.horizon.split(':')[0]}</span>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveTrend(trend.id);
                      }}
                      title={isSaved ? 'Remove from Saved' : 'Save Trend'}
                      className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 cursor-pointer transition-colors"
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectTrend(trend)}
                    className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
                  >
                    {trend.title}
                  </h3>

                  {/* One-Liner */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {trend.oneLiner}
                  </p>

                  {/* Key Theories unboxed metadata */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 block">Theories & Frameworks:</span>
                    <div className="text-slate-600 dark:text-slate-400">
                      {trend.learningTheories.slice(0, 2).join(' · ')}
                    </div>
                  </div>

                  {/* Sectors unboxed */}
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Applicable:</span>
                    <span>{trend.sectors.join(' / ')}</span>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onSendToSynthesizer(trend.id)}
                    className="text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                    <span>Synthesize</span>
                  </button>

                  <button
                    onClick={() => onSelectTrend(trend)}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
