// src/components/ConseillsFAQPage.tsx
// Page des conseils et FAQ avec debunking des mythes nutritionnels

import { Lightbulb, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { PotatoMascot } from '../svg/PotatoMascot';
import { CarrotMascot } from '../svg/CarrotMascot';
import { TomatoMascot } from '../svg/TomatoMascot';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../figma/accordion';

export function ConseillsFAQPage() {
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
                    <h1 className="text-[#27532F] mb-4">Conseils & FAQ</h1>
                    <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
                        Démêlez le vrai du faux et obtenez des réponses à vos questions sur la nutrition
                    </p>
                </div>

                {/* Section Mythes et Réalités */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-[#27532F] mb-4 flex items-center justify-center gap-3">
                            <AlertCircle className="text-[#F59A4A]" size={36} />
                            Mythes et Réalités
                        </h2>
                        <p className="text-[#4C7A46] text-lg max-w-3xl mx-auto">
                            Déconstruisons ensemble les idées reçues sur la nutrition
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Mythe 1 - IMC */}
                        <div className="bg-[#FFFDF4] rounded-3xl p-6 sm:p-8 shadow-lg">
                            <div className="flex items-start gap-4 mb-4">
                                <XCircle className="text-[#E85C4A] flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-[#27532F] mb-2">Mythe : L'IMC est un indicateur fiable de santé</h3>
                                    <p className="text-[#4C7A46] text-base">
                                        "Si ton IMC est normal, tu es en bonne santé !"
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-[#E8F2D5] p-4 rounded-2xl">
                                <CheckCircle className="text-[#4C7A46] flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="text-[#27532F] font-bold mb-2">Réalité :</h4>
                                    <p className="text-[#4C7A46] text-base">
                                        L'IMC ne tient pas compte de la masse musculaire, de la répartition des graisses,
                                        ni de la composition corporelle. Un athlète musclé peut avoir un IMC élevé tout en
                                        étant en excellente santé. C'est un indicateur général, pas une vérité absolue.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mythe 2 - Sauter des repas */}
                        <div className="bg-[#FFFDF4] rounded-3xl p-6 sm:p-8 shadow-lg">
                            <div className="flex items-start gap-4 mb-4">
                                <XCircle className="text-[#E85C4A] flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-[#27532F] mb-2">Mythe : Sauter des repas fait maigrir</h3>
                                    <p className="text-[#4C7A46] text-base">
                                        "Si je saute le petit-déjeuner, je vais perdre du poids"
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-[#E8F2D5] p-4 rounded-2xl">
                                <CheckCircle className="text-[#4C7A46] flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="text-[#27532F] font-bold mb-2">Réalité :</h4>
                                    <p className="text-[#4C7A46] text-base">
                                        Sauter des repas ralentit le métabolisme et peut conduire à des grignotages
                                        et à une suralimentation au repas suivant. Il vaut mieux manger régulièrement
                                        et équilibré pour maintenir une énergie stable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mythe 3 - Glucides le soir */}
                        <div className="bg-[#FFFDF4] rounded-3xl p-6 sm:p-8 shadow-lg">
                            <div className="flex items-start gap-4 mb-4">
                                <XCircle className="text-[#E85C4A] flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-[#27532F] mb-2">Mythe : Les glucides le soir font grossir</h3>
                                    <p className="text-[#4C7A46] text-base">
                                        "Ne mange pas de pâtes ou de pain le soir"
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-[#E8F2D5] p-4 rounded-2xl">
                                <CheckCircle className="text-[#4C7A46] flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="text-[#27532F] font-bold mb-2">Réalité :</h4>
                                    <p className="text-[#4C7A46] text-base">
                                        Ce qui compte, c'est le total calorique sur la journée, pas l'heure à laquelle
                                        vous mangez. Les glucides le soir peuvent même favoriser le sommeil en aidant
                                        la production de sérotonine.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mythe 4 - Produits light */}
                        <div className="bg-[#FFFDF4] rounded-3xl p-6 sm:p-8 shadow-lg">
                            <div className="flex items-start gap-4 mb-4">
                                <XCircle className="text-[#E85C4A] flex-shrink-0" size={32} />
                                <div>
                                    <h3 className="text-[#27532F] mb-2">Mythe : Les produits "light" sont meilleurs</h3>
                                    <p className="text-[#4C7A46] text-base">
                                        "0% de matière grasse = plus sain"
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-[#E8F2D5] p-4 rounded-2xl">
                                <CheckCircle className="text-[#4C7A46] flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="text-[#27532F] font-bold mb-2">Réalité :</h4>
                                    <p className="text-[#4C7A46] text-base">
                                        Les produits "light" compensent souvent la réduction en graisse par l'ajout
                                        de sucre, sel, ou additifs. De plus, les graisses sont essentielles pour
                                        l'absorption des vitamines. Privilégiez les vrais aliments en quantité raisonnable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section FAQ */}
                <div className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-[#27532F] mb-4 flex items-center justify-center gap-3">
                            <Lightbulb className="text-[#F4C16E]" size={36} />
                            Questions Fréquentes
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[#27532F] text-lg font-bold text-left">
                                Combien de repas par jour devrais-je prendre ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#4C7A46] text-base">
                                Il est recommandé de prendre 3 repas principaux par jour (petit-déjeuner, déjeuner, dîner)
                                avec éventuellement 1 à 2 collations si nécessaire. L'important est d'écouter votre faim
                                et de maintenir une régularité pour stabiliser votre métabolisme et votre énergie.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[#27532F] text-lg font-bold text-left">
                                Faut-il éviter complètement le sucre ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#4C7A46] text-base">
                                Non, il ne faut pas diaboliser le sucre. Les sucres naturels présents dans les fruits
                                sont accompagnés de fibres, vitamines et minéraux. Ce sont les sucres ajoutés dans les
                                produits transformés qu'il faut limiter. Une alimentation équilibrée peut inclure
                                occasionnellement des plaisirs sucrés.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[#27532F] text-lg font-bold text-left">
                                Comment manger équilibré avec un budget étudiant ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#4C7A46] text-base">
                                Privilégiez les légumes de saison, les légumineuses (lentilles, pois chiches),
                                les œufs, et les féculents complets en gros conditionnement. Achetez en vrac quand
                                c'est possible, cuisinez en batch (grandes quantités) et congelez des portions.
                                Les marchés en fin de journée proposent souvent des réductions.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-[#27532F] text-lg font-bold text-left">
                                Dois-je prendre des compléments alimentaires ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#4C7A46] text-base">
                                Dans la plupart des cas, une alimentation variée et équilibrée suffit à couvrir vos besoins.
                                Cependant, certaines situations peuvent nécessiter une supplémentation (végétarisme/végétalisme,
                                grossesse, carences diagnostiquées). Consultez un professionnel de santé avant de prendre
                                des compléments.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-[#27532F] text-lg font-bold text-left">
                                Quelle quantité d'eau dois-je boire par jour ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#4C7A46] text-base">
                                En général, il est recommandé de boire 1,5 à 2 litres d'eau par jour, mais cela varie
                                selon votre activité physique, la température et votre morphologie. Écoutez votre soif
                                et surveillez la couleur de vos urines : elles doivent être jaune clair.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-[#27532F] text-lg font-bold text-left">
                                Les produits bio sont-ils vraiment meilleurs ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#4C7A46] text-base">
                                Les produits bio contiennent moins de résidus de pesticides et sont produits dans le
                                respect de l'environnement. Cependant, leur valeur nutritionnelle est similaire aux
                                produits conventionnels. Si le budget est limité, privilégiez le bio pour les produits
                                à peau fine (fraises, salade) et conventionnel pour ceux à peau épaisse (bananes, avocat).
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Conseils pratiques */}
                <div className="bg-gradient-to-r from-[#4C7A46] to-[#27532F] rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
                    <h2 className="text-white mb-6">Nos conseils essentiels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                        <div>
                            <h3 className="font-bold mb-2 text-[#F4C16E]">Variez</h3>
                            <p>Diversifiez vos aliments pour couvrir tous vos besoins nutritionnels</p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 text-[#F4C16E]">Écoutez-vous</h3>
                            <p>Apprenez à reconnaître vos signaux de faim et de satiété</p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2 text-[#F4C16E]">Cuisinez</h3>
                            <p>Préparez vos repas pour contrôler la qualité et les ingrédients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
