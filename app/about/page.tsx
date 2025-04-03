import { Users, Award, Target, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import UseCaseSection from "@/components/use-case-section"
import CertificationsScroll from "@/components/certifications-scroll"
import PartnersScroll from "@/components/partners-scroll"
import TeamSection from "@/components/team-section"

export const metadata = {
  title: "À propos de Swiftech | Expertise IT et Cybersécurité",
  description:
    "Découvrez l'histoire, la mission et l'équipe de Swiftech, votre partenaire de confiance pour tous vos besoins en informatique et cybersécurité.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/about-hero.jpg" alt="À propos de Swiftech" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de Swiftech</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez notre histoire, notre mission et notre vision pour l'avenir de la technologie au Cameroun.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Notre <span className="font-bold">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-swiftech-blue mb-6"></div>
              <p className="text-lg text-gray-700 mb-8">
                Chez Swiftech, notre mission est de fournir des solutions IT innovantes et sécurisées qui permettent aux
                entreprises de toutes tailles de prospérer dans l'ère numérique. Nous nous engageons à offrir un service
                d'excellence, une expertise technique de pointe et un support client réactif.
              </p>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Notre <span className="font-bold">Vision</span>
              </h2>
              <div className="w-20 h-1 bg-swiftech-blue mb-6"></div>
              <p className="text-lg text-gray-700">
                Devenir le partenaire IT de référence en proposant des solutions technologiques qui transforment
                positivement les entreprises et renforcent leur sécurité numérique, tout en maintenant une approche
                centrée sur le client et l'innovation continue.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Users className="h-10 w-10 text-swiftech-blue mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-700">
                  Une équipe de professionnels certifiés avec une vaste expérience dans tous les domaines IT.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Award className="h-10 w-10 text-swiftech-blue mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualité</h3>
                <p className="text-gray-700">
                  Un engagement inébranlable envers l'excellence et la satisfaction client.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Target className="h-10 w-10 text-swiftech-blue mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">
                  Toujours à l'avant-garde des technologies pour vous offrir les meilleures solutions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Clock className="h-10 w-10 text-swiftech-blue mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Réactivité</h3>
                <p className="text-gray-700">
                  Un support rapide et efficace pour minimiser les temps d'arrêt et maximiser la productivité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Notre <span className="font-bold text-swiftech-blue">Équipe</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés et dédiés à votre réussite technologique.
            </p>
          </div>

          <TeamSection />
        </div>
      </section>

      {/* Our Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Nos <span className="font-bold text-swiftech-blue">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes fiers de détenir les certifications les plus reconnues de l'industrie, garantissant notre
              expertise et notre engagement envers l'excellence.
            </p>
          </div>

          <CertificationsScroll />
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Nos <span className="font-bold text-swiftech-blue">Partenaires</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions technologiques.
            </p>
          </div>

          <PartnersScroll />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Nos <span className="font-bold">Cas d'Usage</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions ont aidé des entreprises comme la vôtre à résoudre leurs défis IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCaseSection
              industry="Secteur bancaire"
              challenge="Une banque régionale faisait face à des tentatives d'intrusion de plus en plus sophistiquées et avait besoin d'une protection renforcée pour ses systèmes critiques et les données sensibles de ses clients."
              solution="Mise en place d'un SOC 24/7 avec surveillance continue, analyse comportementale avancée et protocoles de réponse aux incidents personnalisés pour le secteur financier."
              results={[
                "Détection et neutralisation de 3 tentatives d'attaques ciblées en moins de 6 mois",
                "Réduction de 95% du temps de réponse aux incidents de sécurité",
                "Conformité totale avec les réglementations financières",
                "Amélioration de la confiance des clients grâce à une meilleure protection des données",
              ]}
            />

            <UseCaseSection
              industry="Commerce de détail"
              challenge="Une chaîne de magasins avec présence en ligne avait subi une attaque par ransomware qui avait paralysé ses opérations pendant 3 jours, entraînant des pertes financières importantes."
              solution="Déploiement d'une solution complète de cybersécurité incluant protection contre les ransomwares, formation du personnel, segmentation du réseau et plan de reprise d'activité."
              results={[
                "Aucune interruption d'activité due à des cyberattaques depuis l'implémentation",
                "Réduction de 80% des incidents liés au phishing grâce à la formation des employés",
                "Capacité de restauration des systèmes en moins de 2 heures en cas d'incident",
                "Économies estimées à 200 000 € par an en évitant les temps d'arrêt",
              ]}
            />

            <UseCaseSection
              industry="Établissement scolaire"
              challenge="Un grand établissement scolaire avait des difficultés à gérer efficacement ses processus administratifs, la communication avec les parents et le suivi des élèves."
              solution="Implémentation de Swiftbridge, notre solution de gestion scolaire, avec formation du personnel administratif et des enseignants."
              results={[
                "Réduction de 70% du temps consacré aux tâches administratives",
                "Amélioration de 85% de la satisfaction des parents grâce à un meilleur suivi",
                "Augmentation de 30% de l'efficacité des enseignants dans le suivi des élèves",
                "Économies significatives en papier et en ressources administratives",
              ]}
            />

            <UseCaseSection
              industry="PME en croissance"
              challenge="Une entreprise de 50 employés en forte croissance avait besoin de moderniser son infrastructure IT pour soutenir son expansion tout en maîtrisant ses coûts."
              solution="Mise en place d'une solution d'infogérance IT complète avec migration vers le cloud et support technique dédié."
              results={[
                "Réduction des coûts IT de 30% tout en améliorant les performances",
                "Capacité à faire évoluer l'infrastructure en fonction de la croissance",
                "Diminution de 90% des temps d'arrêt des systèmes",
                "Équipe interne libérée pour se concentrer sur les projets stratégiques",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Notre <span className="font-bold">Histoire</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis notre création, nous nous sommes engagés à fournir des services IT de qualité supérieure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2015",
                  title: "Fondation de Swiftech",
                  description:
                    "Swiftech est fondée avec la vision de fournir des services IT innovants et accessibles aux entreprises locales.",
                },
                {
                  year: "2017",
                  title: "Expansion des services",
                  description:
                    "Lancement de notre division cybersécurité pour répondre aux besoins croissants en matière de protection des données.",
                },
                {
                  year: "2019",
                  title: "Développement international",
                  description:
                    "Ouverture de nos premiers bureaux internationaux et élargissement de notre clientèle à l'échelle mondiale.",
                },
                {
                  year: "2021",
                  title: "Innovation technologique",
                  description:
                    "Lancement de Swiftbridge, notre solution propriétaire de gestion d'établissements scolaires.",
                },
                {
                  year: "2023",
                  title: "Aujourd'hui",
                  description:
                    "Swiftech continue de croître et d'innover, en servant des centaines de clients satisfaits à travers le monde.",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-swiftech-blue/20">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-swiftech-blue"></div>
                  <div className="bg-white p-6 border border-gray-100 ml-4 hover:shadow-lg transition-all duration-300">
                    <div className="text-sm font-semibold text-swiftech-blue mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-light mb-6">
            Prêt à <span className="font-bold">collaborer</span> avec nous ?
          </h2>
          <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez comment Swiftech peut vous aider à atteindre vos objectifs technologiques et à sécuriser votre
            infrastructure IT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-none bg-white text-swiftech-black hover:bg-gray-100">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none text-white border-swiftech-blue bg-swiftech-blue hover:bg-swiftech-darkBlue"
            >
              <Link href="/solutions">Explorer nos solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

