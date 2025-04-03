import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Users, Shield, BookOpen, CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Formation et Sensibilisation | Swiftech",
  description:
    "Programmes de formation pour sensibiliser votre personnel aux bonnes pratiques de sécurité informatique et réduire les risques humains.",
}

export default function FormationPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Formation et Sensibilisation</h1>
              <p className="text-xl text-blue-100">
                Programmes de formation pour sensibiliser votre personnel aux bonnes pratiques de sécurité informatique
                et réduire les risques humains.
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
                  alt="Swiftech Formation"
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
              Le facteur humain au cœur de la sécurité
            </h2>
            <p className="text-xl text-gray-700">
              Nos programmes de formation et de sensibilisation sont conçus pour transformer vos collaborateurs en
              première ligne de défense contre les cybermenaces. Nous proposons des formations adaptées à tous les
              niveaux, des utilisateurs finaux aux experts techniques, pour renforcer votre posture de sécurité globale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Users,
                title: "Sensibilisation utilisateurs",
                description:
                  "Programmes de sensibilisation pour tous vos collaborateurs sur les bonnes pratiques de sécurité au quotidien.",
              },
              {
                icon: Shield,
                title: "Formation technique",
                description:
                  "Formations spécialisées pour vos équipes IT sur les technologies et méthodologies de cybersécurité.",
              },
              {
                icon: GraduationCap,
                title: "Apprentissage continu",
                description:
                  "Programmes d'apprentissage continu pour maintenir les connaissances à jour face aux nouvelles menaces.",
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
              Nos programmes de formation
            </h2>
            <p className="text-xl text-gray-700">Des formations adaptées à tous les niveaux et à tous les besoins.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sensibilisation à la cybersécurité",
                description:
                  "Formation générale pour tous les collaborateurs sur les fondamentaux de la sécurité informatique.",
                features: [
                  "Reconnaissance des tentatives de phishing",
                  "Gestion sécurisée des mots de passe",
                  "Protection des données sensibles",
                  "Bonnes pratiques sur les réseaux sociaux",
                ],
              },
              {
                title: "Formation anti-phishing",
                description: "Programme spécifique pour lutter contre la principale menace visant les utilisateurs.",
                features: [
                  "Identification des emails malveillants",
                  "Simulation d'attaques de phishing",
                  "Procédures de signalement des tentatives",
                  "Réflexes à adopter face aux emails suspects",
                ],
              },
              {
                title: "Formation technique avancée",
                description: "Formations spécialisées pour les équipes IT et les responsables sécurité.",
                features: [
                  "Gestion des incidents de sécurité",
                  "Analyse des vulnérabilités",
                  "Sécurisation des infrastructures",
                  "Réponse aux cyberattaques",
                ],
              },
              {
                title: "Formation pour les dirigeants",
                description: "Sensibilisation adaptée aux décideurs sur les enjeux stratégiques de la cybersécurité.",
                features: [
                  "Gouvernance de la sécurité",
                  "Gestion des risques cyber",
                  "Conformité réglementaire",
                  "Communication de crise",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Notre approche pédagogique
            </h2>
            <p className="text-xl text-gray-700">
              Une méthodologie éprouvée pour des formations efficaces et engageantes.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Évaluation des besoins",
                description:
                  "Analyse de votre contexte, de vos risques spécifiques et du niveau de connaissance de vos collaborateurs.",
              },
              {
                step: "2",
                title: "Conception sur mesure",
                description:
                  "Élaboration de programmes de formation adaptés à vos besoins spécifiques et à votre culture d'entreprise.",
              },
              {
                step: "3",
                title: "Formation interactive",
                description:
                  "Sessions de formation engageantes combinant théorie, exemples concrets et exercices pratiques.",
              },
              {
                step: "4",
                title: "Simulations réalistes",
                description:
                  "Mise en situation avec des simulations d'attaques (phishing, social engineering) pour tester les réflexes.",
              },
              {
                step: "5",
                title: "Évaluation et suivi",
                description:
                  "Mesure des connaissances acquises et suivi régulier pour maintenir le niveau de vigilance.",
              },
              {
                step: "6",
                title: "Amélioration continue",
                description:
                  "Mise à jour régulière des contenus pour s'adapter à l'évolution des menaces et des technologies.",
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
              Découvrez comment nos programmes de formation ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Grande entreprise</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise de 500 employés faisait face à des incidents de sécurité récurrents liés à des
                    erreurs humaines, notamment des attaques de phishing réussies et des fuites de données
                    accidentelles.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;un programme complet de sensibilisation incluant des formations en présentiel,
                    des modules e-learning et des campagnes de simulation de phishing régulières.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction de 75% des incidents de sécurité liés aux erreurs humaines",
                      "Diminution de 90% du taux de clics sur les emails de phishing",
                      "Augmentation significative du signalement des tentatives d'attaque",
                      "Création d'une culture de sécurité durable au sein de l'entreprise",
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
                <h3 className="text-2xl font-bold">Administration publique</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une administration publique avec 200 agents devait renforcer sa posture de sécurité face à des
                    menaces croissantes et se conformer aux exigences réglementaires en matière de protection des
                    données.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;un programme de formation adapté au secteur public, avec des modules
                    spécifiques sur la protection des données sensibles et la conformité réglementaire.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Formation de 200 agents qui a permis d'éliminer presque totalement les incidents de phishing",
                      "Conformité renforcée avec les réglementations sur la protection des données",
                      "Amélioration des pratiques de sécurité au quotidien",
                      "Mise en place d'un réseau d'ambassadeurs de la sécurité au sein de l'organisation",
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
                Avantages de nos formations
              </h2>
              <div className="space-y-6">
                {[
                  "Réduction significative des incidents de sécurité liés au facteur humain",
                  "Création d'une culture de sécurité durable au sein de votre organisation",
                  "Conformité avec les exigences réglementaires en matière de formation",
                  "Adaptation continue aux nouvelles menaces et techniques d'attaque",
                  "Transformation de vos collaborateurs en première ligne de défense",
                  "Retour sur investissement rapide grâce à la réduction des incidents",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-white" />
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
                          "Le programme de formation de Swiftech a transformé notre approche de la sécurité. Nos collaborateurs sont maintenant beaucoup plus vigilants et constituent notre meilleure défense contre les cybermenaces.",
                        author: "Jean Dupont",
                        company: "DSI, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Les formations sont à la fois rigoureuses et engageantes. L'approche pédagogique de Swiftech, basée sur des cas concrets et des simulations, a permis une adoption rapide des bonnes pratiques par nos équipes.",
                        author: "Marie Martin",
                        company: "RSSI, Administration ABC",
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
              Prêt à renforcer votre première ligne de défense ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en formation et sensibilisation et
              découvrir comment nous pouvons vous aider.
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

