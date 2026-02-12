// src/components/RecettesPage.tsx
// Page des recettes (à développer)

import { Camera, Globe } from 'lucide-react';
import { SocialRecipeLink } from './SocialRecipeLink';
import logoMarmiton from '../../assets/logo_marmiton.png';
import logoCuisineAZ from '../../assets/logo_cuisineaz.jpg';
import logoCuisineActuelle from '../../assets/logo_cuisineactuelle.jpg';
import logoMesRecettesHealthy from '../../assets/logo_mesrecetteshealthy.jpg';
import logo750g from '../../assets/logo_750g.jpg';
import logoAliceEsmeralda from '../../assets/logo_aliceesmeralda.jpg';

export function RecettesPage() {
    return (
        <div className="min-h-screen bg-[#E8F2D5] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-12 pb-8 border-b border-[#4C7A46]/30">
                    <h1 className="text-[#27532F] mb-4">Recueil de recettes</h1>
                    <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
                        Découvrez des recettes  économiques, saines et faciles à réaliser !                   </p>
                </div>

                {/* Section liens vers comptes de recettes */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h4 className="text-[#4C7A46] text-lg max-w-3xl mx-auto">
                            Consultez ces sites et blogs français pour des recettes healthy, équilibrées et économiques,
                            parfaites pour manger sainement avec un petit budget !
                        </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SocialRecipeLink
                            platform="website"
                            accountName="Marmiton"
                            accountUrl="https://www.marmiton.org/recettes/recherche.aspx?aqt=healthy"
                            description="Recettes healthy et économiques pour tous"
                            color="orange"
                            icon={<Globe size={40} className="text-white" />}
                            image={logoMarmiton}
                        />
                        <SocialRecipeLink
                            platform="website"
                            accountName="CuisineAZ"
                            accountUrl="https://www.cuisineaz.com/recettes/recherche_terme.aspx?recherche=healthy"
                            description="Recettes pas chères et faciles à réaliser"
                            color="green"
                            icon={<Globe size={40} className="text-white" />}
                            image={logoCuisineAZ}
                        />
                        <SocialRecipeLink
                            platform="website"
                            accountName="Cuisine Actuelle"
                            accountUrl="https://www.cuisineactuelle.fr/recettes/recherche_terme.aspx?recherche=healthy&tri=Cost"
                            description="Idées recettes économiques et équilibrées"
                            color="yellow"
                            icon={<Globe size={40} className="text-white" />}
                            image={logoCuisineActuelle}
                        />
                        <SocialRecipeLink
                            platform="instagram"
                            accountName="Alice Esmeralda"
                            accountUrl="https://www.instagram.com/aliceesmeralda/"
                            description="Nutrition et recettes healthy équilibrées"
                            color="red"
                            icon={<Camera size={40} className="text-white" />}
                            image={logoAliceEsmeralda}
                        />
                        <SocialRecipeLink
                            platform="instagram"
                            accountName="Mes Recettes Healthy"
                            accountUrl="https://www.instagram.com/mesrecetteshealthy/"
                            description="Recettes saines et gourmandes chaque jour"
                            color="orange"
                            icon={<Camera size={40} className="text-white" />}
                            image={logoMesRecettesHealthy}
                        />
                        <SocialRecipeLink
                            platform="website"
                            accountName="750g - Recettes Healthy"
                            accountUrl="https://www.750g.com/recherche/?q=healthy"
                            description="Recettes équilibrées et nutritives validées"
                            color="green"
                            icon={<Globe size={40} className="text-white" />}
                            image={logo750g}
                        />
                    </div>
                </div>

                {/* Section future contenu recettes */}
                <div className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 shadow-xl text-center mt-12">
                    <h3 className="text-[#27532F] mb-4">Bientôt : Nos recettes maison !</h3>
                    <p className="text-[#4C7A46]">
                        Nous travaillons sur une collection de recettes créées spécialement
                        pour les étudiants. Restez connectés !
                    </p>
                </div>
            </div>
        </div>
    );
}