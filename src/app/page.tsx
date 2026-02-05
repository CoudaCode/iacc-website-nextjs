"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { HeroSlider } from "@/components/sections/hero-slider";
import { Mission } from "@/components/sections/mission";
import { Partners } from "@/components/sections/partners";
import { References } from "@/components/sections/references";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Stats } from "@/components/sections/stats";
import { WhyBroker } from "@/components/sections/why-broker";
import { BackgroundEffects, FloatingParticles } from "@/components/animations";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x: x * 5, y: y * 5 }); // Réduction de l'intensité pour subtilité
  };

  return (
    <div 
      className="relative"
      onMouseMove={handleMouseMove}
    >
      {/* Effets de fond subtils */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Particules flottantes subtiles avec vos couleurs pures */}
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
        
        {/* Particules flottantes avec vos couleurs pures */}
        <FloatingParticles count={6} color="bg-[#00516f]" size={3} />
        <FloatingParticles count={4} color="bg-[#e86924]" size={2} className="opacity-60" />
      </div>

      {/* Contenu avec parallax subtil */}
      <motion.div
        style={{ 
          x: mousePosition.x, 
          y: mousePosition.y 
        }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
      >
        <HeroSlider />
      </motion.div>

      {/* Sections avec animations d'apparition */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <WhyBroker />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ServicesGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Mission />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Partners />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <References />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
