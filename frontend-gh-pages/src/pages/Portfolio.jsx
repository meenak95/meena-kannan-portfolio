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
  SiConfluence,
  SiSlack,
  SiTrello,
  SiNotion,
  SiVisualstudiocode,
  SiIntellijidea,
  SiEclipse,
  SiXcode,
  SiAndroidstudio,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiInvision,
  SiZeplin,
  SiPrinciple,
  SiFramer,
  SiWebflow,
  SiShopify,
  SiWoocommerce,
  SiMagento,
  SiOpencart,
  SiPrestashop,
  SiDocker,
  SiGit
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
  DiTypo3
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
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.9,
      stars: 312,
      featured: true,
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Promo Power - CPG Trade Promo Optimization',
      description: 'ML-driven pipelines improving sales forecast accuracy by ~18% and reducing inventory costs by up to 12%.',
      technologies: ['Python', 'REST', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.8,
      stars: 189,
      featured: true,
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'HDB Resale One Stop Portal',
      description: 'Public portal serving 50,000+ applicants annually; automated workflows reduced processing from 3 days to under 2 hours.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.7,
      stars: 156,
      featured: false,
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Lease Buyback Systems',
      description: 'Multi-tier approval workflow with complex eligibility validation and fee computation logic.',
      technologies: ['Java', 'Spring', 'Oracle'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.6,
      stars: 203,
      featured: true,
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Legal View Bill Analyzer',
      description: 'Core Spring Boot microservice and Drools-based digitization with 98% accuracy for legal invoice processing.',
      technologies: ['Java', 'Spring Boot', 'Drools', 'PostgreSQL'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.5,
      stars: 178,
      featured: false,
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'LAPS & LMS - Banking Systems',
      description: 'Loan origination and post-disbursement monitoring with third-party integrations and regulatory tracking.',
      technologies: ['Java', 'Spring', 'REST', 'Oracle'],
      githubUrl: 'https://github.com/meenak95/meena-kannan-portfolio',
      liveUrl: 'https://meenak95.github.io/meena-kannan-portfolio/',
      rating: 4.6,
      stars: 142,
      featured: false,
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=400&h=250&fit=crop'
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
          {['all', 'fullstack', 'mobile', 'backend', 'ai', 'devops'].map((category) => (
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-[#238636] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-[#238636] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => {
                    const IconComponent = getIconForTechnology(tech);
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1 bg-[#21262d] text-secondary rounded-full text-sm"
                      >
                        <IconComponent className="w-4 h-4" />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#238636] font-medium">{project.rating}</span>
                    <span className="text-secondary">★</span>
                    <span className="text-secondary text-sm">({project.stars})</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#21262d] hover:bg-[#30363d] text-primary hover:text-[#238636] px-4 py-2 rounded-lg text-center font-medium transition-all duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-lg text-center font-medium transition-all duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Technical Skills
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
              { name: 'Slack', icon: SiSlack, color: 'text-[#4a154b]' }
            ].map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 glass-card hover:scale-110 transition-all duration-200 cursor-pointer group"
                >
                  <IconComponent className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-secondary text-sm mt-2 text-center group-hover:text-primary transition-colors duration-200">
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
