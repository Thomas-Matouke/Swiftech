import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  Server,
  Cloud,
  Database,
  Code,
  Headset,
  Network,
  Monitor,
  Lock,
  FileText,
  Users,
  Smartphone,
  Video,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"

export const metadata = {
  title: "Solutions IT et Cybersécurité | Swiftech",
  description:
    "Découvrez notre gamme complète de solutions informatiques: infogérance, cybersécurité, cloud computing, développement logiciel et support technique.",
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Server,
      title: "Infogérance IT",
      description:
        "Gestion complète de votre infrastructure informatique pour vous permettre de vous concentrer sur votre cœur de métier.",
      link: "/nos-solutions/infogerance",
      useCases: [
        {
          title: "PME en croissance",
          description:
            "Une entreprise de 50 employés a réduit ses coûts IT de 30% en externalisant la gestion de son infrastructure.",
        },
        {
          title: "Entreprise multi-sites",
          description:
            "Gestion centralisée des systèmes répartis sur 5 sites différents, améliorant la cohérence et la sécurité.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity as a Service",
      description: "Protection continue de vos systèmes avec SOC, gestion des incidents et sécurisation des réseaux.",
      link: "/nos-solutions/cybersecurity",
      useCases: [
        {
          title: "Institution financière",
          description:
            "Mise en place d'un SOC 24/7 qui a permis de détecter et neutraliser une tentative d'intrusion majeure.",
        },
        {
          title: "Entreprise de e-commerce",
          description: "Réduction de 90% des tentatives de phishing grâce à nos solutions de sécurité avancées.",
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Solutions cloud flexibles et évolutives pour moderniser votre infrastructure IT.",
      link: "/nos-solutions/cloud-computing",
      useCases: [
        {
          title: "Startup en forte croissance",
          description:
            "Migration vers le cloud qui a permis de multiplier par 5 la capacité de traitement sans investissement matériel.",
        },
        {
          title: "Cabinet d'architectes",
          description:
            "Mise en place d'une solution collaborative cloud permettant le travail simultané sur des projets complexes.",
        },
      ],
    },
    {
      icon: Database,
      title: "Sauvegarde as a Service",
      description: "Protection de vos données critiques avec des solutions de sauvegarde automatisées et sécurisées.",
      link: "/nos-solutions/backup",
      useCases: [
        {
          title: "Cabinet médical",
          description:
            "Système de sauvegarde automatique qui a permis de récupérer 100% des dossiers patients après une panne matérielle.",
        },
        {
          title: "Bureau d'études",
          description:
            "Réduction du temps de restauration des données de 24h à moins de 2h grâce à notre solution BaaS.",
        },
      ],
    },
    {
      icon: Lock,
      title: "Audit des S.I",
      description:
        "Évaluation complète de vos systèmes d'information pour identifier les vulnérabilités et améliorer la sécurité.",
      link: "/nos-solutions/audit",
      useCases: [
        {
          title: "Entreprise réglementée",
          description:
            "Identification de 15 vulnérabilités critiques qui auraient pu compromettre la conformité réglementaire.",
        },
        {
          title: "Société acquise",
          description:
            "Audit complet avant fusion qui a permis d'identifier les risques et de planifier l'intégration IT.",
        },
      ],
    },
    {
      icon: FileText,
      title: "Data Leak Prevention",
      description:
        "Solutions pour prévenir les fuites de données sensibles et protéger vos informations confidentielles.",
      link: "/nos-solutions/data-leak-prevention",
      useCases: [
        {
          title: "Cabinet juridique",
          description:
            "Mise en place de contrôles qui ont empêché plusieurs tentatives d'exfiltration de documents confidentiels.",
        },
        {
          title: "Entreprise R&D",
          description:
            "Protection des propriétés intellectuelles contre l'espionnage industriel et les fuites accidentelles.",
        },
      ],
    },
    {
      icon: Users,
      title: "Formation et Sensibilisation",
      description:
        "Programmes de formation pour sensibiliser votre personnel aux bonnes pratiques de sécurité informatique.",
      link: "/nos-solutions/formation",
      useCases: [
        {
          title: "Grande entreprise",
          description:
            "Réduction de 75% des incidents de sécurité liés aux erreurs humaines après notre programme de formation.",
        },
        {
          title: "Administration publique",
          description: "Formation de 200 agents qui a permis d'éliminer presque totalement les incidents de phishing.",
        },
      ],
    },
    {
      icon: Network,
      title: "Interconnexion",
      description:
        "Solutions d'interconnexion sécurisées pour relier vos différents sites et optimiser vos communications.",
      link: "/nos-solutions/interconnexion",
      useCases: [
        {
          title: "Réseau de magasins",
          description:
            "Interconnexion de 15 sites avec une réduction de 40% des coûts de communication et une amélioration de la fiabilité.",
        },
        {
          title: "Entreprise internationale",
          description: "Solution SD-WAN qui a optimisé les communications entre 5 pays tout en renforçant la sécurité.",
        },
      ],
    },
    {
      icon: Briefcase,
      title: "Intégration et développement ERP",
      description: "Implémentation et personnalisation de solutions ERP adaptées à vos besoins spécifiques.",
      link: "/nos-solutions/erp",
      useCases: [
        {
          title: "Entreprise manufacturière",
          description:
            "Intégration ERP qui a réduit de 30% les délais de production et amélioré la gestion des stocks.",
        },
        {
          title: "Distributeur",
          description: "Système ERP personnalisé qui a permis d'automatiser 70% des processus administratifs.",
        },
      ],
    },
    {
      icon: Smartphone,
      title: "Communication d'entreprise (VOIP)",
      description: "Solutions de téléphonie IP modernes pour optimiser vos communications internes et externes.",
      link: "/nos-solutions/voip",
      useCases: [
        {
          title: "Centre d'appels",
          description:
            "Migration vers la VOIP qui a réduit les coûts de communication de 60% tout en améliorant la qualité.",
        },
        {
          title: "Entreprise de services",
          description:
            "Système unifié qui a intégré téléphonie, messagerie et visioconférence pour une collaboration optimale.",
        },
      ],
    },
    {
      icon: Network,
      title: "Installation et Optimisation des Réseaux",
      description: "Conception, déploiement et optimisation d'infrastructures réseau performantes et sécurisées.",
      link: "/nos-solutions/reseaux",
      useCases: [
        {
          title: "Nouveau siège social",
          description:
            "Conception et déploiement d'un réseau haute performance qui a supporté la croissance de l'entreprise pendant 5 ans.",
        },
        {
          title: "Campus universitaire",
          description:
            "Optimisation du réseau existant qui a multiplié par 3 les performances sans remplacement matériel majeur.",
        },
      ],
    },
    {
      icon: Video,
      title: "Vidéosurveillance",
      description: "Systèmes de vidéosurveillance avancés pour sécuriser vos locaux et protéger vos actifs.",
      link: "/nos-solutions/videosurveillance",
      useCases: [
        {
          title: "Entrepôt logistique",
          description: "Système intelligent qui a réduit les pertes de 90% et amélioré la sécurité du personnel.",
        },
        {
          title: "Réseau de boutiques",
          description:
            "Solution centralisée permettant la surveillance de 12 sites depuis un poste de contrôle unique.",
        },
      ],
    },
    {
      icon: Code,
      title: "Ingénierie Logicielle",
      description: "Développement sur mesure d'applications et logiciels adaptés à vos besoins spécifiques.",
      link: "/nos-solutions/software-engineering",
      useCases: [
        {
          title: "Entreprise logistique",
          description: "Application sur mesure qui a optimisé les processus de livraison et réduit les coûts de 25%.",
        },
        {
          title: "Agence immobilière",
          description: "Plateforme de gestion qui a augmenté les ventes de 40% en 6 mois grâce à l'automatisation.",
        },
      ],
    },
    {
      icon: Monitor,
      title: "Gestion de Projets Informatiques",
      description: "Pilotage de vos projets IT de A à Z, avec une méthodologie éprouvée et des résultats garantis.",
      link: "/nos-solutions/gestion-projets",
      useCases: [
        {
          title: "Transformation digitale",
          description:
            "Gestion d'un projet de transformation qui a été livré dans les délais et le budget, contrairement à 70% des projets similaires.",
        },
        {
          title: "Migration système critique",
          description: "Migration réussie avec zéro interruption de service et 100% de préservation des données.",
        },
      ],
    },
    {
      icon: Lock,
      title: "Gestion des contrôles d'accès",
      description: "Solutions de contrôle d'accès physique et logique pour sécuriser vos locaux et vos systèmes.",
      link: "/nos-solutions/controle-acces",
      useCases: [
        {
          title: "Immeuble de bureaux",
          description:
            "Système unifié qui a intégré contrôle d'accès physique et authentification informatique pour une sécurité renforcée.",
        },
        {
          title: "Site industriel",
          description: "Solution qui a permis de réduire de 100% les accès non autorisés aux zones sensibles.",
        },
      ],
    },
    {
      icon: Headset,
      title: "Maintenance et Support Informatique",
      description: "Assistance technique réactive et professionnelle pour résoudre rapidement vos problèmes IT.",
      link: "/nos-solutions/support",
      useCases: [
        {
          title: "Réseau d'agences bancaires",
          description: "Support qui a réduit le temps d'indisponibilité des systèmes de 80% en un an.",
        },
        {
          title: "École internationale",
          description: "Helpdesk qui a résolu 95% des problèmes techniques en moins de 4 heures.",
        },
      ],
    },
    {
      icon: Headset,
      title: "Swiftbridge",
      description:
        "Logiciel de gestion des établissements scolaires, simplifiant l'administration et améliorant la communication.",
      link: "/nos-solutions/swiftbridge",
      useCases: [
        {
          title: "Lycée International",
          description:
            "Réduction de 70% du temps consacré aux tâches administratives et amélioration de la communication avec les parents.",
        },
        {
          title: "Réseau d'écoles",
          description:
            "Centralisation de la gestion de 5 établissements avec harmonisation des processus et meilleur suivi des élèves.",
        },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#111827] -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image src="/images/luxury-pattern.png" alt="Background pattern" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-8 animate-float">
            <Image src="/images/SWIFTECH-picto.png" alt="Swiftech" width={80} height={80} className="object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extralight text-white mb-6 animate-fade-in">
            Nos <span className="font-medium text-swiftech-blue">Solutions IT</span>
          </h1>
          <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-100">
            Des solutions informatiques complètes pour répondre à tous vos besoins technologiques.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ServiceCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                link={solution.link}
                useCases={solution.useCases}
                className={`animate-fade-in delay-${(index % 5) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4">
              Notre <span className="font-medium text-swiftech-blue">Approche</span>
            </h2>
            <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous suivons une méthodologie éprouvée pour garantir des solutions adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analyse",
                description:
                  "Nous évaluons vos besoins, votre infrastructure existante et vos objectifs pour comprendre parfaitement votre situation.",
              },
              {
                step: "2",
                title: "Conception",
                description:
                  "Nous élaborons une solution sur mesure qui répond à vos exigences spécifiques et s'aligne avec vos objectifs.",
              },
              {
                step: "3",
                title: "Implémentation",
                description:
                  "Nous déployons la solution avec un minimum de perturbation pour votre activité, en suivant un plan précis.",
              },
              {
                step: "4",
                title: "Support",
                description:
                  "Nous assurons un suivi continu et un support réactif pour garantir la performance optimale de votre solution.",
              },
            ].map((phase, index) => (
              <div key={index} className={`relative animate-fade-in delay-${index * 200}`}>
                <div className="bg-swiftech-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-swiftech-blue font-medium text-xl">{phase.step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-swiftech-blue/10"></div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111827] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight mb-4 animate-fade-in">
            Besoin d'une <span className="font-medium text-swiftech-blue">solution personnalisée</span> ?
          </h2>
          <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in delay-100">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment Swiftech peut
            vous aider.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-swiftech-blue hover:bg-swiftech-darkBlue transition-all duration-300 animate-fade-in delay-200"
          >
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

