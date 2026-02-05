"use client";

import { FadeInLeft, FadeInRight, FadeInUp } from "@/components/ui/motion-wrapper";
import { CheckCircle, FileText, HeartHandshake, Shield } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Conseil personnalisé",
    description:
      "Analyse de vos besoins et recommandations adaptées à votre situation.",
  },
  {
    icon: Shield,
    title: "Conception des contrats",
    description:
      "Suivi des garanties et élaboration de contrats sur-mesure avec nos partenaires.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement complet",
    description:
      "De la signature du contrat jusqu'au versement des indemnités en cas de sinistre.",
  },
  {
    icon: CheckCircle,
    title: "Suivi continu",
    description:
      "Révision régulière de vos contrats pour garantir une protection optimale.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInUp className="mb-12 text-center">
          <h2 className="mb-4 font-extrabold text-3xl text-[#00516f] md:text-4xl">
            Notre Mission
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Vous accompagner à chaque étape de votre parcours d'assurance, avec
            expertise et bienveillance.
          </p>
        </FadeInUp>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-[#00516f]/20 md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const Wrapper = isEven ? FadeInLeft : FadeInRight;
              return (
                <Wrapper key={index} delay={index * 0.15}>
                  <div
                    className={`relative flex flex-col items-center md:flex-row ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                      }`}
                    >
                      <div
                        className={`rounded-xl bg-white p-6 shadow-lg ${
                          isEven ? "md:ml-auto" : "md:mr-auto"
                        } max-w-md`}
                      >
                        <div
                          className={`mb-4 inline-flex rounded-xl bg-[#00516f]/10 p-3 ${
                            isEven ? "md:float-right md:ml-4" : "md:float-left md:mr-4"
                          }`}
                        >
                          <Icon className="h-6 w-6 text-[#00516f]" />
                        </div>
                        <h3 className="mb-2 font-bold text-lg text-[#00516f]">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#00516f] bg-white md:block" />

                    {/* Spacer for other side */}
                    <div className="hidden w-1/2 md:block" />
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
