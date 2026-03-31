import React from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { achievements, certifications } from '../data/portfolioData'
import type { Achievement, Certification } from '../types'
import styles from './Achievements.module.css'

const AchCard: React.FC<{ item: Achievement }> = ({ item }) => {
  const ref = useScrollFade<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={styles.achCard}
      style={{ '--hover-border': item.hoverColor } as React.CSSProperties}
    >
      <span className={styles.achIcon}>{item.icon}</span>
      <div className={styles.achTitle}>{item.title}</div>
      <p className={styles.achDesc}>{item.description}</p>
    </div>
  )
}

const CertPill: React.FC<{ cert: Certification }> = ({ cert }) => {
  const ref = useScrollFade<HTMLDivElement>()
  return (
    <div ref={ref} className={styles.certPill}>
      <div
        className={styles.certBadge}
        style={{ background: cert.iconBg, color: cert.iconColor }}
      >
        {cert.icon}
      </div>
      <div>
        <div className={styles.certName}>{cert.name}</div>
        <div className={styles.certIssuer}>{cert.issuer}</div>
      </div>
    </div>
  )
}

const Achievements: React.FC = () => {
  return (
    <section className={`section ${styles.bg}`} id="achievements">
      <div className="section-inner">
        <span className="section-label">Recognition</span>
        <h2 className="section-title">Awards & <em>Achievements</em></h2>
        <div className="divider divider-yellow" />

        <div className={styles.achGrid}>
          {achievements.map((item) => (
            <AchCard key={item.id} item={item} />
          ))}
        </div>

        <h3 className={styles.certsHeading}>Certifications</h3>
        <div className={styles.certsGrid}>
          {certifications.map((cert) => (
            <CertPill key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
