import { Leaf, AlertTriangle, TrendingDown, Info } from 'lucide-react';

const SustainabilitySummary = ({ 
  sustainabilityScore, 
  externalitiesSaved, 
  lowImpactItems, 
  highImpactItems,
  truePriceTotal,
  subtotal 
}) => {
  const externalityCost = truePriceTotal - subtotal;
  
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
      <div className="flex items-center gap-2 mb-4">
        <Leaf className="text-green-600" size={20} />
        <h3 className="font-semibold text-gray-800">Nachhaltigkeits-Übersicht</h3>
      </div>

      {/* Sustainability Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Nachhaltigkeits-Score</span>
          <span className="font-bold text-lg text-green-700">{sustainabilityScore}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              width: `${sustainabilityScore}%`,
              background: sustainabilityScore >= 70 
                ? 'linear-gradient(90deg, #22c55e, #16a34a)' 
                : sustainabilityScore >= 40 
                  ? 'linear-gradient(90deg, #eab308, #ca8a04)'
                  : 'linear-gradient(90deg, #ef4444, #dc2626)'
            }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Anteil der Produkte mit niedrigem True Price
        </p>
      </div>

      {/* True Price Comparison */}
      <div className="bg-white rounded-lg p-3 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Info className="text-blue-500" size={16} />
          <span className="text-sm font-medium text-gray-700">True Price Vergleich</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Gezahlter Preis</p>
            <p className="font-bold text-gray-900">{subtotal.toFixed(2)} €</p>
          </div>
          <div>
            <p className="text-gray-500">Wahrer Preis</p>
            <p className="font-bold text-orange-600">{truePriceTotal.toFixed(2)} €</p>
          </div>
        </div>
        {externalityCost > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle size={14} />
              <span className="text-xs">
                Versteckte Umweltkosten: <strong>{externalityCost.toFixed(2)} €</strong>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Impact Summary */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-100 rounded-lg p-3 text-center">
          <TrendingDown className="text-green-600 mx-auto mb-1" size={20} />
          <p className="text-2xl font-bold text-green-700">
            {lowImpactItems.reduce((sum, item) => sum + item.quantity, 0)}
          </p>
          <p className="text-xs text-green-600">Nachhaltige Produkte</p>
        </div>
        <div className="bg-orange-100 rounded-lg p-3 text-center">
          <AlertTriangle className="text-orange-600 mx-auto mb-1" size={20} />
          <p className="text-2xl font-bold text-orange-700">
            {highImpactItems.reduce((sum, item) => sum + item.quantity, 0)}
          </p>
          <p className="text-xs text-orange-600">Hoher Umwelt-Impact</p>
        </div>
      </div>

      {/* Tips */}
      {highImpactItems.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-xs text-yellow-800">
            <strong>💡 Tipp:</strong> Ersetzen Sie tierische Produkte durch pflanzliche Alternativen, 
            um Ihren ökologischen Fußabdruck zu reduzieren.
          </p>
        </div>
      )}
    </div>
  );
};

export default SustainabilitySummary;
