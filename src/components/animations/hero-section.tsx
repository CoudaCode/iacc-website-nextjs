"use client";

import { motion, useSpring } from "motion/react";
import { GlassButton } from "./glass-button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  icon?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  mousePosition?: { x: number; y: number };
}

export function HeroSection({ 
  title, 
  subtitle, 
  icon,
  buttonText = "En savoir plus",
  onButtonClick,
  mousePosition = { x: 0, y: 0 }
}: HeroSectionProps) {
  const x = useSpring(mousePosition.x, { stiffness: 150, damping: 30 });
  const y = useSpring(mousePosition.y, { stiffness: 150, damping: 30 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black" />
      
      {/* Particules */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Contenu avec parallax */}
      <motion.div
        className="relative z-10 text-center px-4"
        style={{ x, y }}
      >
        {icon && (
          <motion.div
            className="text-8xl mb-8"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <GlassButton text={buttonText} onClick={onButtonClick} primary />
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}