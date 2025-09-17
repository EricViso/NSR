# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev`: Start dev server with Turbopack
- `npm run dev:clean`: Clean build cache and start dev server
- `npm run build`: Build for production (includes special prebuild/postbuild scripts that move pages-backup)
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Project Overview
This is the "Network Societies Playbook" (nsr_website) - a Next.js Web3 application featuring token-gated content using Unlock Protocol. The app uses Wagmi for Ethereum wallet connections and requires membership tokens on Optimism network to access protected content. Recently received a design refresh with new landing page components and improved reader interface.

## Architecture
- **Frontend**: Next.js 15 with App Router and TypeScript
- **Blockchain**: Optimism network integration via Wagmi
- **Token Gating**: Unlock Protocol for membership verification
- **State Management**: TanStack Query (React Query) for async state
- **Styling**: Tailwind CSS with custom CSS variables for theming

## Key Dependencies
- **Wagmi**: Ethereum wallet connections and contract interactions
- **Unlock Protocol**: Token gating and membership checkout
- **TanStack Query**: Server state management and caching
- **Viem/Ethers**: Ethereum client libraries
- **Lucide React**: Icon library for modern, clean icons

## Code Style
- **TypeScript**: Use strict typing with React.ReactNode for children props
- **Imports**: Group imports (Next.js, React, Wagmi, local) with Next.js imports first
- **Components**: Use functional components with explicit return types
- **Naming**: PascalCase for components, camelCase for variables/functions
- **CSS**: Use Tailwind with CSS variables (var(--color-name)) for theming
- **Paths**: Use `@/*` alias for imports from src directory
- **Error Handling**: Use try/catch with typed errors for async operations
- **Formatting**: Follow ESLint config-next/core-web-vitals rules

## Project Structure
- **src/app/**: Next.js App Router pages and layouts
  - **src/app/page.tsx**: Landing page with Hero section and design refresh
  - **src/app/book/**: Book preview page
  - **src/app/reader/**: Protected reader interface with PDF viewer
- **src/app/components/**: Reusable React components
  - **TokenGate.tsx**: Core authentication component
  - **Hero.tsx**: Landing page hero with book image and blur effect
  - **SectionCard.tsx**: Reusable section wrapper component
  - **BulletedList.tsx**: Styled bullet points with check icons
  - **Steps.tsx**: Process steps component
  - **FAQAccordion.tsx**: Expandable FAQ section
  - **TopBar.tsx**: Reader navigation and zoom controls
  - **PDFChrome.tsx**: PDF viewer wrapper with styling
  - **WatermarkOverlay.tsx**: Dynamic watermark with wallet + timestamp
- **src/app/providers.tsx**: Wagmi and QueryClient providers setup
- **src/config/**: Network and blockchain configuration
- **src/lib/**: Utility functions and constants (LOCK address, NETWORK)
- **src/types/**: TypeScript declarations for Unlock Protocol modules
- **src/pages-backup/**: Legacy pages router implementation (moved during build)

## Configuration Notes
- **Network**: Configured for Optimism mainnet
- **Build**: TypeScript and ESLint errors ignored during production builds (see next.config.ts)
- **Build Process**: Special prebuild/postbuild scripts move pages-backup directory during builds
- **Hydration**: Uses suppressHydrationWarning and client-side mounting patterns to prevent SSR mismatches
- **Constants**: Lock contract address and network ID defined in src/lib/constants.ts
- **Theming**: CSS variables for brand colors defined in globals.css (--brand-bg, --brand-cream, --brand-navy, --brand-accent, --brand-muted)

## Design System
- **Button Styles**: .btn-primary, .btn-secondary, .btn-outline classes
- **Utility Classes**: .text-muted, .text-accent, .bg-brand, .bg-cream, .section-title, .section-subtitle
- **Special Features**: .pdf-viewer (disables text selection), .watermark-overlay (repeating watermark pattern)
- **Accessibility**: Focus states, reduced motion support, keyboard navigation