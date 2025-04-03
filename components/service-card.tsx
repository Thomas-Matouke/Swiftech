"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface UseCase {
  title: string
  description: string
}

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  link: string
  useCases?: UseCase[]
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  useCases = [],
  className,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        "service-card bg-white p-6 border-b border-gray-100 hover:shadow-sm transition-all duration-500 transform",
        expanded ? "shadow-sm" : "",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className,
      )}
      style={{
        transitionDelay: isVisible ? "150ms" : "0ms",
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 rounded-full flex items-center justify-center service-icon">
          <Icon className="h-8 w-8 text-swiftech-blue" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center mb-5 text-sm">{description}</p>

      {useCases.length > 0 && (
        <div className="mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-swiftech-blue p-0 hover:bg-transparent hover:text-swiftech-darkBlue w-full justify-center text-xs"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Masquer les cas d'usage <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Voir les cas d'usage <ChevronDown className="h-3 w-3" />
              </>
            )}
          </Button>

          <div
            className={cn(
              "service-details overflow-hidden transition-all duration-500",
              expanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0",
            )}
          >
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded text-sm">
                  <h4 className="font-medium text-gray-900 mb-1">{useCase.title}</h4>
                  <p className="text-xs text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <Button asChild variant="link" className="text-swiftech-blue hover:text-swiftech-darkBlue p-0 text-sm">
          <Link href={link} className="flex items-center gap-1">
            En savoir plus <ArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </div>

      {title === "Swiftbridge" && (
        <div className="flex justify-center mt-3">
          <Button
            asChild
            className="bg-swiftech-blue hover:bg-swiftech-darkBlue transition-all duration-300 mt-2 text-sm py-1 h-auto"
          >
            <a
              href="https://www.swiftbridge.cm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              Visiter Swiftbridge <ArrowRight className="h-3 w-3" />
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}

