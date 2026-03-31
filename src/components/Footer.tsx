import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Designed & built by{' '}
        <span className={styles.accent}>Nikesh Kumar Maurya</span>{' '}
        · {new Date().getFullYear()} · Noida, India
      </p>
      <p className={styles.sub}>
        Built with <span className={styles.react}>React</span> +{' '}
        <span className={styles.ts}>TypeScript</span> + Vite
      </p>
    </footer>
  )
}

export default Footer
