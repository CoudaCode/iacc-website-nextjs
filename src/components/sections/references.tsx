"use client";

import { FadeInUp } from "@/components/ui/motion-wrapper";
import { references } from "@/lib/constants/services";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
export function References() {
  return (
    <section
      id="references"
      className="bg-gray-50 py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <FadeInUp className="mb-12 text-center">
          <h2 className="mb-4 font-extrabold text-3xl text-[#00516f] md:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Des entreprises de renom nous ont choisis pour gérer leurs
            assurances.
          </p>
        </FadeInUp>

        {/* Marquee infini (sens inverse) avec react-fast-marquee */}

        <div className="mt-8 lg:mt-12">
          <Marquee
            gradient
            gradientWidth={130}
            autoFill
            pauseOnHover
            speed={60}
          >
            {references.map((reference, index) => (
              <div
                key={`${reference.logo}-${index}`}
                className="mx-10 flex h-28 w-56 items-center justify-center sm:w-72 lg:mx-12"
              >
                <img
                  src={reference.logo}
                  alt={reference.name}
                  className={cn("max-h-16 w-auto object-contain dark:invert")}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
