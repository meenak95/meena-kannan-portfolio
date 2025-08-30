import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Shield, ArrowRight, GitBranch, Cloud, Gauge, AlertTriangle, Wand2, Rocket, Plug } from 'lucide-react'
import Marquee from '../components/Marquee'
import SciFiBackground from '../components/SciFiBackground'
import HoloCard from '../components/HoloCard'
import FAQ from '../components/FAQ'
const Testimonials = () => (
  <section className="py-20 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Clients Say</h2>
        <p className="text-xl text-secondary">Trust built on outcomes</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
          quote: 'Delivered beyond expectations — performance improved and deployments became painless.',
          name: 'Product Lead, Public Sector',
        }, {
          quote: 'Brought clarity to complex systems and shipped iteratively with quality.',
          name: 'Engineering Manager, Fintech',
        }, {
          quote: 'Measurable impact on reliability and speed. Great partner to work with.',
          name: 'CTO, Retail Analytics',
        }].map((t, i) => (
          <div key={i} className="glass-card glow-card p-6 reveal-up">
            <div className="text-secondary mb-3">“{t.quote}”</div>
            <div className="text-primary font-medium">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Reveal on scroll for elements with .reveal-up
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal-up'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.2 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const features = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Observability',
      description: 'Grafana dashboards, Prometheus metrics, SLO/SLIs & alerting.',
      color: 'from-[#58a6ff] to-[#79c0ff]',
      delay: 'delay-0'
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'CI/CD',
      description: 'Automated pipelines, blue/green & canary deploys, progressive delivery.',
      color: 'from-[#238636] to-[#2ea043]',
      delay: 'delay-100'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud-Native',
      description: 'Kubernetes, Docker, and Infrastructure as Code with Terraform.',
      color: 'from-[#a371f7] to-[#bc8cff]',
      delay: 'delay-200'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Reliability',
      description: 'Error budgets, incident response, and performance engineering.',
      color: 'from-[#f78166] to-[#f85149]',
      delay: 'delay-300'
    }
  ]

  const stats = [
    { label: 'Uptime (30d)', value: '99.98%', icon: <Cloud className="h-6 w-6" />, color: 'from-[#238636] to-[#2ea043]' },
    { label: 'Latency p95', value: '215 ms', icon: <Gauge className="h-6 w-6" />, color: 'from-[#58a6ff] to-[#79c0ff]' },
    { label: 'Error Rate', value: '0.18%', icon: <AlertTriangle className="h-6 w-6" />, color: 'from-[#f78166] to-[#f85149]' },
    { label: 'Deploy Frequency', value: '25/week', icon: <GitBranch className="h-6 w-6" />, color: 'from-[#a371f7] to-[#bc8cff]' },
    { label: 'Lead Time', value: '45 min', icon: <Activity className="h-6 w-6" />, color: 'from-[#79c0ff] to-[#58a6ff]' },
    { label: 'MTTR', value: '12 min', icon: <Shield className="h-6 w-6" />, color: 'from-[#2ea043] to-[#3fb950]' }
  ]

  const platforms = [
    { name: 'AWS', icon: '☁️', color: 'from-[#f59e0b] to-[#fbbf24]' },
    { name: 'Kubernetes', icon: '⎈', color: 'from-[#3b82f6] to-[#60a5fa]' },
    { name: 'Prometheus', icon: '📈', color: 'from-[#ef4444] to-[#f87171]' },
    { name: 'Grafana', icon: '📊', color: 'from-[#10b981] to-[#34d399]' },
    { name: 'Docker', icon: '🐳', color: 'from-[#2496ed] to-[#60a5fa]' },
    { name: 'Terraform', icon: '🧩', color: 'from-[#8b5cf6] to-[#a78bfa]' }
  ]
  

  return (
    <div className="min-h-screen pt-16">
      {/* Apple-like Hero */}
      <section className="section-pad snap-section">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="headline font-bold mb-6">Cloud & DevOps, refined.</h1>
          <p className="subhead mb-8">Fast delivery. Measurable reliability. Elegant engineering.</p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/portfolio" className="btn-apple">View Work</Link>
            <Link to="/resume" className="btn-secondary">Resume</Link>
          </div>
        </div>
      </section>

      {/* Apple-like sections */}
      <section className="section-pad snap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline">Built for Observability & Delivery</h2>
            <p className="subhead">Enterprise-grade platforms, tuned for outcomes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <HoloCard
                key={index}
                title={feature.title}
                subtitle="Capability"
                icon={feature.icon}
                className={`reveal-up ${feature.delay}`}
              >
                {feature.description}
              </HoloCard>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work (Locofy-inspired steps) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">How I Work</h2>
            <p className="text-xl text-secondary">A clear path from design to reliable production</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              icon: <Wand2 className="h-6 w-6" />, title: 'Design & Scope', desc: 'Define goals, success metrics, and architecture with lightweight prototypes.'
            },{
              icon: <Plug className="h-6 w-6" />, title: 'Integrate & Automate', desc: 'Wire CI/CD, observability, and guardrails to ship safely and often.'
            },{
              icon: <Rocket className="h-6 w-6" />, title: 'Ship & Iterate', desc: 'Release with progressive strategies, learn from data, and improve.'
            }].map((s, i) => (
              <div key={i} className="glass-card glow-card p-6 reveal-up">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#58a6ff]">
                    {s.icon}
                  </div>
                  <div className="text-secondary">Step {i+1}</div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-secondary">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              <span className="gradient-text">Key DevOps Metrics</span>
            </h2>
            <p className="text-xl text-secondary">
              DORA metrics and SLO indicators from real-world systems
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Case Studies</h2>
            <p className="text-xl text-secondary">Selected work with measurable outcomes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: 'VRLS 2.0', desc: '70% latency reduction; zero-downtime deployments.',
            },{
              title: 'Promo Power', desc: '18% forecast accuracy lift; 12% inventory reduction.',
            },{
              title: 'HDB Resale Portal', desc: 'Processing time from 3 days to under 2 hours.',
            }].map((c, i) => (
              <Link to="/portfolio" key={i} className="glass-card glow-card p-6 reveal-up hover-intense">
                <div className="text-sm text-secondary mb-2">Case Study</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{c.title}</h3>
                <p className="text-secondary">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden reveal-up">
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
              <Cloud className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Meena Kannan</span>
          </div>
          <p className="text-secondary mb-4">
            Building reliable, observable, and scalable systems in the cloud
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
