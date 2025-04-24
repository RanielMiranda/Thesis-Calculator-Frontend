import React, { useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

function SearchBar({ searchTerm, setSearchTerm, activeSearchTerm, setActiveSearchTerm, isSearching, setIsSearching }) {
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    if (isSearching) {
      // Clear search
      setActiveSearchTerm('');
      setSearchTerm('');
      setIsSearching(false);
    } else {
      // Apply search
      setActiveSearchTerm(searchTerm);
      setIsSearching(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mb-10 relative max-w-2xl mx-auto">
      <div className="relative text-dark">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for a rule..."
          className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-light focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div 
          className={`absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-transform duration-300 ${isSearching ? 'text-red-500' : 'text-primary'}`}
          onClick={handleSearch}
        >
          <div className="relative w-5 h-5">
            <MagnifyingGlassIcon 
              className={`absolute inset-0 transition-opacity duration-300 ${isSearching ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} 
            />
            <XMarkIcon 
              className={`absolute inset-0 transition-opacity duration-300 ${isSearching ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} 
            />
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="text-dark" />
        </div>
      </div>
      {activeSearchTerm && (
        <p className="mt-2 text-sm text-dark">
          Showing results for: <span className="font-medium">{activeSearchTerm}</span>
        </p>
      )}
    </div>
  );
}

export default SearchBar;
