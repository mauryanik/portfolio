import React, { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact']

const Navbar: React.FC = () => {
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>NKM</a>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${active === href.slice(1) ? styles.active : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:nikeshinknit@gmail.com" className={styles.cta}>
        Hire Me
      </a>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
        <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
        <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
