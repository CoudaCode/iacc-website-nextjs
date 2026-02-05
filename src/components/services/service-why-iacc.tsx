import type { Service } from "@/lib/constants/services";
import { Award, CheckCircle } from "lucide-react";

interface ServiceWhyIACCProps {
  service: Service;
}

export function ServiceWhyIACC({ service }: ServiceWhyIACCProps) {
  return (
    <section className="bg-[#00516f] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              <Award className="h-4 w-4 text-[#e86924]" />
              <span>L'avantage IACC</span>
            </div>
            <h2 className="mb-6 font-extrabold text-2xl text-white md:text-3xl">
              Pourquoi passer par IACC ?
            </h2>
            <ul className="space-y-4">
              {service.whyIACC.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#e86924]" />
                  <span className="text-gray-200">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <p className="text-lg text-white">
                "Notre expertise et notre réseau de partenaires nous permettent
                de vous proposer les meilleures solutions du marché, adaptées à
                votre situation et à votre budget."
              </p>
              <p className="mt-4 font-medium text-[#e86924]">
                — L'équipe IACC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
