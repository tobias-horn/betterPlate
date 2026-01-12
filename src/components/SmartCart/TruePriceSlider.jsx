import { useState } from 'react';
import { Leaf, Heart, Info, Sparkles, Globe, Droplets, Users, TreePine } from 'lucide-react';

/**
 * TruePriceSlider - Allows users to choose how much of the True Price gap to pay
 * Paying more True Price improves the Impact Score as you're compensating for externalities
 */
const TruePriceSlider = ({ 
  truePriceGap, 
  contribution, 
  onContributionChange,
  breakdown 
}) => {
  const [showDetails, setShowDetails] = useState(false);

  // Calculate the contribution amount
  const contributionAmount = (truePriceGap * contribution) / 100;
  
  // Calculate impact score bonus (up to +15 points for 100% contribution)
  const impactBonus = Math.round((contribution / 100) * 15);

  // Breakdown categories with icons and colors
  const breakdownCategories = [
    { key: 'climate', label: 'Klima', icon: Globe, color: 'bg-blue-500', description: 'CO₂-Emissionen' },
    { key: 'water', label: 'Wasser', icon: Droplets, color: 'bg-cyan-500', description: 'Wasserverbrauch' },
    { key: 'landUse', label: 'Land', icon: TreePine, color: 'bg-green-500', description: 'Landnutzung' },
    { key: 'social', label: 'Sozial', icon: Users, color: 'bg-purple-500', description: 'Faire Löhne' }
  ];

  // Get contribution level label
  const getContributionLabel = () => {
    if (contribution === 0) return { label: 'Regulärer Preis', color: 'text-gray-600' };
    if (contribution <= 25) return { label: 'Kleiner Beitrag', color: 'text-yellow-600' };
    if (contribution <= 50) return { label: 'Halber True Price', color: 'text-lime-600' };
    if (contribution <= 75) return { label: 'Großer Beitrag', color: 'text-green-600' };
    return { label: 'Voller True Price', color: 'text-emerald-600' };
  };

  const levelInfo = getContributionLabel();

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Sparkles size={18} className="text-emerald-600" />
            True Price Beitrag
          </h3>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="p-1 hover:bg-white/50 rounded-full transition-colors"
          >
            <Info size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Info Dropdown */}
      {showDetails && (
        <div className="bg-emerald-50 px-4 py-3 text-sm text-emerald-800 border-b border-emerald-100">
          <p className="font-medium mb-2">Was ist der True Price?</p>
          <p className="text-xs mb-2">
            Der True Price zeigt die wahren Kosten eines Produkts, inklusive versteckter 
            Umwelt- und Sozialkosten. Mit Ihrem Beitrag unterstützen Sie:
          </p>
          <ul className="text-xs space-y-1">
            <li>🌍 Klimaschutzprojekte</li>
            <li>💧 Nachhaltige Wasserwirtschaft</li>
            <li>🌱 Regenerative Landwirtschaft</li>
            <li>👥 Faire Arbeitsbedingungen</li>
          </ul>
        </div>
      )}

      <div className="p-4 space-y-4">
        {/* True Price Gap Display */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">True Price Gap (gesamt)</span>
          <span className="font-semibold text-orange-600">{truePriceGap.toFixed(2)} €</span>
        </div>

        {/* Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${levelInfo.color}`}>
              {levelInfo.label}
            </span>
            <span className="text-sm font-bold text-gray-800">
              {contribution}%
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={contribution}
              onChange={(e) => onContributionChange(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer 
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-6 
                         [&::-webkit-slider-thumb]:h-6 
                         [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:bg-emerald-500 
                         [&::-webkit-slider-thumb]:shadow-lg
                         [&::-webkit-slider-thumb]:cursor-pointer
                         [&::-webkit-slider-thumb]:border-2
                         [&::-webkit-slider-thumb]:border-white
                         [&::-webkit-slider-thumb]:transition-transform
                         [&::-webkit-slider-thumb]:hover:scale-110"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${contribution}%, #e5e7eb ${contribution}%, #e5e7eb 100%)`
              }}
            />
            {/* Tick marks */}
            <div className="flex justify-between mt-1 px-0.5">
              {[0, 25, 50, 75, 100].map((tick) => (
                <span 
                  key={tick} 
                  className={`text-xs ${contribution >= tick ? 'text-emerald-600' : 'text-gray-400'}`}
                >
                  {tick}%
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contribution Summary */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Ihr Beitrag</span>
            <span className="text-xl font-bold text-emerald-600">
              +{contributionAmount.toFixed(2)} €
            </span>
          </div>

          {/* Impact Score Bonus */}
          <div className="flex items-center justify-between bg-white/60 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <Leaf size={16} className="text-green-500" />
              <span className="text-sm text-gray-700">Impact Score Bonus</span>
            </div>
            <span className={`font-bold ${impactBonus > 0 ? 'text-green-600' : 'text-gray-400'}`}>
              +{impactBonus} Punkte
            </span>
          </div>
        </div>

        {/* Breakdown Visualization */}
        {breakdown && contribution > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 font-medium">Ihr Beitrag verteilt sich auf:</p>
            <div className="grid grid-cols-4 gap-2">
              {breakdownCategories.map((cat) => {
                const value = breakdown[cat.key] || 0;
                const contributionPart = (value / truePriceGap) * contributionAmount;
                return (
                  <div key={cat.key} className="text-center">
                    <div className={`w-8 h-8 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-1`}>
                      <cat.icon size={14} className="text-white" />
                    </div>
                    <p className="text-xs font-medium text-gray-700">{cat.label}</p>
                    <p className="text-xs text-gray-500">{contributionPart.toFixed(2)} €</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Motivational Message */}
        {contribution > 0 && (
          <div className="text-center pt-2 border-t border-gray-100">
            <p className="text-xs text-emerald-700">
              {contribution === 100 
                ? '🌟 Fantastisch! Sie zahlen den vollen True Price!'
                : contribution >= 50 
                  ? '💚 Großartig! Jeder Beitrag macht einen Unterschied.'
                  : '🌱 Ein guter Anfang! Jeder kleine Beitrag zählt.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TruePriceSlider;
