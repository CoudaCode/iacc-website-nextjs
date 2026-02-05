"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants/services";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { FloatingParticles } from "@/components/animations";

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x: x * 5, y: y * 5 });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00516f] to-[#006d94] py-16 md:py-24 relative overflow-hidden">
        {/* Particules de fond */}
        <FloatingParticles count={8} color="bg-white" size={2} className="opacity-20" />
        
        {/* Particules animées avec vos couleurs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#e86924]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            style={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur border border-white/20"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="h-4 w-4 text-[#e86924]" />
              </motion.div>
              <span>Solutions complètes</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-extrabold text-4xl text-white md:text-5xl"
            >
              Nos Services d'Assurance
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-2xl text-lg text-gray-200"
            >
              Des solutions d'assurance adaptées à chaque besoin. Particuliers ou
              professionnels, trouvez la protection qui vous correspond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
        {/* Particules de fond subtiles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00516f]/20 rounded-full"
              style={{
                left: `${15 + i * 20}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    {/* Effet de glow au hover avec couleur pure */}
                    <motion.div
                      className="absolute -inset-1 bg-[#00516f]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    <div className="relative bg-white rounded-xl">
                      <CardHeader>
                        <motion.div
                          className={`mb-4 inline-flex rounded-xl ${service.color} p-4`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 10px 25px rgba(0, 81, 111, 0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <CardTitle className="text-2xl text-[#00516f] group-hover:text-[#e86924] transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600">{service.description}</p>
                        <div className="space-y-2">
                          <p className="font-medium text-sm text-[#00516f]">
                            Couvertures principales :
                          </p>
                          <ul className="space-y-1">
                            {service.coverages.slice(0, 4).map((coverage, coverageIndex) => (
                              <motion.li
                                key={coverageIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: coverageIndex * 0.1 }}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <motion.span 
                                  className="h-1.5 w-1.5 rounded-full bg-[#e86924]"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: coverageIndex * 0.2 }}
                                />
                                {coverage}
                              </motion.li>
                            ))}
                            {service.coverages.length > 4 && (
                              <li className="text-sm text-gray-400">
                                + {service.coverages.length - 4} autres garanties
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        {/* Ligne de progression animée avec couleur pure */}
                        <motion.div
                          className="h-1 bg-[#e86924] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            className="w-full bg-[#00516f] hover:bg-[#003a4f] transition-all duration-300"
                            asChild
                          >
                            <Link href={`/services/${service.slug}`}>
                              Voir les détails
                              <motion.div
                                className="ml-2"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <ArrowRight className="h-4 w-4" />
                              </motion.div>
                            </Link>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e86924] py-12 relative overflow-hidden">
        {/* Effet de vague animé avec couleur pure */}
        <motion.div
          className="absolute inset-0 bg-[#00516f]/10"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="mb-4 font-bold text-2xl text-white md:text-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Besoin d'un conseil personnalisé ?
            </motion.h2>
            <motion.p
              className="mb-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nos experts sont à votre disposition pour étudier vos besoins.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white text-[#e86924] hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="/#contact">
                  Demander un devis gratuit
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
