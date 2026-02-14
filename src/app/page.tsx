"use client";

import { FloatingParticles } from "@/components/animations";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { HeroSlider } from "@/components/sections/hero-slider";
import { Mission } from "@/components/sections/mission";
import { Partners } from "@/components/sections/partners";
import { References } from "@/components/sections/references";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyBroker } from "@/components/sections/why-broker";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x: x * 5, y: y * 5 });
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <div className="fixed inset-0 pointer-events-none -z-10">
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

        <FloatingParticles count={6} color="bg-[#00516f]" size={3} />
        <FloatingParticles
          count={4}
          color="bg-[#e86924]"
          size={2}
          className="opacity-60"
        />
      </div>

      <motion.div
        id="hero"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
      >
        <HeroSlider />
      </motion.div>

      <motion.div
        id="stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.div>

      <motion.div
        id="why-broker"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <WhyBroker />
      </motion.div>

      <motion.div
        id="services"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ServicesGrid />
      </motion.div>

      <motion.div
        id="mission"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Mission />
      </motion.div>

      <motion.div
        id="partenaires"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Partners />
      </motion.div>

      <motion.div
        id="references"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <References />
      </motion.div>

      <motion.div
        id="testimonials"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        id="faq"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.div>

      <motion.div
        id="contact"
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
