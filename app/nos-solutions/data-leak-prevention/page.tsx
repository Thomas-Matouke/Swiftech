import Link from "next/link"
import Image from "next/image"
import { Shield, Lock, Eye, CheckCircle, Zap, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Data Leak Prevention | Swiftech",
  description:
    "Solutions pour prévenir les fuites de données sensibles et protéger vos informations confidentielles contre les menaces internes et externes.",
}

export default function DataLeakPreventionPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Data Leak Prevention</h1>
              <p className="text-xl text-blue-100">
                Solutions pour prévenir les fuites de données sensibles et protéger vos informations confidentielles
                contre les menaces internes et externes.
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
                  alt="Swiftech Data Leak Prevention"
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
              Protection complète des données
            </h2>
            <p className="text-xl text-gray-700">
              Nos solutions de Data Leak Prevention (DLP) vous permettent d&apos;identifier, de surveiller et de
              protéger vos données sensibles, où qu&apos;elles se trouvent. Nous vous aidons à prévenir les fuites de
              données, qu&apos;elles soient accidentelles ou malveillantes, pour préserver la confidentialité de vos
              informations critiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Eye,
                title: "Visibilité complète",
                description:
                  "Identification et classification de vos données sensibles, où qu'elles soient stockées ou utilisées.",
              },
              {
                icon: Shield,
                title: "Protection proactive",
                description:
                  "Prévention des fuites de données avant qu'elles ne se produisent grâce à des contrôles automatisés.",
              },
              {
                icon: Lock,
                title: "Conformité renforcée",
                description: "Respect des réglementations en matière de protection des données et de confidentialité.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos solutions DLP</h2>
            <p className="text-xl text-gray-700">
              Une approche complète pour protéger vos données à chaque étape de leur cycle de vie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "DLP pour les données au repos",
                description: "Protection des données stockées sur vos serveurs, bases de données et postes de travail.",
                features: [
                  "Découverte et classification automatique des données",
                  "Chiffrement des données sensibles",
                  "Contrôle des accès basé sur les rôles",
                  "Audit et reporting des accès aux données",
                ],
              },
              {
                title: "DLP pour les données en mouvement",
                description: "Sécurisation des données lors de leur transmission sur le réseau.",
                features: [
                  "Inspection du trafic réseau",
                  "Filtrage des communications",
                  "Blocage des transferts non autorisés",
                  "Chiffrement des communications",
                ],
              },
              {
                title: "DLP pour les données en utilisation",
                description:
                  "Protection des données lors de leur utilisation par les applications et les utilisateurs.",
                features: [
                  "Contrôle des actions utilisateurs",
                  "Prévention du copier-coller non autorisé",
                  "Blocage des captures d'écran",
                  "Surveillance des activités suspectes",
                ],
              },
              {
                title: "DLP pour les terminaux",
                description: "Protection des données sur les appareils mobiles et les postes de travail.",
                features: [
                  "Contrôle des périphériques USB",
                  "Gestion des appareils mobiles",
                  "Protection contre la fuite via email",
                  "Sécurisation du cloud et des applications web",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Notre approche DLP</h2>
            <p className="text-xl text-gray-700">
              Une méthodologie éprouvée pour mettre en place une stratégie DLP efficace et adaptée à vos besoins.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Découverte et classification",
                description:
                  "Identification et classification de vos données sensibles selon leur niveau de confidentialité et les réglementations applicables.",
              },
              {
                step: "2",
                title: "Analyse des risques",
                description:
                  "Évaluation des risques de fuite de données et identification des vecteurs potentiels d'exfiltration.",
              },
              {
                step: "3",
                title: "Définition des politiques",
                description:
                  "Élaboration de politiques de protection adaptées à vos besoins spécifiques et à votre environnement.",
              },
              {
                step: "4",
                title: "Déploiement des solutions",
                description:
                  "Mise en place des outils et technologies DLP avec une approche progressive pour minimiser l'impact sur vos opérations.",
              },
              {
                step: "5",
                title: "Formation et sensibilisation",
                description:
                  "Formation de vos équipes aux bonnes pratiques et sensibilisation aux risques liés aux fuites de données.",
              },
              {
                step: "6",
                title: "Surveillance et amélioration continue",
                description:
                  "Suivi régulier, analyse des incidents et ajustement des politiques pour une protection optimale dans la durée.",
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
              Découvrez comment nos solutions DLP ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Cabinet juridique</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un cabinet juridique manipulant des documents hautement confidentiels devait renforcer la protection
                    de ses données clients et prévenir toute fuite d&apos;informations sensibles.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;une solution DLP complète avec classification automatique des documents,
                    contrôle des accès, surveillance des communications et chiffrement des données sensibles.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Mise en place de contrôles qui ont empêché plusieurs tentatives d'exfiltration de documents confidentiels",
                      "Conformité renforcée avec les obligations de confidentialité client-avocat",
                      "Visibilité complète sur les flux de données sensibles",
                      "Réduction significative des risques de fuite accidentelle",
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
                <h3 className="text-2xl font-bold">Entreprise R&D</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise de R&D devait protéger ses propriétés intellectuelles contre l&apos;espionnage
                    industriel et les fuites accidentelles, tout en permettant la collaboration entre ses équipes.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;une solution DLP adaptée au secteur R&D avec protection des brevets, contrôle
                    granulaire des accès et surveillance des canaux de communication.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Protection efficace des propriétés intellectuelles contre l'espionnage industriel",
                      "Détection et blocage de plusieurs tentatives d'exfiltration de données sensibles",
                      "Maintien de la collaboration efficace entre les équipes grâce à des contrôles adaptés",
                      "Conformité avec les obligations contractuelles de confidentialité",
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
                Avantages de nos solutions DLP
              </h2>
              <div className="space-y-6">
                {[
                  "Protection complète contre les fuites de données sensibles",
                  "Visibilité sur l'utilisation et les flux de données confidentielles",
                  "Conformité avec les réglementations sur la protection des données",
                  "Réduction des risques liés aux menaces internes et externes",
                  "Préservation de la réputation et de la confiance des clients",
                  "Prévention des pertes financières liées aux fuites de données",
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
                          "La solution DLP de Swiftech nous a permis d'identifier et de protéger nos données les plus sensibles. Nous avons maintenant une visibilité complète sur nos flux d'informations et pouvons prévenir efficacement les fuites de données.",
                        author: "Sophie Moreau",
                        company: "RSSI, Cabinet juridique XYZ",
                      },
                      {
                        quote:
                          "Grâce à l'approche méthodique de Swiftech, nous avons pu mettre en place une stratégie DLP efficace sans perturber nos opérations. Leur expertise et leur accompagnement ont été déterminants dans le succès de ce projet.",
                        author: "Pierre Durand",
                        company: "Directeur R&D, Entreprise ABC",
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
              Prêt à protéger vos données sensibles ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en protection des données et découvrir
              comment nos solutions DLP peuvent vous aider.
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

