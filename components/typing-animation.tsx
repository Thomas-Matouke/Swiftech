"use client"

import { useState, useEffect, useRef } from "react"

const services = ["SÉCURITÉ INFORMATIQUE", "SERVICES IT", "CLOUD COMPUTING", "INGÉNIERIE LOGICIELLE"]

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [serviceIndex, setServiceIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const currentTextRef = useRef(services[0])
  const currentIndexRef = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Current full text we're working with
      const currentText = services[serviceIndex]
      currentTextRef.current = currentText

      if (isDeleting) {
        // Deleting text
        setDisplayText(currentText.substring(0, displayText.length - 1))
        setTypingSpeed(50) // Faster when deleting

        // If all text is deleted, start typing the next service
        if (displayText.length === 0) {
          setIsDeleting(false)
          setServiceIndex((prev) => (prev + 1) % services.length)
          setTypingSpeed(150) // Reset typing speed
        }
      } else {
        // Typing text
        setDisplayText(currentText.substring(0, displayText.length + 1))

        // If all text is typed, pause then start deleting
        if (displayText.length === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true)
          }, 2000) // Pause for 2 seconds before deleting
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, serviceIndex, typingSpeed])

  return (
    <span className="font-medium text-swiftech-blue inline-block min-h-[1.5em]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

