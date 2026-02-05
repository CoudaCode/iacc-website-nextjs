"use client";

import { FadeInUp } from "@/components/ui/motion-wrapper";
import Image from "next/image";

const references = [
  { name: "AFRIQOIL", logo: "/images/partner/afriqoil.png" },
  { name: "S.A.R.C.I", logo: "/images/partner/logo-sarci.png" },
  { name: "CI Câbles", logo: "/images/partner/ci-cables.png" },
  { name: "QTI", logo: "/images/partner/QTI.jpg" },
  { name: "S3C", logo: "/images/partner/s3c.png" },
  { name: "SIVOIRCO", logo: "/images/partner/sivoirco.png" },
];

export function References() {
  const duplicatedReferences = [...references, ...references];

  return (
    <section id="references" className="bg-gray-50 py-16 md:py-24 overflow-hidden">
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

        {/* Marquee infini (sens inverse) */}
        <div className="relative">
          <div className="flex animate-marquee-reverse gap-12">
            {duplicatedReferences.map((reference, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center rounded-xl border border-gray-100 bg-white px-8 py-6 transition-all hover:border-[#00516f]/20 hover:shadow-lg min-w-[220px] h-32"
              >
                <Image
                  src={reference.logo}
                  alt={reference.name}
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
