"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Client {
  name: string
  logo: string
  industry?: string
}

const clients: Client[] = [
  { name: "Donn John", logo: "/images/clients/donn-john.png", industry: "Mode & Design" },
  { name: "OVA Consulting", logo: "/images/clients/ova-consulting.png", industry: "Conseil" },
  { name: "Goodtsika", logo: "/images/clients/goodtsika.png", industry: "Technologie" },
  { name: "Multiprint", logo: "/images/clients/multiprint.png", industry: "Impression & Packaging" },
  { name: "Auditix", logo: "/images/clients/auditix.png", industry: "Audit & Finance" },
  { name: "APME", logo: "/images/clients/apme.png", industry: "Association Professionnelle" },
  { name: "Tradex", logo: "/images/clients/tradex.png", industry: "Commerce & Distribution" },
  { name: "Contacturer", logo: "/images/clients/contacturer.png", industry: "Investissement" },
]

export default function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed

      // Reset position when we've scrolled through all clients
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden py-8">
      <div ref={scrollRef} className="flex space-x-12 overflow-x-hidden">
        {/* Duplicate the clients array to create a seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-24 bg-white border border-gray-100 rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} - Client de Swiftech`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

