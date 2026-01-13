import { useState } from 'react';
import { 
  User, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  Leaf, 
  Settings,
  ChevronRight,
  Package,
  Star,
  TrendingUp,
  Award,
  Target,
  Zap,
  Calendar,
  ArrowUp,
  ArrowDown,
  Minus,
  ShoppingBag,
  Trophy
} from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { calculateHealthScore, calculateImpactScore } from '../components/ScoreBadges';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { favorites } = useFavorites();
  const { items: cartItems } = useCart();

  // Get favorite products
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  // Mock order history with products (simulating past purchases)
  const orderHistory = [
    { 
      date: '2024-12-01', 
      products: [1, 2, 5, 8, 12], // product IDs
      healthScore: 72,
      impactScore: 68
    },
    { 
      date: '2024-12-08', 
      products: [3, 4, 7, 11, 15],
      healthScore: 78,
      impactScore: 75
    },
    { 
      date: '2024-12-15', 
      products: [2, 6, 9, 14, 18],
      healthScore: 81,
      impactScore: 79
    },
    { 
      date: '2024-12-22', 
      products: [1, 4, 10, 13, 17],
      healthScore: 76,
      impactScore: 82
    },
    { 
      date: '2025-01-05', 
      products: [5, 8, 11, 16, 20],
      healthScore: 84,
      impactScore: 85
    }
  ];

  // Calculate current cart scores
  const calculateCartScores = () => {
    if (cartItems.length === 0) return { health: 0, impact: 0 };
    
    const cartProducts = cartItems.map(item => products.find(p => p.id === item.id)).filter(Boolean);
    if (cartProducts.length === 0) return { health: 0, impact: 0 };
    
    const healthSum = cartProducts.reduce((sum, p) => sum + calculateHealthScore(p), 0);
    const impactSum = cartProducts.reduce((sum, p) => sum + calculateImpactScore(p), 0);
    
    return {
      health: Math.round(healthSum / cartProducts.length),
      impact: Math.round(impactSum / cartProducts.length)
    };
  };

  const cartScores = calculateCartScores();

  // Calculate average scores from history
  const avgHealthScore = Math.round(orderHistory.reduce((sum, o) => sum + o.healthScore, 0) / orderHistory.length);
  const avgImpactScore = Math.round(orderHistory.reduce((sum, o) => sum + o.impactScore, 0) / orderHistory.length);

  // Calculate trend (last order vs previous)
  const lastOrder = orderHistory[orderHistory.length - 1];
  const previousOrder = orderHistory[orderHistory.length - 2];
  const healthTrend = lastOrder.healthScore - previousOrder.healthScore;
  const impactTrend = lastOrder.impactScore - previousOrder.impactScore;

  // Mock user data
  const user = {
    name: 'Max Mustermann',
    email: 'max@beispiel.de',
    memberSince: 'Januar 2024',
    sustainabilityLevel: 'Gold',
    totalOrders: orderHistory.length,
    co2Saved: 12.5,
    avgHealthScore,
    avgImpactScore
  };

  const tabs = [
    { id: 'overview', label: 'Übersicht', icon: User },
    { id: 'scores', label: 'Meine Scores', icon: Target },
    { id: 'favorites', label: 'Favoriten', icon: Heart },
    { id: 'settings', label: 'Einstellungen', icon: Settings }
  ];

  const menuItems = [
    { icon: Package, label: 'Bestellhistorie', badge: '3 aktiv' },
    { icon: MapPin, label: 'Lieferadressen', badge: '2' },
    { icon: CreditCard, label: 'Zahlungsmethoden', badge: '3' },
    { icon: Bell, label: 'Benachrichtigungen', badge: null },
    { icon: Star, label: 'Bewertungen', badge: '12' }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-brand to-brand-light rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-teal-100">{user.email}</p>
            <p className="text-teal-200 text-sm">Mitglied seit {user.memberSince}</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mt-6">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">{user.totalOrders}</p>
            <p className="text-xs text-teal-100">Bestellungen</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Heart size={16} className="text-pink-300" />
              <span className="text-2xl font-bold">{user.avgHealthScore}</span>
            </div>
            <p className="text-xs text-teal-100">Ø Health</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Leaf size={16} className="text-green-300" />
              <span className="text-2xl font-bold">{user.avgImpactScore}</span>
            </div>
            <p className="text-xs text-teal-100">Ø Impact</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Award size={16} />
              <span className="font-bold text-sm">{user.sustainabilityLevel}</span>
            </div>
            <p className="text-xs text-red-100">Status</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-rewe-red text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          {/* Quick Menu */}
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <item.icon className="text-gray-600" size={20} />
                </div>
                <span className="flex-1 text-left font-medium text-gray-800">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="text-gray-400" size={20} />
              </button>
            ))}
          </div>

          {/* Recent Activity Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Letzte Aktivität</h3>
            <div className="text-center py-8 text-gray-500">
              <Package className="mx-auto mb-2 text-gray-300" size={40} />
              <p>Keine aktuellen Bestellungen</p>
              <p className="text-sm">Starten Sie jetzt Ihren Einkauf!</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'favorites' && (
        <div>
          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favoriteProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <Heart className="mx-auto mb-4 text-gray-300" size={48} />
              <h3 className="font-semibold text-gray-800 mb-2">Keine Favoriten</h3>
              <p className="text-gray-500">
                Markieren Sie Produkte mit dem Herz-Symbol, um sie hier zu speichern.
              </p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'scores' && (
        <div className="space-y-4">
          {/* Current Cart Scores */}
          {cartItems.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <ShoppingBag className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Aktueller Warenkorb</h3>
                  <p className="text-sm text-gray-600">{cartItems.length} Produkte</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Heart className="mx-auto text-pink-500 mb-2" size={24} />
                  <p className="text-3xl font-bold text-pink-600">{cartScores.health}</p>
                  <p className="text-xs text-gray-500">Health Score</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Leaf className="mx-auto text-green-500 mb-2" size={24} />
                  <p className="text-3xl font-bold text-green-600">{cartScores.impact}</p>
                  <p className="text-xs text-gray-500">Impact Score</p>
                </div>
              </div>
            </div>
          )}

          {/* Score Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Health Score Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  healthTrend > 0 ? 'bg-green-100 text-green-700' : 
                  healthTrend < 0 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {healthTrend > 0 ? <ArrowUp size={12} /> : healthTrend < 0 ? <ArrowDown size={12} /> : <Minus size={12} />}
                  {Math.abs(healthTrend)} Punkte
                </div>
              </div>
              <p className="text-4xl font-bold text-pink-600 mb-1">{avgHealthScore}</p>
              <p className="text-sm text-gray-600 font-medium">Ø Health Score</p>
              <p className="text-xs text-gray-500 mt-2">Basierend auf {orderHistory.length} Bestellungen</p>
            </div>

            {/* Impact Score Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Leaf className="text-white" size={20} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  impactTrend > 0 ? 'bg-green-100 text-green-700' : 
                  impactTrend < 0 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {impactTrend > 0 ? <ArrowUp size={12} /> : impactTrend < 0 ? <ArrowDown size={12} /> : <Minus size={12} />}
                  {Math.abs(impactTrend)} Punkte
                </div>
              </div>
              <p className="text-4xl font-bold text-green-600 mb-1">{avgImpactScore}</p>
              <p className="text-sm text-gray-600 font-medium">Ø Impact Score</p>
              <p className="text-xs text-gray-500 mt-2">Basierend auf {orderHistory.length} Bestellungen</p>
            </div>
          </div>

          {/* Score History Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp size={20} className="text-rewe-red" />
                Score-Verlauf
              </h3>
              <span className="text-xs text-gray-500">Letzte {orderHistory.length} Bestellungen</span>
            </div>
            
            {/* Simple bar chart */}
            <div className="space-y-4">
              {orderHistory.map((order, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(order.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}
                    </span>
                    <span className="flex gap-3">
                      <span className="text-pink-600">H: {order.healthScore}</span>
                      <span className="text-green-600">I: {order.impactScore}</span>
                    </span>
                  </div>
                  <div className="flex gap-1 h-4">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-l-full transition-all duration-500"
                      style={{ width: `${order.healthScore}%` }}
                      title={`Health: ${order.healthScore}`}
                    />
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-500 rounded-r-full transition-all duration-500"
                      style={{ width: `${order.impactScore}%` }}
                      title={`Impact: ${order.impactScore}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <span className="text-xs text-gray-600">Health Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-600">Impact Score</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
              <Trophy size={20} className="text-amber-500" />
              Errungenschaften
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { 
                  title: 'Health Starter', 
                  desc: 'Erste Bestellung mit Health Score > 70',
                  icon: Heart,
                  unlocked: true,
                  color: 'pink'
                },
                { 
                  title: 'Eco Warrior', 
                  desc: 'Impact Score > 80 erreicht',
                  icon: Leaf,
                  unlocked: lastOrder.impactScore > 80,
                  color: 'green'
                },
                { 
                  title: 'Konsistenz', 
                  desc: '5 Bestellungen in Folge',
                  icon: Zap,
                  unlocked: orderHistory.length >= 5,
                  color: 'yellow'
                },
                { 
                  title: 'True Champion', 
                  desc: 'Beide Scores > 85',
                  icon: Award,
                  unlocked: lastOrder.healthScore > 85 && lastOrder.impactScore > 85,
                  color: 'purple'
                }
              ].map((achievement, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border-2 transition-all ${
                    achievement.unlocked 
                      ? `bg-${achievement.color}-50 border-${achievement.color}-200` 
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    achievement.unlocked 
                      ? achievement.color === 'pink' ? 'bg-pink-500' :
                        achievement.color === 'green' ? 'bg-green-500' :
                        achievement.color === 'yellow' ? 'bg-yellow-500' : 'bg-purple-500'
                      : 'bg-gray-300'
                  }`}>
                    <achievement.icon className="text-white" size={18} />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{achievement.title}</p>
                  <p className="text-xs text-gray-500">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
              <Target size={20} className="text-amber-600" />
              Tipps zur Verbesserung
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                Wählen Sie mehr Bio-Produkte für einen besseren Health & Impact Score
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                Regionale Produkte reduzieren Transportemissionen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">•</span>
                Achten Sie auf den Nutri-Score für gesündere Alternativen
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Einstellungen</h3>
          <div className="space-y-4">
            {[
              { label: 'Push-Benachrichtigungen', enabled: true },
              { label: 'E-Mail Newsletter', enabled: true },
              { label: 'True Price Anzeige', enabled: true },
              { label: 'Nachhaltigkeits-Tipps', enabled: false }
            ].map((setting, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-800">{setting.label}</span>
                <button
                  className={`w-12 h-6 rounded-full transition-colors ${
                    setting.enabled ? 'bg-rewe-red' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      setting.enabled ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full py-3 text-rewe-red font-medium hover:bg-red-50 rounded-lg transition-colors">
              Abmelden
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
