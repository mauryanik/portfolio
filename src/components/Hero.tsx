import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      {/* Ambient blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={`${styles.blob} ${styles.blob4}`} />

      <div className={styles.inner}>
        {/* Left: content */}
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Available for opportunities
          </div>

          <h1 className={styles.heading}>
            <span className={styles.nameLine}>Nikesh</span>
            <span className={`${styles.nameLine} ${styles.accent}`}>Kumar Maurya</span>
          </h1>

          <p className={styles.role}>
            Frontend Engineer ·{' '}
            <strong className={styles.roleAccent}>React & TypeScript</strong> · 2+ Years
          </p>

          <p className={styles.desc}>
            Building production-grade web apps and AI-assisted systems that are fast, beautiful,
            and maintainable. Currently at{' '}
            <strong className={styles.highlight}>Tata Consultancy Services</strong>, previously
            working with <strong className={styles.highlight}>Airbus</strong>.
          </p>

          <div className={styles.btns}>
            <a href="#projects" className="btn btn-primary">View My Work ↓</a>
            <a href="mailto:nikeshinknit@gmail.com" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>

        {/* Right: profile card */}
        <div className={styles.card}>
          <div className={styles.avatar}>NM</div>
          <div className={styles.cardName}>Nikesh Kumar Maurya</div>
          <div className={styles.cardTitle}>Software Engineer — Frontend</div>
          <div className={styles.badges}>
            {[
              { dot: 'var(--c3)', text: 'React · TypeScript · Redux' },
              { dot: 'var(--c4)', text: 'TCS · Airbus · Digital Garage' },
              { dot: 'var(--c2)', text: 'Noida, India 📍' },
              { dot: 'var(--c1)', text: '480+ LeetCode problems ✓' },
            ].map(({ dot, text }) => (
              <div key={text} className={styles.badge}>
                <span className={styles.badgeDot} style={{ background: dot }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
