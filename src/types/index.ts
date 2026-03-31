export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  stack: { label: string; color: 'green' | 'blue' | 'yellow' | 'red' | 'purple' }[]
  accentColor: string
}

export interface Project {
  id: string
  name: string
  description: string
  emoji: string
  bannerClass: string
  cardClass: string
  tech: { label: string; color: 'green' | 'blue' | 'yellow' | 'red' | 'purple' }[]
  liveUrl?: string
  githubUrl?: string
  isEnterprise?: boolean
}

export interface Skill {
  id: string
  icon: string
  name: string
  subtitle: string
  hoverClass: string
  tags: { label: string; color: 'green' | 'blue' | 'yellow' | 'red' | 'purple' }[]
}

export interface Achievement {
  id: string
  icon: string
  title: string
  description: string
  hoverColor: string
}

export interface Certification {
  id: string
  icon: string
  iconBg: string
  iconColor: string
  name: string
  issuer: string
}

export interface Stat {
  value: string
  label: string
  colorClass: string
}
