"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { Clock, Handshake, Search } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Vision globale des risques",
    description:
      "Nous identifions tous vos besoins en assurance et analysons l'ensemble de vos risques pour une protection optimale.",
  },
  {
    icon: Handshake,
    title: "Mandataire de l'assuré",
    description:
      "Nous travaillons pour vous, pas pour les assureurs. Notre mission : vous trouver le meilleur produit au meilleur prix.",
  },
  {
    icon: Clock,
    title: "Gain de temps & économies",
    description:
      "Plus besoin de comparer vous-même. Nous négocions avec nos 7+ partenaires pour vous obtenir les meilleures conditions.",
  },
];

export function WhyBroker() {
  return (
    <section id="why-broker" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInUp className="mb-12 text-center">
          <h2 className="mb-4 font-extrabold text-3xl text-[#00516f] md:text-4xl">
            Pourquoi passer par un courtier ?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Un courtier en assurance est votre allié. Il défend vos intérêts et
            vous accompagne à chaque étape.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={index}>
                <Card className="h-full border-0 bg-white shadow-lg transition-transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-xl bg-[#00516f]/10 p-3">
                      <Icon className="h-8 w-8 text-[#00516f]" />
                    </div>
                    <CardTitle className="text-xl text-[#00516f]">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
