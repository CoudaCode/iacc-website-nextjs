"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/lib/constants/services";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Shield } from "lucide-react";
import { useRef } from "react";

const slides = services.map((service) => ({
  title: service.shortTitle,
  description: service.description,
  icon: service.icon,
  color: service.color,
  slug: service.slug,
}));

export function Hero() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00516f] via-[#006d94] to-[#00516f]">
      <div className="absolute inset-0 bg-[url('/images/hero/pattern.svg')] opacity-10" />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Shield className="h-4 w-4 text-[#e86924]" />
              <span>Courtier agréé depuis 2015</span>
            </div>
            <h1 className="mb-6 font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl">
              Votre partenaire
              <span className="text-[#e86924]"> assurance </span>
              de confiance
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-200 md:text-xl">
              IACC vous accompagne dans tous vos projets d'assurance. Conseil
              personnalisé, meilleures offres du marché, suivi complet de vos
              contrats.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#e86924]/50 text-lg cursor-not-allowed"
                disabled
              >
                Demander un devis
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">Bientôt</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-lg text-white hover:bg-white hover:text-[#00516f]"
                asChild
              >
                <a href="#contact">Nous contacter</a>
              </Button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative z-10">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{ loop: true }}
            >
              <CarouselContent>
                {slides.map((slide, index) => {
                  const Icon = slide.icon;
                  return (
                    <CarouselItem key={index}>
                      <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                        <div
                          className={`mb-4 inline-flex rounded-xl ${slide.color} p-4`}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="mb-3 font-bold text-2xl text-white">
                          {slide.title}
                        </h3>
                        <p className="mb-4 text-gray-200">{slide.description}</p>
                        <Button
                          variant="link"
                          className="p-0 text-[#e86924] hover:text-[#ff8a4c]"
                          asChild
                        >
                          <a href={`/services/${slide.slug}`}>
                            En savoir plus
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-4 flex justify-center gap-2">
                <CarouselPrevious className="static translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20" />
                <CarouselNext className="static translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
