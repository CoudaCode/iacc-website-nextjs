import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/lib/constants/services";
import { contactInfo } from "@/lib/constants/services";
import { Mail, MessageCircle, Phone } from "lucide-react";

interface ServiceCTAProps {
  service: Service;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section id="contact-service" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="border-0 bg-gradient-to-br from-[#e86924] to-[#c45518] shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white md:text-3xl">
              Intéressé par notre {service.title.toLowerCase()} ?
            </CardTitle>
            <p className="text-white/90">
              Contactez-nous pour en savoir plus
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white text-[#e86924] hover:bg-transparent hover:text-white"
                asChild
              >
                <a href={`tel:+225${contactInfo.mobile.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {contactInfo.mobile}
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#128C7E]"
                asChild
              >
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}?text=Bonjour, je suis intéressé par votre ${service.title.toLowerCase()}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[#e86924]"
                asChild
              >
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
