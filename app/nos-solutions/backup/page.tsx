import Link from "next/link"
import Image from "next/image"
import { Database, Clock, Shield, HardDrive, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sauvegarde as a Service | Swiftech",
  description:
    "Solutions de sauvegarde automatisées et sécurisées pour protéger vos données critiques et assurer la continuité de votre activité.",
}

export default function BackupPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sauvegarde as a Service</h1>
              <p className="text-xl text-blue-100">
                Protection de vos données critiques avec des solutions de sauvegarde automatisées et sécurisées pour
                assurer la continuité de votre activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full bg-white text-swiftech-blue hover:bg-blue-50">
                  <Link href="/devis">Demander un devis</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-0.5 bg-white/20 rounded-full blur-xl"></div>
                <Image
                  src="/images/SWIFTECH-picto.png"
                  alt="Swiftech Backup"
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
              Protection complète de vos données
            </h2>
            <p className="text-xl text-gray-700">
              Nos solutions de Sauvegarde as a Service (BaaS) vous permettent de protéger efficacement vos données
              critiques contre toutes les menaces : pannes matérielles, erreurs humaines, cyberattaques ou catastrophes
              naturelles. Nous garantissons la disponibilité et l&apos;intégrité de vos données pour assurer la
              continuité de votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Database,
                title: "Sauvegarde automatisée",
                description: "Sauvegarde automatique et régulière de vos données sans intervention manuelle requise.",
              },
              {
                icon: Shield,
                title: "Sécurité renforcée",
                description: "Protection de vos sauvegardes avec chiffrement avancé et stockage sécurisé.",
              },
              {
                icon: Clock,
                title: "Récupération rapide",
                description:
                  "Restauration rapide et fiable de vos données en cas d'incident pour minimiser les temps d'arrêt.",
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
              Nos solutions de sauvegarde
            </h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services pour protéger toutes vos données, où qu&apos;elles se trouvent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sauvegarde des serveurs",
                description: "Protection complète de vos serveurs physiques et virtuels.",
                features: [
                  "Sauvegarde incrémentielle et différentielle",
                  "Protection des environnements virtualisés",
                  "Sauvegarde à chaud sans interruption de service",
                  "Restauration complète ou granulaire",
                ],
              },
              {
                title: "Sauvegarde des postes de travail",
                description: "Protection des données de vos collaborateurs sur tous leurs appareils.",
                features: [
                  "Sauvegarde transparente en arrière-plan",
                  "Protection des ordinateurs fixes et portables",
                  "Restauration en libre-service",
                  "Synchronisation multi-appareils",
                ],
              },
              {
                title: "Sauvegarde des applications",
                description: "Protection spécifique pour vos applications critiques.",
                features: [
                  "Sauvegarde cohérente des bases de données",
                  "Protection des environnements Microsoft 365",
                  "Sauvegarde des applications métier",
                  "Restauration rapide des applications",
                ],
              },
              {
                title: "Archivage longue durée",
                description: "Conservation sécurisée de vos données sur le long terme.",
                features: [
                  "Archivage conforme aux réglementations",
                  "Rétention personnalisable",
                  "Stockage optimisé et économique",
                  "Recherche et récupération faciles",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="bg-swiftech-blue/10 rounded-full p-1 flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-swiftech-blue" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Fonctionnalités avancées</h2>
            <p className="text-xl text-gray-700">
              Nos solutions de sauvegarde intègrent des fonctionnalités avancées pour une protection optimale de vos
              données.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: HardDrive,
                title: "Déduplication et compression",
                description:
                  "Optimisation du stockage pour réduire les coûts et accélérer les sauvegardes et restaurations.",
              },
              {
                icon: Shield,
                title: "Chiffrement de bout en bout",
                description:
                  "Protection de vos données avec un chiffrement avancé pendant le transfert et le stockage.",
              },
              {
                icon: Clock,
                title: "Rétention flexible",
                description: "Politiques de conservation personnalisables selon vos besoins métier et réglementaires.",
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Cas d&apos;utilisation</h2>
            <p className="text-xl text-gray-700">
              Découvrez comment nos solutions de sauvegarde ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Cabinet médical</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un cabinet médical avec des données patients hautement sensibles avait besoin d&apos;une solution de
                    sauvegarde fiable et conforme aux réglementations sur la protection des données de santé.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;une solution de sauvegarde automatique avec chiffrement avancé, rétention
                    conforme aux exigences légales et restauration rapide.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Récupération complète des données après un incident majeur, avec un temps d'arrêt limité à 2 heures",
                      "Conformité totale avec les réglementations sur les données de santé",
                      "Automatisation complète des sauvegardes sans intervention manuelle",
                      "Tranquillité d'esprit pour l'équipe médicale",
                    ].map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-right">
              <div className="bg-swiftech-darkBlue text-white p-6">
                <h3 className="text-2xl font-bold">Bureau d&apos;études</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un bureau d&apos;études travaillant sur des projets complexes avait besoin de protéger ses fichiers
                    de conception et ses données de projet contre les pertes accidentelles et les pannes matérielles.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;une solution BaaS avec sauvegarde continue des postes de travail et des serveurs
                    de fichiers, avec restauration granulaire et versionnement.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction du temps de restauration des données de 24h à moins de 2h",
                      "Récupération facile des versions précédentes des fichiers de conception",
                      "Protection efficace contre les erreurs utilisateurs et les suppressions accidentelles",
                      "Amélioration de la productivité grâce à la réduction des pertes de données",
                    ].map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-swiftech-darkBlue rounded-full p-1 flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">
                Avantages de nos solutions de sauvegarde
              </h2>
              <div className="space-y-6">
                {[
                  "Protection complète contre toutes les causes de perte de données",
                  "Réduction significative des temps d'arrêt en cas d'incident",
                  "Conformité avec les exigences réglementaires en matière de protection des données",
                  "Réduction des coûts opérationnels grâce à l'automatisation",
                  "Évolutivité pour s'adapter à la croissance de vos données",
                  "Tranquillité d'esprit grâce à une surveillance proactive",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0">
                      <Zap className="h-5 w-5 text-white" />
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
                          "La solution de sauvegarde de Swiftech nous a sauvés lors d'une attaque par ransomware. Nous avons pu restaurer toutes nos données rapidement et reprendre notre activité sans payer de rançon.",
                        author: "Sophie Moreau",
                        company: "Directrice, Cabinet médical XYZ",
                      },
                      {
                        quote:
                          "La fiabilité et la simplicité de la solution BaaS de Swiftech nous ont impressionnés. Nous avons maintenant une confiance totale dans la protection de nos données critiques.",
                        author: "Pierre Durand",
                        company: "Responsable IT, Bureau d'études ABC",
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
              Prêt à sécuriser vos données critiques ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en sauvegarde et découvrir comment nos
              solutions BaaS peuvent vous aider.
            </p>
            <div className="flex justify-center animate-fade-in-up">
              <Button asChild size="lg" className="rounded-full bg-white text-swiftech-blue hover:bg-blue-50">
                <Link href="/devis">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

