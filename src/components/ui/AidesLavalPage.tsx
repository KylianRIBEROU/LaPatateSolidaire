import { ExternalLink } from 'lucide-react';
import { type ReactNode } from 'react';
import imgMarcheSolidaire from '../../assets/marchesolidaire.jpg';
import imgFoodTruck from '../../assets/camioncroixrouge.jpg';
import imgRestos from '../../assets/restosducoeur1.jpg';
import imgMarches from '../../assets/marche_laval_illustration.jpg';
import logoCarrefour from '../../assets/logo_carrefour.png';
import logoLeclerc from '../../assets/logo_leclerc.png';
import logoIntermarche from '../../assets/logo_intermarche.png';
import logoTGTG from '../../assets/togoodtogo.png';

interface AideEntry {
  id: string;
  title: string;
  highlights: ReactNode[];
  description: string;
  link: string;
  imagePosition: "left" | "right";
  image: string;
}

const B = ({ children }: { children: ReactNode }) => (
  <strong className="underline">{children}</strong>
);

const aides: AideEntry[] = [
  {
    id: "marche-solidaire",
    title: "Marché Solidaire Étudiant",
    highlights: [
      "Créé en 2021 sur le campus, près de l'IUT de Laval",
      "Géré par la Croix-Rouge et la Banque Alimentaire de la Mayenne",
      <>Jusqu'à <B>7 kg de nourriture gratuite</B> par semaine et par étudiant</>,
      <>Ouvert les <B>mercredis et vendredis de 13h30 à 17h30</B></>,
      <>En moyenne <B>70 étudiants par semaine</B>, 12 bénévoles réguliers</>,
    ],
    description:
      "Installé dans un bâtiment modulaire face à l'IUT, le Marché Solidaire Étudiant distribue gratuitement des produits frais, secs et d'hygiène aux étudiants lavallois. Dès son ouverture, 120 étudiants s'y sont inscrits. « Logement, essence, nourriture… Si on peut faire des économies, on en profite » témoigne un étudiant bénéficiaire.",
    link: "https://www.oxygeneradio.com/laval-marche-solidaire-etudiant-logement-essence-nourriture-si-on-peut-faire-des-economies-on-en-profite",
    imagePosition: "left",
    image: imgMarcheSolidaire,
  },
  {
    id: "food-truck",
    title: "Food-truck Solidaire Croix-Rouge",
    highlights: [
      "Lancé fin 2022, camion neuf équipé de frigos et d'un congélateur",
      "Financé par l'État, le Conseil Départemental et la Croix-Rouge nationale",
      <>Présent à <B>Mayenne (vendredis)</B> et <B>quartier Ferrié, Laval (jeudis 15h30-17h30)</B></>,
      <>2023-2024 : <B>28 773 kg distribués</B> à <B>5 551 étudiants</B></>,
    ],
    description:
      "Pour n'oublier personne, la Croix-Rouge de Laval s'est dotée d'un food-truck solidaire qui sillonne les campus isolés. Chaque semaine, il apporte fruits, légumes, produits laitiers et essentiels d'hygiène directement aux étudiants infirmiers de Mayenne et à ceux du quartier Ferrié.",
    link: "https://www.croix-rouge.fr/vos-dons-sont-au-coeur-de-nos-actions/un-food-truck-solidaire-pare-a-la-precarite-alimentaire-des-etudiants",
    imagePosition: "right",
    image: imgFoodTruck,
  },
  {
    id: "restos-du-coeur",
    title: "Les Restos du Cœur de la Mayenne",
    highlights: [
      <><B>119 Boulevard Léon Bollée, 53000 Laval</B></>,
      <>438 bénévoles mobilisés</>,
      <>5 041 personnes accompagnées en 2024/2025</>,
      <>616 040 repas distribués sur la même période</>,
      "Aide alimentaire, logement, emploi, budget et accès culturel",
    ],
    description:
      "Association emblématique de la solidarité, les Restos du Cœur de la Mayenne ne se limitent pas à l'aide alimentaire. Ils proposent également un accompagnement vers le logement, l'emploi, la gestion de budget et l'accès à la culture, pour aider chacun à retrouver son autonomie.",
    link: "https://www.restosducoeur.org/associations-departementales/les-restos-du-coeur-de-la-mayenne/",
    imagePosition: "left",
    image: imgRestos,
  },
  {
    id: "marches-laval",
    title: "Les marchés de Laval",
    highlights: [
      <>Marché Central : <B>samedi matin</B>, centre-ville historique (150 commerçants dont 60 maraîchers)</>,
      <>Marché de la Gare : <B>samedi matin</B>, pied de la gare (exclusivement alimentaire)</>,
      <>Marché Château-Neuf : <B>mardi matin</B>, esplanade du Château-Neuf</>,
      <>Bourny : <B>mercredi</B>, Place de la Commune</>,
      <>Murat : <B>vendredi</B>, Rue Oudinot</>,
      <>Halles Saint-Louis : <B>du mardi au samedi</B>, 11 Allée du Vieux Saint Louis</>,
    ],
    description:
      "Les marchés de Laval sont ouverts à tous ! C'est l'occasion de trouver des produits frais, locaux et de qualité, directement auprès de producteurs et maraîchers de la région. Une découverte intéressante pour manger sainement.",
    link: "https://www.laval.fr/au-quotidien/commerces-et-marches/marches-hebdomadaires",
    imagePosition: "right",
    image: imgMarches,
  },
];

interface SupermarcheEntry {
  id: string;
  name: string;
  logo: string;
  address: string;
  marqueEco: string;
  specificite: string;
}

