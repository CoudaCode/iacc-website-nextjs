"use client";

import { colors } from "@/components/animations";
import { ServicePageTemplate } from "@/components/animations/service-page-template";
import { services } from "@/lib/constants/services";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Données d'exemple pour les animations
const getServiceData = (slug: string) => {
  const serviceColors: Record<string, string> = {
    automobile: colors.services.automobile,
    // habitation: colors.services.habitation,
    sante: colors.services.sante,
    vie: colors.services.epargne,
    professionnel: colors.services.professionnel,
    rc: colors.services.rc,
  };

  const serviceIcons: Record<string, string> = {
    automobile: "🚗",
    // habitation: "🏠",
    sante: "🏥",
    vie: "💰",
    professionnel: "💼",
    rc: "⚖️",
  };

  const baseService = services.find((s) => s.slug === slug);
  if (!baseService) return null;

  return {
    service: {
      title: baseService.title,
      subtitle: baseService.description,
      icon: serviceIcons[slug] || "🛡️",
      color: serviceColors[slug] || colors.services.automobile,
    },
    formules: [
      {
        nom: "Formule Essentielle",
        prix: "À partir de 50 000 FCFA",
        avantages: [
          "Couverture de base",
          "Assistance 24h/24",
          "Devis gratuit",
          "Service client dédié",
        ],
      },
      {
        nom: "Formule Confort",
        prix: "À partir de 80 000 FCFA",
        avantages: [
          "Couverture étendue",
          "Assistance premium",
          "Garanties supplémentaires",
          "Franchise réduite",
        ],
      },
      {
        nom: "Formule Premium",
        prix: "À partir de 150 000 FCFA",
        avantages: [
          "Couverture maximale",
          "Tous risques",
          "Service VIP",
          "Franchise minimale",
        ],
      },
    ],
    garanties: [
      {
        titre: "Protection Complète",
        description: "Couverture étendue pour tous vos besoins",
        icon: "🛡️",
      },
      {
        titre: "Assistance 24h/24",
        description: "Support disponible à tout moment",
        icon: "📞",
      },
      {
        titre: "Indemnisation Rapide",
        description: "Traitement accéléré de vos sinistres",
        icon: "⚡",
      },
    ],
    audience: {
      titre: "À qui s'adresse cette assurance ?",
      description:
        "Notre assurance est conçue pour répondre aux besoins de tous",
      cibles: [
        "Particuliers et familles",
        "Professionnels et entreprises",
        "Jeunes conducteurs",
        "Conducteurs expérimentés",
      ],
    },
  };
};

export default function ServicePageAnimated({ params }: ServicePageProps) {
  const serviceData = getServiceData(params.slug);

  if (!serviceData) {
    notFound();
  }

  return <ServicePageTemplate {...serviceData} />;
}
