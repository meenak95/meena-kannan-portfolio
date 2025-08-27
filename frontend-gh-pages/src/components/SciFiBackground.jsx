import React, { useEffect } from 'react'

const SciFiBackground = () => {
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      document.documentElement.style.setProperty('--mx', `${50 + x}%`)
      document.documentElement.style.setProperty('--my', `${50 + y}%`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <div className="starfield"></div>
      <div className="grid-warp"></div>
      <div className="scanlines"></div>
    </div>
  )
}

export default SciFiBackground

