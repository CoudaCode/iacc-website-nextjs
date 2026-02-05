import type { Service } from "@/lib/constants/services";
import { CheckCircle } from "lucide-react";

interface ServiceCoverageProps {
  service: Service;
}

export function ServiceCoverage({ service }: ServiceCoverageProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 font-extrabold text-2xl text-[#00516f] md:text-3xl">
          Ce que ça couvre
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.coverages.map((coverage, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4 transition-all hover:border-[#00516f]/20 hover:shadow-md"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#e86924]" />
              <span className="text-gray-700">{coverage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
