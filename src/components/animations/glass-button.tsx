"use client";

import { motion } from "motion/react";

interface GlassButtonProps {
  text: string;
  onClick?: () => void;
  primary?: boolean;
  className?: string;
}

export function GlassButton({ 
  text, 
  onClick, 
  primary = false, 
  className = "" 
}: GlassButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-full font-medium overflow-hidden
        ${primary ? "text-white" : "text-gray-300"}
        ${className}
      `}
      style={{
        background: primary
          ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))"
          : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {primary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}