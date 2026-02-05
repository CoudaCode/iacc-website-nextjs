"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { contactInfo } from "@/lib/constants/services";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-[#00516f] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInUp className="mb-12 text-center">
          <h2 className="mb-4 font-extrabold text-3xl text-white md:text-4xl">
            Contactez-nous
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Une question ? Un projet d'assurance ? Notre équipe est à votre
            écoute pour vous accompagner.
          </p>
        </FadeInUp>

        <div className="mx-auto max-w-4xl">
          {/* Contact Info Card */}
          <ScaleIn>
            <Card className="border-0 bg-white/10 text-white backdrop-blur mb-8">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  <MapPin className="h-5 w-5 text-[#e86924]" />
                  Notre adresse
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg">{contactInfo.address}</p>
                <p className="text-gray-300">{contactInfo.city}</p>
              </CardContent>
            </Card>
          </ScaleIn>

          {/* Contact Buttons */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-3">
            {/* Appeler */}
            <StaggerItem>
              <Card className="h-full border-0 bg-white shadow-xl transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-4 pt-8 pb-8">
                  <div className="rounded-full bg-[#00516f]/10 p-4">
                    <Phone className="h-8 w-8 text-[#00516f]" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-[#00516f]">Appelez-nous</h3>
                    <p className="text-sm text-gray-500 mb-4">Du lundi au vendredi, 8h-18h</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Button
                      className="w-full bg-[#00516f] hover:bg-[#003a4f]"
                      asChild
                    >
                      <a href={`tel:+225${contactInfo.phone.replace(/\s/g, "")}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {contactInfo.phone}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#00516f] text-[#00516f] hover:bg-[#00516f] hover:text-white"
                      asChild
                    >
                      <a href={`tel:+225${contactInfo.mobile.replace(/\s/g, "")}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {contactInfo.mobile}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* WhatsApp */}
            <StaggerItem>
              <Card className="h-full border-0 bg-white shadow-xl transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-4 pt-8 pb-8">
                  <div className="rounded-full bg-[#25D366]/10 p-4">
                    <MessageCircle className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-[#00516f]">WhatsApp</h3>
                    <p className="text-sm text-gray-500 mb-4">Réponse rapide garantie</p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E]"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Discuter maintenant
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Email */}
            <StaggerItem>
              <Card className="h-full border-0 bg-white shadow-xl transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-4 pt-8 pb-8">
                  <div className="rounded-full bg-[#e86924]/10 p-4">
                    <Mail className="h-8 w-8 text-[#e86924]" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-[#00516f]">Email</h3>
                    <p className="text-sm text-gray-500 mb-4">Réponse sous 24h</p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-[#e86924] hover:bg-[#c45518]"
                    asChild
                  >
                    <a href={`mailto:${contactInfo.email}`}>
                      <Mail className="mr-2 h-5 w-5" />
                      Envoyer un email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
