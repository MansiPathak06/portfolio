import React, { useState } from "react";
import "./projects.css";

// Auto screenshot via microlink.io — free, no API key needed
const getThumbUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const getInitials = (title) =>
  title.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase();

const projects = [
  // ── Full Stack First ──────────────────────────────────────
  {
    id: 1,
    title: "Herbsfox E-Commerce",
    subtitle: "Full-Stack Shopping Platform",
    description:
      "A complete e-commerce solution for herbal products with cart management, Razorpay payment integration, user authentication, and an admin panel. Features modern UI and a seamless shopping experience.",
    img: "/public/herbsfoxthumbnail.jpg",
    url: "",
    tech: ["React", "Context API", "Razorpay"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "EspoCRM",
    subtitle: "CRM & Sales Automation",
    description:
      "A full-featured open-source CRM with sales automation, marketing campaigns, email management, workflow & BPM tools, and Twilio click-to-call. Includes lead tracking, contact management, and comprehensive reporting.",
    url: "https://espocrm.netlify.app",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Twilio API"],
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Kara Homes",
    subtitle: "Brass Products E-Commerce",
    description:
      "Full-stack e-commerce for premium brass products — user & admin dashboards, product management, cart, checkout, and real-time order tracking. Scalable architecture with a responsive UI.",
    url: "https://karahomes.in/",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    category: "Full Stack",
  },
  {
    id: 4,
    title: "The Buyzaar Mart",
    subtitle: "FMCG Retail & Franchise Platform",
    description:
      "Government-affiliated franchise retail platform under UP's Mukhya Mantri Yuva Udhyam Vikas Yojna. Features ERP, POS billing, CRM, franchise dashboard, 3D store visualization, and online application portal for Mini, Super & Hyper Marts.",
    img: "/buyzaarmartthumbnail.png",
    url: "https://www.thebuyzaarmart.com/",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Full Stack",
  },
  {
    id: 5,
    title: "HomeEase",
    subtitle: "On-Demand Home Services",
    description:
      "A smart platform connecting homeowners with verified service professionals for on-demand maintenance, repairs, and cleaning. Features real-time booking, service tracking, and seamless provider management.",
    url: "https://home-ease-1q4l.onrender.com",
    tech: ["React", "Node.js", "Express.js"],
    category: "Full Stack",
  },
  // ── Professional / Business Sites ─────────────────────────
  {
    id: 6,
    title: "Muft Madad",
    subtitle: "Free Healthcare Assistance",
    description:
      "Platform offering free OPD services, 50% discount on diagnostics, and complete surgical coverage for patients above 70. Connects 500+ patients with board-certified specialists and hospital networks for end-to-end support.",
    url: "https://www.muftmadad.com/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  {
    id: 7,
    title: "MTBOSS",
    subtitle: "Construction & Infrastructure",
    description:
      "Professional construction company website showcasing large-scale infrastructure projects, services, and portfolio. Features modern design with project case studies and client engagement tools.",
    url: "https://mt-boss.vercel.app/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  {
    id: 8,
    title: "Nikah India",
    subtitle: "Matrimonial Platform",
    description:
      "Comprehensive matrimonial website for the Muslim community in India. Profile matching with search filters by region, sect, and education, and a seamless communication system for families.",
    url: "https://nikahindia.org/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  {
    id: 9,
    title: "PCS Frames",
    subtitle: "Photo Lab & Custom Frames",
    description:
      "Elegant photo lab and custom framing studio showcasing frame collections, canvas prints, and photo products. Polished gallery and ordering interface for premium custom framing services.",
    url: "https://www.pcsframes.com/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  {
    id: 10,
    title: "Jigyasa Hospital",
    subtitle: "Healthcare Website",
    description:
      "Professional hospital website with appointment booking, specialist profiles, department information, and patient services. Built with modern web standards and a strong focus on patient experience.",
    url: "https://jigyasahospital.com/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  {
    id: 11,
    title: "Brass Hospital",
    subtitle: "Multi-Specialty Healthcare",
    description:
      "Multi-specialty healthcare website for Brass Hospital, Moradabad — department information, specialist profiles, patient care services, and medical facility details.",
    url: "https://www.brasshospital.com/",
    tech: ["React", "CSS3"],
    category: "Web",
  },
  {
    id: 12,
    title: "Madhuram Restaurant",
    subtitle: "Restaurant & Dining",
    description:
      "Elegant restaurant website showcasing menu, ambiance, and dining experience. Smooth navigation with an appetizing food gallery for enhanced customer engagement.",
    url: "https://madhuram-website.netlify.app/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  {
    id: 13,
    title: "Motor Services",
    subtitle: "Automotive Service Platform",
    description:
      "Comprehensive motor service website offering vehicle maintenance, repair services, and automotive solutions. Clean interface with service booking and customer support features.",
    url: "https://motorservices.netlify.app/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Web",
  },
  // ── Personal Projects ──────────────────────────────────────
  {
    id: 14,
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description:
      "Modern personal portfolio built with React featuring smooth navigation, responsive design, and dynamic components. Showcases projects, skills, and contact information.",
    url: "https://mansi-portfolio06.netlify.app/",
    tech: ["React", "CSS3", "JavaScript"],
    category: "Personal",
  },
  {
    id: 15,
    title: "Dice Game",
    subtitle: "Interactive Mini Game",
    description:
      "Fun two-player dice rolling game built with React. Features animated dice faces, score tracking, and game rules for an engaging gaming experience.",
    url: "http://minidicerollgame.netlify.app",
    tech: ["React", "CSS", "Game Logic"],
    category: "Personal",
  },
];

const CATEGORIES = ["All", "Full Stack", "Web", "Personal"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const fullStackCount = projects.filter((p) => p.category === "Full Stack").length;

  return (
    <section className="projects" id="projects">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Crafted with passion and precision</p>
        </div>

        {/* Stats bar */}
        <div className="proj-stats-bar">
          <span><span className="stat-num">{projects.length}</span> Projects</span>
          <div className="stats-divider" />
          <span><span className="stat-num">{fullStackCount}</span> Full Stack</span>
          <div className="stats-divider" />
          <span><span className="stat-num">10+</span> Technologies</span>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, index) => {
            const initials = getInitials(project.title);
            const catClass = project.category.toLowerCase().replace(" ", "");

            return (
              <div className="project-card" key={project.id}>

                {/* Image area */}
                <div className="project-image">
                  <span className={`card-category-pill ${catClass}`}>
                    {project.category}
                  </span>
                  <span className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Image: local > auto screenshot > nothing */}
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : project.url ? (
                    <img
                      src={getThumbUrl(project.url)}
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Initials fallback */}
                  <div
                    className="screenshot-fallback"
                    style={{
                      display: !project.img && !project.url ? "flex" : "none",
                    }}
                  >
                    <div className="fallback-initials">{initials}</div>
                    <div className="fallback-label">{project.subtitle}</div>
                  </div>

                  {/* Hover overlay */}
                  {project.url && (
                    <div className="image-overlay">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-visit-btn"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Visit Site
                      </a>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((t, i) => (
                      <span className="tech-tag" key={i}>{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="main-btn"
                      >
                        <span className="live-dot" />
                        View Live
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    ) : (
                      <span className="private-label">Private Project</span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;