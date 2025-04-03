import Image from "next/image"

export const metadata = {
  title: "Politique de Confidentialité | Swiftech",
  description: "Découvrez comment Swiftech protège vos données personnelles et respecte votre vie privée.",
}

export default function PrivacyPolicyPage() {
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
            Politique de <span className="font-bold">Confidentialité</span>
          </h1>
          <div className="w-20 h-1 bg-swiftech-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous nous engageons à protéger vos données personnelles et à respecter votre vie privée.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700">
                La présente politique de confidentialité décrit comment Swiftech collecte, utilise et protège les
                informations que vous nous fournissez lorsque vous utilisez notre site web et nos services. Nous nous
                engageons à assurer la protection de votre vie privée et à traiter vos données personnelles conformément
                aux lois et réglementations applicables en matière de protection des données.
              </p>
              <p className="text-gray-700">
                En utilisant notre site web et nos services, vous consentez à la collecte et à l'utilisation de vos
                informations conformément à cette politique. Si vous n'acceptez pas les termes de cette politique,
                veuillez ne pas utiliser notre site web ou nos services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Informations que nous collectons</h2>
              <p className="text-gray-700">Nous pouvons collecter les types d'informations suivants :</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Informations personnelles</strong> : nom, adresse e-mail, numéro de téléphone, adresse
                  postale, et autres informations similaires que vous nous fournissez volontairement.
                </li>
                <li>
                  <strong>Informations de navigation</strong> : adresse IP, type de navigateur, fournisseur d'accès
                  Internet, pages de référence/sortie, système d'exploitation, horodatage et données de navigation.
                </li>
                <li>
                  <strong>Informations sur l'appareil</strong> : type d'appareil, identifiants uniques, système
                  d'exploitation, et informations sur le réseau mobile.
                </li>
                <li>
                  <strong>Cookies et technologies similaires</strong> : nous utilisons des cookies et des technologies
                  similaires pour améliorer votre expérience sur notre site web.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comment nous utilisons vos informations</h2>
              <p className="text-gray-700">
                Nous utilisons les informations que nous collectons pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fournir, exploiter et maintenir notre site web et nos services</li>
                <li>Améliorer, personnaliser et développer notre site web et nos services</li>
                <li>Comprendre et analyser comment vous utilisez notre site web et nos services</li>
                <li>Développer de nouveaux produits, services, fonctionnalités et fonctionnalités</li>
                <li>Communiquer avec vous, directement ou par l'intermédiaire de l'un de nos partenaires</li>
                <li>Vous envoyer des e-mails</li>
                <li>Détecter et prévenir la fraude</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partage de vos informations</h2>
              <p className="text-gray-700">
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons
                partager vos informations dans les situations suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Avec des prestataires de services tiers qui nous fournissent des services et qui sont tenus par
                  contrat de garder vos informations confidentielles
                </li>
                <li>
                  Pour se conformer à la loi ou pour protéger les droits, la propriété ou la sécurité de Swiftech, de
                  nos clients ou d'autres
                </li>
                <li>Avec votre consentement ou selon vos instructions</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité de vos informations</h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles
                contre tout accès, altération, divulgation ou destruction non autorisés. Ces mesures comprennent des
                pare-feu, le chiffrement des données, des contrôles d'accès physiques à nos centres de données et des
                contrôles d'autorisation d'accès aux informations.
              </p>
              <p className="text-gray-700">
                Cependant, aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est sûre à
                100%. Par conséquent, bien que nous nous efforcions d'utiliser des moyens commercialement acceptables
                pour protéger vos informations personnelles, nous ne pouvons garantir leur sécurité absolue.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-700">
                Vous avez certains droits concernant vos informations personnelles, notamment :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Le droit d'accéder à vos informations personnelles</li>
                <li>Le droit de rectifier ou mettre à jour vos informations personnelles</li>
                <li>Le droit de demander la suppression de vos informations personnelles</li>
                <li>Le droit de vous opposer au traitement de vos informations personnelles</li>
                <li>Le droit à la portabilité des données</li>
                <li>Le droit de retirer votre consentement à tout moment</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse indiquée ci-dessous.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications de cette politique</h2>
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
                modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à
                consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nous contacter</h2>
              <p className="text-gray-700">
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter :
              </p>
              <ul className="list-none pl-0 text-gray-700 space-y-2">
                <li>
                  <strong>Adresse :</strong> 332 Rue Foucauld Akwa, Douala, Cameroon
                </li>
                <li>
                  <strong>Téléphone :</strong> +237 653 815 919
                </li>
                <li>
                  <strong>Email :</strong> privacy@swiftech.cm
                </li>
              </ul>
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

