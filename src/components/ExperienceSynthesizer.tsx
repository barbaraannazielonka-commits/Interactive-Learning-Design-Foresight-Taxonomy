import React, { useState } from 'react';
import { CATEGORIES, TRENDS, SYNTHESIS_TEMPLATES } from '../data/educationalTrends';
import { Trend, SynthesisBlueprint } from '../types';
import {
  Sparkles,
  Layers,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface ExperienceSynthesizerProps {
  initialTrendId?: string | null;
  onSelectTrend: (trend: Trend) => void;
}

export const ExperienceSynthesizer: React.FC<ExperienceSynthesizerProps> = ({
  initialTrendId,
  onSelectTrend,
}) => {
  const [selectedTrendIds, setSelectedTrendIds] = useState<string[]>(
    initialTrendId ? [initialTrendId] : ['ai-socratic-tutors', 'udl-architecture']
  );
  const [copied, setCopied] = useState(false);

  // Toggle selection
  const handleToggleTrend = (id: string) => {
    if (selectedTrendIds.includes(id)) {
      if (selectedTrendIds.length > 1) {
        setSelectedTrendIds(selectedTrendIds.filter((t) => t !== id));
      }
    } else {
      if (selectedTrendIds.length >= 3) {
        // Replace oldest or keep max 3
        setSelectedTrendIds([...selectedTrendIds.slice(1), id]);
      } else {
        setSelectedTrendIds([...selectedTrendIds, id]);
      }
    }
  };

  const selectedTrends = TRENDS.filter((t) => selectedTrendIds.includes(t.id));

  // Load a preset template
  const handleLoadPreset = (templateKey: string) => {
    const template = SYNTHESIS_TEMPLATES[templateKey];
    if (template) {
      setSelectedTrendIds(template.trendIds);
    }
  };

  // Generate dynamic synthesized blueprint
  const generateBlueprint = (): SynthesisBlueprint => {
    // Check if matching exact preset
    const exactTemplate = Object.values(SYNTHESIS_TEMPLATES).find(
      (tpl) =>
        tpl.trendIds.length === selectedTrendIds.length &&
        tpl.trendIds.every((id: string) => selectedTrendIds.includes(id))
    );

    if (exactTemplate) {
      return exactTemplate as SynthesisBlueprint;
    }

    // Dynamic generation from selected trends
    const trendTitles = selectedTrends.map((t) => t.title);
    const theories = Array.from(new Set(selectedTrends.flatMap((t) => t.learningTheories)));
    const practices = selectedTrends.flatMap((t) => t.instructionalDesignPractice);

    return {
      title: `Synthesized Learning Architecture: ${trendTitles.slice(0, 2).join(' + ')}`,
      selectedTrends: trendTitles,
      targetAudience: 'Higher Education & Advanced Professional Training',
      coreObjective: `Design an authentic, learner-driven experience synthesizing ${trendTitles.join(
        ', '
      )} to cultivate deep conceptual mastery and autonomous critical agency.`,
      pedagogicalFramework: theories.slice(0, 3).join(' · '),
      learnerJourney: [
        {
          phase: 'Phase 1: Diagnostic Ingestion & Socratic Framing',
          description:
            'Learners encounter authentic ill-structured problems and establish initial conceptual models.',
          activities: [
            practices[0] || 'Frame the learning unit around an unresolved driving inquiry question.',
            practices[2] || 'Provide multi-modal entry points catering to diverse learner profiles.',
          ],
        },
        {
          phase: 'Phase 2: Iterative Co-Creation & Continuous Scaffolding',
          description:
            'Learners work through deliberate practice cycles with rapid diagnostic feedback loops.',
          activities: [
            practices[1] || 'Embed formative diagnostic checkpoints every 48 hours to recalibrate pacing.',
            practices[3] || 'Maintain an active process journal documenting rationale and revisions.',
          ],
        },
        {
          phase: 'Phase 3: Authentic Performance & Community Showcase',
          description:
            'Summative evaluation based on verifiable artifact defense rather than rote testing.',
          activities: [
            'Conduct a structured peer defense viva with industry or community panelists.',
            'Publish verifiable digital artifacts to open digital competency portfolios.',
          ],
        },
      ],
      assessmentStrategy:
        'Holistic Triangulation: 40% Continuous Process Journaling & Revision Logs, 30% Socratic Viva Defense, 30% Authentic Artifact Rubric. No standardized multiple-choice exams.',
      learningDesignerNote:
        'Combining these trends creates a balanced cognitive equilibrium: technological agility is grounded by human-centered inclusion, while rigorous assessment prevents cognitive offloading.',
    };
  };

  const currentBlueprint = generateBlueprint();

  const handleCopyMarkdown = () => {
    const md = `# ${currentBlueprint.title}
**Target Audience**: ${currentBlueprint.targetAudience}
**Synthesized Trends**: ${currentBlueprint.selectedTrends.join(' | ')}
**Theoretical Framework**: ${currentBlueprint.pedagogicalFramework}

## Core Learning Objective
${currentBlueprint.coreObjective}

## Learner Journey Architecture
${currentBlueprint.learnerJourney
  .map(
    (step) => `### ${step.phase}
${step.description}
${step.activities.map((a) => `- ${a}`).join('\n')}`
  )
  .join('\n\n')}

## Assessment Strategy
${currentBlueprint.assessmentStrategy}

## Learning Designer's Critical Note
${currentBlueprint.learningDesignerNote}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Intro */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span>Instructional Design Studio</span>
            <span aria-hidden="true">·</span>
            <span>Trend Co-Design Sandbox</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">
            Learning Experience Blueprint Synthesizer
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Select 2 to 3 educational trends across categories to co-design an integrated course unit, syllabus architecture, and authentic assessment rubric.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Exemplary Presets:</span>
          <button
            onClick={() => handleLoadPreset('ai-udl-portfolio')}
            className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            AI + UDL + Portfolios
          </button>
          <button
            onClick={() => handleLoadPreset('phenomenon-cbl-systems')}
            className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            Phenomenon + CBL + Systems
          </button>
        </div>
      </div>

      {/* Main Grid: Picker (Left) & Blueprint Document (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Trend Selector Deck (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-5 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Selected Trends ({selectedTrendIds.length}/3)
              </span>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">
                Pick up to 3 trends to combine.
              </p>
            </div>
            {selectedTrendIds.length > 1 && (
              <button
                onClick={() => setSelectedTrendIds(['ai-socratic-tutors'])}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Grouped by Category */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
            {CATEGORIES.map((cat) => {
              const catTrends = TRENDS.filter((t) => t.categoryId === cat.id);
              return (
                <div key={cat.id} className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.accentHex }}
                    />
                    <span>{cat.shortTitle}</span>
                  </div>

                  <div className="space-y-1.5 pl-3 border-l-2 border-slate-100 dark:border-slate-800">
                    {catTrends.map((trend) => {
                      const isSelected = selectedTrendIds.includes(trend.id);
                      return (
                        <button
                          key={trend.id}
                          onClick={() => handleToggleTrend(trend.id)}
                          className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-700 text-indigo-950 dark:text-indigo-200 font-semibold'
                              : 'bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                          }`}
                        >
                          <span className="truncate pr-2">{trend.title}</span>
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-[10px] ${
                              isSelected
                                ? 'bg-indigo-600 text-white font-bold'
                                : 'border border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Synthesized Blueprint (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6 transition-colors duration-200">
          {/* Blueprint Title & Action */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Generated Instructional Architecture
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 font-display">
                {currentBlueprint.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Audience: {currentBlueprint.targetAudience}
              </p>
            </div>

            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 self-start cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied Blueprint</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>
          </div>

          {/* Active Ingredients Tags (Unboxed Anti-slop text) */}
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Synthesized Components:</span>
            <span>{selectedTrends.map((t) => t.title).join(' · ')}</span>
          </div>

          {/* Big Idea / Core Objective */}
          <div className="bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/80 rounded-xl p-4 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Core Pedagogical Objective
            </span>
            <p className="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
              {currentBlueprint.coreObjective}
            </p>
          </div>

          {/* 3-Phase Learner Journey */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              The 3-Phase Learner Journey
            </span>
            <div className="space-y-3">
              {currentBlueprint.learnerJourney.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 space-y-2 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 dark:bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {step.phase}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 italic pl-7">{step.description}</p>
                  <ul className="pl-7 space-y-1.5 text-slate-700 dark:text-slate-300">
                    {step.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Strategy */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Assessment Strategy & Evidence of Mastery
            </span>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700/80">
              {currentBlueprint.assessmentStrategy}
            </p>
          </div>

          {/* Learning Designer's Critical Note */}
          <div className="bg-amber-50/50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 rounded-xl p-4 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Learning Designer's Advisory Note
            </span>
            <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
              {currentBlueprint.learningDesignerNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
