"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function HorizontalScroll({
  children,
  className,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const contentContainer = contentRef.current

    if (!scrollContainer || !contentContainer) return

    // Clone the content to create a seamless loop
    const cloneContent = () => {
      const originalContent = contentContainer.innerHTML
      contentContainer.innerHTML = originalContent + originalContent
    }

    cloneContent()

    let scrollPosition = 0
    const scrollWidth = contentContainer.scrollWidth
    const containerWidth = scrollContainer.clientWidth

    // Adjust speed based on direction
    const adjustedSpeed = direction === "left" ? speed : -speed

    const scroll = () => {
      if (!scrollContainer || !contentContainer) return

      scrollPosition += adjustedSpeed / 60

      // Reset position when we've scrolled through half the content
      // This creates a seamless loop effect
      if (scrollPosition >= scrollWidth / 2 || scrollPosition <= 0) {
        scrollPosition = direction === "left" ? 0 : scrollWidth / 2
      }

      scrollContainer.scrollLeft = scrollPosition
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    // Pause animation on hover if enabled
    if (pauseOnHover) {
      const handleMouseEnter = () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
          animationRef.current = null
        }
      }

      const handleMouseLeave = () => {
        if (!animationRef.current) {
          animationRef.current = requestAnimationFrame(scroll)
        }
      }

      scrollContainer.addEventListener("mouseenter", handleMouseEnter)
      scrollContainer.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, direction, pauseOnHover])

  return (
    <div ref={scrollRef} className={cn("overflow-hidden", className)}>
      <div ref={contentRef} className="flex whitespace-nowrap">
        {children}
      </div>
    </div>
  )
}

