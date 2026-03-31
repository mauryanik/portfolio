import React, { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Contact.module.css'

const CONTACT_LINKS = [
  { icon: '📧', label: 'nikeshinknit@gmail.com', href: 'mailto:nikeshinknit@gmail.com', cls: 'cl1' },
  { icon: '📱', label: '+91-8303531773', href: 'tel:+918303531773', cls: 'cl3' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/nikesh-maurya', cls: 'cl2', external: true },
  { icon: '⌨️', label: 'LeetCode · 1595', href: 'https://leetcode.com', cls: 'cl4', external: true },
]

const Contact: React.FC = () => {
  const ref = useScrollFade<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nikeshinknit@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className="section-inner">
        <div ref={ref} className={styles.inner}>
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>
            Get in touch
          </span>
          <h2 className={`section-title ${styles.centered}`}>
            Let's <em>Work Together</em>
          </h2>
          <div className={`divider divider-red ${styles.dividerCenter}`} />

          <p className={styles.desc}>
            I'm open to full-time roles, freelance projects, and interesting collaborations.
            Whether you have a product to build or just want to chat about frontend engineering
            — my inbox is always open.
          </p>

          <button onClick={handleCopyEmail} className={styles.copyBtn}>
            {copied ? '✓ Copied!' : '📋 Copy Email Address'}
          </button>

          <div className={styles.links}>
            {CONTACT_LINKS.map(({ icon, label, href, cls, external }) => (
              <a
                key={label}
                href={href}
                className={`${styles.link} ${styles[cls]}`}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <span className={styles.linkIcon}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
