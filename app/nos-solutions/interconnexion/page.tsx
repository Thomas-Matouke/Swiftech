import Link from "next/link"
import Image from "next/image"
import { Network, Globe, Lock, Zap, CheckCircle, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Interconnexion | Swiftech",
  description:
    "Solutions d'interconnexion sécurisées pour relier vos différents sites et optimiser vos communications avec une fiabilité et une performance maximales.",
}

export default function InterconnexionPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Interconnexion</h1>
              <p className="text-xl text-blue-100">
                Solutions d&apos;interconnexion sécurisées pour relier vos différents sites et optimiser vos
                communications avec une fiabilité et une performance maximales.
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
                  alt="Swiftech Interconnexion"
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
              Connectivité unifiée et sécurisée
            </h2>
            <p className="text-xl text-gray-700">
              Nos solutions d&apos;interconnexion vous permettent de relier efficacement vos différents sites et bureaux
              pour créer un réseau d&apos;entreprise unifié, sécurisé et performant. Nous concevons et déployons des
              infrastructures de communication fiables adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Network,
                title: "Connectivité multi-sites",
                description:
                  "Solutions pour relier vos différents sites avec une performance et une fiabilité optimales.",
              },
              {
                icon: Lock,
                title: "Sécurité intégrée",
                description:
                  "Protection de bout en bout de vos communications avec des technologies de chiffrement avancées.",
              },
              {
                icon: Zap,
                title: "Performance garantie",
                description: "Optimisation de la bande passante et qualité de service pour vos applications critiques.",
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
              Nos solutions d&apos;interconnexion
            </h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services pour répondre à tous vos besoins de connectivité inter-sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SD-WAN (Software-Defined WAN)",
                description:
                  "Solution de réseau étendu défini par logiciel pour une gestion centralisée et intelligente.",
                features: [
                  "Gestion centralisée du réseau",
                  "Optimisation dynamique du trafic",
                  "Sécurité intégrée",
                  "Déploiement et configuration simplifiés",
                ],
              },
              {
                title: "VPN site à site",
                description: "Connexions sécurisées entre vos différents sites via des tunnels VPN.",
                features: [
                  "Chiffrement de bout en bout",
                  "Authentification forte",
                  "Haute disponibilité",
                  "Support de multiples protocoles",
                ],
              },
              {
                title: "MPLS (MultiProtocol Label Switching)",
                description: "Réseau privé haute performance pour vos communications critiques.",
                features: [
                  "Qualité de service garantie",
                  "Latence minimale",
                  "Fiabilité maximale",
                  "Évolutivité selon vos besoins",
                ],
              },
              {
                title: "Liaisons dédiées",
                description: "Connexions point à point dédiées pour une performance maximale.",
                features: [
                  "Bande passante garantie",
                  "Latence constante",
                  "Sécurité renforcée",
                  "Support pour applications critiques",
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
              Nos solutions d&apos;interconnexion intègrent des fonctionnalités avancées pour une performance et une
              sécurité optimales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Wifi,
                title: "Qualité de Service (QoS)",
                description:
                  "Priorisation intelligente du trafic pour garantir les performances de vos applications critiques.",
              },
              {
                icon: Globe,
                title: "Routage dynamique",
                description: "Optimisation automatique des chemins réseau pour une efficacité maximale.",
              },
              {
                icon: Lock,
                title: "Sécurité avancée",
                description: "Protection complète avec chiffrement, authentification et contrôle d'accès.",
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
              Découvrez comment nos solutions d&apos;interconnexion ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Réseau de magasins</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une chaîne de 15 magasins avait besoin d&apos;interconnecter tous ses points de vente avec son siège
                    social pour centraliser la gestion des stocks, des ventes et des données clients.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;une solution SD-WAN avec gestion centralisée, optimisation du trafic et sécurité
                    intégrée pour tous les sites.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Interconnexion de 15 sites avec une réduction de 40% des coûts de communication",
                      "Amélioration de la fiabilité avec 99,99% de disponibilité",
                      "Centralisation efficace de la gestion des stocks et des ventes",
                      "Déploiement rapide de nouvelles applications métier sur l'ensemble du réseau",
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
                <h3 className="text-2xl font-bold">Entreprise internationale</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise avec des bureaux dans 5 pays différents avait besoin d&apos;unifier ses
                    communications et d&apos;optimiser les échanges de données entre ses différentes entités.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;une solution SD-WAN internationale avec optimisation WAN, sécurité renforcée et
                    redondance multi-opérateurs.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Solution SD-WAN qui a optimisé les communications entre 5 pays",
                      "Amélioration des performances des applications critiques de 60%",
                      "Renforcement de la sécurité des échanges internationaux",
                      "Réduction des coûts de télécommunication de 35%",
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
                Avantages de nos solutions d&apos;interconnexion
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction significative des coûts de communication entre sites",
                  "Amélioration des performances des applications critiques",
                  "Sécurisation complète de vos échanges de données",
                  "Simplification de la gestion de votre réseau étendu",
                  "Évolutivité pour accompagner la croissance de votre entreprise",
                  "Fiabilité accrue avec des solutions de redondance avancées",
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
                          "La solution d'interconnexion de Swiftech a transformé notre façon de travailler entre nos différents sites. Nous avons maintenant un réseau unifié, performant et sécurisé qui nous permet de collaborer efficacement.",
                        author: "Jean Dupont",
                        company: "DSI, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Grâce à la solution SD-WAN mise en place par Swiftech, nous avons considérablement amélioré les performances de nos applications critiques tout en réduisant nos coûts de télécommunication.",
                        author: "Marie Martin",
                        company: "Responsable IT, Société ABC",
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
              Prêt à interconnecter vos sites ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins d&apos;interconnexion et découvrir
              comment nous pouvons vous aider.
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

