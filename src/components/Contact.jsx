import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const { name, email, subject, message } = formData;
    const mailto = `mailto:pathakmansi608@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 800);
  };

  // shared input style via CSS var (can't do focus:border with CSS vars in pure Tailwind)
  const inputCls = `
    w-full px-4 py-3 rounded-xl font-dm text-[0.92rem]
    outline-none border transition-all duration-200
    contact-input
  `;

  const labelCls = "font-dm text-[0.83rem] font-medium mb-[6px] block";

  return (
    <section className="relative overflow-hidden py-24 px-[clamp(20px,5vw,80px)]"
      style={{ background: "var(--bg-secondary)" }}>

      {/* BG orb */}
      <div aria-hidden="true" className="pointer-events-none absolute top-[5%] right-[5%]
        w-[320px] h-[320px] rounded-full blur-[60px]
        bg-[radial-gradient(circle,rgba(6,182,212,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ── Section header ──────────────────────── */}
        <div className="text-center mb-14">
          <span className="inline-block font-dm text-[0.78rem] font-semibold
            tracking-[0.15em] uppercase px-4 py-[5px] rounded-full border mb-4
            text-violet-300 bg-violet-500/10 border-violet-500/25">
            Contact
          </span>
          <h2 className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15]
            text-[clamp(2rem,5vw,3rem)]" style={{ color: "var(--text-primary)" }}>
            Get in{" "}
            <span className="bg-gradient-to-br from-violet-400 to-cyan-400
              bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="font-dm text-[0.95rem] mt-3" style={{ color: "var(--text-muted)" }}>
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 items-start">

          {/* ── Left info panel ─────────────────────── */}
          <div className="flex flex-col gap-4 w-full md:w-[320px] flex-shrink-0">

            <h3 className="font-syne font-bold text-[1.3rem]"
              style={{ color: "var(--text-primary)" }}>
              Let's Talk!
            </h3>
            <p className="font-dm text-[0.92rem] leading-[1.75]"
              style={{ color: "var(--text-secondary)" }}>
              I'm open to full-time roles, freelance projects, and collabs.
              Feel free to reach out — I'd love to hear from you.
            </p>

            {/* Info cards */}
            {[
              {
                icon: "✉️", label: "Email", value: "pathakmansi608@gmail.com",
                href: "mailto:pathakmansi608@gmail.com",
              },
              {
                icon: "💼", label: "LinkedIn", value: "Connect with me",
                href: "https://www.linkedin.com/in/mansi-pathak-8516b72ba/",
              },
              {
                icon: "📄", label: "Resume", value: "Download CV",
                href: "/resume-mansi.pdf",
              },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-2xl border
                  no-underline transition-all duration-200 group
                  hover:-translate-x-0 hover:translate-x-1"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center
                  text-[1.1rem] flex-shrink-0 border"
                  style={{ background: "var(--accent-glow)", borderColor: "var(--tag-border)" }}>
                  {icon}
                </div>
                <div>
                  <p className="font-dm text-[0.72rem] mb-[2px]"
                    style={{ color: "var(--text-muted)" }}>{label}</p>
                  <p className="font-dm text-[0.88rem] font-medium"
                    style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
                <svg className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity"
                  width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            ))}

            {/* Availability card */}
            <div className="px-5 py-4 rounded-2xl border mt-1"
              style={{
                background:  "linear-gradient(135deg,var(--accent-glow),var(--accent2-glow))",
                borderColor: "var(--tag-border)",
              }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-[10px] h-[10px] rounded-full bg-emerald-400 flex-shrink-0
                  animate-pulse" />
                <span className="font-syne font-bold text-[0.92rem]"
                  style={{ color: "var(--text-primary)" }}>
                  Available for hire
                </span>
              </div>
              <p className="font-dm text-[0.8rem]" style={{ color: "var(--text-secondary)" }}>
                B.Tech CSE graduate (2026) actively seeking full-time developer roles.
              </p>
            </div>
          </div>

          {/* ── Right form panel ────────────────────── */}
          <div className="flex-1 min-w-[280px] rounded-3xl border p-[clamp(24px,4vw,40px)]"
            style={{
              background:   "var(--bg-card)",
              borderColor:  "var(--border)",
              boxShadow:    "var(--shadow-card)",
            }}>

            <h3 className="font-syne font-bold text-[1.2rem] mb-7"
              style={{ color: "var(--text-primary)" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name + Email row */}
              <div className="flex gap-4 flex-wrap">
                <div className="flex-1 min-w-[180px]">
                  <label htmlFor="name" className={labelCls}
                    style={{ color: "var(--text-secondary)" }}>
                    Your Name *
                  </label>
                  <input id="name" name="name" type="text" required
                    placeholder="Enter your name"
                    value={formData.name} onChange={handleChange}
                    className={inputCls}
                    style={{
                      background:  "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color:       "var(--text-primary)",
                    }} />
                </div>
                <div className="flex-1 min-w-[180px]">
                  <label htmlFor="email" className={labelCls}
                    style={{ color: "var(--text-secondary)" }}>
                    Your Email *
                  </label>
                  <input id="email" name="email" type="email" required
                    placeholder="Enter your email"
                    value={formData.email} onChange={handleChange}
                    className={inputCls}
                    style={{
                      background:  "var(--input-bg)",
                      borderColor: "var(--input-border)",
                      color:       "var(--text-primary)",
                    }} />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className={labelCls}
                  style={{ color: "var(--text-secondary)" }}>
                  Subject
                </label>
                <input id="subject" name="subject" type="text"
                  placeholder="What's this about?"
                  value={formData.subject} onChange={handleChange}
                  className={inputCls}
                  style={{
                    background:  "var(--input-bg)",
                    borderColor: "var(--input-border)",
                    color:       "var(--text-primary)",
                  }} />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelCls}
                  style={{ color: "var(--text-secondary)" }}>
                  Message *
                </label>
                <textarea id="message" name="message" rows={5} required
                  placeholder="Write your message here…"
                  value={formData.message} onChange={handleChange}
                  className={`${inputCls} resize-y min-h-[130px]`}
                  style={{
                    background:  "var(--input-bg)",
                    borderColor: "var(--input-border)",
                    color:       "var(--text-primary)",
                  }} />
              </div>

              {/* Submit button */}
              <button type="submit" disabled={status === "sending"}
                className="w-full py-[14px] rounded-xl font-dm font-bold text-[0.95rem]
                  text-white border-none outline-none cursor-pointer
                  flex items-center justify-center gap-2
                  transition-all duration-300 hover:-translate-y-[2px]
                  disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: status === "sent"
                    ? "#10b981"
                    : "linear-gradient(135deg,#8b5cf6,#06b6d4)",
                  boxShadow: "0 4px 20px rgba(139,92,246,0.35)",
                }}>
                {status === "sent" ? (
                  <><span>✓</span> Message Sent!</>
                ) : status === "sending" ? (
                  <>
                    <span className="inline-block animate-spin">⟳</span>
                    Opening mail…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Focus ring for inputs — needs a tiny style block since
          Tailwind can't target :focus with CSS custom properties */}
      <style>{`
        .contact-input:focus {
          border-color: var(--input-focus) !important;
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
      `}</style>
    </section>
  );
};

export default Contact;