import { Header } from "./components/Header";
import { InfoCard } from "./components/InfoCard";
import { Footer } from "./components/Footer";
import { PotatoMascot } from "./components/PotatoMascot";
import { CarrotMascot } from "./components/CarrotMascot";
import { TomatoMascot } from "./components/TomatoMascot";
import { NutritionPage } from "./components/NutritionPage";
import { useState } from "react";
import {
  BookOpen,
  Users,
  Heart,
  Utensils,
  Apple,
  HandHeart,
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"accueil" | "nutrition">("accueil");

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
                        onClick={() => setCurrentPage("nutrition")}
                        className="bg-[#F59A4A] text-white px-8 py-4 rounded-full hover:bg-[#F4C16E] transition-all hover:scale-105 shadow-lg"
                      >
                        Découvrir le projet
                      </button>
                      <button className="bg-[#4C7A46] text-white px-8 py-4 rounded-full hover:bg-[#27532F] transition-all hover:scale-105 shadow-lg">
                        Nos recettes
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

          {/* Section Services supplémentaires */}
          <section className="py-16 px-4 bg-[#FFFDF4]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-[#27532F] mb-4">
                  Ce que nous proposons
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard
                  icon={
                    <Utensils size={40} className="text-white" />
                  }
                  title="Recettes simples"
                  description="Des recettes faciles, rapides et économiques pour manger sainement sans se ruiner ni passer des heures en cuisine."
                  color="orange"
                />
                <InfoCard
                  icon={<Apple size={40} className="text-white" />}
                  title="Conseils nutrition"
                  description="Des informations claires et pratiques pour comprendre les bases d'une alimentation équilibrée et adaptée."
                  color="green"
                />
                <InfoCard
                  icon={
                    <HandHeart size={40} className="text-white" />
                  }
                  title="Communauté solidaire"
                  description="Un espace d'échange et de partage où les étudiants peuvent s'entraider et trouver du soutien."
                  color="yellow"
                />
              </div>
            </div>
          </section>

          {/* Section Call to Action */}
          <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-[#F59A4A] to-[#F4C16E] rounded-[3rem] p-8 sm:p-12 text-center shadow-2xl">
                <div className="flex justify-center gap-4 mb-6">
                  <PotatoMascot size={80} />
                  <CarrotMascot size={80} />
                </div>
                <h2 className="text-white mb-4">
                  Rejoignez l'aventure !
                </h2>
                <p className="text-white text-xl mb-8">
                  Ensemble, cultivons de meilleures habitudes
                  alimentaires et soutenons-nous mutuellement.
                </p>
                <button className="bg-white text-[#27532F] px-10 py-4 rounded-full hover:bg-[#E8F2D5] transition-all hover:scale-105 shadow-xl">
                  Nous contacter
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <NutritionPage />
      )}

      <Footer />
    </div>
  );
}