"use client"

import Image from "next/image"
import HorizontalScroll from "@/components/horizontal-scroll"

interface Certification {
  name: string
  logo: string
  description: string
}

const certifications: Certification[] = [
  {
    name: "ISO 27001",
    logo: "/images/certifications/iso27001.png",
    description: "Information Security Management System",
  },
  {
    name: "CEH",
    logo: "/images/certifications/ceh.png",
    description: "Certified Ethical Hacker",
  },
  {
    name: "CCNA",
    logo: "/images/certifications/ccna.png",
    description: "Cisco Certified Network Associate",
  },
  {
    name: "ITIL 4",
    logo: "/images/certifications/itil4.png",
    description: "IT Service Management",
  },
  {
    name: "MikroTik MTCNA",
    logo: "/images/certifications/mikrotik-mtcna.png",
    description: "MikroTik Certified Network Associate",
  },
  {
    name: "CND",
    logo: "/images/certifications/cnd.png",
    description: "Certified Network Defender",
  },
  {
    name: "Fortinet Certified Associate",
    logo: "/images/certifications/fortinet-associate.png",
    description: "Cybersecurity Certification",
  },
  {
    name: "CISM",
    logo: "/images/certifications/cism.png",
    description: "Certified Information Security Manager",
  },
  {
    name: "Fortinet Certified Professional",
    logo: "/images/certifications/fortinet-professional.png",
    description: "Security Operations",
  },
]

export default function CertificationsScroll() {
  return (
    <HorizontalScroll className="py-8" speed={20} direction="left">
      {certifications.map((cert, index) => (
        <div key={index} className="flex-shrink-0 mx-6 w-64 bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
          <div className="h-16 mb-4 relative">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={cert.logo || "/placeholder.svg"}
                alt={cert.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{cert.name}</h3>
          <p className="text-sm text-gray-600">{cert.description}</p>
        </div>
      ))}
    </HorizontalScroll>
  )
}

