import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, Plus, ArrowRight, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { calculateHealthScore, calculateImpactScore } from '../ScoreBadges';

/**
 * SmartCartRecommendations - Recommends products to improve Health and Impact scores
 * Algorithm: Sorts products by how much they would improve the average cart scores
 */
const SmartCartRecommendations = ({ currentHealthScore, currentImpactScore, cartItems }) => {
  const [expanded, setExpanded] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'health', 'impact'
  const { addItem } = useCart();

  // Get IDs of products already in cart
  const cartProductIds = new Set(cartItems.map(item => item.id));

  // Calculate how adding a product would affect scores
  const calculateScoreImpact = (product) => {
    const productHealthScore = calculateHealthScore(product);
    const productImpactScore = calculateImpactScore(product);
    
    // Current weighted scores (by quantity)
    const currentTotalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    if (currentTotalQuantity === 0) {
      // Empty cart - the product becomes the score
      return {
        healthImprovement: productHealthScore - 50, // vs baseline of 50
        impactImprovement: productImpactScore - 50,
        newHealthScore: productHealthScore,
        newImpactScore: productImpactScore,
        totalImprovement: (productHealthScore + productImpactScore) - 100
      };
    }

    // Calculate new average if product is added
    const currentHealthTotal = cartItems.reduce((sum, item) => 
      sum + (calculateHealthScore(item) * item.quantity), 0
    );
    const currentImpactTotal = cartItems.reduce((sum, item) => 
      sum + (calculateImpactScore(item) * item.quantity), 0
    );

    const newHealthScore = Math.round((currentHealthTotal + productHealthScore) / (currentTotalQuantity + 1));
    const newImpactScore = Math.round((currentImpactTotal + productImpactScore) / (currentTotalQuantity + 1));

    return {
      healthImprovement: newHealthScore - currentHealthScore,
      impactImprovement: newImpactScore - currentImpactScore,
      newHealthScore,
      newImpactScore,
      totalImprovement: (newHealthScore - currentHealthScore) + (newImpactScore - currentImpactScore)
    };
  };

  // Get recommendations: products not in cart that would improve scores
  const recommendations = products
    .filter(product => !cartProductIds.has(product.id))
    .map(product => ({
      ...product,
      healthScore: calculateHealthScore(product),
      impactScore: calculateImpactScore(product),
      scoreImpact: calculateScoreImpact(product)
    }))
    .filter(product => {
      // Only recommend products that improve at least one score
      if (filter === 'health') return product.scoreImpact.healthImprovement > 0;
      if (filter === 'impact') return product.scoreImpact.impactImprovement > 0;
      return product.scoreImpact.totalImprovement > 0;
    })
    .sort((a, b) => {
      // Sort by the selected improvement metric
      if (filter === 'health') return b.scoreImpact.healthImprovement - a.scoreImpact.healthImprovement;
      if (filter === 'impact') return b.scoreImpact.impactImprovement - a.scoreImpact.impactImprovement;
      return b.scoreImpact.totalImprovement - a.scoreImpact.totalImprovement;
    })
    .slice(0, 4); // Top 4 recommendations

  const handleAddToCart = (product) => {
    addItem(product, 1);
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-gradient-to-r from-violet-50 to-purple-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between"
      >
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <Sparkles size={18} className="text-violet-600" />
          Score verbessern
        </h3>
        {expanded ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
      </button>

      {expanded && (
        <div className="p-4 space-y-4">
          {/* Filter Tabs */}
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'Alle', icon: TrendingUp },
              { id: 'health', label: 'Health', icon: Heart },
              { id: 'impact', label: 'Impact', icon: Leaf }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-violet-100 text-violet-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon size={12} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 ? (
            <div className="space-y-3">
              {recommendations.map((product) => (
                <div 
                  key={product.id}
                  className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {/* Product Image */}
                  <Link to={`/product/${product.id}`} className="flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-14 h-14 object-contain rounded-lg bg-white"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${product.id}`}>
                      <h4 className="text-sm font-medium text-gray-800 truncate hover:text-rewe-red transition-colors">
                        {product.name}
                      </h4>
                    </Link>
                    <p className="text-sm font-bold text-gray-900">{product.price.toFixed(2)} €</p>
                    
                    {/* Score Improvements */}
                    <div className="flex items-center gap-2 mt-1">
                      {product.scoreImpact.healthImprovement > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-xs text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded-full">
                          <Heart size={10} />
                          +{product.scoreImpact.healthImprovement}
                        </span>
                      )}
                      {product.scoreImpact.impactImprovement > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                          <Leaf size={10} />
                          +{product.scoreImpact.impactImprovement}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-shrink-0 w-9 h-9 bg-rewe-red hover:bg-rewe-red-dark text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500 text-sm">
              <p>Ihre Scores sind bereits optimal! 🎉</p>
            </div>
          )}

          {/* Browse More Link */}
          <Link 
            to="/"
            className="flex items-center justify-center gap-2 text-sm text-violet-600 hover:text-violet-700 font-medium pt-2 border-t border-gray-100"
          >
            <span>Alle Produkte entdecken</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SmartCartRecommendations;
