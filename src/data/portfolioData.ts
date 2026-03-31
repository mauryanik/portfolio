import type { Experience, Project, Skill, Achievement, Certification, Stat } from '../types'

export const experiences: Experience[] = [
  {
    id: 'airbus',
    title: 'Software Developer — Airbus Project',
    company: 'Tata Consultancy Services',
    location: 'Bangalore, India',
    period: 'Jun 2025 – Sep 2025',
    accentColor: 'var(--c1)',
    bullets: [
      'Designed and developed the frontend for Data Tagging & Expert Classification — an Airbus platform for export control jurisdiction and expert validation workflows.',
      'Built a scalable table-based UI to render and manage 5,000+ document records using optimized component rendering, memoization, and structured Redux state.',
      'Engineered efficient data-loading and state-management patterns to handle large datasets without UI lag, ensuring seamless Human-in-the-Loop expert validation.',
      'Collaborated with backend and ML teams to integrate with FastAPI, Firestore, and Pub/Sub-driven processing states.',
      'Contributed to the "LLM as a Judge" workflow by enabling structured expert feedback that directly enhanced model accuracy.',
      'Mentored freshers — documenting workflows and training on React and TypeScript for project continuity.',
    ],
    stack: [
      { label: 'React (TypeScript)', color: 'green' },
      { label: 'Redux', color: 'green' },
      { label: 'FastAPI', color: 'yellow' },
      { label: 'Google Cloud', color: 'yellow' },
      { label: 'Pub/Sub', color: 'yellow' },
      { label: 'Firestore', color: 'yellow' },
      { label: 'Arize Phoenix', color: 'purple' },
    ],
  },
  {
    id: 'digital-garage',
    title: 'Software Developer — Digital Garage',
    company: 'Tata Consultancy Services',
    location: 'Noida, India',
    period: 'Jan 2024 – May 2025 · Oct 2025 – Jan 2026',
    accentColor: 'var(--c3)',
    bullets: [
      'Delivered 20+ POCs including AI-assisted dashboards for global manufacturing clients showcased in Tech Roadshows and client demos.',
      'Built responsive, interactive UIs using React + TypeScript + Redux with scalable, reusable component architecture.',
      'Implemented clean state-management patterns and worked closely with designers, architects, and product owners to ship rapid prototypes.',
      'Focused on performance, accessibility, and maintainability — added documentation and test coverage.',
      'Won the Best POC Award (Wave 4) in the BYOR Program — recognised for uniqueness, solution effectiveness, and business impact.',
    ],
    stack: [
      { label: 'React', color: 'green' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'Redux', color: 'green' },
      { label: 'Tailwind CSS', color: 'blue' },
      { label: 'REST APIs', color: 'blue' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'airbus-tagging',
    name: 'Airbus Data Tagging Platform',
    description:
      'Enterprise-grade frontend for export control classification with a Human-in-the-Loop expert validation system. Handles 5,000+ document records with smooth UX at scale.',
    emoji: '🏷️',
    bannerClass: 'banner-red',
    cardClass: 'card-red',
    tech: [
      { label: 'React', color: 'green' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'Redux', color: 'green' },
      { label: 'FastAPI', color: 'yellow' },
      { label: 'Firestore', color: 'yellow' },
    ],
    isEnterprise: true,
  },
  {
    id: 'ai-dashboards',
    name: 'AI Manufacturing Dashboards',
    description:
      'Suite of AI-assisted dashboards for global manufacturing clients, presented at international Tech Roadshows. Best POC Award winner in TCS BYOR Wave 4.',
    emoji: '🤖',
    bannerClass: 'banner-green',
    cardClass: 'card-green',
    tech: [
      { label: 'React', color: 'green' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'Tailwind', color: 'blue' },
      { label: 'Redux', color: 'green' },
    ],
    isEnterprise: true,
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    description:
      'This portfolio! Fully typed React + TypeScript app with multiple components, smooth scroll animations, and a bold expressive design system.',
    emoji: '💡',
    bannerClass: 'banner-blue',
    cardClass: 'card-blue',
    tech: [
      { label: 'React', color: 'green' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'CSS3', color: 'blue' },
      { label: 'Vite', color: 'yellow' },
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
  },
]

export const skills: Skill[] = [
  {
    id: 'frontend',
    icon: '⚛️',
    name: 'Frontend Core',
    subtitle: 'UI & Interaction Layer',
    hoverClass: 'sk-green',
    tags: [
      { label: 'React', color: 'green' },
      { label: 'Next.js', color: 'green' },
      { label: 'TypeScript', color: 'green' },
      { label: 'JavaScript', color: 'green' },
      { label: 'HTML5', color: 'green' },
      { label: 'CSS3', color: 'green' },
      { label: 'Tailwind CSS', color: 'green' },
    ],
  },
  {
    id: 'state',
    icon: '🗂️',
    name: 'State Management',
    subtitle: 'Architecture & Data Flow',
    hoverClass: 'sk-blue',
    tags: [
      { label: 'Redux', color: 'blue' },
      { label: 'Redux Toolkit', color: 'blue' },
      { label: 'Context API', color: 'blue' },
      { label: 'REST APIs', color: 'blue' },
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    name: 'Backend & Databases',
    subtitle: 'Server & Data Layer',
    hoverClass: 'sk-red',
    tags: [
      { label: 'Python', color: 'red' },
      { label: 'FastAPI', color: 'red' },
      { label: 'Node.js', color: 'red' },
      { label: 'MongoDB', color: 'red' },
      { label: 'MySQL', color: 'red' },
      { label: 'C++', color: 'red' },
    ],
  },
  {
    id: 'cloud',
    icon: '☁️',
    name: 'Cloud & DevOps',
    subtitle: 'Infrastructure & Tooling',
    hoverClass: 'sk-yellow',
    tags: [
      { label: 'Google Cloud', color: 'yellow' },
      { label: 'Pub/Sub', color: 'yellow' },
      { label: 'Firestore', color: 'yellow' },
      { label: 'Docker', color: 'yellow' },
      { label: 'Git', color: 'yellow' },
      { label: 'Jira', color: 'yellow' },
      { label: 'Arize Phoenix', color: 'purple' },
    ],
  },
]

export const achievements: Achievement[] = [
  {
    id: 'airbus-award',
    icon: '🏆',
    title: 'Special Initiative Award — Airbus',
    description:
      'Awarded by Airbus for outstanding contribution, dedication, and serving as an inspiring role model to colleagues.',
    hoverColor: 'rgba(255,209,102,0.4)',
  },
  {
    id: 'tcs-spot',
    icon: '⚡',
    title: 'On The Spot (Team) Award — TCS',
    description:
      'Received from TCS Digital Garage for exceptional contribution and commitment towards high-impact deliverables.',
    hoverColor: 'rgba(255,77,109,0.4)',
  },
  {
    id: 'byor',
    icon: '🥇',
    title: 'Best POC Award — BYOR Wave 4',
    description:
      'Recognised by the BYOR Program for uniqueness of idea, solution effectiveness, business impact, and presentation quality.',
    hoverColor: 'rgba(6,214,160,0.4)',
  },
  {
    id: 'leetcode',
    icon: '💻',
    title: 'LeetCode Rating 1595',
    description:
      'Solved 480+ DSA problems. Top-tier competitive problem-solver with strong algorithmic fundamentals.',
    hoverColor: 'rgba(76,201,240,0.4)',
  },
]

export const certifications: Certification[] = [
  {
    id: 'azure',
    icon: '☁️',
    iconBg: 'rgba(0,114,198,0.15)',
    iconColor: '#4CC9F0',
    name: 'Microsoft DP-900',
    issuer: 'Azure Data Fundamentals · Microsoft',
  },
  {
    id: 'nptel-testing',
    icon: '🧪',
    iconBg: 'rgba(6,214,160,0.12)',
    iconColor: 'var(--c3)',
    name: 'NPTEL Software Testing',
    issuer: 'Top 2% among 5,771 candidates',
  },
  {
    id: 'nptel-cloud',
    icon: '☁️',
    iconBg: 'rgba(255,209,102,0.12)',
    iconColor: 'var(--c2)',
    name: 'NPTEL Cloud Computing',
    issuer: 'Scored 75% · NPTEL',
  },
]

export const stats: Stat[] = [
  { value: '2+', label: 'Years Experience', colorClass: 's1' },
  { value: '20+', label: 'POCs Delivered', colorClass: 's2' },
  { value: '480+', label: 'LeetCode Problems', colorClass: 's3' },
  { value: '1595', label: 'LeetCode Rating', colorClass: 's4' },
]
