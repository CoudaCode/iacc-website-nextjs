"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { services } from "@/lib/constants/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Particules de fond subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00516f]/20 rounded-full"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
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
        <FadeInUp className="mb-12 text-center">
          <motion.h2 
            className="mb-4 font-extrabold text-3xl text-[#00516f] md:text-4xl"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nos Services
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-2xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des solutions d'assurance complètes pour particuliers et
            professionnels. Découvrez nos offres adaptées à chaque besoin.
          </motion.p>
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full"
                >
                  <Card className="h-full border-0 shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    {/* Effet de glow au hover avec couleurs pures */}
                    <motion.div
                      className="absolute -inset-1 bg-[#00516f]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    <div className="relative bg-white rounded-xl">
                      <CardHeader>
                        <motion.div
                          className={`mb-4 inline-flex rounded-xl ${service.color} p-3`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 10px 25px rgba(0, 81, 111, 0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl text-[#00516f] group-hover:text-[#e86924] transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600">{service.description}</p>
                        
                        {/* Ligne de progression animée avec couleur pure */}
                        <motion.div
                          className="h-1 bg-[#e86924] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Button
                            variant="link"
                            className="p-0 text-[#e86924] hover:text-[#c45518] group-hover:text-[#00516f] transition-colors duration-300"
                            asChild
                          >
                            <Link href={`/services/${service.slug}`}>
                              Voir les détails
                              <motion.div
                                className="ml-1"
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
