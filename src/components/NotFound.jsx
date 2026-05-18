import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float404 {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes glitch1 {
          0%,100% { clip-path: inset(0 0 90% 0); transform: translateX(0); }
          20%      { clip-path: inset(30% 0 50% 0); transform: translateX(-4px); }
          40%      { clip-path: inset(60% 0 20% 0); transform: translateX(4px); }
          60%      { clip-path: inset(10% 0 70% 0); transform: translateX(-2px); }
          80%      { clip-path: inset(80% 0 5% 0);  transform: translateX(2px); }
        }
        @keyframes glitch2 {
          0%,100% { clip-path: inset(90% 0 0 0); transform: translateX(0); }
          20%      { clip-path: inset(50% 0 30% 0); transform: translateX(4px); }
          40%      { clip-path: inset(20% 0 60% 0); transform: translateX(-4px); }
          60%      { clip-path: inset(70% 0 10% 0); transform: translateX(2px); }
          80%      { clip-path: inset(5% 0 80% 0);  transform: translateX(-2px); }
        }
        .glitch-container { position: relative; display: inline-block; }
        .glitch-text { position: relative; }
        .glitch-text::before,
        .glitch-text::after {
          content: "404";
          position: absolute;
          top: 0; left: 0;
          font-family: inherit;
          font-weight: inherit;
          font-size: inherit;
          letter-spacing: inherit;
        }
        .glitch-text::before {
          color: var(--accent2);
          animation: glitch1 3.5s infinite;
        }
        .glitch-text::after {
          color: var(--accent);
          animation: glitch2 3.5s infinite;
        }
      `}</style>

      <div
        style={{
          minHeight:      "100vh",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "40px 20px",
          background:     "var(--bg-primary)",
          textAlign:      "center",
          position:       "relative",
          overflow:       "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            top:        "20%",
            left:       "10%",
            width:      "300px",
            height:     "300px",
            borderRadius:"50%",
            background: "radial-gradient(circle, var(--accent-glow), transparent 70%)",
            filter:     "blur(50px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position:   "absolute",
            bottom:     "15%",
            right:      "8%",
            width:      "250px",
            height:     "250px",
            borderRadius:"50%",
            background: "radial-gradient(circle, var(--accent2-glow), transparent 70%)",
            filter:     "blur(50px)",
            pointerEvents: "none",
          }}
        />

        {/* 404 glitch number */}
        <div
          style={{
            fontFamily:    "'Syne', sans-serif",
            fontWeight:    800,
            fontSize:      "clamp(7rem, 20vw, 14rem)",
            lineHeight:    1,
            letterSpacing: "-0.05em",
            color:         "var(--text-primary)",
            marginBottom:  "16px",
            animation:     "float404 5s ease-in-out infinite",
            userSelect:    "none",
          }}
          className="glitch-container"
        >
          <span
            className="glitch-text"
            style={{
              background:           "linear-gradient(135deg, var(--accent-bright), var(--accent2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
              backgroundClip:       "text",
            }}
          >
            404
          </span>
        </div>

        {/* Message */}
        <h1
          style={{
            fontFamily:    "'Syne', sans-serif",
            fontWeight:    700,
            fontSize:      "clamp(1.4rem, 3vw, 2rem)",
            color:         "var(--text-primary)",
            marginBottom:  "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontFamily:   "'DM Sans', sans-serif",
            fontSize:     "1rem",
            color:        "var(--text-muted)",
            marginBottom: "40px",
            maxWidth:     "380px",
            lineHeight:   1.7,
          }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="/"
            style={{
              fontFamily:   "'DM Sans', sans-serif",
              fontWeight:   700,
              fontSize:     "0.95rem",
              padding:      "12px 28px",
              borderRadius: "12px",
              background:   "linear-gradient(135deg, var(--accent), var(--accent2))",
              color:        "#fff",
              textDecoration:"none",
              transition:   "transform 0.2s, box-shadow 0.2s",
              boxShadow:    "0 4px 20px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px var(--accent-glow)";
            }}
          >
            ← Back to Home
          </a>
          <a
            href="/#contact"
            style={{
              fontFamily:   "'DM Sans', sans-serif",
              fontWeight:   700,
              fontSize:     "0.95rem",
              padding:      "11px 28px",
              borderRadius: "12px",
              background:   "transparent",
              color:        "var(--text-primary)",
              textDecoration:"none",
              border:       "1.5px solid var(--border)",
              transition:   "all 0.2s",
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
            Contact Me
          </a>
        </div>

        {/* Auto-redirect countdown */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize:   "0.8rem",
            color:      "var(--text-muted)",
            marginTop:  "32px",
          }}
        >
          Redirecting to home in{" "}
          <span style={{ color: "var(--accent-bright)", fontWeight: 700 }}>
            {count}s
          </span>
        </p>
      </div>
    </>
  );
};

export default NotFound;