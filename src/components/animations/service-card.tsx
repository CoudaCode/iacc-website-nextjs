"use client";

import { motion } from "motion/react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color?: string;
  index?: number;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  color = "from-blue-500 to-cyan-500",
  index = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Glow */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      />
      
      {/* Card */}
      <div
        className="relative h-full p-8 rounded-3xl"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <motion.div
          className="text-6xl mb-6"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <motion.div
          className={`h-1 mt-6 rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}