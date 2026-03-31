import React from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { stats } from '../data/portfolioData'
import styles from './About.module.css'

const About: React.FC = () => {
  const textRef = useScrollFade<HTMLDivElement>()
  const statsRef = useScrollFade<HTMLDivElement>()

  return (
    <section className="section" id="about">
      <div className="section-inner">
        <span className="section-label">Who I am</span>
        <h2 className="section-title">About <em>Me</em></h2>
        <div className="divider divider-red" />

        <div className={styles.grid}>
          {/* Bio */}
          <div ref={textRef} className={styles.bio}>
            <p>
              Hey! I'm <strong>Nikesh</strong> — a Frontend-focused Software Engineer with{' '}
              <strong>2+ years of experience</strong> building production-grade web applications
              and AI-assisted systems. I thrive at the intersection of clean code and great UX.
            </p>
            <p>
              At <strong>TCS</strong>, I've worked on high-impact projects for global enterprises
              — from building a table UI that handles <strong>5,000+ document records</strong> for
              Airbus, to delivering <strong>20+ POC dashboards</strong> showcased at global Tech
              Roadshows.
            </p>
            <p>
              I'm passionate about performance, accessibility, and maintainable architecture. When
              I'm not shipping features, I'm grinding DSA problems on LeetCode and leveling up my
              backend skills.
            </p>

            <div className={styles.contacts}>
              {[
                { icon: '📧', bg: 'rgba(255,77,109,0.12)', color: 'var(--c1)', text: 'nikeshinknit@gmail.com', href: 'mailto:nikeshinknit@gmail.com' },
                { icon: '📱', bg: 'rgba(6,214,160,0.12)', color: 'var(--c3)', text: '+91-8303531773', href: 'tel:+918303531773' },
                { icon: '📍', bg: 'rgba(76,201,240,0.12)', color: 'var(--c4)', text: 'Noida, Uttar Pradesh, India' },
                { icon: '🎓', bg: 'rgba(255,209,102,0.12)', color: 'var(--c2)', text: 'B.Tech IT — KNIT Sultanpur (8.30 CGPA)' },
              ].map(({ icon, bg, color, text, href }) => (
                <div key={text} className={styles.contactRow}>
                  <span className={styles.contactIcon} style={{ background: bg, color }}>
                    {icon}
                  </span>
                  {href ? (
                    <a href={href} className={styles.contactLink}>{text}</a>
                  ) : (
                    <span className={styles.contactText}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className={styles.statsGrid}>
            {stats.map(({ value, label, colorClass }) => (
              <div key={label} className={`${styles.statCard} ${styles[colorClass]}`}>
                <div className={styles.statNum}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
