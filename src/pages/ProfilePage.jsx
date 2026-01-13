import { useState } from 'react';
import {
  User,
  Settings,
  Heart,
  Leaf,
  Award,
  ChevronRight,
  Package,
  CreditCard,
  Bell,
  HelpCircle,
  TrendingUp,
  Calendar,
  ShoppingBag,
  ArrowUp,
  ArrowDown,
  Minus,
  Trophy,
  Target,
  Zap,
  Wallet,
  Building2,
  Gift,
  TreePine,
  HeartHandshake,
  CheckCircle2,
  Clock,
  ExternalLink,
  Star,
  Sparkles,
  Euro,
  ShoppingCart,
  BadgeCheck,
  Info,
  ArrowRight,
  X,
  Check,
  MapPin
} from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { calculateHealthScore, calculateImpactScore } from '../components/ScoreBadges';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  const [selectedInsurance, setSelectedInsurance] = useState('tk');
  const [showRedeemModal, setShowRedeemModal] = useState(null);
  const [redeemAmount, setRedeemAmount] = useState(50);
  const { favorites } = useFavorites();
  const { items: cartItems } = useCart();

  // Get favorite products
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  // Realistic order history with detailed data
  const orderHistory = [
    { 
      id: 'BP-2024-0847',
      date: '2024-01-18', 
      products: ['Bio Vollmilch', 'Haferflocken Bio', 'Äpfel Regional'],
      totalPrice: 12.47,
      truePriceContribution: 1.85,
      healthPointsEarned: 42,
      impactPointsEarned: 22,
      healthScore: 78, 
      impactScore: 85 
    },
    { 
      id: 'BP-2024-0823',
      date: '2024-01-15', 
      products: ['Rinderhackfleisch', 'Tomaten Bio', 'Olivenöl Extra'],
      totalPrice: 18.93,
      truePriceContribution: 3.20,
      healthPointsEarned: 28,
      impactPointsEarned: 38,
      healthScore: 65, 
      impactScore: 72 
    },
    { 
      id: 'BP-2024-0795',
      date: '2024-01-12', 
      products: ['Bio Eier', 'Bananen Fair', 'Vollkornbrot'],
      totalPrice: 9.85,
      truePriceContribution: 1.20,
      healthPointsEarned: 52,
      impactPointsEarned: 14,
      healthScore: 82, 
      impactScore: 88 
    },
    { 
      id: 'BP-2024-0756',
      date: '2024-01-08', 
      products: ['Hähnchenbrust Bio', 'Brokkoli', 'Quinoa'],
      totalPrice: 15.62,
      truePriceContribution: 2.10,
      healthPointsEarned: 48,
      impactPointsEarned: 25,
      healthScore: 79, 
      impactScore: 84 
    },
    { 
      id: 'BP-2024-0712',
      date: '2024-01-05', 
      products: ['Lachs Wildfang', 'Avocado', 'Dinkelmehl'],
      totalPrice: 22.34,
      truePriceContribution: 2.80,
      healthPointsEarned: 55,
      impactPointsEarned: 34,
      healthScore: 84, 
      impactScore: 81 
    },
    { 
      id: 'BP-2024-0689',
      date: '2024-01-02', 
      products: ['Joghurt Natur Bio', 'Beeren Mix', 'Nüsse Mix'],
      totalPrice: 11.20,
      truePriceContribution: 1.45,
      healthPointsEarned: 58,
      impactPointsEarned: 17,
      healthScore: 86, 
      impactScore: 83 
    },
    { 
      id: 'BP-2023-0654',
      date: '2023-12-28', 
      products: ['Tofu Bio', 'Paprika Bunt', 'Couscous'],
      totalPrice: 8.95,
      truePriceContribution: 0.95,
      healthPointsEarned: 62,
      impactPointsEarned: 11,
      healthScore: 88, 
      impactScore: 90 
    },
    { 
      id: 'BP-2023-0621',
      date: '2023-12-24', 
      products: ['Bio Gans', 'Rotkohl', 'Kartoffeln Regional'],
      totalPrice: 45.80,
      truePriceContribution: 4.50,
      healthPointsEarned: 35,
      impactPointsEarned: 54,
      healthScore: 71, 
      impactScore: 76 
    }
  ];

  // Calculate total points
  const totalHealthPoints = orderHistory.reduce((sum, o) => sum + o.healthPointsEarned, 0);
  const totalImpactPoints = orderHistory.reduce((sum, o) => sum + o.impactPointsEarned, 0);
  const totalTruePriceContribution = orderHistory.reduce((sum, o) => sum + o.truePriceContribution, 0);

  // Calculate current cart scores
  const calculateCartScores = () => {
    if (cartItems.length === 0) return { health: 0, impact: 0 };
    
    const cartProducts = cartItems.map(item => 
      products.find(p => p.id === item.id)
    ).filter(Boolean);

    const avgHealth = Math.round(
      cartProducts.reduce((sum, p) => sum + calculateHealthScore(p), 0) / cartProducts.length
    );
    const avgImpact = Math.round(
      cartProducts.reduce((sum, p) => sum + calculateImpactScore(p), 0) / cartProducts.length
    );

    return { health: avgHealth, impact: avgImpact };
  };

  const cartScores = calculateCartScores();

  // User profile data
  const user = {
    name: 'Max Mustermann',
    email: 'max.mustermann@email.de',
    memberSince: 'November 2023',
    sustainabilityLevel: 'Eco Pioneer',
    nextLevel: 'Impact Champion',
    levelProgress: 68,
    totalOrders: orderHistory.length,
    avgHealthScore: Math.round(orderHistory.reduce((sum, o) => sum + o.healthScore, 0) / orderHistory.length),
    avgImpactScore: Math.round(orderHistory.reduce((sum, o) => sum + o.impactScore, 0) / orderHistory.length)
  };

  // Health insurance partners
  const insurancePartners = [
    { id: 'tk', name: 'Techniker Krankenkasse', logo: '🏥', maxBonus: 100, connected: true, pointsRequired: 500 },
    { id: 'aok', name: 'AOK', logo: '💚', maxBonus: 80, connected: false, pointsRequired: 400 },
    { id: 'barmer', name: 'BARMER', logo: '🩺', maxBonus: 90, connected: false, pointsRequired: 450 },
    { id: 'dak', name: 'DAK Gesundheit', logo: '❤️', maxBonus: 75, connected: false, pointsRequired: 375 }
  ];

  // Impact redemption options
  const impactRedeemOptions = [
    { id: 'shopping', name: 'Einkaufsguthaben', icon: ShoppingCart, description: 'Direkt beim nächsten Einkauf einlösen', rate: '1:1', color: 'emerald' },
    { id: 'climate', name: 'Klimaprojekte', icon: TreePine, description: 'Aufforstung & CO2-Kompensation', rate: '1:1.5', bonus: true, color: 'green' },
    { id: 'social', name: 'Soziale Projekte', icon: HeartHandshake, description: 'Faire Arbeitsbedingungen weltweit', rate: '1:1.5', bonus: true, color: 'blue' },
    { id: 'partner', name: 'Partner-Gutscheine', icon: Gift, description: 'Bioläden, Restaurants & mehr', rate: '1:1.2', color: 'amber' }
  ];

  const tabs = [
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'orders', label: 'Bestellungen', icon: Package },
    { id: 'favorites', label: 'Favoriten', icon: Heart },
    { id: 'settings', label: 'Einstellungen', icon: Settings }
  ];

  // Calculate trends
  const lastOrder = orderHistory[0] || { healthScore: 0, impactScore: 0 };
  const previousOrder = orderHistory[1] || lastOrder;
  const healthTrend = lastOrder.healthScore - previousOrder.healthScore;
  const impactTrend = lastOrder.impactScore - previousOrder.impactScore;

  // Health points monetary value (approx 5 cents per point for insurance)
  const healthPointsValue = (totalHealthPoints * 0.05).toFixed(2);
  // Impact points value (10 cents per point)
  const impactPointsValue = (totalImpactPoints * 0.10).toFixed(2);

  return (
    <div className="space-y-6 pb-24">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-brand via-brand-light to-teal-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User size={32} />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-teal-100 text-sm">{user.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <Award size={14} className="text-amber-300" />
              <span className="text-amber-200 text-sm font-medium">{user.sustainabilityLevel}</span>
            </div>
          </div>
        </div>
        
        {/* Level Progress */}
        <div className="bg-white/10 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-teal-100 text-xs">Fortschritt zu {user.nextLevel}</span>
            <span className="text-amber-300 text-xs font-medium">{user.levelProgress}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full transition-all duration-500" 
              style={{ width: `${user.levelProgress}%` }} 
            />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Heart size={16} className="text-rose-300" />
              <span className="text-2xl font-bold">{totalHealthPoints}</span>
            </div>
            <p className="text-xs text-teal-100">Health Points</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Leaf size={16} className="text-emerald-300" />
              <span className="text-2xl font-bold">{totalImpactPoints}</span>
            </div>
            <p className="text-xs text-teal-100">Impact Points</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Package size={16} />
              <span className="text-2xl font-bold">{user.totalOrders}</span>
            </div>
            <p className="text-xs text-teal-100">Bestellungen</p>
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
                ? 'bg-brand text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ===== WALLET TAB ===== */}
      {activeTab === 'wallet' && (
        <div className="space-y-6">
          {/* Points Wallet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Health Points Card */}
            <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={20} />
                  <span className="font-medium">Health Points</span>
                </div>
                <p className="text-4xl font-bold mb-1">{totalHealthPoints}</p>
                <p className="text-rose-200 text-sm">≈ {healthPointsValue}€ Kassenbonus</p>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-rose-200">Letzte Bestellung</span>
                    <span className="font-medium">+{orderHistory[0]?.healthPointsEarned || 0} Punkte</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Points Card */}
            <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf size={20} />
                  <span className="font-medium">Impact Points</span>
                  <span className="bg-amber-400 text-amber-900 text-xs px-2 py-0.5 rounded-full font-bold ml-auto">1,2×</span>
                </div>
                <p className="text-4xl font-bold mb-1">{totalImpactPoints}</p>
                <p className="text-emerald-200 text-sm">≈ {impactPointsValue}€ Guthaben</p>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-emerald-200">True Price Beitrag gesamt</span>
                    <span className="font-medium">{totalTruePriceContribution.toFixed(2)}€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Points → Insurance Redemption */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-5 border-b border-rose-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Health Points einlösen</h3>
                  <p className="text-sm text-rose-600">Bei deiner Krankenkasse</p>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-gray-600 text-sm mb-4">
                Deine Health Points werden als Nachweis für gesunde Ernährung anerkannt. 
                Verbinde deine Krankenkasse und erhalte <strong>bis zu 100€ Bonus pro Jahr</strong>!
              </p>

              <div className="space-y-3">
                {insurancePartners.map(insurance => (
                  <div 
                    key={insurance.id}
                    onClick={() => setSelectedInsurance(insurance.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                      selectedInsurance === insurance.id 
                        ? 'bg-rose-50 border-2 border-rose-300' 
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-3xl">{insurance.logo}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{insurance.name}</span>
                        {insurance.connected && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 size={12} />
                            Verbunden
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">Bis zu {insurance.maxBonus}€ Jahresbonus</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{insurance.pointsRequired} Punkte = {insurance.maxBonus}€</p>
                      {totalHealthPoints >= insurance.pointsRequired ? (
                        <span className="text-green-600 text-xs font-medium">✓ Einlösbar</span>
                      ) : (
                        <span className="text-gray-400 text-xs">Noch {insurance.pointsRequired - totalHealthPoints} Punkte</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {selectedInsurance && (
                <button 
                  onClick={() => setShowRedeemModal('health')}
                  className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Building2 size={18} />
                  Bei {insurancePartners.find(i => i.id === selectedInsurance)?.name} einlösen
                </button>
              )}
            </div>
          </div>

          {/* Impact Points → Redemption Options */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Gift className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Impact Points einlösen</h3>
                  <p className="text-sm text-emerald-600">Wähle deine Belohnung</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 space-y-3">
              {impactRedeemOptions.map(option => (
                <button 
                  key={option.id}
                  onClick={() => setShowRedeemModal(option.id)}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-all text-left group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    option.color === 'emerald' ? 'bg-emerald-100' :
                    option.color === 'green' ? 'bg-green-100' :
                    option.color === 'blue' ? 'bg-blue-100' : 'bg-amber-100'
                  }`}>
                    <option.icon className={`${
                      option.color === 'emerald' ? 'text-emerald-600' :
                      option.color === 'green' ? 'text-green-600' :
                      option.color === 'blue' ? 'text-blue-600' : 'text-amber-600'
                    }`} size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{option.name}</span>
                      {option.bonus && (
                        <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-medium">
                          +50% Bonus
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600">{option.rate}</span>
                    <ChevronRight className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Contribution Summary */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-amber-400" size={24} />
              <h3 className="font-bold">Dein positiver Impact</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">{totalTruePriceContribution.toFixed(2)}€</p>
                <p className="text-gray-400 text-sm">True Price Beiträge</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-emerald-400">{(totalTruePriceContribution * 0.8).toFixed(1)} kg</p>
                <p className="text-gray-400 text-sm">CO₂ kompensiert</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
              <Info size={16} />
              <span>Dein Beitrag finanziert Klima- und Sozialprojekte weltweit</span>
            </div>
          </div>
        </div>
      )}

      {/* ===== ORDERS TAB ===== */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Package className="text-brand" size={20} />
                Bestellverlauf
              </h3>
              <span className="text-sm text-gray-500">{orderHistory.length} Bestellungen</span>
            </div>

            <div className="space-y-3">
              {orderHistory.map((order, idx) => (
                <div key={order.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(order.date).toLocaleDateString('de-DE', { 
                          day: '2-digit', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{order.totalPrice.toFixed(2)}€</p>
                      {order.truePriceContribution > 0 && (
                        <p className="text-xs text-emerald-600">+{order.truePriceContribution.toFixed(2)}€ True Price</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {order.products.map((product, i) => (
                      <span key={i} className="bg-white px-2 py-1 rounded-md text-xs text-gray-600 border border-gray-200">
                        {product}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Heart size={14} className="text-rose-500" />
                      <span className="text-sm text-gray-600">+{order.healthPointsEarned}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf size={14} className="text-emerald-500" />
                      <span className="text-sm text-gray-600">+{order.impactPointsEarned}</span>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-1.5 bg-rose-400 rounded-full" style={{ width: `${order.healthScore * 0.3}px` }} />
                        <span className="text-xs text-gray-500">{order.healthScore}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-1.5 bg-emerald-400 rounded-full" style={{ width: `${order.impactScore * 0.3}px` }} />
                        <span className="text-xs text-gray-500">{order.impactScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-5 border border-rose-100">
              <Heart className="text-rose-500 mb-2" size={24} />
              <p className="text-3xl font-bold text-rose-600">{user.avgHealthScore}</p>
              <p className="text-sm text-gray-600">Ø Health Score</p>
              <div className={`flex items-center gap-1 mt-2 text-xs ${healthTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {healthTrend >= 0 ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                {Math.abs(healthTrend)} vs. letzte Bestellung
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-100">
              <Leaf className="text-emerald-500 mb-2" size={24} />
              <p className="text-3xl font-bold text-emerald-600">{user.avgImpactScore}</p>
              <p className="text-sm text-gray-600">Ø Impact Score</p>
              <div className={`flex items-center gap-1 mt-2 text-xs ${impactTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {impactTrend >= 0 ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                {Math.abs(impactTrend)} vs. letzte Bestellung
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== FAVORITES TAB ===== */}
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
                Markiere Produkte mit dem Herz-Symbol, um sie hier zu speichern.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ===== SETTINGS TAB ===== */}
      {activeTab === 'settings' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Bell size={20} className="text-brand" />
              Benachrichtigungen
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Push-Benachrichtigungen', description: 'Erhalte Infos zu deinen Bestellungen', enabled: true },
                { label: 'Bonus-Alerts', description: 'Wenn du Punkte einlösen kannst', enabled: true },
                { label: 'Nachhaltigkeits-Tipps', description: 'Wöchentliche Empfehlungen', enabled: false },
                { label: 'Partner-Angebote', description: 'Neue Einlösemöglichkeiten', enabled: true }
              ].map((setting, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-800 block">{setting.label}</span>
                    <span className="text-sm text-gray-500">{setting.description}</span>
                  </div>
                  <button
                    className={`w-12 h-6 rounded-full transition-colors ${
                      setting.enabled ? 'bg-brand' : 'bg-gray-300'
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
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Settings size={20} className="text-brand" />
              Einstellungen
            </h3>
            <div className="space-y-3">
              {[
                { icon: CreditCard, label: 'Zahlungsmethoden', badge: '2 aktiv' },
                { icon: MapPin, label: 'Lieferadressen', badge: '1 gespeichert' },
                { icon: HelpCircle, label: 'Hilfe & Support' }
              ].map((item, idx) => (
                <button key={idx} className="w-full flex items-center gap-4 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <item.icon className="text-gray-500" size={20} />
                  <span className="flex-1 text-left font-medium text-gray-800">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                  <ChevronRight className="text-gray-400" size={18} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-2">
            <button className="w-full py-3 text-red-500 font-medium hover:bg-red-50 rounded-lg transition-colors border border-red-200">
              Abmelden
            </button>
          </div>
        </div>
      )}

      {/* ===== REDEEM MODAL ===== */}
      {showRedeemModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">
                {showRedeemModal === 'health' ? 'Health Points einlösen' : 'Impact Points einlösen'}
              </h3>
              <button 
                onClick={() => setShowRedeemModal(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-5">
              {showRedeemModal === 'health' ? (
                <div className="space-y-4">
                  <div className="bg-rose-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-rose-600 mb-1">Verfügbare Punkte</p>
                    <p className="text-3xl font-bold text-rose-600">{totalHealthPoints}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-medium text-gray-900 mb-2">
                      {insurancePartners.find(i => i.id === selectedInsurance)?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Deine Health Points werden an deine Krankenkasse übermittelt. 
                      Der Bonus wird deinem Bonusprogramm gutgeschrieben.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-green-700 mb-2">
                      <CheckCircle2 size={18} />
                      <span className="font-medium">Geschätzter Bonus</span>
                    </div>
                    <p className="text-2xl font-bold text-green-700">
                      {Math.min(totalHealthPoints * 0.05, insurancePartners.find(i => i.id === selectedInsurance)?.maxBonus || 0).toFixed(2)}€
                    </p>
                  </div>

                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-medium transition-colors">
                    Jetzt einlösen
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-emerald-600 mb-1">Verfügbare Punkte</p>
                    <p className="text-3xl font-bold text-emerald-600">{totalImpactPoints}</p>
                    <p className="text-sm text-gray-500">≈ {impactPointsValue}€</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wie viele Punkte möchtest du einlösen?
                    </label>
                    <input 
                      type="range"
                      min="10"
                      max={totalImpactPoints}
                      value={redeemAmount}
                      onChange={(e) => setRedeemAmount(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                      <span>10 Punkte</span>
                      <span className="font-bold text-emerald-600">{redeemAmount} Punkte</span>
                      <span>{totalImpactPoints} Punkte</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-medium text-gray-900 mb-1">
                      {impactRedeemOptions.find(o => o.id === showRedeemModal)?.name || 'Einkaufsguthaben'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {impactRedeemOptions.find(o => o.id === showRedeemModal)?.description || 'Direkt beim nächsten Einkauf einlösen'}
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-emerald-700 mb-2">
                      <CheckCircle2 size={18} />
                      <span className="font-medium">Du erhältst</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-700">
                      {(redeemAmount * 0.10 * (impactRedeemOptions.find(o => o.id === showRedeemModal)?.bonus ? 1.5 : 1)).toFixed(2)}€
                    </p>
                    {impactRedeemOptions.find(o => o.id === showRedeemModal)?.bonus && (
                      <p className="text-sm text-amber-600 mt-1">Inkl. +50% Bonus für guten Zweck!</p>
                    )}
                  </div>

                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition-colors">
                    Jetzt einlösen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
