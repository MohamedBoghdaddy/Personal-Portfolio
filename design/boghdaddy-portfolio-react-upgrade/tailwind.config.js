/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "text-primary", "text-secondary", "text-tertiary", "text-error",
    "border-primary", "border-secondary", "border-tertiary", "border-error",
    "border-primary/30", "border-secondary/30", "border-tertiary/30", "border-error/30",
    "border-l-4", "border-l-2", "border-primary/40", "border-secondary/40", "border-tertiary/40",
    "bg-primary", "bg-secondary", "bg-tertiary", "bg-error",
    "bg-primary/10", "bg-secondary/10", "bg-tertiary/10", "bg-error/10",
    "shadow-glow", "shadow-cyanGlow", "shadow-purpleGlow"
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#161d16",
        "on-error-container": "#ffdad6",
        "secondary-container": "#00a6e0",
        "on-secondary-fixed-variant": "#004c69",
        "on-error": "#690005",
        "on-tertiary-fixed": "#2c0051",
        "on-primary-fixed": "#002109",
        "surface-container-highest": "#2f372e",
        "secondary-fixed-dim": "#7bd0ff",
        "on-secondary": "#00354a",
        "on-secondary-container": "#00374d",
        "surface-container-high": "#242c24",
        "on-surface-variant": "#bccbb9",
        "primary-fixed": "#6bff8f",
        "surface-container": "#1a221a",
        primary: "#4be277",
        "primary-fixed-dim": "#4ae176",
        "on-primary": "#003915",
        "on-surface": "#dce5d9",
        "on-primary-fixed-variant": "#005321",
        error: "#ffb4ab",
        tertiary: "#deb8ff",
        "primary-container": "#22c55e",
        secondary: "#7bd0ff",
        "inverse-surface": "#dce5d9",
        "tertiary-container": "#cb94ff",
        "on-tertiary-fixed-variant": "#6900b3",
        "surface-dim": "#0e150e",
        surface: "#0e150e",
        "surface-bright": "#333b33",
        "tertiary-fixed": "#f0dbff",
        background: "#0e150e",
        "on-primary-container": "#004b1e",
        "on-tertiary": "#490080",
        "on-background": "#dce5d9",
        "tertiary-fixed-dim": "#ddb7ff",
        "outline-variant": "#3d4a3d",
        "surface-variant": "#2f372e",
        "on-secondary-fixed": "#001e2c",
        outline: "#869585",
        "surface-tint": "#4ae176",
        "inverse-on-surface": "#2a322a",
        "on-tertiary-container": "#5f00a3",
        "error-container": "#93000a",
        "secondary-fixed": "#c4e7ff",
        "inverse-primary": "#006e2f",
        "surface-container-lowest": "#091009",
        navy: "#0B1120",
        slateHud: "#1E293B"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem"
      },
      spacing: {
        xl: "64px",
        gutter: "20px",
        base: "4px",
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "40px",
        margin: "32px"
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Grotesk", "monospace"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(75, 226, 119, 0.12)",
        cyanGlow: "0 0 30px rgba(123, 208, 255, 0.12)",
        purpleGlow: "0 0 30px rgba(222, 184, 255, 0.12)"
      }
    }
  },
  plugins: []
};
