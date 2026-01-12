import { Heart, Leaf, Info } from 'lucide-react';
import { useState } from 'react';

/**
 * Health Score Methodology:
 * - Base score from Nutri-Score: A=90, B=75, C=55, D=35, E=20, null=50
 * - Modifiers: +5 bio, +5 vegan, +3 regional (whole foods indicator)
 * - Scale: 0-100 (higher = healthier)
 * 
 * Impact Score Methodology:
 * - Based on True Price gap percentage (externalized costs as % of price)
 * - Formula: 100 - (gap% × 1.1), clamped to 0-100
 * - Scale: 0-100 (higher = lower environmental/social impact = better)
 */

// Calculate Health Score based on Nutri-Score and product attributes
export const calculateHealthScore = (product) => {
  // Base score from Nutri-Score
  const nutriScoreBase = {
    'A': 90,
    'B': 75,
    'C': 55,
    'D': 35,
    'E': 20
  };
  
  let score = nutriScoreBase[product.nutriScore] || 50;
  
  // Modifiers
  if (product.tags?.includes('bio')) score += 5;
  if (product.tags?.includes('vegan')) score += 5;
  if (product.tags?.includes('regional')) score += 3;
  
  // Clamp to 0-100
  return Math.min(100, Math.max(0, score));
};

// Calculate Impact Score based on True Price gap
export const calculateImpactScore = (product) => {
  const gapPercentage = ((product.truePrice - product.price) / product.price) * 100;
  
  // Invert: lower gap = higher score
  // Using 1.1 multiplier to spread the scale better
  let score = 100 - (gapPercentage * 1.1);
  
  // Bonus for certifications that reduce externalities
  if (product.tags?.includes('bio')) score += 5;
  if (product.tags?.includes('fairtrade')) score += 5;
  if (product.tags?.includes('regional')) score += 3;
  
  // Clamp to 0-100
  return Math.min(100, Math.max(0, Math.round(score)));
};

// Get color class based on score
const getScoreColor = (score) => {
  if (score >= 80) return { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-100' };
  if (score >= 60) return { bg: 'bg-lime-500', text: 'text-lime-700', light: 'bg-lime-100' };
  if (score >= 40) return { bg: 'bg-yellow-500', text: 'text-yellow-700', light: 'bg-yellow-100' };
  if (score >= 20) return { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-100' };
  return { bg: 'bg-red-500', text: 'text-red-700', light: 'bg-red-100' };
};

// Get rating label
const getScoreLabel = (score) => {
  if (score >= 80) return 'Sehr gut';
  if (score >= 60) return 'Gut';
  if (score >= 40) return 'Mittel';
  if (score >= 20) return 'Niedrig';
  return 'Sehr niedrig';
};

// Compact score badge for product cards
export const ScoreBadgeCompact = ({ product }) => {
  const healthScore = calculateHealthScore(product);
  const impactScore = calculateImpactScore(product);
  const healthColor = getScoreColor(healthScore);
  const impactColor = getScoreColor(impactScore);

  return (
    <div className="flex gap-1">
      <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${healthColor.light}`} title={`Health Score: ${healthScore}`}>
        <Heart size={10} className={healthColor.text} />
        <span className={`text-[10px] font-bold ${healthColor.text}`}>{healthScore}</span>
      </div>
      <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${impactColor.light}`} title={`Impact Score: ${impactScore}`}>
        <Leaf size={10} className={impactColor.text} />
        <span className={`text-[10px] font-bold ${impactColor.text}`}>{impactScore}</span>
      </div>
    </div>
  );
};

// Full score display for product detail page
export const ScoreDisplay = ({ product, showExplanation = true }) => {
  const [showHealthInfo, setShowHealthInfo] = useState(false);
  const [showImpactInfo, setShowImpactInfo] = useState(false);
  
  const healthScore = calculateHealthScore(product);
  const impactScore = calculateImpactScore(product);
  const healthColor = getScoreColor(healthScore);
  const impactColor = getScoreColor(impactScore);

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Health Score */}
      <div className={`${healthColor.light} rounded-xl p-4 relative`}>
        <button
          onClick={() => setShowHealthInfo(!showHealthInfo)}
          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/50 flex items-center justify-center hover:bg-white transition-colors"
        >
          <Info size={12} className="text-gray-500" />
        </button>
        
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-10 h-10 ${healthColor.bg} rounded-full flex items-center justify-center`}>
            <Heart className="text-white" size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-600">Health Score</p>
            <p className={`text-2xl font-bold ${healthColor.text}`}>{healthScore}</p>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-white/50 rounded-full overflow-hidden">
          <div 
            className={`h-full ${healthColor.bg} transition-all duration-500`}
            style={{ width: `${healthScore}%` }}
          />
        </div>
        <p className={`text-xs mt-1 ${healthColor.text} font-medium`}>{getScoreLabel(healthScore)}</p>
        
        {/* Info tooltip */}
        {showHealthInfo && showExplanation && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-3 z-20 text-xs text-gray-600">
            <p className="font-medium text-gray-800 mb-1">Health Score Berechnung:</p>
            <ul className="space-y-1">
              <li>• Basiert auf Nutri-Score ({product.nutriScore || 'k.A.'})</li>
              {product.tags?.includes('bio') && <li>• +5 für Bio-Zertifizierung</li>}
              {product.tags?.includes('vegan') && <li>• +5 für pflanzlich/vegan</li>}
              {product.tags?.includes('regional') && <li>• +3 für regionale Produkte</li>}
            </ul>
          </div>
        )}
      </div>

      {/* Impact Score */}
      <div className={`${impactColor.light} rounded-xl p-4 relative`}>
        <button
          onClick={() => setShowImpactInfo(!showImpactInfo)}
          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/50 flex items-center justify-center hover:bg-white transition-colors"
        >
          <Info size={12} className="text-gray-500" />
        </button>
        
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-10 h-10 ${impactColor.bg} rounded-full flex items-center justify-center`}>
            <Leaf className="text-white" size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-600">Impact Score</p>
            <p className={`text-2xl font-bold ${impactColor.text}`}>{impactScore}</p>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-white/50 rounded-full overflow-hidden">
          <div 
            className={`h-full ${impactColor.bg} transition-all duration-500`}
            style={{ width: `${impactScore}%` }}
          />
        </div>
        <p className={`text-xs mt-1 ${impactColor.text} font-medium`}>{getScoreLabel(impactScore)}</p>
        
        {/* Info tooltip */}
        {showImpactInfo && showExplanation && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-3 z-20 text-xs text-gray-600">
            <p className="font-medium text-gray-800 mb-1">Impact Score Berechnung:</p>
            <ul className="space-y-1">
              <li>• Basiert auf True Price Gap ({Math.round(((product.truePrice - product.price) / product.price) * 100)}%)</li>
              <li>• Je niedriger der Gap, desto höher der Score</li>
              {product.tags?.includes('bio') && <li>• +5 für Bio-Zertifizierung</li>}
              {product.tags?.includes('fairtrade') && <li>• +5 für Fair Trade</li>}
              {product.tags?.includes('regional') && <li>• +3 für regionale Produkte</li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Combined score for sorting/filtering (average of both)
export const getCombinedScore = (product) => {
  const healthScore = calculateHealthScore(product);
  const impactScore = calculateImpactScore(product);
  return Math.round((healthScore + impactScore) / 2);
};

export default ScoreDisplay;
