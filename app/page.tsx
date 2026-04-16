
import { FadeIn, StaggerText } from "@/components/animations";

const featureItems = [
  "App Router + TypeScript structure ready for scale",
  "Centralized GSAP setup with ScrollTrigger",
  "Reusable hooks and composable animation components",
];

export default function Home() {
  return (
    <main className="container">
      <section className="hero-section">
        <FadeIn as="span" className="eyebrow">
          GSAP Starter Template
        </FadeIn>
        <StaggerText
          text="Build polished motion systems with confidence."
          className="hero-title"
          splitBy="word"
        />
        <FadeIn as="p" className="hero-subtitle" options={{ delay: 0.15 }}>
          Typed hooks and reusable UI primitives keep your animations consistent,
          maintainable, and easy to evolve as your app grows.
        </FadeIn>
      </section>

      <section className="features-grid">
        {featureItems.map((feature, index) => (
          <FadeIn
            key={feature}
            className="feature-card"
            options={{ delay: index * 0.08, y: 16 }}
          >
            {feature}
          </FadeIn>
        ))}
      </section>
    </main>
  );
}
