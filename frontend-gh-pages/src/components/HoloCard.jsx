import React from 'react'

const HoloCard = ({ title, subtitle, icon, children, className = '' }) => {
  return (
    <div className={`glass-card neon-border holo-tilt p-6 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-secondary text-sm">{subtitle}</div>
        {icon ? <div className="text-[#58a6ff]">{icon}</div> : null}
      </div>
      <h3 className="text-xl font-bold text-primary neon-text mb-2">{title}</h3>
      <div className="text-secondary leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export default HoloCard

