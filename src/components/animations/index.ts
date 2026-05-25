// Export all animation components
export { AnimatedCounter } from "./animated-counter";
export { BackgroundEffects } from "./background-effects";
export { ContactPage } from "./contact-page";
export { FloatingParticles } from "./floating-particles";
export { GlassButton } from "./glass-button";
export { HeroSection } from "./hero-section";
export { ScrollReveal } from "./scroll-reveal";
export { SectionTitle } from "./section-title";
export { ServiceCard } from "./service-card";
export { ServicePageTemplate } from "./service-page-template";

// Export hooks
export { useMousePosition } from "./use-mouse-position";

// Animation utilities and constants
export const colors = {
  primary: {
    blue: "#00516f",
    orange: "#e86924",
  },
  // Couleurs par service (sans dégradés)
  services: {
    automobile: "bg-[#00516f]",
    professionnel: "bg-[#e86924]",
    // habitation: "bg-[#00516f]",
    epargne: "bg-[#e86924]",
    sante: "bg-[#00516f]",
    rc: "bg-[#e86924]",
  },
  // Backgrounds
  glass: {
    light: "rgba(0, 81, 111, 0.03)",
    medium: "rgba(0, 81, 111, 0.05)",
    strong: "rgba(0, 81, 111, 0.1)",
  },
};

// Easing functions
export const easings = {
  apple: [0.16, 1, 0.3, 1] as const,
  smooth: "easeInOut" as const,
  bounce: { type: "spring", stiffness: 300, damping: 20 } as const,
  elastic: { type: "spring", stiffness: 100, damping: 10 } as const,
};
