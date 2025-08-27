import React from 'react'
import { Star, Github, ExternalLink, Shield } from 'lucide-react'

const ProjectCard = ({ project, techToIcon }) => {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const gx = ((e.clientX - r.left) / r.width) * 100
    const gy = ((e.clientY - r.top) / r.height) * 100
    e.currentTarget.style.setProperty('--gx', gx + '%')
    e.currentTarget.style.setProperty('--gy', gy + '%')
  }

  return (
    <div className="group glass-card neon-border glow-card overflow-hidden hover-intense holo-tilt transition-all duration-500" onMouseMove={onMove}>
      <div className="relative h-44 w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && !project.isEnterprise && (
            <span className="neon-chip">Featured</span>
          )}
          {project.isEnterprise && (
            <span className="neon-chip inline-flex items-center gap-1"><Shield className="w-3 h-3 text-[#f78166]" />Enterprise</span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{project.title}</h3>
        <p className="text-secondary line-clamp-3 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((t) => {
            const Icon = techToIcon ? techToIcon(t) : null
            return (
              <span key={t} className="neon-chip">
                {Icon ? <Icon className="w-4 h-4 text-[#58a6ff]" /> : null}
                {t}
              </span>
            )
          })}
          {project.technologies.length > 5 ? (
            <span className="neon-chip">+{project.technologies.length - 5} more</span>
          ) : null}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-secondary">
            <Star className="w-4 h-4 text-[#238636]" />
            <span className="text-[#238636] font-medium">{project.rating}</span>
            <span className="text-secondary text-sm">({project.stars})</span>
          </div>
          <span className="neon-chip capitalize">{project.category}</span>
        </div>

        <div className="flex gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-secondary inline-flex items-center justify-center gap-2">
            <Github className="w-4 h-4" /> Code
          </a>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary inline-flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" /> Live
            </a>
          ) : (
            <span className="flex-1 bg-[#21262d] text-secondary px-4 py-2 rounded-lg text-center">Case Study</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

