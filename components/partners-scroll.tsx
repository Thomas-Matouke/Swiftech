"use client"

import Image from "next/image"
import HorizontalScroll from "@/components/horizontal-scroll"

interface Partner {
  name: string
  logo: string
  industry: string
}

const partners: Partner[] = [
  {
    name: "Microsoft",
    logo: "/images/partners/microsoft.png",
    industry: "Technologie",
  },
  {
    name: "Amazon Web Services",
    logo: "/images/partners/aws-partner.png",
    industry: "Cloud Computing",
  },
  {
    name: "Oracle",
    logo: "/images/partners/oracle-partner.png",
    industry: "Base de données & Cloud",
  },
  {
    name: "Fortinet",
    logo: "/images/partners/fortinet.png",
    industry: "Cybersécurité",
  },
  {
    name: "MikroTik",
    logo: "/images/partners/mikrotik.png",
    industry: "Réseaux",
  },
  {
    name: "Kaspersky",
    logo: "/images/partners/kaspersky.png",
    industry: "Cybersécurité",
  },
  {
    name: "Veeam",
    logo: "/images/partners/veeam-partner.png",
    industry: "Sauvegarde & Récupération",
  },
  {
    name: "Veritas",
    logo: "/images/partners/veritas.png",
    industry: "Gestion de données",
  },
  {
    name: "Fanvil",
    logo: "/images/partners/fanvil.png",
    industry: "Téléphonie IP",
  },
  {
    name: "Wake-Up Agency",
    logo: "/images/partners/wake-up-agency.png",
    industry: "Communication Digitale",
  },
]

export default function PartnersScroll() {
  return (
    <HorizontalScroll className="py-8" speed={25} direction="right">
      {partners.map((partner, index) => (
        <div key={index} className="flex-shrink-0 mx-6 w-64 bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
          <div className="h-16 mb-4 relative">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{partner.name}</h3>
          <p className="text-sm text-gray-600">{partner.industry}</p>
        </div>
      ))}
    </HorizontalScroll>
  )
}

