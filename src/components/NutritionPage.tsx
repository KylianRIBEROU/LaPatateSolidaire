import { Flame, Zap, Wrench, Battery, Lightbulb, ArrowRight } from 'lucide-react';
import { PotatoMascot } from './PotatoMascot';
import { CarrotMascot } from './CarrotMascot';
import { TomatoMascot } from './TomatoMascot';

export function NutritionPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 mb-6">
            <CarrotMascot size={80} />
            <PotatoMascot size={80} />
            <TomatoMascot size={80} />
          </div>
          <h1 className="text-[#27532F] mb-4">Comprendre la nutrition</h1>
          <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
            Découvrez comment votre corps utilise l'énergie des aliments et pourquoi chaque nutriment compte !
          </p>
        </div>

        {/* Section: La calorie */}
        <section className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 mb-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#F59A4A] w-16 h-16 rounded-full flex items-center justify-center">
              <Flame size={32} className="text-white" />
            </div>
            <h2 className="text-[#27532F]">La calorie</h2>
          </div>
          
          <div className="space-y-4 text-[#4C7A46]">
            <p>
              Une calorie, c'est simplement une <strong>unité qui mesure l'énergie</strong> que notre corps tire des aliments. 
              Comme une voiture a besoin d'essence, notre corps utilise cette énergie pour absolument tout : 
              réfléchir en cours, marcher, dormir, digérer, gérer le stress ou encore maintenir la température du corps.
            </p>
            
            <div className="bg-[#E8F2D5] rounded-2xl p-6 my-6">
              <p className="mb-4">
                Lorsqu'on parle de "calories", on parle en réalité de <strong>kilocalories (kcal)</strong>, 
                mais dans le langage courant, on simplifie. Cette énergie provient des <strong>macronutriments</strong>, 
                c'est-à-dire les nutriments dont on a besoin en grandes quantités.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-[#27532F]">1 g de glucides</p>
                  <p className="text-2xl text-[#F59A4A]">4 kcal</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-[#27532F]">1 g de protéines</p>
                  <p className="text-2xl text-[#F59A4A]">4 kcal</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-[#27532F]">1 g de lipides</p>
                  <p className="text-2xl text-[#F59A4A]">9 kcal</p>
                </div>
              </div>
            </div>
            
            <p>Chaque macronutriment a un rôle spécifique dans le corps.</p>
          </div>
        </section>

        {/* Section: Les glucides */}
        <section className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 mb-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#F4C16E] w-16 h-16 rounded-full flex items-center justify-center">
              <Zap size={32} className="text-white" />
            </div>
            <h2 className="text-[#27532F]">Les glucides</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2 space-y-4 text-[#4C7A46]">
              <p>
                Les glucides, c'est <strong>l'énergie la plus directe et la plus facile à utiliser</strong> pour le corps, 
                surtout pour le cerveau. En fait, le cerveau fonctionne presque uniquement avec du glucose, une forme de glucide. 
                C'est pourquoi un manque de glucides peut entraîner des coups de fatigue, des difficultés de concentration ou des maux de tête.
              </p>
              
              <p>
                Le corps utilise les glucides en priorité, avant les protéines et les lipides, car ils sont rapides à transformer en énergie.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <PotatoMascot size={120} />
            </div>
          </div>

          <div className="bg-[#E8F2D5] rounded-2xl p-6 mb-6">
            <h3 className="text-[#27532F] mb-3">Comment le corps utilise les glucides :</h3>
            <ul className="space-y-2 text-[#4C7A46]">
              <li className="flex items-start gap-3">
                <ArrowRight className="text-[#F59A4A] mt-1 flex-shrink-0" size={20} />
                <span>Quand tu étudies longtemps → ton cerveau utilise les glucides</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-[#F59A4A] mt-1 flex-shrink-0" size={20} />
                <span>Quand tu fais du sport → tes muscles utilisent d'abord les glucides stockés</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-[#F59A4A] mt-1 flex-shrink-0" size={20} />
                <span>Quand ton corps manque de glucides → il puise dans les réserves (foie et muscles)</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#4C7A46] text-white rounded-2xl p-6">
            <Lightbulb className="text-[#F4C16E] mb-3" size={28} />
            <p>
              Les glucides <strong>"complexes"</strong> comme les légumineuses, le riz complet, les pâtes complètes, 
              les flocons d'avoine, etc. se digèrent plus lentement, ce qui donne une énergie plus stable.
            </p>
          </div>
        </section>

        {/* Section: Les protéines */}
        <section className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 mb-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#4C7A46] w-16 h-16 rounded-full flex items-center justify-center">
              <Wrench size={32} className="text-white" />
            </div>
            <h2 className="text-[#27532F]">Les protéines</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center justify-center order-2 md:order-1">
              <CarrotMascot size={120} />
            </div>
            <div className="md:col-span-2 space-y-4 text-[#4C7A46] order-1 md:order-2">
              <p>
                Les protéines, ce sont <strong>les briques qui permettent au corps de se construire, de se réparer 
                et de fonctionner correctement</strong>. Elles ne servent pas seulement aux muscles :
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Elles fabriquent les hormones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Elles renforcent le système immunitaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Elles participent à la cicatrisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Elles servent à renouveler les cellules (peau, cheveux, organes, etc.)</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[#4C7A46] mb-6">
            Le corps utilise les protéines en permanence, même quand on ne fait pas de sport. 
            D'ailleurs, en situation de stress, le corps utilise davantage de protéines pour réparer les tissus 
            et soutenir le système immunitaire.
          </p>

          <div className="bg-[#E85C4A] bg-opacity-10 border-l-4 border-[#E85C4A] rounded-xl p-6">
            <h3 className="text-[#27532F] mb-3">Quand on manque de protéines :</h3>
            <ul className="space-y-2 text-[#4C7A46]">
              <li className="flex items-start gap-3">
                <span className="text-[#E85C4A]">⚠</span>
                <span>On est souvent fatigué</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E85C4A]">⚠</span>
                <span>On récupère mal après un effort</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E85C4A]">⚠</span>
                <span>On peut perdre du muscle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E85C4A]">⚠</span>
                <span>Le système immunitaire devient plus fragile</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: Les lipides */}
        <section className="bg-[#FFFDF4] rounded-3xl p-8 sm:p-12 mb-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#F59A4A] w-16 h-16 rounded-full flex items-center justify-center">
              <Battery size={32} className="text-white" />
            </div>
            <h2 className="text-[#27532F]">Les lipides</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2 space-y-4 text-[#4C7A46]">
              <p>
                Les lipides apportent <strong>l'énergie la plus "concentrée"</strong>. Le corps les utilise quand il a besoin 
                d'une énergie plus durable, par exemple lors d'activités longues ou quand l'apport en glucides n'est pas suffisant. 
                Mais leur rôle ne s'arrête pas là :
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Ils participent à la fabrication des hormones (dont celles liées au stress et à l'humeur)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Ils protègent les organes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Ils nourrissent le cerveau (qui est composé en grande partie de lipides)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F59A4A]">•</span>
                  <span>Ils permettent d'absorber certaines vitamines indispensables (A, D, E et K)</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <TomatoMascot size={120} />
            </div>
          </div>

          <div className="bg-[#E8F2D5] rounded-2xl p-6">
            <p className="text-[#4C7A46] mb-4">
              Les lipides sont souvent mal compris : on les associe à la prise de poids, alors qu'ils sont indispensables. 
              Le corps les utilise dans énormément de processus vitaux. Le plus important, c'est <strong>la qualité</strong> :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <h3 className="text-[#4C7A46] mb-2">✓ Bons lipides</h3>
                <p className="text-[#27532F] text-sm">
                  Huiles végétales, poissons gras, œufs, noix, avocat
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h3 className="text-[#E85C4A] mb-2">⚠ Lipides à limiter</h3>
                <p className="text-[#27532F] text-sm">
                  Fritures, plats très transformés, produits industriels
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section résumé */}
        <section className="bg-gradient-to-r from-[#4C7A46] to-[#27532F] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-[#F4C16E] mb-6 text-center">En résumé</h2>
          
          <div className="space-y-4">
            <p>
              Les calories, c'est ce qui fournit l'énergie dont on a besoin chaque jour, et les macronutriments 
              sont la manière dont cette énergie est distribuée et utilisée.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur">
                <div className="flex justify-center mb-4">
                  <Zap className="text-[#F4C16E]" size={40} />
                </div>
                <h3 className="text-[#F4C16E] text-center mb-3">Glucides</h3>
                <p className="text-center text-sm">
                  Carburant immédiat, surtout pour le cerveau et les muscles
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur">
                <div className="flex justify-center mb-4">
                  <Wrench className="text-[#F4C16E]" size={40} />
                </div>
                <h3 className="text-[#F4C16E] text-center mb-3">Protéines</h3>
                <p className="text-center text-sm">
                  Construisent et réparent en continu l'ensemble du corps
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur">
                <div className="flex justify-center mb-4">
                  <Battery className="text-[#F4C16E]" size={40} />
                </div>
                <h3 className="text-[#F4C16E] text-center mb-3">Lipides</h3>
                <p className="text-center text-sm">
                  Soutiennent les fonctions vitales et fournissent une énergie durable
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA de retour */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-[#F59A4A] text-white px-8 py-4 rounded-full hover:bg-[#F4C16E] transition-all hover:scale-105 shadow-lg"
          >
            Retour en haut
          </button>
        </div>
      </div>
    </div>
  );
}