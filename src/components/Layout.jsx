import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, User, Home, Search, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout = ({ children }) => {
  const { itemCount } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-gray-800">BetterPlate</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-rewe-red text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <Home size={20} />
                <span>Produkte</span>
              </NavLink>
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-rewe-red text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <Info size={20} />
                <span>True Price</span>
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors relative ${
                    isActive ? 'bg-rewe-red text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <ShoppingCart size={20} />
                <span>Warenkorb</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rewe-red text-white text-xs rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-rewe-red text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <User size={20} />
                <span>Profil</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex justify-around items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg ${
                isActive ? 'text-rewe-red' : 'text-gray-500'
              }`
            }
          >
            <Home size={22} />
            <span className="text-[10px] mt-1">Produkte</span>
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg ${
                isActive ? 'text-rewe-red' : 'text-gray-500'
              }`
            }
          >
            <Info size={22} />
            <span className="text-[10px] mt-1">Info</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg relative ${
                isActive ? 'text-rewe-red' : 'text-gray-500'
              }`
            }
          >
            <ShoppingCart size={22} />
            <span className="text-[10px] mt-1">Warenkorb</span>
            {itemCount > 0 && (
              <span className="absolute top-1 right-2 w-5 h-5 bg-rewe-red text-white text-xs rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg ${
                isActive ? 'text-rewe-red' : 'text-gray-500'
              }`
            }
          >
            <User size={22} />
            <span className="text-[10px] mt-1">Profil</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
