"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { AnimatedCounter } from "@/components/animations";
import { stats } from "@/lib/constants/services";
import { motion } from "motion/react";

export function Stats() {
  return (
    <section className="bg-white py-12 relative overflow-hidden">
      {/* Effet de fond subtil avec couleur pure */}
      <div className="absolute inset-0 bg-[#00516f]/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-[#00516f]/20 group"
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 81, 111, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Effet de glow au hover avec couleur pure */}
                <motion.div
                  className="absolute -inset-1 bg-[#00516f]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
                
                <div className="relative">
                  <motion.div
                    className="mb-2 font-extrabold text-3xl md:text-4xl text-[#00516f]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AnimatedCounter 
                      value={parseInt(stat.value.replace(/[^0-9]/g, ''))} 
                      suffix={stat.value.replace(/[0-9]/g, '')}
                      duration={2}
                      className="text-[#00516f]"
                    />
                  </motion.div>
                  <motion.div 
                    className="text-sm text-gray-600 group-hover:text-[#00516f] transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
