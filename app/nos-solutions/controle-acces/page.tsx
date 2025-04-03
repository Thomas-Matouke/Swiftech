import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lock, Key, Fingerprint, Shield, CheckCircle, Users } from "lucide-react"

export const metadata = {
  title: "Gestion des contrôles d'accès | Swiftech",
  description:
    "Solutions de contrôle d'accès physique et logique pour sécuriser vos locaux et vos systèmes informatiques contre les accès non autorisés.",
}

export default function ControleAccesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contrôle d&apos;Accès</h1>
              <p className="text-xl text-blue-100">
                Solutions intégrées de contrôle d&apos;accès physique et logique pour sécuriser vos locaux et vos
                systèmes informatiques.
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
                  alt="Swiftech Contrôle d'Accès"
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
              Sécurité complète des accès
            </h2>
            <p className="text-xl text-gray-700">
              Nos solutions de contrôle d&apos;accès offrent une protection complète pour vos locaux et vos systèmes
              informatiques. Nous intégrons des technologies avancées pour garantir que seules les personnes autorisées
              peuvent accéder à vos ressources physiques et numériques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Lock,
                title: "Contrôle d'accès physique",
                description:
                  "Systèmes de contrôle d'accès pour sécuriser les entrées, les zones sensibles et les équipements de votre entreprise.",
              },
              {
                icon: Key,
                title: "Contrôle d'accès logique",
                description:
                  "Solutions d'authentification et de gestion des identités pour protéger vos systèmes informatiques et vos données.",
              },
              {
                icon: Fingerprint,
                title: "Authentification biométrique",
                description:
                  "Technologies biométriques avancées pour une identification précise et sécurisée des utilisateurs.",
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
              Nos solutions de contrôle d&apos;accès
            </h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de solutions pour sécuriser tous les aspects de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Contrôle d'accès aux bâtiments",
                description:
                  "Systèmes de contrôle d'accès pour sécuriser les entrées et les zones sensibles de vos locaux.",
                features: [
                  "Lecteurs de badges et cartes sans contact",
                  "Systèmes de reconnaissance biométrique",
                  "Portiques et tourniquets sécurisés",
                  "Gestion centralisée des accès",
                ],
              },
              {
                title: "Authentification multi-facteurs",
                description:
                  "Solutions d'authentification renforcée pour protéger l'accès à vos systèmes informatiques.",
                features: [
                  "Authentification à deux facteurs (2FA)",
                  "Jetons de sécurité physiques",
                  "Authentification biométrique",
                  "Authentification basée sur les certificats",
                ],
              },
              {
                title: "Gestion des identités et des accès",
                description:
                  "Solutions pour gérer efficacement les identités et les droits d'accès de vos utilisateurs.",
                features: [
                  "Provisionnement et déprovisionnement automatisés",
                  "Gestion des rôles et des privilèges",
                  "Single Sign-On (SSO)",
                  "Audit et reporting des accès",
                ],
              },
              {
                title: "Vidéosurveillance intégrée",
                description: "Systèmes de vidéosurveillance intégrés à votre solution de contrôle d'accès.",
                features: [
                  "Caméras haute définition",
                  "Détection de mouvement intelligente",
                  "Reconnaissance faciale",
                  "Stockage sécurisé des enregistrements",
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">
                Avantages de nos solutions
              </h2>
              <div className="space-y-6">
                {[
                  "Sécurité renforcée pour vos locaux et vos systèmes informatiques",
                  "Réduction des risques d'accès non autorisés et de vols",
                  "Traçabilité complète des accès physiques et logiques",
                  "Conformité aux réglementations en matière de sécurité",
                  "Gestion centralisée et simplifiée des droits d'accès",
                  "Intégration avec vos systèmes de sécurité existants",
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
                          "Le système de contrôle d'accès mis en place par Swiftech a considérablement renforcé la sécurité de nos locaux tout en simplifiant la gestion des accès pour nos employés.",
                        author: "Sophie Moreau",
                        company: "Directrice Sécurité, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Grâce à la solution d'authentification multi-facteurs de Swiftech, nous avons éliminé les risques liés aux mots de passe faibles et renforcé la protection de nos données sensibles.",
                        author: "Pierre Durand",
                        company: "RSSI, Société ABC",
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Cas d&apos;utilisation</h2>
            <p className="text-xl text-gray-700">
              Découvrez comment nos solutions de contrôle d&apos;accès ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Immeuble de bureaux</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un immeuble de bureaux abritant plusieurs entreprises avait besoin d&apos;un système de contrôle
                    d&apos;accès permettant de gérer les accès des employés et des visiteurs tout en assurant la
                    sécurité des zones communes et privatives.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;un système unifié qui a intégré contrôle d&apos;accès physique et
                    authentification informatique avec des badges RFID, des lecteurs biométriques pour les zones
                    sensibles et une gestion centralisée des droits.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Élimination complète des accès non autorisés",
                      "Gestion simplifiée des droits d'accès pour les différentes entreprises",
                      "Traçabilité complète des entrées et sorties",
                      "Réduction des coûts de sécurité humaine de 30%",
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
                <h3 className="text-2xl font-bold">Site industriel</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un site industriel avec des zones à haut risque devait sécuriser l&apos;accès à ses installations
                    tout en permettant une circulation fluide des employés et des sous-traitants.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;une solution combinant contrôle d&apos;accès par badges, authentification
                    biométrique pour les zones critiques et intégration avec le système de vidéosurveillance.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction de 100% des accès non autorisés aux zones sensibles",
                      "Amélioration de la sécurité des employés dans les zones dangereuses",
                      "Conformité aux normes de sécurité industrielle",
                      "Gestion efficace des accès temporaires pour les sous-traitants",
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Fonctionnalités clés</h2>
            <p className="text-xl text-gray-700">
              Nos solutions de contrôle d&apos;accès offrent des fonctionnalités avancées pour une sécurité optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Shield,
                title: "Sécurité multicouche",
                description: "Combinaison de plusieurs technologies d'authentification pour une sécurité renforcée.",
              },
              {
                icon: Users,
                title: "Gestion centralisée",
                description: "Interface unique pour gérer tous les aspects du contrôle d'accès physique et logique.",
              },
              {
                icon: Lock,
                title: "Contrôle granulaire",
                description: "Définition précise des droits d'accès par utilisateur, groupe, zone et plage horaire.",
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

      {/* CTA Section */}
      <section className="py-20 bg-cta-gradient text-white animated-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Prêt à sécuriser vos accès ?</h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en contrôle d&apos;accès et découvrir
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

