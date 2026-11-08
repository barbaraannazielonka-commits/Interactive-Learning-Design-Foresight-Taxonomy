export type CategoryId =
  | 'ai-analytics'
  | 'learning-science-assessment'
  | 'lifelong-microcredentials'
  | 'immersive-gamification'
  | 'stem-cybersecurity'
  | 'global-mobility'
  | 'climate-sustainability'
  | 'inclusive-udl'
  | 'cyber-physical-spaces'
  | 'wellbeing-sustainability';

export type HorizonLevel = 'Horizon 1: Adopted' | 'Horizon 2: Accelerating' | 'Horizon 3: Frontier';

export type Sector = 'K-12' | 'Higher Ed' | 'Corporate L&D' | 'Informal/Lifelong';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortTitle: string;
  tagline: string;
  color: string;
  accentHex: string;
  bgHex: string;
  borderHex: string;
  iconName: string;
  primaryDriver: string;
  coreEvidence: string;
  keyMetric?: string;
  isNewlyAddedHighlight?: boolean;
  learningScienceRationale: string;
  whyItMatters: string;
  keyTheoristsAndFrameworks: string[];
}

export interface Trend {
  id: string;
  title: string;
  shortTitle: string;
  radarIndex: number;
  categoryId: CategoryId;
  horizon: HorizonLevel;
  sectors: Sector[];
  oneLiner: string;
  pedagogicalRationale: string;
  learningTheories: string[];
  instructionalDesignPractice: string[];
  pitfallsAndEthics: string[];
  sectorReadiness: {
    k12: 'High' | 'Medium' | 'Emerging';
    higherEd: 'High' | 'Medium' | 'Emerging';
    corporateLnd: 'High' | 'Medium' | 'Emerging';
  };
  connectedTrendIds: string[];
  coordinates: {
    x: number; // percentage in map (0-100)
    y: number; // percentage in map (0-100)
  };
  empiricalMetric?: string;
}

export interface TrendConnection {
  sourceId: string;
  targetId: string;
  relationship: string;
}

export interface SynthesisBlueprint {
  title: string;
  selectedTrends: string[];
  targetAudience: string;
  coreObjective: string;
  pedagogicalFramework: string;
  learnerJourney: {
    phase: string;
    description: string;
    activities: string[];
  }[];
  assessmentStrategy: string;
  learningDesignerNote: string;
}
