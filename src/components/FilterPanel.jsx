import { useState } from 'react';
import { Filter, ChevronDown, X, Heart, Leaf } from 'lucide-react';
import { filterOptions } from '../data/products';

const FilterPanel = ({ filters, onFilterChange, sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTag = (tagId) => {
    const newTags = filters.tags.includes(tagId)
      ? filters.tags.filter(t => t !== tagId)
      : [...filters.tags, tagId];
    onFilterChange({ ...filters, tags: newTags });
  };

  const toggleTruePriceClass = (classId) => {
    const newClass = filters.truePriceClass === classId ? null : classId;
    onFilterChange({ ...filters, truePriceClass: newClass });
  };

  const toggleScoreRange = (rangeId) => {
    const newRanges = filters.scoreRanges?.includes(rangeId)
      ? filters.scoreRanges.filter(r => r !== rangeId)
      : [...(filters.scoreRanges || []), rangeId];
    onFilterChange({ ...filters, scoreRanges: newRanges });
  };

  const clearFilters = () => {
    onFilterChange({ tags: [], truePriceClass: null, scoreRanges: [] });
  };

  const hasActiveFilters = filters.tags.length > 0 || filters.truePriceClass || (filters.scoreRanges?.length > 0);

  return (
    <div className="space-y-4">
      {/* Filter Toggle & Sort */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            hasActiveFilters
              ? 'bg-rewe-red text-white border-rewe-red'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Filter size={18} />
          <span>Filter</span>
          {hasActiveFilters && (
            <span className="w-5 h-5 bg-white text-rewe-red rounded-full text-xs flex items-center justify-center font-bold">
              {filters.tags.length + (filters.truePriceClass ? 1 : 0) + (filters.scoreRanges?.length || 0)}
            </span>
          )}
          <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <span className="text-sm text-gray-500 hidden sm:inline">Sortieren:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-rewe-red outline-none max-w-[140px] sm:max-w-none"
          >
            {filterOptions.sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Expanded Filter Panel */}
      {isOpen && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">Filter</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-rewe-red hover:underline flex items-center gap-1"
              >
                <X size={14} />
                Alle zurücksetzen
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">Eigenschaften</h4>
            <div className="flex flex-wrap gap-2">
              {filterOptions.tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filters.tags.includes(tag.id)
                      ? `${tag.color} text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Score Filters */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
              <Heart size={14} className="text-red-500" />
              <Leaf size={14} className="text-green-500" />
              Score Filter
            </h4>
            <div className="flex flex-wrap gap-2">
              {filterOptions.scoreRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => toggleScoreRange(range.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                    filters.scoreRanges?.includes(range.id)
                      ? range.id.includes('health') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{range.icon}</span>
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* True Price Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">True Price Kategorie</h4>
            <div className="flex flex-wrap gap-2">
              {filterOptions.truePriceClass.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleTruePriceClass(option.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filters.truePriceClass === option.id
                      ? `${option.color} text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
