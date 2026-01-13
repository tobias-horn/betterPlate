import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Users, 
  Globe, 
  Droplets, 
  TreePine, 
  Calculator,
  ShoppingCart,
  Heart,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lightbulb,
  TrendingUp,
  Scale,
  Eye,
  Coins,
  Factory,
  Truck,
  Store,
  Sprout,
  CircleDollarSign,
  BadgeCheck,
  Target,
  Sparkles,
  Gift,
  Wallet,
  Shield,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Lock,
  Smartphone,
  Building2,
  HeartHandshake,
  Percent,
  Star,
  Trophy,
  PiggyBank,
  Timer,
  Info,
  Apple
} from 'lucide-react';

const InfoPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-8 md:space-y-12 pb-8">
      {/* Hero Section - BetterPlate Bonus */}
      <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-400/10 rounded-full blur-xl" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles size={16} className="text-amber-300" />
            <span>Neu: BetterPlate Bonus System</span>
            <Gift size={16} className="text-amber-300" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Nachhaltig einkaufen.{' '}
            <span className="text-amber-300">Doppelt profitieren.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8 max-w-2xl">
            Sammle <strong className="text-white">Health Points</strong> und{' '}
            <strong className="text-white">Impact Points</strong> bei jedem Einkauf – 
            und löse sie bei deiner Krankenkasse ein oder erhalte{' '}
            <span className="text-amber-300 font-semibold">1,2× Cashback</span> auf deine True Price Beiträge!
          </p>

          {/* Two Point Types Preview */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Health Points</h3>
                  <p className="text-green-200 text-sm">Für gesunde Produkte</p>
                </div>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                Kaufe gesunde Lebensmittel und sammle Punkte, die du bei deiner{' '}
                <strong className="text-white">Krankenkasse</strong> einlösen kannst.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Leaf className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Impact Points</h3>
                  <p className="text-green-200 text-sm">Für nachhaltige Wahl</p>
                </div>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                Zahle freiwillig den True Price und erhalte{' '}
                <strong className="text-amber-300">120% zurück</strong> als Impact Punkte!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Explainer - 30 Sekunden */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Timer size={16} />
            In 30 Sekunden verstanden
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            So funktioniert der BetterPlate Bonus
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tile 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1.</div>
            <h3 className="font-semibold text-gray-900 mb-2">Einkaufen</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Wähle Produkte und sieh den True Price – die wahren Kosten inklusive Umwelt & Soziales.
            </p>
          </div>

          {/* Tile 2 */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Heart className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-rose-600 mb-2">2.</div>
            <h3 className="font-semibold text-gray-900 mb-2">Health Points sammeln</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Je gesünder dein Warenkorb (niedriger Health Score), desto mehr Punkte bekommst du.
            </p>
          </div>

          {/* Tile 3 */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <CircleDollarSign className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">3.</div>
            <h3 className="font-semibold text-gray-900 mb-2">True Price zahlen</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Entscheide dich freiwillig für den True Price – mit dem Slider bestimmst du deinen Beitrag.
            </p>
          </div>

          {/* Tile 4 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Gift className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-2">4.</div>
            <h3 className="font-semibold text-gray-900 mb-2">Bonus erhalten</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Löse Health Points bei der Kasse ein oder erhalte 1,2× Impact Payback!
            </p>
          </div>
        </div>
      </section>

      {/* What is True Price / Positive True Price */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
              <Scale className="text-white" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Was ist der <span className="text-emerald-400">True Price</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Der <strong className="text-white">True Price</strong> (wahre Preis) eines Lebensmittels zeigt nicht nur, 
                was du an der Kasse zahlst, sondern auch die <strong className="text-emerald-400">versteckten Kosten</strong> für 
                Umwelt und Gesellschaft.
              </p>

              {/* Formula */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl">
                  <span className="bg-gray-700 px-4 py-2 rounded-xl font-bold">Regalpreis</span>
                  <span className="text-2xl">+</span>
                  <span className="bg-orange-500/30 text-orange-300 px-4 py-2 rounded-xl font-bold">Umweltkosten</span>
                  <span className="text-2xl">+</span>
                  <span className="bg-purple-500/30 text-purple-300 px-4 py-2 rounded-xl font-bold">Sozialkosten</span>
                  <span className="text-2xl">=</span>
                  <span className="bg-emerald-500 px-4 py-2 rounded-xl font-bold text-white">True Price</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm">
                  <Globe className="text-orange-400" size={16} />
                  <span className="text-gray-300">CO₂ Emissionen</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm">
                  <Droplets className="text-blue-400" size={16} />
                  <span className="text-gray-300">Wasserverbrauch</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm">
                  <Users className="text-purple-400" size={16} />
                  <span className="text-gray-300">Faire Löhne</span>
                </div>
              </div>
            </div>

            {/* Positive True Price */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <h3 className="font-bold text-lg text-emerald-400">Der Positive True Price</h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Wenn du freiwillig den True Price zahlst, wird dein Beitrag zu einem{' '}
                <strong className="text-white">Positiven True Price</strong>: Er fließt in Projekte, 
                die Umweltschäden kompensieren und faire Arbeitsbedingungen fördern.
              </p>

              <div className="flex items-center gap-3 bg-amber-500/20 rounded-xl p-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-white" size={18} />
                </div>
                <p className="text-sm text-amber-200">
                  <strong className="text-amber-100">Bonus:</strong> Für jeden True Price Beitrag erhältst du 
                  Impact Points mit <strong className="text-amber-100">1,2× Multiplikator</strong>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Points Deep Dive */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-rose-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
            <Heart className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Health Points</h2>
            <p className="text-rose-600 font-medium">Gesunde Ernährung wird belohnt</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jedes Produkt hat einen <strong className="text-gray-900">Health Score</strong> basierend 
              auf dem Nutri-Score und wissenschaftlichen Ernährungsempfehlungen. Je gesünder dein 
              Einkauf, desto mehr <strong className="text-rose-600">Health Points</strong> sammelst du!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Apple className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Obst & Gemüse</h4>
                  <p className="text-sm text-gray-600">Bis zu 10 Health Points pro Kauf</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sprout className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Vollkornprodukte</h4>
                  <p className="text-sm text-gray-600">Bis zu 8 Health Points pro Kauf</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ausgewogener Warenkorb</h4>
                  <p className="text-sm text-gray-600">Bonus für diverse Produktgruppen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Insurance Connection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                <Building2 className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Bei der Krankenkasse einlösen</h3>
                <p className="text-sm text-rose-600">Gesundes Verhalten wird belohnt</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Viele Krankenkassen bieten <strong className="text-gray-900">Bonusprogramme</strong> für 
              gesunde Lebensführung. Deine BetterPlate Health Points können bei teilnehmenden 
              Krankenkassen als Nachweis für gesunde Ernährung eingereicht werden!
            </p>

            <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="text-rose-600" size={18} />
                <span className="font-medium text-gray-900">Beispiel-Vorteile:</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-6">
                <li>• Bis zu 100€ Bonus pro Jahr</li>
                <li>• Zuschüsse für Fitnesskurse</li>
                <li>• Ermäßigungen auf Zusatzversicherungen</li>
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Info size={16} />
              <span>Partnerkassen werden im Profil angezeigt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Points Deep Dive */}
      <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
            <Leaf className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Impact Points</h2>
            <p className="text-emerald-600 font-medium">Nachhaltigkeit mit 1,2× Payback</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* How it works */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wenn du dich für den <strong className="text-gray-900">True Price</strong> entscheidest, 
              trägst du aktiv zur Kompensation von Umwelt- und Sozialkosten bei. Als Dankeschön erhältst 
              du <strong className="text-emerald-600">Impact Points</strong> mit einem attraktiven Multiplikator!
            </p>

            {/* The 1.2x Multiplier Explanation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Percent className="text-amber-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-900">Der 1,2× Multiplikator</h3>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Du zahlst</p>
                    <p className="text-2xl font-bold text-gray-900">1,00 €</p>
                    <p className="text-xs text-gray-500">True Price Beitrag</p>
                  </div>
                  <ArrowRight className="text-emerald-500" size={24} />
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Du bekommst</p>
                    <p className="text-2xl font-bold text-emerald-600">1,20 €</p>
                    <p className="text-xs text-emerald-600 font-medium">in Impact Points</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Der Multiplikator wird durch Partner-Unternehmen und Förderprogramme ermöglicht, 
                die nachhaltigen Konsum unterstützen möchten.
              </p>
            </div>
          </div>

          {/* What you can do with Impact Points */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <Gift className="text-emerald-600" size={20} />
              So nutzt du deine Impact Points
            </h3>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Einkaufsguthaben</h4>
                  <p className="text-sm text-gray-600">Punkte direkt beim nächsten Einkauf einlösen</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TreePine className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Klimaprojekte</h4>
                  <p className="text-sm text-gray-600">Spende Punkte für Aufforstung & Naturschutz</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Soziale Projekte</h4>
                  <p className="text-sm text-gray-600">Unterstütze faire Arbeitsbedingungen weltweit</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Exklusive Vorteile</h4>
                  <p className="text-sm text-gray-600">Rabatte bei nachhaltigen Partnern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Visualization */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center">
            <Wallet className="text-indigo-600" size={24} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Dein BetterPlate Wallet</h2>
            <p className="text-gray-500">Alle Punkte im Überblick</p>
          </div>
        </div>

        {/* Mock Wallet UI */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 rounded-3xl p-6 md:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Leaf className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">BetterPlate</p>
                  <p className="font-bold">Bonus Wallet</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-medium">Aktiv</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Health Points Counter */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="text-rose-400" size={18} />
                  <span className="text-gray-300 text-sm">Health Points</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-rose-400">847</p>
                <p className="text-gray-400 text-xs mt-1">≈ 42€ Kassenbonus</p>
              </div>

              {/* Impact Points Counter */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="text-emerald-400" size={18} />
                  <span className="text-gray-300 text-sm">Impact Points</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-emerald-400">1.234</p>
                <p className="text-gray-400 text-xs mt-1">≈ 12,34€ Guthaben</p>
              </div>
            </div>

            {/* Progress to next level */}
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Nächstes Level: Impact Champion</span>
                <span className="text-amber-400 text-sm font-medium">766 Punkte</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" style={{ width: '62%' }} />
              </div>
              <p className="text-gray-500 text-xs mt-2">62% erreicht – noch 38% bis zum nächsten Bonus!</p>
            </div>
          </div>

          {/* Info beneath wallet */}
          <div className="mt-6 flex items-start gap-3 bg-indigo-50 rounded-xl p-4">
            <Info className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-indigo-900">
              Dein Wallet findest du jederzeit im <strong>Profil-Bereich</strong>. Dort siehst du auch 
              deine Einkaufshistorie und kannst Punkte einlösen oder spenden.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Cost Breakdown Example - Keep from original */}
      <section className="bg-gray-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ein Beispiel: Die wahren Kosten von Rindfleisch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            So setzt sich der True Price zusammen – versteckte Kosten werden sichtbar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Price Bar Visualization */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="text-gray-400">Rinderhackfleisch 500g</span>
              <span className="text-2xl font-bold text-amber-400">8,50 € True Price</span>
            </div>
            
            <div className="h-12 rounded-xl overflow-hidden flex mb-4">
              <div className="bg-gray-500 flex items-center justify-center" style={{ width: '52.8%' }}>
                <span className="text-xs font-medium">4,49 € Regalpreis</span>
              </div>
              <div className="bg-orange-500 flex items-center justify-center" style={{ width: '37.6%' }}>
                <span className="text-xs font-medium">3,20 € Klima</span>
              </div>
              <div className="bg-blue-500 flex items-center justify-center" style={{ width: '3.5%' }}>
              </div>
              <div className="bg-green-500 flex items-center justify-center" style={{ width: '3.5%' }}>
              </div>
              <div className="bg-purple-500 flex items-center justify-center" style={{ width: '2.6%' }}>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center text-sm">
              <div className="bg-gray-700 rounded-lg p-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full mx-auto mb-1"></div>
                <p className="text-gray-400 text-xs">Regalpreis</p>
                <p className="font-medium">4,49 €</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-1"></div>
                <p className="text-gray-400 text-xs">Klimabelastung</p>
                <p className="font-medium">3,20 €</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1"></div>
                <p className="text-gray-400 text-xs">Wasserverbrauch</p>
                <p className="font-medium">0,30 €</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
                <p className="text-gray-400 text-xs">Landnutzung</p>
                <p className="font-medium">0,30 €</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-2 col-span-2 sm:col-span-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-1"></div>
                <p className="text-gray-400 text-xs">Soziale Kosten</p>
                <p className="font-medium">0,21 €</p>
              </div>
            </div>
          </div>

          {/* Impact Points Example */}
          <div className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 rounded-xl p-5 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <p className="font-bold text-lg">Wenn du den True Price zahlst...</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">True Price Gap</p>
                <p className="text-xl font-bold text-white">+4,01 €</p>
              </div>
              <ArrowRight className="text-emerald-400" size={20} />
              <div className="text-center">
                <p className="text-gray-400 text-sm">Impact Points (1,2×)</p>
                <p className="text-xl font-bold text-emerald-400">+481 Punkte</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Die True Price Gap beträgt <strong className="text-amber-400">+89%</strong> – 
              aber du bekommst 20% mehr zurück als du investierst!
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Control Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-indigo-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center">
            <Shield className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Deine Daten, deine Kontrolle</h2>
            <p className="text-indigo-600">Datenschutz hat oberste Priorität</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Lock className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Verschlüsselt gespeichert</h3>
            <p className="text-sm text-gray-600">
              Alle Daten werden nach höchsten Standards verschlüsselt und sicher aufbewahrt.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Eye className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Volle Transparenz</h3>
            <p className="text-sm text-gray-600">
              Du siehst jederzeit, welche Daten gespeichert sind und wer darauf Zugriff hat.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="text-indigo-600" size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Deine Entscheidung</h3>
            <p className="text-sm text-gray-600">
              Du entscheidest, ob und welche Daten mit Partnern wie Krankenkassen geteilt werden.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-start gap-3">
          <Info className="text-indigo-600 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-gray-700">
            Die Verbindung mit deiner Krankenkasse ist <strong>optional</strong>. Du kannst das 
            Bonussystem auch ohne diese Funktion nutzen und deine Health Points jederzeit nachträglich einlösen.
          </p>
        </div>
      </section>

      {/* FAQ Section - Updated */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
            <Lightbulb className="text-gray-600" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {[
            {
              question: "Muss ich immer den True Price bezahlen?",
              answer: "Nein! Der True Price ist freiwillig. Du kannst weiterhin nur den Regalpreis zahlen. Mit dem Slider im Warenkorb bestimmst du selbst, wie viel du zur True Price Gap beitragen möchtest – jeder Beitrag zählt!"
            },
            {
              question: "Wie funktioniert das Einlösen bei der Krankenkasse?",
              answer: "Viele Krankenkassen bieten Bonusprogramme für gesunde Lebensführung. Im Profil-Bereich kannst du deine Krankenkasse verbinden. Deine Health Points werden dann automatisch als Nachweis für gesunde Ernährung übermittelt und du erhältst je nach Kasse Boni oder Zuschüsse."
            },
            {
              question: "Was bedeutet der 1,2× Multiplikator?",
              answer: "Für jeden Euro, den du freiwillig als True Price Beitrag zahlst, erhältst du Impact Points im Wert von 1,20€. Dieser Bonus wird durch Partnerunternehmen und Förderprogramme ermöglicht, die nachhaltigen Konsum unterstützen möchten."
            },
            {
              question: "Wie werden die Health Points berechnet?",
              answer: "Die Health Points basieren auf dem Health Score deines Warenkorbs. Dieser wird aus dem Nutri-Score der einzelnen Produkte und der Ausgewogenheit deines Einkaufs berechnet. Je gesünder und vielfältiger dein Einkauf, desto mehr Punkte sammelst du."
            },
            {
              question: "Werden meine Einkaufsdaten geteilt?",
              answer: "Deine Daten gehören dir. Standardmäßig werden keine Details mit Dritten geteilt. Nur wenn du explizit zustimmst, werden aggregierte Gesundheitsdaten (nicht einzelne Produkte) an deine Krankenkasse übermittelt."
            },
            {
              question: "Sind Bio-Produkte immer besser beim True Price?",
              answer: "Oft, aber nicht immer. Bio-Produkte haben typischerweise niedrigere Umweltkosten, aber der True Price berücksichtigt auch Transport, soziale Bedingungen und Gesamteffizienz. Ein lokales konventionelles Produkt kann manchmal einen niedrigeren True Price haben als ein Bio-Produkt mit langem Transportweg."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="text-gray-400 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Updated */}
      <section className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Trophy className="text-amber-300" size={16} />
            <span>Starte jetzt deine Bonus-Reise</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bereit für bewussteres Einkaufen?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Sammle Health Points und Impact Points bei jedem Einkauf. 
            Gut für dich, gut für die Welt – und du wirst dafür belohnt!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShoppingCart size={24} />
              Jetzt einkaufen
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/profile"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all border border-white/30"
            >
              <Wallet size={24} />
              Zum Wallet
            </Link>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="bg-amber-50 rounded-2xl p-5 flex items-start gap-3 border border-amber-100">
        <Lightbulb className="text-amber-600 flex-shrink-0 mt-1" size={20} />
        <div>
          <p className="text-sm text-amber-900 mb-2">
            <strong>Mehr über True Pricing erfahren?</strong> Die wissenschaftlichen Grundlagen und 
            internationalen Standards findest du bei der True Price Foundation.
          </p>
          <a 
            href="https://www.truepricefoundation.org/publications/principles-for-true-pricing/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-700 font-medium text-sm hover:underline"
          >
            Zur True Price Foundation <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
