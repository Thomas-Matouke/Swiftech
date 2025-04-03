import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata = {
  title: "Demande de Devis | Swiftech",
  description:
    "Demandez un devis personnalisé pour nos solutions IT et services de cybersécurité adaptés à vos besoins spécifiques.",
}

export default function DevisPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient animated-bg -z-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8 animate-float">
              <Image
                src="/images/SWIFTECH-picto.png"
                alt="Swiftech"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extralight text-white mb-6 animate-fade-in">
              Demande de <span className="font-medium text-swiftech-blue">Devis</span>
            </h1>
            <div className="w-20 h-0.5 bg-swiftech-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-100">
              Complétez le formulaire ci-dessous pour recevoir un devis personnalisé adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <form className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Prénom <span className="text-red-500">*</span>
                      </Label>
                      <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Nom <span className="text-red-500">*</span>
                      </Label>
                      <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Téléphone <span className="text-red-500">*</span>
                      </Label>
                      <Input id="phone" placeholder="+237 XXX XXX XXX" required />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations sur votre entreprise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Nom de l&apos;entreprise <span className="text-red-500">*</span>
                      </Label>
                      <Input id="company" placeholder="Nom de votre entreprise" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Votre fonction</Label>
                      <Input id="position" placeholder="Votre poste dans l'entreprise" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="industry">Secteur d&apos;activité</Label>
                      <Select>
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Sélectionnez votre secteur d'activité" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="finance">Finance & Banque</SelectItem>
                          <SelectItem value="healthcare">Santé</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="retail">Commerce & Distribution</SelectItem>
                          <SelectItem value="manufacturing">Industrie</SelectItem>
                          <SelectItem value="technology">Technologie</SelectItem>
                          <SelectItem value="government">Administration publique</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="employees">Nombre d&apos;employés</Label>
                      <Select>
                        <SelectTrigger id="employees">
                          <SelectValue placeholder="Taille de votre entreprise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employés</SelectItem>
                          <SelectItem value="11-50">11-50 employés</SelectItem>
                          <SelectItem value="51-200">51-200 employés</SelectItem>
                          <SelectItem value="201-500">201-500 employés</SelectItem>
                          <SelectItem value="501+">Plus de 500 employés</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre projet</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="services">
                        Services requis <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {[
                          { id: "infogerance", label: "Infogérance IT" },
                          { id: "cybersecurity", label: "Cybersecurity as a Service" },
                          { id: "cloud", label: "Cloud Computing" },
                          { id: "backup", label: "Sauvegarde as a Service" },
                          { id: "audit", label: "Audit des S.I" },
                          { id: "dlp", label: "Data Leak Prevention" },
                          { id: "formation", label: "Formation et Sensibilisation" },
                          { id: "interconnexion", label: "Interconnexion" },
                          { id: "erp", label: "Intégration et développement ERP" },
                          { id: "voip", label: "Communication d'entreprise (VOIP)" },
                          { id: "reseaux", label: "Installation et Optimisation des Réseaux" },
                          { id: "videosurveillance", label: "Vidéosurveillance" },
                          { id: "software", label: "Ingénierie Logicielle" },
                          { id: "projets", label: "Gestion de Projets Informatiques" },
                          { id: "acces", label: "Gestion des contrôles d'accès" },
                          { id: "support", label: "Maintenance et Support Informatique" },
                        ].map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <Checkbox id={service.id} />
                            <Label htmlFor={service.id} className="font-normal">
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Description du projet <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Décrivez votre projet et vos besoins spécifiques..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Calendrier souhaité</Label>
                      <Select>
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Quand souhaitez-vous démarrer ce projet ?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immédiatement</SelectItem>
                          <SelectItem value="1month">Dans le mois</SelectItem>
                          <SelectItem value="3months">Dans les 3 mois</SelectItem>
                          <SelectItem value="6months">Dans les 6 mois</SelectItem>
                          <SelectItem value="exploring">En phase d'exploration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Budget Estimation */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Budget estimé</h2>
                  <div className="space-y-4">
                    <RadioGroup defaultValue="medium">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="small" id="budget-small" />
                          <Label htmlFor="budget-small" className="font-medium">
                            Moins de 5 millions FCFA
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="medium" id="budget-medium" />
                          <Label htmlFor="budget-medium" className="font-medium">
                            5 à 15 millions FCFA
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="large" id="budget-large" />
                          <Label htmlFor="budget-large" className="font-medium">
                            15 à 30 millions FCFA
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="enterprise" id="budget-enterprise" />
                          <Label htmlFor="budget-enterprise" className="font-medium">
                            Plus de 30 millions FCFA
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations complémentaires</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="additional">Commentaires additionnels</Label>
                      <Textarea
                        id="additional"
                        placeholder="Toute information supplémentaire qui pourrait nous aider à mieux comprendre vos besoins..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="consent" required />
                      <Label htmlFor="consent" className="font-normal">
                        J&apos;accepte que mes données soient utilisées pour traiter ma demande de devis. Pour en savoir
                        plus sur la gestion de vos données et vos droits, consultez notre
                        <Link href="/privacy-policy" className="text-swiftech-blue hover:underline">
                          {" "}
                          politique de confidentialité
                        </Link>
                        .
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-swiftech-blue hover:bg-swiftech-darkBlue"
                  >
                    Envoyer ma demande de devis
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Pourquoi choisir Swiftech ?</h2>
            <p className="text-lg text-gray-700">
              Nous nous engageons à vous fournir des solutions sur mesure qui répondent parfaitement à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise technique",
                description:
                  "Notre équipe d'experts certifiés maîtrise les technologies les plus récentes pour vous offrir des solutions de pointe.",
              },
              {
                title: "Solutions personnalisées",
                description:
                  "Nous adaptons nos services à vos besoins spécifiques pour vous garantir une solution parfaitement alignée avec vos objectifs.",
              },
              {
                title: "Support réactif",
                description:
                  "Notre équipe de support est disponible pour vous accompagner et résoudre rapidement tout problème que vous pourriez rencontrer.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-swiftech-blue/10 rounded-full p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-swiftech-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Notre processus</h2>
            <p className="text-lg text-gray-700">
              Voici comment nous procédons après réception de votre demande de devis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Analyse",
                  description: "Nous analysons votre demande et identifions vos besoins spécifiques.",
                },
                {
                  step: "2",
                  title: "Consultation",
                  description: "Nous organisons un appel pour discuter en détail de votre projet.",
                },
                {
                  step: "3",
                  title: "Proposition",
                  description: "Nous élaborons une proposition détaillée avec un devis personnalisé.",
                },
                {
                  step: "4",
                  title: "Démarrage",
                  description: "Après validation, nous lançons votre projet selon le calendrier convenu.",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-swiftech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-swiftech-blue font-bold text-xl">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

