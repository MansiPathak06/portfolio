import React, { useEffect, useRef } from "react";

const EXPERIENCES = [
  {
    type:     "job",
    role:     "Full Stack Developer",
    company:  "Zentrix InfoTech",          // ← replace with actual company
    duration: "January 2025 – Present",
    current:  true,
    points: [
      "Building and maintaining full-stack web applications using React.js, Node.js, and MySQL.",
      "Collaborating with cross-functional teams to deliver scalable, production-ready features.",
      "Optimizing application performance and improving user experience across platforms.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
  },
  {
    type:     "internship",
    role:     "Full Stack Developer Intern",
    company:  "Zentrix InfoTech",    // ← replace with actual company
    duration: "July 2024 – December 2024",
    current:  false,
    points: [
      "Developed responsive web interfaces using React.js and Tailwind CSS.",
      "Built RESTful APIs with Node.js and Express.js, integrated with MySQL databases.",
      "Delivered multiple client projects including e-commerce platforms and business websites.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "MySQL", "CSS3"],
  },
];

const Experience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".exp-reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`;
              el.classList.add("exp-revealed");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .exp-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .exp-reveal.exp-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .exp-card:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
        }
        .exp-point::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: 7px;
        }
      `}</style>

      <section
        ref={ref}
        style={{ background: "var(--bg-primary)" }}
        className="py-24 px-[clamp(20px,5vw,80px)] relative overflow-hidden"
      >
        {/* BG orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[5%] left-[3%]
            w-72 h-72 rounded-full blur-[56px]"
          style={{
            background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
          }}
        />

        <div className="max-w-[1100px] mx-auto" >

          {/* Header */}
          <div className="exp-reveal mb-14">
            <span
              className="inline-block font-dm text-[0.74rem] font-semibold
                tracking-[0.18em] uppercase px-4 py-[5px] rounded-full border mb-5"
              style={{
                color:       "var(--accent-bright)",
                background:  "var(--tag-bg)",
                borderColor: "var(--tag-border)",
              }}
            >
              Experience
            </span>
            <h2
              className="font-syne font-extrabold text-[clamp(2rem,5vw,2.8rem)]
                tracking-[-0.03em] leading-[1.15] mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Work{" "}
              <span style={{ color: "var(--accent-bright)" }}>History</span>
            </h2>
            <div
              className="h-[3px] w-10 rounded-full"
              style={{ background: "var(--accent)" }}
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-[2px] hidden sm:block"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col gap-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="exp-reveal flex gap-8 items-start">

                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 mt-[18px]">
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center
                        justify-center z-10 flex-shrink-0"
                      style={{
                        background:  exp.current ? "var(--accent)"     : "var(--bg-card)",
                        borderColor: exp.current ? "var(--accent)"     : "var(--border)",
                        color:       exp.current ? "#fff"               : "var(--text-muted)",
                        fontSize:    "1rem",
                      }}
                    >
                      {exp.type === "job" ? "💼" : "🎓"}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="exp-card flex-1 rounded-2xl border p-6 transition-all duration-300"
                    style={{
                      background:  "var(--bg-card)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3
                            className="font-syne font-bold text-[1.05rem]"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span
                              className="inline-flex items-center gap-[6px] font-dm
                                text-[0.68rem] font-semibold px-[10px] py-[3px]
                                rounded-full border"
                              style={{
                                background:  "rgba(16,185,129,0.1)",
                                borderColor: "rgba(16,185,129,0.3)",
                                color:       "var(--green)",
                              }}
                            >
                              <span
                                className="w-[6px] h-[6px] rounded-full animate-pulse"
                                style={{ background: "var(--green)" }}
                              />
                              Current
                            </span>
                          )}
                          {!exp.current && (
                            <span
                              className="font-dm text-[0.68rem] font-semibold px-[10px]
                                py-[3px] rounded-full border"
                              style={{
                                background:  "var(--tag-bg)",
                                borderColor: "var(--tag-border)",
                                color:       "var(--accent-bright)",
                              }}
                            >
                              Internship
                            </span>
                          )}
                        </div>
                        <p
                          className="font-dm font-semibold text-[0.88rem]"
                          style={{ color: "var(--accent-bright)" }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      <span
                        className="font-dm text-[0.78rem] px-3 py-1 rounded-lg
                          flex-shrink-0"
                        style={{
                          background: "var(--bg-secondary)",
                          color:      "var(--text-muted)",
                          border:     "1px solid var(--border)",
                        }}
                      >
                        📅 {exp.duration}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <ul className="flex flex-col gap-[8px] mb-5 list-none p-0 m-0">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="exp-point flex items-start font-dm text-[0.86rem]"
                          style={{
                            color:      "var(--text-secondary)",
                            lineHeight: 1.65,
                          }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-dm text-[0.72rem] font-medium px-[10px]
                            py-[3px] rounded-lg border"
                          style={{
                            background:  "var(--tag-bg)",
                            borderColor: "var(--tag-border)",
                            color:       "var(--tag-text)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;