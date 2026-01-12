import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import DeliverySlotPicker from '../components/DeliverySlotPicker';
import { CartScoresSummary, TruePriceSlider, SmartCartRecommendations } from '../components/SmartCart';

const CartPage = () => {
  const {
    items,
    itemCount,
    subtotal,
    truePriceTotal,
    truePriceGap,
    truePriceContribution,
    truePriceContributionAmount,
    truePriceBreakdown,
    deliveryFee,
    total,
    cartHealthScore,
    cartImpactScore,
    baseCartImpactScore,
    truePriceImpactBonus,
    deliverySlot,
    updateQuantity,
    removeItem,
    setDeliverySlot,
    setTruePriceContribution
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="text-gray-400" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Ihr Warenkorb ist leer
        </h2>
        <p className="text-gray-500 mb-6">
          Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <span>Produkte entdecken</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Warenkorb ({itemCount} {itemCount === 1 ? 'Artikel' : 'Artikel'})
        </h1>
        <Link to="/" className="text-rewe-red hover:underline text-sm">
          Weiter einkaufen
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}

          {/* Delivery Slot Picker */}
          <DeliverySlotPicker
            selectedSlot={deliverySlot}
            onSelectSlot={setDeliverySlot}
          />

          {/* Smart Recommendations - moved to main area for better layout */}
          <SmartCartRecommendations 
            currentHealthScore={cartHealthScore}
            currentImpactScore={cartImpactScore}
            cartItems={items}
          />
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          {/* Cart Scores Summary */}
          <CartScoresSummary 
            healthScore={cartHealthScore}
            impactScore={cartImpactScore}
            baseImpactScore={baseCartImpactScore}
            truePriceContribution={truePriceContribution}
            itemCount={itemCount}
          />

          {/* True Price Slider */}
          <TruePriceSlider 
            truePriceGap={truePriceGap}
            contribution={truePriceContribution}
            onContributionChange={setTruePriceContribution}
            breakdown={truePriceBreakdown}
          />

          {/* Price Summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4">
            <h3 className="font-semibold text-gray-800">Bestellübersicht</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Zwischensumme</span>
                <span className="font-medium">{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">True Price Summe</span>
                <span className="font-medium text-orange-600">{truePriceTotal.toFixed(2)} €</span>
              </div>
              {truePriceContributionAmount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} />
                    True Price Beitrag ({truePriceContribution}%)
                  </span>
                  <span className="font-medium">+{truePriceContributionAmount.toFixed(2)} €</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-1">
                  <Truck size={14} />
                  Liefergebühr
                </span>
                {deliveryFee === 0 ? (
                  <span className="text-green-600 font-medium">Kostenlos</span>
                ) : (
                  <span className="font-medium">{deliveryFee.toFixed(2)} €</span>
                )}
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-gray-500">
                  Noch {(50 - subtotal).toFixed(2)} € bis zur kostenlosen Lieferung
                </p>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-gray-800">Gesamt</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">
                    {total.toFixed(2)} €
                  </span>
                  <p className="text-xs text-gray-500">inkl. MwSt.</p>
                </div>
              </div>
            </div>

            {/* Delivery Slot Info */}
            {deliverySlot && (
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <p className="text-green-800">
                  <strong>Liefertermin:</strong><br />
                  {deliverySlot.dateFormatted}<br />
                  {deliverySlot.time}
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <Link
              to="/checkout"
              className={`w-full btn-primary flex items-center justify-center gap-2 py-3 ${
                !deliverySlot ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              <span>Zur Kasse</span>
              <ArrowRight size={18} />
            </Link>
            
            {!deliverySlot && (
              <p className="text-xs text-center text-gray-500">
                Bitte wählen Sie einen Liefertermin
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
