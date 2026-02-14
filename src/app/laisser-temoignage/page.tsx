"use client";

import { TestimonialForm } from "@/components/forms/testimonial-form";
import { Award, MessageCircle, Star, Users } from "lucide-react";
import { motion } from "motion/react";

export default function LeaveTestimonialPage() {
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
            <MessageCircle size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partagez Votre Expérience
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Votre avis compte ! Aidez d'autres personnes à découvrir nos
              services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi laisser un témoignage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi votre témoignage est important ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vos retours nous aident à améliorer nos services et permettent à
              d'autres clients de faire des choix éclairés pour leurs
              assurances.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#00516f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#00516f]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Aidez la communauté
              </h3>
              <p className="text-gray-600">
                Votre expérience guide d'autres personnes dans leurs choix
                d'assurance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#e86924]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#e86924]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Améliorez nos services
              </h3>
              <p className="text-gray-600">
                Vos retours nous permettent d'améliorer continuellement notre
                offre
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#00516f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#00516f]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reconnaissance</h3>
              <p className="text-gray-600">
                Votre témoignage sera mis en valeur sur notre site et nos
                supports
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulaire de témoignage */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TestimonialForm />
          </div>
        </div>
      </section>

      {/* Témoignages existants - aperçu */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Plus de 500 clients nous ont déjà fait confiance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00516f] mb-2">
                  98%
                </div>
                <div className="text-gray-600">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e86924] mb-2">
                  500+
                </div>
                <div className="text-gray-600">Témoignages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00516f] mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600">Note Moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e86924] mb-2">
                  15 ans
                </div>
                <div className="text-gray-600">D'Expérience</div>
              </div>
            </div>

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
    </div>
  );
}
