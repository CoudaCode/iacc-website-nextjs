import {
  Building2,
  Car,
  Heart,
  Plane,
  Shield,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  coverages: string[];
  targetAudience: {
    title: string;
    description: string;
  }[];
  formulas?: {
    name: string;
    description: string;
    features: string[];
  }[];
  whyIACC: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "auto",
    title: "Assurance Automobile",
    shortTitle: "Auto",
    description:
      "Protection complète pour votre véhicule, de la responsabilité civile aux tous risques.",
    icon: Car,
    color: "bg-blue-500",
    coverages: [
      "Responsabilité Civile (RC)",
      "Défense et recours",
      "Individuel conducteur",
      "Vol à main armée",
      "Vol d'accessoires",
      "Bris de glace",
      "Avance sur recours",
      "Dommages tous accidents",
    ],
    targetAudience: [
      {
        title: "Particuliers",
        description:
          "Propriétaires de véhicules personnels souhaitant une protection adaptée.",
      },
      {
        title: "Professionnels",
        description:
          "Entreprises avec flotte de véhicules nécessitant une couverture complète.",
      },
      {
        title: "Nouveaux conducteurs",
        description:
          "Jeunes conducteurs cherchant une assurance accessible et protectrice.",
      },
    ],
    formulas: [
      {
        name: "Tiers Simple",
        description: "La couverture essentielle obligatoire",
        features: [
          "Responsabilité Civile",
          "Défense et recours",
          "Individuel conducteur",
        ],
      },
      {
        name: "Tiers Améliorées",
        description: "Une protection étendue pour plus de sérénité",
        features: [
          "Toutes garanties Tiers Simple",
          "Vol à main armée",
          "Vol d'accessoires",
          "Bris de glace",
          "Avance sur recours",
          "Incendies",
        ],
      },
      {
        name: "Tous Risques",
        description: "La protection maximale pour véhicules récents (0-4 ans)",
        features: [
          "Toutes garanties Tiers Améliorées",
          "Dommages tous accidents",
          "Catastrophes naturelles",
          "Assistance 24h/24",
        ],
      },
    ],
    whyIACC: [
      "Comparaison des offres de tous nos partenaires pour le meilleur tarif",
      "Accompagnement personnalisé en cas de sinistre",
      "Gestion rapide des déclarations et indemnisations",
    ],
    faq: [
      {
        question: "Quels documents fournir pour assurer mon véhicule ?",
        answer:
          "Carte grise du véhicule, permis de conduire, pièce d'identité et justificatif de domicile.",
      },
      {
        question: "Puis-je changer de formule en cours de contrat ?",
        answer:
          "Oui, vous pouvez modifier votre formule à tout moment. Contactez-nous pour étudier les options.",
      },
      {
        question: "Comment déclarer un sinistre ?",
        answer:
          "Contactez-nous dans les 5 jours ouvrés suivant le sinistre. Nous vous accompagnons dans toutes les démarches.",
      },
    ],
  },
  {
    slug: "multirisque-professionnelle",
    title: "Multirisque Professionnelle",
    shortTitle: "Pro",
    description:
      "Protection complète des biens et activités de votre entreprise.",
    icon: Building2,
    color: "bg-emerald-500",
    coverages: [
      "Incendie et explosions",
      "Dommages électriques",
      "Dégâts des eaux",
      "Bris de glaces",
      "Bris de machines",
      "Tous risques informatiques",
      "Vol et hold-up",
      "Perte d'exploitation",
    ],
    targetAudience: [
      {
        title: "PME / PMI",
        description:
          "Petites et moyennes entreprises souhaitant protéger leurs actifs.",
      },
      {
        title: "Commerçants",
        description: "Boutiques, magasins et commerces de toutes tailles.",
      },
      {
        title: "Artisans",
        description: "Professionnels indépendants avec local et équipements.",
      },
    ],
    whyIACC: [
      "Audit gratuit de vos risques professionnels",
      "Solutions sur-mesure adaptées à votre secteur d'activité",
      "Interlocuteur unique pour tous vos contrats professionnels",
    ],
    faq: [
      {
        question: "Mon activité à domicile est-elle couverte ?",
        answer:
          "Oui, nous proposons des solutions adaptées aux activités professionnelles exercées à domicile.",
      },
      {
        question: "La perte d'exploitation est-elle incluse ?",
        answer:
          "Elle peut être ajoutée en option pour compenser la perte de chiffre d'affaires suite à un sinistre.",
      },
      {
        question: "Comment évaluer la valeur de mes biens professionnels ?",
        answer:
          "Nos experts vous accompagnent gratuitement pour établir un inventaire et une estimation précise.",
      },
    ],
  },
  // {
  //   slug: "multirisque-habitation",
  //   title: "Multirisque Habitation",
  //   shortTitle: "Habitation",
  //   description:
  //     "Protégez votre logement et vos biens contre tous les risques du quotidien.",
  //   icon: Home,
  //   color: "bg-amber-500",
  //   coverages: [
  //     "Biens immobiliers",
  //     "Biens mobiliers",
  //     "Objets de valeur",
  //     "Électroménager",
  //     "Matériel informatique",
  //     "Responsabilité civile vie privée",
  //     "Dégâts des eaux",
  //     "Incendie et explosions",
  //   ],
  //   targetAudience: [
  //     {
  //       title: "Propriétaires",
  //       description:
  //         "Protection complète de votre bien immobilier et de son contenu.",
  //     },
  //     {
  //       title: "Locataires",
  //       description:
  //         "Couverture obligatoire et protection de vos effets personnels.",
  //     },
  //     {
  //       title: "Copropriétaires",
  //       description:
  //         "Assurance adaptée aux spécificités de la copropriété.",
  //     },
  //   ],
  //   whyIACC: [
  //     "Évaluation précise de vos biens pour une couverture optimale",
  //     "Assistance 24h/24 en cas de sinistre",
  //     "Indemnisation rapide et accompagnement personnalisé",
  //   ],
  //   faq: [
  //     {
  //       question: "L'assurance habitation est-elle obligatoire ?",
  //       answer:
  //         "Elle est obligatoire pour les locataires et fortement recommandée pour les propriétaires.",
  //     },
  //     {
  //       question: "Mes objets de valeur sont-ils couverts ?",
  //       answer:
  //         "Oui, avec une déclaration spécifique. Nous vous conseillons sur les garanties adaptées.",
  //     },
  //     {
  //       question: "Que faire en cas de dégât des eaux ?",
  //       answer:
  //         "Coupez l'eau, prenez des photos et contactez-nous immédiatement. Nous gérons le reste.",
  //     },
  //   ],
  // },
  {
    slug: "epargne-assurance-vie",
    title: "Épargne & Assurance Vie",
    shortTitle: "Vie",
    description:
      "Préparez votre avenir et protégez vos proches avec nos solutions d'épargne et de prévoyance.",
    icon: Heart,
    color: "bg-rose-500",
    coverages: [
      "Prévoyance décès",
      "Capitalisation",
      "Épargne programmée",
      "Retraite complémentaire",
      "Rente viagère",
      "Capital éducation enfants",
      "Garantie invalidité",
      "Exonération des primes",
    ],
    targetAudience: [
      {
        title: "Familles",
        description:
          "Protégez vos proches et préparez l'avenir de vos enfants.",
      },
      {
        title: "Actifs",
        description:
          "Constituez une épargne et préparez votre retraite sereinement.",
      },
      {
        title: "Seniors",
        description:
          "Optimisez votre patrimoine et transmettez à vos héritiers.",
      },
    ],
    whyIACC: [
      "Simulation personnalisée de vos objectifs d'épargne",
      "Accès aux meilleurs produits du marché ivoirien",
      "Suivi régulier et ajustement de votre stratégie",
    ],
    faq: [
      {
        question: "À partir de quel montant puis-je épargner ?",
        answer:
          "Nos solutions sont accessibles dès 10 000 F CFA par mois. Contactez-nous pour une simulation.",
      },
      {
        question: "Puis-je récupérer mon épargne avant le terme ?",
        answer:
          "Oui, des rachats partiels ou totaux sont possibles selon les conditions du contrat.",
      },
      {
        question: "Comment est calculée la rente de retraite ?",
        answer:
          "Elle dépend du capital constitué, de votre âge et des options choisies. Nous vous accompagnons dans le calcul.",
      },
    ],
  },
  {
    slug: "sante",
    title: "Assurance Santé",
    shortTitle: "Santé",
    description:
      "Une couverture santé complète pour vous et votre famille, en toute sérénité.",
    icon: Stethoscope,
    color: "bg-teal-500",
    coverages: [
      "Consultations médicales",
      "Hospitalisation",
      "Pharmacie",
      "Analyses et examens",
      "Soins dentaires",
      "Optique",
      "Maternité",
      "Évacuation sanitaire",
    ],
    targetAudience: [
      {
        title: "Particuliers",
        description: "Couverture santé individuelle adaptée à vos besoins.",
      },
      {
        title: "Familles",
        description:
          "Protection santé pour toute la famille à tarif avantageux.",
      },
      {
        title: "Entreprises",
        description: "Assurance santé collective pour vos collaborateurs.",
      },
    ],
    whyIACC: [
      "Réseau de soins étendu en Côte d'Ivoire et à l'étranger",
      "Tiers payant dans les établissements partenaires",
      "Gestion simplifiée des remboursements",
    ],
    faq: [
      {
        question: "Y a-t-il un délai de carence ?",
        answer:
          "Les délais varient selon les garanties. Nous vous expliquons tout avant la souscription.",
      },
      {
        question: "Ma famille peut-elle être couverte ?",
        answer:
          "Oui, conjoint et enfants peuvent être inclus dans votre contrat à des conditions avantageuses.",
      },
      {
        question: "Comment fonctionne le tiers payant ?",
        answer:
          "Présentez votre carte dans nos établissements partenaires, nous réglons directement les frais couverts.",
      },
    ],
  },
  {
    slug: "responsabilite-civile",
    title: "Responsabilité Civile",
    shortTitle: "RC",
    description:
      "Protégez-vous contre les dommages que vous pourriez causer à autrui.",
    icon: Shield,
    color: "bg-indigo-500",
    coverages: [
      "Dommages corporels causés à autrui",
      "Dommages matériels",
      "Préjudices dans l'entreprise",
      "Préjudices hors entreprise (mission/chantier)",
      "Responsabilité des salariés",
      "Responsabilité des sous-traitants",
      "Dommages causés par machines/outillages",
      "Défense juridique",
    ],
    targetAudience: [
      {
        title: "Particuliers",
        description: "Protection contre les accidents de la vie quotidienne.",
      },
      {
        title: "Professionnels",
        description:
          "Couverture des risques liés à votre activité professionnelle.",
      },
      {
        title: "Associations",
        description: "Protection des dirigeants et des activités associatives.",
      },
    ],
    whyIACC: [
      "Analyse approfondie de vos risques spécifiques",
      "Couverture adaptée à votre secteur d'activité",
      "Accompagnement juridique en cas de litige",
    ],
    faq: [
      {
        question: "La RC est-elle obligatoire pour mon activité ?",
        answer:
          "Certaines professions l'exigent. Contactez-nous pour vérifier vos obligations légales.",
      },
      {
        question: "Mes sous-traitants sont-ils couverts ?",
        answer:
          "Des extensions de garantie permettent de couvrir les dommages causés par vos sous-traitants.",
      },
      {
        question: "Quel est le plafond d'indemnisation ?",
        answer:
          "Il varie selon le contrat. Nous vous conseillons sur le niveau de couverture adapté à vos risques.",
      },
    ],
  },
  {
    slug: "voyage",
    title: "Assurance Voyage",
    shortTitle: "Voyage",
    description:
      "Voyagez l'esprit tranquille avec une couverture complète partout dans le monde.",
    icon: Plane,
    color: "bg-sky-500",
    coverages: [
      "Frais médicaux à l'étranger",
      "Rapatriement sanitaire",
      "Annulation de voyage",
      "Perte ou vol de bagages",
      "Retard de vol",
      "Responsabilité civile à l'étranger",
      "Assistance 24h/24",
      "Avance de fonds",
    ],
    targetAudience: [
      {
        title: "Voyageurs d'affaires",
        description:
          "Protection complète pour vos déplacements professionnels.",
      },
      {
        title: "Touristes",
        description:
          "Couverture adaptée pour vos vacances et séjours à l'étranger.",
      },
      {
        title: "Étudiants",
        description: "Assurance pour vos études ou stages à l'international.",
      },
    ],
    formulas: [
      {
        name: "Essentielle",
        description: "La couverture de base pour voyager sereinement",
        features: [
          "Frais médicaux jusqu'à 20 000 000 F CFA",
          "Rapatriement sanitaire",
          "Assistance 24h/24",
        ],
      },
      {
        name: "Confort",
        description: "Une protection étendue pour plus de tranquillité",
        features: [
          "Frais médicaux jusqu'à 100 000 000 F CFA",
          "Rapatriement sanitaire",
          "Annulation de voyage",
          "Bagages jusqu'à 1 000 000 F CFA",
          "Assistance 24h/24",
        ],
      },
      {
        name: "Premium",
        description: "La protection maximale pour les grands voyageurs",
        features: [
          "Frais médicaux illimités",
          "Rapatriement sanitaire",
          "Annulation toutes causes",
          "Bagages jusqu'à 2 000 000 F CFA",
          "Retard de vol",
          "Responsabilité civile",
          "Assistance 24h/24 premium",
        ],
      },
    ],
    whyIACC: [
      "Couverture mondiale sans exclusion de destination",
      "Assistance multilingue disponible 24h/24",
      "Prise en charge directe des frais médicaux",
    ],
    faq: [
      {
        question: "Quand dois-je souscrire mon assurance voyage ?",
        answer:
          "Idéalement dès la réservation de votre voyage pour bénéficier de la garantie annulation. Au plus tard avant le départ.",
      },
      {
        question: "Les sports à risque sont-ils couverts ?",
        answer:
          "Certaines activités nécessitent une extension de garantie. Contactez-nous pour vérifier votre couverture.",
      },
      {
        question: "Comment obtenir une assistance à l'étranger ?",
        answer:
          "Appelez le numéro d'urgence 24h/24 figurant sur votre carte d'assistance. Nous coordonnons tout pour vous.",
      },
    ],
  },
];

