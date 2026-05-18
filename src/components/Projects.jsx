import React, { useState, useCallback } from "react";

const getInitials = (title) =>
  title.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase();

const PROJECTS = [
  {
    id: 1, title: "Herbsfox E-Commerce", subtitle: "Full-Stack Shopping Platform",
    description: "A complete e-commerce solution for herbal products with cart management, Razorpay payment integration, user authentication, and an admin panel. Features modern UI and a seamless shopping experience.",
    localImg: "/herbsfoxthumbnail.jpg", url: "",
    tech: ["React", "Context API", "Razorpay"], category: "Full Stack",
  },
  {
    id: 2, title: "EspoCRM", subtitle: "CRM & Sales Automation",
    description: "A full-featured open-source CRM with sales automation, marketing campaigns, email management, workflow & BPM tools, and Twilio click-to-call. Includes lead tracking, contact management, and comprehensive reporting.",
    url: "https://espocrm.netlify.app",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Twilio API"], category: "Full Stack",
  },
  {
    id: 3, title: "Kara Homes", subtitle: "Brass Products E-Commerce",
    description: "Full-stack e-commerce for premium brass products — user & admin dashboards, product management, cart, checkout, and real-time order tracking. Scalable architecture with a responsive UI.",
    url: "https://karahomes.in/",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"], category: "Full Stack",
  },
  {
    id: 4, title: "The Buyzaar Mart", subtitle: "FMCG Retail & Franchise Platform",
    description: "Government-affiliated franchise retail platform under UP's Mukhya Mantri Yuva Udhyam Vikas Yojna. Features ERP, POS billing, CRM, franchise dashboard, 3D store visualization, and online application portal.",
    localImg: "/buyzaarmartthumbnail.png", url: "https://www.thebuyzaarmart.com/",
    tech: ["Next.js", "Tailwind CSS"], category: "Full Stack",
  },
  {
    id: 5, title: "HomeEase", subtitle: "On-Demand Home Services",
    description: "A smart platform connecting homeowners with verified service professionals for on-demand maintenance, repairs, and cleaning. Features real-time booking, service tracking, and seamless provider management.",
    url: "https://home-ease-1q4l.onrender.com",
    tech: ["React", "Node.js", "Express.js"], category: "Full Stack",
  },
  {
    id: 6, title: "Muft Madad", subtitle: "Free Healthcare Assistance",
    description: "Platform offering free OPD services, 50% discount on diagnostics, and complete surgical coverage for patients above 70. Connects 500+ patients with board-certified specialists and hospital networks.",
    url: "https://www.muftmadad.com/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 7, title: "MTBOSS", subtitle: "Construction & Infrastructure",
    description: "Professional construction company website showcasing large-scale infrastructure projects, services, and portfolio. Features modern design with project case studies and client engagement tools.",
    url: "https://mt-boss.vercel.app/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 8, title: "Nikah India", subtitle: "Matrimonial Platform",
    description: "Comprehensive matrimonial website for the Muslim community in India. Profile matching with search filters by region, sect, and education, and a seamless communication system for families.",
    url: "https://nikahindia.org/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 9, title: "PCS Frames", subtitle: "Photo Lab & Custom Frames",
    description: "Elegant photo lab and custom framing studio showcasing frame collections, canvas prints, and photo products. Polished gallery and ordering interface for premium custom framing services.",
    url: "https://www.pcsframes.com/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 10, title: "Jigyasa Hospital", subtitle: "Healthcare Website",
    description: "Professional hospital website with appointment booking, specialist profiles, department information, and patient services. Built with modern web standards and a strong focus on patient experience.",
    url: "https://jigyasahospital.com/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 11, title: "Brass Hospital", subtitle: "Multi-Specialty Healthcare",
    description: "Multi-specialty healthcare website for Brass Hospital, Moradabad — department information, specialist profiles, patient care services, and medical facility details.",
    url: "https://www.brasshospital.com/",
    tech: ["React", "CSS3"], category: "Web",
  },
  {
    id: 12, title: "Madhuram Restaurant", subtitle: "Restaurant & Dining",
    description: "Elegant restaurant website showcasing menu, ambiance, and dining experience. Smooth navigation with an appetizing food gallery for enhanced customer engagement.",
    url: "https://madhuram-website.netlify.app/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 13, title: "Motor Services", subtitle: "Automotive Service Platform",
    description: "Comprehensive motor service website offering vehicle maintenance, repair services, and automotive solutions. Clean interface with service booking and customer support features.",
    url: "https://motorservices.netlify.app/",
    tech: ["React", "CSS3", "JavaScript"], category: "Web",
  },
  {
    id: 14, title: "Portfolio Website", subtitle: "Personal Portfolio",
    description: "Modern personal portfolio built with React featuring smooth navigation, responsive design, and dynamic components. Showcases projects, skills, and contact information.",
    url: "https://mansi-portfolio06.netlify.app/",
    tech: ["React", "CSS3", "JavaScript"], category: "Personal",
  },
  {
    id: 15, title: "Dice Game", subtitle: "Interactive Mini Game",
    description: "Fun two-player dice rolling game built with React. Features animated dice faces, score tracking, and game rules for an engaging gaming experience.",
    localImg: "/dicegamethumbnail.jpg", url: "http://minidicerollgame.netlify.app",
    tech: ["React", "CSS", "Game Logic"], category: "Personal",
  },
];

