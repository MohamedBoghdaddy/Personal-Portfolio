/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "text-primary",
    "text-secondary",
    "text-tertiary",
    "text-error",
    "border-primary",
    "border-secondary",
    "border-tertiary",
    "border-error",
    "border-l-primary",
    "border-l-secondary",
    "border-l-tertiary",
    "border-l-error",
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
    "bg-error",
    "bg-primary/10",
    "bg-secondary/10",
    "bg-tertiary/10",
    "bg-error/10",
    "shadow-glow",
    "shadow-cyanGlow",
    "shadow-purpleGlow"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-elevated": "rgb(var(--color-surface-elevated) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-low) / <alpha-value>)",
        "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--color-surface-highest) / <alpha-value>)",
        nav: "rgb(var(--color-nav) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-strong": "rgb(var(--color-primary-strong) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        "on-background": "rgb(var(--color-text-main) / <alpha-value>)",
        "on-surface": "rgb(var(--color-text-main) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-text-muted) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
        "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-border-muted) / <alpha-value>)",
        "border-green": "rgb(var(--color-border-green) / <alpha-value>)"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem"
      },
      spacing: {
        base: "4px",
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "40px",
        xl: "64px",
        gutter: "20px",
        margin: "32px"
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Grotesk", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 28px rgb(var(--color-primary) / 0.18)",
        cyanGlow: "0 0 28px rgb(var(--color-secondary) / 0.16)",
        purpleGlow: "0 0 28px rgb(var(--color-tertiary) / 0.16)"
      }
    }
  },
  plugins: []
};
