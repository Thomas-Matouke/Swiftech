"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="mb-8">
              <Image src="/images/SWIFTECH-Wh.png" alt="Swiftech" width={180} height={50} className="object-contain" />
            </div>
            <p className="mb-8 text-gray-300">
              Solutions IT innovantes et services de cybersécurité pour les entreprises modernes.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61556892903070"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-swiftech-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/swiftech_cm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-swiftech-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/swiftech-cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-swiftech-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/swiftech_cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-swiftech-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6 border-b border-gray-700 pb-2">Nos Solutions</h3>
            <ul className="space-y-4">
              {[
                { name: "Infogérance IT", href: "/nos-solutions/infogerance" },
                { name: "Cybersécurité", href: "/nos-solutions/cybersecurity" },
                { name: "Cloud Computing", href: "/nos-solutions/cloud-computing" },
                { name: "Sauvegarde as a Service", href: "/nos-solutions/backup" },
                { name: "Ingénierie Logicielle", href: "/nos-solutions/software-engineering" },
                { name: "Support Informatique", href: "/nos-solutions/support" },
              ].map((solution) => (
                <li key={solution.name}>
                  <Link href={solution.href} className="text-gray-300 hover:text-swiftech-blue transition-colors">
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6 border-b border-gray-700 pb-2">Liens Rapides</h3>
            <ul className="space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "À propos", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Carrières", href: "/career" },
                { name: "Contact", href: "/contact" },
                { name: "Politique de confidentialité", href: "/privacy-policy" },
                { name: "Mentions légales", href: "/legal" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-swiftech-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-swiftech-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">332 Rue Foucauld Akwa, Douala, Cameroon</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-swiftech-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+237 653 815 919</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-swiftech-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">contact@swiftech.cm</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button asChild className="bg-swiftech-blue hover:bg-swiftech-darkBlue transition-all duration-300">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-4">&copy; 2025 Swiftech. Tous droits réservés.</p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Retour en haut</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}