const CATEGORIES = ["All", "Full Stack", "Web", "Personal"];

// category colour sets
const CAT = {
  "Full Stack": { pill: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
  "Web":        { pill: "bg-cyan-500/10    border-cyan-500/30    text-cyan-400"    },
  "Personal":   { pill: "bg-violet-500/10  border-violet-500/30  text-violet-400"  },
};

/* ── Single card ─────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const initials  = getInitials(project.title);
  const hasImg    = project.localImg && !imgFailed;
  const pillCls   = CAT[project.category]?.pill ?? CAT["Web"].pill;

  return (
    <div className="project-card group relative flex flex-col rounded-2xl border
      overflow-hidden transition-all duration-300"
      style={{
        background:   "var(--bg-card)",
        borderColor:  "var(--border)",
        animation:    `fadeUp 0.5s cubic-bezier(0.4,0,0.2,1) ${Math.min(index, 5) * 0.07}s both`,
      }}>

      {/* ── Image area ─────────────────────────────── */}
      <div className="relative h-[190px] flex-shrink-0 overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}>

        {/* card number */}
        <span className="absolute top-3 left-3 z-10 font-syne font-bold text-[0.72rem]
          tracking-widest" style={{ color: "var(--text-muted)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* category pill */}
        <span className={`absolute top-3 right-3 z-10 text-[0.68rem] font-semibold
          uppercase tracking-wider px-[10px] py-[3px] rounded-full border ${pillCls}`}>
          {project.category}
        </span>

        {/* image OR initials fallback */}
        {hasImg ? (
          <img src={project.localImg} alt={project.title} loading="lazy"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-top
              transition-transform duration-500 group-hover:scale-[1.06]
              brightness-90 group-hover:brightness-100" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,var(--bg-card),var(--bg-secondary))" }}>
            <span className="font-syne font-extrabold text-[2.2rem] leading-none
              bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {initials}
            </span>
            <span className="font-dm text-[0.72rem] tracking-widest uppercase"
              style={{ color: "var(--text-muted)" }}>
              {project.subtitle}
            </span>
          </div>
        )}

        {/* hover overlay */}
        {project.url && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px] z-20
            flex items-center justify-center
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-[9px] rounded-xl
                bg-violet-500 hover:bg-violet-400 text-white font-dm font-semibold
                text-[0.84rem] no-underline transition-all duration-200
                hover:scale-105">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Visit Site
            </a>
          </div>
        )}
      </div>

      {/* ── Info area ──────────────────────────────── */}
      <div className="flex flex-col flex-1 p-[22px]">

        {/* title + subtitle */}
        <h3 className="font-syne font-bold text-[1rem] leading-snug mb-[3px]"
          style={{ color: "var(--text-primary)" }}>
          {project.title}
        </h3>
        <p className="font-dm font-medium text-[0.75rem] uppercase tracking-wider mb-3 text-violet-400">
          {project.subtitle}
        </p>

        {/* description — 3 line clamp */}
        <p className="font-dm text-[0.84rem] leading-relaxed flex-1 mb-4
          line-clamp-3" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-[6px] mb-5">
          {project.tech.map((t) => (
            <span key={t} className="font-dm text-[0.7rem] font-medium
              px-[9px] py-[2px] rounded-[6px] border"
              style={{
                background:  "var(--tag-bg)",
                borderColor: "var(--tag-border)",
                color:       "var(--tag-text)",
              }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-dm font-semibold
                text-[0.84rem] no-underline transition-colors duration-200
                text-violet-400 hover:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0
                animate-pulse" />
              View Live
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          ) : (
            <span className="font-dm text-[0.8rem] italic"
              style={{ color: "var(--text-muted)" }}>
              🔒 Private Project
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Main section ────────────────────────────────────────── */
const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const stats = [
    { num: PROJECTS.length,                                              label: "Total Projects"  },
    { num: PROJECTS.filter(p => p.category === "Full Stack").length,    label: "Full Stack"       },
    { num: "10+",                                                        label: "Technologies"     },
    { num: "3+",                                                         label: "Years"            },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-[clamp(20px,5vw,80px)]"
      style={{ background: "var(--bg-primary)" }}>

      {/* BG orb */}
      <div aria-hidden="true" className="pointer-events-none absolute top-[8%] right-[4%]
        w-[360px] h-[360px] rounded-full blur-[64px]
        bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ── Header ───────────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-block font-dm text-[0.78rem] font-semibold
            tracking-[0.15em] uppercase px-4 py-[5px] rounded-full border mb-4
            text-violet-300 bg-violet-500/10 border-violet-500/25">
            Portfolio
          </span>
          <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15]
            text-[clamp(2rem,5vw,3rem)]" style={{ color: "var(--text-primary)" }}>
            Featured{" "}
            <span className="bg-gradient-to-br from-violet-400 to-cyan-400
              bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="font-dm text-[0.95rem] mt-3" style={{ color: "var(--text-muted)" }}>
            Crafted with passion and precision
          </p>
        </div>

        {/* ── Stats bar ────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border mb-10"
          style={{ borderColor: "var(--border)" }}>
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-5 px-4 text-center
              border-r last:border-r-0 sm:[&:nth-child(2)]:border-r"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <span className="font-syne font-extrabold text-[1.6rem] leading-none
                text-violet-400">{s.num}</span>
              <span className="font-dm text-[0.75rem] mt-[5px]"
                style={{ color: "var(--text-muted)" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Filter tabs ──────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="font-dm font-medium text-[0.84rem] px-5 py-2 rounded-[10px]
                border outline-none cursor-pointer transition-all duration-200"
              style={{
                background:  filter === cat ? "#8b5cf6"               : "var(--bg-card)",
                color:       filter === cat ? "#fff"                   : "var(--text-secondary)",
                borderColor: filter === cat ? "#8b5cf6"               : "var(--border)",
              }}>
              {cat}
              <span className="ml-2 text-[0.7rem] px-[7px] py-[1px] rounded-full"
                style={{
                  background: filter === cat ? "rgba(255,255,255,0.2)" : "var(--bg-secondary)",
                  color:      filter === cat ? "#fff"                   : "var(--text-muted)",
                }}>
                {cat === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Grid ─────────────────────────────────── */}
        <div className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Minimal style block — only for group-hover border (can't do CSS vars in Tailwind hover) */}
      <style>{`
        .project-card:hover {
          border-color: rgba(139,92,246,0.35) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.4);
        }
      `}</style>
    </section>
  );
};

export default Projects;