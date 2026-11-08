import React, { useState } from 'react';
import { APA_SOURCES, ApaSource, formatApaCitation } from '../data/apaSources';
import { CATEGORIES } from '../data/educationalTrends';
import { CategoryId } from '../types';
import {
  Search,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Filter,
  Download,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface BibliographyViewProps {
  initialCategoryId?: CategoryId | 'all';
}

export const BibliographyView: React.FC<BibliographyViewProps> = ({
  initialCategoryId = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategoryId);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  // Filter sources
  const filteredSources = APA_SOURCES.filter((source) => {
    if (selectedCategory !== 'all' && source.categoryId !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchAuthors = source.authors.toLowerCase().includes(q);
      const matchTitle = source.title.toLowerCase().includes(q);
      const matchPub = source.publication.toLowerCase().includes(q);
      const matchYear = source.year.toString().includes(q);
      const matchAnnotation = source.annotation.toLowerCase().includes(q);
      if (!matchAuthors && !matchTitle && !matchPub && !matchYear && !matchAnnotation) {
        return false;
      }
    }
    return true;
  });

  const handleCopySingle = (source: ApaSource) => {
    const citation = formatApaCitation(source);
    navigator.clipboard.writeText(citation);
    setCopiedId(source.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const citations = filteredSources
      .map((s, idx) => `${idx + 1}. ${formatApaCitation(s)}\n   Annotation: ${s.annotation}`)
      .join('\n\n');
    const header = `# Interactive Learning Design & Foresight Taxonomy - Research Sources\nCurated by Barbara Anna Zielonka\nTotal Verified Sources: ${filteredSources.length}\n\n`;
    navigator.clipboard.writeText(header + citations);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleDownloadTxt = () => {
    const citations = filteredSources
      .map((s, idx) => `${idx + 1}. ${formatApaCitation(s)}\n   Annotation: ${s.annotation}\n   Key Finding: ${s.keyFinding}`)
      .join('\n\n');
    const header = `Interactive Learning Design & Foresight Taxonomy\nComprehensive Research Sources\nCurated by Barbara Anna Zielonka\nVerified Active DOIs & URLs\n\n`;
    const blob = new Blob([header + citations], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Learning_Design_Taxonomy_Sources.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 transition-colors duration-200">
        <div className="max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Rigor & Empirical Evidence</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 dark:text-slate-400">Barbara Anna Zielonka</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display text-balance">
            Comprehensive Sources & Evidence Base
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every category and trend in this taxonomy is grounded in peer-reviewed cognitive science, international policy treaties, and empirical learning science research.
          </p>
        </div>

        {/* Global Stats & Export Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div>
              <strong className="text-slate-900 dark:text-slate-100 font-bold text-sm">{APA_SOURCES.length}</strong> Peer-Reviewed Sources
            </div>
            <span aria-hidden="true">·</span>
            <div>
              <strong className="text-slate-900 dark:text-slate-100 font-bold text-sm">10</strong> Evidence Domains
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownloadTxt}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Download (.txt)</span>
            </button>
            <button
              onClick={handleCopyAll}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied All ({filteredSources.length})</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white" />
                  <span>Copy All Sources</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Filter Deck & Search */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4 transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Filter by Research Domain
            </span>
            <span className="text-xs text-slate-400">
              ({filteredSources.length} of {APA_SOURCES.length} sources visible)
            </span>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search author, title, year, journal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Category Segmented Buttons */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 items-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All 10 Domains ({APA_SOURCES.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = APA_SOURCES.filter((s) => s.categoryId === cat.id).length;
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
      </div>

      {/* Sources List */}
      <div className="space-y-4">
        {filteredSources.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-12 text-center space-y-3">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No sources match your criteria</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Try adjusting your search query or clear domain filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-lg transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredSources.map((source, index) => {
            const category = CATEGORIES.find((c) => c.id === source.categoryId);
            const isCopied = copiedId === source.id;

            return (
              <div
                key={source.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 sm:p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs space-y-3 group"
              >
                {/* Meta header line */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: category?.accentHex || '#4f46e5' }}
                    />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{category?.title}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-400 dark:text-slate-500">Ref #{index + 1}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopySingle(source)}
                      className="px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1 cursor-pointer border border-slate-200 dark:border-slate-700"
                      title="Copy Citation"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>

                    <a
                      href={source.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-md transition-colors flex items-center gap-1 border border-indigo-200 dark:border-indigo-800"
                    >
                      <span>Visit Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Primary Citation */}
                <div className="text-xs sm:text-sm text-slate-900 dark:text-slate-100 leading-relaxed font-serif pl-4 border-l-2 border-indigo-300 dark:border-indigo-600">
                  <span className="font-semibold">{source.authors}</span> ({source.year}).{' '}
                  <span className="italic">{source.title}</span>.{' '}
                  <span>{source.publication}</span>.{' '}
                  <a
                    href={source.doiOrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline break-all font-mono text-xs"
                  >
                    {source.doiOrUrl}
                  </a>
                </div>

                {/* Key Empirical Finding */}
                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-lg p-3 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Empirical Finding / Metric</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {source.keyFinding}
                  </p>
                </div>

                {/* Annotation & Pedagogical Relevance */}
                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block text-[11px] uppercase tracking-wider">
                    Learning Design Relevance:
                  </span>
                  <p>{source.annotation}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
