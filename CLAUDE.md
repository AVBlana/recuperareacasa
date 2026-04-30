# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev           # Start development server at localhost:3000
npm run build         # Production build
npm run start         # Start production server
npm run lint:es       # ESLint (also runs on pre-commit)
npm run lint:typescript  # TypeScript type check (also runs on pre-commit)
```

Pre-commit hooks automatically run both lint commands — fix lint and type errors before committing.

## Architecture

**recuperareacasa.ro** — a single-page website for a physiotherapy home-visit service, built with Next.js 14.1.0 Pages Router and styled-components.

### Directory structure

- `src/pages/` — Next.js pages (`index.tsx` renders `HomeScreen`)
- `src/pages/api/` — API routes: `sendEmail.ts` (booking form submission via Resend), `sendReviewMail.ts`
- `src/screens/Home/` — The single page screen, composing all organisms in section order
- `src/theme/components/` — Atomic Design component library:
  - `atoms/` — primitives: `Box`, `Text`, `Button`, `Input`, `Flex`, `Image`, `Spacer`, etc.
  - `molecules/` — composed components: `ServiceCard`, `TeamCard`, `ReviewCard`, `StepForm1/2/3`, icons, etc.
  - `organisms/` — full page sections: `Header`, `Slider`, `Services`, `About`, `Team`, `Awards`, `CTA`, `Gallery`, `Review`, `FAQ`, `Footer`, `StepsForm`
- `src/context/` — Global `Store` wrapping `AppProvider` which provides theme + media breakpoints
- `src/theme/constants.tsx` — Design tokens: colors (primary `#2A5550`, secondary `#5BB286`), spacings, text sizes, font families (Inter, Philosopher)
- `src/theme/hooks/useMedia.ts` — Responsive breakpoints via `react-responsive`, SSR-safe (returns all `false` until mounted)

### Key patterns

**Styled-components transient props** — All styled-components use `$`-prefixed props (e.g., `$bold`, `$primary`, `$size`) to prevent prop forwarding to DOM elements. The `Text` component has a legacy wrapper that maps unprefixed props to `$`-prefixed ones for backward compatibility. New styled components should use `$`-prefixed props directly.

**Theme access** — Use `useTheme()` from `styled-components` inside components. The theme is extended at runtime with media breakpoints: `theme.media.isMobile`, `theme.media.isTablet`, etc.

**StepsProvider** — The multi-step booking form context (`StepsContext`) must be provided by wrapping with `<StepsProvider>`. It's used in `Header`, `About`, and `CTA`. The form collects service scope, symptoms, body localization, preferred day/time, and user address, then POSTs to `/api/sendEmail`.

**Path alias** — `@/*` resolves to `src/*` (configured in `tsconfig.json`).

### Environment variables

- `RESEND_API_KEY` — Required for email sending via the Resend API (`/api/sendEmail`, `/api/sendReviewMail`)
