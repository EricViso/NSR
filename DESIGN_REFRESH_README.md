# Design Refresh - Implementation Notes

## Overview
This document summarizes the design refresh implementation for the Network Societies Playbook landing page and reader interface.

## Brand Colors (globals.css)

Update these CSS variables in `src/app/globals.css` to match ericmiki.com:

```css
:root {
  --brand-bg: #FEFEFE; /* Main background - UPDATE THIS */
  --brand-cream: #F9F7F4; /* Soft background - UPDATE THIS */
  --brand-navy: #1A2332; /* Dark text/backgrounds - UPDATE THIS */
  --brand-accent: #4A90E2; /* Accent color - UPDATE THIS */
  --brand-muted: #8A9BAE; /* Muted text - UPDATE THIS */
}
```

## New Components

### Landing Page Components
- **Hero** (`src/app/components/Hero.tsx`) - Split layout with book image and blur effect
- **SectionCard** (`src/app/components/SectionCard.tsx`) - Reusable section wrapper
- **BulletedList** (`src/app/components/BulletedList.tsx`) - Styled bullet points with check icons
- **Steps** (`src/app/components/Steps.tsx`) - How it works process steps
- **FAQAccordion** (`src/app/components/FAQAccordion.tsx`) - Expandable FAQ section

### Reader Page Components
- **TopBar** (`src/app/components/TopBar.tsx`) - Clean navigation and zoom controls
- **PDFChrome** (`src/app/components/PDFChrome.tsx`) - PDF viewer wrapper with subtle styling
- **WatermarkOverlay** (`src/app/components/WatermarkOverlay.tsx`) - Dynamic watermark with wallet + timestamp

## New CSS Classes

### Button Styles
- `.btn-primary` - Primary CTA button (navy background)
- `.btn-secondary` - Secondary button (accent color)
- `.btn-outline` - Outline button style

### Utility Classes
- `.text-muted` - Muted text color
- `.text-accent` - Accent color text
- `.bg-brand` - Brand background
- `.bg-cream` - Cream background
- `.section-title` - Section heading style
- `.section-subtitle` - Section subtitle style

### Special Features
- `.pdf-viewer` - Disables text selection for PDF content
- `.watermark-overlay` - Subtle repeating watermark pattern
- Accessibility: Focus states, reduced motion support, keyboard navigation

## Pages Modified

1. **Landing Page** (`src/app/page.tsx`)
   - Complete redesign with hero, sections, and CTAs
   - Keeps existing TokenGate logic intact
   - Responsive design with mobile-first approach

2. **Reader Page** (`src/app/reader/page.tsx`)
   - New clean interface for PDF viewing
   - Watermark overlay and access protection
   - Right-click disabled as deterrent

## Key Features

### Hero Section
- Split layout: book image left, content right
- Blurred background effect on right side
- Primary/secondary CTAs
- Session badge and benefit messaging

### Accessibility
- Focus-visible outlines
- Keyboard navigation support
- Reduced motion preferences respected
- High contrast colors
- Semantic HTML structure

### Mobile Optimization
- Responsive grid layouts
- Touch-friendly button sizes
- Optimized typography scaling
- Mobile-first CSS approach

## Dependencies Added
- `lucide-react` - Icon library for modern, clean icons

## Notes
- All existing Unlock Protocol functionality preserved
- No changes to authentication or routing logic
- Ready for book image replacement in Hero component
- PDF viewer component is placeholder - integrate actual PDF viewer
- Color variables ready for ericmiki.com brand colors