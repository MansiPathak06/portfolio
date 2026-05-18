import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader           from "./components/Loader.jsx";
import CustomCursor     from "./components/CustomCursor.jsx";
import OpenToWorkBanner from "./components/OpenToWorkBanner.jsx";
import Navbar           from "./components/Navbar.jsx";
import Home             from "./components/Home.jsx";
import Footer           from "./components/Footer.jsx";
import NotFound         from "./components/NotFound.jsx";

const About      = lazy(() => import("./components/About.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Skills     = lazy(() => import("./components/Skills.jsx"));
const Projects   = lazy(() => import("./components/Projects.jsx"));
const Contact    = lazy(() => import("./components/Contact.jsx"));

const SectionSpinner = () => (
  <div style={{ minHeight:"200px", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{
      width:"30px", height:"30px", borderRadius:"50%",
      border:"2px solid var(--border)", borderTopColor:"var(--accent)",
      animation:"spin 0.8s linear infinite",
    }}/>
    <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
  </div>
);

// ── Theme hook ───────────────────────────────────────────
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") || "dark"; }
    catch { return "dark"; }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  }, [theme]);
  return { theme, toggleTheme: () => setTheme((t) => t === "dark" ? "light" : "dark") };
};

// ── Simple path router ───────────────────────────────────
const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path;
};

// ── App ──────────────────────────────────────────────────
const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading]  = useState(true);
  const path = useRoute();

  // 404
  if (path !== "/" && path !== "") {
    return (
      <>
        <CustomCursor />
        <NotFound />
      </>
    );
  }

  return (
    <>
      {/* Custom cursor — desktop only, no-op on touch */}
      <CustomCursor />

      {/* Page loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div style={{
        opacity:    loading ? 0 : 1,
        transition: "opacity 0.4s ease",
        background: "var(--bg-primary)",
        color:      "var(--text-primary)",
        minHeight:  "100vh",
        position:   "relative",
      }}>

        {/*
          ┌─────────────────────────────┐  0px
          │  OpenToWorkBanner  38px     │
          ├─────────────────────────────┤  38px   ← navbar top
          │  Navbar            68px     │
          ├─────────────────────────────┤  106px  ← content starts
          │  Page content               │
          └─────────────────────────────┘

          Banner  → position:fixed, top:0,    zIndex:1100
          Navbar  → position:fixed, top:38px, zIndex:1000
          Content → paddingTop: 106px on Home section
        */}

        {/* Banner — z:1100, top:0 */}
        <OpenToWorkBanner />

        {/* Navbar — z:1000, top:38px (set inside Navbar.jsx) */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Subtle bg image overlay */}
        <div
          aria-hidden="true"
          style={{
            position:           "fixed",
            inset:              0,
            zIndex:             0,
            backgroundImage:    "url('/bgportfolio.avif')",
            backgroundSize:     "cover",
            backgroundPosition: "center",
            backgroundRepeat:   "no-repeat",
            opacity:            0.06,
            pointerEvents:      "none",
          }}
        />

        {/* Main content — top padding = banner(38) + navbar(68) = 106px */}
        <main style={{ position:"relative", zIndex:1 }}>
          <div id="home"       style={{ scrollMarginTop:"106px" }}><Home /></div>

          <Suspense fallback={<SectionSpinner />}>
            <div id="about"      style={{ scrollMarginTop:"106px" }}><About /></div>
          </Suspense>

          <Suspense fallback={<SectionSpinner />}>
            <div id="experience" style={{ scrollMarginTop:"106px" }}><Experience /></div>
          </Suspense>

          <Suspense fallback={<SectionSpinner />}>
            <div id="skills"     style={{ scrollMarginTop:"106px" }}><Skills /></div>
          </Suspense>

          <Suspense fallback={<SectionSpinner />}>
            <div id="projects"   style={{ scrollMarginTop:"106px" }}><Projects /></div>
          </Suspense>

          <Suspense fallback={<SectionSpinner />}>
            <div id="contact"    style={{ scrollMarginTop:"106px" }}><Contact /></div>
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;