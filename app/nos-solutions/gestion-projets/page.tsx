import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ClipboardList, Clock, Target, CheckCircle, BarChart } from "lucide-react"

export const metadata = {
  title: "Gestion de Projets Informatiques | Swiftech",
  description:
    "Services de gestion de projets informatiques pour piloter vos initiatives IT de A à Z avec une méthodologie éprouvée et des résultats garantis.",
}

export default function GestionProjetsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Gestion de Projets IT</h1>
              <p className="text-xl text-blue-100">
                Pilotage de vos projets informatiques de A à Z, avec une méthodologie éprouvée et des résultats
                garantis.
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
                  alt="Swiftech Gestion de Projets"
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
              Gestion de projets efficace
            </h2>
            <p className="text-xl text-gray-700">
              Notre équipe de chefs de projets expérimentés vous accompagne dans la réalisation de vos projets
              informatiques, de la définition des besoins jusqu&apos;à la mise en production. Nous garantissons le
              respect des délais, des budgets et des objectifs fixés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: ClipboardList,
                title: "Méthodologie éprouvée",
                description: "Approche structurée et adaptée à chaque projet pour garantir des résultats optimaux.",
              },
              {
                icon: Clock,
                title: "Respect des délais",
                description:
                  "Planification rigoureuse et suivi continu pour livrer vos projets dans les temps impartis.",
              },
              {
                icon: Target,
                title: "Objectifs atteints",
                description: "Focus constant sur vos objectifs business pour maximiser le retour sur investissement.",
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
              Nos services de gestion de projets
            </h2>
            <p className="text-xl text-gray-700">
              Une approche complète pour garantir le succès de vos projets informatiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cadrage et planification",
                description: "Définition précise du périmètre, des objectifs et de la planification de votre projet.",
                features: [
                  "Analyse des besoins et des contraintes",
                  "Définition du périmètre et des livrables",
                  "Estimation des coûts et des délais",
                  "Élaboration du plan de projet",
                ],
              },
              {
                title: "Pilotage et coordination",
                description: "Coordination des équipes et des ressources pour assurer l'avancement optimal du projet.",
                features: [
                  "Animation des réunions de suivi",
                  "Coordination des intervenants",
                  "Gestion des risques et des problèmes",
                  "Reporting régulier et transparent",
                ],
              },
              {
                title: "Gestion du changement",
                description: "Accompagnement des utilisateurs dans l'adoption des nouvelles solutions.",
                features: [
                  "Plan de communication",
                  "Formation des utilisateurs",
                  "Documentation utilisateur",
                  "Support à la transition",
                ],
              },
              {
                title: "Suivi et contrôle qualité",
                description: "Suivi rigoureux de l'avancement et de la qualité des livrables.",
                features: [
                  "Suivi des indicateurs de performance",
                  "Tests et validation des livrables",
                  "Gestion des modifications",
                  "Contrôle de la qualité",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Notre méthodologie</h2>
            <p className="text-xl text-gray-700">
              Une approche structurée et éprouvée pour garantir le succès de vos projets.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Cadrage",
                description:
                  "Définition précise du périmètre, des objectifs, des contraintes et des critères de succès du projet.",
              },
              {
                step: "2",
                title: "Planification",
                description:
                  "Élaboration du plan de projet détaillé, identification des ressources nécessaires et des jalons clés.",
              },
              {
                step: "3",
                title: "Exécution",
                description:
                  "Mise en œuvre du plan de projet, coordination des équipes et des activités, suivi de l'avancement.",
              },
              {
                step: "4",
                title: "Contrôle",
                description:
                  "Suivi des indicateurs de performance, gestion des risques et des problèmes, ajustements si nécessaire.",
              },
              {
                step: "5",
                title: "Clôture",
                description:
                  "Validation des livrables, transfert de compétences, bilan du projet et capitalisation sur les enseignements.",
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
              Découvrez comment notre gestion de projets a aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Transformation digitale</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise de services financiers souhaitait moderniser l&apos;ensemble de ses systèmes
                    d&apos;information et digitaliser ses processus métier, un projet complexe impliquant de nombreuses
                    parties prenantes.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Mise en place d&apos;une équipe de gestion de projet dédiée, utilisant une approche agile adaptée,
                    avec des cycles courts et des livrables progressifs pour minimiser les risques.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Projet livré dans les délais et le budget, contrairement à 70% des projets similaires",
                      "Adoption rapide des nouvelles solutions par les utilisateurs",
                      "Augmentation de la productivité de 35% après la transformation",
                      "ROI atteint en 18 mois au lieu des 24 mois initialement prévus",
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
                <h3 className="text-2xl font-bold">Migration système critique</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une institution financière devait migrer son système central vers une nouvelle plateforme sans
                    perturber ses opérations quotidiennes et en garantissant la sécurité des données.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Élaboration d&apos;un plan de migration détaillé, avec des tests approfondis, des répétitions et un
                    plan de retour arrière, le tout piloté par une équipe expérimentée.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Migration réussie avec zéro interruption de service",
                      "100% de préservation des données",
                      "Amélioration des performances du système de 40%",
                      "Formation complète des équipes internes pour l'administration du nouveau système",
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
                Pourquoi choisir notre gestion de projets ?
              </h2>
              <div className="space-y-6">
                {[
                  "Expertise technique et méthodologique éprouvée",
                  "Approche adaptée à la taille et à la complexité de votre projet",
                  "Communication transparente et reporting régulier",
                  "Gestion proactive des risques et des problèmes",
                  "Focus sur la valeur ajoutée et le ROI",
                  "Transfert de compétences vers vos équipes",
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
                          "L'équipe de gestion de projet de Swiftech a été déterminante dans le succès de notre transformation digitale. Leur approche structurée et leur communication transparente nous ont permis de mener à bien ce projet complexe.",
                        author: "Sophie Moreau",
                        company: "Directrice SI, Entreprise XYZ",
                      },
                      {
                        quote:
                          "Ce qui distingue Swiftech, c'est leur capacité à comprendre nos enjeux métier et à adapter leur approche en conséquence. Ils ne se contentent pas de suivre une méthodologie rigide, mais l'adaptent à nos besoins spécifiques.",
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

      {/* KPIs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">
              Nos indicateurs de performance
            </h2>
            <p className="text-xl text-gray-700">
              Nous mesurons notre succès à travers des indicateurs clés qui garantissent la qualité de notre gestion de
              projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Clock,
                title: "Respect des délais",
                description: "95% de nos projets sont livrés dans les délais convenus ou avant.",
              },
              {
                icon: Target,
                title: "Respect du budget",
                description: "98% de nos projets respectent le budget initial ou génèrent des économies.",
              },
              {
                icon: BarChart,
                title: "Satisfaction client",
                description: "Note moyenne de satisfaction de 4.8/5 sur l'ensemble de nos projets.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Prêt à lancer votre projet IT ?</h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en gestion de projets et découvrir
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

