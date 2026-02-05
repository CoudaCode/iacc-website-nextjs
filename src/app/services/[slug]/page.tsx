"use client";

import { ServiceAudience } from "@/components/services/service-audience";
import { ServiceCoverage } from "@/components/services/service-coverage";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceFormulas } from "@/components/services/service-formulas";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceWhyIACC } from "@/components/services/service-why-iacc";
import { services } from "@/lib/constants/services";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import { FloatingParticles } from "@/components/animations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageWithAnimations service={service} />
  );
}

function ServicePageWithAnimations({ service }: { service: any }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x: x * 3, y: y * 3 }); // Parallax subtil
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      {/* Effets de fond subtils */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Particules flottantes avec vos couleurs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#00516f]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#e86924]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <FloatingParticles count={5} color="bg-[#00516f]" size={2} />
        <FloatingParticles count={3} color="bg-[#e86924]" size={3} className="opacity-60" />
      </div>

      {/* Contenu avec parallax subtil */}
      <motion.div
        style={{ 
          x: mousePosition.x, 
          y: mousePosition.y 
        }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ServiceHero service={service} />
        </motion.div>
      </motion.div>

      {/* Sections avec animations d'apparition */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ServiceCoverage service={service} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ServiceAudience service={service} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ServiceFormulas service={service} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ServiceWhyIACC service={service} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ServiceFAQ service={service} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ServiceCTA service={service} />
      </motion.div>
    </div>
  );
}
