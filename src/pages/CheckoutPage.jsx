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
  Leaf
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { 
    items, 
    subtotal, 
    deliveryFee, 
    total, 
    deliverySlot,
    sustainabilityScore,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    paymentMethod: 'card'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsComplete(true);
    clearCart();
  };

  if (items.length === 0 && !isComplete) {
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

  if (isComplete) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-green-600" size={40} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Bestellung erfolgreich!
        </h1>
        <p className="text-gray-600 mb-6">
          Vielen Dank für Ihre Bestellung. Sie erhalten in Kürze eine Bestätigungs-E-Mail.
        </p>
        
        {deliverySlot && (
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="text-rewe-red" size={20} />
              <span className="font-semibold">Liefertermin</span>
            </div>
            <p className="text-gray-700">
              {deliverySlot.dateFormatted}<br />
              {deliverySlot.time}
            </p>
          </div>
        )}

        <div className="bg-green-50 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 justify-center mb-2">
            <Leaf className="text-green-600" size={20} />
            <span className="font-semibold text-green-800">Nachhaltigkeits-Score: {sustainabilityScore}%</span>
          </div>
          <p className="text-sm text-green-700">
            Danke, dass Sie nachhaltig einkaufen! 🌱
          </p>
        </div>

        <Link to="/" className="btn-primary inline-block">
          Weiter einkaufen
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

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
        {/* Form Fields */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-rewe-red" size={20} />
              <h2 className="font-semibold text-gray-800">Persönliche Daten</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vorname</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Max"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nachname</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Mustermann"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Mail className="inline" size={14} /> E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="max@beispiel.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone className="inline" size={14} /> Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="+49 123 456789"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-rewe-red" size={20} />
              <h2 className="font-semibold text-gray-800">Lieferadresse</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Straße</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Musterstraße"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hausnummer</label>
                <input
                  type="text"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PLZ</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="12345"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Stadt</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Berlin"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-rewe-red" size={20} />
              <h2 className="font-semibold text-gray-800">Zahlungsmethode</h2>
            </div>
            <div className="space-y-3">
              {[
                { id: 'card', label: 'Kreditkarte', icon: '💳' },
                { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                { id: 'klarna', label: 'Klarna', icon: '🔵' },
                { id: 'cash', label: 'Barzahlung bei Lieferung', icon: '💵' }
              ].map(method => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.paymentMethod === method.id
                      ? 'border-rewe-red bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={formData.paymentMethod === method.id}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className="text-2xl">{method.icon}</span>
                  <span className="font-medium text-gray-800">{method.label}</span>
                  {formData.paymentMethod === method.id && (
                    <Check className="ml-auto text-rewe-red" size={20} />
                  )}
                </label>
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
              type="submit"
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
      </form>
    </div>
  );
};

export default CheckoutPage;
