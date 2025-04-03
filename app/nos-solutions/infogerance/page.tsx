import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Server, Shield, Cloud, Database, Monitor, Headset } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"

export const metadata = {
  title: "Infogérance IT | Swiftech",
  description:
    "Services d'infogérance IT complets pour gérer et optimiser votre infrastructure informatique. Maintenance, surveillance, support et sécurité.",
}

export default function InfogerancePage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Infogérance IT</h1>
              <p className="text-xl text-blue-100">
                Gestion complète de votre infrastructure informatique pour vous permettre de vous concentrer sur votre
                cœur de métier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/devis"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-0.5 bg-white/20 rounded-full blur-xl"></div>
                <Image
                  src="/images/SWIFTECH-picto.png"
                  alt="Swiftech Infogérance IT"
                  width={300}
                  height={300}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Une gestion IT complète et proactive
            </h2>
            <p className="text-xl text-gray-700">
              Notre service d&apos;infogérance IT vous permet de déléguer la gestion de votre infrastructure
              informatique à nos experts, vous permettant ainsi de vous concentrer sur votre cœur de métier tout en
              bénéficiant d&apos;un système informatique performant, sécurisé et toujours disponible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Server,
                title: "Maintenance préventive",
                description:
                  "Surveillance proactive et maintenance régulière pour prévenir les problèmes avant qu&apos;ils n&apos;affectent votre activité.",
              },
              {
                icon: Shield,
                title: "Sécurité renforcée",
                description:
                  "Protection complète de votre infrastructure contre les menaces avec des mises à jour de sécurité et une surveillance continue.",
              },
              {
                icon: Headset,
                title: "Support réactif",
                description:
                  "Assistance technique disponible pour résoudre rapidement tout incident et minimiser les temps d&apos;arrêt.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up">
                <div className="flex justify-center mb-6">
                  <div className="bg-swiftech-blue/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-swiftech-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Nos services d&apos;infogérance
            </h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services pour gérer efficacement tous les aspects de votre infrastructure IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-animation">
            <ServiceCard
              icon={Server}
              title="Gestion de l'infrastructure"
              description="Administration complète de vos serveurs, réseaux, postes de travail et périphériques pour garantir leur bon fonctionnement."
              link="/nos-solutions/infogerance/infrastructure"
              useCases={[
                {
                  title: "Entreprise multi-sites",
                  description:
                    "Gestion centralisée de l'infrastructure répartie sur 5 sites, avec une réduction des coûts de 40%.",
                },
                {
                  title: "PME en croissance",
                  description:
                    "Mise à l'échelle progressive de l'infrastructure pour accompagner la croissance sans interruption de service.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Monitor}
              title="Surveillance 24/7"
              description="Monitoring continu de votre infrastructure pour détecter et résoudre les problèmes avant qu'ils n'impactent votre activité."
              link="/nos-solutions/infogerance/surveillance"
              useCases={[
                {
                  title: "Entreprise critique",
                  description:
                    "Détection précoce d'une défaillance matérielle qui aurait pu causer 48h d'arrêt de production.",
                },
                {
                  title: "Service e-commerce",
                  description:
                    "Surveillance des performances qui a permis d'optimiser les ressources et d'améliorer les temps de réponse de 60%.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Cloud}
              title="Gestion du cloud"
              description="Administration de vos environnements cloud (public, privé ou hybride) pour optimiser les performances et les coûts."
              link="/nos-solutions/infogerance/cloud"
              useCases={[
                {
                  title: "Startup SaaS",
                  description:
                    "Optimisation des ressources cloud qui a réduit les coûts mensuels de 35% tout en améliorant les performances.",
                },
                {
                  title: "Cabinet d'avocats",
                  description:
                    "Migration vers une solution hybride qui a amélioré la sécurité des données tout en facilitant la collaboration.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Database}
              title="Gestion des sauvegardes"
              description="Mise en place et administration de solutions de sauvegarde fiables pour protéger vos données critiques."
              link="/nos-solutions/infogerance/sauvegardes"
              useCases={[
                {
                  title: "Cabinet médical",
                  description:
                    "Récupération complète des données après un incident majeur, avec un temps d'arrêt limité à 2 heures.",
                },
                {
                  title: "Bureau d'études",
                  description:
                    "Système de sauvegarde automatisé qui a permis de récupérer des fichiers critiques supprimés accidentellement.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Shield}
              title="Sécurité informatique"
              description="Protection de votre infrastructure contre les menaces avec des solutions de sécurité adaptées à vos besoins."
              link="/nos-solutions/infogerance/securite"
              useCases={[
                {
                  title: "Entreprise financière",
                  description:
                    "Mise en place d'une stratégie de sécurité qui a bloqué 100% des tentatives d'intrusion sur une période de 12 mois.",
                },
                {
                  title: "PME industrielle",
                  description:
                    "Protection contre les ransomwares qui a évité une attaque majeure détectée et neutralisée en phase précoce.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Headset}
              title="Support utilisateurs"
              description="Assistance technique pour vos collaborateurs, avec un service helpdesk réactif et professionnel."
              link="/nos-solutions/infogerance/support"
              useCases={[
                {
                  title: "Réseau d'agences",
                  description:
                    "Réduction de 70% du temps de résolution des incidents grâce à un support de proximité efficace.",
                },
                {
                  title: "Entreprise de services",
                  description:
                    "Amélioration de la productivité des employés grâce à une assistance rapide et des formations ciblées.",
                },
              ]}
              className="animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">
                Pourquoi externaliser votre IT ?
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction des coûts informatiques jusqu'à 30%",
                  "Accès à une expertise technique diversifiée",
                  "Concentration sur votre cœur de métier",
                  "Infrastructure toujours à jour et sécurisée",
                  "Prédictibilité budgétaire avec des coûts mensuels fixes",
                  "Évolutivité pour accompagner votre croissance",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-swiftech-blue/5 rounded-3xl -z-10"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-swiftech-blue">Témoignages clients</h3>
                  <div className="space-y-6">
                    {[
                      {
                        quote:
                          "Depuis que nous avons confié notre informatique à Swiftech, nous avons réduit nos coûts IT de 40% tout en améliorant la fiabilité de notre système.",
                        author: "Jean Dupont",
                        company: "Directeur Général, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Le support technique de Swiftech est exceptionnel. Nos problèmes sont résolus rapidement et l'équipe est toujours disponible pour nous conseiller.",
                        author: "Marie Martin",
                        company: "DSI, Société ABC",
                      },
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-cta-gradient text-white animated-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Prêt à optimiser votre infrastructure IT ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en infogérance IT et découvrir comment
              nous pouvons vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/devis"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center"
              >
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Services associés</h2>
            <p className="text-xl text-gray-700">
              Découvrez nos autres services complémentaires pour une solution IT complète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                title: "Cybersecurity as a Service",
                description:
                  "Protection continue de vos systèmes avec SOC, gestion des incidents et sécurisation des réseaux.",
                link: "/nos-solutions/cybersecurity",
              },
              {
                title: "Cloud Computing",
                description: "Solutions cloud flexibles et évolutives pour moderniser votre infrastructure IT.",
                link: "/nos-solutions/cloud-computing",
              },
              {
                title: "Sauvegarde as a Service",
                description:
                  "Protection de vos données critiques avec des solutions de sauvegarde automatisées et sécurisées.",
                link: "/nos-solutions/backup",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button asChild className="rounded-full bg-swiftech-blue hover:bg-swiftech-darkBlue">
                    <Link href={service.link} className="flex items-center gap-2">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

