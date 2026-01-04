// src/components/RecettesPage.tsx
// Page des recettes (à développer)

import { Utensils } from 'lucide-react';
import { PotatoMascot } from '../svg/PotatoMascot';
import { CarrotMascot } from '../svg/CarrotMascot';
import { TomatoMascot } from '../svg/TomatoMascot';

export function RecettesPage() {
    return (
        <div className="min-h-screen bg-[#E8F2D5] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <div className="flex justify-center gap-4 mb-6">
                        <CarrotMascot size={80} />
                        <PotatoMascot size={80} />
                        <TomatoMascot size={80} />
                    </div>
                    <h1 className="text-[#27532F] mb-4">Nos recettes</h1>
                    <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
                        Des recettes simples, économiques et équilibrées pour les étudiants
                    </p>
                </div>

                {/* Contenu temporaire */}
                <div className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 shadow-xl text-center">
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#F59A4A] w-20 h-20 rounded-full flex items-center justify-center">
                            <Utensils size={40} className="text-white" />
                        </div>
                    </div>
                    <h2 className="text-[#27532F] mb-4">Bientôt disponible !</h2>
                    <p className="text-[#4C7A46] text-lg mb-6">
                        Nous travaillons sur une collection de recettes délicieuses et accessibles.
                    </p>
                    <p className="text-[#4C7A46]">
                        En attendant, rendez-vous dans la section "Bien s'alimenter" pour découvrir
                        quels aliments privilégier selon vos besoins nutritionnels !
                    </p>
                </div>
            </div>
        </div>
    );
}