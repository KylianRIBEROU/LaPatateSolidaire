import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: "accueil" | "nutriments" | "bien-salimenter" | "recettes" | "conseils-faq") => void;
  currentPage: "accueil" | "nutriments" | "bien-salimenter" | "recettes" | "conseils-faq";
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: "accueil" | "nutriments" | "bien-salimenter" | "recettes" | "conseils-faq") => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
      <header className="bg-[#FFFDF4] shadow-sm sticky top-0 z-50">
<div className="w-full px-8">
  <div className="flex items-center justify-between py-2">

            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick("accueil")}>
              <img src="src/assets/logo_patatesolidaire.png" alt="La Patate Solidaire" className="h-32 sm:h-36" />
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
              <button
                  onClick={() => handleNavClick("accueil")}
                  className={`${
                      currentPage === "accueil" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors text-xl font-bold`}
              >
                Accueil
              </button>
              
              <button
                  onClick={() => handleNavClick("nutriments")}
                  className={`${
                      currentPage === "nutriments" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors text-xl font-bold`}
              >
                Les nutriments
              </button>
              
              <button
                  onClick={() => handleNavClick("bien-salimenter")}
                  className={`${
                      currentPage === "bien-salimenter" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors text-xl font-bold`}
              >
                Bien s'alimenter
              </button>
              
              <button
                  onClick={() => handleNavClick("recettes")}
                  className={`${
                      currentPage === "recettes" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors text-xl font-bold`}
              >
                Trouver des recettes
              </button>

              <button
                  onClick={() => handleNavClick("conseils-faq")}
                  className={`${
                      currentPage === "conseils-faq" ? "text-[#F59A4A]" : "text-[#27532F]"
                  } hover:text-[#4C7A46] transition-colors text-xl font-bold`}
              >
                Conseils & FAQ
              </button>
            </nav>

            {/* Menu Mobile Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#27532F] p-2 ml-auto"
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
                    } hover:text-[#4C7A46] transition-colors py-2 text-left text-2xl font-bold`}
                >
                  Accueil
                </button>

                <button
                    onClick={() => handleNavClick("nutriments")}
                    className={`${
                        currentPage === "nutriments" ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors py-2 text-left text-2xl font-bold`}
                >
                  Les nutriments
                </button>
                
                <button
                    onClick={() => handleNavClick("bien-salimenter")}
                    className={`${
                        currentPage === "bien-salimenter" ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors py-2 text-left text-2xl font-bold`}
                >
                  Bien s'alimenter
                </button>

                <button
                    onClick={() => handleNavClick("recettes")}
                    className={`${
                        currentPage === "recettes" ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors py-2 text-left text-2xl font-bold`}
                >
                  Trouver des recettes
                </button>

                <button
                    onClick={() => handleNavClick("conseils-faq")}
                    className={`${
                        currentPage === "conseils-faq" ? "text-[#F59A4A]" : "text-[#27532F]"
                    } hover:text-[#4C7A46] transition-colors py-2 text-left text-2xl font-bold`}
                >
                  Conseils & FAQ
                </button>
              </nav>
          )}
        </div>
      </header>
  );
}