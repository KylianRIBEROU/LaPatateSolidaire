// src/App.tsx
// Version mise à jour avec la nouvelle architecture de navigation

import { Header } from "./components/ui/Header";
import { InfoCard } from "./components/ui/InfoCard";
import { Footer } from "./components/ui/Footer";
import { PotatoMascot } from "./components/svg/PotatoMascot";
import { CarrotMascot } from "./components/svg/CarrotMascot";
import { TomatoMascot } from "./components/svg/TomatoMascot";

import { NutrimentsPage } from "./components/ui/NutrimentsPage";
import { BienSalimenter } from "./components/ui/BienSalimenterPage";
import { RecettesPage } from "./components/ui/RecettesPage";
import { ConseillsFAQPage } from "./components/ui/ConseillsFAQPage";
import { AidesLavalPage } from "./components/ui/AidesLavalPage";
import { useState } from "react";
import {
  BookOpen,
  Users,
  Heart,
  Utensils,
  Apple,
  HandHeart,
  Calculator,
  HelpCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
      "accueil" | "nutriments" | "bien-salimenter" | "recettes" | "conseils-faq" | "aides-laval"
  >("accueil");

  const items = [
  {
    page: "nutriments" as const,
    icon: <Apple size={32} className="text-white" />,
    color: "bg-[#4C7A46]",
    title: "Les nutriments",
    desc: "Comprends le rôle des glucides, protéines et lipides dans ton corps.",
  },
  {
    page: "bien-salimenter" as const,
    icon: <Calculator size={32} className="text-white" />,
    color: "bg-[#F59A4A]",
    title: "Bien s'alimenter",
    desc: "Calcule tes besoins caloriques et découvre comment équilibrer tes repas.",
  },
  {
    page: "recettes" as const,
    icon: <Utensils size={32} className="text-white" />,
    color: "bg-[#F4C16E]",
    title: "Trouver des recettes",
    desc: "Accède à des sites de recettes simples, rapides et économiques.",
  },
  {
    page: "conseils-faq" as const,
    icon: <HelpCircle size={32} className="text-white" />,
    color: "bg-[#4C7A46]",
    title: "Conseils & FAQ",
    desc: "Retrouve des astuces pratiques et les réponses aux questions courantes.",
  },
  {
    page: "aides-laval" as const,
    icon: <MapPin size={32} className="text-white" />,
    color: "bg-[#F59A4A]",
    title: "Les aides à Laval",
    desc: "Marchés solidaires, food-truck, Restos du Cœur, supermarchés... tout est là.",
  },
];

const renderCard = (item: typeof items[number]) => (
  <button
    key={item.page}
    onClick={() => {
      setCurrentPage(item.page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="
      bg-[#FFFDF4]
      rounded-2xl
      p-6
      w-64
      border-2 border-[#E4E4D8]
      shadow-md
      hover:shadow-xl
      transition-all
      hover:-translate-y-1
      text-left
      group
    "
  >
    <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
      {item.icon}
    </div>
    <h3 className="text-[#27532F] text-lg font-bold mb-2">
      {item.title}
    </h3>
    <p className="text-[#4C7A46] text-sm mb-3">
      {item.desc}
    </p>
    <span className="inline-flex items-center gap-1 text-[#F59A4A] font-bold text-sm group-hover:gap-2 transition-all">
      Découvrir <ArrowRight size={16} />
    </span>
  </button>
);



  return (
      <div className="min-h-screen bg-[#E8F2D5]">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />

        {currentPage === "accueil" ? (
            <>
              {/* Hero Section */}
              <section id="accueil" className="py-16 sm:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="bg-[#FFFDF4] rounded-[3rem] p-8 sm:p-16 shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                      {/* Contenu textuel */}
                      <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[#27532F] mb-6">
                          Bienvenue sur
                          <br />
                          La Patate Solidaire
                        </h1>
                        <p className="text-[#4C7A46] text-xl mb-8">
                          Une initiative étudiante pour mieux comprendre
                          vos habitudes alimentaires et vous accompagner
                          vers une nutrition saine, accessible et
                          solidaire.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                          <button
                              onClick={() => setCurrentPage("nutriments")}
                              className="bg-[#F59A4A] text-white px-8 py-4 rounded-full hover:bg-[#F4C16E] transition-all hover:scale-105 shadow-lg"
                          >
                            Découvrir les nutriments
                          </button>
                          <button
                              onClick={() => setCurrentPage("bien-salimenter")}
                              className="bg-[#4C7A46] text-white px-8 py-4 rounded-full hover:bg-[#27532F] transition-all hover:scale-105 shadow-lg"
                          >
                            Calculer mes besoins
                          </button>
                        </div>
                      </div>

                      {/* Mascottes */}
                      <div className="flex-1 flex justify-center items-center gap-4">
                        <div className="flex flex-col gap-4">
                          <div
                              className="animate-bounce"
                              style={{
                                animationDelay: "0s",
                                animationDuration: "3s",
                              }}
                          >
                            <CarrotMascot size={100} />
                          </div>
                          <div
                              className="animate-bounce"
                              style={{
                                animationDelay: "1s",
                                animationDuration: "3s",
                              }}
                          >
                            <TomatoMascot size={100} />
                          </div>
                        </div>
                        <div
                            className="animate-bounce"
                            style={{
                              animationDelay: "0.5s",
                              animationDuration: "3s",
                            }}
                        >
                          <PotatoMascot size={140} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="max-w-4xl mx-auto pb-8 border-b border-[#4C7A46]/30"></div>


              {/* Section Informations - Objectifs */}
              <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-[#27532F] mb-4">
                      Nos objectifs
                    </h2>
                    <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
                      La Patate Solidaire s'engage à promouvoir une
                      alimentation équilibrée et à soutenir les
                      étudiants dans leur quotidien.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InfoCard
                        icon={
                          <BookOpen size={40} className="text-white" />
                        }
                        title="Mieux comprendre"
                        description="Analyser vos habitudes alimentaires pour vous aider à faire des choix plus sains et adaptés à votre budget étudiant."
                        color="orange"
                    />
                    <InfoCard
                        icon={<Users size={40} className="text-white" />}
                        title="Soutenir les étudiants"
                        description="Accompagner la communauté étudiante avec des ressources accessibles et des conseils nutritionnels adaptés."
                        color="green"
                    />
                    <InfoCard
                        icon={<Heart size={40} className="text-white" />}
                        title="Initiative solidaire"
                        description="Créer un réseau d'entraide pour que personne ne soit laissé de côté face aux défis de l'alimentation étudiante."
                        color="yellow"
                    />
                  </div>
                </div>
              </section>

              {/* Section : Explorer le site */}
              <section className="py-16 px-4 bg-[#FFFDF4]">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-[#27532F] mb-3">Explore le site</h2>
                    <p className="text-[#4C7A46] text-lg">
                      Chaque rubrique t'apporte des outils concrets pour mieux t'alimenter au quotidien.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-6">

  {/* Ligne du haut */}
  <div className="flex gap-6">
    {items.slice(0, 3).map(renderCard)}
  </div>

  {/* Ligne du bas */}
  <div className="flex gap-6">
    {items.slice(3, 5).map(renderCard)}
  </div>
</div>

                </div>
              </section>
            </>
        ) : currentPage === "nutriments" ? (
            <NutrimentsPage />
        ) : currentPage === "bien-salimenter" ? (
            <BienSalimenter />
        ) : currentPage === "recettes" ? (
            <RecettesPage />
        ) : currentPage === "conseils-faq" ? (
            <ConseillsFAQPage />
        ) : (
            <AidesLavalPage />
        )}

        <Footer onNavigate={setCurrentPage} />
      </div>
  );
}