import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Lock, AlertTriangle, Eye, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"

export const metadata = {
  title: "Cybersecurity as a Service | Swiftech",
  description:
    "Services de cybersécurité complets pour protéger votre entreprise contre les menaces numériques: SOC, gestion des incidents, tests d'intrusion et plus.",
}

export default function CybersecurityPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Cybersecurity as a Service</h1>
              <p className="text-xl text-blue-100">
                Protection complète et continue de votre infrastructure numérique contre les menaces émergentes.
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
                  alt="Swiftech Cybersecurity"
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
              Protection complète pour votre entreprise
            </h2>
            <p className="text-xl text-gray-700">
              Dans un monde où les cybermenaces évoluent constamment, la sécurité de vos systèmes d'information est
              cruciale. Notre service de Cybersecurity as a Service (CsaaS) offre une protection complète et proactive,
              adaptée aux besoins spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Shield,
                title: "Protection continue",
                description:
                  "Surveillance 24/7 de votre infrastructure pour détecter et neutraliser les menaces en temps réel.",
              },
              {
                icon: Lock,
                title: "Expertise spécialisée",
                description:
                  "Accès à une équipe d'experts en cybersécurité sans les coûts d'embauche de spécialistes à temps plein.",
              },
              {
                icon: AlertTriangle,
                title: "Réponse aux incidents",
                description: "Protocoles de réponse rapide en cas d'incident de sécurité pour minimiser les impacts.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Cas d'utilisation concrets
            </h2>
            <p className="text-xl text-gray-700">
              Découvrez comment nos solutions de cybersécurité ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Secteur bancaire</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une banque régionale faisait face à des tentatives d'intrusion de plus en plus sophistiquées et
                    avait besoin d'une protection renforcée pour ses systèmes critiques et les données sensibles de ses
                    clients.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d'un SOC 24/7 avec surveillance continue, analyse comportementale avancée et
                    protocoles de réponse aux incidents personnalisés pour le secteur financier.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Détection et neutralisation de 3 tentatives d'attaques ciblées en moins de 6 mois",
                      "Réduction de 95% du temps de réponse aux incidents de sécurité",
                      "Conformité totale avec les réglementations financières",
                      "Amélioration de la confiance des clients grâce à une meilleure protection des données",
                    ].map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0 mt-1">
                          <Shield className="h-4 w-4 text-white" />
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
                <h3 className="text-2xl font-bold">Commerce de détail</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une chaîne de magasins avec présence en ligne avait subi une attaque par ransomware qui avait
                    paralysé ses opérations pendant 3 jours, entraînant des pertes financières importantes.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d'une solution complète de cybersécurité incluant protection contre les ransomwares,
                    formation du personnel, segmentation du réseau et plan de reprise d'activité.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Aucune interruption d'activité due à des cyberattaques depuis l'implémentation",
                      "Réduction de 80% des incidents liés au phishing grâce à la formation des employés",
                      "Capacité de restauration des systèmes en moins de 2 heures en cas d'incident",
                      "Économies estimées à 200 000 € par an en évitant les temps d'arrêt",
                    ].map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-swiftech-darkBlue rounded-full p-1 flex-shrink-0 mt-1">
                          <Shield className="h-4 w-4 text-white" />
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

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Nos services de cybersécurité
            </h2>
            <p className="text-xl text-gray-700">
              Une gamme complète de services pour protéger tous les aspects de votre infrastructure numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-animation">
            <ServiceCard
              icon={Eye}
              title="Security Operations Center (SOC)"
              description="Centre de surveillance et d'opérations de sécurité qui surveille, détecte, analyse et répond aux incidents de cybersécurité 24/7."
              link="/nos-solutions/cybersecurity/soc"
              useCases={[
                {
                  title: "Entreprise multinationale",
                  description:
                    "Détection d'une attaque APT en cours et neutralisation avant tout impact sur les systèmes critiques.",
                },
                {
                  title: "Institution gouvernementale",
                  description:
                    "Réduction de 90% du temps de détection des menaces grâce à notre surveillance continue.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={AlertTriangle}
              title="Gestion des Incidents de Sécurité"
              description="Protocoles de réponse rapide et efficace aux incidents de sécurité pour minimiser les dommages et restaurer les opérations normales."
              link="/nos-solutions/cybersecurity/incident-management"
              useCases={[
                {
                  title: "Entreprise industrielle",
                  description:
                    "Réduction du temps de résolution des incidents de 24h à moins de 4h grâce à nos protocoles standardisés et notre équipe d'experts disponible 24/7.",
                },
                {
                  title: "Établissement de santé",
                  description:
                    "Intervention rapide suite à une tentative de violation de données qui a permis d'éviter toute fuite d'informations sensibles des patients.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Server}
              title="Sécurisation des Réseaux"
              description="Protection de vos réseaux locaux et VPN contre les intrusions et les accès non autorisés."
              link="/nos-solutions/cybersecurity/network-security"
              useCases={[
                {
                  title: "Entreprise avec télétravail",
                  description:
                    "Mise en place d'une solution VPN sécurisée qui a éliminé les vulnérabilités liées au travail à distance.",
                },
                {
                  title: "Réseau d'agences",
                  description:
                    "Segmentation du réseau qui a permis d'isoler une attaque et d'éviter sa propagation à l'ensemble du système.",
                },
              ]}
              className="animate-fade-in-up"
            />

            <ServiceCard
              icon={Lock}
              title="Mise en Place de Pare-Feu"
              description="Déploiement et configuration de pare-feu nouvelle génération pour filtrer le trafic réseau et bloquer les menaces."
              link="/nos-solutions/cybersecurity/firewall"
              useCases={[
                {
                  title: "Entreprise de e-commerce",
                  description:
                    "Réduction de 95% des tentatives d'intrusion grâce à notre solution de pare-feu avancée avec analyse comportementale.",
                },
                {
                  title: "PME en croissance",
                  description:
                    "Protection adaptative qui évolue avec l'entreprise, bloquant plus de 10 000 menaces par mois.",
                },
              ]}
              className="animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">
                Pourquoi choisir notre CsaaS ?
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction des coûts par rapport à une équipe de sécurité interne",
                  "Expertise spécialisée et accès aux dernières technologies de sécurité",
                  "Surveillance continue 24/7 de votre infrastructure",
                  "Réponse rapide aux incidents de sécurité",
                  "Conformité aux réglementations en vigueur",
                  "Adaptation continue aux nouvelles menaces",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0">
                      <Shield className="h-5 w-5 text-white" />
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
                          "Swiftech a transformé notre approche de la cybersécurité. Leur équipe a détecté et neutralisé une tentative d'intrusion qui aurait pu nous coûter des millions.",
                        author: "Marie Dupont",
                        company: "Directrice, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Le service de SOC 24/7 nous offre une tranquillité d'esprit inestimable. Nous savons que nos systèmes sont surveillés en permanence par des experts.",
                        author: "Thomas Martin",
                        company: "DSI, Société ABC",
                      },
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
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
              Prêt à sécuriser votre infrastructure ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en cybersécurité et découvrir comment notre
              CsaaS peut protéger votre entreprise.
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

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Services associés</h2>
            <p className="text-xl text-gray-700">
              Découvrez nos autres services complémentaires pour une protection complète.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                title: "Audit des Systèmes d'Information",
                description:
                  "Évaluation complète de vos systèmes pour identifier les vulnérabilités et améliorer votre posture de sécurité.",
                link: "/nos-solutions/audit",
              },
              {
                title: "Data Leak Prevention",
                description:
                  "Solutions pour prévenir les fuites de données sensibles et protéger vos informations confidentielles.",
                link: "/nos-solutions/data-leak-prevention",
              },
              {
                title: "Formation et Sensibilisation",
                description:
                  "Programmes de formation pour sensibiliser votre personnel aux bonnes pratiques de sécurité informatique.",
                link: "/nos-solutions/formation",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button asChild className="rounded-full bg-swiftech-blue hover:bg-swiftech-darkBlue">
                    <Link href={service.link} className="flex items-center gap-2">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

