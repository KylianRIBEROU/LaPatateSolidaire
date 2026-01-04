import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PotatoMascot } from '../svg/PotatoMascot';

interface HeaderProps {
  onNavigate: (page: "accueil" | "nutriments" | "bien-salimenter" | "recettes") => void;
  currentPage: "accueil" | "nutriments" | "bien-salimenter" | "recettes";
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNutritionMenuOpen, setIsNutritionMenuOpen] = useState(false);

  const handleNavClick = (page: "accueil" | "nutriments" | "bien-salimenter" | "recettes") => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsNutritionMenuOpen(false);
  };

  const toggleNutritionMenu = () => {
    setIsNutritionMenuOpen(!isNutritionMenuOpen);
  };

  const isNutritionActive = currentPage === "nutriments" || currentPage === "bien-salimenter";

  return (
      <header className="bg-[#FFFDF4] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo et mascotte */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("accueil")}>
              <PotatoMascot size={60} />
              <div>
                <h1 className="text-[#27532F] text-2xl sm:text-3xl">La Patate Solidaire</h1>
                <p className="text-[#4C7A46] text-sm hidden sm:block">Nutrition & Entraide étudiante</p>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                  onClick={() => handleNavClick("accueil")}
                  className={`${
                      currentPage === "accueil" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors`}
              >
                Accueil
              </button>

              {/* Menu déroulant Nutrition */}
              <div className="relative group">
                <button
                    onMouseEnter={() => setIsNutritionMenuOpen(true)}
                    onMouseLeave={() => setIsNutritionMenuOpen(false)}
                    className={`${
                        isNutritionActive ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors flex items-center gap-1`}
                >
                  La nutrition
                  <ChevronDown size={16} className={`transition-transform ${isNutritionMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Sous-menu */}
                {isNutritionMenuOpen && (
                    <div
                        onMouseEnter={() => setIsNutritionMenuOpen(true)}
                        onMouseLeave={() => setIsNutritionMenuOpen(false)}
                        className="absolute top-full left-0 mt-2 bg-[#FFFDF4] shadow-lg rounded-xl py-2 min-w-[200px] border-2 border-[#E8F2D5]"
                    >
                      <button
                          onClick={() => handleNavClick("nutriments")}
                          className={`${
                              currentPage === "nutriments" ? "text-[#F59A4A] bg-[#E8F2D5]" : "text-[#27532F]"
                          } hover:bg-[#E8F2D5] transition-colors w-full text-left px-4 py-3`}
                      >
                        Les nutriments
                      </button>
                      <button
                          onClick={() => handleNavClick("bien-salimenter")}
                          className={`${
                              currentPage === "bien-salimenter" ? "text-[#F59A4A] bg-[#E8F2D5]" : "text-[#27532F]"
                          } hover:bg-[#E8F2D5] transition-colors w-full text-left px-4 py-3`}
                      >
                        Bien s'alimenter
                      </button>
                    </div>
                )}
              </div>

              <button
                  onClick={() => handleNavClick("recettes")}
                  className={`${
                      currentPage === "recettes" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors`}
              >
                Recettes
              </button>

              <a href="#contact" className="text-[#27532F] hover:text-[#4C7A46] transition-colors">
                Contact
              </a>
            </nav>

            {/* Menu Mobile Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#27532F] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation Mobile */}
          {isMenuOpen && (
              <nav className="md:hidden pb-4 flex flex-col gap-3">
                <button
                    onClick={() => handleNavClick("accueil")}
                    className={`${
                        currentPage === "accueil" ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors py-2 text-left`}
                >
                  Accueil
                </button>

                {/* Menu déroulant mobile */}
                <div>
                  <button
                      onClick={toggleNutritionMenu}
                      className={`${
                          isNutritionActive ? "text-[#F59A4A]" : "text-[#27532F]"
                      } hover:text-[#4C7A46] transition-colors py-2 text-left flex items-center gap-1 w-full`}
                  >
                    La nutrition
                    <ChevronDown size={16} className={`transition-transform ${isNutritionMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isNutritionMenuOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        <button
                            onClick={() => handleNavClick("nutriments")}
                            className={`${
                                currentPage === "nutriments" ? "text-[#F59A4A]" : "text-[#27532F]"
                            } hover:text-[#4C7A46] transition-colors py-2 text-left block`}
                        >
                          Les nutriments
                        </button>
                        <button
                            onClick={() => handleNavClick("bien-salimenter")}
                            className={`${
                                currentPage === "bien-salimenter" ? "text-[#F59A4A]" : "text-[#27532F]"
                            } hover:text-[#4C7A46] transition-colors py-2 text-left block`}
                        >
                          Bien s'alimenter
                        </button>
                      </div>
                  )}
                </div>

                <button
                    onClick={() => handleNavClick("recettes")}
                    className={`${
                        currentPage === "recettes" ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors py-2 text-left`}
                >
                  Recettes
                </button>

                <a
                    href="#contact"
                    className="text-[#27532F] hover:text-[#4C7A46] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
          )}
        </div>
      </header>
  );
}