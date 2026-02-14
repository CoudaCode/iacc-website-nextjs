"use client";

import { CheckCircle, Send, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface TestimonialFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  service: string;
  rating: number;
  content: string;
  location: string;
  phone: string;
}

const services = [
  "Assurance Auto",
  "Assurance Habitation",
  "Assurance Santé",
  "Assurance Vie",
  "Assurance Voyage",
  "Assurance Entreprise",
];

export const TestimonialForm = () => {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    service: "",
    rating: 5,
    content: "",
    location: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<TestimonialFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<TestimonialFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!formData.email.includes("@")) newErrors.email = "Email invalide";
    if (!formData.service)
      newErrors.service = "Veuillez sélectionner un service";
    if (!formData.content.trim())
      newErrors.content = "Le témoignage est requis";
    if (formData.content.length < 50)
      newErrors.content = "Le témoignage doit contenir au moins 50 caractères";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulation d'envoi (remplacer par votre API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof TestimonialFormData,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
      >
        <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Merci pour votre témoignage !
        </h3>
        <p className="text-gray-600 mb-6">
          Votre témoignage a été envoyé avec succès. Il sera examiné par notre
          équipe avant publication.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              role: "",
              service: "",
              rating: 5,
              content: "",
              location: "",
              phone: "",
            });
          }}
          className="bg-[#00516f] text-white px-6 py-3 rounded-lg hover:bg-[#00516f]/90 transition-colors"
        >
          Laisser un autre témoignage
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Partagez votre expérience
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent ${
                errors.name ? "border-red-300" : "border-gray-200"
              }`}
              placeholder="Votre nom complet"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent ${
                errors.email ? "border-red-300" : "border-gray-200"
              }`}
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Entreprise/Organisation
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent"
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fonction/Poste
            </label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent"
              placeholder="Votre fonction"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service utilisé *
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange("service", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent ${
                errors.service ? "border-red-300" : "border-gray-200"
              }`}
            >
              <option value="">Sélectionnez un service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Localisation
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent"
              placeholder="Ville, région"
            />
          </div>
        </div>

        {/* Évaluation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Évaluation *
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleInputChange("rating", star)}
                className="focus:outline-none"
              >
                <Star
                  size={32}
                  className={`transition-colors ${
                    star <= formData.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({formData.rating}/5 étoiles)
            </span>
          </div>
        </div>

        {/* Témoignage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre témoignage * (minimum 50 caractères)
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent resize-none ${
              errors.content ? "border-red-300" : "border-gray-200"
            }`}
            placeholder="Partagez votre expérience avec IACC. Qu'est-ce qui vous a le plus marqué ? Comment notre service vous a-t-il aidé ?"
          />
          <div className="flex justify-between items-center mt-2">
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}
            <p className="text-sm text-gray-500 ml-auto">
              {formData.content.length} caractères
            </p>
          </div>
        </div>

        {/* Téléphone optionnel */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00516f] focus:border-transparent"
            placeholder="+225 XX XX XX XX XX"
          />
        </div>

        {/* Consentement */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            En soumettant ce témoignage, vous acceptez que IACC puisse le
            publier sur son site web et ses supports de communication. Vos
            informations personnelles seront traitées conformément à notre
            politique de confidentialité.
          </p>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00516f] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#00516f]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} />
              Envoyer mon témoignage
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};
