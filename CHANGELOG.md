# Changelog

All notable changes to the SIMG Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-11-08

### 🎨 Major Redesign

This release represents a complete visual overhaul of the SIMG website, transitioning from a basic design to a modern, sophisticated aesthetic.

### ✨ Added

#### Design System

- **Comprehensive CSS Design Tokens** (600+ lines)
  - Color system with primary (orange) and secondary (blue) palettes
  - Spacing scale (1-32) using consistent increments
  - Typography with responsive clamp-based sizing
  - Shadow definitions for depth and elevation
  - Border radius utilities
  - Z-index hierarchy system
  - Glassmorphism utilities (background, border, blur)

#### Theme System

- **Dark/Light Mode Toggle**
  - Sun/moon icon button in header
  - Persistent theme storage using localStorage
  - FOUC (Flash of Unstyled Content) prevention via inline script
  - Comprehensive light mode overrides for all components
  - Both `html` and `body` element theming for complete coverage

#### Color Identity

- **Orange-Blue Color Palette**
  - Primary: Orange (#f97316, #ea580c) - 70-80% usage
  - Secondary: Blue (#0ea5e9, #8b5cf6) - 20-30% usage
  - Strategic gradient applications:
    - 50/50 orange-blue in title text
    - Orange-dominant in backgrounds
    - Blue accents for categories and highlights

#### Visual Effects

- **Glassmorphism** throughout the site
  - Backdrop filters with 12px blur
  - Semi-transparent backgrounds
  - Subtle borders with glass effect
- **Radial Gradients** for depth and visual interest
- **Full-width Background Gradients** using pseudo-elements
- **Smooth Animations** and hover effects
- **Glow Shadows** with orange accents

#### Navigation Enhancements

- **Modern Header Component**
  - Glassmorphism background
  - Theme toggle button with icons
  - Language selector with hover dropdown (300ms delay)
  - Fixed positioning with proper z-index
  - Light mode compatibility

### 🔄 Changed

#### Homepage (`/en/index.astro`, `/es/index.astro`)

- Complete redesign with modern layout
- **Hero Section**:
  - Full-width gradient background using ::before pseudo-element
  - Gradient badge with orange border
  - Large title with orange-blue gradient text
  - Floating badges with individual color treatments
  - Stats section with hover effects
- **Features Section**: Three glassmorphic cards with SVG icons
- **Research Preview**: Integration with Content Collections
- **CTA Section**: Clean glassmorphism card with solid orange title
- **Sponsor Section**: Modernized with transparent background

#### About Page (`/en/about.astro`, `/es/about.astro`)

- New hero section with gradient background
- Mission statement in two-column grid layout
- **Research Focus Areas**:
  - Interactive cards with glassmorphism
  - Emoji icons for each topic
  - Hover effects with orange border
  - Descriptive subtitles for each area
- **Sticky image card** on desktop
- Fully responsive design

#### Research Page (`/en/research.astro`, `/es/research.astro`)

- Modern hero section with gradient title
- **Improved Filters**:
  - Glassmorphic filter buttons
  - Orange active state
  - Hover effects
- **Enhanced Search Bar**:
  - Icon integration
  - Glassmorphic styling
  - Focus states with orange glow
- **Research Cards**:
  - Glassmorphism design
  - Blue category badges
  - Orange tag pills
  - Footer with date and "Read more" link
  - Hover elevation and border color change
  - Smooth animations

#### Components

- **SponsorCarousel.astro**:
  - Removed dark background
  - Logo-only display (removed text)
  - Glassmorphic card design
  - Light mode: black logo (filter: brightness(0))
  - Orange hover effects

- **Header.astro**:
  - Complete redesign with glassmorphism
  - Theme toggle integration
  - Language dropdown with timing improvements
  - Spanish home link fix (`/es/` vs `/en/`)
  - Light mode text color fixes

- **Layout.astro**:
  - FOUC prevention script in `<head>`
  - Theme class application before render
  - Meta tags optimization

### 🐛 Fixed

#### Build Errors

- TypeScript annotations removed from JSX
- SVG attributes converted to camelCase
- Optional chaining replaced with safe alternatives
- File corruption in `en/index.astro` resolved

#### UI/UX Issues

- Header text visibility in light mode
- Language selector click vs hover behavior
- Dropdown timing (300ms delay on mouse leave)
- Spanish "Inicio" link routing to correct page
- Floating badges clipping at page edges (overflow: visible)
- Background gradients extending full viewport width
- Theme persistence across page navigation
- FOUC on page load/navigation

#### Design Issues

- CTA section gradient background removed for cleaner look
- Sponsor section dark background removed
- Logo inversion corrected for light mode
- Full-width gradient implementation for hero sections

### 🗑️ Removed

- Old styling from initial design
- Tailwind CSS dependency
- Unnecessary background colors and borders
- Complex multi-layer gradients (simplified)
- Inline styles (moved to design tokens)

### 📝 Technical Details

#### Code Patterns Established

```css
/* Full-width gradients */
.section::before {
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(...);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Theme toggle */
document.documentElement.classList.toggle("light-mode");
localStorage.setItem("theme", "light/dark");

/* Glassmorphism */
background: var(--glass-bg);
border: 1px solid var(--glass-border);
backdrop-filter: var(--glass-blur);
```

#### File Structure

```
src/
├── styles/global.css       # 600+ lines of design system
├── components/
│   ├── Header.astro        # Theme toggle, language selector
│   └── SponsorCarousel.astro
├── layouts/Layout.astro    # FOUC prevention, theme setup
└── pages/
    ├── en/                 # English pages
    │   ├── index.astro     # Homepage redesign
    │   ├── about.astro     # About page redesign
    │   └── research.astro  # Research page redesign
    └── es/                 # Spanish pages (parallel structure)
```

### 🚀 Performance

- Optimized CSS with design tokens (reduced duplication)
- Efficient gradient rendering with GPU acceleration
- Minimal JavaScript (theme toggle only)
- Static site generation (Astro SSG)

### 🌍 Internationalization

- Maintained bilingual support (en/es)
- Parallel page structure
- Language-specific content in both redesigned pages

### 📦 Dependencies

- Node.js v24.11.0
- npm 11.6.1
- Astro 5.14.8
- 671 packages installed

---

## [1.0.0] - Initial Release

### Added

- Initial website structure
- Basic pages: Home, About, Research, Members, Contact
- Content Collections for research and members
- Basic styling
- Bilingual support (English/Spanish)

---

## Release Notes

### Migration from v1.0.0 to v2.0.0

**Breaking Changes:**

- Complete CSS rewrite - custom styles will need updating
- New design token system - use CSS variables instead of hard-coded colors
- Header structure changed - custom header modifications need review

**Upgrade Path:**

1. Pull latest changes from `dev` branch
2. Run `npm install` to ensure dependencies are up to date
3. Test theme toggle functionality
4. Verify all pages render correctly in both light and dark modes
5. Check language switching between en/es

**New Features to Explore:**

- Try the theme toggle button in the header (sun/moon icon)
- Test language switching with the hover dropdown
- Explore responsive design on mobile devices
- View research cards with filter and search functionality

---

## Contributors

- Design System: Complete overhaul by AI Assistant
- Theme Implementation: Light/dark mode with persistence
- Internationalization: Bilingual support maintained
- UI/UX: Mistral AI-inspired aesthetic

---

<div align="center">

**[⬆ Back to Top](#changelog)**

Made with ❤️ by the SIMG Team

</div>
