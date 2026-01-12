import { Heart, Leaf, TrendingUp, Info } from 'lucide-react';
import { useState } from 'react';

/**
 * CartScoresSummary - Displays Health Score and Impact Score for the cart
 * Shows how scores are calculated and the effect of True Price contribution
 */
const CartScoresSummary = ({ 
  healthScore, 
  impactScore, 
  baseImpactScore,
  truePriceContribution,
  itemCount 
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const getScoreColor = (score) => {
    if (score >= 80) return { bg: 'bg-green-500', ring: 'ring-green-200', text: 'text-green-600' };
    if (score >= 60) return { bg: 'bg-lime-500', ring: 'ring-lime-200', text: 'text-lime-600' };
    if (score >= 40) return { bg: 'bg-yellow-500', ring: 'ring-yellow-200', text: 'text-yellow-600' };
    if (score >= 20) return { bg: 'bg-orange-500', ring: 'ring-orange-200', text: 'text-orange-600' };
    return { bg: 'bg-red-500', ring: 'ring-red-200', text: 'text-red-600' };
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Sehr gut';
    if (score >= 60) return 'Gut';
    if (score >= 40) return 'Mittel';
    if (score >= 20) return 'Verbesserungswürdig';
    return 'Niedrig';
  };

  const healthColor = getScoreColor(healthScore);
  const impactColor = getScoreColor(impactScore);

  // Calculate the bonus from True Price contribution
  const truePriceBonus = impactScore - baseImpactScore;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-green-50 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <TrendingUp size={18} className="text-rewe-red" />
            Warenkorb Scores
          </h3>
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="p-1 hover:bg-white/50 rounded-full transition-colors"
          >
            <Info size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Info Dropdown */}
      {showInfo && (
        <div className="bg-blue-50 px-4 py-3 text-sm text-blue-800 border-b border-blue-100">
          <p className="font-medium mb-1">Wie werden die Scores berechnet?</p>
          <ul className="space-y-1 text-xs">
            <li><strong>Health Score:</strong> Basiert auf Nutri-Score + Bio/Vegan/Regional Bonus</li>
            <li><strong>Impact Score:</strong> Basiert auf True Price Gap + Ihre True Price Zahlung</li>
          </ul>
        </div>
      )}

      {/* Scores Display */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Health Score */}
          <div className="text-center">
            <div className={`relative w-20 h-20 mx-auto mb-2`}>
              {/* Background ring */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke={healthScore >= 80 ? '#22c55e' : healthScore >= 60 ? '#84cc16' : healthScore >= 40 ? '#eab308' : '#f97316'}
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${(healthScore / 100) * 226} 226`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              {/* Score number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Heart size={14} className="text-pink-500 mb-0.5" />
                <span className="text-xl font-bold text-gray-800">{healthScore}</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-800">Health Score</p>
            <p className={`text-xs ${healthColor.text}`}>{getScoreLabel(healthScore)}</p>
          </div>

          {/* Impact Score */}
          <div className="text-center">
            <div className={`relative w-20 h-20 mx-auto mb-2`}>
              {/* Background ring */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke={impactScore >= 80 ? '#22c55e' : impactScore >= 60 ? '#84cc16' : impactScore >= 40 ? '#eab308' : '#f97316'}
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${(impactScore / 100) * 226} 226`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              {/* Score number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Leaf size={14} className="text-green-500 mb-0.5" />
                <span className="text-xl font-bold text-gray-800">{impactScore}</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-800">Impact Score</p>
            <p className={`text-xs ${impactColor.text}`}>{getScoreLabel(impactScore)}</p>
          </div>
        </div>

        {/* True Price Bonus Indicator */}
        {truePriceBonus > 0 && (
          <div className="mt-4 bg-green-50 rounded-lg p-3 text-center">
            <p className="text-xs text-green-700">
              <span className="font-semibold">+{truePriceBonus} Impact Punkte</span> durch Ihre True Price Zahlung
            </p>
          </div>
        )}

        {/* Combined Score Summary */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Kombinierter Score</span>
            <span className="font-bold text-gray-800">
              {Math.round((healthScore + impactScore) / 2)} / 100
            </span>
          </div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-green-500 rounded-full transition-all duration-500"
              style={{ width: `${(healthScore + impactScore) / 2}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScoresSummary;
