import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  GitBranch, 
  Globe,
  Terminal,
  Cpu,
  Cloud,
  Sparkles
} from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Spring Boot 3.2.0',
      description: 'Latest LTS version with cutting-edge features and performance improvements.',
      color: 'from-[#238636] to-[#2ea043]',
      delay: 'delay-0'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Java 21',
      description: 'Latest LTS Java version with enhanced performance and modern language features.',
      color: 'from-[#f78166] to-[#f85149]',
      delay: 'delay-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Spring Security',
      description: 'Robust authentication and authorization with JWT support.',
      color: 'from-[#58a6ff] to-[#79c0ff]',
      delay: 'delay-200'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'High Performance',
      description: 'Optimized for speed and scalability with modern architecture patterns.',
      color: 'from-[#a371f7] to-[#bc8cff]',
      delay: 'delay-300'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: <GitBranch className="h-6 w-6" />, color: 'from-[#58a6ff] to-[#79c0ff]' },
    { label: 'Client Rating', value: '4.9/5', icon: <Star className="h-6 w-6" />, color: 'from-[#f78166] to-[#f85149]' },
    { label: 'Hours Coded', value: '2,450+', icon: <Terminal className="h-6 w-6" />, color: 'from-[#238636] to-[#2ea043]' },
    { label: 'Happy Clients', value: '12+', icon: <Globe className="h-6 w-6" />, color: 'from-[#a371f7] to-[#bc8cff]' }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-[#61dafb] to-[#4fa8c7]' },
    { name: 'Spring Boot', icon: '🍃', color: 'from-[#6db33f] to-[#5a9e3a]' },
    { name: 'Java', icon: '☕', color: 'from-[#f89820] to-[#e76f00]' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-[#336791] to-[#2d5a7a]' },
    { name: 'Docker', icon: '🐳', color: 'from-[#2496ed] to-[#1e7bb8]' },
    { name: 'Tailwind', icon: '🎨', color: 'from-[#06b6d4] to-[#0891b2]' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Cloud Computing Theme Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main Cloud Elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#3a6ff]/20 to-[#58a6ff]/30 rounded-full blur-3xl float-delay-1"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#58a6ff]/20 to-[#79c0ff]/20 rounded-full blur-3xl float-delay-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#3a6ff]/10 to-[#7877c6]/15 rounded-full blur-3xl float-delay-3"></div>
          
          {/* Cloud Particles */}
          <div className="cloud-particles"></div>
          
          {/* Additional Cloud Effects */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#3a6ff]/10 to-transparent rounded-full blur-2xl animate-cloud-float"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-l from-[#58a6ff]/15 to-transparent rounded-full blur-xl float-delay-1"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#79c0ff]/20 rounded-full blur-lg float-delay-2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#21262d] border border-[#30363d] rounded-full text-secondary text-sm mb-8">
              <Sparkles className="h-4 w-4 text-[#238636]" />
              <span>Full-Stack Developer & Architect</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">Building the Future</span>
              <br />
              <span className="gradient-text">One Line at a Time</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-secondary max-w-4xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technologies. 
              From concept to deployment, I bring ideas to life with precision and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/portfolio"
                className="btn-primary group btn-glitter hover-intense"
              >
                <Cloud className="mr-3 h-6 w-6 cloud-icon" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-outline group hover-intense"
              >
                <span className="relative z-10">View Portfolio</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Tech stack preview */}
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} rounded-lg text-white font-medium text-sm flex items-center space-x-2 hover:scale-105 transition-transform duration-200`}
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Built with <span className="gradient-text">Modern Technologies</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Enterprise-grade infrastructure designed for performance, scalability, and developer experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`stat-card animate-fade-in-up ${feature.delay}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              <span className="gradient-text">Portfolio Highlights</span>
            </h2>
            <p className="text-xl text-secondary">
              Real achievements and client success stories that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-secondary font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#238636]/10 via-[#2ea043]/10 to-[#3fb950]/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#238636] to-[#2ea043] rounded-2xl mb-6">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Join me in creating the next generation of digital solutions. 
              Let's turn your vision into reality with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/portfolio"
                className="btn-primary group btn-glitter hover-intense"
              >
                <Cloud className="mr-3 h-6 w-6 cloud-icon" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary group hover-intense"
              >
                <span className="relative z-10">Explore My Work</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#238636] to-[#2ea043] rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Meena Kannan</span>
          </div>
          <p className="text-secondary mb-4">
            Crafting digital experiences with passion and precision
          </p>
          <div className="flex justify-center space-x-6 text-secondary">
            <a href="https://github.com/meenak95" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-200">GitHub</a>
            <a href="https://www.linkedin.com/in/meena-kannan-mk" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-200">LinkedIn</a>
            <a href="mailto:meenakannan92@gmail.com" className="hover:text-primary transition-colors duration-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
