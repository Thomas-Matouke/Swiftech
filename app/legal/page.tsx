import Image from "next/image"

export const metadata = {
  title: "Mentions Légales | Swiftech",
  description:
    "Consultez les mentions légales de Swiftech, informations juridiques et conditions d'utilisation de notre site web et de nos services.",
}

export default function LegalPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#111827] -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image src="/images/luxury-pattern.png" alt="Background pattern" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Mentions <span className="font-bold">Légales</span>
          </h1>
          <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Informations juridiques concernant notre entreprise et l'utilisation de notre site web.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Informations légales</h2>
              <p className="text-gray-700">Le site web swiftech.cm est édité par :</p>
              <ul className="list-none pl-0 text-gray-700 space-y-2">
                <li>
                  <strong>Raison sociale :</strong> Swiftech SARL
                </li>
                <li>
                  <strong>Forme juridique :</strong> Société à responsabilité limitée
                </li>
                <li>
                  <strong>Capital social :</strong> 1 000 000 FCFA
                </li>
                <li>
                  <strong>Siège social :</strong> 332 Rue Foucauld Akwa, Douala, Cameroon
                </li>
                <li>
                  <strong>Numéro d'immatriculation :</strong> RC/DLA/2015/B/123456
                </li>
                <li>
                  <strong>Numéro de TVA :</strong> CM123456789
                </li>
                <li>
                  <strong>Téléphone :</strong> +237 653 815 919
                </li>
                <li>
                  <strong>Email :</strong> contact@swiftech.cm
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Directeur de la publication</h2>
              <p className="text-gray-700">
                Le directeur de la publication du site web est M. Jean Dupont, en sa qualité de Directeur Général de
                Swiftech SARL.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
              <p className="text-gray-700">Le site web swiftech.cm est hébergé par :</p>
              <ul className="list-none pl-0 text-gray-700 space-y-2">
                <li>
                  <strong>Société :</strong> Vercel Inc.
                </li>
                <li>
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </li>
                <li>
                  <strong>Site web :</strong> vercel.com
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700">
                L'ensemble du contenu du site web swiftech.cm, incluant, de façon non limitative, les graphismes,
                images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la
                propriété exclusive de Swiftech SARL à l'exception des marques, logos ou contenus appartenant à d'autres
                sociétés partenaires ou auteurs.
              </p>
              <p className="text-gray-700">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même
                partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de
                Swiftech SARL. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une
                contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conditions d'utilisation</h2>
              <p className="text-gray-700">
                Le site web swiftech.cm est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels,
                connexion Internet, etc.) sont à sa charge.
              </p>
              <p className="text-gray-700">
                L'utilisateur s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et
                avec un navigateur de dernière génération mis à jour.
              </p>
              <p className="text-gray-700">
                Swiftech SARL met en œuvre tous les moyens dont elle dispose pour assurer une information fiable et une
                mise à jour fiable de ses sites Internet. Toutefois, des erreurs ou omissions peuvent survenir.
                L'utilisateur devra donc s'assurer de l'exactitude des informations auprès de Swiftech SARL, et signaler
                toutes modifications du site qu'il jugerait utile.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation de responsabilité</h2>
              <p className="text-gray-700">
                Swiftech SARL ne pourra être tenue responsable des dommages directs et indirects causés au matériel de
                l'utilisateur, lors de l'accès au site swiftech.cm, et résultant soit de l'utilisation d'un matériel ne
                répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
              <p className="text-gray-700">
                Swiftech SARL ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une
                perte de marché ou perte d'une chance) consécutifs à l'utilisation du site swiftech.cm.
              </p>
              <p className="text-gray-700">
                Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition
                des utilisateurs. Swiftech SARL se réserve le droit de supprimer, sans mise en demeure préalable, tout
                contenu déposé dans cet espace qui contreviendrait à la législation applicable au Cameroun, en
                particulier aux dispositions relatives à la protection des données.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liens hypertextes</h2>
              <p className="text-gray-700">
                Le site swiftech.cm peut contenir des liens hypertextes vers d'autres sites internet ou ressources
                disponibles sur Internet. Swiftech SARL ne dispose d'aucun moyen pour contrôler les sites en connexion
                avec ses sites Internet.
              </p>
              <p className="text-gray-700">
                Swiftech SARL ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
                Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du
                contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu'ils
                proposent, ou de tout usage qui peut être fait de ces éléments.
              </p>
              <p className="text-gray-700">
                Les risques liés à cette utilisation incombent pleinement à l'utilisateur, qui doit se conformer à leurs
                conditions d'utilisation.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Droit applicable et juridiction compétente</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par la loi camerounaise. En cas de litige, les tribunaux
                camerounais seront seuls compétents.
              </p>
              <p className="text-gray-700">
                Pour toute question relative à l'application des présentes mentions légales, vous pouvez nous contacter
                à l'adresse indiquée ci-dessus.
              </p>
            </div>

            <div>
              <p className="text-gray-700 italic">Dernière mise à jour : 2 avril 2025</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

