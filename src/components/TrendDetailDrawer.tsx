import React from 'react';
import { CATEGORIES, TRENDS, TREND_CONNECTIONS } from '../data/educationalTrends';
import { CategoryId, Trend } from '../types';
import {
  X,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  Link2,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

interface TrendDetailDrawerProps {
  trend: Trend | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (trendId: string) => void;
  onSelectConnectedTrend: (trend: Trend) => void;
  onSendToSynthesizer: (trendId: string) => void;
  onViewSources?: (categoryId: CategoryId) => void;
}

export const TrendDetailDrawer: React.FC<TrendDetailDrawerProps> = ({
  trend,
  onClose,
  isSaved,
  onToggleSave,
  onSelectConnectedTrend,
  onSendToSynthesizer,
  onViewSources,
}) => {
  if (!trend) return null;

  const category = CATEGORIES.find((c) => c.id === trend.categoryId);

  // Find connected trends
  const connectedTrends = TRENDS.filter((t) => trend.connectedTrendIds.includes(t.id));

  // Find connection relationships
  const getRelationship = (targetId: string) => {
    const conn = TREND_CONNECTIONS.find(
      (c) =>
        (c.sourceId === trend.id && c.targetId === targetId) ||
        (c.sourceId === targetId && c.targetId === trend.id)
    );
    return conn ? conn.relationship : 'Pedagogically synergistic';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 shadow-2xl h-full overflow-y-auto border-l border-slate-200 dark:border-slate-800 z-10 flex flex-col justify-between text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <div className="p-6 sm:p-8 space-y-6">
          {/* Top Bar inside Drawer */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category?.accentHex || '#4f46e5' }}
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{category?.title}</span>
                <span aria-hidden="true">·</span>
                <span>{trend.horizon}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">
                {trend.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleSave(trend.id)}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={isSaved ? 'Remove from Saved' : 'Save to Brief'}
              >
                {isSaved ? (
                  <BookmarkCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core One-Liner */}
          <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
            "{trend.oneLiner}"
          </div>

          {/* Sector Readiness Matrix */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Institutional Readiness by Sector
            </span>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-white border border-slate-200 p-2.5 rounded-lg text-center space-y-0.5">
                <span className="text-slate-400 block text-[11px]">K-12 Schools</span>
                <span className="font-bold text-slate-800">{trend.sectorReadiness.k12}</span>
              </div>
              <div className="bg-white border border-slate-200 p-2.5 rounded-lg text-center space-y-0.5">
                <span className="text-slate-400 block text-[11px]">Higher Education</span>
                <span className="font-bold text-slate-800">{trend.sectorReadiness.higherEd}</span>
              </div>
              <div className="bg-white border border-slate-200 p-2.5 rounded-lg text-center space-y-0.5">
                <span className="text-slate-400 block text-[11px]">Corporate L&D</span>
                <span className="font-bold text-slate-800">{trend.sectorReadiness.corporateLnd}</span>
              </div>
            </div>
          </div>

          {/* Pedagogical Rationale (The "Why") */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              The Learning Designer's Rationale
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/40 p-3.5 rounded-lg border border-amber-100">
              {trend.pedagogicalRationale}
            </p>
          </div>

          {/* Learning Theories */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              Theoretical Foundations & Cognitive Science
            </span>
            <div className="space-y-1.5">
              {trend.learningTheories.map((theory, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className="font-semibold text-slate-800">{theory}</span>
                </div>
              ))}
            </div>
            {onViewSources && (
              <button
                onClick={() => {
                  onClose();
                  onViewSources(trend.categoryId);
                }}
                className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>View Sources & Active DOIs for this Domain</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>

          {/* Instructional Design Applications */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Instructional Design Application Guide
            </span>
            <div className="space-y-2">
              {trend.instructionalDesignPractice.map((practice, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-700 space-y-1"
                >
                  <span className="font-bold text-slate-800">Action Step 0{idx + 1}:</span>
                  <p className="leading-relaxed">{practice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pitfalls & Ethical Considerations */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              Pitfalls, Hype vs Reality & Ethical Friction
            </span>
            <div className="space-y-1.5">
              {trend.pitfallsAndEthics.map((pitfall, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-rose-900 bg-rose-50/60 p-2.5 rounded-lg border border-rose-100"
                >
                  <span className="text-rose-500 font-bold shrink-0">·</span>
                  <span className="leading-relaxed">{pitfall}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Trends in the Map */}
          {connectedTrends.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Link2 className="w-4 h-4 text-slate-500" />
                Cross-Pollinating Trends ({connectedTrends.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {connectedTrends.map((connTrend) => {
                  const connCat = CATEGORIES.find((c) => c.id === connTrend.categoryId);
                  return (
                    <button
                      key={connTrend.id}
                      onClick={() => onSelectConnectedTrend(connTrend)}
                      className="text-left p-2.5 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 transition-colors space-y-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: connCat?.accentHex || '#4f46e5' }}
                        />
                        <span>{connCat?.shortTitle}</span>
                      </div>
                      <div className="font-semibold text-xs text-slate-800 leading-snug">
                        {connTrend.title}
                      </div>
                      <div className="text-[10px] text-slate-500 italic">
                        {getRelationship(connTrend.id)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => onToggleSave(trend.id)}
            className="px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> : <Bookmark className="w-4 h-4" />}
            <span>{isSaved ? 'Saved in Brief' : 'Save to Brief'}</span>
          </button>

          <button
            onClick={() => onSendToSynthesizer(trend.id)}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Co-Design in Synthesizer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
