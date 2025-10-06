# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for "GarantíaYa", a service that helps people rent properties in Argentina without requiring a property owner as guarantor. The application uses React 19, TypeScript, and Tailwind CSS with shadcn/ui components.

## Development Commands

- **Development server**: `npm run dev` (runs on http://localhost:3000)
- **Production build**: `npm run build`
- **Start production server**: `npm start`
- **Lint**: `npm run lint`

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **React**: Version 19
- **Styling**: Tailwind CSS v4 with shadcn/ui components (New York style)
- **Font**: Geist Sans and Geist Mono (via `geist/font`)
- **UI Components**: Radix UI primitives via shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

### Project Structure

- **`app/`**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with Geist fonts and Vercel Analytics
  - `page.tsx`: Homepage composed of section components
  - `globals.css`: Global Tailwind CSS styles

- **`components/`**: React components
  - `ui/`: shadcn/ui components (button, card, etc.)
  - Landing page sections: `header.tsx`, `hero-section.tsx`, `why-choose-us.tsx`, `how-it-works.tsx`, `testimonials.tsx`, `footer.tsx`

- **`lib/`**: Utility functions
  - `utils.ts`: Contains `cn()` utility for merging Tailwind classes

### Path Aliases

Configured in `tsconfig.json` and `components.json`:
- `@/`: Root directory
- `@/components`: Components directory
- `@/lib`: Library utilities
- `@/ui`: UI components (`components/ui`)
- `@/hooks`: Hooks directory

### shadcn/ui Configuration

This project uses shadcn/ui with the following settings (in `components.json`):
- **Style**: New York
- **Base color**: Neutral
- **RSC**: Enabled (React Server Components)
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React

To add new shadcn/ui components, use: `npx shadcn@latest add [component-name]`

### Component Patterns

The application follows a section-based landing page architecture where `app/page.tsx` imports and renders major sections as separate components. Each section is self-contained and can be edited independently.
