"use client";

import { motion } from "motion/react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  className?: string;
}

export function FloatingParticles({
  count = 5,
  color = "bg-blue-400",
  size = 2,
  className = "",
}: FloatingParticlesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} rounded-full opacity-30`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}