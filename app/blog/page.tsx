import Link from "next/link"
import { ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog et Actualités IT | Swiftech",
  description:
    "Découvrez les dernières tendances, conseils et innovations dans le domaine de l'informatique et de la cybersécurité sur le blog de Swiftech.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Les meilleures pratiques de cybersécurité pour 2023",
      excerpt:
        "Découvrez les stratégies essentielles pour protéger votre entreprise contre les cybermenaces émergentes et renforcer votre posture de sécurité.",
      date: "15 juin 2023",
      author: "Jean Dupont",
      category: "Cybersécurité",
      tags: ["sécurité", "cyberattaques", "protection des données"],
      image: "/placeholder.svg?height=200&width=400",
      slug: "/blog/cybersecurite-pratiques-2023",
    },
    {
      title: "Comment le Cloud Computing révolutionne les PME",
      excerpt:
        "Analyse des avantages concurrentiels que le cloud apporte aux petites et moyennes entreprises et comment l'adopter efficacement.",
      date: "2 juin 2023",
      author: "Marie Martin",
      category: "Cloud",
      tags: ["cloud computing", "transformation digitale", "PME"],
      image: "/placeholder.svg?height=200&width=400",
      slug: "/blog/cloud-computing-pme",
    },
    {
      title: "L'importance d'un plan de reprise d'activité",
      excerpt:
        "Pourquoi chaque entreprise devrait disposer d'un PRA solide et comment le mettre en place efficacement pour assurer la continuité de vos opérations.",
      date: "28 mai 2023",
      author: "Thomas Bernard",
      category: "Continuité d'activité",
      tags: ["PRA", "gestion des risques", "continuité"],
      image: "/placeholder.svg?height=200&width=400",
      slug: "/blog/plan-reprise-activite",
    },
    {
      title: "Les tendances en matière d'infogérance IT en 2023",
      excerpt:
        "Découvrez comment l'infogérance IT évolue et quelles sont les nouvelles approches pour optimiser la gestion de votre infrastructure.",
      date: "15 mai 2023",
      author: "Sophie Leroy",
      category: "Infogérance",
      tags: ["infogérance", "IT", "externalisation"],
      image: "/placeholder.svg?height=200&width=400",
      slug: "/blog/tendances-infogerance-2023",
    },
    {
      title: "Comment sécuriser efficacement votre réseau d'entreprise",
      excerpt:
        "Guide complet pour mettre en place une stratégie de sécurité réseau robuste et protéger vos actifs numériques contre les intrusions.",
      date: "5 mai 2023",
      author: "Pierre Dubois",
      category: "Réseaux",
      tags: ["sécurité réseau", "firewall", "VPN"],
      image: "/placeholder.svg?height=200&width=400",
      slug: "/blog/securiser-reseau-entreprise",
    },
    {
      title: "L'intelligence artificielle au service de la cybersécurité",
      excerpt:
        "Comment l'IA transforme la détection des menaces et la réponse aux incidents de sécurité pour une protection plus efficace.",
      date: "22 avril 2023",
      author: "Claire Moreau",
      category: "Innovation",
      tags: ["IA", "cybersécurité", "machine learning"],
      image: "/placeholder.svg?height=200&width=400",
      slug: "/blog/ia-cybersecurite",
    },
  ]

  const categories = [
    "Cybersécurité",
    "Cloud",
    "Infogérance",
    "Innovation",
    "Réseaux",
    "Continuité d'activité",
    "Développement",
  ]

  const popularTags = [
    "sécurité",
    "cloud computing",
    "transformation digitale",
    "IA",
    "cybersécurité",
    "infogérance",
    "PME",
    "PRA",
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Actualités</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Restez informé des dernières tendances et innovations dans le domaine de l'informatique et de la
            cybersécurité.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Rechercher un article..." className="pl-10" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>Par {post.author}</span>
                      </div>
                      <CardTitle className="text-xl">
                        <Link href={post.slug} className="hover:text-blue-700 transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base">{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-blue-700 p-0 hover:bg-transparent hover:text-blue-800"
                      >
                        <Link href={post.slug} className="flex items-center gap-2">
                          Lire l'article <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button variant="outline">Charger plus d'articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-blue-600" />
                  Catégories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between text-gray-700 hover:text-blue-700 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Badge variant="secondary" className="hover:bg-gray-200 cursor-pointer">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Post */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Article à la une</h3>
                <div className="space-y-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Article à la une"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    <Link href="/blog/featured-post" className="hover:text-blue-700 transition-colors">
                      5 façons de protéger votre entreprise contre les ransomwares
                    </Link>
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Les ransomwares représentent une menace croissante pour les entreprises. Découvrez comment vous
                    protéger efficacement.
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-blue-700 p-0 hover:bg-transparent hover:text-blue-800"
                  >
                    <Link href="/blog/featured-post" className="flex items-center gap-2">
                      Lire l'article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-700 mb-4">Abonnez-vous pour recevoir nos derniers articles et actualités IT.</p>
                <div className="space-y-4">
                  <Input placeholder="Votre adresse email" />
                  <Button className="w-full">S'abonner</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

