import React, { useEffect, useRef } from "react";

const CursorBackground = () => {
  const orbRef  = useRef(null);
  const posRef  = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // Smooth lerp loop
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currRef.current.x = lerp(currRef.current.x, posRef.current.x, 0.07);
      currRef.current.y = lerp(currRef.current.y, posRef.current.y, 0.07);

      if (orbRef.current) {
        orbRef.current.style.transform =
          `translate(${currRef.current.x}px, ${currRef.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-bg-orb {
          position: fixed;
          top: 0;
          left: 0;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          will-change: transform;
          filter: blur(90px);
          opacity: 0.28;
          background: radial-gradient(
            circle at center,
            var(--accent)   0%,
            var(--accent2)  40%,
            transparent     75%
          );
          transition: opacity 0.4s ease;
        }

        /* Second smaller, faster orb for depth */
        .cursor-bg-orb-2 {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          will-change: transform;
          filter: blur(60px);
          opacity: 0.15;
          background: radial-gradient(
            circle at center,
            var(--accent2)  0%,
            var(--accent)   50%,
            transparent     80%
          );
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .cursor-bg-orb,
          .cursor-bg-orb-2 { display: none; }
        }
      `}</style>

      {/* Primary large orb */}
      <div ref={orbRef} className="cursor-bg-orb" />

      {/* Secondary smaller orb — slightly delayed via CSS (uses same ref position
          but lags more because we set it via a second RAF with slower lerp) */}
      <SecondOrb />
    </>
  );
};

/* ── Secondary orb with slower lerp ─────────────────────── */
const SecondOrb = () => {
  const ref     = useRef(null);
  const posRef  = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      // Slower lerp = more lag = depth effect
      currRef.current.x = lerp(currRef.current.x, posRef.current.x, 0.035);
      currRef.current.y = lerp(currRef.current.y, posRef.current.y, 0.035);

      if (ref.current) {
        ref.current.style.transform =
          `translate(${currRef.current.x}px, ${currRef.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={ref} className="cursor-bg-orb-2" />;
};

export default CursorBackground;