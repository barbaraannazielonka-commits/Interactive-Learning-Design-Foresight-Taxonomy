import React from 'react';
import { Bookmark, Sparkles, Sun, Moon, Type } from 'lucide-react';

interface HeaderProps {
  activeTab: 'rationale' | 'map' | 'radar' | 'matrix' | 'sources' | 'synthesizer';
  setActiveTab: (tab: 'rationale' | 'map' | 'radar' | 'matrix' | 'sources' | 'synthesizer') => void;
  savedCount: number;
  onOpenSavedModal: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  fontSize: 'normal' | 'large' | 'xl';
  onChangeFontSize: (size: 'normal' | 'large' | 'xl') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onOpenSavedModal,
  isDarkMode,
  onToggleDarkMode,
  fontSize,
  onChangeFontSize,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 h-16">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => setActiveTab('rationale')}
            className="text-left group flex items-center gap-2.5 shrink-0 focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
              BZ
            </div>
            <span className="text-sm lg:text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors whitespace-nowrap truncate max-w-[200px] sm:max-w-sm lg:max-w-none shrink-0">
              Interactive Learning Design & Foresight Taxonomy · Barbara Anna Zielonka
            </span>
          </button>

          {/* Zone 2: 6 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => setActiveTab('rationale')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeTab === 'rationale'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Taxonomy Rationale
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeTab === 'map'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Interactive Map
            </button>
            <button
              onClick={() => setActiveTab('radar')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeTab === 'radar'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Horizon Radar
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeTab === 'matrix'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Trends Explorer
            </button>
            <button
              onClick={() => setActiveTab('sources')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeTab === 'sources'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sources
            </button>
            <button
              onClick={() => setActiveTab('synthesizer')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'synthesizer'
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Synthesizer</span>
            </button>
          </nav>

          {/* Zone 3: Controls (Font Sizing, Dark Mode, Saved Trends) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Font Size Adjuster for Readability */}
            <div
              className="flex items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5 text-xs"
              title="Adjust text size for easier reading"
            >
              <span className="sr-only">Adjust text size</span>
              <button
                type="button"
                onClick={() => onChangeFontSize('normal')}
                className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  fontSize === 'normal'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title="Default text size"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => onChangeFontSize('large')}
                className={`px-2 py-1 rounded text-[12px] font-bold transition-colors cursor-pointer ${
                  fontSize === 'large'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title="Larger text size (+15%)"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => onChangeFontSize('xl')}
                className={`px-2 py-1 rounded text-[13px] font-extrabold transition-colors cursor-pointer ${
                  fontSize === 'xl'
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title="Extra large text size (+30%)"
              >
                A++
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Saved Trends */}
            <button
              onClick={onOpenSavedModal}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <Bookmark className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="hidden sm:inline">Saved</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.2 bg-indigo-600 text-white rounded text-[10px] font-bold">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav row */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-x-auto text-xs font-medium text-slate-600 dark:text-slate-300">
        <button
          onClick={() => setActiveTab('rationale')}
          className={`px-2 py-1 whitespace-nowrap ${
            activeTab === 'rationale' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
          }`}
        >
          Rationale
        </button>
        <button
          onClick={() => setActiveTab('map')}
          className={`px-2 py-1 whitespace-nowrap ${
            activeTab === 'map' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
          }`}
        >
          Map
        </button>
        <button
          onClick={() => setActiveTab('radar')}
          className={`px-2 py-1 whitespace-nowrap ${
            activeTab === 'radar' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
          }`}
        >
          Radar
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-2 py-1 whitespace-nowrap ${
            activeTab === 'matrix' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
          }`}
        >
          Explorer
        </button>
        <button
          onClick={() => setActiveTab('sources')}
          className={`px-2 py-1 whitespace-nowrap ${
            activeTab === 'sources' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
          }`}
        >
          Sources
        </button>
        <button
          onClick={() => setActiveTab('synthesizer')}
          className={`px-2 py-1 whitespace-nowrap ${
            activeTab === 'synthesizer' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
          }`}
        >
          Synthesizer
        </button>
      </div>
    </header>
  );
};
