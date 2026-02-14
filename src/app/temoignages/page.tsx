"use client";

import {
  Filter,
  MessageCircle,
  Quote,
  Search,
  Star,
  ThumbsUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  service: string;
  date: string;
  verified: boolean;
  location: string;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Kouassi",
    company: "Entreprise SOGECO",
    role: "Directrice Générale",
    content:
      "IACC nous accompagne depuis 5 ans dans la gestion de nos assurances. Leur expertise et leur réactivité nous ont permis d'optimiser nos couvertures tout en réduisant nos coûts. Un partenaire de confiance ! L'équipe est toujours disponible et trouve des solutions adaptées à nos besoins spécifiques.",
    rating: 5,
    service: "Assurance Entreprise",
    date: "2024-01-15",
    verified: true,
    location: "Abidjan, Plateau",
  },
  {
    id: 2,
    name: "Jean-Baptiste Traoré",
    company: "Famille Traoré",
    role: "Chef de famille",
    content:
      "Grâce à IACC, j'ai pu souscrire une assurance vie adaptée à mes besoins et à mon budget. L'équipe m'a accompagné avec patience et professionnalisme. Je recommande vivement ! Le processus était simple et transparent.",
    rating: 5,
    service: "Assurance Vie",
    date: "2024-02-03",
    verified: true,
    location: "Bouaké",
  },
  {
    id: 3,
    name: "Fatou Diabaté",
    company: "Cabinet Médical Santé+",
    role: "Médecin",
    content:
      "En tant que professionnelle de santé, j'avais besoin d'une couverture spécialisée. IACC a su me proposer des solutions sur mesure avec un excellent rapport qualité-prix. Leur connaissance du secteur médical est remarquable.",
    rating: 5,
    service: "Assurance Santé",
    date: "2024-01-28",
    verified: true,
    location: "Yamoussoukro",
  },
  {
    id: 4,
    name: "Amadou Bamba",
    company: "Transport Bamba & Fils",
    role: "Gérant",
    content:
      "Pour notre flotte de véhicules, IACC nous a négocié des tarifs très compétitifs avec des garanties étendues. Leur suivi est exemplaire, surtout en cas de sinistre. Nous avons économisé 30% sur nos primes d'assurance.",
    rating: 5,
    service: "Assurance Auto",
    date: "2024-02-10",
    verified: true,
    location: "San-Pédro",
  },
  {
    id: 5,
    name: "Aïcha Koné",
    company: "Résidence Les Palmiers",
    role: "Propriétaire",
    content:
      "L'assurance habitation proposée par IACC couvre parfaitement mes biens. Leur conseil personnalisé m'a aidée à choisir les bonnes options sans surpayer. Service client exceptionnel !",
    rating: 5,
    service: "Assurance Habitation",
    date: "2024-01-20",
    verified: true,
    location: "Abidjan, Cocody",
  },
  {
    id: 6,
    name: "Yves Kouadio",
    company: "Agence de Voyage Découverte",
    role: "Directeur",
    content:
      "Pour nos clients voyageurs, IACC nous a mis en relation avec les meilleures compagnies d'assurance voyage. Service irréprochable et tarifs négociés. Nos clients sont très satisfaits.",
    rating: 5,
    service: "Assurance Voyage",
    date: "2024-02-05",
    verified: true,
    location: "Abidjan, Treichville",
  },
  {
    id: 7,
    name: "Koffi Assamoi",
    company: "Restaurant Le Palmier",
    role: "Propriétaire",
    content:
      "IACC m'a aidé à protéger mon restaurant avec une assurance complète. Quand j'ai eu un sinistre, ils ont géré toutes les démarches. Remboursement rapide et sans complications.",
    rating: 5,
    service: "Assurance Entreprise",
    date: "2024-01-12",
    verified: true,
    location: "Grand-Bassam",
  },
  {
    id: 8,
    name: "Mariam Ouattara",
    company: "Boutique Mode & Style",
    role: "Commerçante",
    content:
      "Excellente expérience avec IACC pour l'assurance de ma boutique. Ils ont pris le temps de comprendre mes besoins et m'ont proposé une couverture adaptée à mon activité.",
    rating: 4,
    service: "Assurance Entreprise",
    date: "2024-02-01",
    verified: true,
    location: "Daloa",
  },
  {
    id: 9,
    name: "Ibrahim Coulibaly",
    company: "Famille Coulibaly",
    role: "Ingénieur",
    content:
      "Très satisfait de mon assurance auto souscrite via IACC. Tarifs compétitifs et service client réactif. Je recommande à tous mes collègues.",
    rating: 5,
    service: "Assurance Auto",
    date: "2024-01-25",
    verified: true,
    location: "Korhogo",
  },
  {
    id: 10,
    name: "Adjoua Brou",
    company: "Clinique Espoir",
    role: "Infirmière",
    content:
      "IACC m'a trouvé une excellente assurance santé complémentaire. Les remboursements sont rapides et le réseau de soins est étendu. Très professionnels.",
    rating: 5,
    service: "Assurance Santé",
    date: "2024-02-08",
    verified: true,
    location: "Abidjan, Adjamé",
  },
];

const services = [
  "Tous les services",
  "Assurance Auto",
  "Assurance Habitation",
  "Assurance Santé",
  "Assurance Vie",
  "Assurance Voyage",
  "Assurance Entreprise",
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
    >
      {/* Badge vérifié */}
      {testimonial.verified && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <ThumbsUp size={12} />
          Vérifié
        </div>
      )}

      {/* Icône de citation */}
      <div className="absolute top-6 left-6 text-[#00516f]/20 group-hover:text-[#00516f]/30 transition-colors duration-300">
        <Quote size={24} />
      </div>

      <div className="mt-8">
        {/* Étoiles */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">
            ({testimonial.rating}/5)
          </span>
        </div>

        {/* Contenu du témoignage */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        {/* Service et date */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block bg-[#00516f]/10 text-[#00516f] px-3 py-1 rounded-full text-sm font-medium">
            {testimonial.service}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(testimonial.date).toLocaleDateString("fr-FR")}
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
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsPage() {
  const [selectedService, setSelectedService] = useState("Tous les services");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTestimonials = allTestimonials.filter((testimonial) => {
    const matchesService =
      selectedService === "Tous les services" ||
      testimonial.service === selectedService;
    const matchesSearch =
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesService && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-[#00516f] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Découvrez les expériences authentiques de nos clients satisfaits
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" size={24} />
                <span>4.9/5 étoiles</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={24} />
                <span>{allTestimonials.length}+ témoignages</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Recherche */}
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Rechercher par nom, entreprise ou contenu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent"
                />
              </div>

              {/* Filtre par service */}
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent bg-white"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Résultats */}
            <div className="mt-4 text-sm text-gray-600">
              {filteredTestimonials.length} témoignage(s) trouvé(s)
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grille de témoignages */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <MessageCircle size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Aucun témoignage trouvé
              </h3>
              <p className="text-gray-500">
                Essayez de modifier vos critères de recherche
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA pour laisser un témoignage */}
      <section className="py-20 bg-[#00516f] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous êtes client IACC ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partagez votre expérience et aidez d'autres personnes à faire le
              bon choix
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-[#00516f] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Laisser un témoignage
              <MessageCircle size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
