"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, FileText, Settings, PlusCircle, Edit, Trash2, Eye } from "lucide-react"

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Les meilleures pratiques de cybersécurité pour 2023",
      excerpt:
        "Découvrez les stratégies essentielles pour protéger votre entreprise contre les cybermenaces émergentes.",
      date: "15 juin 2023",
      category: "Cybersécurité",
      status: "Publié",
    },
    {
      id: 2,
      title: "Comment le Cloud Computing révolutionne les PME",
      excerpt: "Analyse des avantages concurrentiels que le cloud apporte aux petites et moyennes entreprises.",
      date: "2 juin 2023",
      category: "Cloud",
      status: "Publié",
    },
    {
      id: 3,
      title: "L'importance d'un plan de reprise d'activité",
      excerpt:
        "Pourquoi chaque entreprise devrait disposer d'un PRA solide et comment le mettre en place efficacement.",
      date: "28 mai 2023",
      category: "Continuité d'activité",
      status: "Brouillon",
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "Brouillon",
  })

  const handleNewPostChange = (field: string, value: string) => {
    setNewPost((prev) => ({ ...prev, [field]: value }))
  }

  const handleCreatePost = () => {
    const newId = blogPosts.length > 0 ? Math.max(...blogPosts.map((post) => post.id)) + 1 : 1
    const today = new Date()
    const formattedDate = today.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })

    setBlogPosts([
      ...blogPosts,
      {
        id: newId,
        title: newPost.title,
        excerpt: newPost.excerpt,
        date: formattedDate,
        category: newPost.category,
        status: newPost.status,
      },
    ])

    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      status: "Brouillon",
    })
  }

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Administrateur</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogPosts.length}</div>
              <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Articles Publiés</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogPosts.filter((post) => post.status === "Publié").length}</div>
              <p className="text-xs text-muted-foreground">+1 depuis le mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visiteurs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+15% depuis le mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux d'engagement</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5%</div>
              <p className="text-xs text-muted-foreground">+5% depuis le mois dernier</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="posts">Articles</TabsTrigger>
            <TabsTrigger value="create">Créer un article</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tableau de bord</CardTitle>
                <CardDescription>Aperçu de l'activité récente et des statistiques du blog.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Graphique d'activité</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des articles</CardTitle>
                <CardDescription>Gérez vos articles de blog existants.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 bg-gray-100 p-4 font-medium">
                    <div className="col-span-2">Titre</div>
                    <div>Catégorie</div>
                    <div>Date</div>
                    <div>Statut</div>
                    <div>Actions</div>
                  </div>
                  {blogPosts.map((post) => (
                    <div key={post.id} className="grid grid-cols-6 p-4 border-t">
                      <div className="col-span-2 font-medium">{post.title}</div>
                      <div>{post.category}</div>
                      <div>{post.date}</div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            post.status === "Publié" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Créer un nouvel article</CardTitle>
                <CardDescription>Rédigez et publiez un nouvel article sur le blog.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Titre
                  </label>
                  <Input
                    id="title"
                    placeholder="Titre de l'article"
                    value={newPost.title}
                    onChange={(e) => handleNewPostChange("title", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="excerpt" className="text-sm font-medium">
                    Extrait
                  </label>
                  <Textarea
                    id="excerpt"
                    placeholder="Bref résumé de l'article"
                    value={newPost.excerpt}
                    onChange={(e) => handleNewPostChange("excerpt", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="content" className="text-sm font-medium">
                    Contenu
                  </label>
                  <Textarea
                    id="content"
                    placeholder="Contenu de l'article"
                    rows={10}
                    value={newPost.content}
                    onChange={(e) => handleNewPostChange("content", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Catégorie
                    </label>
                    <Select value={newPost.category} onValueChange={(value) => handleNewPostChange("category", value)}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cybersécurité">Cybersécurité</SelectItem>
                        <SelectItem value="Cloud">Cloud</SelectItem>
                        <SelectItem value="Infogérance">Infogérance</SelectItem>
                        <SelectItem value="Continuité d'activité">Continuité d'activité</SelectItem>
                        <SelectItem value="Innovation">Innovation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="status" className="text-sm font-medium">
                      Statut
                    </label>
                    <Select value={newPost.status} onValueChange={(value) => handleNewPostChange("status", value)}>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Brouillon">Brouillon</SelectItem>
                        <SelectItem value="Publié">Publié</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleCreatePost} className="bg-swiftech-blue hover:bg-swiftech-darkBlue">
                  <PlusCircle className="h-4 w-4 mr-2" /> Créer l'article
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres</CardTitle>
                <CardDescription>Gérez les paramètres de votre blog.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="blog-title" className="text-sm font-medium">
                    Titre du blog
                  </label>
                  <Input id="blog-title" defaultValue="Blog Swiftech" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="blog-description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="blog-description"
                    defaultValue="Actualités et conseils sur l'informatique et la cybersécurité par Swiftech."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Options de modération</label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="moderate-comments" className="rounded border-gray-300" />
                    <label htmlFor="moderate-comments">Modérer les commentaires avant publication</label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-swiftech-blue hover:bg-swiftech-darkBlue">
                  <Settings className="h-4 w-4 mr-2" /> Enregistrer les paramètres
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