const supermarches: SupermarcheEntry[] = [
  {
    id: "carrefour",
    name: "Carrefour",
    logo: logoCarrefour,
    address: "61 Boulevard Félix Grat Saint Michel, 53000 Laval",
    marqueEco: "Simpl",
    specificite: "Paniers anti-gaspi pour fruits et légumes à prix réduit",
  },
  {
    id: "leclerc",
    name: "E.Leclerc",
    logo: logoLeclerc,
    address: "60 Av. de la Communauté Européenne, 53000 Laval",
    marqueEco: "Marque Repère / Éco+",
    specificite: "Rayon dédié aux produits à date de péremption proche à prix réduit",
  },
  {
    id: "intermarche",
    name: "Intermarché",
    logo: logoIntermarche,
    address: "ZI, 195 Avenue de Chanzy, Imp. Saint-Mélaine, 53000 Laval",
    marqueEco: "Top Budget",
    specificite: "Produits locaux et filières régionales à prix accessibles",
  },
];

export function AidesLavalPage() {
  return (
    <div className="min-h-screen bg-[#E8F2D5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12 pb-8 border-b border-[#4C7A46]/30">
          <h1 className="text-[#27532F] mb-4">Les aides à Laval</h1>
          <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
            Découvrez les ressources et initiatives solidaires disponibles à Laval
            pour accompagner les étudiants au quotidien
          </p>
        </div>

        {/* Cartes alternées */}
        {aides.map((aide) => (
          <section
            key={aide.id}
            className="bg-[#FFFDF4] rounded-3xl overflow-hidden mb-18 shadow-lg shadow-black/10"
          >
            <div
              className={`flex flex-col md:flex-row items-stretch min-h-[400px] ${
                aide.imagePosition === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <img
                  src={aide.image}
                  alt={aide.title}
                  className="w-full h-full object-cover min-h-[250px]"
                />
              </div>

              {/* Contenu textuel */}
              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
                <h2 className="text-[#27532F] mb-4">{aide.title}</h2>
                <ul className="space-y-2 mb-4">
                  {aide.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#4C7A46]">
                      <span className="text-[#F59A4A] mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#4C7A46] mb-4">{aide.description}</p>
                <a
                  href={aide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F59A4A] hover:text-[#F4C16E] font-bold transition-colors"
                >
                  En savoir plus...
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Séparateur */}
        <div className="border-t border-[#4C7A46]/30 my-16" />

        {/* Section Supermarchés */}
        <div className="text-center mb-12">
          <h2 className="text-[#27532F] mb-4">Les supermarchés à Laval</h2>
          <p className="text-[#4C7A46] text-lg max-w-3xl mx-auto">
            Quelques enseignes à connaître... 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {supermarches.map((s) => (
            <div
              key={s.id}
              className="bg-[#FFFDF4] rounded-2xl p-6 shadow-lg shadow-black/10 flex flex-col items-center text-center"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-20 object-contain mb-4"
              />
              <h3 className="text-[#27532F] text-xl font-bold underline mb-3">{s.name}</h3>
              <p className="text-[#F59A4A] text-sm font-bold mb-3">{s.address}</p>
              <p className="text-[#4C7A46] text-sm mb-3">
                <span className="font-bold text-[#27532F]">Marque économique :</span> {s.marqueEco}
              </p>
              <p className="text-[#4C7A46] text-sm">
                <span className="font-bold text-[#27532F]">Bon plan :</span> {s.specificite}
              </p>
            </div>
          ))}
        </div>

        {/* Card Too Good To Go */}
        <div className="bg-[#FFFDF4] rounded-2xl overflow-hidden shadow-lg shadow-black/10 mb-12">
          <div className="bg-[#00B37A] px-8 py-5 flex items-center justify-between">
            <span className="text-white text-2xl font-black tracking-tight">Too Good To Go</span>
            <img src={logoTGTG} alt="Too Good To Go" className="h-16 object-contain" />
          </div>
          <div className="p-6 sm:p-8 grid md:grid-cols-3 gap-6 items-start">
            <p className="md:col-span-2 text-[#4C7A46]">
              Too Good To Go est une application anti-gaspi qui permet d'acheter des{" "}
              <strong className="text-[#27532F]">paniers surprises à prix réduit</strong> (environ 3 à 4€)
              auprès de commerçants locaux en fin de journée. À Laval, ce sont{" "}
              <strong className="text-[#27532F]">+ de 10 enseignes partenaires</strong> qui proposent leurs
              invendus : boulangeries, épiceries, restaurants et plus encore.
              Un bon moyen de manger varié sans se ruiner tout en luttant contre le gaspillage alimentaire.
            </p>
            <div className="flex flex-col gap-3 text-sm text-[#4C7A46]">
              <p><span className="font-bold text-[#27532F]">Partenaires notables :</span></p>
              <ul className="space-y-1 list-none">
                {["Boulangerie Ange", "Marie Blachère", "Carrefour City", "So.bio", "La Mie Câline"].map((e) => (
                  <li key={e} className="flex items-center gap-2">
                    <span className="text-[#00B37A]">✓</span> {e}
                  </li>
                ))}
              </ul>
              <a
                href="https://toogoodtogo.com/fr-fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-[#00B37A] text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity w-fit"
              >
                Télécharger l'app <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Retour en haut */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block bg-[#F59A4A] text-white px-8 py-4 rounded-full hover:bg-[#F4C16E] transition-all hover:scale-105 shadow-lg"
          >
            Retour en haut
          </button>
        </div>
      </div>
    </div>
  );
}
