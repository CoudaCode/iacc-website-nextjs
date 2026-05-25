"use client";

import { FadeInUp } from "@/components/ui/motion-wrapper";
import { partners } from "@/lib/constants/services";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

export function Partners() {
  return (
    <section
      id="partenaires"
      className="bg-white py-16 md:py-24 overflow-hidden"
    >
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

        {/* Marquee infini avec react-fast-marquee */}
        <div className="mt-8 lg:mt-12">
          <Marquee
            gradient
            gradientWidth={120}
            autoFill
            pauseOnHover
            speed={60}
          >
            {partners.map((partner, index) => (
              <div
                key={`${partner.logo}-${index}`}
                className="mx-8 flex h-20 w-40 items-center justify-center sm:w-52 lg:mx-10"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={cn("max-h-12 w-auto object-contain dark:invert")}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
