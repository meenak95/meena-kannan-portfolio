import React, { useState, useEffect } from 'react'
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
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const rotateLeft = () => setRotation(r => ({ ...r, y: r.y - 90 }));
    const rotateRight = () => setRotation(r => ({ ...r, y: r.y + 90 }));
    const rotateUp = () => setRotation(r => ({ ...r, x: r.x + 90 }));
    const rotateDown = () => setRotation(r => ({ ...r, x: r.x - 90 }));

    const faceClass = 'glass-card p-0 bg-[#0d1117]/90 border-[#30363d]';

    return (
      <div className="cube-scene">
        <div className="cube-wrapper">
          <div
            className="cube"
            style={{ transform: `translateZ(-130px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
          >
            {/* Front: Title & summary */}
            <div className={`cube-face cube-face-front ${faceClass}`}>
              <div className="cube-face-content">
                <img src={project.image} alt="cover" className="w-full h-24 object-cover" />
                <h3 className="text-lg font-bold text-primary mt-1">{project.title}</h3>
                <p className="text-secondary text-sm line-clamp-3">{project.description}</p>
              </div>
            </div>

            {/* Back: Links */}
            <div className={`cube-face cube-face-back ${faceClass}`}>
              <div className="cube-face-content items-start justify-center">
                <h4 className="text-primary font-semibold">Links</h4>
                <div className="flex flex-col gap-2 mt-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">View Code</a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">Live Demo</a>
                  ) : (
                    <div className="px-4 py-2 bg-[#f78166] text-white rounded-lg text-center">Enterprise Project</div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Technologies */}
            <div className={`cube-face cube-face-right ${faceClass}`}>
              <div className="cube-face-content">
                <h4 className="text-primary font-semibold">Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2 py-1 bg-[#21262d] text-secondary rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Left: Stats */}
            <div className={`cube-face cube-face-left ${faceClass}`}>
              <div className="cube-face-content">
                <h4 className="text-primary font-semibold">Stats</h4>
                <div className="text-secondary text-sm mt-2">
                  <div>Rating: <span className="text-[#238636] font-medium">{project.rating}</span> ★</div>
                  <div>Stars: <span className="font-medium">{project.stars}</span></div>
                  <div>Category: <span className="font-medium capitalize">{project.category}</span></div>
                </div>
              </div>
            </div>

            {/* Top: Highlights */}
            <div className={`cube-face cube-face-top ${faceClass}`}>
              <div className="cube-face-content">
                <h4 className="text-primary font-semibold">Highlights</h4>
                <ul className="list-disc list-inside text-secondary text-sm mt-1">
                  <li>High availability & scalable architecture</li>
                  <li>CI/CD with blue/green deployments</li>
                  <li>Observability: metrics, logs, tracing</li>
                </ul>
              </div>
            </div>

            {/* Bottom: Notes */}
            <div className={`cube-face cube-face-bottom ${faceClass}`}>
              <div className="cube-face-content">
                <h4 className="text-primary font-semibold">Notes</h4>
                <p className="text-secondary text-sm">Enterprise context may restrict live demo access. Code samples are representative where possible.</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="cube-controls">
            <button className="ctrl-left" onClick={rotateLeft} aria-label="Rotate Left">◀</button>
            <button className="ctrl-right" onClick={rotateRight} aria-label="Rotate Right">▶</button>
            <button className="ctrl-up" onClick={rotateUp} aria-label="Rotate Up">▲</button>
            <button className="ctrl-down" onClick={rotateDown} aria-label="Rotate Down">▼</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-primary transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A showcase of my projects, skills, and experience in full-stack development, 
            mobile apps, and cloud infrastructure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'fullstack', 'frontend', 'backend', 'ai', 'devops'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#238636] text-white shadow-lg'
                  : 'bg-[#21262d] text-secondary hover:text-primary hover:bg-[#30363d]'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid - 3D Rotatable Cubes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              {project.isEnterprise && (
                <div className="flex items-center gap-2 text-sm text-secondary mb-2">
                  <div className="w-2 h-2 bg-[#f78166] rounded-full"></div>
                  <span className="font-medium">Enterprise Project</span>
                </div>
              )}
              <Cube project={project} />
            </div>
          ))}
        </div>

              {/* Skills Section */}
      <div className="mt-20 relative">
        {/* Cloud Background for Skills */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-[#3a6ff]/5 to-transparent rounded-full blur-3xl float-delay-1"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-l from-[#58a6ff]/8 to-transparent rounded-full blur-2xl float-delay-2"></div>
          <div className="cloud-particles"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-primary text-center mb-12 relative">
          <span className="gradient-text">Cloud-Powered</span> Technical Skills
        </h2>
          
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
                    className="flex flex-col items-center p-6 glass-card hover-intense transition-all duration-500 cursor-pointer group"
                  >
                    <IconComponent className={`w-14 h-14 ${skill.color} group-hover:scale-125 transition-transform duration-300 animate-hyper-float`} />
                    <span className="text-secondary text-sm mt-3 text-center group-hover:text-primary transition-colors duration-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;