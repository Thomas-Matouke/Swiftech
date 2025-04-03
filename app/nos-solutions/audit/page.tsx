import Link from "next/link"
import Image from "next/image"
import { Search, FileText, Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Audit des Systèmes d'Information | Swiftech",
  description:
    "Évaluation complète de vos systèmes d'information pour identifier les vulnérabilités et améliorer votre posture de sécurité.",
}

export default function AuditPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Audit des Systèmes d&apos;Information</h1>
              <p className="text-xl text-blue-100">
                Évaluation complète de vos systèmes d&apos;information pour identifier les vulnérabilités et améliorer
                votre posture de sécurité.
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
                  alt="Swiftech Audit"
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
              Audit complet et méthodique
            </h2>
            <p className="text-xl text-gray-700">
              Nos services d&apos;audit des systèmes d&apos;information vous permettent d&apos;évaluer de manière
              objective et approfondie votre infrastructure IT, vos applications et vos processus. Nous identifions les
              vulnérabilités, les risques et les opportunités d&apos;amélioration pour renforcer votre sécurité et
              optimiser vos performances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Search,
                title: "Analyse approfondie",
                description:
                  "Évaluation détaillée de tous les composants de votre système d'information pour une vision complète.",
              },
              {
                icon: Shield,
                title: "Identification des risques",
                description:
                  "Détection des vulnérabilités et évaluation des risques potentiels pour votre organisation.",
              },
              {
                icon: FileText,
                title: "Recommandations concrètes",
                description: "Plan d'action détaillé avec des recommandations priorisées pour améliorer votre système.",
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
              Nos services d&apos;audit
            </h2>
            <p className="text-xl text-gray-700">
              Une approche complète pour évaluer tous les aspects de votre système d&apos;information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Audit de sécurité",
                description: "Évaluation approfondie de votre posture de sécurité informatique.",
                features: [
                  "Tests d'intrusion (pentest)",
                  "Analyse des vulnérabilités",
                  "Évaluation de la sécurité du réseau",
                  "Audit de la sécurité des applications",
                ],
              },
              {
                title: "Audit d'infrastructure",
                description: "Analyse de votre infrastructure IT pour identifier les points d'amélioration.",
                features: [
                  "Évaluation des serveurs et du stockage",
                  "Analyse de l'architecture réseau",
                  "Audit des systèmes de sauvegarde",
                  "Évaluation de la redondance et de la haute disponibilité",
                ],
              },
              {
                title: "Audit de conformité",
                description: "Vérification de la conformité de votre SI aux normes et réglementations.",
                features: [
                  "Conformité RGPD",
                  "Normes ISO 27001",
                  "Réglementations sectorielles",
                  "Bonnes pratiques de l'industrie",
                ],
              },
              {
                title: "Audit de performance",
                description: "Évaluation des performances de vos systèmes et applications.",
                features: [
                  "Analyse des temps de réponse",
                  "Identification des goulots d'étranglement",
                  "Optimisation des ressources",
                  "Recommandations d'amélioration",
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

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Notre méthodologie d&apos;audit
            </h2>
            <p className="text-xl text-gray-700">
              Une approche structurée et éprouvée pour garantir des résultats fiables et exploitables.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Cadrage",
                description:
                  "Définition du périmètre de l'audit, des objectifs et de la méthodologie en fonction de vos besoins spécifiques.",
              },
              {
                step: "2",
                title: "Collecte d'informations",
                description:
                  "Recueil des données techniques, entretiens avec les parties prenantes et analyse de la documentation existante.",
              },
              {
                step: "3",
                title: "Analyse et tests",
                description:
                  "Analyse approfondie des données collectées, réalisation de tests techniques et évaluation des risques.",
              },
              {
                step: "4",
                title: "Synthèse des résultats",
                description:
                  "Consolidation des résultats, identification des vulnérabilités et évaluation de leur impact potentiel.",
              },
              {
                step: "5",
                title: "Recommandations",
                description:
                  "Élaboration d'un plan d'action détaillé avec des recommandations priorisées et des mesures correctives.",
              },
              {
                step: "6",
                title: "Restitution",
                description:
                  "Présentation des résultats et des recommandations, accompagnement dans la mise en œuvre des actions correctives.",
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
              Découvrez comment nos audits ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Entreprise réglementée</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise du secteur financier devait s&apos;assurer de la conformité de son système
                    d&apos;information aux réglementations en vigueur et identifier les vulnérabilités potentielles.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Réalisation d&apos;un audit complet combinant tests d&apos;intrusion, analyse de vulnérabilités et
                    vérification de la conformité réglementaire.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Identification de 15 vulnérabilités critiques qui auraient pu compromettre la conformité réglementaire",
                      "Plan d'action détaillé pour remédier aux failles identifiées",
                      "Mise en conformité complète avec les réglementations sectorielles",
                      "Renforcement significatif de la posture de sécurité",
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
                <h3 className="text-2xl font-bold">Société acquise</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Dans le cadre d&apos;une fusion-acquisition, une entreprise avait besoin d&apos;évaluer l&apos;état
                    du système d&apos;information de la société cible avant de finaliser la transaction.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Audit complet du SI de la société cible, incluant l&apos;évaluation de l&apos;infrastructure, des
                    applications, de la sécurité et de la conformité.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Identification des risques techniques et de sécurité avant la finalisation de l'acquisition",
                      "Évaluation précise des investissements IT nécessaires post-acquisition",
                      "Plan d'intégration IT détaillé pour faciliter la fusion des systèmes",
                      "Négociation plus éclairée grâce à une vision claire de l'état du SI",
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
                Avantages de nos audits
              </h2>
              <div className="space-y-6">
                {[
                  "Vision objective et indépendante de votre système d'information",
                  "Identification précoce des vulnérabilités et des risques",
                  "Recommandations concrètes et priorisées pour améliorer votre SI",
                  "Conformité renforcée avec les réglementations en vigueur",
                  "Optimisation des performances et réduction des coûts",
                  "Sécurisation de vos données et de vos actifs numériques",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-white" />
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
                          "L'audit réalisé par Swiftech nous a permis d'identifier des vulnérabilités critiques que nous n'avions pas détectées. Leurs recommandations précises nous ont aidés à renforcer considérablement notre sécurité.",
                        author: "Jean Dupont",
                        company: "RSSI, Entreprise XYZ",
                      },
                      {
                        quote:
                          "La qualité et la profondeur de l'audit de Swiftech ont dépassé nos attentes. Leur approche méthodique et leurs explications claires nous ont permis de comprendre les enjeux et de mettre en œuvre les actions nécessaires.",
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
              Prêt à évaluer votre système d&apos;information ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en audit et découvrir comment nous
              pouvons vous aider.
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

