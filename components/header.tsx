"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const solutions = [
  { name: "Infogérance IT", href: "/nos-solutions/infogerance" },
  { name: "Cloud Computing", href: "/nos-solutions/cloud-computing" },
  { name: "Cybersécurité", href: "/nos-solutions/cybersecurity" },
  { name: "Sauvegarde as a Service", href: "/nos-solutions/backup" },
  { name: "Audit des S.I", href: "/nos-solutions/audit" },
  { name: "Formation et Sensibilisation", href: "/nos-solutions/formation" },
  { name: "Ingénierie Logicielle", href: "/nos-solutions/software-engineering" },
  { name: "Support Informatique", href: "/nos-solutions/support" },
  { name: "Swiftbridge", href: "/nos-solutions/swiftbridge" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-light tracking-wider">
              <span className="text-gray-700">SWIF</span>
              <span className="font-bold text-swiftech-blue">TECH</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-swiftech-blue relative",
                    pathname === "/"
                      ? "text-swiftech-blue after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-swiftech-blue"
                      : "text-gray-700",
                  )}
                >
                  Accueil
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-swiftech-blue relative",
                    pathname === "/about"
                      ? "text-swiftech-blue after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-swiftech-blue"
                      : "text-gray-700",
                  )}
                >
                  À propos
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-swiftech-blue relative bg-transparent",
                    pathname.startsWith("/nos-solutions")
                      ? "text-swiftech-blue after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-swiftech-blue"
                      : "text-gray-700",
                  )}
                >
                  Nos Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6 md:w-[600px] lg:w-[700px] bg-white/95 backdrop-blur-md shadow-md">
                    <div className="grid grid-cols-2 gap-4">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          href={solution.href}
                          className={cn(
                            "flex items-center space-x-2 p-3 transition-all duration-300 hover:text-swiftech-blue",
                            pathname === solution.href ? "text-swiftech-blue bg-gray-50" : "text-gray-700",
                          )}
                        >
                          <div className="text-sm font-medium">{solution.name}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link
                        href="/nos-solutions"
                        className="flex items-center justify-center w-full p-3 text-sm font-medium text-swiftech-blue hover:bg-gray-50 transition-all duration-300"
                      >
                        Voir toutes nos solutions
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/blog"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-swiftech-blue relative",
                    pathname === "/blog"
                      ? "text-swiftech-blue after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-swiftech-blue"
                      : "text-gray-700",
                  )}
                >
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-swiftech-blue relative",
                    pathname === "/contact"
                      ? "text-swiftech-blue after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-swiftech-blue"
                      : "text-gray-700",
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-transparent hover:bg-transparent text-swiftech-blue border border-swiftech-blue hover:bg-swiftech-blue/5 transition-all duration-300"
          >
            <Link href="/devis">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="text-gray-700 hover:text-swiftech-blue transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in-up">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/"
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                pathname === "/" ? "text-swiftech-blue" : "text-gray-700 hover:text-swiftech-blue",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                pathname === "/about" ? "text-swiftech-blue" : "text-gray-700 hover:text-swiftech-blue",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/nos-solutions"
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                pathname === "/nos-solutions" || pathname.startsWith("/nos-solutions/")
                  ? "text-swiftech-blue"
                  : "text-gray-700 hover:text-swiftech-blue",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos Solutions
            </Link>
            <Link
              href="/blog"
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                pathname === "/blog" ? "text-swiftech-blue" : "text-gray-700 hover:text-swiftech-blue",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                pathname === "/contact" ? "text-swiftech-blue" : "text-gray-700 hover:text-swiftech-blue",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Button
                asChild
                className="w-full bg-transparent hover:bg-transparent text-swiftech-blue border border-swiftech-blue hover:bg-swiftech-blue/5"
              >
                <Link href="/devis" onClick={() => setMobileMenuOpen(false)}>
                  Demander un devis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

