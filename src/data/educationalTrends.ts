import { CategoryInfo, Trend, TrendConnection } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'ai-analytics',
    title: 'Artificial Intelligence, Data Analytics & Personalization',
    shortTitle: 'AI & Analytics',
    tagline: 'Intelligent 1-on-1 tutoring, predictive retention analytics, and teacher administrative relief.',
    color: 'violet',
    accentHex: '#7c3aed',
    bgHex: '#f5f3ff',
    borderHex: '#ddd6fe',
    iconName: 'Cpu',
    primaryDriver: 'Generative AI & Predictive Machine Learning',
    coreEvidence: 'Double learning gains via adaptive AI tutors; 5–6 hrs/week saved on educator grading and prep.',
    keyMetric: '2x Learning Gain · 6 hrs/wk Saved',
    learningScienceRationale:
      "Domain-specific AI tutoring platforms deploy real-time analytics to adapt pacing and difficulty to individual cognitive schemas. Empirical evaluations demonstrate that adaptive tutoring nearly doubles learning gains compared to static digital instruction while saving educators 5–6 hours weekly on administrative overhead.",
    whyItMatters:
      'Shifts educational operations from one-size-fits-all batch delivery to precision scaffolding, freeing educators from mechanical grading to focus on socio-emotional mentorship and complex Socratic facilitation.',
    keyTheoristsAndFrameworks: [
      "Bloom's 2-Sigma Mastery Tutoring (1984)",
      'Puentedura SAMR Augmentation Framework',
      'Cognitive Tutoring Systems (Anderson)',
      'Learning Analytics Readiness Model',
    ],
  },
  {
    id: 'learning-science-assessment',
    title: 'Evidence-Based Learning Science & Assessment Shifts',
    shortTitle: 'Evidence & Assessment',
    tagline: 'Cognitive memory architectures, retrieval practice, and authentic oral defenses.',
    color: 'indigo',
    accentHex: '#4f46e5',
    bgHex: '#eef2ff',
    borderHex: '#c7d2fe',
    iconName: 'BookOpen',
    primaryDriver: 'Cognitive Science & Memory Research',
    coreEvidence: 'Enhanced long-term retention via retrieval practice; pivot to authentic viva voce performance.',
    keyMetric: 'Double Memory Retention vs. Restudying',
    learningScienceRationale:
      'Classroom practices are migrating from pedagogical intuition to empirical cognitive science. Testing is reconceptualized from an evaluative gatekeeper into an explicit memory consolidation tool (Testing Effect), while AI proliferation forces a pivot toward authentic oral defenses and visible reasoning logs.',
    whyItMatters:
      'Ensures learning design is grounded in how the human brain actually encodes and transfers knowledge, rendering cheating obsolete through process-oriented viva voce assessments.',
    keyTheoristsAndFrameworks: [
      'Roediger & Karpicke Testing Effect',
      'Bjork Desirable Difficulties & Interleaving',
      'Wiggins & McTighe Backward Design (UbD)',
      'Schön Reflective Practitioner & Viva Voce',
    ],
  },
  {
    id: 'lifelong-microcredentials',
    title: 'Lifelong Learning, Micro-Credentials & Hybrid Pathways',
    shortTitle: 'Lifelong Credentials',
    tagline: 'Unbundled digital badges, modular skill certification, and workforce agility.',
    color: 'teal',
    accentHex: '#0d9488',
    bgHex: '#f0fdfa',
    borderHex: '#99f6e4',
    iconName: 'Award',
    primaryDriver: 'Accelerated Labor Market Skill Turnover',
    coreEvidence: 'Proliferation of verified digital badges, stackable certificates, and hybrid adult degree pathways.',
    keyMetric: '3-Year Skill Half-Life',
    learningScienceRationale:
      'With technical skill half-lives collapsing to under three years, traditional linear four-year degrees are being augmented by stackable micro-credentials, digital badges (Open Badges 3.0), and blended learning frameworks designed for non-traditional and working adult learners.',
    whyItMatters:
      'Dismantles monolithic credentialing monopolies, allowing learners to rapidly upskill and prove discrete competencies directly to global industry registries.',
    keyTheoristsAndFrameworks: [
      'Spady Competency-Based Education (CBE)',
      'Biggs Constructive Alignment',
      'Open Badges 3.0 & W3C Verifiable Credentials',
      'Knowles Andragogy & Adult Learning',
    ],
  },
  {
    id: 'immersive-gamification',
    title: 'Immersive Technologies & Gamification',
    shortTitle: 'Immersive & Games',
    tagline: 'Spatial VR procedural training, digital twins, and epistemic game dynamics.',
    color: 'purple',
    accentHex: '#9333ea',
    bgHex: '#faf5ff',
    borderHex: '#e9d5ff',
    iconName: 'Gamepad2',
    primaryDriver: 'AR/VR Spatial Fidelity & Motivation Mechanics',
    coreEvidence: 'Safe procedural simulation in high-risk disciplines; elevated retention via epistemic loops.',
    keyMetric: 'Zero-Risk High-Consequence Practice',
    learningScienceRationale:
      'Virtual and Augmented Reality provide sensorimotor, embodied cognitive presence that 2D video cannot replicate. In medical, aviation, and engineering domains, students practice high-risk procedures in zero-consequence digital sandboxes with embedded game mechanics.',
    whyItMatters:
      'Converts abstract textbook theory into muscle memory and spatial intuition without the prohibitive cost or safety hazards of real physical apparatus.',
    keyTheoristsAndFrameworks: [
      'Barsalou Embodied Cognition',
      'Shaffer Epistemic Games',
      'Gee Principles of Game-Based Learning',
      'Mayer Spatial Contiguity Principle',
    ],
  },
  {
    id: 'stem-cybersecurity',
    title: 'STEM, Digital Literacy & Cybersecurity Awareness',
    shortTitle: 'STEM & Cybersecurity',
    tagline: 'Early computational thinking, deepfake verification, and algorithmic defense.',
    color: 'sky',
    accentHex: '#0284c7',
    bgHex: '#f0f9ff',
    borderHex: '#bae6fd',
    iconName: 'ShieldCheck',
    primaryDriver: 'Technological Proliferation & Synthetic Media Threats',
    coreEvidence: 'Mandatory cybersecurity curricula, early robotics integration, and lateral reading for synthetic media.',
    keyMetric: 'Early K-8 Algorithmic Fluency',
    learningScienceRationale:
      'As technical fluency becomes a prerequisite for civic participation, core curricula are integrating robotics, computational thinking, data privacy ethics, and defense against synthetic media/deepfakes using professional lateral reading heuristics (SIFT method).',
    whyItMatters:
      'Prevents citizens from being passive, vulnerable consumers of algorithmically manufactured reality by teaching deep system-level skepticism and digital hygiene.',
    keyTheoristsAndFrameworks: [
      'Papert Constructionism & Computational Thinking',
      'Wineburg & McGrew Lateral Reading (Stanford History Education Group)',
      'Caulfield SIFT Information Verification',
      'NIST Cybersecurity Workforce Framework',
    ],
  },
  {
    id: 'global-mobility',
    title: 'Global Student Mobility & Cross-Border Education',
    shortTitle: 'Global Mobility',
    tagline: 'Regional educational hubs, transnational dual degrees, and COIL virtual exchanges.',
    color: 'blue',
    accentHex: '#2563eb',
    bgHex: '#eff6ff',
    borderHex: '#bfdbfe',
    iconName: 'Globe',
    isNewlyAddedHighlight: true,
    primaryDriver: 'Geopolitical Visa Realignment & Demographic Expansion in Global South',
    coreEvidence: 'Rapid growth of regional hubs (Singapore, UAE, Malaysia) and COIL virtual exchanges.',
    keyMetric: 'Decentralized Transnational Hubs',
    learningScienceRationale:
      'Shifting visa policies in Western nations combined with rapid demographic growth in the Global South have restructured international education. Higher education is decentralizing into regional transnational hubs (Singapore, UAE, Malaysia) and Collaborative Online International Learning (COIL), democratizing global intercultural competence without physical relocation.',
    whyItMatters:
      'Removes geographic and socio-economic gatekeeping from global education, allowing cross-border collaborative cohorts to co-design solutions to international problems.',
    keyTheoristsAndFrameworks: [
      'Knight Internationalization of Higher Education',
      'SUNY COIL Collaborative Online International Model',
      'Deardorff Intercultural Competence Framework',
      'Transnational Education (TNE) Governance',
    ],
  },
  {
    id: 'climate-sustainability',
    title: 'Ecological & Climate Literacy & Living Labs',
    shortTitle: 'Climate & Living Labs',
    tagline: 'Transdisciplinary carbon literacy, circular economy, and campuses as living laboratories.',
    color: 'emerald',
    accentHex: '#059669',
    bgHex: '#ecfdf5',
    borderHex: '#a7f3d0',
    iconName: 'Leaf',
    isNewlyAddedHighlight: true,
    primaryDriver: 'Planetary Ecological Imperatives & Net-Zero Transition',
    coreEvidence: 'Embedding environmental economics across disciplines and using smart campus energy data as active curriculum.',
    keyMetric: 'Campuses as Active Decarbonization Labs',
    learningScienceRationale:
      'Climate education has evolved from an isolated elective into an integrated cross-disciplinary mandate spanning environmental economics, sustainable engineering, and eco-ethics. Institutional campuses operate as active "Living Labs" where students analyze real-time building energy data, carbon audits, and circular resource flows.',
    whyItMatters:
      'Transforms climate anxiety into proactive scientific agency and civic systems-thinking, preparing graduates for the green industrial transition.',
    keyTheoristsAndFrameworks: [
      'Orr Ecological Literacy & Architecture',
      'Meadows Systems Thinking & Living Systems',
      'UNESCO Education for Sustainable Development (ESD)',
      'Circular Economy Educational Framework (Ellen MacArthur Foundation)',
    ],
  },
  {
    id: 'inclusive-udl',
    title: 'Inclusive Education, Accessibility & Universal Design (UDL)',
    shortTitle: 'Inclusive UDL',
    tagline: 'Neuroinclusive curriculum design, AI assistive tools, and sensory regulation.',
    color: 'rose',
    accentHex: '#e11d48',
    bgHex: '#fff1f2',
    borderHex: '#fecdd3',
    iconName: 'HeartHandshake',
    isNewlyAddedHighlight: true,
    primaryDriver: 'Neurodiversity Equity Demands & AI Assistive Breakthroughs',
    coreEvidence: 'Proactive multiple means of representation; real-time automated sign language and eye-tracking accommodation.',
    keyMetric: 'Universal Accessibility by Inception',
    learningScienceRationale:
      'Grounded in the premise that neurovariability is the human norm, Universal Design for Learning (UDL 3.0) embeds multiple means of engagement, representation, and action/expression into learning architecture from inception. AI-driven assistive tools (automated speech-to-text, sign synthesis, eye-tracking, and dyslexia text modulation) eliminate retrofitted accommodation friction.',
    whyItMatters:
      'Dismantles institutional gatekeeping for neurodivergent (ADHD, autism, dyslexia) and disabled learners, improving learning outcomes and cognitive clarity for the entire student cohort.',
    keyTheoristsAndFrameworks: [
      'CAST Universal Design for Learning (UDL 3.0)',
      'Social Model of Disability (Oliver)',
      'Neurodiversity Paradigm (Singer & Walker)',
      'WCAG 2.2 Accessibility Architecture',
    ],
  },
  {
    id: 'cyber-physical-spaces',
    title: 'Cyber-Physical Learning Spaces & Smart Campuses',
    shortTitle: 'Cyber-Physical Spaces',
    tagline: 'Spatial audio classrooms, telepresence robotics, and 24/7 IoT remote laboratories.',
    color: 'amber',
    accentHex: '#d97706',
    bgHex: '#fffbeb',
    borderHex: '#fde68a',
    iconName: 'Layers',
    isNewlyAddedHighlight: true,
    primaryDriver: 'Dissolution of Physical-Digital Boundaries in Hybrid Education',
    coreEvidence: 'Spatial audio arrays, telepresence robotics, and browser-operated IoT wet labs.',
    keyMetric: '24/7 Cloud Instrumentation Access',
    learningScienceRationale:
      'The boundary between physical classrooms and digital habitats has dissolved into integrated cyber-physical ecosystems. Outfitted with high-definition spatial audio, telepresence robotics, and IoT-connected remote laboratories, smart campuses allow global STEM students to execute live physical experiments on expensive equipment 24/7.',
    whyItMatters:
      'Solves the remote student isolation problem in hybrid classes and democratizes access to multimillion-dollar scientific instrumentation for underfunded community institutions.',
    keyTheoristsAndFrameworks: [
      'Malaguzzi Reggio Emilia Environment as Third Teacher',
      'Beatty HyFlex Design Architecture',
      'Smart Campus IoT Sensor Topologies',
      'Telepresence & Spatial Audio Presence Theory',
    ],
  },
  {
    id: 'wellbeing-sustainability',
    title: 'Socio-Emotional Learning, Wellbeing & Workforce Sustainability',
    shortTitle: 'Wellbeing & Workforce',
    tagline: 'Combating educator burnout, trauma-informed pedagogy, and mental health ecosystems.',
    color: 'pink',
    accentHex: '#db2777',
    bgHex: '#fdf2f8',
    borderHex: '#fbcfe8',
    iconName: 'Smile',
    primaryDriver: 'Global Teacher Shortages & Post-Pandemic Mental Health Crisis',
    coreEvidence: 'Direct correlation between institutional mental health support, educator retention, and academic GPA.',
    keyMetric: 'Direct Retention & GPA Correlation',
    learningScienceRationale:
      'Student and educator wellbeing is recognized as a structural prerequisite for academic success. Chronic stress and toxic cortisol levels inhibit executive functioning and working memory consolidation. Mitigating teacher burnout through administrative AI automation and restorative SEL is critical to institutional survival.',
    whyItMatters:
      'A school cannot educate students if its teachers are exhausted and leaving the profession. Systematic wellbeing infrastructure protects the human core of education.',
    keyTheoristsAndFrameworks: [
      'Immordino-Yang Affective Neuroscience of Learning',
      'Porges Polyvagal Theory of Emotional Regulation',
      'CASEL Socio-Emotional Learning Competencies',
      'Educator Occupational Wellbeing & Burnout Models',
    ],
  },
];

