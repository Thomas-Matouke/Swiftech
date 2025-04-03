"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    serviceType: "general",
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success response
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        serviceType: "general",
        consent: false,
      })
    } catch (error) {
      setSubmitError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous aider à trouver la solution IT adaptée à vos
            besoins.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-700">332 Rue Foucauld Akwa</p>
              <p className="text-gray-700">Douala, Cameroon</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-700">+237 653 815 919</p>
              <p className="text-gray-700">Lun-Ven: 9h-18h</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">contact@swiftech.cm</p>
              <p className="text-gray-700">support@swiftech.cm</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">Message envoyé avec succès !</p>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label>Type de service *</Label>
                    <RadioGroup
                      value={formData.serviceType}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">Demande générale</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="infogerance" id="infogerance" />
                        <Label htmlFor="infogerance">Infogérance IT</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cybersecurity" id="cybersecurity" />
                        <Label htmlFor="cybersecurity">Cybersécurité</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cloud" id="cloud" />
                        <Label htmlFor="cloud">Cloud Computing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="development" id="development" />
                        <Label htmlFor="development">Développement Logiciel</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" checked={formData.consent} onCheckedChange={handleCheckboxChange} required />
                    <Label htmlFor="consent" className="text-sm">
                      J'accepte que mes données soient traitées conformément à la politique de confidentialité de
                      Swiftech. *
                    </Label>
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">{submitError}</div>
                  )}

                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Envoyer <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre localisation</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8108613789144!2d9.6889!3d4.0495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInNTguMiJOIDnCsDQxJzIwLjAiRQ!5e0!3m2!1sfr!2scm!4v1617289123456!5m2!1sfr!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de Swiftech"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement des réponses aux questions les plus courantes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Quels sont vos délais d'intervention ?",
                answer:
                  "Nous intervenons généralement dans les 4 heures suivant votre demande pour les problèmes critiques, et dans les 24 heures pour les demandes standard. Nos contrats d'infogérance incluent des SLA précis adaptés à vos besoins.",
              },
              {
                question: "Proposez-vous des services pour les petites entreprises ?",
                answer:
                  "Absolument ! Nous adaptons nos services à la taille de votre entreprise. Nous proposons des forfaits spécifiques pour les TPE/PME avec des solutions évolutives qui grandissent avec votre activité.",
              },
              {
                question: "Comment assurez-vous la sécurité de nos données ?",
                answer:
                  "Nous utilisons des protocoles de sécurité avancés, des systèmes de chiffrement de pointe et des sauvegardes régulières. Notre équipe de cybersécurité surveille en permanence les menaces potentielles et met en place des mesures préventives.",
              },
              {
                question: "Puis-je migrer mes services existants vers Swiftech ?",
                answer:
                  "Oui, nous proposons des services de migration complets et sans interruption. Notre équipe s'occupe de transférer vos données, applications et services vers nos solutions, avec un minimum d'impact sur votre activité.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une assistance rapide ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre équipe de support technique est disponible pour vous aider immédiatement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <a href="tel:+237653815919">
                <Phone className="h-4 w-4 mr-2" />
                +237 653 815 919
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-blue-800 hover:text-white"
            >
              <a href="mailto:support@swiftech.cm">
                <Mail className="h-4 w-4 mr-2" />
                support@swiftech.cm
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

