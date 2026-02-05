import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/lib/constants/services";
import { CheckCircle } from "lucide-react";

interface ServiceFormulasProps {
  service: Service;
}

export function ServiceFormulas({ service }: ServiceFormulasProps) {
  if (!service.formulas || service.formulas.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 font-extrabold text-2xl text-[#00516f] md:text-3xl">
          Nos Formules
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {service.formulas.map((formula, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${
                index === service.formulas!.length - 1
                  ? "border-[#e86924] shadow-lg"
                  : "border-gray-100"
              }`}
            >
              {index === service.formulas!.length - 1 && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e86924]">
                  Recommandé
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[#00516f]">
                  {formula.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{formula.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {formula.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#e86924]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
