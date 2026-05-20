---
name: Boghdaddy OS
colors:
  surface: '#0e150e'
  surface-dim: '#0e150e'
  surface-bright: '#333b33'
  surface-container-lowest: '#091009'
  surface-container-low: '#161d16'
  surface-container: '#1a221a'
  surface-container-high: '#242c24'
  surface-container-highest: '#2f372e'
  on-surface: '#dce5d9'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#dce5d9'
  inverse-on-surface: '#2a322a'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#4ae176'
  primary: '#4be277'
  on-primary: '#003915'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#006e2f'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#deb8ff'
  on-tertiary: '#490080'
  tertiary-container: '#cb94ff'
  on-tertiary-container: '#5f00a3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0e150e'
  on-background: '#dce5d9'
  surface-variant: '#2f372e'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin: 32px
---

## Brand & Style

The design system is anchored in a "Technical Premium" aesthetic, merging high-utility AI operations with a sophisticated, executive-grade dark mode. The personality is authoritative yet approachable, avoiding aggressive "gamer" aesthetics in favor of a refined, aerospace-inspired HUD (Heads-Up Display) interface. 

The visual language utilizes **Glassmorphism** and **Minimalism** to create a sense of depth and focus. Translucent layers and microscopic border details suggest a highly advanced, liquid software environment. The emotional response is one of calm control, precision, and intelligence, making it an ideal environment for technical recruiters and high-level data analysis.

## Colors

This design system uses a deeply recessed navy palette to maximize contrast for AI-driven insights. 

- **Primary Emerald Green:** Reserved for high-priority conversion points and "Success" states. To maintain legibility, text on Emerald backgrounds must use the deep navy (#020617).
- **Electric Cyan:** Used for secondary navigation, interactive HUD elements, and structural lines. It represents the "connective tissue" of the interface.
- **AI Purple:** Exclusively used for generative AI outputs, smart highlights, and "magic" features, separating automated insights from manual data.
- **Borders:** Subtle transparency is key. Borders should feel like etched glass rather than solid dividers.

## Typography

The typography system relies on a dual-font strategy. **Space Grotesk** provides a technical, geometric edge for headlines, labels, and data points, reinforcing the "OS" feel. **Inter** is used for all body copy and prose to ensure maximum readability and a professional, recruiter-friendly tone.

Large headlines should use slight negative letter-spacing to feel tighter and more premium. Metadata and HUD labels should always be in uppercase Space Grotesk with expanded tracking to evoke a localized terminal aesthetic.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** with a fixed maximum width for large displays. Content is organized within container-based modules that align to a strictly enforced 4px/8px rhythm.

Layouts should favor high-information density without feeling cluttered. This is achieved by using "Margin-Safe" areas within cards (24px internal padding) and generous vertical whitespace between major sections (64px) to allow the glassmorphic elements to breathe. Navigation is typically sidebar-oriented to maximize horizontal space for complex AI data tables and dashboards.

## Elevation & Depth

Depth in this design system is created through **Tonal Layering** and **Backdrop Blurs** rather than traditional heavy shadows.

- **Level 0 (Base):** The Main Background (#0B1120). Everything sits atop this.
- **Level 1 (Sections):** Slightly raised surfaces (#111827) used to group content areas.
- **Level 2 (Cards):** The primary interactive surface (#1E293B). These feature a `backdrop-filter: blur(12px)` and a subtle 1px border.
- **Level 3 (Popovers/Modals):** These use the Card background but add a Soft Glow (`box-shadow: 0 0 30px rgba(56, 189, 248, 0.1)`) to simulate light emission from the interface.

Glows are restricted to Cyan or Purple and must be extremely subtle (opacity < 15%) to maintain a professional, non-gaming appearance.

## Shapes

The shape language is "Soft-Technical." By choosing a **Soft (0.25rem)** base roundedness, the UI maintains a sense of precision and structural integrity. 

- **Standard Buttons & Inputs:** 4px (0.25rem) radius.
- **Dashboard Cards:** 8px (0.5rem) radius for a more modern, approachable feel.
- **Outer Containers:** 12px (0.75rem) radius.

Avoid pill-shaped buttons except for very specific tags or status chips, as the squared-off nature of "Soft" roundedness better aligns with the geometric Space Grotesk typeface.

## Components

### Buttons
- **Primary:** Solid Emerald Green with Navy text. No border. On hover, apply a subtle green outer glow.
- **Secondary:** Transparent background, 1px Electric Cyan border, Cyan text.
- **Ghost:** No background or border. Muted text becomes White on hover.

### Cards
Cards are the primary vessel for information. They must feature a subtle top-down linear gradient (Transparent to rgba(30, 41, 59, 0.5)) and a 1px border. Hovering on a card should transition the background to #263244 and increase the border opacity.

### HUD Elements
Use 1px Electric Cyan lines to separate data groups. Add "Corner Accents"—small 4px L-shaped vectors at the corners of high-priority modules—to reinforce the technical OS aesthetic.

### AI Highlights
Any content generated or assisted by AI should be wrapped in a subtle Purple border or have a 2px Purple vertical accent bar on its left edge.

### Inputs
Input fields use the Section Background (#111827) with a subtle border. On focus, the border transitions to Electric Cyan with a microscopic 2px outer glow of the same color.