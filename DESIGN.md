---
name: Professional HR & Payroll System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424754'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Kanit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Kanit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Kanit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Kanit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Kanit
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Kanit
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Kanit
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Kanit
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  table-cell-padding: 12px 16px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for the modern enterprise—balancing the high-stakes precision of payroll with the human-centric nature of HR. The aesthetic is rooted in **Corporate Minimalism**, drawing heavy inspiration from the clarity of Stripe and the functional density of Linear. 

The UI prioritizes "Information First" architecture. By utilizing expansive whitespace, a disciplined monochromatic foundation, and strategic hits of high-resonance blue, the system evokes a sense of calm authority and institutional trust. It is designed to feel invisible, allowing non-technical administrators to navigate complex regulatory data without cognitive fatigue.

## Colors

The palette is anchored by a "Clean Slate" philosophy. 

- **Primary Blue (#3B82F6):** Reserved exclusively for high-intent actions, primary buttons, and active states. It acts as a beacon in a sea of neutral tones.
- **Surface Neutrals (#F8FAFC):** The primary canvas color. It provides enough contrast against pure white (#FFFFFF) card elements to create subtle depth without relying on heavy shadows.
- **Text & Slate:** We use a deep Slate (#0F172A) for typography to maintain high legibility and a professional "ink" feel, avoiding the harshness of pure black.
- **Semantic Accents:** Standardized Emerald for "Paid/Active" status and Rose for "Overdue/Error" states, used sparingly to maintain the minimal aesthetic.

## Typography

The design system utilizes **Kanit** for its exceptional legibility in data-heavy environments. The typographic scale is optimized for high information density.

- **Headlines:** Use tight letter-spacing and semi-bold weights to create a strong visual anchor for page headers.
- **Data Display:** `body-sm` (13px) is the workhorse for table data and sidebar navigation, providing a compact footprint without sacrificing readability.
- **Labels:** Uppercase labels are used for table headers and section overviews to differentiate metadata from primary user data.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid** model. The sidebar remains fixed (240px) while the primary content area spans a fluid width with a maximum cap of 1440px to ensure line lengths remain readable.

- **The 4px Grid:** All spacing is a multiple of 4. High-density components (tables, inputs) use 8px or 12px padding, while structural layout elements use 24px or 32px.
- **Table Density:** To accommodate complex payroll spreadsheets, vertical cell padding is restricted to 12px. This allows more rows to be visible "above the fold" compared to traditional consumer apps.
- **Breakpoints:**
  - Desktop: 1280px+ (Full sidebar + Multi-column layouts)
  - Tablet: 768px - 1279px (Collapsed sidebar + Single-column cards)
  - Mobile: Under 767px (Bottom navigation + Full-width stack)

## Elevation & Depth

To maintain a "Professional Business" look, elevation is achieved through **Low-Contrast Outlines** and subtle tonal shifts rather than dramatic shadows.

- **Level 0 (Background):** #F8FAFC. The foundation of the application.
- **Level 1 (Cards/Surface):** Pure #FFFFFF with a 1px border (#E2E8F0). This is where most user interaction occurs.
- **Level 2 (Popovers/Modals):** Pure #FFFFFF with a soft ambient shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) and a slightly darker border (#D1D5DB).
- **Interactive States:** On hover, clickable cards should shift background to #F1F5F9 or subtly darken the border.

## Shapes

The shape language combines approachable soft edges with professional structure.

- **Buttons & Chips:** Use `ROUND_FULL` (Pill-shaped). This provides a distinct interactive affordance that separates "actions" from "containers."
- **Containers & Cards:** Use `ROUND_XL` (1.5rem). Large radii on containers soften the data-heavy nature of the app, making the platform feel modern and accessible.
- **Form Fields:** Use `rounded-md` (0.5rem). Inputs require a more structured, rectangular look to maximize horizontal typing space.

## Components

- **Buttons:** Primary buttons use a solid #3B82F6 background with white text. Secondary buttons use a white background with a #E2E8F0 border and #0F172A text. All buttons use the pill-shape.
- **Data Tables:** Headers must be `label-caps` in Slate-500. Rows should have a subtle hover state (#F8FAFC). Use "Dividers" (1px line) rather than alternating row colors.
- **Inputs:** Focused inputs should have a 1px #3B82F6 border and a soft 2px blue "halo" (shadow) with 10% opacity.
- **Cards:** Cards should always have a white background and the `ROUND_XL` radius. Padding within cards is standardized to 24px.
- **Status Chips:** Small, pill-shaped indicators using low-saturation backgrounds (e.g., soft green background with dark green text) to indicate payroll status without overwhelming the visual hierarchy.
- **Empty States:** Use monochromatic line art and centered `body-lg` text to guide users when data is not yet available.