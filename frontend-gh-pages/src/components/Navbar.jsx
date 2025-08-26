import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Cloud } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0d1117]/80 backdrop-blur-xl border-b border-[#30363d]/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#238636] to-[#2ea043] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#238636] to-[#2ea043] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary">Meena Kannan</span>
                <div className="text-xs text-secondary">Cloud & DevOps Engineer</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') || isActive('/resume') ? 'nav-link-active' : ''}`}
            >
              Resume
            </Link>
            <Link 
              to="/portfolio" 
              className={`nav-link ${isActive('/portfolio') ? 'nav-link-active' : ''}`}
            >
              Portfolio
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Contact button */}
            <a
              href="mailto:meenakannan92@gmail.com"
              className="btn-primary"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-secondary hover:text-primary hover:bg-[#21262d] rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-[#30363d] mx-4 mb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/') || isActive('/resume')
                  ? 'text-primary bg-[#21262d] border border-[#30363d]'
                  : 'text-secondary hover:text-primary hover:bg-[#21262d]/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              to="/portfolio"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/portfolio') 
                  ? 'text-primary bg-[#21262d] border border-[#30363d]' 
                  : 'text-secondary hover:text-primary hover:bg-[#21262d]/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/resume"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive('/resume') 
                  ? 'text-primary bg-[#21262d] border border-[#30363d]' 
                  : 'text-secondary hover:text-primary hover:bg-[#21262d]/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <a
              href="mailto:meenakannan92@gmail.com"
              className="block px-3 py-2 text-base font-medium text-[#238636] hover:text-[#2ea043] hover:bg-[#21262d]/50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
