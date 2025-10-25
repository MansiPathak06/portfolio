import React from "react";
import "./projects.css";

// Helper function to generate screenshot URL
const getScreenshotUrl = (websiteUrl) => {
  if (!websiteUrl) return 'https://via.placeholder.com/400x250/333333/ffffff?text=Coming+Soon'; 
  // Using more reliable screenshot service
  return `https://api.screenshotlayer.com/api/capture?access_key=c7b8de7e5c8b0f9e9f4b7f9c0c7b8d7e&url=${encodeURIComponent(websiteUrl)}&viewport=1440x900&width=400&format=PNG`;
};

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    subtitle: "Responsive React Site",
    description: "A modern personal portfolio built with React featuring smooth navigation, responsive design, and dynamic components. Showcases projects, skills, and contact information with an elegant user interface.",
    url: "https://mansi-portfolio06.netlify.app/",
    repo: "https://github.com/MansiPathak06/portfolio",
    tech: ["React", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    title: "Dice Game",
    subtitle: "Interactive Mini Game",
    description: "A fun two-player dice rolling game built with React. Features animated dice faces, score tracking, game rules, and responsive design for an engaging gaming experience.",
    url: "http://minidicerollgame.netlify.app",
    repo: "https://github.com/MansiPathak06/Dice-game",
    tech: ["React", "CSS", "Game Logic"],
  },
  {
    id: 3,
    title: "Herbsfox E-Commerce",
    subtitle: "Full-Stack Shopping Platform",
    description: "A complete e-commerce solution for herbal products with cart management, payment integration, user authentication, and admin panel. Features modern UI and seamless shopping experience.",
    img:"/public/herbsfoxthumbnail.jpg",
    url: "",
    repo: "",
    tech: ["React", "Context API", "Razorpay"],
    status: "launching"
  },
  {
    id: 4,
    title: "Jigyasa Hospital",
    subtitle: "Healthcare Website",
    description: "A professional hospital management website with appointment booking, doctor profiles, department information, and patient services. Built with modern web standards and healthcare focus.",
    url: "https://jigyasahospital.com/",
    repo: "",
    tech: ["React", "CSS3", "JavaScript"],
  },
  {
    id: 5,
    title: "Madhuram Restaurant",
    subtitle: "Restaurant Website",
    description: "An elegant restaurant website showcasing menu, ambiance, and dining experience. Features modern design with smooth navigation and appetizing food gallery for enhanced customer engagement.",
    url: "https://madhuram-website.netlify.app/",
    repo: "",
    tech: ["React", "CSS3", "JavaScript"],
  },
 {
  id: 6,
  title: "GramShree-Apna Bazaar",
  subtitle: "FMCG Retail & Franchise Platform",
  description: "A government-affiliated franchise-driven retail platform under UP's Mukhya Mantri Yuva Udhyam Vikas Yojna offering FMCG, groceries, home care, and daily essentials. Features ERP integration, POS billing system, CRM tools, franchise management dashboard, 3D store visualization, online application portal, and comprehensive business ecosystem for Mini, Super, and Hyper Marts.",
  url: "https://gramshree.co.in/",
  repo: "",
  tech: ["React", "CSS3", "JavaScript","POS Integration"],
},

  {
    id: 7,
    title: "Brass Hospital",
    subtitle: "Multi-Specialty Healthcare Website",
    description: "A professional healthcare website for Brass Hospital in Moradabad featuring department information, specialist profiles, patient care services, and medical facility details. Built with modern web standards for optimal patient experience.",
    url: "https://www.brasshospital.com/",
    repo: "",
    tech: ["React", "CSS3"],
  },
  {
    id: 8,
    title: "EspoCRM",
    subtitle: "Customer Relationship Management System",
    description: "A full-featured open-source CRM platform with sales automation, marketing campaigns, email management, workflow automation, BPM tools, calendar integration, and Twilio click-to-call functionality. Includes lead tracking, contact management, and comprehensive reporting analytics.",
    url: "https://espocrm.netlify.app",
    repo: "",
    tech: ["React", "CSS3", "JavaScript", "Express.js", "Node.js","Twilio API", "MySQL"],
  },
  {
    id: 9,
    title: "Motor Services",
    subtitle: "Automotive Service Platform",
    description: "A comprehensive motor service website offering vehicle maintenance, repair services, and automotive solutions. Clean interface with service booking and customer support features.",
    url: "https://motorservices.netlify.app/",
    repo: "",
    tech: ["React", "CSS3", "JavaScript"],
  },
];


const Projects = () => (
  <section className="projects" id="projects">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">Crafted with passion and precision</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className={`project-card ${project.status === 'launching' ? 'coming-soon' : ''}`}>
            <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
            
            <div className="project-image">
              <img 
                src={getScreenshotUrl(project.url)} 
                alt={project.title}
                onError={(e) => {
                  // Multiple fallback options
                  if (e.target.src.includes('screenshotlayer')) {
                    e.target.src = `https://mini.s-shot.ru/1024x768/PNG/400/Z100/?${project.url}`;
                  } else if (e.target.src.includes('s-shot')) {
                    e.target.src = `https://webshots.io/api/v1/screenshot?url=${project.url}&width=400&height=250`;
                  } else {
                    // Final fallback - create a simple colored placeholder
                    e.target.src = 'data:image/svg+xml;base64,' + btoa(`
                      <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="250" fill="#1a1a1a"/>
                        <text x="200" y="125" text-anchor="middle" fill="#57c8ff" font-size="18" font-family="Arial">
                          ${project.title}
                        </text>
                      </svg>
                    `);
                  }
                }}
              />
              <div className="image-overlay">
                <div className="overlay-actions">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="action-btn preview">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="action-btn code">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 6.75 5.44 5.44 0 0 0 3.5 10.5c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="main-btn">
                    View Live
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17l10-10M17 7H7v10"/>
                    </svg>
                  </a>
                ) : (
                  <button className="main-btn disabled">
                    Coming Soon
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;