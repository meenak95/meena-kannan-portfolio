import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import SciFiBackground from '../components/SciFiBackground'
import ProjectCard from '../components/ProjectCard'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiFirebase,
  SiRedux,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiTensorflow,
  SiFlask,
  SiRedis,
  SiTerraform,
  SiAmazonwebservices,
  SiKubernetes,
  SiJenkins,
  SiJira,
  SiSlack,
  SiFigma,
  SiDocker,
  SiGit,
  SiSpringboot
} from 'react-icons/si';
import { 
  DiJavascript1, 
  DiCss3, 
  DiHtml5, 
  DiSass, 
  DiLess, 
  DiStylus, 
  DiJqueryLogo, 
  DiBootstrap,
  DiMaterializecss,
  DiUikit,
  DiResponsive,
  DiModernizr,
  DiBackbone,
  DiEmber,
  DiMeteor,
  DiWebplatform,
  DiWordpress,
  DiDrupal,
  DiJoomla,
  DiTypo3,
  DiJava
} from 'react-icons/di';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'VRLS 2.0 - Land Transport Authority',
      description: 'High-traffic licensing system handling ~25k tx/day and 3k+ concurrent users. Achieved 70% latency reduction and zero-downtime blue-green deployments.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Jenkins'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: null,
      rating: 4.9,
      stars: 312,
      featured: true,
      category: 'backend',
      isEnterprise: true,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Promo Power - CPG Trade Promo Optimization',
      description: 'ML-driven pipelines improving sales forecast accuracy by ~18% and reducing inventory costs by up to 12%.',
      technologies: ['Python', 'REST', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: null,
      rating: 4.8,
      stars: 189,
      featured: true,
      category: 'ai',
      isEnterprise: true,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'HDB Resale One Stop Portal',
      description: 'Public portal serving 50,000+ applicants annually; automated workflows reduced processing from 3 days to under 2 hours.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: null,
      rating: 4.7,
      stars: 156,
      featured: false,
      category: 'fullstack',
      isEnterprise: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Lease Buyback Systems',
      description: 'Multi-tier approval workflow with complex eligibility validation and fee computation logic.',
      technologies: ['Java', 'Spring', 'Oracle'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: null,
      rating: 4.6,
      stars: 203,
      featured: true,
      category: 'backend',
      isEnterprise: true,
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Legal View Bill Analyzer',
      description: 'Core Spring Boot microservice and Drools-based digitization with 98% accuracy for legal invoice processing.',
      technologies: ['Java', 'Spring Boot', 'Drools', 'PostgreSQL'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: null,
      rating: 4.5,
      stars: 178,
      featured: false,
      category: 'backend',
      isEnterprise: true,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'LAPS & LMS - Banking Systems',
      description: 'Loan origination and post-disbursement monitoring with third-party integrations and regulatory tracking.',
      technologies: ['Java', 'Spring', 'REST', 'Oracle'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: null,
      rating: 4.6,
      stars: 142,
      featured: false,
      category: 'backend',
      isEnterprise: true,
      image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=400&h=250&fit=crop'
    },
    {
      id: 7,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.8,
      stars: 89,
      featured: false,
      category: 'frontend',
      isEnterprise: false,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop'
    }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getIconForTechnology = (tech) => {
    const iconMap = {
      'React': SiReact,
      'Node.js': SiNodedotjs,
      'MongoDB': SiMongodb,
      'Stripe': SiStripe,
      'React Native': SiReact,
      'Firebase': SiFirebase,
      'Redux': SiRedux,
      'Python': SiPython,
      'Django': SiDjango,
      'PostgreSQL': SiPostgresql,
      'TensorFlow': SiTensorflow,
      'Flask': SiFlask,
      'Redis': SiRedis,
      'Terraform': SiTerraform,
      'AWS': SiAmazonwebservices,
      'Kubernetes': SiKubernetes,
      'Java': DiJava,
      'Spring Boot': SiSpringboot,
      'Spring': SiSpringboot,
      'JavaScript': DiJavascript1,
      'CSS': DiCss3,
      'HTML': DiHtml5,
      'Sass': DiSass,
      'Less': DiLess,
      'Stylus': DiStylus,
      'jQuery': DiJqueryLogo,
      'Bootstrap': DiBootstrap,
      'Materialize': DiMaterializecss,
      'UIKit': DiUikit,
      'Responsive': DiResponsive,
      'Modernizr': DiModernizr,
      'Backbone': DiBackbone,
      'Ember': DiEmber,
      'Meteor': DiMeteor,
      'Web Platform': DiWebplatform,
      'WordPress': DiWordpress,
      'Drupal': DiDrupal,
      'Joomla': DiJoomla,
      'Typo3': DiTypo3
    };
    return iconMap[tech] || SiReact;
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const Cube = ({ project }) => {
    return (
      <ProjectCard project={project} techToIcon={getIconForTechnology} />
    );
  };

  return (
    <div className={`min-h-screen bg-primary transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} snap-container`}>
      {/* Background removed for stability; re-enable once verified */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple-like Hero */}
        <section className="section-pad snap-section text-center">
          <h1 className="headline font-bold mb-4">Projects, refined.</h1>
          <p className="subhead mb-8">Systems, outcomes, and experiences crafted with care</p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/" className="btn-apple">Home</Link>
            <Link to="/resume" className="btn-secondary">Resume</Link>
          </div>
        </section>

        {/* Category Filter */}
        <section className="snap-section">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', 'fullstack', 'frontend', 'backend', 'ai', 'devops'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`btn-apple ${
                activeCategory === category ? 'border-[#00eaff] bg-[#121722]' : ''
              }`}
            >
              <span className="font-medium">{category === 'ai' ? 'AI' : category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </button>
          ))}
        </div>
        </section>

        {/* Projects Grid - Holo Cards */}
        <section className="section-pad snap-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <Cube project={project} />
            </div>
          ))}
        </div>
        </section>

        {/* Skills Section */}
        <section className="section-pad snap-section relative">
          {/* Cloud Background for Skills */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-[#3a6ff]/5 to-transparent rounded-full blur-3xl float-delay-1"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-l from-[#58a6ff]/8 to-transparent rounded-full blur-2xl float-delay-2"></div>
            <div className="cloud-particles"></div>
          </div>
          
          <h2 className="headline text-center mb-8">Technical Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: SiReact, color: 'text-[#61dafb]' },
              { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
              { name: 'Python', icon: SiPython, color: 'text-[#3776ab]' },
              { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47a248]' },
              { name: 'AWS', icon: SiAmazonwebservices, color: 'text-[#ff9900]' },
              { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326ce5]' },
              { name: 'Docker', icon: SiDocker, color: 'text-[#2496ed]' },
              { name: 'Git', icon: SiGit, color: 'text-[#f05032]' },
              { name: 'Figma', icon: SiFigma, color: 'text-[#f24e1e]' },
              { name: 'Jenkins', icon: SiJenkins, color: 'text-[#d24939]' },
              { name: 'Jira', icon: SiJira, color: 'text-[#0052cc]' },
              { name: 'Slack', icon: SiSlack, color: 'text-[#4a154b]' },
              { name: 'Java', icon: DiJava, color: 'text-[#007396]' },
              { name: 'Spring Boot', icon: SiSpringboot, color: 'text-[#6db33f]' }
            ].map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-6 glass-card neon-border holo-tilt hover-intense transition-all duration-500 cursor-pointer group"
                >
                  <div className="icon-wrap">
                    <IconComponent className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <span className="text-secondary text-sm mt-3 text-center group-hover:text-primary transition-colors duration-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;