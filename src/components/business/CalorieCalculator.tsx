import { useState } from 'react';
import { Calculator, TrendingUp, Apple, Beef, Droplet } from 'lucide-react';

export default function CalorieCalculator() {
    const [formData, setFormData] = useState({
        age: '',
        gender: 'male',
        weight: '',
        height: '',
        activity: 'sedentary'
    });

    const [results, setResults] = useState(null);

    const activityLevels = {
        sedentary: { label: 'Sédentaire (peu ou pas d\'exercice)', multiplier: 1.2 },
        light: { label: 'Légèrement actif (1-3 jours/semaine)', multiplier: 1.375 },
        moderate: { label: 'Modérément actif (3-5 jours/semaine)', multiplier: 1.55 },
        active: { label: 'Très actif (6-7 jours/semaine)', multiplier: 1.725 },
        extreme: { label: 'Extrêmement actif (sport intense quotidien)', multiplier: 1.9 }
    };

    const foodRecommendations = {
        glucides: [
            { name: 'Pommes de terre', portion: '200g', calories: 154, price: 1.50 },
            { name: 'Banane', portion: '1 moyenne', calories: 105, price: 2.00 },
            { name: 'Pâtes complètes', portion: '80g cru', calories: 280, price: 2.20 },
            { name: 'Flocons d\'avoine', portion: '50g', calories: 185, price: 2.50 },
            { name: 'Riz complet', portion: '80g cru', calories: 285, price: 3.00 },
            { name: 'Lentilles', portion: '80g cru', calories: 270, price: 3.50 },
            { name: 'Pain complet', portion: '100g', calories: 247, price: 4.50 },
            { name: 'Quinoa', portion: '80g cru', calories: 312, price: 10.00 }
        ],
        proteines: [
            { name: 'Œufs', portion: '2 œufs', calories: 140, price: 2.80 },
            { name: 'Fromage blanc 0%', portion: '100g', calories: 47, price: 3.00 },
            { name: 'Haricots rouges', portion: '100g cuit', calories: 127, price: 3.50 },
            { name: 'Yaourt grec 0%', portion: '150g', calories: 90, price: 4.50 },
            { name: 'Tofu', portion: '100g', calories: 76, price: 7.00 },
            { name: 'Poulet', portion: '100g', calories: 165, price: 8.00 },
            { name: 'Sardines', portion: '100g', calories: 208, price: 13.00 },
            { name: 'Thon en conserve', portion: '100g', calories: 116, price: 18.00 }
        ],
        lipides: [
            { name: 'Huile de colza', portion: '1 c. à soupe', calories: 120, price: 4.50 },
            { name: 'Beurre de cacahuète', portion: '1 c. à soupe', calories: 95, price: 6.00 },
            { name: 'Avocat', portion: '1/2 avocat', calories: 120, price: 6.50 },
            { name: 'Huile d\'olive', portion: '1 c. à soupe', calories: 120, price: 10.00 },
            { name: 'Amandes', portion: '30g', calories: 170, price: 15.00 },
            { name: 'Graines de chia', portion: '1 c. à soupe', calories: 60, price: 18.00 },
            { name: 'Noix', portion: '30g', calories: 185, price: 20.00 },
            { name: 'Saumon', portion: '100g', calories: 208, price: 25.00 }
        ]
    };

    const calculateCalories = () => {
        if (!formData.age || !formData.weight || !formData.height) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const age = parseInt(formData.age);
        const weight = parseFloat(formData.weight);
        const height = parseFloat(formData.height);

        if (age < 15 || age > 100 || weight < 30 || weight > 300 || height < 100 || height > 250) {
            alert('Veuillez entrer des valeurs valides');
            return;
        }

        let bmr;
        if (formData.gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        const tdee = Math.round(bmr * activityLevels[formData.activity].multiplier);

        const macros = {
            glucides: Math.round((tdee * 0.4) / 4),
            proteines: Math.round((tdee * 0.3) / 4),
            lipides: Math.round((tdee * 0.3) / 9)
        };

        setResults({ tdee, macros, bmr: Math.round(bmr) });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#E8F2D5] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#F59A4A] w-20 h-20 rounded-full flex items-center justify-center">
                            <Calculator size={40} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-[#27532F] mb-4">Calculateur de besoins caloriques</h1>
                    <p className="text-[#4C7A46] text-xl max-w-3xl mx-auto">
                        Découvrez vos besoins énergétiques quotidiens et les aliments pour bien vous nourrir à petit budget !
                    </p>
                </div>

                <div className="bg-[#FFFDF4] rounded-3xl p-8 shadow-xl mb-8">
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[#27532F] mb-2 font-medium">Âge</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    min="15"
                                    max="100"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8F2D5] focus:border-[#4C7A46] outline-none transition-colors"
                                    placeholder="25"
                                />
                            </div>

                            <div>
                                <label className="block text-[#27532F] mb-2 font-medium">Sexe</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8F2D5] focus:border-[#4C7A46] outline-none transition-colors"
                                >
                                    <option value="male">Homme</option>
                                    <option value="female">Femme</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[#27532F] mb-2 font-medium">Poids (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    min="30"
                                    max="300"
                                    step="0.1"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8F2D5] focus:border-[#4C7A46] outline-none transition-colors"
                                    placeholder="70"
                                />
                            </div>

                            <div>
                                <label className="block text-[#27532F] mb-2 font-medium">Taille (cm)</label>
                                <input
                                    type="number"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    min="100"
                                    max="250"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-[#E8F2D5] focus:border-[#4C7A46] outline-none transition-colors"
                                    placeholder="175"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[#27532F] mb-2 font-medium">Niveau d'activité physique</label>
                            <select
                                name="activity"
                                value={formData.activity}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border-2 border-[#E8F2D5] focus:border-[#4C7A46] outline-none transition-colors"
                            >
                                {Object.entries(activityLevels).map(([key, value]) => (
                                    <option key={key} value={key}>{value.label}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={calculateCalories}
                            className="w-full bg-[#F59A4A] text-white py-4 rounded-full hover:bg-[#F4C16E] transition-all hover:scale-105 shadow-lg font-medium text-lg"
                        >
                            Calculer mes besoins
                        </button>
                    </div>
                </div>

                {results && (
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-[#4C7A46] to-[#27532F] rounded-3xl p-8 shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <TrendingUp size={32} className="text-[#F4C16E]" />
                                <h2 className="text-[#F4C16E]">Vos résultats</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur">
                                    <p className="text-sm opacity-80 mb-2">Métabolisme de base (BMR)</p>
                                    <p className="text-4xl font-bold">{results.bmr} kcal</p>
                                    <p className="text-sm mt-2 opacity-80">Calories brûlées au repos</p>
                                </div>

                                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur">
                                    <p className="text-sm opacity-80 mb-2">Besoins quotidiens (TDEE)</p>
                                    <p className="text-4xl font-bold">{results.tdee} kcal</p>
                                    <p className="text-sm mt-2 opacity-80">Avec votre activité physique</p>
                                </div>
                            </div>

                            <div className="mt-6 bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur">
                                <h3 className="text-[#F4C16E] mb-4">Répartition recommandée des macronutriments</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-sm opacity-80">Glucides (40%)</p>
                                        <p className="text-2xl font-bold">{results.macros.glucides}g</p>
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-80">Protéines (30%)</p>
                                        <p className="text-2xl font-bold">{results.macros.proteines}g</p>
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-80">Lipides (30%)</p>
                                        <p className="text-2xl font-bold">{results.macros.lipides}g</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#FFFDF4] rounded-3xl p-8 shadow-xl">
                            <h2 className="text-[#27532F] mb-4">Aliments recommandés et abordables</h2>
                            <p className="text-[#4C7A46] mb-2">
                                Voici une liste d'aliments économiques pour atteindre vos objectifs nutritionnels :
                            </p>
                            <p className="text-[#4C7A46] text-sm mb-8 flex items-center gap-2">
                                <span className="text-[#F59A4A]">💰</span>
                                <span className="italic">Produits triés par prix croissant (prix moyen au kg - supermarchés français)</span>
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[#E8F2D5] rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#F4C16E] w-12 h-12 rounded-full flex items-center justify-center">
                                            <Apple size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-[#27532F]">Glucides</h3>
                                    </div>
                                    <p className="text-sm text-[#4C7A46] mb-4">
                                        Objectif : {results.macros.glucides}g/jour
                                    </p>
                                    <div className="space-y-3">
                                        {foodRecommendations.glucides.map((food, idx) => (
                                            <div key={idx} className="bg-white rounded-xl p-3">
                                                <div className="flex justify-between items-start mb-1">
                                                    <p className="font-medium text-[#27532F]">{food.name}</p>
                                                    <div className="flex gap-2">
                                                        <span className="text-xs bg-[#4C7A46] text-white px-2 py-1 rounded-full font-medium">
                                                            {food.price.toFixed(2)}€/kg
                                                        </span>
                                                        <span className="text-xs bg-[#F4C16E] text-white px-2 py-1 rounded-full">
                                                            {food.calories} kcal
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-[#4C7A46]">{food.portion}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#E8F2D5] rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#4C7A46] w-12 h-12 rounded-full flex items-center justify-center">
                                            <Beef size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-[#27532F]">Protéines</h3>
                                    </div>
                                    <p className="text-sm text-[#4C7A46] mb-4">
                                        Objectif : {results.macros.proteines}g/jour
                                    </p>
                                    <div className="space-y-3">
                                        {foodRecommendations.proteines.map((food, idx) => (
                                            <div key={idx} className="bg-white rounded-xl p-3">
                                                <div className="flex justify-between items-start mb-1">
                                                    <p className="font-medium text-[#27532F]">{food.name}</p>
                                                    <div className="flex gap-2">
                                                        <span className="text-xs bg-[#4C7A46] text-white px-2 py-1 rounded-full font-medium">
                                                            {food.price.toFixed(2)}€/kg
                                                        </span>
                                                        <span className="text-xs bg-[#4C7A46] text-white px-2 py-1 rounded-full">
                                                            {food.calories} kcal
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-[#4C7A46]">{food.portion}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#E8F2D5] rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#F59A4A] w-12 h-12 rounded-full flex items-center justify-center">
                                            <Droplet size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-[#27532F]">Lipides</h3>
                                    </div>
                                    <p className="text-sm text-[#4C7A46] mb-4">
                                        Objectif : {results.macros.lipides}g/jour
                                    </p>
                                    <div className="space-y-3">
                                        {foodRecommendations.lipides.map((food, idx) => (
                                            <div key={idx} className="bg-white rounded-xl p-3">
                                                <div className="flex justify-between items-start mb-1">
                                                    <p className="font-medium text-[#27532F]">{food.name}</p>
                                                    <div className="flex gap-2">
                                                        <span className="text-xs bg-[#4C7A46] text-white px-2 py-1 rounded-full font-medium">
                                                            {food.price.toFixed(2)}€/kg
                                                        </span>
                                                        <span className="text-xs bg-[#F59A4A] text-white px-2 py-1 rounded-full">
                                                            {food.calories} kcal
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-[#4C7A46]">{food.portion}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F4C16E] bg-opacity-20 border-l-4 border-[#F4C16E] rounded-xl p-6">
                            <h3 className="text-[#27532F] mb-3 flex items-center gap-2">
                                <span className="text-2xl">💡</span>
                                Conseils pour bien manger avec un budget étudiant
                            </h3>
                            <ul className="space-y-2 text-[#4C7A46]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F59A4A] mt-1">•</span>
                                    <span>Privilégiez les achats en vrac (pâtes, riz, légumineuses) : plus économiques et moins d'emballages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F59A4A] mt-1">•</span>
                                    <span>Les œufs sont une excellente source de protéines à petit prix (environ 2-3€ les 6)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F59A4A] mt-1">•</span>
                                    <span>Les légumineuses (lentilles, pois chiches, haricots) combinent protéines et glucides complexes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F59A4A] mt-1">•</span>
                                    <span>Cuisinez en batch le week-end et congelez des portions pour la semaine</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F59A4A] mt-1">•</span>
                                    <span>Les fruits et légumes de saison sont moins chers et plus savoureux</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}