import React from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { projects } from '../data/portfolioData'
import type { Project } from '../types'
import styles from './Projects.module.css'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useScrollFade<HTMLDivElement>()

  return (
    <div ref={ref} className={`${styles.card} ${styles[project.cardClass]}`}>
      <div className={`${styles.banner} ${styles[project.bannerClass]}`}>
        <span className={styles.emoji}>{project.emoji}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.name}>{project.name}</div>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map(({ label, color }) => (
            <span key={label} className={`tag tag-${color}`}>{label}</span>
          ))}
        </div>

        <div className={styles.links}>
          {project.isEnterprise ? (
            <span className={styles.locked}>🔒 Enterprise Project</span>
          ) : (
            <>
              {project.liveUrl && (
                <a href={project.liveUrl} className={`${styles.link} ${styles.primary}`}>
                  Live ↗
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.link}>
                  GitHub ↗
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  return (
    <section className={`section ${styles.bg}`} id="projects">
      <div className="section-inner">
        <span className="section-label">Things I've built</span>
        <h2 className="section-title">Featured <em>Projects</em></h2>
        <div className="divider divider-red" />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
