import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Plus, AlertTriangle, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { ScoreBadgeCompact } from './ScoreBadges';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  // Calculate True Price gap
  const externalityCost = product.truePrice - product.price;
  const gapPercentage = Math.round((externalityCost / product.price) * 100);
  
  // Calculate bar proportions for mini visualization
  const breakdown = product.truePriceBreakdown;
  const maxValue = product.truePrice;
  const priceWidth = (product.price / maxValue) * 100;

  return (
    <Link to={`/product/${product.id}`} className="card group">
      <div className="relative">
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            size={18}
            className={favorite ? 'fill-rewe-red text-rewe-red' : 'text-gray-400'}
          />
        </button>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.tags.includes('bio') && (
            <span className="badge badge-bio">BIO</span>
          )}
          {product.tags.includes('vegan') && (
            <span className="badge badge-vegan">Vegan</span>
          )}
          {product.tags.includes('regional') && (
            <span className="badge badge-regional">Regional</span>
          )}
          {product.tags.includes('fairtrade') && (
            <span className="badge badge-fairtrade">Fair Trade</span>
          )}
        </div>

        {/* Score Badges */}
        <div className="absolute bottom-3 left-3 z-10">
          <ScoreBadgeCompact product={product} />
        </div>

        {/* Product Image */}
        <div className="h-40 p-4 flex items-center justify-center bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150?text=Produkt';
            }}
          />
        </div>
      </div>

      <div className="p-4">
        {/* Brand */}
        {product.brand && (
          <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        )}

        {/* Product Name */}
        <h3 className="font-medium text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] mb-2">
          {product.name}
        </h3>

        {/* Base Price */}
        {product.basePrice && (
          <p className="text-xs text-gray-500 mb-1">{product.basePrice}</p>
        )}

        {/* Price Section */}
        <div className="mb-2">
          <span className="text-lg font-bold text-gray-900">
            {product.price.toFixed(2)} €
          </span>
        </div>

        {/* True Price Mini Visualization */}
        <div className={`p-2 rounded-lg ${product.truePriceClass === 'high' ? 'bg-red-50' : 'bg-green-50'} mb-2`}>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              {product.truePriceClass === 'high' ? (
                <AlertTriangle size={12} className="text-red-500" />
              ) : (
                <Leaf size={12} className="text-green-500" />
              )}
              <span className="text-xs font-medium text-gray-700">True Price</span>
            </div>
            <span className={`text-xs font-bold ${product.truePriceClass === 'high' ? 'text-red-600' : 'text-green-600'}`}>
              {product.truePrice.toFixed(2)} €
            </span>
          </div>
          
          {/* Mini stacked bar */}
          {breakdown && (
            <div className="h-1.5 rounded-full overflow-hidden flex bg-gray-200">
              <div 
                className="bg-gray-400"
                style={{ width: `${priceWidth}%` }}
              />
              {breakdown.climate > 0 && (
                <div className="bg-orange-500" style={{ width: `${(breakdown.climate / maxValue) * 100}%` }} />
              )}
              {breakdown.water > 0 && (
                <div className="bg-blue-500" style={{ width: `${(breakdown.water / maxValue) * 100}%` }} />
              )}
              {breakdown.landUse > 0 && (
                <div className="bg-green-600" style={{ width: `${(breakdown.landUse / maxValue) * 100}%` }} />
              )}
              {breakdown.social > 0 && (
                <div className="bg-purple-500" style={{ width: `${(breakdown.social / maxValue) * 100}%` }} />
              )}
            </div>
          )}
          
          <p className={`text-[10px] mt-1 ${product.truePriceClass === 'high' ? 'text-red-600' : 'text-green-600'}`}>
            +{externalityCost.toFixed(2)} € versteckte Kosten ({gapPercentage}%)
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-rewe-red hover:bg-rewe-red-dark text-white py-2 rounded-lg flex items-center justify-center gap-1 transition-colors"
        >
          <ShoppingCart size={16} />
          <span className="text-sm">In den Warenkorb</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
