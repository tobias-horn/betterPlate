import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  ShoppingCart, 
  Plus, 
  Minus, 
  ZoomIn,
  Leaf,
  MapPin,
  Award,
  Info,
  AlertTriangle,
  Check
} from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';
import TruePriceBreakdown from '../components/TruePriceBreakdown';
import ScoreDisplay from '../components/ScoreBadges';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showAdded, setShowAdded] = useState(false);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Produkt nicht gefunden
        </h2>
        <Link to="/" className="text-rewe-red hover:underline">
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(product.id);
  const externalityCost = product.truePrice - product.price;

  // Get similar products
  const similarProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(t => product.tags.includes(t))))
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  const getNutriScoreColor = (score) => {
    const colors = {
      'A': 'bg-green-500',
      'B': 'bg-lime-500',
      'C': 'bg-yellow-500',
      'D': 'bg-orange-500',
      'E': 'bg-red-500'
    };
    return colors[score] || 'bg-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Zurück</span>
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div 
            className={`relative bg-white rounded-2xl p-8 border border-gray-100 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
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
              {product.tags.includes('glutenfrei') && (
                <span className="badge bg-purple-500 text-white">Glutenfrei</span>
              )}
            </div>

            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(product.id);
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform z-10"
            >
              <Heart
                size={22}
                className={favorite ? 'fill-rewe-red text-rewe-red' : 'text-gray-400'}
              />
            </button>

            {/* Image */}
            <div className={`overflow-hidden transition-all duration-300 ${isZoomed ? 'scale-150' : ''}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-80 object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400?text=Produkt';
                }}
              />
            </div>

            {/* Zoom Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <ZoomIn size={14} />
              <span>{isZoomed ? 'Zum Verkleinern klicken' : 'Zum Vergrößern klicken'}</span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand */}
          {product.brand && (
            <p className="text-sm text-rewe-red font-medium">{product.brand}</p>
          )}

          {/* Name */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          {/* Nutri-Score */}
          {product.nutriScore && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Nutri-Score:</span>
              <span className={`w-8 h-8 ${getNutriScoreColor(product.nutriScore)} text-white rounded-lg flex items-center justify-center font-bold`}>
                {product.nutriScore}
              </span>
            </div>
          )}

          {/* Health & Impact Scores */}
          <ScoreDisplay product={product} />

          {/* Price Section */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toFixed(2)} €
              </span>
              {product.basePrice && (
                <span className="text-sm text-gray-500">
                  ({product.basePrice})
                </span>
              )}
            </div>

            {/* True Price Info with Detailed Breakdown */}
            <TruePriceBreakdown product={product} />
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-50 transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-50 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 ${
                showAdded 
                  ? 'bg-green-500 text-white' 
                  : 'btn-primary'
              }`}
            >
              {showAdded ? (
                <>
                  <Check size={20} />
                  <span>Hinzugefügt!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  <span>In den Warenkorb</span>
                </>
              )}
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Produktbeschreibung</h3>
            <p className="text-gray-600">{product.longDescription}</p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4">
            {product.origin && (
              <div className="flex items-start gap-2">
                <MapPin className="text-gray-400 mt-0.5" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Herkunft</p>
                  <p className="text-sm font-medium text-gray-800">{product.origin}</p>
                </div>
              </div>
            )}
            {product.brand && (
              <div className="flex items-start gap-2">
                <Award className="text-gray-400 mt-0.5" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Marke</p>
                  <p className="text-sm font-medium text-gray-800">{product.brand}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sustainability Attributes */}
          {product.tags.length > 0 && (
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="text-green-600" size={18} />
                <h3 className="font-semibold text-gray-800">Nachhaltigkeitsmerkmale</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-green-200">
                    {tag === 'bio' && '🌿 Bio-zertifiziert'}
                    {tag === 'vegan' && '🌱 Vegan'}
                    {tag === 'regional' && '📍 Regional'}
                    {tag === 'fairtrade' && '🤝 Fair Trade'}
                    {tag === 'glutenfrei' && '🌾 Glutenfrei'}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ähnliche Produkte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
