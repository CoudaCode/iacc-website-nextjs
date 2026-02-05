"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  BackgroundEffects, 
  HeroSection, 
  ServiceCard, 
  SectionTitle,
  GlassButton,
  colors 
} from "./index";

interface ServicePageTemplateProps {
  service: {
    title: string;
    subtitle: string;
    icon: string;
    color: string;
  };
  formules: Array<{
    nom: string;
    prix: string;
    avantages: string[];
  }>;
  garanties: Array<{
    titre: string;
    description: string;
    icon: string;
  }>;
  audience: {
    titre: string;
    description: string;
    cibles: string[];
  };
}

export function ServicePageTemplate({ 
  service, 
  formules, 
  garanties, 
  audience 
}: ServicePageTemplateProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x: x * 10, y: y * 10 });
  };

  return (
    <div 
      className="relative bg-black text-white min-h-screen"
      onMouseMove={handleMouseMove}
    >
      <BackgroundEffects />
      
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        subtitle={service.subtitle}
        icon={service.icon}
        buttonText="Demander un devis"
        mousePosition={mousePosition}
      />

      {/* Formules Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Nos Formules</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {formules.map((formule, index) => (
              <motion.div
                key={formule.nom}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
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
                  <h3 className="text-2xl font-bold mb-4 text-white">{formule.nom}</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-6">{formule.prix}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {formule.avantages.map((avantage, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue-400 text-xl">✓</span>
                        <span className="text-gray-300">{avantage}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <GlassButton text="Choisir cette formule" className="w-full" />
                  
                  <motion.div
                    className={`h-1 mt-6 rounded-full bg-gradient-to-r ${service.color}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Nos Garanties</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {garanties.map((garantie, index) => (
              <ServiceCard
                key={garantie.titre}
                title={garantie.titre}
                description={garantie.description}
                icon={garantie.icon}
                color={service.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>{audience.titre}</SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-12"
          >
            {audience.description}
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {audience.cibles.map((cible, index) => (
              <motion.div
                key={cible}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-lg">{cible}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Prêt à vous protéger ?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Contactez nos experts pour un devis personnalisé et gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton text="Demander un devis" primary />
              <GlassButton text="Nous contacter" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}