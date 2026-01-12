import { createContext, useContext, useReducer } from 'react';
import { calculateHealthScore, calculateImpactScore } from '../components/ScoreBadges';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += action.payload.quantity || 1;
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      return { ...state, items: newItems };
    }
    case 'CLEAR_CART':
      return { ...state, items: [], truePriceContribution: 0 };
    case 'SET_DELIVERY_SLOT':
      return { ...state, deliverySlot: action.payload };
    case 'SET_TRUE_PRICE_CONTRIBUTION':
      return { ...state, truePriceContribution: action.payload };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  deliverySlot: null,
  truePriceContribution: 0 // 0-100 percentage
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } });
  };

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setDeliverySlot = (slot) => {
    dispatch({ type: 'SET_DELIVERY_SLOT', payload: slot });
  };

  const setTruePriceContribution = (percentage) => {
    dispatch({ type: 'SET_TRUE_PRICE_CONTRIBUTION', payload: percentage });
  };

  // Calculate totals
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const truePriceTotal = state.items.reduce((sum, item) => sum + (item.truePrice * item.quantity), 0);
  const truePriceGap = truePriceTotal - subtotal;
  const truePriceContributionAmount = (truePriceGap * state.truePriceContribution) / 100;
  const externalitiesSaved = truePriceTotal - subtotal;
  const deliveryFee = subtotal >= 50 ? 0 : 4.90;
  const total = subtotal + deliveryFee + truePriceContributionAmount;

  // Calculate True Price breakdown for the cart
  const truePriceBreakdown = state.items.reduce((breakdown, item) => {
    if (item.truePriceBreakdown) {
      return {
        climate: breakdown.climate + (item.truePriceBreakdown.climate * item.quantity),
        water: breakdown.water + (item.truePriceBreakdown.water * item.quantity),
        landUse: breakdown.landUse + (item.truePriceBreakdown.landUse * item.quantity),
        social: breakdown.social + (item.truePriceBreakdown.social * item.quantity)
      };
    }
    return breakdown;
  }, { climate: 0, water: 0, landUse: 0, social: 0 });

  // Sustainability metrics
  const lowImpactItems = state.items.filter(item => item.truePriceClass === 'low');
  const highImpactItems = state.items.filter(item => item.truePriceClass === 'high');
  const sustainabilityScore = state.items.length > 0
    ? Math.round((lowImpactItems.reduce((sum, item) => sum + item.quantity, 0) / itemCount) * 100)
    : 0;

  // Calculate Health Score (weighted average by quantity)
  const cartHealthScore = state.items.length > 0
    ? Math.round(
        state.items.reduce((sum, item) => 
          sum + (calculateHealthScore(item) * item.quantity), 0
        ) / itemCount
      )
    : 0;

  // Calculate base Impact Score (weighted average by quantity)
  const baseCartImpactScore = state.items.length > 0
    ? Math.round(
        state.items.reduce((sum, item) => 
          sum + (calculateImpactScore(item) * item.quantity), 0
        ) / itemCount
      )
    : 0;

  // Calculate Impact Score bonus from True Price contribution (up to +15 points for 100%)
  const truePriceImpactBonus = Math.round((state.truePriceContribution / 100) * 15);
  
  // Final Impact Score with True Price contribution bonus
  const cartImpactScore = Math.min(100, baseCartImpactScore + truePriceImpactBonus);

  const value = {
    items: state.items,
    deliverySlot: state.deliverySlot,
    truePriceContribution: state.truePriceContribution,
    itemCount,
    subtotal,
    truePriceTotal,
    truePriceGap,
    truePriceContributionAmount,
    truePriceBreakdown,
    externalitiesSaved,
    deliveryFee,
    total,
    sustainabilityScore,
    lowImpactItems,
    highImpactItems,
    cartHealthScore,
    cartImpactScore,
    baseCartImpactScore,
    truePriceImpactBonus,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    setDeliverySlot,
    setTruePriceContribution
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
