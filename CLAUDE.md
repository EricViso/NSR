# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev`: Start dev server with Turbopack
- `npm run dev:clean`: Clean build cache and start dev server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Project Overview
This is a Next.js Web3 application featuring token-gated content using Unlock Protocol. The app uses Wagmi for Ethereum wallet connections and requires membership tokens on Optimism network to access protected content.

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
- **src/app/components/**: Reusable React components including TokenGate
- **src/app/providers.tsx**: Wagmi and QueryClient providers setup
- **src/config/**: Network and blockchain configuration
- **src/lib/**: Utility functions and constants (LOCK address, NETWORK)
- **src/types/**: TypeScript declarations for Unlock Protocol modules
- **src/pages-backup/**: Legacy pages router implementation (backup)

## Configuration Notes
- **Network**: Configured for Optimism mainnet
- **Build**: TypeScript and ESLint errors ignored during production builds (see next.config.ts)
- **Hydration**: Uses suppressHydrationWarning and client-side mounting patterns to prevent SSR mismatches
- **Constants**: Lock contract address and network ID defined in src/lib/constants.ts