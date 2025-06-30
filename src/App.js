// App.js
import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Lottie from 'lottie-react';
import codingAnimation from './coding.json';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const fullLines = [
  'name = "Chetanya Makkar"',
  'major = "Computer Science"',
  'minor = "Computational Finance"',
  'gpa = 3.76 / 4.0',
  'school = "University of Maryland"',
];

const sections = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

// Add new animation keyframes to index.css
const addKeyframes = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes blinkCursor {
      from, to { border-color: transparent; }
      50% { border-color: currentColor; }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-typewriter {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      width: 0;
    }
    .animate-typewriter.visible {
      animation: typewriter 1.5s steps(40, end) forwards;
    }
    .animate-cursor {
      display: inline-block;
      border-right: 2px solid;
      animation: blinkCursor 0.75s step-end infinite;
    }
    .animate-fade-in-up {
      opacity: 0;
      transform: translateY(20px);
    }
    .animate-fade-in-up.visible {
      animation: fadeInUp 0.5s ease-out forwards;
    }
    .skill-category {
      opacity: 0;
      transform: translateY(20px);
    }
    .skill-category.visible {
      animation: fadeInUp 0.5s ease-out forwards;
    }
    .skill-category.visible:nth-child(1) { animation-delay: 0.2s; }
    .skill-category.visible:nth-child(2) { animation-delay: 0.4s; }
    .skill-category.visible:nth-child(3) { animation-delay: 0.6s; }
  `;
  document.head.appendChild(style);
};

// Add this helper for typewriter effect (no loop, but resets on re-entry)
function useTypewriterOnceOnVisible(lines, visible, delay = 0) {
  const [displayed, setDisplayed] = useState(Array(lines.length).fill(''));
  const [done, setDone] = useState(Array(lines.length).fill(false));
  const prevVisible = useRef(false);

  useEffect(() => {
    let timeouts = [];
    if (visible && !prevVisible.current) {
      // Reset and start animation
      setDisplayed(Array(lines.length).fill(''));
      setDone(Array(lines.length).fill(false));
      let totalDelay = delay;
      lines.forEach((line, idx) => {
        for (let i = 0; i <= line.length; i++) {
          timeouts.push(setTimeout(() => {
            setDisplayed(prev => {
              const copy = [...prev];
              copy[idx] = line.slice(0, i);
              return copy;
            });
            if (i === line.length) {
              setDone(prev => {
                const copy = [...prev];
                copy[idx] = true;
                return copy;
              });
            }
          }, totalDelay + i * 30));
        }
        totalDelay += line.length * 30 + 400; // 400ms pause after each line
      });
    }
    prevVisible.current = visible;
    if (!visible) {
      setDisplayed(Array(lines.length).fill(''));
      setDone(Array(lines.length).fill(false));
    }
    return () => timeouts.forEach(clearTimeout);
  }, [visible, lines, delay]);
  return [displayed, done];
}

// Helper to track previous value
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function App() {
  const [typedLines, setTypedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [aboutLoop, setAboutLoop] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('About');
  const [darkMode, setDarkMode] = useState(true);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const refs = useRef({});
  const [projectsOpen, setProjectsOpen] = useState({ SWE: false, Quant: false, Analyst: false });
  const [manualActiveSection, setManualActiveSection] = useState(null);
  const [skillsAnimationKey, setSkillsAnimationKey] = useState(0);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  // Add state for simple typewriter animation for Skills section
  const skillLines = [
    '["Python", "Java", "Rust", "OCaml", "SQL", "R"]',
    '["React", "Tailwind", "Node.js", "Scikit-learn"]',
    '["Git", "GitHub", "Jupyter", "Excel (VBA)", "PowerPoint", "LaTeX", "VS Code", "Jupyter Notebook"]',
    '["Portfolio & Risk Optimization", "Option Pricing (Black-Scholes, Monte Carlo)", "Fixed Income & Yield Curve Modeling", "Time Series & Event Studies", "Backtesting & Market Microstructure"]',
    '["Regression & Statistical Analysis", "Hypothesis & A/B Testing", "Data Visualization (Matplotlib, Seaborn)", "Data Cleaning & Preprocessing", "Simulation & Inference"]',
  ];
  const [skillsTypedLines, setSkillsTypedLines] = useState([]);
  const [skillsCurrentLine, setSkillsCurrentLine] = useState('');
  const [skillsLineIndex, setSkillsLineIndex] = useState(0);
  const [skillsCharIndex, setSkillsCharIndex] = useState(0);
  const [skillsLoop, setSkillsLoop] = useState(0);

  const skillsFullLines = [
    'Technical',
    '',
    'languages = ["Python", "Java", "Rust", "OCaml", "SQL", "R"]',
    'frameworks = ["React", "Tailwind", "Node.js", "Scikit-learn"]',
    '',
    'Tools',
    '',
    'tools = ["Git", "GitHub", "Jupyter", "Excel (VBA)", "PowerPoint", "LaTeX", "VS Code", "Jupyter Notebook"]',
    '',
    'Finance / Quant',
    '',
    'finance_skills = ["Portfolio & Risk Optimization", "Option Pricing", "Fixed Income & Yield Curve Modeling", "Backtesting"]',
    '',
    'Data Science',
    '',
    'data_skills = ["Regression & Statistical Analysis", "Hypothesis & A/B Testing", "Data Visualization", "Data Cleaning", "Time Series"]',
    '',
    'AI/ML',
    '',
    'ai_ml_tools = ["huggingface", "pytorch", "scikit-learn", "gpt", "tensorflow"]'
  ];

  const projectData = {
    SWE: [
      { name: 'Maze Solver (Dijkstra, Java UI)', url: '#' },
      { name: 'FSM Vending Machine (Rust)', url: '#' },
      { name: 'MicroOcaml Optimizer & Type Checker (OCaml)', url: '#' },
    ],
    Quant: [
      { name: 'Portfolio Optimization', url: '#' },
      { name: 'Option Pricing Models', url: '#' },
      { name: 'Flash Crash Analysis', url: '#' },
      { name: 'Bond Yield Curve Regression', url: '#' },
    ],
    Analyst: [
      { name: 'Flash Crash Analysis', url: '#' },
      { name: 'Solar Power Generation Data Study', url: '#' },
      { name: 'GPA Analysis', url: '#' },
    ],
  };

  const projectBoxColors = {
    SWE: darkMode ? 'bg-[#23272e] border-blue-400' : 'bg-[#e3f2fd] border-blue-600',
    Quant: darkMode ? 'bg-[#23272e] border-green-400' : 'bg-[#e8f5e9] border-green-600',
    Analyst: darkMode ? 'bg-[#23272e] border-yellow-400' : 'bg-[#fffde7] border-yellow-600',
  };

  const highlightPartial = (line) => {
    const [left, rightRaw] = line.split('=');
    const variable = left?.trim();
    const right = rightRaw?.trim();

    return (
      <>
        <span className={darkMode ? "text-[#9CDCFE]" : "text-[#0000FF]"}>{variable}</span>
        <span className={darkMode ? "text-[#d4d4d4]" : "text-[#000000]"}> = </span>
        {right ? (
          right.startsWith('"') ? (
            <span className={darkMode ? "text-[#ce9178]" : "text-[#A31515]"}>{right}</span>
          ) : (
            <span className={darkMode ? "text-[#b5cea8]" : "text-[#098658]"}>{right}</span>
          )
        ) : null}
      </>
    );
  };

  const highlightLine = (line) => {
    const [left, right] = line.split('=');
    const variable = left?.trim();
    const value = right?.trim();

    return (
      <>
        <span className={darkMode ? "text-[#9CDCFE]" : "text-[#0000FF]"}>{variable}</span>
        <span className={darkMode ? "text-[#d4d4d4]" : "text-[#000000]"}> = </span>
        {value?.startsWith('"') ? (
          <span className={darkMode ? "text-[#ce9178]" : "text-[#A31515]"}>{value}</span>
        ) : (
          <span className={darkMode ? "text-[#b5cea8]" : "text-[#098658]"}>{value}</span>
        )}
      </>
    );
  };

  useEffect(() => {
    if (!aboutVisible) {
      setTypedLines([]);
      setCurrentLine('');
      setCharIndex(0);
      setLineIndex(0);
      setAboutLoop(0);
      return;
    }
    if (lineIndex < fullLines.length) {
      if (charIndex < fullLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine(prev => prev + fullLines[lineIndex][charIndex]);
          setCharIndex(i => i + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedLines(prev => [...prev, fullLines[lineIndex]]);
          setCurrentLine('');
          setCharIndex(0);
          setLineIndex(i => i + 1);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      // All lines have been typed, stop the animation.
      // It will restart only if the section scrolls out of view and then back in.
      return;
    }
  }, [charIndex, lineIndex, aboutLoop, aboutVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (manualActiveSection) return;
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.target.id === 'About') setAboutVisible(true);
            if (entry.target.id === 'Skills') setSkillsVisible(true);
          } else {
            if (entry.target.id === 'About') setAboutVisible(false);
            if (entry.target.id === 'Skills') setSkillsVisible(false);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    sections.forEach(sec => {
      const element = document.getElementById(sec);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Call this when component mounts
  useEffect(() => {
    addKeyframes();
  }, []);

  // Skill lines for typewriter
  const prevSkillsVisible = usePrevious(skillsVisible);

  const [typedSkills, skillsDone] = useTypewriterOnceOnVisible(skillLines, skillsVisible);

  useEffect(() => {
    if (skillsVisible && !prevSkillsVisible) {
      setSkillsAnimationKey(k => k + 1);
    }
  }, [skillsVisible, prevSkillsVisible]);

  // Simple typewriter effect for Skills section (like About)
  useEffect(() => {
    if (!skillsVisible) {
      setSkillsTypedLines([]);
      setSkillsCurrentLine('');
      setSkillsCharIndex(0);
      setSkillsLineIndex(0);
      setSkillsLoop(0);
      return;
    }
    if (skillsLineIndex < skillsFullLines.length) {
      if (skillsCharIndex < skillsFullLines[skillsLineIndex].length) {
        const timeout = setTimeout(() => {
          setSkillsCurrentLine(prev => prev + skillsFullLines[skillsLineIndex][skillsCharIndex]);
          setSkillsCharIndex(i => i + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setSkillsTypedLines(prev => [...prev, skillsFullLines[skillsLineIndex]]);
          setSkillsCurrentLine('');
          setSkillsCharIndex(0);
          setSkillsLineIndex(i => i + 1);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      // All lines have been typed, stop the animation.
      // It will restart only if the section scrolls out of view and then back in.
      return;
    }
  }, [skillsCharIndex, skillsLineIndex, skillsLoop, skillsVisible]);

  const bgClass = darkMode ? 'bg-[#1e1e1e] text-[#d4d4d4]' : 'bg-[#ffffff] text-[#000000]';
  const sidebarClass = darkMode ? 'bg-[#252526]' : 'bg-[#f3f3f3]';
  const headingColor = darkMode ? 'text-[#4FC1FF]' : 'text-[#0000FF]';
  const linkColor = darkMode ? 'text-blue-400' : 'text-[#0000FF]';
  const hoverLinkColor = darkMode ? 'hover:text-blue-300' : 'hover:text-[#0000FF]/80';
  const strongColor = darkMode ? 'text-[#9CDCFE]' : 'text-[#0000FF]';
  const textColor = darkMode ? 'text-[#d4d4d4]' : 'text-[#000000]';

  // Helper for theme-aware text color
  const cardTextColor = darkMode ? 'text-gray-300' : 'text-gray-800';
  const cardDescColor = darkMode ? 'text-gray-400' : 'text-gray-700';

  // Project cards data
  const projectCards = [
    {
      title: 'Maze Solver (Dijkstra, Java UI)',
      description: 'Java-based GUI application to visualize and compute the shortest path in a maze using Dijkstra\'s algorithm.',
      role: 'Built both the algorithm and the interactive Java UI; handled real-time updates as the maze was being solved.',
      tech: ['Java', 'Swing', 'Graph Algorithms', 'Dijkstra', 'OOP'],
      challenges: 'Ensured efficient pathfinding and responsive GUI rendering for larger mazes.',
      impact: 'Helped reinforce graph theory and UI programming concepts.',
      tags: ['SWE'],
    },
    {
      title: 'FSM Vending Machine (Rust)',
      description: 'Finite State Machine-based simulation of a vending machine implemented in Rust.',
      role: 'Designed state transitions, modeled coin inputs and product selection logic.',
      tech: ['Rust', 'FSMs', 'Enums', 'Pattern Matching', 'Cargo'],
      challenges: 'Managing multiple state transitions clearly using Rust\'s type safety and match statements.',
      impact: 'Strengthened understanding of FSM design and Rust\'s memory-safe architecture.',
      tags: ['SWE'],
    },
    {
      title: 'MicroOCaml Optimizer & Type Checker (OCaml)',
      description: 'Built a type-checker and optimizer for a small OCaml-like language, focusing on semantic analysis and simplifications.',
      role: 'Implemented constant folding, dead code elimination, and a robust type-checker.',
      tech: ['OCaml', 'Parsers', 'Functional Programming', 'Type Inference'],
      challenges: 'Designing recursive type rules and optimization passes while preserving correctness.',
      impact: 'Improved performance of user-written programs by reducing runtime complexity during testing.',
      tags: ['SWE'],
    },
    {
      title: 'Portfolio Optimization',
      description: 'Developed an optimizer to build portfolios with maximal Sharpe Ratio or minimal risk using historical return data.',
      role: 'Handled data preprocessing, optimization logic, and backtesting.',
      tech: ['Python', 'NumPy', 'Pandas', 'cvxpy', 'matplotlib'],
      challenges: 'Dealing with missing data, matrix singularity issues, and balancing risk-return efficiently.',
      impact: 'Improved annualized Sharpe Ratio by 25% over naive strategies.',
      tags: ['Quant'],
    },
    {
      title: 'Option Pricing Models',
      description: 'Implemented pricing models including Black-Scholes and Binomial Trees to evaluate European and American options.',
      role: 'Built simulation tools and verified theoretical prices against real market data.',
      tech: ['Python', 'SciPy', 'NumPy', 'Financial Math'],
      challenges: 'Precision issues in numerical methods; ensuring convergence in binomial pricing.',
      impact: 'Achieved high accuracy in option pricing and gained practical exposure to derivatives valuation.',
      tags: ['Quant'],
    },
    {
      title: 'Flash Crash Analysis',
      description: 'Investigated the 2010 Flash Crash using trade and quote data to identify anomalous patterns and order flow behavior.',
      role: 'Cleaned and analyzed large tick-by-tick datasets; created visual timelines and volatility profiles.',
      tech: ['Python', 'Pandas', 'Plotly', 'Market Microstructure Theory'],
      challenges: 'Handling massive datasets efficiently; syncing timestamps across exchanges.',
      impact: 'Provided insights into high-frequency trading triggers and liquidity vacuum effects.',
      tags: ['Quant', 'DS/Analyst'],
    },
    {
      title: 'Bond Yield Curve Regression',
      description: 'Built regression models to fit U.S. Treasury yield curves and studied shifts over time.',
      role: 'Fitted Nelson-Siegel curves; analyzed slope, curvature, and level factors.',
      tech: ['Python', 'sklearn', 'NumPy', 'Pandas', 'Statsmodels'],
      challenges: 'Curve overfitting, handling irregular data intervals.',
      impact: 'Improved predictive accuracy of forward rates and duration modeling.',
      tags: ['Quant'],
    },
    {
      title: 'Solar Power Generation Data Study',
      description: 'Analyzed solar panel generation patterns using time-series data to identify peak hours and efficiency losses.',
      role: 'Processed data from multiple sensors, visualized patterns, and suggested operational improvements.',
      tech: ['Python', 'matplotlib', 'seaborn', 'Pandas'],
      challenges: 'Missing timestamps, inconsistent frequency in readings.',
      impact: 'Project won an award for data storytelling; helped partner organization identify panel degradation.',
      tags: ['DS/Analyst'],
    },
    {
      title: 'GPA Analysis',
      description: 'Conducted statistical analysis on GPA data to examine correlations with extracurriculars, majors, and credit loads.',
      role: 'Performed EDA, regression, and hypothesis testing.',
      tech: ['Python', 'seaborn', 'NumPy', 'statsmodels'],
      challenges: 'Dealing with outliers and self-reported biases.',
      impact: 'Highlighted trends valuable for academic advising and workload planning.',
      tags: ['DS/Analyst'],
    },
  ];

  return (
    <div className={`relative flex ${bgClass} font-mono text-base`}>
      {/* Theme toggle button in top-right corner */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full border ${
          darkMode ? 'hover:bg-gray-400 hover:text-white' : 'hover:bg-gray-200'
        }`}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-24 ${sidebarClass} flex flex-col items-center space-y-4 py-6 z-40`}>
        {sections.map(sec => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(sec).scrollIntoView({ behavior: 'smooth' });
              setActiveSection(sec);
              setManualActiveSection(sec);
              setTimeout(() => setManualActiveSection(null), 700);
            }}
            className={`text-xs writing-vertical tracking-wide transition-all duration-200 cursor-pointer ${
              darkMode ? 'hover:text-blue-400' : 'hover:text-[#0000FF]'
            } ${
              activeSection === sec 
                ? darkMode 
                  ? 'text-blue-500 font-bold scale-110' 
                  : 'text-[#0000FF] font-bold scale-110'
                : darkMode 
                  ? 'text-gray-400' 
                  : 'text-gray-600'
            }`}
            style={{ writingMode: 'vertical-rl', transform: 'rotate(270deg)' }}
          >
            {sec}
          </a>
        ))}
      </div>

      {/* Main content */}
      <div className="ml-24 flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <section id="About" ref={el => (refs.current['About'] = el)} className="py-16 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-4xl mx-auto">
              <div className="space-y-2 text-center lg:text-left flex-1">
                {typedLines.map((line, idx) => (
                  <div key={`done-${aboutLoop}-${idx}`} className="whitespace-pre">{highlightLine(line)}</div>
                ))}
                {aboutVisible && lineIndex < fullLines.length && (
                  <div className="whitespace-pre">
                    {highlightPartial(currentLine)}
                    <span className="border-r-2 border-gray-400 animate-blink">&nbsp;</span>
                  </div>
                )}
              </div>
              <div className="flex-1 hidden lg:block">
                <Lottie animationData={codingAnimation} loop={true} />
              </div>
            </div>
          </section>

          <div className="h-24"></div> {/* Spacer between About and Skills */}

          <section id="Skills" ref={el => (refs.current['Skills'] = el)} className="py-16 flex items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <h1 className={`text-2xl mb-8 ${headingColor} text-center animate-fade-in-up ${skillsVisible ? 'visible' : ''}`}>Skills</h1>
              <div className="space-y-2 max-w-4xl mx-auto text-center">
                {skillsTypedLines.map((line, idx) => (
                  line.trim() === '' ? null : (
                    line.includes('=') ? (
                      <div key={`skills-done-${skillsLoop}-${idx}`} className="whitespace-pre font-mono text-base flex justify-center">{highlightLine(line)}</div>
                    ) : (
                      <div key={`skills-done-${skillsLoop}-${idx}`} className="font-bold text-lg flex justify-center mt-4 mb-2">{line}</div>
                    )
                  )
                ))}
                {skillsVisible && skillsLineIndex < skillsFullLines.length && (
                  skillsFullLines[skillsLineIndex].trim() === '' ? null : (
                    skillsFullLines[skillsLineIndex].includes('=') ? (
                      <div className="whitespace-pre font-mono text-base flex justify-center">
                        {highlightPartial(skillsCurrentLine)}
                        <span className="border-r-2 border-gray-400 animate-blink">&nbsp;</span>
                      </div>
                    ) : (
                      <div className="font-bold text-lg flex justify-center mt-4 mb-2">
                        {skillsCurrentLine}
                        <span className="border-r-2 border-gray-400 animate-blink">&nbsp;</span>
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </section>

          <section id="Projects" ref={el => (refs.current['Projects'] = el)} className="py-16 flex items-center">
            <div className="w-full">
              <h1 className={`text-2xl mb-10 ${headingColor} text-center`}>Projects</h1>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectCards.map((proj, idx) => (
                  <div
                    key={proj.title}
                    className={`rounded-xl border-2 shadow-md p-6 flex flex-col h-full bg-opacity-80 ${darkMode ? 'bg-[#23272e] border-gray-700' : 'bg-white border-gray-200'}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-bold">{proj.title}</span>
                    </div>
                    <div className={`text-sm mb-2 ${cardDescColor}`} style={{ minHeight: '2.5em' }}>{proj.description}</div>
                    <div className="mb-2"><span className="font-semibold">Your Role:</span> <span className={cardTextColor}>{proj.role}</span></div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {proj.tech.map(t => (
                        <span key={t} className={`px-2 py-1 rounded text-xs font-mono ${darkMode ? 'bg-[#2d3748] text-blue-200' : 'bg-blue-100 text-blue-800'}`}>{t}</span>
                      ))}
                      {proj.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 rounded text-xs font-mono ${tag === 'SWE' ? (darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-200 text-blue-800') : tag === 'Quant' ? (darkMode ? 'bg-green-900 text-green-300' : 'bg-green-200 text-green-800') : (darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800')}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="mb-2"><span className="font-semibold">Challenges:</span> <span className={cardTextColor}>{proj.challenges}</span></div>
                    <div className="mb-2"><span className="font-semibold">Impact:</span> <span className={cardTextColor}>{proj.impact}</span></div>
                    <div className={`mt-auto text-xs ${cardDescColor}`}>Code available upon request</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="Experience" ref={el => (refs.current['Experience'] = el)} className="py-16 flex items-center">
            <div className="w-full">
              <h1 className={`text-2xl mb-10 ${headingColor} text-center`}>Experience</h1>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8 text-sm">
                  <div className="text-center">
                    <h2 className={`text-lg font-semibold ${headingColor} mb-4`}>Professional & Research Experience</h2>
                    <div className="space-y-6">
                      <div className="flex flex-col items-center">
                        <strong className={`${strongColor} mb-2`}>Software Engineering Intern @ BuzzClan</strong>
                        <span className={textColor}>Developed and maintained enterprise applications.</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <strong className={`${strongColor} mb-2`}>Quantitative Researcher @ WSQ</strong>
                        <span className={textColor}>Built and backtested quantitative trading strategies; performed financial data analysis.</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <strong className={`${strongColor} mb-2`}>Undergraduate Researcher @ UMD Climate Computing Lab</strong>
                        <span className={textColor}>Worked on regression and uncertainty modeling for climate data analysis.</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className={`text-lg font-semibold ${headingColor} mb-4`}>Teaching & Leadership</h2>
                    <div className="space-y-6">
                      <div className="flex flex-col items-center">
                        <strong className={`${strongColor} mb-2`}>Teaching Assistant @ UMD</strong>
                        <span className={textColor}>Mentored students, designed curriculum, and supported learning in Computer Science and Math courses.</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <strong className={`${strongColor} mb-2`}>Co-founder @ Ruhin Education</strong>
                        <span className={textColor}>Launched an edtech startup focused on accessible learning for special needs students.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="Contact" ref={el => (refs.current['Contact'] = el)} className="py-16 flex items-center">
            <div className="w-full">
              <h1 className={`text-2xl mb-10 ${headingColor} text-center`}>Contact</h1>
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center gap-8 mt-6">
                  <a href="mailto:chetanyamakkar99@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                    <FaEnvelope size={32} className={`${headingColor} hover:scale-110 transition-transform`} />
                  </a>
                  <a href="https://www.linkedin.com/in/chetanyamakkar/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin size={32} className={`${headingColor} hover:scale-110 transition-transform`} />
                  </a>
                  <a href="https://github.com/chetanyamakkar11" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub size={32} className={`${headingColor} hover:scale-110 transition-transform`} />
                  </a>
                  <div className="relative">
                    <button
                      onClick={() => setResumeDropdownOpen(open => !open)}
                      className="focus:outline-none"
                      title="Resume"
                    >
                      <FaFilePdf size={32} className={`${headingColor} hover:scale-110 transition-transform`} />
                    </button>
                    {resumeDropdownOpen && (
                      <div
                        className={`absolute z-50 left-full top-1/2 -translate-y-1/2 ml-2 w-56 rounded-md shadow-lg bg-[#23272e] border border-[#4FC1FF]`}
                        onMouseLeave={() => setResumeDropdownOpen(false)}
                      >
                        <a
                          href="https://drive.google.com/file/d/1wSHQUrUyCmEIYzn30n9mgJyTx0ZtrSaL/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-[#4FC1FF] hover:bg-[#263238] hover:text-white transition"
                        >
                          SWE Resume
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1UZ0Kpmxe-bMR_Cy0CCrTMrpdmIW-GxoE/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-[#4FC1FF] hover:bg-[#263238] hover:text-white transition"
                        >
                          Quant Resume
                        </a>
                        <a
                          href="https://drive.google.com/file/d/1tMrEzEVc8VHaI73qmIauQIFSGdR2RzfV/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-[#4FC1FF] hover:bg-[#263238] hover:text-white transition"
                        >
                          Analyst Resume
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
