import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Headset, Clock, Users, CheckCircle, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Maintenance et Support Informatique | Swiftech",
  description:
    "Service de support informatique réactif et professionnel pour résoudre rapidement vos problèmes techniques et assurer la continuité de votre activité.",
}

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Support Informatique</h1>
              <p className="text-xl text-blue-100">
                Assistance technique réactive et professionnelle pour résoudre rapidement vos problèmes IT et assurer la
                continuité de votre activité.
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
                  alt="Swiftech Support Informatique"
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
              Support technique de qualité
            </h2>
            <p className="text-xl text-gray-700">
              Notre service de support informatique offre une assistance technique complète pour résoudre rapidement vos
              problèmes IT, minimiser les temps d&apos;arrêt et optimiser la productivité de vos équipes. Nos
              techniciens qualifiés sont disponibles pour vous accompagner au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Headset,
                title: "Support réactif",
                description:
                  "Assistance technique disponible pour résoudre rapidement tout incident et minimiser les temps d&apos;arrêt.",
              },
              {
                icon: Clock,
                title: "Disponibilité étendue",
                description:
                  "Support disponible selon vos besoins, avec possibilité d&apos;assistance 24/7 pour les infrastructures critiques.",
              },
              {
                icon: Users,
                title: "Équipe expérimentée",
                description:
                  "Techniciens certifiés avec une expertise approfondie dans tous les domaines de l&apos;IT.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos services de support</h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services d&apos;assistance pour répondre à tous vos besoins informatiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Helpdesk utilisateurs",
                description:
                  "Assistance de premier niveau pour résoudre les problèmes courants rencontrés par vos collaborateurs.",
                features: [
                  "Support téléphonique, email et chat",
                  "Résolution des problèmes matériels et logiciels",
                  "Assistance pour les applications métier",
                  "Gestion des accès et des comptes utilisateurs",
                ],
              },
              {
                title: "Support technique avancé",
                description:
                  "Intervention d'experts pour les problèmes complexes nécessitant une expertise technique approfondie.",
                features: [
                  "Diagnostic et résolution des problèmes réseau",
                  "Dépannage des serveurs et systèmes critiques",
                  "Résolution des problèmes de sécurité",
                  "Support pour les environnements virtualisés",
                ],
              },
              {
                title: "Maintenance préventive",
                description: "Actions proactives pour prévenir les problèmes avant qu'ils n'affectent votre activité.",
                features: [
                  "Mises à jour régulières des systèmes",
                  "Vérification de l'état des équipements",
                  "Optimisation des performances",
                  "Nettoyage et maintenance du matériel",
                ],
              },
              {
                title: "Support sur site",
                description:
                  "Intervention de nos techniciens dans vos locaux pour les problèmes nécessitant une présence physique.",
                features: [
                  "Installation et configuration de matériel",
                  "Dépannage des équipements sur place",
                  "Assistance aux utilisateurs en personne",
                  "Audit et conseil sur site",
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
                Les avantages de notre support
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction des temps d'arrêt et des interruptions d'activité",
                  "Amélioration de la productivité de vos équipes",
                  "Résolution rapide des problèmes techniques",
                  "Expertise technique diversifiée à votre disposition",
                  "Suivi et reporting détaillé des interventions",
                  "Approche proactive pour prévenir les problèmes",
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
                          "Le support technique de Swiftech est exceptionnel. Nos problèmes sont résolus rapidement et l'équipe est toujours disponible pour nous conseiller.",
                        author: "Marie Martin",
                        company: "DSI, Société ABC",
                      },
                      {
                        quote:
                          "Depuis que nous avons souscrit au service de support de Swiftech, le temps de résolution de nos incidents a été réduit de 70%. Un gain de productivité considérable pour nos équipes.",
                        author: "Thomas Dubois",
                        company: "Responsable IT, Entreprise XYZ",
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
              Découvrez comment notre service de support a aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Réseau d&apos;agences bancaires</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un réseau de 15 agences bancaires faisait face à des interruptions fréquentes de ses systèmes
                    informatiques, affectant le service client et générant des pertes financières importantes.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;un service de support dédié avec une équipe disponible 24/7, un système de
                    tickets priorisés et des interventions sur site rapides pour les problèmes critiques.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction de 80% du temps d'indisponibilité des systèmes",
                      "Amélioration de 95% du temps de résolution des incidents",
                      "Augmentation de la satisfaction client de 40%",
                      "Économies estimées à 200 000 € par an en évitant les temps d'arrêt",
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
                <h3 className="text-2xl font-bold">École internationale</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une école internationale avec 2000 élèves et 200 enseignants rencontrait des problèmes techniques
                    quotidiens qui perturbaient les cours et l&apos;administration.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;un helpdesk dédié avec support sur site régulier, formation des utilisateurs et
                    maintenance préventive des équipements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Résolution de 95% des problèmes techniques en moins de 4 heures",
                      "Réduction de 70% des incidents récurrents grâce à la maintenance préventive",
                      "Amélioration de la satisfaction des enseignants et du personnel administratif",
                      "Continuité pédagogique assurée sans interruption technique",
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

      {/* SLA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Nos engagements de service (SLA)
            </h2>
            <p className="text-xl text-gray-700">
              Nous nous engageons à respecter des niveaux de service précis pour garantir la qualité de notre support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Clock,
                title: "Temps de réponse",
                description:
                  "Prise en charge de votre demande en moins de 30 minutes pour les incidents critiques et 2 heures pour les demandes standard.",
              },
              {
                icon: BarChart,
                title: "Taux de résolution",
                description:
                  "Résolution de 90% des incidents dès le premier contact et 98% des problèmes dans les délais convenus.",
              },
              {
                icon: Users,
                title: "Satisfaction client",
                description:
                  "Mesure régulière de votre satisfaction avec un objectif de 95% de clients satisfaits ou très satisfaits.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Besoin d&apos;un support informatique fiable ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en support technique et découvrir comment
              nous pouvons vous aider.
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