export const TRENDS: Trend[] = [
  // --- 1. AI, Data Analytics & Personalization ---
  {
    id: 'ai-adaptive-tutoring',
    title: 'Intelligent Tutoring & Adaptive Mastery Systems',
    shortTitle: "AI Socratic Tutors",
    radarIndex: 1,
    categoryId: 'ai-analytics',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Domain-specific AI engines adapting pacing and scaffolding dynamically to individual learner needs.',
    pedagogicalRationale:
      'Addresses Bloom’s Two-Sigma Problem by providing scalable 1-on-1 tutoring. Real-time diagnostic telemetry detects misconceptions mid-problem, doubling learning gains compared to static lecture delivery.',
    learningTheories: [
      "Bloom's 2-Sigma Mastery Tutoring",
      "Vygotsky's Zone of Proximal Development",
      'Cognitive Load Theory',
    ],
    instructionalDesignPractice: [
      'Configure AI tutoring agents with Socratic guardrails: prompt self-explanation, never give raw answers.',
      'Surface student error clusters into live educator dashboards for targeted small-group intervention.',
      'Calibrate problem difficulty so learners remain in Csikszentmihalyi’s Flow state (75-85% success rate).',
    ],
    pitfallsAndEthics: [
      'Cognitive atrophy from students over-relying on automated hints without struggling productively.',
      'Algorithmic data harvesting and lack of transparency in closed commercial LLM engines.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['retrieval-practice', 'educator-automation', 'ai-assistive-tech'],
    coordinates: { x: 30, y: 10 },
    empiricalMetric: '2x Learning Gain vs. Non-Adaptive Instruction',
  },
  {
    id: 'educator-automation',
    title: 'Educator AI Automation & Administrative Relief',
    shortTitle: "Teacher Automation",
    radarIndex: 2,
    categoryId: 'ai-analytics',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed'],
    oneLiner:
      'Generative AI workflows saving instructors 5–6 hours weekly on lesson preparation and grading feedback.',
    pedagogicalRationale:
      'Over 60% of educators report chronic exhaustion from administrative paperwork. Offloading preliminary grading, rubric alignment, and differentiated reading levels frees valuable human hours for 1-on-1 student mentorship.',
    learningTheories: [
      'Teacher Agency & Occupational Self-Efficacy (Bandura)',
      'Cognitive Offloading in Instructional Systems',
    ],
    instructionalDesignPractice: [
      'Use LLMs to generate 3 tiered reading variations (lexile levels) for complex primary historical texts.',
      'Deploy AI co-graders for diagnostic preliminary rubric tagging, with mandatory human educator sign-off.',
      'Establish district prompt repositories for standardized IEP differentiation.',
    ],
    pitfallsAndEthics: [
      'Hallucinated rubric evaluations when student writing exhibits non-standard dialect or nuanced creative expression.',
      'Erosion of teacher domain expertise through automated curriculum outsourcing.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'Medium',
    },
    connectedTrendIds: ['teacher-burnout-mitigation', 'ai-adaptive-tutoring'],
    coordinates: { x: 46, y: 10 },
    empiricalMetric: '5–6 Hours Saved per Week per Educator',
  },
  {
    id: 'institutional-predictive-analytics',
    title: 'Predictive Student Retention Analytics',
    shortTitle: "Predictive Analytics",
    radarIndex: 3,
    categoryId: 'ai-analytics',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Institutional machine learning detecting early academic risk indicators to dispatch proactive advising.',
    pedagogicalRationale:
      'Traditional grading fails struggling students post-facto. Predictive models analyze LMS log rhythms, assignment submission latency, and quiz trends to deploy support before failure occurs.',
    learningTheories: ['Student Attrition Model (Tinto)', 'Early Alert & Proactive Advising (Kuh)'],
    instructionalDesignPractice: [
      'Trigger automated, empathetic advisor check-ins when student engagement drops below baseline for 7 days.',
      'Provide students with self-monitoring telemetry dashboards rather than using surveillance secrecy.',
      'Pair analytics flags with free peer-tutoring booking tokens.',
    ],
    pitfallsAndEthics: [
      'Self-fulfilling prophecy bias: stigmatizing learners flagged as "at risk".',
      'Predatory tracking of student behavioral telemetry without explicit informed consent.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['student-mental-health', 'modular-microcredentials'],
    coordinates: { x: 38, y: 22 },
    empiricalMetric: '30% Drop in Early-Semester Course Withdrawals',
  },
  {
    id: 'autonomous-socratic-agents',
    title: 'Autonomous Socratic Agents & Multi-Role Simulations',
    shortTitle: 'Multi-Agent Sims',
    radarIndex: 23,
    categoryId: 'ai-analytics',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D', 'K-12'],
    oneLiner:
      'Autonomous synthetic personas acting as debate adversaries, historical cross-examiners, and unscripted co-learners.',
    pedagogicalRationale:
      'Moving beyond reactive chatbots, autonomous generative multi-agent systems simulate complex social, clinical, and ethical dynamics. Students enter socio-cognitive disequilibrium by cross-examining synthetic witnesses, negotiating geopolitical treaties with AI diplomats, or resolving medical crises with simulated multi-disciplinary teams.',
    learningTheories: [
      'Social Constructivism (Vygotsky)',
      'Cognitive Disequilibrium (Piaget)',
      'Situated Experiential Learning (Lave & Wenger)',
    ],
    instructionalDesignPractice: [
      'Architect roleplay scenarios where AI agents hold conflicting goals and biases, requiring students to synthesize evidence.',
      'Enforce epistemic guardrails preventing agents from simply handing over solutions to learners.',
      'Debrief agent interactions with guided metacognitive reflection on conversational strategies and logical fallacies.',
    ],
    pitfallsAndEthics: [
      'Hallucinations of false historical facts or inaccurate clinical guidelines during unscripted simulations.',
      'Learners developing parasocial over-reliance on synthetic companions rather than human peer collaboration.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['ai-adaptive-tutoring', 'simulated-vr-training', 'authentic-oral-defense'],
    coordinates: { x: 34, y: 14 },
    empiricalMetric: '3.4x Increase in Student Counter-Argumentation Depth',
  },

  // --- 2. Evidence-Based Learning Science & Assessment Shifts ---
  {
    id: 'retrieval-practice',
    title: 'Empirical Retrieval Practice & Spaced Testing',
    shortTitle: "Retrieval Practice",
    radarIndex: 4,
    categoryId: 'learning-science-assessment',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Low-stakes testing utilized as an active memory consolidation engine rather than an evaluation hurdle.',
    pedagogicalRationale:
      'Cognitive science proves that pulling knowledge out of memory (retrieval) produces far stronger neural pathways than repeatedly pushing information in via passive re-reading or lecture review.',
    learningTheories: [
      'Testing Effect (Roediger & Karpicke)',
      'Ebbinghaus Spaced Forgetting Curve',
      'Bjork Desirable Difficulties',
    ],
    instructionalDesignPractice: [
      'Embed 3-question low-stakes retrieval checks at the start of every lecture reviewing prior weeks.',
      'Interleave problem types: mix calculus optimization with integration problems in the same problem set.',
      'Provide immediate targeted elaboration on incorrect answer distractor logic.',
    ],
    pitfallsAndEthics: [
      'Students confusing retrieval testing with high-stakes punitive exams, generating unnecessary anxiety.',
      'Trivializing complex holistic understanding into bite-sized trivia recall.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['authentic-oral-defense', 'ai-adaptive-tutoring'],
    coordinates: { x: 12, y: 25 },
    empiricalMetric: '400% Retention Advantage over Passive Rereading',
  },
  {
    id: 'authentic-oral-defense',
    title: 'Authentic Performance & Viva Voce Defenses',
    shortTitle: "Viva Voce Defense",
    radarIndex: 5,
    categoryId: 'learning-science-assessment',
    horizon: 'Horizon 1: Adopted',
    sectors: ['Higher Ed', 'K-12', 'Corporate L&D'],
    oneLiner:
      'Assessing visible reasoning journeys and oral defenses to render generative AI cheating obsolete.',
    pedagogicalRationale:
      'Because AI can synthesize passing essays in seconds, grading final artifacts is broken. Assessing design drafts, reasoning logs, and live oral viva voce defenses reveals genuine human conceptual mastery.',
    learningTheories: [
      'Wiggins & McTighe Backward Design',
      'Schön Reflective Practitioner',
      'Boud Assessment for Long-Term Learning',
    ],
    instructionalDesignPractice: [
      'Institute 10-minute Socratic oral defense panels where students explain their decisions and pivot points.',
      'Require version-controlled process journals documenting dead ends and AI interaction prompts.',
      'Evaluate student critique and verification of synthetic AI drafts rather than raw writing.',
    ],
    pitfallsAndEthics: [
      'Grading bottlenecks: oral defenses demand significant faculty scheduling time without rubrics.',
      'Performance anxiety for ESL or socially anxious learners requiring multi-modal accommodation.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['cybersecurity-media-literacy', 'modular-microcredentials', 'post-degree-title-redesign'],
    coordinates: { x: 14, y: 38 },
    empiricalMetric: 'Eliminates AI Ghostwriting Vulnerability',
  },
  {
    id: 'human-provenance-c2pa',
    title: 'Cryptographic Learning Provenance & Proof of Human Authorship',
    shortTitle: 'Proof of Authorship',
    radarIndex: 24,
    categoryId: 'learning-science-assessment',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D', 'K-12'],
    oneLiner:
      'Tamper-evident process telemetry and C2PA content credentials authenticating genuine human cognitive discovery.',
    pedagogicalRationale:
      'As AI text detectors fail with high false-positive rates on non-native speakers, assessment must shift from inspecting final artifacts to cryptographically signing the learning journey. By recording version lineage, keystroke telemetry, and structured oral reflections, institutions prove human cognitive effort without surveillance paranoia.',
    learningTheories: [
      'Metacognitive Regulation (Flavell)',
      'Formative Process Assessment (Black & Wiliam)',
      'Epistemic Provenance Theory',
    ],
    instructionalDesignPractice: [
      'Grade the iterative evolution of student work across 5 revision branches rather than evaluating a single static file.',
      'Embed C2PA cryptographically signed metadata certifying verified human-in-the-loop laboratory observations.',
      'Require students to submit their AI prompts, critical evaluations, and synthetic outputs alongside final conclusions.',
    ],
    pitfallsAndEthics: [
      'Over-surveillance that creates hostile learning climates and stifles experimental drafting.',
      'Digital privacy infringements if raw keystroke biometric streams are exposed to commercial third parties.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['authentic-oral-defense', 'post-degree-title-redesign', 'cybersecurity-media-literacy'],
    coordinates: { x: 26, y: 34 },
    empiricalMetric: 'Reduces Assessment Integrity Disputes by 85%',
  },

  // --- 3. Lifelong Learning, Micro-Credentials & Hybrid Pathways ---
  {
    id: 'modular-microcredentials',
    title: 'Modular Micro-Credentials & Digital Badges',
    shortTitle: "Micro-Credentials",
    radarIndex: 6,
    categoryId: 'lifelong-microcredentials',
    horizon: 'Horizon 1: Adopted',
    sectors: ['Higher Ed', 'Corporate L&D', 'Informal/Lifelong'],
    oneLiner:
      'Tamper-proof, competency-aligned skill badges unbundling rigid four-year degree programs.',
    pedagogicalRationale:
      'With technical skills expiring every 3 years, learners require rapid, modular skill verifications (e.g. Cloud Security, Genomic Data Analysis, Ethical AI Auditing) that directly signal mastery to employers.',
    learningTheories: [
      'Constructive Alignment (Biggs)',
      'Competency-Based Education (Spady)',
      'Human Capital & Credential Signaling Theory',
    ],
    instructionalDesignPractice: [
      'Anchor badges in open interoperable registries using Open Badges 3.0 / W3C Verifiable Credentials.',
      'Tie badge awarding to rubric-assessed authentic artifacts embedded directly in metadata links.',
      'Design stackable micro-credential pathways that ladder into full accredited postgraduate degrees.',
    ],
    pitfallsAndEthics: [
      'Badge inflation: low-quality commercial badges muddying trust among employer hiring managers.',
      'Paywalls on professional certifications exacerbating workforce stratification.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['cross-border-digital-mobility', 'authentic-oral-defense'],
    coordinates: { x: 10, y: 48 },
    empiricalMetric: 'Over 60% of Fortune 500 Accept Digital Micro-Credentials',
  },
  {
    id: 'hybrid-adult-pathways',
    title: 'Flexible Hybrid Pathways for Non-Traditional Learners',
    shortTitle: "Hybrid Pathways",
    radarIndex: 7,
    categoryId: 'lifelong-microcredentials',
    horizon: 'Horizon 1: Adopted',
    sectors: ['Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Blended degree architectures engineered specifically for working adults, parents, and career switchers.',
    pedagogicalRationale:
      'Over 40% of higher-ed students are adult non-traditional learners. Flexible asynchronous foundations paired with bi-weekly intensive synchronous cohorts dramatically boost completion rates.',
    learningTheories: ['Knowles Andragogy Principles', 'Moore Transactional Distance Theory'],
    instructionalDesignPractice: [
      'Ensure 100% parity between synchronous workshops and asynchronous interactive problem studios.',
      'Chunk coursework into modular 2-week mastery sprints rather than 16-week monolithic semesters.',
      'Incorporate credit for prior learning (CPL) through portfolio assessment.',
    ],
    pitfallsAndEthics: [
      'Adult learner isolation without intentional peer cohort community architecture.',
      'Digital literacy barriers among older career-switching demographics.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['smart-hybrid-classrooms', 'inclusive-udl-frameworks'],
    coordinates: { x: 11, y: 60 },
    empiricalMetric: '35% Higher Retention for Working Adults',
  },
  {
    id: 'post-degree-title-redesign',
    title: 'Total Redesign of University Titles & Post-Paper Degree Architecture',
    shortTitle: 'Degree Redesign',
    radarIndex: 22,
    categoryId: 'lifelong-microcredentials',
    horizon: 'Horizon 3: Frontier',
    sectors: ['Higher Ed', 'Corporate L&D', 'Informal/Lifelong'],
    oneLiner:
      'Total structural redesign of Bachelor’s and Master’s degrees into dynamic competency models as generative AI commoditizes traditional thesis papers.',
    pedagogicalRationale:
      'Because generative AI models can now produce graduate-level dissertations, literature reviews, and research papers in seconds, traditional written thesis assessments no longer validate human cognition or intellectual capability. The Level 3 Frontier requires a total paradigm shift away from century-old static university titles (Bachelor’s and Master’s) toward dynamic, continuous capability frameworks. Rather than awarding terminal parchment degrees based on written papers, future institutions must certify dynamic problem-solving portfolios, unforgeable live viva voce defenses, and iterative real-world impact.',
    learningTheories: [
      'Competency-Based Education (Spady)',
      'Credential Signaling & Human Capital Theory (Spence)',
      'Authentic Performance Paradigm (Wiggins & McTighe)',
      'Connectivist Continuous Capability Networks (Siemens)',
    ],
    instructionalDesignPractice: [
      'Replace written graduation theses with unforgeable, synchronous oral defenses (viva voce) and live algorithmic or strategic problem-solving labs.',
      'Deconstruct static 3–4 year Bachelor’s and 1–2 year Master’s programs into living digital capability portfolios verified on interoperable credential networks (W3C / Open Badges 3.0).',
      'Shift graduation requirements from "paper completion" to demonstrating measurable real-world community, industry, or clinical impact.',
      'Co-create post-degree titles ("Verified Capability Architect", "Domain Fellow") that reflect continuous real-time mastery rather than obsolete one-time graduation stamps.',
    ],
    pitfallsAndEthics: [
      'Institutional inertia and resistance from centuries-old academic senates and accreditation ministries.',
      'Risk of proprietary corporate credential platforms privatizing higher education standards.',
      'Faculty burnout in conducting synchronous oral defenses without AI-assisted rubrics and calibration.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'Emerging',
      corporateLnd: 'Medium',
    },
    connectedTrendIds: ['modular-microcredentials', 'authentic-oral-defense', 'cross-border-digital-mobility'],
    coordinates: { x: 16, y: 68 },
    empiricalMetric: 'AI Produces 90th-Percentile Theses in Under 30s',
  },

  // --- 4. Immersive Technologies & Gamification ---
  {
    id: 'simulated-vr-training',
    title: 'Simulated Experiential VR & Digital Twins',
    shortTitle: "Procedural VR",
    radarIndex: 8,
    categoryId: 'immersive-gamification',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D'],
    oneLiner:
      'High-fidelity immersive VR environments for high-consequence surgical, technical, and aviation practice.',
    pedagogicalRationale:
      'Embodied cognition proves physical sensorimotor action strengthens memory traces. Practicing emergency surgical procedures or high-voltage electrical repairs in VR develops muscle memory without physical risk.',
    learningTheories: [
      'Embodied Cognition (Barsalou)',
      'Cognitive Theory of Multimedia Learning (Mayer)',
      'Simulation Fidelity Model',
    ],
    instructionalDesignPractice: [
      'Deploy VR specifically for scenarios that are dangerous, expensive, or counter-intuitive in reality.',
      'Limit immersive headset sessions to under 20 minutes to prevent vestibular simulator sickness.',
      'Require structured video playback debriefing after virtual simulations.',
    ],
    pitfallsAndEthics: [
      'High headset hardware costs widening institutional budget inequities.',
      'Sensory disorientation and exclusion of students with inner-ear vestibular conditions.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['remote-iot-laboratories', 'gamified-engagement-loops'],
    coordinates: { x: 14, y: 72 },
    empiricalMetric: 'Up to 230% Faster Procedure Mastery in VR vs. Textbooks',
  },
  {
    id: 'gamified-engagement-loops',
    title: 'Epistemic Gamification & Problem Mechanics',
    shortTitle: "Epistemic Games",
    radarIndex: 9,
    categoryId: 'immersive-gamification',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Role-based epistemic game loops where learners think and problem-solve like practicing professionals.',
    pedagogicalRationale:
      'Moving past superficial points and badges: epistemic games immerse learners in authentic professional identities (e.g. urban planners, biosafety inspectors), reframing failure as a diagnostic iteration checkpoint.',
    learningTheories: [
      'Shaffer Epistemic Games',
      'Gee Principles of Game-Based Learning',
      'Deci & Ryan Autonomy & Competence',
    ],
    instructionalDesignPractice: [
      'Embed failure as a safe learning mechanic: allow instantaneous simulation resets with diagnostic hints.',
      'Design game friction around authentic domain constraints (e.g. balancing municipal budget vs water quality).',
      'Facilitate reflective post-mission debrief circles where teams explain their decision trees.',
    ],
    pitfallsAndEthics: [
      'Superficial gamification ("chocolate-covered broccoli") that distracts from core concepts.',
      'Hyper-competitive leaderboards demotivating neurodivergent or risk-averse students.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'Medium',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['simulated-vr-training', 'interdisciplinary-climate-curricula'],
    coordinates: { x: 19, y: 83 },
    empiricalMetric: '42% Increase in Student Task Completion & Retention',
  },

  // --- 5. STEM, Digital Literacy & Cybersecurity Awareness ---
  {
    id: 'early-computational-thinking',
    title: 'Early K-8 Computational Thinking & Robotics',
    shortTitle: "K-8 Computation",
    radarIndex: 10,
    categoryId: 'stem-cybersecurity',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12'],
    oneLiner:
      'Introducing robotics, logic flow, and algorithm construction in early childhood education.',
    pedagogicalRationale:
      'Seymour Papert’s constructionism proves children grasp deep mathematical and algorithmic concepts through tangible objects to think with (programmable robots, block code, physical computing).',
    learningTheories: [
      'Papert Constructionism & Microworlds',
      'Wing Computational Thinking Dimensions',
      'Piaget Concrete to Formal Operational Stage',
    ],
    instructionalDesignPractice: [
      'Use screen-free tactile coding robots (e.g. wooden logic blocks) in grades K-2 before introducing screens.',
      'Teach algorithmic decomposition: have learners break daily tasks (brushing teeth) into step-by-step algorithms.',
      'Encourage peer pair-programming to cultivate collaborative problem-solving.',
    ],
    pitfallsAndEthics: [
      'Over-focus on syntax over conceptual systems thinking.',
      'Gender and socioeconomic disparities in extracurricular robotics participation.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'Medium',
      corporateLnd: 'Emerging',
    },
    connectedTrendIds: ['cybersecurity-media-literacy', 'inclusive-udl-frameworks'],
    coordinates: { x: 33, y: 92 },
    empiricalMetric: 'Substantial Improvement in Spatial Reasoning & Logic',
  },
  {
    id: 'cybersecurity-media-literacy',
    title: 'Cybersecurity, Data Privacy & Deepfake Verification',
    shortTitle: "Deepfake & SIFT",
    radarIndex: 11,
    categoryId: 'stem-cybersecurity',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Empowering learners to detect synthetic media, protect personal telemetry, and read laterally.',
    pedagogicalRationale:
      'With synthetic media, voice clones, and deepfakes ubiquitous, checklist verification (CRAAP test) fails. Teaching professional lateral reading (SIFT method: Stop, Investigate, Find better, Trace) builds epistemic resilience.',
    learningTheories: [
      'Wineburg Lateral Reading Heuristics (Stanford)',
      'Caulfield SIFT Information Verification',
      'Critical Algorithmic Literacy (Freire & Buolamwini)',
    ],
    instructionalDesignPractice: [
      'Conduct live "Deepfake Audits": challenge students to analyze subtle artifacting in synthetic videos.',
      'Audit school mobile apps for tracking cookies, third-party trackers, and data brokerage leaks.',
      'Mandate the SIFT method for every research citation submitted in research papers.',
    ],
    pitfallsAndEthics: [
      'Epistemic nihilism: learners concluding that "nothing on the internet is real or trustworthy."',
      'Partisan polarization when evaluating contentious political or historical media claims.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['authentic-oral-defense', 'ai-adaptive-tutoring'],
    coordinates: { x: 46, y: 93 },
    empiricalMetric: '85% Accuracy in Detecting Synthetic Disinformation with SIFT',
  },

  // --- 6. Global Student Mobility & Cross-Border Education [USER HIGHLIGHT] ---
  {
    id: 'regional-education-hubs',
    title: 'Regional Transnational Higher Education Hubs',
    shortTitle: "Transnational Hubs",
    radarIndex: 12,
    categoryId: 'global-mobility',
    horizon: 'Horizon 1: Adopted',
    sectors: ['Higher Ed'],
    oneLiner:
      'Expansion of branch campuses and transnational dual degrees in Singapore, UAE, and Malaysia.',
    pedagogicalRationale:
      'Visa restrictions in traditional host nations (UK, Canada, Australia) combined with exploding youth demographics in Asia and Africa have catalyzed regional hubs, delivering top-tier global degrees at a fraction of Western tuition.',
    learningTheories: [
      'Knight Internationalization Taxonomy',
      'Transnational Education (TNE) Governance',
      'Decolonizing Curricular Mobility',
    ],
    instructionalDesignPractice: [
      'Design curriculum equivalence matrices for seamless credit transfer across global branch campuses.',
      'Incorporate regionally contextualized case studies alongside Western business and engineering canon.',
      'Facilitate multi-campus faculty exchange to standardize pedagogical quality across time zones.',
    ],
    pitfallsAndEthics: [
      'Academic freedom constraints and local censorship in certain international branch jurisdictions.',
      'Tuition divides between wealthy international students and local host country populations.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['cross-border-digital-mobility', 'modular-microcredentials'],
    coordinates: { x: 58, y: 93 },
    empiricalMetric: 'Rapid Regionalization of International Degrees',
  },
  {
    id: 'cross-border-digital-mobility',
    title: 'Cross-Border Digital Mobility & COIL Virtual Exchanges',
    shortTitle: "COIL Exchanges",
    radarIndex: 13,
    categoryId: 'global-mobility',
    horizon: 'Horizon 1: Adopted',
    sectors: ['Higher Ed', 'K-12'],
    oneLiner:
      'Collaborative Online International Learning connecting classroom cohorts across continents without travel.',
    pedagogicalRationale:
      'Less than 5% of global university students can afford physical study-abroad semesters. SUNY COIL pairs international classes for 6-week joint project investigations, cultivating intercultural competence democratically.',
    learningTheories: [
      'SUNY COIL Virtual Exchange Model',
      'Deardorff Intercultural Competence Framework',
      'Allport Intergroup Contact Hypothesis',
    ],
    instructionalDesignPractice: [
      'Pair students into bi-national teams to co-produce a single shared deliverable (e.g. comparative urban housing policy).',
      'Scaffold explicit intercultural communication protocols to address indirect vs direct communication styles.',
      'Schedule asynchronous working windows accommodating wide time-zone differentials.',
    ],
    pitfallsAndEthics: [
      'Linguistic dominance of native English speakers silencing non-native international peers.',
      'Unreliable internet infrastructure in developing partner universities disrupting live calls.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['regional-education-hubs', 'interdisciplinary-climate-curricula'],
    coordinates: { x: 71, y: 91 },
    empiricalMetric: '95% Cost Reduction vs. Physical International Travel',
  },
  {
    id: 'demographic-leapfrogging',
    title: 'Demographic Inversion & Mobile-First Global South Megasystems',
    shortTitle: 'Demographic Megasystems',
    radarIndex: 25,
    categoryId: 'global-mobility',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D', 'Informal/Lifelong'],
    oneLiner:
      'Global North enrollment contractions offset by decentralized, mobile-first micro-universities in demographic growth regions.',
    pedagogicalRationale:
      'While birth-rate cliffs threaten closures across North America, Japan, and Western Europe, youth populations in Sub-Saharan Africa and South Asia are surging. These regions are leapfrogging legacy campus bureaucracies with offline-first mesh networks, low-bandwidth mobile micro-learning, and localized peer study pods.',
    learningTheories: [
      'Leapfrog Innovation Theory',
      'Mobile Micro-Learning & Connectivism',
      'Human Capital Demographic Transition (Bloom & Williamson)',
    ],
    instructionalDesignPractice: [
      'Design curriculum assets optimized for low-bandwidth mobile handsets and offline WhatsApp/Telegram study cohorts.',
      'Establish hyper-local community learning hubs providing solar electricity and mesh intranet caching.',
      'Enable cross-border credit transfer between emerging Global South academies and accredited international institutions.',
    ],
    pitfallsAndEthics: [
      'Digital neo-colonialism exporting uncurated Western curricula without regional contextual adaptation.',
      'Data extraction by multinational telecom and platform monopolies in the Global South.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['cross-border-digital-mobility', 'regional-education-hubs', 'modular-microcredentials'],
    coordinates: { x: 65, y: 96 },
    empiricalMetric: 'Over 60% of Global Higher-Ed Demand Emerges from Global South',
  },

  // --- 7. Ecological & Climate Literacy & Living Labs [USER HIGHLIGHT] ---
  {
    id: 'interdisciplinary-climate-curricula',
    title: 'Cross-Disciplinary Ecological & Climate Curricula',
    shortTitle: "Climate Curricula",
    radarIndex: 14,
    categoryId: 'climate-sustainability',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Integrating sustainability, environmental economics, and carbon accounting across all majors.',
    pedagogicalRationale:
      'Climate change is not an isolated biology chapter; it is a systemic crisis altering law, engineering, supply chains, and literature. Integrating climate across curricula prepares every graduate for the net-zero economy.',
    learningTheories: [
      'Orr Ecological Literacy',
      'Meadows Systems Thinking & Leverage Points',
      'UNESCO Education for Sustainable Development',
    ],
    instructionalDesignPractice: [
      'Embed carbon footprint modeling into introductory macroeconomics and supply chain courses.',
      'Require engineering students to complete Life Cycle Assessments (LCA) on all capstone design projects.',
      'Use literature and creative writing to explore ecological grief, Indigenous stewardship, and solarpunk futures.',
    ],
    pitfallsAndEthics: [
      'Climate despair and eco-anxiety when instruction focuses solely on catastrophe without actionable agency.',
      'Superficial corporate greenwashing embedded in commercial curriculum modules.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['campus-living-labs', 'cross-border-digital-mobility'],
    coordinates: { x: 88, y: 68 },
    empiricalMetric: 'Over 70% of Universities Mandate Sustainability Competencies',
  },
  {
    id: 'campus-living-labs',
    title: 'Institutional Campuses as Decarbonization Living Labs',
    shortTitle: "Campus Living Labs",
    radarIndex: 15,
    categoryId: 'climate-sustainability',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'K-12'],
    oneLiner:
      'Utilizing smart building energy telemetry, microgrids, and circular composting as live student curriculum.',
    pedagogicalRationale:
      'Dewey’s laboratory school concept updated for the climate era: the university campus becomes an active testbed where students experiment with geothermal wells, solar microgrids, and building management telemetry.',
    learningTheories: [
      'Dewey Laboratory School Philosophy',
      'Experiential Place-Based Learning (Sobel)',
      'Circular Economy Pedagogies',
    ],
    instructionalDesignPractice: [
      'Provide open API access to campus building HVAC and solar sensor feeds for student data science coursework.',
      'Empower student green teams to propose and execute funded campus decarbonization pilot projects.',
      'Install visual dashboard kiosks in student dining halls displaying real-time food waste and energy metrics.',
    ],
    pitfallsAndEthics: [
      'Bureaucratic facilities management resistance to student access to operational campus infrastructure.',
      'Tokenistic student input on multi-million dollar institutional energy procurement decisions.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'Medium',
    },
    connectedTrendIds: ['interdisciplinary-climate-curricula', 'remote-iot-laboratories'],
    coordinates: { x: 85, y: 80 },
    empiricalMetric: 'Measurable Campus Carbon Reductions Managed by Student Cohorts',
  },
  {
    id: 'green-workforce-retooling',
    title: 'Vocational Green Skills & Circular Economy Workforce Retooling',
    shortTitle: 'Green Workforce',
    radarIndex: 26,
    categoryId: 'climate-sustainability',
    horizon: 'Horizon 1: Adopted',
    sectors: ['Corporate L&D', 'Higher Ed', 'Informal/Lifelong'],
    oneLiner:
      'Fast-track technical retooling programs training industrial workforces for grid electrification, heat pumps, and circular manufacturing.',
    pedagogicalRationale:
      'Achieving global net-zero targets is constrained not by technology, but by massive skilled labor shortages. Vocational institutions and corporate partnerships are deploying modular, work-integrated apprenticeships in geothermal HVAC, battery chemistry recycling, and renewable microgrid maintenance.',
    learningTheories: [
      'Just Transition Framework (ILO)',
      'Work-Integrated Apprenticeship Learning',
      'Dual VET System (German Model)',
    ],
    instructionalDesignPractice: [
      'Co-develop 8-week micro-apprenticeships with renewable energy consortia and labor unions.',
      'Blend hands-on equipment labs with interactive VR simulations of high-voltage microgrid installations.',
      'Incorporate life-cycle material analysis and circular design standards directly into trade certifications.',
    ],
    pitfallsAndEthics: [
      'Neglecting fossil-fuel workers during regional plant decommissioning, provoking political backlash.',
      'Underfunding vocational community colleges compared to prestigious four-year academic universities.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['interdisciplinary-climate-curricula', 'modular-microcredentials', 'campus-living-labs'],
    coordinates: { x: 94, y: 72 },
    empiricalMetric: 'Over 30 Million New Clean Energy Technical Jobs Projected by 2030',
  },

  // --- 8. Inclusive Education, Accessibility & UDL [USER HIGHLIGHT] ---
  {
    id: 'inclusive-udl-frameworks',
    title: 'Universal Design for Learning (UDL 3.0) Frameworks',
    shortTitle: "UDL 3.0 Architecture",
    radarIndex: 16,
    categoryId: 'inclusive-udl',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Designing multiple means of Engagement, Representation, and Action/Expression from inception.',
    pedagogicalRationale:
      'Neurovariability is the human norm. Proactive UDL architectural design eliminates the stigma of retrofitted accommodations, creating accessible on-ramps that benefit all learners (curb-cut effect).',
    learningTheories: [
      'CAST Universal Design for Learning (UDL 3.0)',
      'Social Model of Disability (Oliver)',
      'Neurodiversity Paradigm (Singer & Walker)',
    ],
    instructionalDesignPractice: [
      'Offer multi-modal assignment deliverables: students demonstrate mastery via written paper, podcast, or working code.',
      'Provide dual-coded learning assets: text paired with synchronized interactive audio and visual concept diagrams.',
      'Build variable pacing options with built-in 48-hour deadline extension tokens.',
    ],
    pitfallsAndEthics: [
      'Faculty feeling overwhelmed by creating 3 versions of every instructional asset without institutional support.',
      'Equating choice with a dilution of academic rigor.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['ai-assistive-tech', 'smart-hybrid-classrooms', 'student-mental-health'],
    coordinates: { x: 89, y: 42 },
    empiricalMetric: 'Eliminates 70% of Retrofitted Disability Accommodation Requests',
  },
  {
    id: 'ai-assistive-tech',
    title: 'AI-Enabled Assistive Technologies & Sensory Accommodations',
    shortTitle: "AI Assistive Tech",
    radarIndex: 17,
    categoryId: 'inclusive-udl',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Automated speech-to-text, real-time sign language synthesis, eye-tracking, and dyslexia text modulation.',
    pedagogicalRationale:
      'Generative AI and computer vision break sensory barriers in real time. Visually, auditorily, and motor-impaired students access live lectures and complex diagrams with parity.',
    learningTheories: [
      'Augmentative and Alternative Communication (AAC)',
      'Cognitive Load & Sensory Compensation Theory',
      'WCAG 2.2 Accessibility Guidelines',
    ],
    instructionalDesignPractice: [
      'Enable automated real-time lecture transcription and speaker diarization in all lecture hall video captures.',
      'Integrate bionic reading and OpenDyslexic typographical toggles into LMS reading interfaces.',
      'Support eye-tracking and single-switch navigation inputs for digital lab simulations.',
    ],
    pitfallsAndEthics: [
      'Speech-to-text inaccuracy on non-standard accents, technical scientific jargon, and minority dialects.',
      'Data privacy vulnerabilities regarding sensitive biometric eye-tracking telemetry.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['inclusive-udl-frameworks', 'ai-adaptive-tutoring'],
    coordinates: { x: 89, y: 54 },
    empiricalMetric: 'Real-Time Captioning & Transcription Across 90+ Languages',
  },

  // --- 9. Cyber-Physical Learning Spaces & Smart Campuses [USER HIGHLIGHT] ---
  {
    id: 'smart-hybrid-classrooms',
    title: 'Smart Classrooms & Telepresence Robotics',
    shortTitle: "Smart Classrooms",
    radarIndex: 18,
    categoryId: 'cyber-physical-spaces',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D', 'K-12'],
    oneLiner:
      'High-definition spatial audio arrays, dynamic display grids, and telepresence robotics for remote parity.',
    pedagogicalRationale:
      'Traditional video conferencing creates severe transactional distance. Spatial audio and telepresence robotics restore peripheral awareness, allowing remote students to interject naturally and turn toward speakers.',
    learningTheories: [
      'Beatty HyFlex Architecture',
      'Spatial Presence & Telepresence Theory (Steuer)',
      'Reggio Emilia Environment as Third Teacher',
    ],
    instructionalDesignPractice: [
      'Install ceiling-mounted beamforming microphone arrays that automatically track and amplify whoever is speaking in the room.',
      'Position remote student life-size video tiles at eye-level around physical seminar tables to foster equal social presence.',
      'Assign in-class student co-pilots to monitor the remote chat and ensure remote students are called on equally.',
    ],
    pitfallsAndEthics: [
      'High capital expenditure for retrofitting aging campus lecture halls.',
      'Cognitive split-brain for instructors trying to facilitate two disparate audiences simultaneously.',
    ],
    sectorReadiness: {
      k12: 'Medium',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['remote-iot-laboratories', 'hybrid-adult-pathways'],
    coordinates: { x: 70, y: 16 },
    empiricalMetric: '80% Reduction in Hybrid Student Feeling of Isolation',
  },
  {
    id: 'remote-iot-laboratories',
    title: '24/7 Remote IoT Laboratories & Cloud Wet Labs',
    shortTitle: "Remote IoT Labs",
    radarIndex: 19,
    categoryId: 'cyber-physical-spaces',
    horizon: 'Horizon 2: Accelerating',
    sectors: ['Higher Ed', 'Corporate L&D'],
    oneLiner:
      'Browser-based teleoperation of multimillion-dollar laboratory apparatus and automated robotics.',
    pedagogicalRationale:
      'Physical wet lab access is heavily restricted by schedules and funding. Cloud IoT labs allow students to queue automated chemical titrations, robotic microscope scans, and wind tunnel tests remotely around the clock.',
    learningTheories: [
      'Inquiry-Based Scientific Verification',
      'Situated Experiential Learning',
      'Cloud Laboratory Automation (King & bio-automation)',
    ],
    instructionalDesignPractice: [
      'Require students to preregister hypotheses and write Python scripts to trigger robotic lab actions.',
      'Supply live HD video streams alongside raw sensor telemetry with realistic instrument noise.',
      'Pair physical teleoperated lab sessions with preparatory VR procedural rehearsals.',
    ],
    pitfallsAndEthics: [
      'Loss of manual laboratory dexterity (pipetting, handling fragile glassware, tactile soldering).',
      'Queue bottlenecks on specialized high-demand physical hardware during midterm examination weeks.',
    ],
    sectorReadiness: {
      k12: 'Emerging',
      higherEd: 'High',
      corporateLnd: 'High',
    },
    connectedTrendIds: ['smart-hybrid-classrooms', 'simulated-vr-training', 'campus-living-labs'],
    coordinates: { x: 83, y: 22 },
    empiricalMetric: '24/7 Global Teleoperation of Multimillion-Dollar STEM Equipment',
  },

  // --- 10. Socio-Emotional Learning, Wellbeing & Workforce Sustainability ---
  {
    id: 'teacher-burnout-mitigation',
    title: 'Educator Workload Reduction & Workforce Sustainability',
    shortTitle: "Burnout Relief",
    radarIndex: 20,
    categoryId: 'wellbeing-sustainability',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed'],
    oneLiner:
      'Structural workload reduction, AI administrative relief, and supportive operational policies.',
    pedagogicalRationale:
      'Severe teacher shortages (especially in STEM) threaten global education stability. Protecting teacher mental health through administrative automation, co-planning time, and institutional mental health days is essential.',
    learningTheories: [
      'Teacher Burnout & Emotional Exhaustion Model (Maslach)',
      'Organizational Support Theory (Eisenberger)',
      'Relational Resilience in School Systems',
    ],
    instructionalDesignPractice: [
      'Cap weekly grading hours by transitioning to rubric-driven peer feedback and AI preliminary assessment assistance.',
      'Protect collaborative grade-level planning time from being co-opted for administrative paperwork.',
      'Provide confidential mental health support and counseling directly embedded in faculty wellness programs.',
    ],
    pitfallsAndEthics: [
      'Superficial wellness initiatives ("mindfulness seminars") that fail to reduce crushing administrative workloads.',
      'Retaliation or stigma against educators who voice mental health distress.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'Medium',
    },
    connectedTrendIds: ['educator-automation', 'student-mental-health'],
    coordinates: { x: 47, y: 39 },
    empiricalMetric: 'Over 60% of Educators Report Burnout; Automation Critical for Retention',
  },
  {
    id: 'student-mental-health',
    title: 'Integrated Student Mental Health & Relational Support',
    shortTitle: "Mental Health SEL",
    radarIndex: 21,
    categoryId: 'wellbeing-sustainability',
    horizon: 'Horizon 1: Adopted',
    sectors: ['K-12', 'Higher Ed'],
    oneLiner:
      'Embedding psychological safety, predictable course rhythms, and campus counseling into daily academic life.',
    pedagogicalRationale:
      'Empirical studies demonstrate direct positive correlations between campus mental health support systems, student retention, academic GPA, and post-graduation workforce stability.',
    learningTheories: [
      'Porges Polyvagal Theory',
      'CASEL Core SEL Competencies',
      'Immordino-Yang Affective Neuroscience',
    ],
    instructionalDesignPractice: [
      'Implement "No-Homework Weekends" and eliminate midnight assignment submission deadlines.',
      'Begin class sessions with a 2-minute arrival grounding ritual to lower student sympathetic nervous arousal.',
      'Embed links to crisis counselors and student counseling directly on the LMS course homepage.',
    ],
    pitfallsAndEthics: [
      'Underfunded campus counseling centers leading to multi-month waitlists for struggling students.',
      'Untrained instructors overstepping boundaries by attempting to act as licensed therapists.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'Medium',
    },
    connectedTrendIds: ['teacher-burnout-mitigation', 'inclusive-udl-frameworks'],
    coordinates: { x: 61, y: 39 },
    empiricalMetric: 'Direct Statistically Significant Correlation with Higher Retention & GPA',
  },
  {
    id: 'art-of-becoming-whole-person',
    title: 'The Art of Becoming: Education of the Whole Human Being',
    shortTitle: 'The Art of Becoming',
    radarIndex: 27,
    categoryId: 'wellbeing-sustainability',
    horizon: 'Horizon 3: Frontier',
    sectors: ['K-12', 'Higher Ed', 'Informal/Lifelong'],
    oneLiner:
      'Education reconceived beyond academic metrics as the intentional cultivation of character, ethical discernment, emotional maturity, and human flourishing.',
    pedagogicalRationale:
      'In an era where generative artificial intelligence commoditizes technical cognition, data recall, and academic paper production, modern education faces an existential void when reduced solely to measurable academic achievement and economic utility. "The Art of Becoming" returns to education’s classical and humanistic core (Paideia, Bildung, and Sen & Nussbaum’s Human Development Approach)—treating schooling not as an intellectual assembly line, but as the deliberate process of becoming a good, thoughtful, compassionate, and responsible human being. Instructional design deliberately elevates character, moral courage, relational empathy, philosophical introspection, and civic stewardship as equal in value to technical mastery.',
    learningTheories: [
      'Human Development & Capabilities Approach (Sen & Nussbaum)',
      'Bildung & Holistic Human Formation (von Humboldt)',
      'Aristotelian Phronesis & Character Ethics (Aristotle)',
      'Whole Child / Whole Person Education (Noddings & ASCD)',
    ],
    instructionalDesignPractice: [
      'Integrate deliberate Socratic moral inquiry, ethical dilemmas, and existential reflection into every disciplinary project.',
      'Assess and nurture character qualities—intellectual humility, empathy, perseverance, and ethical integrity—through mentored reflective journaling and restorative peer dialogue.',
      'Design community-embedded service learning where students take real responsibility for the vulnerable and for collective wellbeing.',
      'Balance cognitive knowledge acquisition with somatic awareness, emotional literacy, and contemplative practices that nurture the whole person.',
    ],
    pitfallsAndEthics: [
      'Reducing character formation to punitive compliance checklists or moralistic indoctrination.',
      'Measuring human flourishing through rigid standardized rubrics that paradoxically destroy authentic personal introspection.',
    ],
    sectorReadiness: {
      k12: 'High',
      higherEd: 'High',
      corporateLnd: 'Medium',
    },
    connectedTrendIds: ['student-mental-health', 'post-degree-title-redesign', 'eco-pedagogy-systems-thinking'],
    coordinates: { x: 54, y: 31 },
    empiricalMetric: 'Cultivates Moral Agency, Emotional Maturity & Lifelong Civic Responsibility',
  },
];

export const TREND_CONNECTIONS: TrendConnection[] = [
  {
    sourceId: 'ai-adaptive-tutoring',
    targetId: 'retrieval-practice',
    relationship: 'Adaptive algorithms schedule spaced retrieval tests against individual memory decay curves',
  },
  {
    sourceId: 'ai-adaptive-tutoring',
    targetId: 'educator-automation',
    relationship: 'Tutoring telemetry feeds educator dashboards to automate preliminary assessment feedback',
  },
  {
    sourceId: 'authentic-oral-defense',
    targetId: 'cybersecurity-media-literacy',
    relationship: 'Oral defense rubrics evaluate student ability to spot and audit synthetic AI media',
  },
  {
    sourceId: 'regional-education-hubs',
    targetId: 'cross-border-digital-mobility',
    relationship: 'Physical regional hubs anchor COIL digital exchange projects between international cohorts',
  },
  {
    sourceId: 'interdisciplinary-climate-curricula',
    targetId: 'campus-living-labs',
    relationship: 'Classroom climate curriculum uses live campus smart building telemetry as active dataset',
  },
  {
    sourceId: 'inclusive-udl-frameworks',
    targetId: 'ai-assistive-tech',
    relationship: 'UDL guidelines establish pedagogical rationale for AI speech-to-text and eye-tracking tools',
  },
  {
    sourceId: 'smart-hybrid-classrooms',
    targetId: 'remote-iot-laboratories',
    relationship: 'Smart classrooms connect remote students to real-time physical cloud labs and robotics',
  },
  {
    sourceId: 'educator-automation',
    targetId: 'teacher-burnout-mitigation',
    relationship: 'AI administrative time-savings directly reduce educator emotional exhaustion and burnout',
  },
  {
    sourceId: 'simulated-vr-training',
    targetId: 'gamified-engagement-loops',
    relationship: 'VR simulations integrate epistemic game loops to reframe failure as a learning iteration',
  },
  {
    sourceId: 'cross-border-digital-mobility',
    targetId: 'interdisciplinary-climate-curricula',
    relationship: 'International COIL cohorts collaborate on transboundary climate and ecological challenges',
  },
  {
    sourceId: 'inclusive-udl-frameworks',
    targetId: 'smart-hybrid-classrooms',
    relationship: 'Universal Design mandates multi-modal spatial presence and accessible acoustics in hybrid spaces',
  },
  {
    sourceId: 'institutional-predictive-analytics',
    targetId: 'student-mental-health',
    relationship: 'Retention analytics trigger early wellness interventions before academic crisis escalates',
  },
];

export const SYNTHESIS_TEMPLATES: { [key: string]: any } = {
  'coil-climate-living-lab': {
    title: 'Global COIL Climate Living Lab & Decarbonization Studio',
    trendIds: [
      'cross-border-digital-mobility',
      'interdisciplinary-climate-curricula',
      'campus-living-labs',
    ],
    targetAudience: 'Transnational Undergraduate Engineering & Environmental Policy Cohorts',
    coreObjective:
      'Connect bi-national university student teams to audit live campus building energy microgrids and co-design transboundary urban decarbonization strategies.',
    pedagogicalFramework: 'SUNY COIL Virtual Exchange + Orr Ecological Literacy + Meadows Systems Thinking',
    learnerJourney: [
      {
        phase: 'Phase 1: Transboundary Cross-Audit & Sensor Ingestion',
        description: 'Bi-national teams access live building IoT telemetry from partner campuses in Singapore and London.',
        activities: [
          'Perform comparative energy and HVAC carbon audits using live campus IoT telemetry APIs.',
          'Conduct asynchronous intercultural icebreaker sessions mapping local municipal climate policies.',
        ],
      },
      {
        phase: 'Phase 2: Collaborative Circular Intervention Prototyping',
        description: 'Teams develop localized circular economy interventions targeting food waste and solar microgrids.',
        activities: [
          'Build Causal Loop Diagrams modeling regulatory friction, energy storage delays, and municipal incentives.',
          'Hold bi-weekly synchronous design critiques over high-definition smart classroom video arrays.',
        ],
      },
      {
        phase: 'Phase 3: Public Municipal Jury Defense',
        description: 'Final proposals are defended orally before a jury of city climate officers and campus facilities directors.',
        activities: [
          'Deliver a 15-minute viva voce defense justifying life-cycle carbon payback calculations.',
          'Publish open-access data dashboards and verifiable micro-credentials to student digital portfolios.',
        ],
      },
    ],
    assessmentStrategy:
      'Triangulated Rubric: 40% IoT Data Analysis Coherence & LCA Accuracy, 30% Viva Voce Jury Defense, 30% Intercultural Collaboration Journal. Zero static exams.',
    learningDesignerNote:
      'Pairing COIL cross-border digital mobility with campus living labs makes global education accessible at 95% lower cost while grounding students in physical net-zero problem solving.',
  },
  'ai-udl-workforce-relief': {
    title: 'The Inclusive AI-Augmented Academy & Burnout Relief Architecture',
    trendIds: ['ai-adaptive-tutoring', 'inclusive-udl-frameworks', 'teacher-burnout-mitigation'],
    targetAudience: 'K-12 & Higher-Ed District-Wide Instructional Systems',
    coreObjective:
      'Deploy Socratic AI tutoring and Universal Design for Learning to double student mastery while freeing 6 hours weekly of teacher administrative load.',
    pedagogicalFramework: 'Bloom 2-Sigma Mastery + CAST UDL 3.0 + Maslach Burnout Mitigation Framework',
    learnerJourney: [
      {
        phase: 'Phase 1: Multi-Modal Diagnostic Ingestion',
        description: 'Students choose preferred representation formats while AI tutors gauge baseline readiness.',
        activities: [
          'Select between interactive text, synchronized audio, or visual concept graphs.',
          'Complete low-stakes diagnostic challenges; Socratic AI calibrates pacing to maintain Flow state.',
        ],
      },
      {
        phase: 'Phase 2: Educator-Guided Deep Inquiry Circles',
        description: 'With mechanical grading automated, teachers run high-touch small-group Socratic seminars.',
        activities: [
          'Teachers review automated diagnostic telemetry to assemble micro-cohorts needing human guidance.',
          'Students utilize automated speech-to-text and dyslexia aids for friction-free expression.',
        ],
      },
      {
        phase: 'Phase 3: Multi-Format Authentic Portfolio Showcase',
        description: 'Demonstrating mastery through flexible multi-modal artifacts evaluated against transparent UDL rubrics.',
        activities: [
          'Submit podcasts, working prototypes, or oral defenses; AI generates preliminary rubric tagging for teacher review.',
          'Participate in student-led reflection conferences assessing cognitive growth and wellbeing.',
        ],
      },
    ],
    assessmentStrategy:
      'Continuous formative rubric evaluation with multi-modal demonstration choice; automated preliminary feedback with mandatory teacher human sign-off.',
    learningDesignerNote:
      'Solves the false dichotomy between high-touch human instruction and scalable tech: AI handles the repetitive administrative grind, revitalizing teacher energy for relational mentorship.',
  },
  'cyber-physical-spatial-lab': {
    title: 'Cyber-Physical STEM Accelerator: VR Pre-Training & IoT Cloud Wet Labs',
    trendIds: ['simulated-vr-training', 'remote-iot-laboratories', 'smart-hybrid-classrooms'],
    targetAudience: 'Undergraduate Biomedical & Electrical Engineering',
    coreObjective:
      'Integrate immersive VR procedure rehearsals with 24/7 cloud teleoperation of physical wet lab robotics, connecting remote and in-person learners seamlessly.',
    pedagogicalFramework: 'Embodied Cognition (Barsalou) + Beatty HyFlex + Cloud Laboratory Inquiry',
    learnerJourney: [
      {
        phase: 'Phase 1: Immersive VR Sandbox Rehearsal',
        description: 'Students practice hazardous chemical and circuit assembly procedures in zero-risk virtual reality.',
        activities: [
          'Complete procedural checklists in VR, receiving real-time tactile feedback on errors.',
          'Iterate through emergency malfunction scenarios until achieving 100% safety protocol mastery.',
        ],
      },
      {
        phase: 'Phase 2: 24/7 Remote Physical Teleoperation',
        description: 'Students queue and trigger real chemical reactions and robotic scans in automated campus wet labs.',
        activities: [
          'Write Python scripts to command robotic pipettes and spectrographs on the smart campus network.',
          'Analyze live HD video feeds and raw sensor telemetry, accounting for real-world environmental noise.',
        ],
      },
      {
        phase: 'Phase 3: Hybrid Spatial Defense',
        description: 'Remote and in-person students co-present findings using high-definition spatial audio and display arrays.',
        activities: [
          'Host a live cross-modal research colloquium connecting remote telepresence attendees with local lab peers.',
          'Archive raw telemetry and procedural logs to open-science repositories.',
        ],
      },
    ],
    assessmentStrategy:
      'Evaluated through VR procedural accuracy telemetry, cloud experiment script execution integrity, and live colloquium oral defense.',
    learningDesignerNote:
      'Removes the multimillion-dollar laboratory barrier for remote and working students, providing authentic physical hardware mastery without physical access constraints.',
  },
};
