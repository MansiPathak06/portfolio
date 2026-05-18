/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm:   ["DM Sans", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both",
        "fade-up-2":  "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.15s both",
        "fade-up-3":  "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.28s both",
        "fade-up-4":  "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.40s both",
        "fade-up-5":  "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) 0.52s both",
        "float":      "floatY 5s ease-in-out infinite",
        "float-slow": "floatY 7s ease-in-out 1s infinite",
        "spin-ring":  "spinRing 8s linear infinite",
        "pulse-dot":  "pulseDot 2.2s ease-in-out infinite",
        "slide-bar":  "slideBar 1.2s ease-out 0.8s both",
        "blink":      "blink 1s step-end infinite",
        "orb-1":      "floatY 9s ease-in-out infinite",
        "orb-2":      "floatY 11s ease-in-out 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        spinRing: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        pulseDot: {
          "0%,100%": { boxShadow: "0 0 0 3px rgba(16,185,129,0.25)" },
          "50%":     { boxShadow: "0 0 0 6px rgba(16,185,129,0.1)" },
        },
        slideBar: {
          "0%":   { width: "0px" },
          "100%": { width: "90px" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};