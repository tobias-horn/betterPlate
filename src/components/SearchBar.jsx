import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange, onClear, placeholder = "Produkte suchen..." }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="text-gray-400" size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-rewe-red focus:border-transparent outline-none transition shadow-sm"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center"
        >
          <X className="text-gray-400 hover:text-gray-600" size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
