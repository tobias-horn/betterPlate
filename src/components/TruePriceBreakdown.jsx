import { useState } from 'react';
import { Info, ChevronDown, ChevronUp, Leaf, Users, Globe, Droplets, TreePine } from 'lucide-react';

const TruePriceBreakdown = ({ product, showDetails = false, compact = false }) => {
  const [isExpanded, setIsExpanded] = useState(showDetails);
  
  const breakdown = product.truePriceBreakdown;
  if (!breakdown) return null;

  const totalExternality = product.truePrice - product.price;
  const gapPercentage = Math.round((totalExternality / product.price) * 100);

  // Colors for each category
  const categoryConfig = {
    climate: {
      label: 'Klimabelastung',
      shortLabel: 'Klima',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-100',
      textColor: 'text-orange-700',
      icon: Globe,
      description: 'CO₂-Emissionen und Treibhausgase'
    },
    water: {
      label: 'Wasserverbrauch',
      shortLabel: 'Wasser',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      icon: Droplets,
      description: 'Wassernutzung und -verschmutzung'
    },
    landUse: {
      label: 'Landnutzung',
      shortLabel: 'Land',
      color: 'bg-green-600',
      lightColor: 'bg-green-100',
      textColor: 'text-green-700',
      icon: TreePine,
      description: 'Flächenverbrauch und Biodiversität'
    },
    social: {
      label: 'Unterbezahlung',
      shortLabel: 'Sozial',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      icon: Users,
      description: 'Faire Löhne und Arbeitsbedingungen'
    }
  };

  // Calculate bar widths
  const maxValue = product.truePrice;
  const priceWidth = (product.price / maxValue) * 100;
  
  // Sort breakdown by value for better visualization
  const sortedBreakdown = Object.entries(breakdown)
    .filter(([_, value]) => value > 0)
    .sort((a, b) => b[1] - a[1]);

  if (compact) {
    return (
      <div className="space-y-2">
        {/* Compact True Price Bar */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">True Price</span>
          <span className={`font-bold ${gapPercentage > 50 ? 'text-red-600' : gapPercentage > 25 ? 'text-orange-600' : 'text-green-600'}`}>
            {product.truePrice.toFixed(2)} €
          </span>
        </div>
        
        {/* Mini stacked bar */}
        <div className="h-2 rounded-full overflow-hidden flex bg-gray-200">
          <div 
            className="bg-gray-400 transition-all"
            style={{ width: `${priceWidth}%` }}
            title={`Verkaufspreis: ${product.price.toFixed(2)} €`}
          />
          {sortedBreakdown.map(([key, value]) => (
            <div
              key={key}
              className={`${categoryConfig[key].color} transition-all`}
              style={{ width: `${(value / maxValue) * 100}%` }}
              title={`${categoryConfig[key].label}: ${value.toFixed(2)} €`}
            />
          ))}
        </div>
        
        {/* Gap indicator */}
        <p className="text-xs text-gray-500">
          +{totalExternality.toFixed(2)} € versteckte Kosten ({gapPercentage}%)
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-amber-100/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <Leaf className="text-white" size={18} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-800">True Price Analyse</h3>
            <p className="text-xs text-gray-500">Wahre Kosten inkl. Umwelt & Soziales</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-lg font-bold text-amber-700">{product.truePrice.toFixed(2)} €</p>
            <p className={`text-xs ${gapPercentage > 50 ? 'text-red-600' : 'text-amber-600'}`}>
              +{gapPercentage}% vs. Verkaufspreis
            </p>
          </div>
          {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {/* Main visualization - Stacked Bar Chart */}
          <div className="bg-white rounded-lg p-4">
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Preisaufbau</span>
                <span className="font-medium">{product.truePrice.toFixed(2)} € / {product.basePrice || 'Stück'}</span>
              </div>
            </div>

            {/* Stacked Horizontal Bar */}
            <div className="relative">
              <div className="h-10 rounded-lg overflow-hidden flex shadow-inner">
                {/* Base price section */}
                <div 
                  className="bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-700 transition-all relative group"
                  style={{ width: `${priceWidth}%` }}
                >
                  <span className="z-10 px-1 truncate">
                    {priceWidth > 30 ? `${product.price.toFixed(2)} €` : ''}
                  </span>
                  <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                    Verkaufspreis: {product.price.toFixed(2)} €
                  </div>
                </div>
                
                {/* Externality sections */}
                {sortedBreakdown.map(([key, value]) => {
                  const width = (value / maxValue) * 100;
                  const config = categoryConfig[key];
                  return (
                    <div
                      key={key}
                      className={`${config.color} flex items-center justify-center text-xs font-medium text-white transition-all relative group`}
                      style={{ width: `${width}%` }}
                    >
                      <span className="z-10 px-1 truncate">
                        {width > 8 ? `${value.toFixed(2)} €` : ''}
                      </span>
                      <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                        {config.label}: {value.toFixed(2)} €
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Price labels below bar */}
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0 €</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-300 rounded-sm"></span>
                  Verkaufspreis
                </span>
                <span>{product.truePrice.toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {/* Detailed breakdown list */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <Info size={14} />
              Aufschlüsselung der externen Kosten
            </h4>
            
            {sortedBreakdown.map(([key, value]) => {
              const config = categoryConfig[key];
              const Icon = config.icon;
              const percentage = Math.round((value / totalExternality) * 100);
              
              return (
                <div key={key} className={`${config.lightColor} rounded-lg p-3`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${config.color} rounded-full flex items-center justify-center`}>
                        <Icon className="text-white" size={16} />
                      </div>
                      <div>
                        <p className={`font-medium ${config.textColor}`}>{config.label}</p>
                        <p className="text-xs text-gray-500">{config.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${config.textColor}`}>{value.toFixed(2)} €</p>
                      <p className="text-xs text-gray-500">{percentage}% der Zusatzkosten</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg p-3 border border-amber-200">
            <div className="flex items-start gap-2">
              <Info className="text-amber-600 mt-0.5 flex-shrink-0" size={16} />
              <div className="text-xs text-gray-600">
                <p className="font-medium text-gray-800 mb-1">Was bedeutet True Price?</p>
                <p>{product.truePriceExplanation || 'Der True Price zeigt die wahren Kosten eines Produkts, wenn Umweltschäden und soziale Kosten einberechnet werden. Diese Kosten werden aktuell von der Gesellschaft getragen, nicht vom Verursacher.'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TruePriceBreakdown;
