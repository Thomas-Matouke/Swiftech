"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
  linkedin?: string
  email?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Jean Dupont",
    position: "CEO & Fondateur",
    image: "/images/team/team-1.jpg",
    bio: "Plus de 15 ans d'expérience dans le secteur IT, spécialisé en cybersécurité et stratégie digitale.",
    linkedin: "https://www.linkedin.com/in/jeandupont/",
    email: "jean.dupont@swiftech.cm",
  },
  {
    name: "Marie Martin",
    position: "Directrice Technique",
    image: "/images/team/team-2.jpg",
    bio: "Experte en infrastructure cloud et solutions d'entreprise avec une solide expérience chez les leaders du secteur.",
    linkedin: "https://www.linkedin.com/in/mariemartin/",
    email: "marie.martin@swiftech.cm",
  },
  {
    name: "Thomas Bernard",
    position: "Responsable Cybersécurité",
    image: "/images/team/team-3.jpg",
    bio: "Certifié CEH, CISSP et ISO 27001, spécialiste en sécurité des systèmes d'information et gestion des risques.",
    linkedin: "https://www.linkedin.com/in/thomasbernard/",
    email: "thomas.bernard@swiftech.cm",
  },
  {
    name: "Sophie Leroy",
    position: "Directrice des Opérations",
    image: "/images/team/team-4.jpg",
    bio: "Experte en optimisation des processus IT et gestion de projets complexes dans des environnements internationaux.",
    linkedin: "https://www.linkedin.com/in/sophieleroy/",
    email: "sophie.leroy@swiftech.cm",
  },
  {
    name: "Pierre Dubois",
    position: "Architecte Solutions",
    image: "/images/team/team-5.jpg",
    bio: "Spécialiste en conception d'architectures IT robustes et évolutives pour les entreprises de toutes tailles.",
    linkedin: "https://www.linkedin.com/in/pierredubois/",
    email: "pierre.dubois@swiftech.cm",
  },
  {
    name: "Claire Moreau",
    position: "Responsable Développement",
    image: "/images/team/team-6.jpg",
    bio: "Passionnée par le développement de solutions logicielles innovantes et l'intégration de nouvelles technologies.",
    linkedin: "https://www.linkedin.com/in/clairemoreau/",
    email: "claire.moreau@swiftech.cm",
  },
]

export default function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  )
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border border-gray-100 overflow-hidden transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
      )}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
        <p className="text-swiftech-blue font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
        <div className="flex space-x-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-swiftech-blue transition-colors"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-gray-600 hover:text-swiftech-blue transition-colors"
              aria-label={`Email de ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

