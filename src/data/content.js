// Central place for all portfolio copy + data.
// Edit this file to update content without touching component code.

export const nav = [
  { id: 'projects', label: 'Projects' },
  { id: 'believe', label: 'Beliefs' },
  { id: 'interests', label: 'Into' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Chetanya Makkar',
  title: "I'm curious about people, products, and the weird ideas in between.",
  subtitle:
    "I get excited talking to people about what they're building, why it matters, and where it could go. Golf on weekends, a new city when I can get away, and always up for a conversation about something cool.",
};

export const now = {
  roleLine: 'product, strategy, analytics at venhub',
};

export const projectBoxes = {
  heading: "What I've been working on",
  caseStudies: {
    title: 'Case Study Notebook',
    description:
      'Independent investment write-ups on companies I find interesting — sourced, underwritten, and modeled the way I’d bring them to an investment committee.',
    url: 'https://pe-portfolio-ten.vercel.app/',
  },
  github: {
    title: 'See it on GitHub',
    description: 'Code, experiments, and half-finished ideas — the actual builds live here.',
  },
};

// Kept for later — not currently rendered on the site.
// Set featured: true on a project to surface it in the "cool stuff" section.
export const projects = [
  {
    title: 'Portfolio Optimization Engine',
    featured: true,
    icon: 'TrendingUp',
    tagline: 'Building portfolios a naive equal-weight strategy would never find.',
    build:
      'An optimizer that constructs portfolios for maximum Sharpe ratio or minimum risk from historical return data — data cleaning, covariance estimation, and backtesting included.',
    tech: ['Python', 'NumPy', 'Pandas', 'cvxpy'],
    impact: '~25% better annualized Sharpe ratio than equal-weight in backtests.',
  },
  {
    title: 'Option Pricing Models',
    icon: 'LineChart',
    tagline: 'Theory vs. the real market, head to head.',
    build:
      'Black-Scholes and binomial tree pricing models for European and American options, validated against live market quotes.',
    tech: ['Python', 'SciPy', 'NumPy'],
    impact: 'High pricing accuracy and real intuition for derivatives valuation.',
  },
  {
    title: 'Flash Crash Analysis',
    featured: true,
    icon: 'Zap',
    tagline: 'Reconstructing the 2010 Flash Crash, tick by tick.',
    build:
      'Cleaned and synced huge tick-by-tick trade/quote datasets across exchanges, then built visual timelines and volatility profiles of the crash.',
    tech: ['Python', 'Pandas', 'Plotly'],
    impact: 'Surfaced how HFT order flow and liquidity vacuums triggered the crash.',
  },
  {
    title: 'Bond Yield Curve Regression',
    icon: 'LineChart',
    tagline: 'What the shape of the yield curve is actually telling you.',
    build:
      'Fit Nelson-Siegel curves to U.S. Treasury data and decomposed movements into level, slope, and curvature factors over time.',
    tech: ['Python', 'scikit-learn', 'Statsmodels'],
    impact: 'Better forward-rate predictions while managing overfitting on noisy data.',
  },
  {
    title: 'Maze Solver (Dijkstra + Java UI)',
    featured: true,
    icon: 'Compass',
    tagline: 'Watching a shortest-path algorithm think, in real time.',
    build:
      'A Java desktop app that visualizes Dijkstra’s algorithm solving a maze live, with a custom Swing UI for smooth real-time updates.',
    tech: ['Java', 'Swing', 'Graph Algorithms'],
    impact: 'A genuinely fun way to internalize graph theory — and it stays smooth on big mazes.',
  },
  {
    title: 'FSM Vending Machine',
    icon: 'Blocks',
    tagline: 'A vending machine that only exists as a state diagram.',
    build:
      'A finite-state-machine simulation of a vending machine in Rust — coin inputs, product selection, and state transitions via enums and pattern matching.',
    tech: ['Rust', 'FSMs', 'Pattern Matching'],
    impact: 'Sharpened state-machine thinking and hands-on feel for Rust’s type system.',
  },
  {
    title: 'MicroOCaml Optimizer & Type Checker',
    icon: 'Code2',
    tagline: 'Teaching a tiny language to type-check and optimize itself.',
    build:
      'A type-checker and optimizer for a small OCaml-like language — constant folding, dead-code elimination, recursive type inference.',
    tech: ['OCaml', 'Type Inference'],
    impact: 'Cut runtime complexity of test programs while keeping them correct.',
  },
  {
    title: 'Solar Power Generation Study',
    icon: 'Sun',
    tagline: 'Award-winning detective work on underperforming solar panels.',
    build:
      'Processed messy multi-sensor time-series data, visualized generation patterns, and pinpointed peak hours and degradation trends.',
    tech: ['Python', 'Pandas', 'Seaborn'],
    impact: 'Won an award for the storytelling and helped the partner spot panel degradation.',
  },
  {
    title: 'GPA Analysis',
    icon: 'BarChart3',
    tagline: 'Do extracurriculars actually move the needle on GPA?',
    build:
      'Exploratory analysis, regression, and hypothesis testing on student GPA data, accounting for outliers and self-reporting bias.',
    tech: ['Python', 'Statsmodels'],
    impact: 'Surfaced trends useful for real advising conversations.',
  },
];

export const beliefs = {
  heading: 'What I believe in',
  items: [
    'Building cool things is worth doing on its own — no manufactured problem required.',
    'Understanding products is fun. Reading about cool businesses is fun. Meeting people is how you actually learn what’s worth building.',
    'We’re not short on problems to invent — we’re short on cool things people would love to engage with.',
    'Love to live.',
  ],
};

export const interests = {
  heading: "What I'm into",
  cards: [
    {
      icon: 'Lightbulb',
      title: 'Cool Inventions',
      description:
        'I love reading about clever inventions and the stories behind how they actually got built.',
    },
    {
      icon: 'Flag',
      title: 'Golf',
      description: 'Equal parts meditation and self-inflicted frustration.',
    },
    {
      icon: 'Heart',
      title: 'AI & Human Connection',
      description:
        'Curious how AI can be used to keep human connection alive, not replace it.',
    },
    {
      icon: 'Plane',
      title: 'Travelling',
      description:
        'New cities, new food, new stories — some of my best ideas show up somewhere unfamiliar.',
    },
  ],
};

export const contact = {
  heading: "Let's build something",
  description:
    "Whether it's a role, a project, or just a good conversation about markets, products, or AI — my inbox is open.",
  links: {
    email: 'chetanyamakkar99@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chetanyamakkar/',
    github: 'https://github.com/chetanyamakkar11',
  },
};
