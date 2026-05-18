import React from "react";

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/MansiPathak06",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mansi-pathak-8516b72ba/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:pathakmansi608@gmail.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>

      {/* ── Main footer content ───────────────────── */}
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,80px)] pt-12 pb-8">
        <div className="flex flex-wrap justify-between gap-10 mb-10">

          {/* Brand block */}
          <div className="max-w-[260px]">
            <div className="font-syne font-extrabold text-[1.5rem] tracking-[-0.02em]
              bg-gradient-to-br from-violet-400 to-cyan-400
              bg-clip-text text-transparent mb-3">
              Mansi Pathak
            </div>
            <p className="font-dm text-[0.85rem] leading-relaxed"
              style={{ color: "var(--text-muted)" }}>
              Full Stack Developer crafting elegant, performant web experiences
              with React, Next.js &amp; Node.js.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank"
                  rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center
                    border no-underline transition-all duration-200
                    hover:border-violet-500 hover:text-violet-400 hover:-translate-y-[2px]"
                  style={{
                    border:     "1px solid var(--border)",
                    background: "var(--bg-card)",
                    color:      "var(--text-muted)",
                  }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-syne font-bold text-[0.8rem] uppercase tracking-[0.1em]
              mb-4" style={{ color: "var(--text-primary)" }}>
              Navigation
            </p>
            <div className="flex flex-col gap-[10px]">
              {NAV_LINKS.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="font-dm text-[0.88rem] capitalize text-left
                    border-none outline-none cursor-pointer bg-transparent
                    transition-colors duration-200 hover:text-violet-400 p-0"
                  style={{ color: "var(--text-muted)" }}>
                  {link === "contact" ? "Contact Me" : link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-syne font-bold text-[0.8rem] uppercase tracking-[0.1em]
              mb-4" style={{ color: "var(--text-primary)" }}>
              Contact
            </p>
            <div className="flex flex-col gap-[10px]">
              <a href="mailto:pathakmansi608@gmail.com"
                className="font-dm text-[0.88rem] no-underline transition-colors
                  duration-200 hover:text-violet-400"
                style={{ color: "var(--text-muted)" }}>
                pathakmansi608@gmail.com
              </a>
              <a href="/resume-mansi.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-[6px] font-dm text-[0.88rem]
                  no-underline text-violet-400 hover:text-cyan-400
                  transition-colors duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
                Download Resume
              </a>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0
                  animate-pulse" />
                <span className="font-dm text-[0.82rem] text-emerald-400 font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ───────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}>

          <p className="font-dm text-[0.82rem]" style={{ color: "var(--text-muted)" }}>
            © {year} Mansi Pathak. 
          </p>

          {/* <p className="font-dm text-[0.82rem]" style={{ color: "var(--text-muted)" }}>
            Built with{" "}
            <span className="text-red-400 text-[1rem]">♥</span>
            {" "}using React &amp; Tailwind CSS
          </p> */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;