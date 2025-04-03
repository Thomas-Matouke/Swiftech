import Link from "next/link"
import Image from "next/image"
import { Cloud, Shield, Zap, CheckCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Cloud Computing | Swiftech",
  description:
    "Solutions cloud flexibles et évolutives pour moderniser votre infrastructure IT, réduire vos coûts et améliorer votre agilité.",
}

export default function CloudComputingPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Cloud Computing</h1>
              <p className="text-xl text-blue-100">
                Solutions cloud flexibles et évolutives pour moderniser votre infrastructure IT, réduire vos coûts et
                améliorer votre agilité.
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
                  alt="Swiftech Cloud Computing"
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
              Transformez votre infrastructure IT
            </h2>
            <p className="text-xl text-gray-700">
              Nos solutions de cloud computing vous permettent de moderniser votre infrastructure IT en migrant vers des
              environnements cloud flexibles, évolutifs et économiques. Nous vous accompagnons à chaque étape de votre
              transition vers le cloud pour maximiser les bénéfices et minimiser les risques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Cloud,
                title: "Flexibilité maximale",
                description: "Adaptez vos ressources IT en fonction de vos besoins réels pour une efficacité optimale.",
              },
              {
                icon: Zap,
                title: "Performance accrue",
                description: "Bénéficiez de technologies de pointe pour des performances supérieures à moindre coût.",
              },
              {
                icon: Shield,
                title: "Sécurité renforcée",
                description: "Protection avancée de vos données et applications dans des environnements sécurisés.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos solutions cloud</h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services cloud pour répondre à tous vos besoins informatiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Infrastructure as a Service (IaaS)",
                description: "Ressources d'infrastructure virtualisées pour remplacer votre matériel physique.",
                features: [
                  "Serveurs virtuels haute performance",
                  "Stockage cloud évolutif",
                  "Réseaux virtuels sécurisés",
                  "Haute disponibilité et redondance",
                ],
              },
              {
                title: "Platform as a Service (PaaS)",
                description: "Plateformes de développement et d'exécution pour vos applications.",
                features: [
                  "Environnements de développement intégrés",
                  "Bases de données managées",
                  "Middleware et services d'intégration",
                  "Déploiement automatisé",
                ],
              },
              {
                title: "Software as a Service (SaaS)",
                description: "Applications métier accessibles à la demande via internet.",
                features: [
                  "Messagerie et collaboration",
                  "CRM et ERP cloud",
                  "Outils de productivité",
                  "Applications métier spécialisées",
                ],
              },
              {
                title: "Cloud hybride et multi-cloud",
                description: "Solutions combinant cloud public, privé et infrastructure sur site.",
                features: [
                  "Intégration transparente des environnements",
                  "Orchestration multi-cloud",
                  "Gestion unifiée",
                  "Optimisation des coûts",
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

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Notre approche cloud</h2>
            <p className="text-xl text-gray-700">Une méthodologie éprouvée pour une migration réussie vers le cloud.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Évaluation",
                description:
                  "Analyse de votre infrastructure existante, de vos applications et de vos besoins pour définir la stratégie cloud optimale.",
              },
              {
                step: "2",
                title: "Planification",
                description:
                  "Élaboration d'un plan de migration détaillé, incluant le choix des services cloud, l'architecture cible et le calendrier.",
              },
              {
                step: "3",
                title: "Migration",
                description:
                  "Transfert progressif et sécurisé de vos données et applications vers le cloud, avec tests approfondis à chaque étape.",
              },
              {
                step: "4",
                title: "Optimisation",
                description: "Ajustement des ressources cloud pour maximiser les performances et minimiser les coûts.",
              },
              {
                step: "5",
                title: "Gestion",
                description:
                  "Administration continue de votre environnement cloud avec surveillance, maintenance et support.",
              },
              {
                step: "6",
                title: "Évolution",
                description:
                  "Amélioration continue de votre infrastructure cloud pour l'adapter à l'évolution de vos besoins.",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-swiftech-blue/20 last:border-0 last:pb-0 animate-fade-in-up"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-swiftech-blue"></div>
                <div className="bg-white p-6 border border-gray-100 ml-4 hover:shadow-lg transition-all duration-300">
                  <div className="text-sm font-semibold text-swiftech-blue mb-1">Phase {phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
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
              Découvrez comment nos solutions cloud ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Startup en forte croissance</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une startup en pleine expansion avait besoin d&apos;une infrastructure IT capable de s&apos;adapter
                    rapidement à sa croissance sans nécessiter d&apos;investissements matériels importants.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Migration vers une infrastructure cloud entièrement évolutive avec des ressources qui
                    s&apos;adaptent automatiquement à la demande.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Migration vers le cloud qui a permis de multiplier par 5 la capacité de traitement sans investissement matériel",
                      "Réduction des coûts d'infrastructure de 40%",
                      "Capacité à faire face aux pics d'activité sans interruption de service",
                      "Mise sur le marché accélérée des nouvelles fonctionnalités",
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
                <h3 className="text-2xl font-bold">Cabinet d&apos;architectes</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un cabinet d&apos;architectes avait besoin de permettre à ses équipes de collaborer efficacement sur
                    des projets complexes, avec des fichiers volumineux, depuis différents sites.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;une solution collaborative cloud permettant le travail simultané sur des
                    projets complexes, avec stockage cloud haute performance et accès sécurisé à distance.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Amélioration de la collaboration entre les équipes dispersées géographiquement",
                      "Réduction du temps de partage des fichiers de plusieurs heures à quelques minutes",
                      "Accès sécurisé aux projets depuis n'importe où",
                      "Économies significatives sur les déplacements et l'infrastructure IT",
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
                Avantages du cloud computing
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction significative des coûts d'infrastructure et de maintenance",
                  "Flexibilité et évolutivité pour s'adapter rapidement aux besoins changeants",
                  "Accès à vos données et applications depuis n'importe où",
                  "Haute disponibilité et continuité d'activité renforcée",
                  "Sécurité avancée avec les dernières technologies de protection",
                  "Innovation accélérée grâce à l'accès aux technologies de pointe",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0">
                      <Globe className="h-5 w-5 text-white" />
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
                          "La migration vers le cloud orchestrée par Swiftech a transformé notre façon de travailler. Nous avons gagné en agilité et réduit nos coûts IT de 35%, tout en améliorant nos performances.",
                        author: "Jean Dupont",
                        company: "CEO, Startup XYZ",
                      },
                      {
                        quote:
                          "L'expertise cloud de Swiftech nous a permis de mettre en place une solution collaborative qui a révolutionné notre façon de travailler. La transition s'est faite en douceur et le support est excellent.",
                        author: "Marie Martin",
                        company: "Directrice, Cabinet d'architectes ABC",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Prêt à migrer vers le cloud ?</h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en cloud computing et découvrir comment
              nous pouvons vous aider à transformer votre infrastructure IT.
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

