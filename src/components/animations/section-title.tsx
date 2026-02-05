"use client";

import { motion } from "motion/react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`
        text-5xl md:text-6xl font-bold mb-6 text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400
        ${className}
      `}
    >
      {children}
    </motion.h2>
  );
}