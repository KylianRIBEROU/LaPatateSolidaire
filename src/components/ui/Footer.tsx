import { Heart, Mail, MapPin } from 'lucide-react';
import { PotatoMascot } from '../svg/PotatoMascot';
import { CarrotMascot } from '../svg/CarrotMascot';
import { TomatoMascot } from '../svg/TomatoMascot';

interface FooterProps {
  onNavigate: (page: "accueil" | "nutriments" | "bien-salimenter" | "recettes" | "conseils-faq" | "aides-laval") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: "accueil" | "nutriments" | "bien-salimenter" | "recettes" | "conseils-faq" | "aides-laval") => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#27532F] text-[#FFFDF4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slogan principal */}
        <div className="text-center mb-10">
          <h2 className="text-[#F4C16E] text-2xl sm:text-3xl mb-2">
            Donner la patate à ceux qui en ont besoin !
          </h2>
          <p className="text-[#E8F2D5]">Initiative solidaire pour les étudiants et les personnes en situation de précarité</p>
        </div>

        {/* Sections du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h3 className="text-[#F4C16E] mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate("accueil")} className="hover:text-[#F4C16E] transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("nutriments")} className="hover:text-[#F4C16E] transition-colors">
                  Les nutriments
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("bien-salimenter")} className="hover:text-[#F4C16E] transition-colors">
                  Bien s'alimenter
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("recettes")} className="hover:text-[#F4C16E] transition-colors">
                  Trouver des recettes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("conseils-faq")} className="hover:text-[#F4C16E] transition-colors">
                  Conseils & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("aides-laval")} className="hover:text-[#F4C16E] transition-colors">
                  Les aides à Laval
                </button>
              </li>
            </ul>
          </div>

          {/* Nos valeurs */}
          <div>
            <h3 className="text-[#F4C16E] mb-4">Nos valeurs</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Heart size={18} className="text-[#E85C4A]" />
                <span>Solidarité étudiante</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart size={18} className="text-[#E85C4A]" />
                <span>Alimentation saine</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart size={18} className="text-[#E85C4A]" />
                <span>Accessibilité</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart size={18} className="text-[#E85C4A]" />
                <span>Bienveillance</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#F4C16E] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#F59A4A] mt-1" />
                <a href="mailto:contact@patatesolidaire.fr" className="hover:text-[#F4C16E] transition-colors">
                  contact@patatesolidaire.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#F59A4A] mt-1" />
                <span>ESIEA, 53000 Laval</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mascottes décoratives */}
        <div className="flex justify-center items-center gap-6 pt-6 border-t border-[#4C7A46]">
          <PotatoMascot size={40} />
          <CarrotMascot size={40} />
          <TomatoMascot size={40} />
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-[#E8F2D5] text-sm">
          © {new Date().getFullYear()} La Patate Solidaire - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
