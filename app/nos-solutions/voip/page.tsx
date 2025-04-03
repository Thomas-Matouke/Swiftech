import Link from "next/link"
import Image from "next/image"
import { Phone, Smartphone, Headphones, MessageSquare, CheckCircle, Zap, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Communication d'entreprise (VOIP) | Swiftech",
  description:
    "Solutions de téléphonie IP modernes pour optimiser vos communications internes et externes avec une qualité supérieure et des coûts réduits.",
}

export default function VoipPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Communication d&apos;entreprise (VOIP)</h1>
              <p className="text-xl text-blue-100">
                Solutions de téléphonie IP modernes pour optimiser vos communications internes et externes avec une
                qualité supérieure et des coûts réduits.
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
                  alt="Swiftech VOIP"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Communications unifiées</h2>
            <p className="text-xl text-gray-700">
              Nos solutions de téléphonie IP (VOIP) transforment vos communications d&apos;entreprise en intégrant voix,
              messagerie et visioconférence dans une plateforme unifiée. Bénéficiez d&apos;une qualité audio supérieure,
              d&apos;une flexibilité accrue et d&apos;une réduction significative de vos coûts de communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Phone,
                title: "Téléphonie IP",
                description:
                  "Solutions de téléphonie professionnelle basées sur le protocole IP pour des communications de qualité.",
              },
              {
                icon: MessageSquare,
                title: "Communications unifiées",
                description:
                  "Intégration de la voix, de la messagerie et de la visioconférence dans une plateforme unique.",
              },
              {
                icon: Smartphone,
                title: "Mobilité",
                description:
                  "Accès à vos communications professionnelles depuis n'importe où et sur tous vos appareils.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos solutions VOIP</h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services pour moderniser vos communications d&apos;entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Centraux téléphoniques IP (IPBX)",
                description: "Solutions de téléphonie d'entreprise basées sur le protocole IP.",
                features: [
                  "Centraux téléphoniques virtuels",
                  "Gestion des appels avancée",
                  "Intégration avec vos applications métier",
                  "Évolutivité selon vos besoins",
                ],
              },
              {
                title: "Communications unifiées (UC)",
                description: "Plateforme intégrée pour toutes vos communications professionnelles.",
                features: [
                  "Messagerie instantanée professionnelle",
                  "Présence et statut des collaborateurs",
                  "Visioconférence HD",
                  "Partage d'écran et collaboration",
                ],
              },
              {
                title: "Centre de contact",
                description: "Solutions pour optimiser votre service client et vos communications externes.",
                features: [
                  "Distribution intelligente des appels",
                  "File d'attente et musique d'attente",
                  "Enregistrement des appels",
                  "Rapports et statistiques détaillés",
                ],
              },
              {
                title: "Mobilité et softphones",
                description: "Accès à vos communications professionnelles depuis n'importe où.",
                features: [
                  "Applications mobiles pour iOS et Android",
                  "Softphones pour ordinateurs",
                  "Numéro unique sur tous vos appareils",
                  "Transfert d'appels transparent",
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
              Nos solutions VOIP offrent des fonctionnalités avancées pour optimiser vos communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Headphones,
                title: "Standard automatique",
                description:
                  "Accueil téléphonique professionnel avec menus interactifs et routage intelligent des appels.",
              },
              {
                icon: Phone,
                title: "Conférence audio",
                description:
                  "Organisation de conférences téléphoniques avec plusieurs participants en haute qualité audio.",
              },
              {
                icon: MessageSquare,
                title: "Messagerie unifiée",
                description: "Réception de vos messages vocaux par email et gestion centralisée de vos communications.",
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
              Découvrez comment nos solutions VOIP ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Centre d&apos;appels</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un centre d&apos;appels de 50 agents faisait face à des coûts de communication élevés et à des
                    limitations techniques avec son système de téléphonie traditionnel.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Migration vers une solution VOIP complète avec centre de contact intégré, distribution intelligente
                    des appels, enregistrement et rapports détaillés.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction des coûts de communication de 60% tout en améliorant la qualité",
                      "Augmentation de la productivité des agents de 25%",
                      "Amélioration du taux de résolution au premier appel de 30%",
                      "Flexibilité accrue avec possibilité de télétravail pour les agents",
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
                <h3 className="text-2xl font-bold">Entreprise de services</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise de services avec 5 agences avait besoin d&apos;unifier ses communications et
                    d&apos;améliorer la collaboration entre ses équipes dispersées géographiquement.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;un système unifié qui a intégré téléphonie, messagerie et visioconférence avec un
                    plan de numérotation unique pour toutes les agences.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Communication transparente entre toutes les agences",
                      "Réduction des déplacements de 40% grâce à la visioconférence",
                      "Amélioration de la collaboration et de la productivité des équipes",
                      "Économies de 45% sur les coûts de communication",
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
                Avantages de nos solutions VOIP
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction significative des coûts de communication",
                  "Qualité audio supérieure pour des échanges plus clairs",
                  "Flexibilité et mobilité accrues pour vos collaborateurs",
                  "Fonctionnalités avancées pour optimiser vos processus",
                  "Évolutivité pour accompagner la croissance de votre entreprise",
                  "Intégration avec vos applications métier existantes",
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
                          "La migration vers la solution VOIP de Swiftech a transformé nos communications. Nous avons réduit nos coûts de 50% tout en bénéficiant de fonctionnalités avancées qui ont amélioré notre service client.",
                        author: "Sophie Moreau",
                        company: "Directrice, Entreprise XYZ",
                      },
                      {
                        quote:
                          "La qualité du déploiement et du support technique de Swiftech a été exceptionnelle. La transition s'est faite en douceur et nos équipes ont rapidement adopté le nouveau système.",
                        author: "Pierre Durand",
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
              Prêt à moderniser vos communications ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en téléphonie IP et découvrir comment
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
    </main>
  )
}

