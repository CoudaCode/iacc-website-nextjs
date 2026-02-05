"use client";

import { motion } from "motion/react";

export function BackgroundEffects() {
  return (
    <>
      {/* Gradient de base */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black -z-10" />
      
      {/* Particule gauche */}
      <motion.div
        className="fixed top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Particule droite */}
      <motion.div
        className="fixed bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Grille */}
      <div className="fixed inset-0 opacity-10 -z-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} 
        />
      </div>
    </>
  );
}