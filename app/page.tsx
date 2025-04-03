import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield, Server, Cloud, Database, Code, Headset } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientsCarousel from "@/components/clients-carousel"
import TypingAnimation from "@/components/typing-animation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Luxurious & Minimalist */}
      <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#111827] -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image src="/images/luxury-pattern.png" alt="Background pattern" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-10 animate-fade-in-right">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-extralight tracking-tight leading-tight pt-10 md:pt-16">
                  VOTRE AGENCE DE <br />
                  <TypingAnimation />
                </h1>
                <div className="w-20 h-0.5 bg-swiftech-blue"></div>
              </div>
              <p className="text-xl text-gray-300 font-light">
                Swiftech vous accompagne dans votre transformation numérique avec des solutions IT sur mesure et
                sécurisées.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent hover:bg-white/10 text-white border border-white transition-all duration-300"
                >
                  <Link href="/contact">Demander un devis</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-swiftech-blue hover:bg-swiftech-darkBlue border-0 transition-all duration-300"
                >
                  <Link href="/nos-solutions">Découvrir nos solutions</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-swiftech-blue/10 rounded-full blur-3xl"></div>
                <Image
                  src="/images/SWIFTECH-picto-bl.png"
                  alt="Swiftech Logo"
                  width={350}
                  height={350}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview - Minimalist Design with Scroll Animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              Nos <span className="font-medium text-swiftech-blue">Solutions</span>
            </h2>
            <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions informatiques conçues pour optimiser, sécuriser et développer
              votre infrastructure IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Server,
                title: "Infogérance IT",
                description:
                  "Gestion complète de votre infrastructure informatique pour vous permettre de vous concentrer sur votre cœur de métier.",
                link: "/nos-solutions/infogerance",
              },
              {
                icon: Shield,
                title: "Cybersecurity as a Service",
                description:
                  "Protection continue de vos systèmes avec SOC, gestion des incidents et sécurisation des réseaux.",
                link: "/nos-solutions/cybersecurity",
              },
              {
                icon: Cloud,
                title: "Cloud Computing",
                description: "Solutions cloud flexibles et évolutives pour moderniser votre infrastructure IT.",
                link: "/nos-solutions/cloud-computing",
              },
              {
                icon: Database,
                title: "Sauvegarde as a Service",
                description:
                  "Protection de vos données critiques avec des solutions de sauvegarde automatisées et sécurisées.",
                link: "/nos-solutions/backup",
              },
              {
                icon: Code,
                title: "Ingénierie Logicielle",
                description: "Développement sur mesure d'applications et logiciels adaptés à vos besoins spécifiques.",
                link: "/nos-solutions/software-engineering",
              },
              {
                icon: Headset,
                title: "Swiftbridge",
                description:
                  "Logiciel de gestion des établissements scolaires, simplifiant l'administration et améliorant la communication.",
                link: "/nos-solutions/swiftbridge",
              },
            ].map((solution, index) => (
              <div key={index} className="group">
                <div
                  className="bg-white p-6 hover:shadow-sm transition-all duration-500 animate-fade-in-up border-b border-gray-100 transform hover:scale-105 h-full flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:text-swiftech-blue transition-colors duration-300">
                      <solution.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-center mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-center mb-6 text-sm flex-grow">{solution.description}</p>
                  <div className="flex justify-center mt-auto">
                    <Button
                      asChild
                      variant="link"
                      className="text-swiftech-blue hover:text-swiftech-darkBlue transition-all duration-300 p-0 text-sm"
                    >
                      <Link href={solution.link} className="flex items-center gap-1">
                        En savoir plus <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                  {solution.title === "Swiftbridge" && (
                    <div className="flex justify-center mt-3">
                      <Button
                        asChild
                        className="bg-swiftech-blue hover:bg-swiftech-darkBlue transition-all duration-300 mt-2 text-sm py-1 h-auto"
                      >
                        <a
                          href="https://www.swiftbridge.cm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          Visiter Swiftbridge <ArrowRight className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild className="bg-swiftech-blue hover:bg-swiftech-darkBlue transition-all duration-300">
              <Link href="/nos-solutions">Voir toutes nos solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              Nos <span className="font-medium text-swiftech-blue">Clients</span>
            </h2>
            <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ils nous font confiance pour leurs besoins en solutions IT et cybersécurité.
            </p>
          </div>

          <ClientsCarousel />
        </div>
      </section>

      {/* Why Choose Us - Minimalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-extralight mb-4">
                Pourquoi <span className="font-medium text-swiftech-blue">choisir Swiftech</span>
              </h2>
              <div className="w-20 h-0.5 bg-swiftech-blue mb-10"></div>
              <div className="space-y-8">
                {[
                  "Expertise technique de haut niveau dans tous les domaines IT",
                  "Solutions personnalisées adaptées à vos besoins spécifiques",
                  "Support réactif et disponible pour vous accompagner",
                  "Approche proactive de la sécurité informatique",
                  "Technologies innovantes pour vous garder compétitif",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-swiftech-blue/10 rounded-full p-1 flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-swiftech-blue" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button asChild className="bg-swiftech-blue hover:bg-swiftech-darkBlue transition-all duration-300">
                  <Link href="/about">À propos de nous</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-left">
              <div className="relative">
                <div className="bg-white p-10 shadow-sm">
                  <h3 className="text-2xl font-medium mb-8 text-swiftech-blue">Témoignages clients</h3>
                  <div className="space-y-8">
                    {[
                      {
                        quote:
                          "Swiftech a transformé notre infrastructure IT, améliorant notre productivité de 40% tout en renforçant notre sécurité.",
                        author: "Marie Dupont",
                        company: "Directrice, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Le support technique de Swiftech est exceptionnel. Ils répondent rapidement et résolvent efficacement tous nos problèmes IT.",
                        author: "Thomas Martin",
                        company: "DSI, Société ABC",
                      },
                    ].map((testimonial, index) => (
                      <div key={index} className="relative pl-8">
                        <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-swiftech-blue"></div>
                        <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-swiftech-blue text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4 animate-fade-in-up">
              Prêt à <span className="font-medium text-swiftech-blue">transformer</span> votre infrastructure IT ?
            </h2>
            <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-10 animate-fade-in-up">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment Swiftech peut vous aider
              à atteindre vos objectifs technologiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white border border-white transition-all duration-300"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-swiftech-blue hover:bg-swiftech-darkBlue border-0 transition-all duration-300"
              >
                <Link href="/nos-solutions">Explorer nos solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview - Minimalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              Dernières <span className="font-medium text-swiftech-blue">actualités IT</span>
            </h2>
            <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restez informé des dernières tendances et innovations dans le domaine de l'informatique et de la
              cybersécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 staggered-animation">
            {[
              {
                title: "Les meilleures pratiques de cybersécurité pour 2023",
                excerpt:
                  "Découvrez les stratégies essentielles pour protéger votre entreprise contre les cybermenaces émergentes.",
                date: "15 juin 2023",
                category: "Cybersécurité",
                slug: "/blog/cybersecurite-pratiques-2023",
              },
              {
                title: "Comment le Cloud Computing révolutionne les PME",
                excerpt:
                  "Analyse des avantages concurrentiels que le cloud apporte aux petites et moyennes entreprises.",
                date: "2 juin 2023",
                category: "Cloud",
                slug: "/blog/cloud-computing-pme",
              },
              {
                title: "L'importance d'un plan de reprise d'activité",
                excerpt:
                  "Pourquoi chaque entreprise devrait disposer d'un PRA solide et comment le mettre en place efficacement.",
                date: "28 mai 2023",
                category: "Continuité d'activité",
                slug: "/blog/plan-reprise-activite",
              },
            ].map((post, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="bg-white border-b border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-sm">
                  <div className="h-48 bg-gray-50 relative">
                    <div className="absolute top-4 right-4 bg-swiftech-blue text-white text-xs font-medium px-3 py-1">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      <Link href={post.slug} className="hover:text-swiftech-blue transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <Button asChild variant="link" className="text-swiftech-blue hover:text-swiftech-darkBlue p-0">
                      <Link href={post.slug} className="flex items-center gap-2">
                        Lire l'article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              className="border-swiftech-blue text-swiftech-blue hover:bg-swiftech-blue/5"
            >
              <Link href="/blog">Voir tous les articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

