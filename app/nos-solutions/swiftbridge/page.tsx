import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Users, Calendar, Bell, BarChart, FileText, MessageSquare } from "lucide-react"

export const metadata = {
  title: "Swiftbridge - Logiciel de Gestion Scolaire | Swiftech",
  description:
    "Swiftbridge est une solution complète de gestion des établissements scolaires qui simplifie l'administration, améliore la communication et optimise le suivi des élèves.",
}

export default function SwiftbridgePage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#111827] -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image src="/images/luxury-pattern.png" alt="Background pattern" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                <span className="font-bold">Swiftbridge</span>
              </h1>
              <div className="w-20 h-1 bg-swiftech-blue"></div>
              <p className="text-xl text-gray-300">
                Une solution complète de gestion des établissements scolaires qui simplifie l'administration, améliore
                la communication et optimise le suivi des élèves.
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
                <Image
                  src="/images/swiftbridge-mockup.png"
                  alt="Swiftbridge Interface"
                  width={500}
                  height={300}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Fonctionnalités <span className="font-bold">principales</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Swiftbridge peut transformer la gestion de votre établissement scolaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Gestion académique",
                description: "Gestion complète des programmes, des cours, des emplois du temps et des évaluations.",
              },
              {
                icon: Users,
                title: "Gestion des élèves",
                description:
                  "Suivi complet des dossiers élèves, de l'inscription à la diplomation, incluant les absences et les résultats.",
              },
              {
                icon: Calendar,
                title: "Planification",
                description: "Création et gestion des emplois du temps, des événements scolaires et des réunions.",
              },
              {
                icon: Bell,
                title: "Notifications",
                description: "Système d'alertes et de notifications pour les parents, les élèves et le personnel.",
              },
              {
                icon: BarChart,
                title: "Rapports et statistiques",
                description:
                  "Génération de rapports détaillés sur les performances académiques et la gestion administrative.",
              },
              {
                icon: FileText,
                title: "Gestion financière",
                description: "Suivi des paiements, des frais de scolarité et génération de factures automatisées.",
              },
              {
                icon: MessageSquare,
                title: "Communication",
                description:
                  "Plateforme de communication intégrée entre l'administration, les enseignants, les élèves et les parents.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-swiftech-lightBlue transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-swiftech-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Les <span className="font-bold">avantages</span> de Swiftbridge
              </h2>
              <div className="w-20 h-1 bg-swiftech-blue mb-8"></div>
              <div className="space-y-6">
                {[
                  "Simplification des tâches administratives et réduction du temps consacré à la paperasse",
                  "Amélioration de la communication entre l'école, les enseignants, les élèves et les parents",
                  "Suivi en temps réel des performances académiques et du comportement des élèves",
                  "Sécurisation des données sensibles avec des contrôles d'accès stricts",
                  "Réduction des coûts opérationnels et optimisation des ressources",
                  "Interface intuitive nécessitant peu de formation pour être maîtrisée",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-b border-gray-100">
                    <div className="bg-swiftech-lightBlue rounded-full p-1 flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-swiftech-blue" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-left">
              <div className="relative">
                <Image
                  src="/images/swiftbridge-dashboard.png"
                  alt="Swiftbridge Dashboard"
                  width={600}
                  height={400}
                  className="object-cover border border-gray-100 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Ce que disent <span className="font-bold">nos clients</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Swiftbridge a transformé la gestion des établissements scolaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Swiftbridge a révolutionné notre façon de gérer notre établissement. Nous avons réduit de 70% le temps consacré aux tâches administratives.",
                author: "Marie Dupont",
                position: "Directrice, Lycée International",
              },
              {
                quote:
                  "La communication avec les parents s'est considérablement améliorée depuis que nous utilisons Swiftbridge. Ils apprécient de pouvoir suivre les progrès de leurs enfants en temps réel.",
                author: "Thomas Martin",
                position: "Proviseur, Collège Saint-Joseph",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
              >
                <p className="italic text-gray-700 mb-6 text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-swiftech-blue">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111827] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 animate-fade-in-up">
              Prêt à <span className="font-bold">transformer</span> la gestion de votre établissement ?
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
              Contactez-nous dès aujourd'hui pour une démonstration personnalisée de Swiftbridge.
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

