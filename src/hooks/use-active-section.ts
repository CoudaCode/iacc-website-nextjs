"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = [
      { id: "hero", element: null as HTMLElement | null },
      { id: "stats", element: null as HTMLElement | null },
      { id: "why-broker", element: null as HTMLElement | null },
      { id: "services", element: null as HTMLElement | null },
      { id: "mission", element: null as HTMLElement | null },
      { id: "partenaires", element: null as HTMLElement | null },
      { id: "references", element: null as HTMLElement | null },
      { id: "testimonials", element: null as HTMLElement | null },
      { id: "faq", element: null as HTMLElement | null },
      { id: "contact", element: null as HTMLElement | null },
    ];

    // Trouver les éléments des sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        section.element = element;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            // Mapper les IDs des sections aux liens de navigation
            switch (sectionId) {
              case "hero":
                setActiveSection("/");
                break;
              case "partenaires":
                setActiveSection("/#partenaires");
                break;
              case "faq":
                setActiveSection("/#faq");
                break;
              case "contact":
                setActiveSection("/#contact");
                break;
              default:
                // Pour les autres sections, on reste sur "/"
                setActiveSection("/");
                break;
            }
          }
        });
      },
      {
        threshold: 0.3, // La section doit être visible à 30% pour être considérée comme active
        rootMargin: "-20% 0px -20% 0px", // Zone de détection plus précise
      },
    );

    // Observer toutes les sections trouvées
    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
    };
  }, []);

  return activeSection;
}
