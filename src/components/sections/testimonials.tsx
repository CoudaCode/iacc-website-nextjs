"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Kouassi",
    company: "Entreprise SOGECO",
    role: "Directrice Générale",
    content:
      "IACC nous accompagne depuis 5 ans dans la gestion de nos assurances. Leur expertise et leur réactivité nous ont permis d'optimiser nos couvertures tout en réduisant nos coûts. Un partenaire de confiance !",
    rating: 5,
    service: "Assurance Entreprise",
  },
  {
    id: 2,
    name: "Jean-Baptiste Traoré",
    company: "Famille Traoré",
    role: "Chef de famille",
    content:
      "Grâce à IACC, j'ai pu souscrire une assurance vie adaptée à mes besoins et à mon budget. L'équipe m'a accompagné avec patience et professionnalisme. Je recommande vivement !",
    rating: 5,
    service: "Assurance Vie",
  },
  {
    id: 3,
    name: "Fatou Diabaté",
    company: "Cabinet Médical Santé+",
    role: "Médecin",
    content:
      "En tant que professionnelle de santé, j'avais besoin d'une couverture spécialisée. IACC a su me proposer des solutions sur mesure avec un excellent rapport qualité-prix.",
    rating: 5,
    service: "Assurance Santé",
  },
  {
    id: 4,
    name: "Amadou Bamba",
    company: "Transport Bamba & Fils",
    role: "Gérant",
    content:
      "Pour notre flotte de véhicules, IACC nous a négocié des tarifs très compétitifs avec des garanties étendues. Leur suivi est exemplaire, surtout en cas de sinistre.",
    rating: 5,
    service: "Assurance Auto",
  },
  {
    id: 5,
    name: "Aïcha Koné",
    company: "Résidence Les Palmiers",
    role: "Propriétaire",
    content:
      "L'assurance habitation proposée par IACC couvre parfaitement mes biens. Leur conseil personnalisé m'a aidée à choisir les bonnes options sans surpayer.",
    rating: 5,
    service: "Assurance Habitation",
  },
  {
    id: 6,
    name: "Yves Kouadio",
    company: "Agence de Voyage Découverte",
    role: "Directeur",
    content:
      "Pour nos clients voyageurs, IACC nous a mis en relation avec les meilleures compagnies d'assurance voyage. Service irréprochable et tarifs négociés.",
    rating: 5,
    service: "Assurance Voyage",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
    >
      {/* Effet de fond au hover */}
      <div className="absolute inset-0 bg-[#00516f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icône de citation */}
      <div className="absolute top-6 right-6 text-[#00516f]/20 group-hover:text-[#00516f]/30 transition-colors duration-300">
        <Quote size={32} />
      </div>

      <div className="relative z-10">
        {/* Étoiles */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Contenu du témoignage */}
        <p className="text-gray-700 mb-6 leading-relaxed italic">
          "{testimonial.content}"
        </p>

        {/* Service */}
        <div className="mb-4">
          <span className="inline-block bg-[#00516f]/10 text-[#00516f] px-3 py-1 rounded-full text-sm font-medium">
            {testimonial.service}
          </span>
        </div>

        {/* Informations client */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#00516f] rounded-full flex items-center justify-center text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-sm text-[#00516f] font-medium">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Témoignages Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-2"
          >
            Découvrez ce que nos clients disent de nos services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-3xl mx-auto"
          >
            La satisfaction de nos clients est notre priorité. Leurs témoignages
            reflètent notre engagement à fournir des solutions d'assurance de
            qualité.
          </motion.p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00516f] mb-2">98%</div>
              <div className="text-gray-600">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#e86924] mb-2">500+</div>
              <div className="text-gray-600">Témoignages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00516f] mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Note Moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#e86924] mb-2">
                15 ans
              </div>
              <div className="text-gray-600">D'Expérience</div>
            </div>
          </div>
        </motion.div>

        {/* CTA vers la page témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/temoignages"
            className="inline-flex items-center gap-2 bg-[#00516f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00516f]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Voir tous les témoignages
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
