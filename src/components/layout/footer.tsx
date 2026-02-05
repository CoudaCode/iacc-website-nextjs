import { contactInfo, services } from "@/lib/constants/services";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#00516f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/IACC.jpg"
                alt="IACC Logo"
                width={48}
                height={48}
                className="bg-white p-1 rounded"
              />
              
            </Link>
            <p className="text-sm text-gray-300">
              Ivoire Assurance de Conseil et Courtage - Votre partenaire de
              confiance pour toutes vos solutions d'assurance en Côte d'Ivoire.
            </p>
            <p className="text-xs text-gray-400">
              Agrément N°162/MPMEF/DGTCP/DA-DEMO
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-bold text-lg">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-[#e86924]"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-4 font-bold text-lg">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-gray-300 transition-colors hover:text-[#e86924]"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-broker"
                  className="text-sm text-gray-300 transition-colors hover:text-[#e86924]"
                >
                  Pourquoi un courtier
                </Link>
              </li>
              <li>
                <Link
                  href="/#partenaires"
                  className="text-sm text-gray-300 transition-colors hover:text-[#e86924]"
                >
                  Nos partenaires
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-gray-300 transition-colors hover:text-[#e86924]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-300 transition-colors hover:text-[#e86924]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e86924]" />
                <span className="text-sm text-gray-300">
                  {contactInfo.address}
                  <br />
                  {contactInfo.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#e86924]" />
                <a
                  href={`tel:+225${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm text-gray-300 hover:text-[#e86924]"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#e86924]" />
                <a
                  href={`tel:+225${contactInfo.mobile.replace(/\s/g, "")}`}
                  className="text-sm text-gray-300 hover:text-[#e86924]"
                >
                  {contactInfo.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#e86924]" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-300 hover:text-[#e86924]"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} IACC - Ivoire Assurance de Conseil et
            Courtage. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
