import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { products, categories, findAlternatives } from '../data/products';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import FilterPanel from '../components/FilterPanel';
import { calculateHealthScore, calculateImpactScore, getCombinedScore } from '../components/ScoreBadges';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState({ tags: [], truePriceClass: null, scoreRanges: [] });
  const [sortBy, setSortBy] = useState('relevance');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query)) ||
        (p.brand && p.brand.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Tags filter
    if (filters.tags.length > 0) {
      result = result.filter(p =>
        filters.tags.every(tag => p.tags.includes(tag))
      );
    }

    // True price class filter
    if (filters.truePriceClass) {
      result = result.filter(p => p.truePriceClass === filters.truePriceClass);
    }

    // Score range filters
    if (filters.scoreRanges?.length > 0) {
      result = result.filter(p => {
        const healthScore = calculateHealthScore(p);
        const impactScore = calculateImpactScore(p);
        
        return filters.scoreRanges.some(range => {
          switch (range) {
            case 'health-high': return healthScore >= 80;
            case 'health-medium': return healthScore >= 60 && healthScore < 80;
            case 'impact-high': return impactScore >= 80;
            case 'impact-medium': return impactScore >= 60 && impactScore < 80;
            default: return true;
          }
        });
      });
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'true-price':
        result.sort((a, b) => a.truePrice - b.truePrice);
        break;
      case 'true-price-gap':
        result.sort((a, b) => {
          const gapA = (a.truePrice - a.price) / a.price;
          const gapB = (b.truePrice - b.price) / b.price;
          return gapA - gapB;
        });
        break;
      case 'health-score':
        result.sort((a, b) => calculateHealthScore(b) - calculateHealthScore(a));
        break;
      case 'impact-score':
        result.sort((a, b) => calculateImpactScore(b) - calculateImpactScore(a));
        break;
      case 'combined-score':
        result.sort((a, b) => getCombinedScore(b) - getCombinedScore(a));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return result;
  }, [searchQuery, activeCategory, filters, sortBy]);

  // Get alternatives when no results found
  const alternatives = useMemo(() => {
    if (filteredProducts.length === 0 && searchQuery) {
      return findAlternatives(searchQuery);
    }
    return [];
  }, [filteredProducts.length, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand to-brand-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2">
          Willkommen bei BetterPlate 🛒
        </h1>
        <p className="text-teal-100 text-sm sm:text-base mb-3 sm:mb-4">
          Nachhaltige Produkte mit transparenten True Prices
        </p>
        
        {/* True Price CTA Card */}
        <div className="bg-white/15 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-yellow-300" />
                <span className="font-semibold text-sm sm:text-base">Was ist der True Price?</span>
              </div>
              <p className="text-xs sm:text-sm text-teal-100">
                Entdecke die wahren Kosten deiner Produkte – inklusive Umwelt- und Sozialauswirkungen.
              </p>
            </div>
            <Link 
              to="/info"
              className="flex items-center justify-center gap-2 bg-white text-brand font-semibold px-4 py-2.5 rounded-lg hover:bg-teal-50 transition-colors text-sm sm:text-base whitespace-nowrap active:scale-95"
            >
              <span>Mehr erfahren</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery('')}
        placeholder="Produkte suchen (z.B. Bio, Karotten, vegan...)"
      />

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Filter Panel */}
      <FilterPanel
        filters={filters}
        onFilterChange={setFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {filteredProducts.length} Produkte gefunden
        </p>
        {filters.truePriceClass === 'low' && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            🌱 Nachhaltige Auswahl
          </span>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="text-gray-400" size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Keine Produkte gefunden
          </h3>
          <p className="text-gray-500 mb-6">
            Für "{searchQuery}" wurden keine Ergebnisse gefunden.
          </p>

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Vielleicht interessieren Sie sich für diese Alternativen:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {alternatives.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              setSearchQuery('');
              setFilters({ tags: [], truePriceClass: null, scoreRanges: [] });
              setActiveCategory('all');
            }}
            className="mt-6 text-rewe-red hover:underline"
          >
            Alle Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
