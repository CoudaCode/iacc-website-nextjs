"use client";

import { FadeInUp } from "@/components/ui/motion-wrapper";
import Image from "next/image";

const partners = [
  { name: "Sanlam Allianz", logo: "/images/hero/sanlam-allianz.svg" },
  { name: "NSIA Assurances", logo: "/images/hero/NSIA-ASSURANCES-LOGO.png" },
  { name: "SUNU Assurances", logo: "/images/hero/sunu.webp" },
  { name: "Atlantique Assurance", logo: "/images/hero/atlantique-assurance.png" },
  { name: "Wafa Assurance", logo: "/images/hero/wafa.jpg" },
  { name: "AFG Assurance", logo: "/images/hero/afg-assurance.webp" },
  { name: "MCI", logo: "/images/hero/mci.png" },
];

export function Partners() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partenaires" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInUp className="mb-12 text-center">
          <h2 className="mb-4 font-extrabold text-3xl text-[#00516f] md:text-4xl">
            Nos Partenaires
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Nous travaillons avec les plus grandes compagnies d'assurance pour
            vous offrir les meilleures garanties.
          </p>
        </FadeInUp>

        {/* Marquee infini */}
        <div className="relative">
          <div className="flex animate-marquee gap-12">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center rounded-xl border border-gray-100 bg-white px-8 py-6 transition-all hover:border-[#00516f]/20 hover:shadow-lg min-w-[220px] h-32"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={80}
                  className="object-contain max-h-20 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
