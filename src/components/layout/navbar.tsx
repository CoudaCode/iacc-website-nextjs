"use client";

import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/#partenaires", label: "Partenaires" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection();

  const isActiveLink = (href: string) => {
    // Si on n'est pas sur la page d'accueil, utiliser la logique normale
    if (pathname !== "/") {
      if (href === "/") {
        return pathname === "/";
      }
      if (href.startsWith("/#")) {
        return false;
      }
      return pathname === href || pathname.startsWith(href + "/");
    }

    // Si on est sur la page d'accueil, utiliser la section active détectée par le scroll
    return activeSection === href;
  };

  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/IACC.jpg"
              alt="IACC Logo"
              width={48}
              height={48}
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#00516f] relative ${
                  isActiveLink(link.href)
                    ? "text-[#00516f] font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.label}
                {isActiveLink(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00516f] rounded-full animate-in slide-in-from-left-full duration-300"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Button
              variant="outline"
              size="sm"
              className="border-[#00516f] text-[#00516f] hover:bg-[#00516f] hover:text-white"
              asChild
            >
              <a href="tel:+22527212636 99">
                <Phone className="mr-2 h-4 w-4" />
                Appeler
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/images/logo/IACC.jpg"
                    alt="IACC Logo"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <span className="font-extrabold text-[#00516f]">IACC</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-medium transition-all duration-300 hover:text-[#00516f] relative ${
                        isActiveLink(link.href)
                          ? "text-[#00516f] font-semibold"
                          : "text-gray-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {isActiveLink(link.href) && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#00516f] rounded-r-full animate-in slide-in-from-left-full duration-300"></span>
                      )}
                      <span className={isActiveLink(link.href) ? "ml-4" : ""}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="border-[#00516f] text-[#00516f] hover:bg-[#00516f] hover:text-white"
                    asChild
                  >
                    <a href="tel:+2252721263699">
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
