import Link from "next/link"
import Image from "next/image"
import { Database, BarChart, Layers, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Intégration et développement ERP | Swiftech",
  description:
    "Implémentation et personnalisation de solutions ERP adaptées à vos besoins spécifiques pour optimiser vos processus d'entreprise.",
}

export default function ErpPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Intégration et développement ERP</h1>
              <p className="text-xl text-blue-100">
                Implémentation et personnalisation de solutions ERP adaptées à vos besoins spécifiques pour optimiser
                vos processus d'entreprise.
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
                  alt="Swiftech ERP"
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
              Optimisez vos processus d'entreprise
            </h2>
            <p className="text-xl text-gray-700">
              Nos solutions ERP (Enterprise Resource Planning) vous permettent d'intégrer et de gérer efficacement
              l'ensemble de vos processus métier au sein d'une plateforme unifiée. Nous concevons, implémentons et
              personnalisons des solutions ERP adaptées à vos besoins spécifiques pour améliorer votre efficacité
              opérationnelle et votre prise de décision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                icon: Database,
                title: "Centralisation des données",
                description:
                  "Unification de toutes vos données d'entreprise dans un système central pour une vision globale et cohérente.",
              },
              {
                icon: Layers,
                title: "Processus intégrés",
                description:
                  "Intégration fluide de tous vos processus métier pour éliminer les silos et optimiser les flux de travail.",
              },
              {
                icon: BarChart,
                title: "Analyse en temps réel",
                description:
                  "Tableaux de bord et rapports en temps réel pour une prise de décision éclairée et réactive.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos services ERP</h2>
            <p className="text-xl text-gray-700">
              Une approche complète pour l'implémentation et la personnalisation de votre solution ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Conseil et analyse des besoins",
                description:
                  "Évaluation approfondie de vos processus et définition des exigences pour votre solution ERP.",
                features: [
                  "Audit des processus existants",
                  "Analyse des besoins fonctionnels",
                  "Définition des objectifs et KPIs",
                  "Élaboration de la feuille de route",
                ],
              },
              {
                title: "Implémentation ERP",
                description: "Déploiement et configuration de solutions ERP adaptées à votre secteur d'activité.",
                features: [
                  "Installation et configuration",
                  "Paramétrage selon vos processus",
                  "Migration des données",
                  "Tests et validation",
                ],
              },
              {
                title: "Développement sur mesure",
                description:
                  "Personnalisation et développement de modules spécifiques pour répondre à vos besoins uniques.",
                features: [
                  "Développement de modules spécifiques",
                  "Interfaces utilisateur personnalisées",
                  "Intégration avec vos systèmes existants",
                  "Automatisation des processus métier",
                ],
              },
              {
                title: "Formation et support",
                description: "Accompagnement complet pour assurer l'adoption et l'utilisation optimale de votre ERP.",
                features: [
                  "Formation des utilisateurs",
                  "Documentation personnalisée",
                  "Support technique continu",
                  "Maintenance et mises à jour",
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

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">Nos solutions ERP</h2>
            <p className="text-xl text-gray-700">
              Nous travaillons avec les meilleures plateformes ERP pour vous offrir des solutions adaptées à votre
              secteur d'activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {[
              {
                title: "ERP pour la distribution",
                description:
                  "Solutions spécialisées pour la gestion des stocks, des achats, des ventes et de la logistique.",
                features: [
                  "Gestion des stocks multi-entrepôts",
                  "Optimisation de la chaîne d'approvisionnement",
                  "Gestion des commandes et livraisons",
                  "Analyse des ventes et prévisions",
                ],
              },
              {
                title: "ERP pour la production",
                description: "Systèmes intégrés pour la planification, l'exécution et le suivi de la production.",
                features: [
                  "Planification de la production",
                  "Gestion des ressources matérielles",
                  "Suivi de la qualité",
                  "Maintenance préventive",
                ],
              },
              {
                title: "ERP pour les services",
                description:
                  "Solutions adaptées aux entreprises de services pour la gestion des projets et des ressources.",
                features: [
                  "Gestion de projets intégrée",
                  "Suivi du temps et des activités",
                  "Facturation automatisée",
                  "Gestion des ressources humaines",
                ],
              },
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-swiftech-blue/10 rounded-full p-1 flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-swiftech-blue" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
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
              Découvrez comment nos solutions ERP ont aidé des entreprises comme la vôtre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
              <div className="bg-swiftech-blue text-white p-6">
                <h3 className="text-2xl font-bold">Entreprise manufacturière</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Une entreprise manufacturière avec 3 sites de production faisait face à des problèmes de
                    coordination, de gestion des stocks et de planification de la production, entraînant des retards de
                    livraison et des coûts élevés.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Implémentation d&apos;une solution ERP intégrée avec des modules spécifiques pour la production, la
                    gestion des stocks et la planification, adaptée aux processus spécifiques de l&apos;entreprise.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Réduction de 30% des délais de production",
                      "Amélioration de la gestion des stocks avec réduction des niveaux de 25%",
                      "Visibilité en temps réel sur l'ensemble de la chaîne de production",
                      "Réduction des coûts opérationnels de 20%",
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
                <h3 className="text-2xl font-bold">Distributeur</h3>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Le défi</h4>
                  <p className="text-gray-600">
                    Un distributeur avec un réseau de 10 points de vente avait besoin d&apos;unifier ses processus de
                    gestion des commandes, des stocks et de la relation client pour améliorer son efficacité et sa
                    rentabilité.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Notre solution</h4>
                  <p className="text-gray-600">
                    Déploiement d&apos;un système ERP personnalisé intégrant gestion commerciale, logistique et CRM,
                    avec des tableaux de bord spécifiques pour chaque niveau de management.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Résultats</h4>
                  <ul className="space-y-2">
                    {[
                      "Système ERP personnalisé qui a permis d'automatiser 70% des processus administratifs",
                      "Réduction des ruptures de stock de 85%",
                      "Amélioration de la satisfaction client grâce à des délais de livraison fiables",
                      "Augmentation du chiffre d'affaires de 15% en un an",
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
                Avantages de nos solutions ERP
              </h2>
              <div className="space-y-6">
                {[
                  "Centralisation des données pour une vision unifiée de votre entreprise",
                  "Automatisation des processus pour réduire les tâches manuelles et les erreurs",
                  "Amélioration de la collaboration entre les différents départements",
                  "Prise de décision facilitée grâce à des rapports et analyses en temps réel",
                  "Évolutivité pour accompagner la croissance de votre entreprise",
                  "Retour sur investissement rapide grâce à l'optimisation des processus",
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
                          "L'implémentation de notre solution ERP par Swiftech a transformé notre façon de travailler. Nous avons maintenant une visibilité complète sur nos opérations et pouvons prendre des décisions basées sur des données fiables.",
                        author: "Jean Dupont",
                        company: "Directeur Général, Entreprise XYZ",
                      },
                      {
                        quote:
                          "La personnalisation de notre ERP a été un facteur clé de succès. L'équipe de Swiftech a parfaitement compris nos processus métier et a développé une solution qui répond exactement à nos besoins spécifiques.",
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
              Prêt à optimiser vos processus d&apos;entreprise ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en ERP et découvrir comment nos solutions
              peuvent transformer votre entreprise.
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

