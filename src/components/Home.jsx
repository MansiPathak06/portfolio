import React from "react";

const Home = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen overflow-hidden
        flex flex-wrap items-center justify-center
        gap-14 md:gap-16 pt-[106px] pb-16 px-[5vw]"
    >
      {/* ── Ambient orbs ──────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[15%] left-[3%]
          w-80 h-80 md:w-[420px] md:h-[420px]
          rounded-full blur-[56px] animate-orb-1"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[5%]
          w-60 h-60 md:w-[300px] md:h-[300px]
          rounded-full blur-[48px] animate-orb-2"
        style={{
          background:
            "radial-gradient(circle, var(--accent2-glow), transparent 70%)",
        }}
      />

      {/* ── Text content ──────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center text-center
          max-w-[600px] w-full"
      >
        {/* Availability badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 mb-7
            px-4 py-[5px] rounded-full border
            font-dm text-[0.8rem] font-medium"
          style={{
            background:  "var(--tag-bg)",
            borderColor: "var(--tag-border)",
            color:       "var(--accent-bright)",
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0 animate-pulse-dot"
            style={{ background: "var(--green)" }}
          />
          Available for opportunities
        </div>

        {/* Greeting */}
        <h2
          className="animate-fade-up-2 font-dm text-[clamp(1rem,2vw,1.15rem)]
            mb-1 tracking-wide"
          style={{ color: "var(--text-muted)" }}
        >
          Hello out there,
        </h2>

        {/* Name */}
        <div className="animate-fade-up-3 mb-3">
          <h1
            className="font-syne font-extrabold leading-[1.08] tracking-[-0.03em]
              text-[clamp(2.6rem,7vw,4.5rem)]"
          >
            <span style={{ color: "var(--text-primary)" }}>I'm Mansi </span>
            <span
              className="bg-gradient-to-br from-violet-500 to-cyan-500
                bg-clip-text text-transparent"
            >
              Pathak,
            </span>
          </h1>

          {/* Animated underline bar */}
          <span
            aria-hidden="true"
            className="block h-[4px] mx-auto mt-3 rounded-full animate-slide-bar w-0"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--accent2))",
            }}
          />
        </div>

        {/* Tagline */}
        <h2
          className="animate-fade-up-4 font-dm text-[clamp(1.05rem,2.5vw,1.4rem)]
            font-normal mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          a passionate{" "}
          <span
            className="font-semibold border-b-2 pb-[1px]"
            style={{
              color:       "var(--accent-bright)",
              borderColor: "var(--accent)",
            }}
          >
            full stack developer
          </span>
          {/* blinking cursor */}
          <span
            aria-hidden="true"
            className="inline-block w-[3px] h-[1.1em] ml-1 align-text-bottom animate-blink"
            style={{ background: "var(--accent)" }}
          />
        </h2>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up-5 flex flex-wrap justify-center gap-4
            sm:flex-row flex-col items-center w-full sm:w-auto"
        >
          {/* Primary */}
          <button
            onClick={() => scrollTo("contact")}
            className="font-dm font-bold text-[0.95rem] px-7 py-[13px] rounded-xl
              text-white border-none outline-none cursor-pointer
              transition-all duration-300 hover:-translate-y-[2px] w-full sm:w-auto"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
              boxShadow: "0 4px 20px var(--accent-glow)",
            }}
          >
            Connect with me
          </button>

          {/* Outline */}
          <a
            href="/resume-mansi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm font-bold text-[0.95rem] px-7 py-3 rounded-xl
              no-underline border flex items-center justify-center gap-2
              transition-all duration-300 hover:-translate-y-[2px] w-full sm:w-auto"
            style={{
              background:  "transparent",
              color:       "var(--text-primary)",
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color       = "var(--accent-bright)";
              e.currentTarget.style.background  = "var(--tag-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color       = "var(--text-primary)";
              e.currentTarget.style.background  = "transparent";
            }}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            My Resume
          </a>
        </div>

        {/* Social links */}
        <div className="animate-fade-up-5 flex items-center gap-3 mt-8">
          <span
            className="font-dm text-[0.75rem] tracking-wide"
            style={{ color: "var(--text-muted)" }}
          >
            Find me on
          </span>

          {[
            {
              label: "GitHub",
              href:  "https://github.com/",
              icon: (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href:  "https://linkedin.com/in/",
              icon: (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "Email",
              href:  "mailto:pathakmansi608@gmail.com",
              icon: (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
            },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-[10px] flex items-center justify-center
                border no-underline transition-all duration-200
                hover:-translate-y-[2px]"
              style={{
                border:     "1px solid var(--border)",
                background: "var(--bg-card)",
                color:      "var(--text-secondary)",
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
      </div>

      {/* ── Profile image ──────────────────────────────── */}
      <div className="animate-fade-up-3 relative z-10 flex-shrink-0 flex items-center justify-center">
        <div
          className="relative w-[min(80vw,320px)] h-[min(80vw,320px)]
            md:w-[360px] md:h-[360px]"
        >
          {/* Spinning ring */}
          <div
            aria-hidden="true"
            className="absolute inset-[-5px] rounded-full animate-spin-ring"
            style={{
              background:
                "conic-gradient(from 0deg, var(--accent), var(--accent2), var(--accent))",
            }}
          />
          {/* Gap */}
          <div
            aria-hidden="true"
            className="absolute inset-[3px] rounded-full"
            style={{ background: "var(--bg-primary)" }}
          />

          {/* Profile image */}
          <img
            src="/home.jpg"
            alt="Mansi Pathak"
            className="absolute inset-[8px] rounded-full
              w-[calc(100%-16px)] h-[calc(100%-16px)]
              object-cover object-top animate-float
              transition-transform duration-500 hover:scale-[1.04]"
          />

          {/* Stat chip — top left */}
          <div
            className="absolute -top-3 -left-6 rounded-2xl px-4 py-3 border
              shadow-[0_8px_32px_rgba(0,0,0,0.25)] animate-float-slow"
            style={{
              background:  "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="font-dm text-[0.65rem] mb-[2px]"
              style={{ color: "var(--text-muted)" }}
            >
              Stack
            </p>
            <p
              className="font-syne font-extrabold text-[1.25rem] leading-none"
              style={{ color: "var(--accent2)" }}
            >
              Full
            </p>
          </div>

          {/* Stat chip — bottom right */}
          <div
            className="absolute -bottom-3 -right-6 rounded-2xl px-4 py-3 border
              shadow-[0_8px_32px_rgba(0,0,0,0.25)] animate-float"
            style={{
              background:  "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="font-dm text-[0.65rem] mb-[2px]"
              style={{ color: "var(--text-muted)" }}
            >
              Projects
            </p>
            <p
              className="font-syne font-extrabold text-[1.25rem] leading-none"
              style={{ color: "var(--accent-bright)" }}
            >
              15+
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-[5px] opacity-40 hover:opacity-70
          transition-opacity duration-300 cursor-pointer
          bg-transparent border-none outline-none"
      >
        <span
          className="font-dm text-[0.65rem] tracking-[0.15em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-[22px] h-9 rounded-[11px] border-[1.5px]
            flex justify-center pt-[6px]"
          style={{ borderColor: "var(--text-muted)" }}
        >
          <div
            className="w-1 h-2 rounded-sm animate-blink"
            style={{ background: "var(--text-muted)" }}
          />
        </div>
      </button>
    </section>
  );
};

export default Home;