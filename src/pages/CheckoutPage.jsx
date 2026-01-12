import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CreditCard, 
  MapPin, 
  User, 
  Mail, 
  Phone,
  Check,
  Truck,
  ShieldCheck,
  Lock,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { 
    items, 
    subtotal,
    truePriceTotal,
    truePriceContribution,
    truePriceContributionAmount,
    deliveryFee, 
    total, 
    deliverySlot,
    clearCart
  } = useCart();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-filled demo data (greyed out)
  const demoData = {
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max.mustermann@email.de',
    phone: '+49 123 4567890',
    street: 'Musterstraße',
    houseNumber: '42',
    postalCode: '80331',
    city: 'München',
    paymentMethod: 'card'
  };

  const handleProceedToSurvey = async () => {
    setIsSubmitting(true);
    
    // Small delay to show processing state
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Navigate to survey with cart data
    navigate('/survey', {
      state: {
        cartData: items,
        truePricePercentage: truePriceContribution
      }
    });
    
    // Clear cart after navigating
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ihr Warenkorb ist leer
        </h2>
        <Link to="/" className="text-rewe-red hover:underline">
          Zurück zum Einkaufen
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Zurück zum Warenkorb</span>
      </button>

      <h1 className="text-2xl font-bold text-gray-800">Kasse</h1>

      {/* Demo Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Lock className="text-amber-600" size={16} />
          </div>
          <div>
            <p className="font-medium text-amber-800">Demo-Modus</p>
            <p className="text-sm text-amber-700">
              Dies ist ein Prototyp. Die Bestelldaten sind vorausgefüllt. Klicken Sie auf "Jetzt kaufen", um zur Feedback-Umfrage zu gelangen.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form Fields - Greyed out */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 opacity-75">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-gray-400" size={20} />
              <h2 className="font-semibold text-gray-500">Persönliche Daten</h2>
              <Lock className="text-gray-300 ml-auto" size={16} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Vorname</label>
                <input
                  type="text"
                  value={demoData.firstName}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Nachname</label>
                <input
                  type="text"
                  value={demoData.lastName}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  <Mail className="inline" size={14} /> E-Mail
                </label>
                <input
                  type="email"
                  value={demoData.email}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  <Phone className="inline" size={14} /> Telefon
                </label>
                <input
                  type="tel"
                  value={demoData.phone}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 opacity-75">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-gray-400" size={20} />
              <h2 className="font-semibold text-gray-500">Lieferadresse</h2>
              <Lock className="text-gray-300 ml-auto" size={16} />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-1">Straße</label>
                <input
                  type="text"
                  value={demoData.street}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Hausnummer</label>
                <input
                  type="text"
                  value={demoData.houseNumber}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">PLZ</label>
                <input
                  type="text"
                  value={demoData.postalCode}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-1">Stadt</label>
                <input
                  type="text"
                  value={demoData.city}
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 opacity-75">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-gray-400" size={20} />
              <h2 className="font-semibold text-gray-500">Zahlungsmethode</h2>
              <Lock className="text-gray-300 ml-auto" size={16} />
            </div>
            <div className="space-y-3">
              {[
                { id: 'card', label: 'Kreditkarte', icon: '💳' },
                { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                { id: 'klarna', label: 'Klarna', icon: '🔵' },
                { id: 'cash', label: 'Barzahlung bei Lieferung', icon: '💵' }
              ].map(method => (
                <div
                  key={method.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 ${
                    demoData.paymentMethod === method.id
                      ? 'border-gray-300 bg-gray-50'
                      : 'border-gray-200'
                  }`}
                >
                  <span className="text-2xl opacity-50">{method.icon}</span>
                  <span className="font-medium text-gray-500">{method.label}</span>
                  {demoData.paymentMethod === method.id && (
                    <Check className="ml-auto text-gray-400" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4 sticky top-24">
            <h3 className="font-semibold text-gray-800">Bestellübersicht</h3>
            
            {/* Items Preview */}
            <div className="max-h-48 overflow-y-auto space-y-2">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3 text-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-contain bg-gray-50 rounded"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/40?text=P';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-gray-800">{item.name}</p>
                    <p className="text-gray-500">{item.quantity}x</p>
                  </div>
                  <span className="font-medium">{(item.price * item.quantity).toFixed(2)} €</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Zwischensumme</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-orange-600">
                <span>True Price Summe</span>
                <span>{truePriceTotal.toFixed(2)} €</span>
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
              <div className="flex justify-between">
                <span className="text-gray-600">Liefergebühr</span>
                <span>{deliveryFee === 0 ? 'Kostenlos' : `${deliveryFee.toFixed(2)} €`}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold">Gesamt</span>
                <span className="text-2xl font-bold">{total.toFixed(2)} €</span>
              </div>
            </div>

            {/* True Price Contribution Badge */}
            {truePriceContribution > 0 && (
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles size={16} className="text-emerald-600" />
                  <span className="text-sm font-medium">
                    Sie tragen {truePriceContribution}% zum True Price bei! 🌱
                  </span>
                </div>
              </div>
            )}

            {/* Delivery Slot */}
            {deliverySlot && (
              <div className="bg-gray-50 rounded-lg p-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Truck size={16} />
                  <span>
                    {deliverySlot.dateFormatted}, {deliverySlot.time}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleProceedToSurvey}
              disabled={isSubmitting}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Wird verarbeitet...</span>
                </>
              ) : (
                <>
                  <ShieldCheck size={20} />
                  <span>Jetzt kaufen</span>
                </>
              )}
            </button>

            <p className="text-xs text-center text-gray-500">
              Mit dem Kauf akzeptieren Sie unsere AGB und Datenschutzrichtlinien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
