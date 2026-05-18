import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: -100, y: -100 });
  const ringPos  = useRef({ x: -100, y: -100 });
  const rafRef   = useRef(null);
  const [hidden, setHidden]   = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave  = () => setHidden(true);
    const onEnter  = () => setHidden(false);
    const onDown   = () => setClicked(true);
    const onUp     = () => setClicked(false);

    // Detect hovering over interactive elements
    const onOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isLink = tag === "a" || tag === "button" ||
        e.target.closest("a") || e.target.closest("button");
      setHovered(!!isLink);
    };

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("mouseover",  onOver);

    // Smooth ring follows with lag
    const animate = () => {
      const lag = 0.12;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * lag;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * lag;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%,-50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mouseover",  onOver);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const opacity = hidden ? 0 : 1;

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div
        ref={dotRef}
        style={{
          position:     "fixed",
          top:          0,
          left:         0,
          width:        clicked ? "6px" : "8px",
          height:       clicked ? "6px" : "8px",
          borderRadius: "50%",
          background:   "var(--accent-bright)",
          pointerEvents:"none",
          zIndex:       99999,
          opacity,
          transition:   "opacity 0.2s, width 0.15s, height 0.15s",
          mixBlendMode: "normal",
        }}
      />

      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        style={{
          position:     "fixed",
          top:          0,
          left:         0,
          width:        hovered ? "44px" : clicked ? "28px" : "36px",
          height:       hovered ? "44px" : clicked ? "28px" : "36px",
          borderRadius: "50%",
          border:       `1.5px solid ${hovered ? "var(--accent2)" : "var(--accent)"}`,
          background:   hovered ? "var(--accent-glow)" : "transparent",
          pointerEvents:"none",
          zIndex:       99998,
          opacity:      hidden ? 0 : hovered ? 0.7 : 0.45,
          transition:   "opacity 0.2s, width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
        }}
      />
    </>
  );
};

export default CustomCursor;