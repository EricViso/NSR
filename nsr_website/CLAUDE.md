# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev`: Start dev server with Turbopack
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Code Style
- **TypeScript**: Use strict typing with React.ReactNode for children props
- **Imports**: Group imports (Next.js, React, local) with Next.js imports first
- **Components**: Use functional components with explicit return types
- **Naming**: PascalCase for components, camelCase for variables/functions
- **CSS**: Use Tailwind with composition pattern for complex styles
- **Paths**: Use `@/*` alias for imports from src directory
- **Error Handling**: Use try/catch with typed errors
- **Formatting**: Follow ESLint config-next/core-web-vitals rules

## Project Structure
- App router architecture with src/app for pages
- Public directory for static assets
- Components should be modular and reusable