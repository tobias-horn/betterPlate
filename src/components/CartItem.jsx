import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex gap-2 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-gray-100">
      {/* Product Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg p-1.5 sm:p-2 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80?text=Produkt';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-800 text-xs sm:text-sm line-clamp-2">{item.name}</h3>
        {item.basePrice && (
          <p className="text-xs text-gray-500 mt-1">{item.basePrice}</p>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {item.tags.includes('bio') && (
            <span className="badge badge-bio text-[10px]">BIO</span>
          )}
          {item.tags.includes('vegan') && (
            <span className="badge badge-vegan text-[10px]">Vegan</span>
          )}
          {item.tags.includes('regional') && (
            <span className="badge badge-regional text-[10px]">Regional</span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors active:bg-gray-100"
          >
            <Minus size={14} className="sm:w-4 sm:h-4" />
          </button>
          <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors active:bg-gray-100"
          >
            <Plus size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Prices and Delete */}
      <div className="flex flex-col items-end justify-between flex-shrink-0">
        <div className="text-right">
          <p className="font-bold text-gray-900">
            {(item.price * item.quantity).toFixed(2)} €
          </p>
          <p className="text-xs text-gray-500">
            {item.price.toFixed(2)} €/Stk
          </p>
          {item.truePriceClass === 'high' && (
            <p className="text-xs text-red-600 mt-1">
              True: {(item.truePrice * item.quantity).toFixed(2)} €
            </p>
          )}
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
