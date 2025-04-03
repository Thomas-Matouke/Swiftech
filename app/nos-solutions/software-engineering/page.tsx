import Link from "next/link"
import Image from "next/image"
import { Code, Database, Layout, Smartphone, CheckCircle, Zap, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Ingénierie Logicielle | Swiftech",
  description:
    "Services de développement sur mesure d'applications web, mobiles et logiciels adaptés à vos besoins spécifiques pour optimiser vos processus métier.",
}

export default function SoftwareEngineeringPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Ingénierie Logicielle</h1>
              <p className="text-xl text-blue-100">
                Développement sur mesure d&apos;applications et logiciels adaptés à vos besoins spécifiques pour
                optimiser vos processus métier.
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
                  alt="Swiftech Ingénierie Logicielle"
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
              Solutions logicielles sur mesure
            </h2>
            <p className="text-xl text-gray-700">
              Notre équipe d&apos;ingénieurs logiciels expérimentés conçoit et développe des applications sur mesure qui
              répondent parfaitement à vos besoins métier spécifiques. Nous utilisons les technologies les plus récentes
              pour créer des solutions innovantes, évolutives et sécurisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Layout,
                title: "Applications Web",
                description:
                  "Développement d'applications web modernes, réactives et accessibles sur tous les appareils.",
              },
              {
                icon: Smartphone,
                title: "Applications Mobiles",
                description: "Création d'applications mobiles natives ou cross-platform pour iOS et Android.",
              },
              {
                icon: Database,
                title: "Logiciels Métier",
                description: "Développement de logiciels spécifiques adaptés à vos processus et besoins uniques.",
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
              Nos services de développement
            </h2>
            <p className="text-xl text-gray-700">
              Une approche complète du développement logiciel, de la conception à la maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Conception et architecture",
                description: "Définition de l'architecture logicielle et conception des interfaces utilisateur.",
                features: [
                  "Analyse des besoins et spécifications",
                  "Conception UX/UI centrée utilisateur",
                  "Architecture logicielle évolutive",
                  "Prototypage et validation des concepts",
                ],
              },
              {
                title: "Développement d'applications web",
                description: "Création d'applications web modernes et performantes.",
                features: [
                  "Applications web progressives (PWA)",
                  "Interfaces utilisateur réactives",
                  "Intégration avec les systèmes existants",
                  "Optimisation des performances",
                ],
              },
              {
                title: "Développement mobile",
                description: "Conception et développement d'applications mobiles pour iOS et Android.",
                features: [
                  "Applications natives (Swift, Kotlin)",
                  "Applications cross-platform (React Native, Flutter)",
                  "Intégration des fonctionnalités natives",
                  "Publication sur les stores",
                ],
              },
              {
                title: "Logiciels métier sur mesure",
                description: "Développement de solutions logicielles adaptées à vos processus spécifiques.",
                features: [
                  "Automatisation des processus métier",
                  "Systèmes de gestion personnalisés",
                  "Tableaux de bord et reporting",
                  "Intégration avec vos outils existants",
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Technologies maîtrisées</h2>
            <p className="text-xl text-gray-700">
              Nous utilisons les technologies les plus récentes et les plus adaptées à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-left">
              <h3 className="text-xl font-bold mb-6 text-swiftech-blue">Développement Frontend</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React.js",
                  "Vue.js",
                  "Angular",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Material UI",
                  "Bootstrap",
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-swiftech-blue/10 rounded-full p-1">
                      <Code className="h-4 w-4 text-swiftech-blue" />
                    </div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-right">
              <h3 className="text-xl font-bold mb-6 text-swiftech-blue">Développement Backend</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Node.js", "Python", "Java", "PHP", "Express.js", "Django", "Spring Boot", "Laravel"].map(
                  (tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-swiftech-blue/10 rounded-full p-1">
                        <Code className="h-4 w-4 text-swiftech-blue" />
                      </div>
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-left">
              <h3 className="text-xl font-bold mb-6 text-swiftech-blue">Développement Mobile</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React Native", "Flutter", "Swift", "Kotlin", "iOS SDK", "Android SDK", "Expo", "Ionic"].map(
                  (tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-swiftech-blue/10 rounded-full p-1">
                        <Smartphone className="h-4 w-4 text-swiftech-blue" />
                      </div>
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-right">
              <h3 className="text-xl font-bold mb-6 text-swiftech-blue">Bases de données & Cloud</h3>
              <div className="grid grid-cols-2 gap-4">
                {["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Azure", "Google Cloud", "Firebase"].map(
                  (tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-swiftech-blue/10 rounded-full p-1">
                        <Database className="h-4 w-4 text-swiftech-blue" />
                      </div>
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Notre méthodologie</h2>
            <p className="text-xl text-gray-700">
              Une approche structurée pour garantir le succès de vos projets de développement.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Analyse des besoins",
                description:
                  "Nous analysons en profondeur vos besoins, vos processus métier et vos objectifs pour définir précisément le périmètre du projet.",
              },
              {
                step: "2",
                title: "Conception",
                description:
                  "Nous concevons l'architecture technique et les interfaces utilisateur en collaboration étroite avec vos équipes.",
              },
              {
                step: "3",
                title: "Développement",
                description:
                  "Nous développons votre solution en utilisant une approche agile avec des cycles courts et des livraisons régulières.",
              },
              {
                step: "4",
                title: "Tests",
                description:
                  "Nous effectuons des tests rigoureux pour garantir la qualité, la performance et la sécurité de votre application.",
              },
              {
                step: "5",
                title: "Déploiement",
                description:
                  "Nous déployons votre solution dans votre environnement de production avec une transition fluide.",
              },
              {
                step: "6",
                title: "Maintenance & Évolution",
                description:
                  "Nous assurons la maintenance de votre application et l'accompagnons dans son évolution pour répondre à vos besoins futurs.",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-swiftech-blue/20 last:border-0 last:pb-0 animate-fade-in-up"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-swiftech-blue"></div>
                <div className="bg-white p-6 border border-gray-100 ml-4 hover:shadow-lg transition-all duration-300">
                  <div className="text-sm font-semibold text-swiftech-blue mb-1">Étape {phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Cas d&apos;utilisation</h2>
            <p className="text-xl text-gray-700">
              Découvrez comment nos solutions logicielles ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Entreprise logistique</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise de logistique avait besoin d&apos;optimiser ses processus de livraison et de suivi
                    des colis pour améliorer sa compétitivité et réduire ses coûts opérationnels.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Développement d&apos;une application sur mesure intégrant géolocalisation, optimisation des
                    itinéraires, suivi en temps réel des livraisons et gestion automatisée des stocks.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Optimisation des processus de livraison qui a réduit les coûts de 25%",
                      "Amélioration de la satisfaction client grâce au suivi en temps réel",
                      "Réduction des erreurs de livraison de 90%",
                      "Augmentation de la productivité des chauffeurs de 30%",
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
                <h3 className="text-2xl font-bold">Agence immobilière</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une agence immobilière souhaitait moderniser sa gestion des biens et améliorer l&apos;expérience
                    client pour se démarquer dans un marché très concurrentiel.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Création d&apos;une plateforme complète comprenant un site web avec visites virtuelles, une
                    application mobile pour les agents et un système de gestion intégré pour l&apos;administration.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Augmentation des ventes de 40% en 6 mois grâce à l'automatisation",
                      "Réduction du temps de traitement administratif de 60%",
                      "Amélioration de l'expérience client avec un taux de satisfaction de 95%",
                      "Avantage concurrentiel significatif sur le marché local",
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">
                Pourquoi choisir notre ingénierie logicielle ?
              </h2>
              <div className="space-y-6">
                {[
                  "Solutions sur mesure parfaitement adaptées à vos besoins spécifiques",
                  "Expertise technique dans les technologies les plus récentes",
                  "Approche agile garantissant flexibilité et réactivité",
                  "Focus sur l'expérience utilisateur et l'ergonomie",
                  "Sécurité et conformité intégrées dès la conception",
                  "Support et maintenance à long terme de vos applications",
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
                          "L'application développée par Swiftech a transformé notre façon de travailler. Nos processus sont maintenant beaucoup plus efficaces et nos clients sont ravis de l'expérience utilisateur.",
                        author: "Marie Dupont",
                        company: "Directrice Générale, Entreprise XYZ",
                      },
                      {
                        quote:
                          "L'équipe de Swiftech a parfaitement compris nos besoins et a développé une solution qui dépasse nos attentes. Leur approche agile nous a permis de rester impliqués tout au long du projet.",
                        author: "Thomas Martin",
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
              Prêt à concrétiser votre projet logiciel ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en développement logiciel et découvrir
              comment nous pouvons vous aider.
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
    </main>
  )
}

