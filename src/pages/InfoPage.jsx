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
  Target
} from 'lucide-react';

const InfoPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl">👋</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              Willkommen
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Ever heard of <span className="text-yellow-300">TRUE PRICE</span>?
          </h1>
          
          <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
            No? No problem, this is why we are here! Der <strong className="text-white">True Price</strong> eines 
            Lebensmittels ist der Preis, der nicht nur das beinhaltet, was Sie an der Kasse zahlen, 
            sondern auch die <strong className="text-white">versteckten Kosten</strong> für Menschen und 
            Planeten, die entlang des Weges entstehen.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <CircleDollarSign size={18} />
              <span className="text-sm">Niedrige Löhne</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe size={18} />
              <span className="text-sm">CO₂ Emissionen</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Droplets size={18} />
              <span className="text-sm">Wasserverschmutzung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formula Section */}
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
            <Calculator className="text-amber-600" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Wie wird der True Price berechnet?
          </h2>
        </div>

        {/* Visual Formula */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 min-w-[120px]">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="text-white" size={20} />
              </div>
              <p className="font-bold text-gray-900">True Price</p>
            </div>
            
            <span className="text-2xl font-bold text-gray-400">=</span>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 min-w-[120px]">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <Store className="text-white" size={20} />
              </div>
              <p className="font-bold text-gray-900">Regalpreis</p>
            </div>
            
            <span className="text-2xl font-bold text-gray-400">+</span>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-200 min-w-[120px]">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="text-white" size={20} />
              </div>
              <p className="font-bold text-gray-900">Soziale Kosten</p>
            </div>
            
            <span className="text-2xl font-bold text-gray-400">+</span>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-green-200 min-w-[120px]">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Leaf className="text-white" size={20} />
              </div>
              <p className="font-bold text-gray-900">Umweltkosten</p>
            </div>
          </div>
        </div>

        {/* Calculation Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Wertschöpfungskette analysieren</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experten kartieren die gesamte Wertschöpfungskette (Bauernhof, Verarbeitung, Transport, Einzelhandel) 
                  und identifizieren negative Auswirkungen wie unterbezahlte Arbeiter, unsichere Bedingungen, 
                  Wasserverbrauch, Emissionen oder Biodiversitätsverlust.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-lg text-xs text-gray-600">
                    <Sprout size={12} /> Farm
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-lg text-xs text-gray-600">
                    <Factory size={12} /> Verarbeitung
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-lg text-xs text-gray-600">
                    <Truck size={12} /> Transport
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-lg text-xs text-gray-600">
                    <Store size={12} /> Einzelhandel
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Geldwert berechnen</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Auf diese Auswirkungen wird ein Geldwert gelegt, mit Standardmethoden 
                  (z.B. Kosten pro Tonne CO₂, pro Liter verschmutztes Wasser, oder pro "fehlenden" 
                  existenzsichernden Lohn) und pro Produkt addiert, um die "True Price Gap" zu finden.
                </p>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p className="text-xs text-gray-500">CO₂</p>
                    <p className="font-bold text-orange-600">~120€/t</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p className="text-xs text-gray-500">Wasser</p>
                    <p className="font-bold text-blue-600">~0.50€/m³</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Should I Care Section */}
      <section className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-rose-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
            <Heart className="text-rose-600" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Warum sollte mich das interessieren?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <Eye className="text-red-600" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">Wahre Kosten erkennen</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              True Price zeigt, welche Produkte <strong>wirklich günstig</strong> sind und welche nur billig erscheinen, 
              weil jemand anderes oder die Umwelt die Rechnung später bezahlt 
              (z.B. durch Gesundheitskosten, Klimaschäden oder Armut).
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <BadgeCheck className="text-green-600" size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">Bessere Entscheidungen</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Es hilft Ihnen, Optionen zu finden, die <strong>fairer und nachhaltiger</strong> sind, 
              und gibt Einzelhändlern ein klares Signal, wo sie Beschaffung, Löhne und 
              landwirtschaftliche Praktiken verbessern können.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-amber-100 rounded-2xl p-4 flex items-start gap-3">
          <Lightbulb className="text-amber-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="text-sm text-amber-900">
              <strong>Mehr erfahren?</strong> Die vollständigen Prinzipien für True Pricing finden Sie bei der 
              True Price Foundation.
            </p>
            <a 
              href="https://www.truepricefoundation.org/publications/principles-for-true-pricing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-700 font-medium text-sm mt-2 hover:underline"
            >
              Zur True Price Foundation <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* What Does It Mean For Me Section */}
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
            <ShoppingCart className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Was bedeutet True Price für mich?
          </h2>
        </div>

        <p className="text-gray-600 mb-8 text-lg">
          Als Käufer oder App-Nutzer im Lebensmitteleinzelhandel bedeutet True Price:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Scale className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mehr transparente Auswahl</h3>
              <p className="text-indigo-100 leading-relaxed">
                Sie können zwei ähnliche Produkte (z.B. zwei Schokoladenriegel) vergleichen 
                und sehen, welches <strong className="text-white">weniger versteckte soziale und 
                Umweltkosten</strong> verursacht.
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Coins className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mehr Kontrolle</h3>
              <p className="text-teal-100 leading-relaxed">
                Sie können wählen, ob Sie "nur" den Regalpreis zahlen oder freiwillig 
                (einen Teil der) True Price Gap zahlen, um diese versteckten Auswirkungen 
                zu beheben – <strong className="text-white">ohne auf erschwingliche Basics zu verzichten</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact on Society & Environment */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Society Card */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Für die Gesellschaft
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/80 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-purple-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Sichtbarkeit schaffen</h4>
                  <p className="text-sm text-gray-600">
                    Macht sichtbar, wie aktuelle Preise mit niedrigen Bauernkommen, 
                    schlechten Arbeitsbedingungen und Gesundheitsproblemen verbunden sind, 
                    und schafft einen Weg, Geld für faire Löhne zurückzuführen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="text-purple-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Ungleichheit reduzieren</h4>
                  <p className="text-sm text-gray-600">
                    Unterstützt Politiken und Geschäftsmodelle, die Ungleichheit verringern, 
                    anstatt soziale und Umweltkosten auf verletzliche Gruppen und 
                    zukünftige Generationen abzuwälzen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
              <Globe className="text-white" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Für die Umwelt
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/80 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TreePine className="text-green-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Auswirkungen verbinden</h4>
                  <p className="text-sm text-gray-600">
                    Verbindet jedes Produkt mit seinem Klimaeinfluss, Landnutzung, 
                    Wasserverschmutzung und Biodiversitätsverlust – diese sind 
                    keine "kostenlosen" Nebeneffekte mehr, sondern Kosten, die reduziert werden müssen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-green-600" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Nachhaltige Produkte belohnen</h4>
                  <p className="text-sm text-gray-600">
                    Belohnt Produkte mit geringeren Auswirkungen (z.B. pflanzlich oder regenerativ), 
                    weil ihre True Price Gap kleiner ist – das kann Nachfrage und 
                    Investitionen in nachhaltigere Lebensmittelsysteme lenken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Cost Breakdown Example */}
      <section className="bg-gray-900 rounded-3xl p-8 md:p-10 text-white">
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
            <div className="flex items-center justify-between mb-4">
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

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center text-sm">
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
              <div className="bg-gray-700 rounded-lg p-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-1"></div>
                <p className="text-gray-400 text-xs">Soziale Kosten</p>
                <p className="font-medium">0,21 €</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Die True Price Gap beträgt <strong className="text-amber-400">+89%</strong> – das bedeutet, 
            dass die versteckten Kosten fast genauso hoch sind wie der Regalpreis!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
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
              answer: "Nein! Der True Price ist ein Informationswerkzeug. Sie können weiterhin den normalen Regalpreis bezahlen. Die Information hilft Ihnen lediglich, informiertere Entscheidungen zu treffen."
            },
            {
              question: "Wie genau sind die True Price Berechnungen?",
              answer: "Die Berechnungen basieren auf wissenschaftlichen Methoden und internationalen Standards. Sie werden regelmäßig aktualisiert, wenn neue Daten verfügbar sind. Obwohl keine Berechnung perfekt ist, bieten sie einen guten Anhaltspunkt für die versteckten Kosten."
            },
            {
              question: "Was passiert, wenn ich mich für ein Produkt mit niedrigem True Price Gap entscheide?",
              answer: "Produkte mit niedrigem True Price Gap verursachen weniger externe Kosten für Gesellschaft und Umwelt. Wenn mehr Menschen solche Produkte wählen, setzt das Signale an Produzenten und Händler, nachhaltigere Praktiken zu fördern."
            },
            {
              question: "Sind Bio-Produkte immer besser beim True Price?",
              answer: "Oft, aber nicht immer. Bio-Produkte haben typischerweise niedrigere Umweltkosten (weniger Pestizide, bessere Bodengesundheit), aber der True Price berücksichtigt auch Faktoren wie Transport, soziale Bedingungen und Gesamteffizienz."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rewe-red to-red-600 rounded-3xl p-8 md:p-10 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Bereit, bewusster einzukaufen?
        </h2>
        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Entdecken Sie unsere Produkte mit True Price Transparenz und treffen Sie 
          informierte Entscheidungen für sich, die Gesellschaft und den Planeten.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-rewe-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors"
        >
          <ShoppingCart size={24} />
          Jetzt einkaufen
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default InfoPage;
