import React, { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { href: "home",     label: "Home"       },
  { href: "about",      label: "About"      },
  { href: "experience", label: "Experience"  },
  { href: "skills",   label: "Skills"     },
  { href: "projects", label: "Projects"   },
  { href: "contact",  label: "Contact Me" },
];

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState("home");

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll spy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ── icon button style helper ── */
  const iconBtnStyle = {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    width:          "38px",
    height:         "38px",
    borderRadius:   "10px",
    border:         "1px solid var(--border)",
    background:     "var(--bg-card)",
    color:          "var(--text-secondary)",
    cursor:         "pointer",
    outline:        "none",
    transition:     "all 0.2s ease",
  };

  return (
    <>
      {/* ── Fixed navbar ─────────────────────────────── */}
      <header
        style={{
          position:       "fixed",
          top:            "38px",  /* sits below OpenToWork banner */
          left:           0,
          right:          0,
          zIndex:         1000,
          height:         "68px",
          display:        "flex",
          alignItems:     "center",
          padding:        "0 clamp(20px,5vw,80px)",
          background:     scrolled ? "var(--navbar-bg)"       : "transparent",
          backdropFilter: scrolled ? "blur(24px)"             : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)"       : "none",
          borderBottom:   scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow:      scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
          transition:     "all 0.3s ease",
        }}
      >
        <div style={{
          width: "100%", maxWidth: "1200px", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            style={{
              fontFamily:    "'Syne', sans-serif",
              fontWeight:    800,
              fontSize:      "1.4rem",
              letterSpacing: "-0.02em",
              background:    "linear-gradient(135deg, var(--accent-bright), var(--accent2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
              backgroundClip: "text",
              border:   "none",
              outline:  "none",
              cursor:   "pointer",
              padding:  0,
            }}
          >
            MP
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  style={{
                    fontFamily:  "'DM Sans', sans-serif",
                    fontWeight:  500,
                    fontSize:    "0.88rem",
                    padding:     "6px 14px",
                    borderRadius:"8px",
                    border:      "none",
                    outline:     "none",
                    cursor:      "pointer",
                    transition:  "all 0.2s ease",
                    background:  activeId === href ? "var(--tag-bg)"       : "transparent",
                    color:       activeId === href ? "var(--accent-bright)" : "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeId !== href) {
                      e.currentTarget.style.color      = "var(--text-primary)";
                      e.currentTarget.style.background = "var(--bg-secondary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeId !== href) {
                      e.currentTarget.style.color      = "var(--text-secondary)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={iconBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color       = "var(--accent-bright)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color       = "var(--text-secondary)";
              }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hamburger — mobile only */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden"
              style={{ ...iconBtnStyle, flexDirection: "column", gap: "5px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display:     "block",
                    width:       "18px",
                    height:      "2px",
                    background:  "var(--text-primary)",
                    borderRadius:"2px",
                    transition:  "all 0.3s ease",
                    transformOrigin: "center",
                    transform: menuOpen
                      ? i === 0 ? "translateY(7px) rotate(45deg)"
                        : i === 2 ? "translateY(-7px) rotate(-45deg)"
                        : "scaleX(0)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile backdrop ──────────────────────────── */}
      <div
        className="md:hidden"
        onClick={() => setMenuOpen(false)}
        style={{
          position:      "fixed",
          inset:         0,
          background:    "rgba(0,0,0,0.45)",
          zIndex:        998,
          opacity:       menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition:    "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ────────────────────────────── */}
      <aside
        className="md:hidden"
        style={{
          position:   "fixed",
          top:        "106px",
          right:      0,
          width:      "265px",
          height:     "calc(100vh - 106px)",
          background: "var(--bg-card)",
          borderLeft: "1px solid var(--border)",
          padding:    "20px 16px",
          zIndex:     999,
          display:    "flex",
          flexDirection: "column",
          gap:        "4px",
          boxShadow:  "-8px 0 48px rgba(0,0,0,0.15)",
          transform:  menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <button
            key={href}
            onClick={() => handleNav(href)}
            style={{
              width:       "100%",
              textAlign:   "left",
              fontFamily:  "'DM Sans', sans-serif",
              fontWeight:  500,
              fontSize:    "1rem",
              padding:     "12px 16px",
              borderRadius:"10px",
              border:      "none",
              outline:     "none",
              cursor:      "pointer",
              transition:  "all 0.2s ease",
              background:  activeId === href ? "var(--tag-bg)"        : "transparent",
              color:       activeId === href ? "var(--accent-bright)"  : "var(--text-secondary)",
            }}
          >
            {label}
          </button>
        ))}

        {/* Socials at bottom of drawer */}
        <div style={{
          marginTop:  "auto",
          paddingTop: "20px",
          borderTop:  "1px solid var(--border)",
          display:    "flex",
          gap:        "12px",
          justifyContent: "center",
        }}>
          {[
            { href: "https://github.com/",     label: "GitHub",
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            },
            { href: "https://linkedin.com/in/", label: "LinkedIn",
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            },
            { href: "mailto:pathakmansi608@gmail.com", label: "Email",
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                ...iconBtnStyle,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color       = "var(--accent-bright)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color       = "var(--text-secondary)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;