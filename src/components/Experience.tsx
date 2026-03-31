import React from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { experiences } from '../data/portfolioData'
import type { Experience } from '../types'
import styles from './Experience.module.css'

const ExpCard: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  const ref = useScrollFade<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ '--accent': exp.accentColor } as React.CSSProperties}
    >
      <div className={styles.head}>
        <div>
          <div className={styles.title}>{exp.title}</div>
          <div className={styles.company}>{exp.company}</div>
          <div className={styles.location}>📍 {exp.location}</div>
        </div>
        <span className={styles.period}>{exp.period}</span>
      </div>

      <ul className={styles.bullets}>
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className={styles.stack}>
        {exp.stack.map(({ label, color }) => (
          <span key={label} className={`tag tag-${color}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <span className="section-label">Where I've worked</span>
        <h2 className="section-title">Work <em>Experience</em></h2>
        <div className="divider divider-blue" />
        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <ExpCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
