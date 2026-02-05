# Guide d'Utilisation des Animations IACC

Ce dossier contient tous les composants d'animation premium pour le projet IACC, basés sur la librairie `motion` (successeur de framer-motion).

## 🚀 Installation

La librairie `motion` est déjà installée dans le projet. Si vous devez l'installer manuellement :

```bash
yarn add motion
```

## 📦 Composants Disponibles

### 1. BackgroundEffects
Effets de fond avec particules animées et grille.

```tsx
import { BackgroundEffects } from "@/components/animations";

<BackgroundEffects />
```

### 2. HeroSection
Section hero complète avec parallax et animations.

```tsx
import { HeroSection } from "@/components/animations";

<HeroSection
  title="Votre Titre"
  subtitle="Votre sous-titre"
  icon="🛡️"
  buttonText="Call to Action"
  mousePosition={mousePosition}
/>
```

### 3. ServiceCard
Card de service avec effet glassmorphism et animations hover.

```tsx
import { ServiceCard } from "@/components/animations";

<ServiceCard
  title="Assurance Auto"
  description="Description du service"
  icon="🚗"
  color="from-blue-500 to-cyan-500"
  index={0}
/>
```

### 4. GlassButton
Bouton avec effet de verre et animations.

```tsx
import { GlassButton } from "@/components/animations";

<GlassButton 
  text="Cliquez ici" 
  primary={true}
  onClick={() => console.log('clicked')}
/>
```

### 5. SectionTitle
Titre de section avec animation d'apparition.

```tsx
import { SectionTitle } from "@/components/animations";

<SectionTitle>Mon Titre</SectionTitle>
```

### 6. ScrollReveal
Composant utilitaire pour animer l'apparition au scroll.

```tsx
import { ScrollReveal } from "@/components/animations";

<ScrollReveal direction="up" delay={0.2}>
  <div>Contenu à animer</div>
</ScrollReveal>
```

### 7. AnimatedCounter
Compteur animé pour les statistiques.

```tsx
import { AnimatedCounter } from "@/components/animations";

<AnimatedCounter 
  value={2015} 
  suffix="+"
  className="text-4xl font-bold"
/>
```

### 8. FloatingParticles
Particules flottantes pour l'ambiance.

```tsx
import { FloatingParticles } from "@/components/animations";

<FloatingParticles count={5} color="bg-blue-400" />
```

## 🎨 Templates Complets

### ServicePageTemplate
Template complet pour les pages de service.

```tsx
import { ServicePageTemplate } from "@/components/animations";

const serviceData = {
  service: {
    title: "Assurance Auto",
    subtitle: "Protection complète",
    icon: "🚗",
    color: "from-blue-500 to-cyan-500"
  },
  formules: [...],
  garanties: [...],
  audience: {...}
};

<ServicePageTemplate {...serviceData} />
```

### ContactPage
Page de contact complète avec formulaire animé.

```tsx
import { ContactPage } from "@/components/animations";

<ContactPage />
```

## 🎯 Hooks Utilitaires

### useMousePosition
Hook pour suivre la position de la souris.

```tsx
import { useMousePosition } from "@/components/animations";

const mousePosition = useMousePosition();
```

## 🎨 Constantes de Style

### Couleurs
```tsx
import { colors } from "@/components/animations";

// Utilisation
<div className={`bg-gradient-to-r ${colors.services.automobile}`}>
```

### Easings
```tsx
import { easings } from "@/components/animations";

// Utilisation dans motion
<motion.div
  transition={{ ease: easings.apple }}
>
```

## 📱 Exemple d'Utilisation Complète

```tsx
"use client";

import { 
  BackgroundEffects, 
  HeroSection, 
  ServiceCard, 
  SectionTitle,
  useMousePosition,
  colors 
} from "@/components/animations";

export default function MaPage() {
  const mousePosition = useMousePosition();

  return (
    <div className="relative bg-black text-white min-h-screen">
      <BackgroundEffects />
      
      <HeroSection
        title="IACC"
        subtitle="Votre partenaire assurance"
        icon="🛡️"
        mousePosition={mousePosition}
      />

      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Nos Services</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <ServiceCard
              title="Assurance Auto"
              description="Protection complète"
              icon="🚗"
              color={colors.services.automobile}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
```

## 🔧 Personnalisation

### Couleurs par Service
```tsx
const colors = {
  services: {
    automobile: "from-blue-500 to-cyan-500",
    habitation: "from-orange-500 to-red-500",
    sante: "from-teal-500 to-cyan-500",
    // ...
  }
};
```

### Glassmorphism
```tsx
const glassStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};
```

## 🚀 Performance

- Utilisez `viewport={{ once: true }}` pour les animations qui ne doivent se jouer qu'une fois
- Ajoutez `willChange: "transform"` pour les animations complexes
- Utilisez `useSpring` pour des animations fluides sans re-render

## 📖 Documentation Complète

Pour plus de détails sur l'API Motion, consultez : https://motion.dev/

## 🎬 Démo

Visitez `/demo-animations` pour voir tous les composants en action.