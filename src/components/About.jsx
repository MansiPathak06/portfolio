import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.08}s`;
              el.classList.add('revealed');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const education = [
    { degree: 'B.Tech in Computer Science & Engineering', year: '2022 – 2026', icon: '🎓' },
    { degree: 'XII Grade – UP Board', score: '79%', year: '2022', icon: '📘' },
    { degree: 'X Grade – UP Board',   score: '88%', year: '2020', icon: '📗' },
  ];

  const achievements = [
    {
      icon: '📄',
      label: 'Research Paper',
      detail: '"Enhancing Blockchain Security and Efficiency with Machine Learning", IJRPR, 2025.',
    },
    {
      icon: '🏆',
      label: 'Award Winner',
      detail: 'Debate, Poetry, and Talent Hunt at Kothiwal Institute (2022–2024).',
    },
  ];

  const stats = [
    { value: '15+', label: 'Projects'    },
    { value: '3+',  label: 'Years'       },
    { value: '10+', label: 'Tech Stack'  },
    { value: '1',   label: 'Publication' },
  ];

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .edu-row:hover {
          border-color: var(--border-hover) !important;
          transform: translateX(4px);
        }
        .ach-row:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
        }
        .stat-box:hover {
          border-color: var(--border-hover) !important;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="py-24 px-[clamp(20px,5vw,80px)] relative overflow-hidden"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-[1100px] mx-auto">

          {/* ── Two-column layout ──────────────────────────────────────────────
              Key fix: heading lives INSIDE the left column, so right column
              starts at the exact same top edge as "About Me / Who Am I?"
          ─────────────────────────────────────────────────────────────────── */}
          <div className="flex gap-14 flex-wrap items-start">

            {/* ════════════════ LEFT COLUMN ════════════════ */}
            <div className="flex flex-col gap-7 flex-1 min-w-[260px]">

              {/* Heading — top of left col = top of right col */}
              <div className="reveal">
                <span
                  className="inline-block font-dm text-[0.74rem] font-semibold
                    tracking-[0.18em] uppercase px-4 py-[5px] rounded-full border mb-5"
                  style={{
                    color:       'var(--accent-bright)',
                    background:  'var(--tag-bg)',
                    borderColor: 'var(--tag-border)',
                  }}
                >
                  About Me
                </span>

                <h2
                  className="font-syne font-extrabold text-[clamp(2rem,5vw,2.8rem)]
                    tracking-[-0.03em] leading-[1.15] mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Who Am{' '}
                  <span style={{ color: 'var(--accent-bright)' }}>I?</span>
                </h2>

                <div
                  className="h-[3px] w-10 rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
              </div>

              {/* Bio */}
              <p
                className="reveal font-dm text-[0.97rem] leading-[1.85]"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm a Full Stack Developer specializing in{' '}
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  React.js, Next.js, Node.js, Express.js, and MySQL.
                </span>{' '}
                I build scalable, responsive web applications with a focus on clean code,
                performance, and exceptional user experience. I enjoy turning complex
                problems into clean, maintainable solutions.
              </p>

              {/* Stats grid */}
              <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="stat-box flex flex-col items-center py-5 px-3
                      rounded-xl border text-center transition-all duration-200"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  >
                    <span
                      className="font-syne font-extrabold text-[1.55rem] leading-none mb-[5px]"
                      style={{ color: 'var(--accent-bright)' }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="font-dm text-[0.71rem] font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Open to work badge */}
              <div
                className="reveal self-start flex items-center gap-3 px-5 py-3 rounded-xl border"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <span
                  className="w-[9px] h-[9px] rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: 'var(--green)' }}
                />
                <span
                  className="font-dm text-[0.84rem] font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Open to full-time roles — B.Tech CSE (2026)
                </span>
              </div>
            </div>

            {/* ════════════════ RIGHT COLUMN ════════════════ */}
            <div className="flex flex-col gap-8 flex-1 min-w-[260px]">

              {/* Education */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center
                      text-[0.88rem] flex-shrink-0 border"
                    style={{ background: 'var(--tag-bg)', borderColor: 'var(--tag-border)' }}
                  >
                    🎓
                  </div>
                  <h3
                    className="font-syne font-bold text-[0.97rem]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Education
                  </h3>
                </div>

                <ul className="flex flex-col gap-[9px] list-none p-0 m-0">
                  {education.map((ed, i) => (
                    <li
                      key={i}
                      className="edu-row relative flex items-center gap-3 px-4 py-[13px]
                        rounded-xl border overflow-hidden cursor-default transition-all duration-200"
                      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                    >
                      {/* left accent strip */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                        style={{ background: 'var(--accent)' }}
                      />
                      <span className="text-[1.05rem] flex-shrink-0 pl-1">{ed.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-dm font-medium text-[0.86rem] leading-snug"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {ed.degree}
                        </p>
                        {ed.score && (
                          <p
                            className="font-dm font-semibold text-[0.73rem] mt-[3px]"
                            style={{ color: 'var(--accent-bright)' }}
                          >
                            Score: {ed.score}
                          </p>
                        )}
                      </div>
                      <span
                        className="font-dm text-[0.72rem] px-[10px] py-[3px]
                          rounded-md flex-shrink-0 whitespace-nowrap"
                        style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
                      >
                        {ed.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center
                      text-[0.88rem] flex-shrink-0 border"
                    style={{ background: 'var(--tag-bg)', borderColor: 'var(--tag-border)' }}
                  >
                    🏆
                  </div>
                  <h3
                    className="font-syne font-bold text-[0.97rem]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Academic &amp; Co-Curricular Achievements
                  </h3>
                </div>

                <ul className="flex flex-col gap-[9px] list-none p-0 m-0">
                  {achievements.map((a, i) => (
                    <li
                      key={i}
                      className="ach-row flex gap-4 items-start px-4 py-4
                        rounded-xl border transition-all duration-200 cursor-default"
                      style={{
                        background:  'var(--bg-card)',
                        borderColor: 'var(--border)',
                        borderLeft:  '3px solid var(--accent)',
                      }}
                    >
                      <span className="text-[1.2rem] flex-shrink-0 mt-[2px]">{a.icon}</span>
                      <p
                        className="font-dm text-[0.85rem] leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span className="font-bold" style={{ color: 'var(--accent-bright)' }}>
                          {a.label}:{' '}
                        </span>
                        {a.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;