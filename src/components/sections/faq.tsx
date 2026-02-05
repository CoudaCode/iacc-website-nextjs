"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { faqGeneral } from "@/lib/constants/services";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInUp className="mb-12 text-center">
          <h2 className="mb-4 font-extrabold text-3xl text-[#00516f] md:text-4xl">
            Questions Fréquentes
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Retrouvez les réponses aux questions les plus courantes sur nos
            services de courtage.
          </p>
        </FadeInUp>

        <div className="mx-auto max-w-3xl">
          <StaggerContainer>
            <Accordion type="single" collapsible className="space-y-4">
              {faqGeneral.map((item, index) => (
                <StaggerItem key={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-6 data-[state=open]:bg-white data-[state=open]:shadow-md"
                  >
                    <AccordionTrigger className="text-left font-medium text-[#00516f] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
