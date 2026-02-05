import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/lib/constants/services";
import { Users } from "lucide-react";

interface ServiceAudienceProps {
  service: Service;
}

export function ServiceAudience({ service }: ServiceAudienceProps) {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 font-extrabold text-2xl text-[#00516f] md:text-3xl">
          Pour qui ?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {service.targetAudience.map((audience, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg transition-transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-2 inline-flex rounded-xl bg-[#00516f]/10 p-3">
                  <Users className="h-6 w-6 text-[#00516f]" />
                </div>
                <CardTitle className="text-xl text-[#00516f]">
                  {audience.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
