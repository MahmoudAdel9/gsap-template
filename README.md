# Next.js + GSAP Starter (App Router)

Reusable starter template for motion-heavy interfaces built with:

- Next.js App Router
- TypeScript (strict mode)
- GSAP + ScrollTrigger
- Typed animation hooks and reusable components

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  animations/
    FadeIn.tsx
    StaggerText.tsx
hooks/
  useFadeIn.ts
  useStaggerText.ts
lib/
  gsap/
    index.ts
types/
  animation.ts
```

## GSAP Architecture

- `lib/gsap/index.ts` centralizes plugin registration and shared GSAP config.
- Hooks (`useFadeIn`, `useStaggerText`) consume the centralized setup.
- Components (`FadeIn`, `StaggerText`) provide reusable animation primitives.

This keeps animation behavior consistent and easy to scale as the codebase grows.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the template.
