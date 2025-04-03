import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Award, Clock, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Carrières | Swiftech",
  description:
    "Rejoignez l'équipe Swiftech et contribuez à façonner l'avenir de la technologie. Découvrez nos opportunités d'emploi et notre culture d'entreprise.",
}

const jobOpenings = [
  {
    title: "Ingénieur Cybersécurité",
    type: "Temps plein",
    location: "Douala, Cameroun",
    description:
      "Nous recherchons un ingénieur en cybersécurité expérimenté pour rejoindre notre équipe. Vous serez responsable de la protection de nos systèmes et de ceux de nos clients contre les menaces informatiques.",
    requirements: [
      "Diplôme en informatique ou domaine connexe",
      "3+ ans d'expérience en cybersécurité",
      "Certifications pertinentes (CEH, CISSP, etc.)",
      "Connaissance approfondie des outils de sécurité",
    ],
  },
  {
    title: "Développeur Full Stack",
    type: "Temps plein",
    location: "Douala, Cameroun",
    description:
      "Rejoignez notre équipe de développement pour créer des applications web et mobiles innovantes pour nos clients. Vous travaillerez sur des projets variés et stimulants.",
    requirements: [
      "Expérience en développement front-end et back-end",
      "Maîtrise de JavaScript, React, Node.js",
      "Connaissance des bases de données SQL et NoSQL",
      "Capacité à travailler en équipe",
    ],
  },
  {
    title: "Administrateur Systèmes et Réseaux",
    type: "Temps plein",
    location: "Douala, Cameroun",
    description:
      "Vous serez responsable de la gestion et de la maintenance de notre infrastructure IT et de celle de nos clients. Vous assurerez la disponibilité et la performance des systèmes.",
    requirements: [
      "Expérience en administration de systèmes Windows et Linux",
      "Connaissance des technologies de virtualisation",
      "Maîtrise des réseaux TCP/IP",
      "Certifications pertinentes (CCNA, MCSA, etc.)",
    ],
  },
]

export default function CareerPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#111827] -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image src="/images/luxury-pattern.png" alt="Background pattern" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Rejoignez <span className="font-bold">Swiftech</span>
          </h1>
          <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Faites partie d'une équipe passionnée qui façonne l'avenir de la technologie.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Pourquoi <span className="font-bold text-swiftech-blue">nous rejoindre</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chez Swiftech, nous valorisons l'innovation, la collaboration et le développement personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Culture collaborative",
                description:
                  "Rejoignez une équipe dynamique où chaque voix compte et où la collaboration est au cœur de notre succès.",
              },
              {
                icon: Award,
                title: "Excellence technique",
                description:
                  "Travaillez avec les dernières technologies et développez votre expertise aux côtés de professionnels talentueux.",
              },
              {
                icon: Briefcase,
                title: "Projets stimulants",
                description:
                  "Relevez des défis techniques variés et contribuez à des projets qui ont un impact réel sur nos clients.",
              },
              {
                icon: Clock,
                title: "Équilibre travail-vie",
                description:
                  "Nous valorisons le bien-être de nos employés et encourageons un équilibre sain entre vie professionnelle et personnelle.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-gray-100 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="bg-swiftech-blue/10 w-16 h-16 rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-swiftech-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Postes <span className="font-bold text-swiftech-blue">ouverts</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos opportunités d'emploi actuelles et rejoignez notre équipe.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Briefcase className="h-4 w-4 text-swiftech-blue" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <MapPin className="h-4 w-4 text-swiftech-blue" /> {job.location}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="mt-4 md:mt-0 bg-swiftech-blue hover:bg-swiftech-darkBlue">
                      <Link href="/contact" className="flex items-center gap-2">
                        Postuler <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Prérequis:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="bg-swiftech-blue/10 rounded-full p-1 flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 bg-swiftech-blue rounded-full"></div>
                          </div>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Processus de <span className="font-bold text-swiftech-blue">recrutement</span>
            </h2>
            <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre processus de recrutement est conçu pour être transparent et efficace.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {[
                {
                  step: "1",
                  title: "Candidature",
                  description:
                    "Envoyez votre CV et lettre de motivation via notre formulaire de contact ou par email à careers@swiftech.cm.",
                },
                {
                  step: "2",
                  title: "Présélection",
                  description:
                    "Notre équipe RH examine votre candidature et vous contacte pour un premier entretien téléphonique.",
                },
                {
                  step: "3",
                  title: "Entretiens techniques",
                  description:
                    "Rencontrez notre équipe technique pour évaluer vos compétences et votre adéquation avec le poste.",
                },
                {
                  step: "4",
                  title: "Entretien final",
                  description:
                    "Discutez avec notre direction pour finaliser les détails de votre intégration potentielle.",
                },
                {
                  step: "5",
                  title: "Offre d'emploi",
                  description:
                    "Si votre profil correspond à nos attentes, nous vous ferons parvenir une offre d'emploi détaillée.",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-12 border-l-2 border-swiftech-blue/20 last:border-0 last:pb-0"
                >
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-swiftech-blue"></div>
                  <div className="bg-white p-6 border border-gray-100 ml-4 hover:shadow-lg transition-all duration-300">
                    <div className="text-sm font-semibold text-swiftech-blue mb-1">Étape {phase.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-700">{phase.description}</p>
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
            Prêt à <span className="font-bold">nous rejoindre</span> ?
          </h2>
          <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Envoyez-nous votre candidature dès aujourd'hui et commencez une nouvelle aventure professionnelle avec
            Swiftech.
          </p>
          <Button asChild size="lg" className="bg-swiftech-blue hover:bg-swiftech-darkBlue">
            <Link href="/contact">Postuler maintenant</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

