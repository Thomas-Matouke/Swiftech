import Link from "next/link"
import Image from "next/image"
import { Network, Wifi, Server, Shield, CheckCircle, Zap, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Installation et Optimisation des Réseaux | Swiftech",
  description:
    "Conception, déploiement et optimisation d'infrastructures réseau performantes et sécurisées pour votre entreprise.",
}

export default function ReseauxPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Installation et Optimisation des Réseaux
              </h1>
              <p className="text-xl text-blue-100">
                Conception, déploiement et optimisation d&apos;infrastructures réseau performantes et sécurisées pour
                votre entreprise.
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
                  alt="Swiftech Réseaux"
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
              Réseaux performants et sécurisés
            </h2>
            <p className="text-xl text-gray-700">
              Nos experts en réseaux conçoivent, déploient et optimisent des infrastructures réseau adaptées à vos
              besoins spécifiques. Nous garantissons des performances optimales, une haute disponibilité et une sécurité
              renforcée pour tous vos échanges de données.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Network,
                title: "Conception sur mesure",
                description: "Architecture réseau adaptée à vos besoins spécifiques, évolutive et prête pour le futur.",
              },
              {
                icon: Wifi,
                title: "Connectivité optimale",
                description:
                  "Solutions filaires et sans fil pour une connectivité fluide dans tous vos espaces de travail.",
              },
              {
                icon: Shield,
                title: "Sécurité intégrée",
                description: "Protection de votre réseau contre les menaces avec des solutions de sécurité avancées.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos services réseaux</h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services pour concevoir, déployer et optimiser votre infrastructure réseau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Audit et conception réseau",
                description: "Analyse de vos besoins et conception d'une architecture réseau adaptée.",
                features: [
                  "Audit de l'infrastructure existante",
                  "Analyse des besoins actuels et futurs",
                  "Conception d'architecture réseau",
                  "Documentation technique détaillée",
                ],
              },
              {
                title: "Déploiement d'infrastructure",
                description: "Installation et configuration de tous les équipements réseau.",
                features: [
                  "Installation de switches et routeurs",
                  "Déploiement de solutions Wi-Fi",
                  "Configuration des VLANs et routage",
                  "Mise en place de la redondance",
                ],
              },
              {
                title: "Sécurisation réseau",
                description: "Protection de votre réseau contre les menaces internes et externes.",
                features: [
                  "Installation et configuration de pare-feu",
                  "Mise en place de VPN sécurisés",
                  "Segmentation réseau",
                  "Détection et prévention d'intrusion",
                ],
              },
              {
                title: "Optimisation et maintenance",
                description: "Amélioration continue des performances et maintenance préventive.",
                features: [
                  "Analyse des performances réseau",
                  "Optimisation de la bande passante",
                  "Résolution des problèmes de latence",
                  "Maintenance préventive et corrective",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Technologies et équipements
            </h2>
            <p className="text-xl text-gray-700">
              Nous travaillons avec les meilleurs équipements et technologies pour garantir des performances optimales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-left">
              <h3 className="text-xl font-bold mb-6 text-swiftech-blue">Équipements réseau</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Switches Cisco",
                  "Routeurs Cisco",
                  "Points d'accès Ubiquiti",
                  "Pare-feu Fortinet",
                  "Équipements MikroTik",
                  "Solutions SD-WAN",
                  "Load balancers",
                  "Contrôleurs Wi-Fi",
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-swiftech-blue/10 rounded-full p-1">
                      <Network className="h-4 w-4 text-swiftech-blue" />
                    </div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-right">
              <h3 className="text-xl font-bold mb-6 text-swiftech-blue">Solutions et protocoles</h3>
              <div className="grid grid-cols-2 gap-4">
                {["IPv4/IPv6", "OSPF/BGP", "MPLS", "QoS", "VLANs", "VPN IPsec/SSL", "802.1X", "RADIUS/TACACS+"].map(
                  (tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-swiftech-blue/10 rounded-full p-1">
                        <Server className="h-4 w-4 text-swiftech-blue" />
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Cas d&apos;utilisation</h2>
            <p className="text-xl text-gray-700">
              Découvrez comment nos solutions réseau ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Nouveau siège social</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise en pleine croissance emménageait dans un nouveau siège social de 3000m² et avait
                    besoin d&apos;une infrastructure réseau performante, sécurisée et évolutive pour 200 collaborateurs.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Conception et déploiement d&apos;une infrastructure réseau complète avec switches PoE, couverture
                    Wi-Fi haute densité, segmentation par VLANs et pare-feu nouvelle génération.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Infrastructure réseau haute performance avec 99,99% de disponibilité",
                      "Couverture Wi-Fi optimale dans tous les espaces de travail",
                      "Sécurité renforcée avec segmentation et contrôle d'accès",
                      "Évolutivité permettant de supporter la croissance de l'entreprise pendant 5 ans",
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
                <h3 className="text-2xl font-bold">Campus universitaire</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un campus universitaire faisait face à des problèmes de performance réseau et de couverture Wi-Fi
                    insuffisante pour ses 5000 étudiants et 500 enseignants.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Optimisation de l&apos;infrastructure existante avec remplacement stratégique d&apos;équipements,
                    reconfiguration du routage et déploiement d&apos;une solution Wi-Fi haute densité.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Multiplication par 3 des performances réseau sans remplacement matériel majeur",
                      "Couverture Wi-Fi à 100% sur l'ensemble du campus",
                      "Réduction de 80% des incidents réseau",
                      "Économie de 40% par rapport à un remplacement complet de l'infrastructure",
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
                Avantages de nos solutions réseau
              </h2>
              <div className="space-y-6">
                {[
                  "Performance optimale pour toutes vos applications critiques",
                  "Haute disponibilité grâce à des architectures redondantes",
                  "Sécurité renforcée contre les menaces internes et externes",
                  "Évolutivité pour accompagner la croissance de votre entreprise",
                  "Réduction des coûts opérationnels grâce à une gestion centralisée",
                  "Support technique expert pour une résolution rapide des incidents",
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
                          "L'infrastructure réseau déployée par Swiftech a considérablement amélioré nos performances et notre productivité. Leur expertise technique et leur approche méthodique ont fait toute la différence.",
                        author: "Jean Dupont",
                        company: "DSI, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Nous avons été impressionnés par la qualité de l'audit réseau réalisé par Swiftech et par les améliorations significatives apportées à notre infrastructure. Un investissement qui a rapidement porté ses fruits.",
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
              Prêt à optimiser votre infrastructure réseau ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en infrastructure réseau et découvrir
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

