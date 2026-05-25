"use client";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants/services";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

// Images locales pour chaque service
const serviceImages: Record<string, string> = {
  auto: "/images/banner/auto.jpg",
  "multirisque-professionnelle": "/images/banner/auto.jpg", // À remplacer par banner-pro.jpg
  // "multirisque-habitation": "/images/banner/habitation.jpg",
  "epargne-assurance-vie": "/images/banner/vie.jpg",
  sante: "/images/banner/sante.jpg",
  "responsabilite-civile": "/images/banner/habitation.jpg", // À remplacer par banner-rc.jpg
  voyage: "/images/banner/voyage.jpg",
};

const slides = services.map((service) => ({
  title: service.shortTitle,
  fullTitle: service.title,
  description: service.description,
  icon: service.icon,
  color: service.color,
  slug: service.slug,
  image: serviceImages[service.slug],
}));

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentSlide = slides[currentIndex];
  const Icon = currentSlide.icon;

  const slideVariants = {
    enter: () => ({
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: () => ({
      opacity: 0,
      scale: 0.95,
      filter: "blur(5px)",
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      className="relative h-[100dvh] min-h-[600px] max-h-[900px] -mt-16 pt-16 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Particules flottantes avec vos couleurs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-[#00516f]/30" : "bg-[#e86924]/30"}`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#00516f]/95 via-[#00516f]/80 to-[#00516f]/40" />

          {/* Effet de vague animé avec couleur pure */}
          <motion.div
            className="absolute inset-0 bg-[#00516f]/10"
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-white">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md border border-white/20"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Shield className="h-4 w-4 text-[#e86924]" />
                </motion.div>
                <span>Courtier agréé depuis 2015</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} className="space-y-6">
                  <motion.div
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                      "inline-flex items-center gap-3 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/20",
                      currentSlide.color,
                    )}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <span className="font-semibold text-white">
                      {currentSlide.title}
                    </span>
                  </motion.div>

                  <motion.h1
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-white"
                  >
                    {currentSlide.fullTitle}
                  </motion.h1>

                  <motion.p
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-lg text-lg text-gray-200 md:text-xl"
                  >
                    {currentSlide.description}
                  </motion.p>

                  <motion.div
                    custom={3}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-4 pt-4 sm:flex-row"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-[#e86924] text-lg hover:bg-[#d55a1a] shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <a href={`/services/${currentSlide.slug}`}>
                          Découvrir
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ArrowRight className="h-5 w-5" />
                          </motion.div>
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white bg-transparent text-lg text-white hover:bg-white hover:text-[#00516f] backdrop-blur-sm transition-all duration-300"
                        asChild
                      >
                        <a href="#contact">Demander un devis</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right - Service Card Preview */}
            <div className="hidden items-center justify-center lg:flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: -15,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: 15,
                    filter: "blur(5px)",
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur-md border border-white/20 shadow-2xl"
                >
                  {/* Effet de glow avec couleur pure */}
                  <motion.div
                    className="absolute -inset-1 bg-[#00516f]/30 rounded-3xl blur-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative">
                    <motion.div
                      className={cn(
                        "mb-6 inline-flex rounded-2xl p-4",
                        currentSlide.color,
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="mb-4 font-bold text-2xl text-white">
                      {currentSlide.fullTitle}
                    </h3>
                    <p className="mb-6 text-gray-200">
                      {currentSlide.description}
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-[#e86924]"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="font-medium">En savoir plus</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-all hover:bg-white/20 md:left-8 border border-white/20"
        aria-label="Slide précédent"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-all hover:bg-white/20 md:right-8 border border-white/20"
        aria-label="Slide suivant"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 px-4 max-w-full overflow-x-auto">
        {slides.map((slide, index) => {
          const SlideIcon = slide.icon;
          return (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "group flex shrink-0 items-center gap-2 rounded-full px-3 py-2 transition-all backdrop-blur-sm border",
                index === currentIndex
                  ? "bg-white text-[#00516f] border-white/30"
                  : "bg-white/20 text-white hover:bg-white/30 border-white/20",
              )}
              aria-label={`Aller au slide ${slide.title}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={index === currentIndex ? { rotate: [0, 360] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <SlideIcon className="h-4 w-4" />
              </motion.div>
              <span
                className={cn(
                  "overflow-hidden font-medium text-sm transition-all whitespace-nowrap hidden sm:block",
                  index === currentIndex
                    ? "w-auto max-w-[100px]"
                    : "w-0 max-w-0",
                )}
              >
                {slide.title}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <motion.svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </motion.svg>
      </div>
    </section>
  );
}
