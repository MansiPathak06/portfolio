import React, { useState } from "react";

// ── Skill data — Devicon class ya emoji ────────────────────
const SKILLS = [
  { name: "JavaScript",   icon: "devicon-javascript-plain colored",  category: "Frontend" },
  { name: "HTML5",        icon: "devicon-html5-plain colored",        category: "Frontend" },
  { name: "CSS3 / Tailwind", icon: "devicon-css3-plain colored",     category: "Frontend" },
  { name: "React.js",    icon: "devicon-react-original colored",     category: "Frontend" },
  { name: "Next.js",     icon: "devicon-nextjs-plain",               category: "Frontend" },
  { name: "Node.js",     icon: "devicon-nodejs-plain colored",       category: "Backend"  },
  { name: "Express.js",  icon: "devicon-express-original",           category: "Backend"  },
  { name: "MySQL",       icon: "devicon-mysql-plain colored",        category: "Backend"  },
  { name: "Git",         icon: "devicon-git-plain colored",          category: "Tools"    },
  { name: "Java Basics", icon: "devicon-java-plain colored",         category: "Tools"    },
  { name: "Python",      icon: "devicon-python-plain colored",       category: "Tools"    },
  { name: "MS Office",   icon: "devicon-windows8-original colored",  category: "Tools"    },
  { name: "Public Speaking", emoji: "🎤",                            category: "Soft Skills" },
  { name: "Leadership",      emoji: "🚀",                            category: "Soft Skills" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Tools", "Soft Skills"];

// category accent colours (bg / border / text)
const CAT_COLORS = {
  Frontend:      { bg: "rgba(139,92,246,0.12)",  border: "rgba(139,92,246,0.28)", text: "#a78bfa" },
  Backend:       { bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.28)", text: "#67e8f9"  },
  Tools:         { bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.28)", text: "#fbbf24"  },
  "Soft Skills": { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.28)", text: "#6ee7b7"  },
};

const STATS = [
  { icon: "🎨", num: "5+",  label: "Frontend Tech"   },
  { icon: "⚙️", num: "3+",  label: "Backend Tech"    },
  { icon: "🚀", num: "15+", label: "Projects Built"  },
  { icon: "📅", num: "3+",  label: "Years Practice"  },
];

const Skills = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? SKILLS
    : SKILLS.filter((s) => s.category === active);

  return (
    <section className="relative overflow-hidden py-24 px-[clamp(20px,5vw,80px)]"
      style={{ background: "var(--bg-secondary)" }}>

      {/* BG orb */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[5%] left-[4%]
        w-80 h-80 rounded-full blur-[60px] opacity-70
        bg-[radial-gradient(circle,rgba(139,92,246,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ── Section header ──────────────────────────── */}
        <div className="text-center mb-12">
          <span className="inline-block font-dm text-[0.78rem] font-semibold tracking-[0.15em]
            uppercase px-4 py-[5px] rounded-full border
            text-violet-300 bg-violet-500/10 border-violet-500/25 mb-4">
            Tech Stack
          </span>
          <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15]
            text-[clamp(2rem,5vw,3rem)]"
            style={{ color: "var(--text-primary)" }}>
            My{" "}
            <span className="bg-gradient-to-br from-violet-400 to-cyan-400
              bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="font-dm text-[0.95rem] mt-3"
            style={{ color: "var(--text-muted)" }}>
            Technologies &amp; tools I work with
          </p>
        </div>

        {/* ── Category filter pills ────────────────────── */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className="font-dm font-medium text-[0.84rem] px-5 py-[7px] rounded-full
                border transition-all duration-200 outline-none cursor-pointer"
              style={{
                background:   active === cat ? "#8b5cf6"                    : "var(--bg-card)",
                color:        active === cat ? "#fff"                        : "var(--text-secondary)",
                borderColor:  active === cat ? "#8b5cf6"                    : "var(--border)",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* ── Skills grid ─────────────────────────────── */}
        <div className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))" }}>
          {filtered.map((skill, i) => {
            const col = CAT_COLORS[skill.category];
            return (
              <div key={skill.name}
                className="skill-card group relative flex flex-col items-center gap-3
                  py-6 px-3 rounded-2xl border cursor-default
                  transition-all duration-250"
                style={{
                  background:   "var(--bg-card)",
                  borderColor:  "var(--border)",
                  animationDelay: `${i * 0.045}s`,
                }}>

                {/* category dot top-right */}
                <span className="absolute top-[10px] right-[10px] w-[6px] h-[6px]
                  rounded-full flex-shrink-0"
                  style={{ background: col.text }} />

                {/* icon box */}
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center
                  justify-center text-[1.8rem] border"
                  style={{ background: col.bg, borderColor: col.border }}>
                  {skill.icon
                    ? <i className={skill.icon} style={{ fontSize: "1.75rem" }} />
                    : <span style={{ fontSize: "1.6rem" }}>{skill.emoji}</span>
                  }
                </div>

                {/* name */}
                <span className="font-dm font-semibold text-[0.8rem] text-center leading-tight"
                  style={{ color: "var(--text-primary)" }}>
                  {skill.name}
                </span>

                {/* category pill */}
                <span className="font-dm text-[0.68rem] font-medium px-2 py-[2px] rounded-full"
                  style={{ background: col.bg, color: col.text }}>
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Stats row ───────────────────────────────── */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border)" }}>
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-7 px-4 text-center border-r last:border-r-0"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <span className="text-[1.5rem] mb-2">{s.icon}</span>
              <span className="font-syne font-extrabold text-[1.75rem] leading-none text-violet-400">
                {s.num}
              </span>
              <span className="font-dm text-[0.78rem] mt-[6px]"
                style={{ color: "var(--text-muted)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* hover styles via a tiny <style> block — only for :hover border-color
          (Tailwind can't do CSS-var hover easily without JIT arbitrary) */}
      <style>{`
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139,92,246,0.4) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }
        /* grid rows animate in */
        .skill-card {
          animation: fadeUp 0.45s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default Skills;