import React, { useState } from 'react';
import { CATEGORIES, TRENDS } from '../data/educationalTrends';
import { Trend } from '../types';
import { X, Copy, Check, Trash2, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

interface SavedBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedTrendIds: string[];
  onRemoveSaved: (trendId: string) => void;
  onClearAll: () => void;
  onSelectTrend: (trend: Trend) => void;
  onSynthesizeSaved: (trendIds: string[]) => void;
}

export const SavedBriefModal: React.FC<SavedBriefModalProps> = ({
  isOpen,
  onClose,
  savedTrendIds,
  onRemoveSaved,
  onClearAll,
  onSelectTrend,
  onSynthesizeSaved,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const savedTrends = TRENDS.filter((t) => savedTrendIds.includes(t.id));

  const handleExportBrief = () => {
    const lines = [
      `# Interactive Learning Design & Foresight Taxonomy - Barbara Anna Zielonka`,
      `Executive Evidence-Based Research & Strategy Brief`,
      `Date: ${new Date().toLocaleDateString()}`,
      `Total Curated Trends: ${savedTrends.length}`,
      '',
      '## Curated Educational Trends & Pedagogical Grounding',
      '',
    ];

    savedTrends.forEach((t, i) => {
      const cat = CATEGORIES.find((c) => c.id === t.categoryId);
      lines.push(`### ${i + 1}. ${t.title}`);
      lines.push(`- **Category**: ${cat?.title}`);
      lines.push(`- **Horizon**: ${t.horizon}`);
      lines.push(`- **Target Sectors**: ${t.sectors.join(', ')}`);
      lines.push(`- **Core Rationale**: ${t.pedagogicalRationale}`);
      lines.push(`- **Learning Theories**: ${t.learningTheories.join(', ')}`);
      lines.push(`- **Instructional Design Recommendations**:`);
      t.instructionalDesignPractice.forEach((p) => lines.push(`  * ${p}`));
      lines.push('');
    });

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 z-10 space-y-6 max-h-[90vh] flex flex-col justify-between transition-colors duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">
              Saved Trends & Strategy Brief ({savedTrends.length})
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Curate your institutional roadmap or course design portfolio.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Saved Trends */}
        <div className="overflow-y-auto space-y-3 pr-1 max-h-[420px]">
          {savedTrends.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <BookOpen className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No trends saved yet</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Click the bookmark icon on any trend card or in the drawer to save it to your strategy brief.
              </p>
            </div>
          ) : (
            savedTrends.map((trend) => {
              const cat = CATEGORIES.find((c) => c.id === trend.categoryId);
              return (
                <div
                  key={trend.id}
                  className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 flex items-start justify-between gap-4"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onSelectTrend(trend);
                    }}
                    className="space-y-1 cursor-pointer flex-1"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: cat?.accentHex || '#4f46e5' }}
                      />
                      <span>{cat?.shortTitle}</span>
                      <span aria-hidden="true">·</span>
                      <span>{trend.horizon.split(':')[0]}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {trend.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      {trend.oneLiner}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveSaved(trend.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-md transition-colors cursor-pointer shrink-0"
                    title="Remove from Saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {savedTrends.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
            >
              Clear All
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onSynthesizeSaved(savedTrends.slice(0, 3).map((t) => t.id));
                }}
                className="px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Synthesize Top 3</span>
              </button>

              <button
                onClick={handleExportBrief}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
                <span>{copied ? 'Copied Strategy Brief' : 'Copy Strategy Brief'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
