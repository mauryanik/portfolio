import React from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { skills } from '../data/portfolioData'
import type { Skill } from '../types'
import styles from './Skills.module.css'

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const ref = useScrollFade<HTMLDivElement>()
  return (
    <div ref={ref} className={`${styles.card} ${styles[skill.hoverClass]}`}>
      <span className={styles.icon}>{skill.icon}</span>
      <div className={styles.name}>{skill.name}</div>
      <div className={styles.sub}>{skill.subtitle}</div>
      <div className={styles.tags}>
        {skill.tags.map(({ label, color }) => (
          <span key={label} className={`tag tag-${color}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

const Skills: React.FC = () => {
  return (
    <section className={`section ${styles.bg}`} id="skills">
      <div className="section-inner">
        <span className="section-label">What I work with</span>
        <h2 className="section-title">Technical <em>Skills</em></h2>
        <div className="divider divider-green" />
        <div className={styles.grid}>
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
