import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryRationaleView } from './components/CategoryRationaleView';
import { ConstellationMap } from './components/ConstellationMap';
import { HorizonRadar } from './components/HorizonRadar';
import { TrendsMatrix } from './components/TrendsMatrix';
import { TrendDetailDrawer } from './components/TrendDetailDrawer';
import { ExperienceSynthesizer } from './components/ExperienceSynthesizer';
import { SavedBriefModal } from './components/SavedBriefModal';
import { BibliographyView } from './components/BibliographyView';
import { CategoryId, Trend } from './types';
import { TRENDS } from './data/educationalTrends';
import { APA_SOURCES } from './data/apaSources';

export default function App() {
  const [activeTab, setActiveTab] = useState<'rationale' | 'map' | 'radar' | 'matrix' | 'sources' | 'synthesizer'>('rationale');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null);
  const [sourcesInitialCategory, setSourcesInitialCategory] = useState<CategoryId | 'all'>('all');
  const [synthesizerInitialTrendId, setSynthesizerInitialTrendId] = useState<string | null>(null);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState<boolean>(false);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('edutrends_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Font size scale state: 'normal' | 'large' | 'xl'
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>(() => {
    try {
      const stored = localStorage.getItem('edutrends_font_size');
      if (stored === 'large' || stored === 'xl' || stored === 'normal') {
        return stored;
      }
    } catch {
      // ignore
    }
    return 'normal';
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('edutrends_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('edutrends_theme', 'light');
      }
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      document.documentElement.classList.remove('font-size-large', 'font-size-xl');
      if (fontSize === 'large') {
        document.documentElement.classList.add('font-size-large');
      } else if (fontSize === 'xl') {
        document.documentElement.classList.add('font-size-xl');
      }
      localStorage.setItem('edutrends_font_size', fontSize);
    } catch {
      // ignore
    }
  }, [fontSize]);

  // Initialize saved trends from localStorage or default selection
  const [savedTrendIds, setSavedTrendIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('edutrends_saved');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      // ignore
    }
    return ['ai-socratic-tutors', 'phenomenon-inquiry', 'udl-architecture'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('edutrends_saved', JSON.stringify(savedTrendIds));
    } catch (e) {
      // ignore
    }
  }, [savedTrendIds]);

  const handleToggleSaveTrend = (trendId: string) => {
    setSavedTrendIds((prev) =>
      prev.includes(trendId) ? prev.filter((id) => id !== trendId) : [...prev, trendId]
    );
  };

  const handleSelectCategoryInMap = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    setActiveTab('map');
  };

  const handleViewSources = (categoryId?: CategoryId) => {
    if (categoryId) {
      setSourcesInitialCategory(categoryId);
    } else {
      setSourcesInitialCategory('all');
    }
    setSelectedTrend(null);
    setActiveTab('sources');
  };

  const handleSendToSynthesizer = (trendId: string) => {
    setSynthesizerInitialTrendId(trendId);
    setSelectedTrend(null);
    setActiveTab('synthesizer');
  };

  const handleSynthesizeSaved = (trendIds: string[]) => {
    if (trendIds.length > 0) {
      setSynthesizerInitialTrendId(trendIds[0]);
    }
    setActiveTab('synthesizer');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedTrendIds.length}
        onOpenSavedModal={() => setIsSavedModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeTab === 'rationale' && (
          <CategoryRationaleView
            onSelectCategoryInMap={handleSelectCategoryInMap}
            onExploreInSynthesizer={() => setActiveTab('synthesizer')}
            onExploreSources={handleViewSources}
          />
        )}

        {activeTab === 'map' && (
          <ConstellationMap
            onSelectTrend={(trend) => setSelectedTrend(trend)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {activeTab === 'radar' && (
          <HorizonRadar onSelectTrend={(trend) => setSelectedTrend(trend)} />
        )}

        {activeTab === 'matrix' && (
          <TrendsMatrix
            onSelectTrend={(trend) => setSelectedTrend(trend)}
            savedTrendIds={savedTrendIds}
            onToggleSaveTrend={handleToggleSaveTrend}
            onSendToSynthesizer={handleSendToSynthesizer}
          />
        )}

        {activeTab === 'sources' && (
          <BibliographyView initialCategoryId={sourcesInitialCategory} />
        )}

        {activeTab === 'synthesizer' && (
          <ExperienceSynthesizer
            initialTrendId={synthesizerInitialTrendId}
            onSelectTrend={(trend) => setSelectedTrend(trend)}
          />
        )}
      </main>

      {/* Slide-in Detail Drawer */}
      <TrendDetailDrawer
        trend={selectedTrend}
        onClose={() => setSelectedTrend(null)}
        isSaved={selectedTrend ? savedTrendIds.includes(selectedTrend.id) : false}
        onToggleSave={handleToggleSaveTrend}
        onSelectConnectedTrend={(trend) => setSelectedTrend(trend)}
        onSendToSynthesizer={handleSendToSynthesizer}
        onViewSources={handleViewSources}
      />

      {/* Saved Trends & Strategy Brief Modal */}
      <SavedBriefModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedTrendIds={savedTrendIds}
        onRemoveSaved={handleToggleSaveTrend}
        onClearAll={() => setSavedTrendIds([])}
        onSelectTrend={(trend) => setSelectedTrend(trend)}
        onSynthesizeSaved={handleSynthesizeSaved}
      />

      {/* Quiet, Clean Editorial Footer (Anti-slop compliant) */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-12 text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200">Interactive Learning Design & Foresight Taxonomy</span>
            <span aria-hidden="true">·</span>
            <span>Barbara Anna Zielonka</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <button
              onClick={() => handleViewSources()}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer font-medium"
            >
              Sources ({APA_SOURCES.length} Verified DOIs)
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveTab('rationale')}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Taxonomy Rationale
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
