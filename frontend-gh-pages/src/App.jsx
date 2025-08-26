import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import './App.css'

function App() {
  // Interactive Mouse Tracking for Cloud Effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // Update CSS custom properties for mouse position
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = 'default';
    };

    // Add mouse event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle creation for enhanced interactivity
    const createFloatingParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(58, 166, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: particleFloat 4s ease-out forwards;
      `;
      
      const style = document.createElement('style');
      if (!document.querySelector('#particle-styles')) {
        style.id = 'particle-styles';
        style.textContent = `
          @keyframes particleFloat {
            0% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-100px) scale(0);
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = window.innerHeight + 'px';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 4000);
    };

    // Create particles periodically
    const particleInterval = setInterval(createFloatingParticle, 2000);

    // Enhanced cloud cursor tracking
    const updateCloudCursor = (e) => {
      const clouds = document.querySelectorAll('.cloud-cursor-follower');
      clouds.forEach((cloud, index) => {
        const delay = index * 100;
        setTimeout(() => {
          cloud.style.left = e.clientX + (index * 20) + 'px';
          cloud.style.top = e.clientY + (index * 15) + 'px';
        }, delay);
      });
    };

    document.addEventListener('mousemove', updateCloudCursor);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', updateCloudCursor);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Interactive Cloud Cursor Followers */}
        <div className="cloud-cursor-follower" style={{
          position: 'fixed',
          fontSize: '16px',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.4,
          transition: 'all 0.1s ease',
          filter: 'drop-shadow(0 0 8px rgba(58, 166, 255, 0.6))'
        }}>☁️</div>
        <div className="cloud-cursor-follower" style={{
          position: 'fixed',
          fontSize: '12px',
          pointerEvents: 'none',
          zIndex: 9997,
          opacity: 0.3,
          transition: 'all 0.15s ease',
          filter: 'drop-shadow(0 0 6px rgba(120, 119, 198, 0.5))'
        }}>☁️</div>
        <div className="cloud-cursor-follower" style={{
          position: 'fixed',
          fontSize: '10px',
          pointerEvents: 'none',
          zIndex: 9996,
          opacity: 0.2,
          transition: 'all 0.2s ease',
          filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))'
        }}>☁️</div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