export const partners = [
  { name: "Allianz", logo: "/images/partners/logo_sanlam_allianz.png" },
  { name: "AXA", logo: "/images/partners/logo_axa.jpg" },
  { name: "NSIA Assurances", logo: "/images/partners/logo_nsia.png" },
  { name: "SAM Assurances", logo: "/images/partners/logo_saar.webp" },
  { name: "SUNU Assurances", logo: "/images/partners/logo_sunu.webp" },
  {
    name: "Atlantique Assurances",
    logo: "/images/partners/logo_atlantique.png",
  },
  { name: "Wafa Assurance", logo: "/images/partners/logo_wafa.jpg" },
  { name: "MCI Care Côte d'Ivoire", logo: "/images/partners/logo_mci.png" },
  { name: "AFG Assurances", logo: "/images/partners/logo_afg.webp" },
  { name: "GNA-CI Assurances", logo: "/images/partners/logo_gna.png" },
];

export const references = [
  {
    name: "QT Quang Thien Imexnt",
    logo: "/images/references/logo_qti.jpg",
  },
  { name: "L.C.C", logo: "/images/references/logo_lcc.jpeg" },
  {
    name: "Ivry Drilling & Resources",
    logo: "/images/references/logo_ivry.jpeg",
  },
  { name: "K2M Finances", logo: "/images/references/logo_k2m_finances.png" },
  {
    name: "Côte d'Ivoire Cables",
    logo: "/images/references/logo_ci_cables.png",
  },
  { name: "S.A.R.C.I SA", logo: "/images/references/logo_sarci.png" },
  { name: "UPO", logo: "/images/references/logo_upo.jpeg" },
  { name: "AMAT-CI", logo: "/images/references/logo_amat-ci.jpeg" },
  { name: "AXD Services", logo: "/images/references/logo_axd_services.png" },
  { name: "SIVOIRCO", logo: "/images/references/logo_sivoirco.png" },
  {
    name: "CYRIAN International",
    logo: "/images/references/cyrian_international.png",
  },
  { name: "ICPW", logo: "/images/references/logo_icpw.jpeg" },
  // { name: "S3C", logo: "/images/references/logo_s3c.png" },
  { name: "André", logo: "/images/references/logo_andre.png" },
];

