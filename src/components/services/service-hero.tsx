import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/constants/services";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="bg-gradient-to-br from-[#00516f] to-[#006d94] py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{service.shortTitle}</span>
        </nav>

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className={`rounded-xl ${service.color} p-4`}>
              <Icon className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="font-extrabold text-3xl text-white md:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-2 max-w-xl text-gray-200">{service.description}</p>
            </div>
          </div>
          <Button
            className="w-full bg-[#00516f]/50 cursor-not-allowed"
            disabled
          >
            Demander un devis
            <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">Bientôt</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
