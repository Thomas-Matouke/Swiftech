import Link from "next/link"
import Image from "next/image"
import { Video, Eye, Shield, Bell, CheckCircle, Zap, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Vidéosurveillance | Swiftech",
  description:
    "Systèmes de vidéosurveillance avancés pour sécuriser vos locaux et protéger vos actifs avec des technologies de pointe et une gestion centralisée.",
}

export default function VideosurveillancePage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Vidéosurveillance</h1>
              <p className="text-xl text-blue-100">
                Systèmes de vidéosurveillance avancés pour sécuriser vos locaux et protéger vos actifs avec une vision
                claire et une gestion centralisée.
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
                  alt="Swiftech Vidéosurveillance"
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
              Surveillance intelligente
            </h2>
            <p className="text-xl text-gray-700">
              Nos systèmes de vidéosurveillance offrent une protection complète de vos locaux grâce à des technologies
              avancées de détection et d&apos;analyse vidéo. Nous concevons des solutions sur mesure adaptées à vos
              besoins spécifiques de sécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Video,
                title: "Caméras HD/4K",
                description:
                  "Caméras haute définition offrant une qualité d'image exceptionnelle pour une identification précise.",
              },
              {
                icon: Eye,
                title: "Analyse vidéo intelligente",
                description:
                  "Détection automatique d'événements suspects grâce à l'intelligence artificielle et l'analyse comportementale.",
              },
              {
                icon: Bell,
                title: "Alertes en temps réel",
                description: "Notifications instantanées sur vos appareils en cas d'intrusion ou d'événement anormal.",
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
              Nos solutions de vidéosurveillance
            </h2>
            <p className="text-xl text-gray-700">
              Des solutions complètes et personnalisées pour répondre à tous vos besoins de sécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Vidéosurveillance IP",
                description: "Systèmes de caméras IP haute définition pour une surveillance précise et flexible.",
                features: [
                  "Caméras IP intérieures et extérieures",
                  "Résolution jusqu'à 4K Ultra HD",
                  "Vision nocturne avancée",
                  "Connectivité réseau sécurisée",
                ],
              },
              {
                title: "Analyse vidéo intelligente",
                description: "Technologies d'analyse vidéo basées sur l'IA pour une détection proactive des menaces.",
                features: [
                  "Détection d'intrusion périmétrique",
                  "Reconnaissance faciale",
                  "Détection d'objets abandonnés",
                  "Analyse comportementale",
                ],
              },
              {
                title: "Gestion centralisée",
                description:
                  "Solutions de gestion vidéo pour contrôler l'ensemble de votre système depuis une interface unique.",
                features: [
                  "Logiciel de gestion vidéo (VMS)",
                  "Accès à distance sécurisé",
                  "Gestion multi-sites",
                  "Intégration avec d'autres systèmes de sécurité",
                ],
              },
              {
                title: "Stockage et archivage",
                description: "Solutions de stockage sécurisées pour conserver vos enregistrements vidéo.",
                features: [
                  "Enregistreurs vidéo réseau (NVR)",
                  "Stockage cloud sécurisé",
                  "Archivage longue durée",
                  "Récupération facile des séquences",
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
                Avantages de nos systèmes
              </h2>
              <div className="space-y-6">
                {[
                  "Protection 24/7 de vos locaux et de vos actifs",
                  "Dissuasion efficace contre les intrusions et le vol",
                  "Résolution rapide des incidents grâce aux preuves vidéo",
                  "Réduction des coûts de sécurité humaine",
                  "Surveillance à distance depuis n'importe où",
                  "Intégration avec vos systèmes de sécurité existants",
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
                          "Le système de vidéosurveillance installé par Swiftech a permis de réduire les vols dans notre entrepôt de 95% et d'améliorer considérablement la sécurité de notre personnel.",
                        author: "Jean Dupont",
                        company: "Directeur Logistique, Entreprise XYZ",
                      },
                      {
                        quote:
                          "La qualité des images et l'analyse intelligente nous ont permis d'identifier rapidement plusieurs incidents et de prendre les mesures nécessaires. Un investissement qui a déjà été rentabilisé.",
                        author: "Marie Martin",
                        company: "Responsable Sécurité, Société ABC",
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
              Découvrez comment nos solutions de vidéosurveillance ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Entrepôt logistique</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un entrepôt logistique de 10 000 m² faisait face à des problèmes récurrents de vol de marchandises
                    et avait besoin d&apos;améliorer la sécurité de son personnel travaillant en horaires décalés.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Installation d&apos;un système complet de 45 caméras IP haute définition avec analyse vidéo
                    intelligente, détection périmétrique et stockage sécurisé des enregistrements pendant 30 jours.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction des pertes de 90% en moins de 6 mois",
                      "Amélioration du sentiment de sécurité du personnel",
                      "Optimisation des processus logistiques grâce à l'analyse vidéo",
                      "Retour sur investissement en moins d'un an",
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
                <h3 className="text-2xl font-bold">Réseau de boutiques</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une chaîne de 12 boutiques de luxe avait besoin d&apos;un système de surveillance unifié permettant
                    une gestion centralisée et une réaction rapide en cas d&apos;incident.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;une solution centralisée permettant la surveillance des 12 sites depuis un poste
                    de contrôle unique, avec alertes en temps réel et accès mobile sécurisé pour les responsables.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction des vols à l'étalage de 75%",
                      "Optimisation des ressources de sécurité grâce à la centralisation",
                      "Résolution rapide des incidents grâce aux alertes en temps réel",
                      "Amélioration de l'expérience client grâce à un environnement plus sécurisé",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Fonctionnalités avancées</h2>
            <p className="text-xl text-gray-700">
              Nos systèmes de vidéosurveillance intègrent les technologies les plus récentes pour une sécurité optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Shield,
                title: "Détection d'intrusion",
                description:
                  "Détection automatique des intrusions avec définition de zones et de règles personnalisées.",
              },
              {
                icon: Eye,
                title: "Reconnaissance faciale",
                description: "Identification des personnes et alertes en cas de détection de personnes non autorisées.",
              },
              {
                icon: Video,
                title: "Vision nocturne",
                description:
                  "Surveillance claire même dans l'obscurité totale grâce à des technologies infrarouge avancées.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Prêt à sécuriser vos locaux ?</h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en vidéosurveillance et découvrir comment
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