export const stats = [
  { value: "2015", label: "Année de création" },
  { value: "5M", label: "Capital (F CFA)" },
  { value: "N°162", label: "Agrément officiel" },
  { value: "7+", label: "Partenaires assureurs" },
];

export const faqGeneral = [
  {
    question: "Qu'est-ce qu'un courtier en assurance ?",
    answer:
      "Un courtier est un intermédiaire indépendant qui travaille pour vous, l'assuré. Contrairement à un agent d'assurance qui représente une compagnie, le courtier compare les offres de plusieurs assureurs pour vous trouver la meilleure couverture au meilleur prix.",
  },
  {
    question:
      "Pourquoi passer par IACC plutôt que directement par un assureur ?",
    answer:
      "IACC vous fait gagner du temps en comparant les offres de 7+ partenaires. Nous négocions pour vous les meilleures conditions et vous accompagnons de A à Z, notamment en cas de sinistre où nous défendons vos intérêts.",
  },
  {
    question: "Les services d'IACC sont-ils payants ?",
    answer:
      "Non, nos services de conseil et d'accompagnement sont gratuits pour vous. Notre rémunération provient des commissions versées par les compagnies d'assurance partenaires.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous par téléphone, WhatsApp ou via le formulaire de contact. Nous vous recontactons sous 24h avec une proposition personnalisée.",
  },
  {
    question: "IACC est-il agréé officiellement ?",
    answer:
      "Oui, IACC dispose de l'agrément N°162/MPMEF/DGTCP/DA-DEMO du 30 mai 2016 délivré par les autorités ivoiriennes.",
  },
  {
    question: "Quels types d'assurance proposez-vous ?",
    answer:
      "Nous couvrons tous les besoins : automobile, habitation, santé, vie/épargne, multirisque professionnelle et responsabilité civile. Particuliers comme professionnels trouvent chez nous des solutions adaptées.",
  },
];

export const contactInfo = {
  address: "Marcory Sainte Thérèse, face banque SIB, avenue TSF",
  city: "Abidjan, Côte d'Ivoire",
  phone: "27 21 26 36 99",
  mobile: "07 08 56 21 54",
  whatsapp: "22507085621 54",
  email: "contact@iacc.ci",
};
