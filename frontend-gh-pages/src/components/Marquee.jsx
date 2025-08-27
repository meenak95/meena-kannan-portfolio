import React from 'react'

const Marquee = ({ items = [] }) => {
  const content = items.length ? items : [
    { label: '99.98% Uptime' },
    { label: 'p95 215ms' },
    { label: '25 Deploys/Week' },
    { label: 'MTTR 12m' },
    { label: 'SLO 99.9%' },
    { label: '2.4k+ Pipelines' },
  ];

  const track = [...content, ...content];

  return (
    <div className="marquee py-4">
      <div className="marquee-track">
        {track.map((item, idx) => (
          <div key={idx} className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-xl text-secondary whitespace-nowrap">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee

