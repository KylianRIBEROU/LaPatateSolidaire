import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PotatoMascot } from './PotatoMascot';

interface HeaderProps {
  onNavigate: (page: "accueil" | "nutrition") => void;
  currentPage: "accueil" | "nutrition";
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: "accueil" | "nutrition") => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#FFFDF4] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo et mascotte */}
          <div className="flex items-center gap-3">
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
            <button
              onClick={() => handleNavClick("nutrition")}
              className={`${
                currentPage === "nutrition" ? "text-[#F59A4A]" : "text-[#27532F]"
              } hover:text-[#4C7A46] transition-colors`}
            >
              La nutrition
            </button>
            <a href="#recettes" className="text-[#27532F] hover:text-[#4C7A46] transition-colors">
              Recettes
            </a>
            <a href="#contact" className="text-[#27532F] hover:text-[#4C7A46] transition-colors">
              Contact
            </a>
          </nav>

          {/* Menu Mobile */}
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
            <button
              onClick={() => handleNavClick("nutrition")}
              className={`${
                currentPage === "nutrition" ? "text-[#F59A4A]" : "text-[#27532F]"
              } hover:text-[#4C7A46] transition-colors py-2 text-left`}
            >
              La nutrition
            </button>
            <a
              href="#recettes"
              className="text-[#27532F] hover:text-[#4C7A46] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Recettes
            </a>
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