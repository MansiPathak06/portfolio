import React, { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar 0 → 100 over ~1.4s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // fade out after reaching 100
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 28);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1);   opacity: 1;   }
          50%       { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes loaderFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderRingRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .loader-mp {
          animation: loaderPulse 1.4s ease-in-out infinite,
                     loaderFadeIn 0.5s ease-out both;
        }
        .loader-ring {
          animation: loaderRingRotate 1.8s linear infinite;
        }
        .loader-sub {
          animation: loaderFadeIn 0.6s ease-out 0.25s both;
        }
        .loader-wrap {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .loader-wrap.fade-out {
          opacity: 0 !important;
          transform: scale(1.04);
          pointer-events: none;
        }
      `}</style>

      <div
        className={`loader-wrap${fadeOut ? " fade-out" : ""}`}
        style={{
          position:       "fixed",
          inset:          0,
          zIndex:         9999,
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          background:     "var(--bg-primary)",
          gap:            "32px",
        }}
      >
        {/* Rotating ring + MP letters */}
        <div style={{ position: "relative", width: "110px", height: "110px" }}>
          {/* Outer spinning ring */}
          <svg
            className="loader-ring"
            width="110" height="110"
            viewBox="0 0 110 110"
            style={{ position: "absolute", inset: 0 }}
          >
            <circle
              cx="55" cy="55" r="50"
              fill="none"
              stroke="var(--border)"
              strokeWidth="3"
            />
            <circle
              cx="55" cy="55" r="50"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeDasharray="314"
              strokeDashoffset="235"
              strokeLinecap="round"
            />
          </svg>

          {/* MP initials */}
          <div
            className="loader-mp"
            style={{
              position:       "absolute",
              inset:          0,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              fontFamily:     "'Syne', sans-serif",
              fontWeight:     800,
              fontSize:       "2.2rem",
              letterSpacing:  "-0.04em",
              background:     "linear-gradient(135deg, var(--accent-bright), var(--accent2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
              backgroundClip: "text",
            }}
          >
            MP
          </div>
        </div>

        {/* Name + role */}
        <div className="loader-sub" style={{ textAlign: "center" }}>
          <p style={{
            fontFamily:    "'Syne', sans-serif",
            fontWeight:    700,
            fontSize:      "1.1rem",
            color:         "var(--text-primary)",
            marginBottom:  "4px",
            letterSpacing: "-0.01em",
          }}>
            Mansi Pathak
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize:   "0.8rem",
            color:      "var(--text-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            Full Stack Developer
          </p>
        </div>

        {/* Progress bar */}
        <div style={{
          width:        "180px",
          height:       "3px",
          borderRadius: "99px",
          background:   "var(--border)",
          overflow:     "hidden",
        }}>
          <div style={{
            height:       "100%",
            borderRadius: "99px",
            background:   "linear-gradient(90deg, var(--accent), var(--accent2))",
            width:        `${progress}%`,
            transition:   "width 0.03s linear",
          }} />
        </div>

        {/* Progress number */}
        <p style={{
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      "0.72rem",
          color:         "var(--text-muted)",
          marginTop:     "-20px",
          letterSpacing: "0.08em",
        }}>
          {progress}%
        </p>
      </div>
    </>
  );
};

export default Loader;