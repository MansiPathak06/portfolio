import React, { useState } from "react";

const OpenToWorkBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        @keyframes bannerSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        .otw-banner {
          animation: bannerSlideDown 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        .otw-link:hover { text-decoration: underline; }
      `}</style>

      <div
        className="otw-banner"
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         1100,           /* above navbar (1000) */
          height:         "38px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          gap:            "10px",
          background:     "var(--accent)",
          color:          "#fff",
          fontSize:       "0.8rem",
          fontFamily:     "'DM Sans', sans-serif",
          fontWeight:     500,
          letterSpacing:  "0.01em",
          padding:        "0 48px 0 16px",
        }}
      >
        {/* Pulsing dot */}
        <span style={{
          width:        "8px",
          height:       "8px",
          borderRadius: "50%",
          background:   "#4ade80",
          flexShrink:   0,
          boxShadow:    "0 0 0 3px rgba(74,222,128,0.3)",
          animation:    "pulse 2s ease-in-out infinite",
        }} />

        <span>
          🎓 Actively looking for full-time roles — Graduating{" "}
          <strong>June 2026</strong>
        </span>

        <button
          onClick={scrollToContact}
          className="otw-link"
          style={{
            background:    "rgba(255,255,255,0.2)",
            border:        "1px solid rgba(255,255,255,0.4)",
            borderRadius:  "6px",
            color:         "#fff",
            padding:       "2px 10px",
            fontSize:      "0.76rem",
            fontWeight:    600,
            cursor:        "pointer",
            outline:       "none",
            whiteSpace:    "nowrap",
            transition:    "background 0.2s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.32)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
        >
          Hire me →
        </button>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss banner"
          style={{
            position:  "absolute",
            right:     "12px",
            background:"none",
            border:    "none",
            color:     "rgba(255,255,255,0.7)",
            fontSize:  "1.1rem",
            cursor:    "pointer",
            outline:   "none",
            lineHeight: 1,
            padding:   "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
          onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
        >
          ×
        </button>
      </div>
    </>
  );
};

export default OpenToWorkBanner;