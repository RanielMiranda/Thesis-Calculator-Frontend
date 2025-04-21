import React from 'react';

function NoResults({ clearSearch }) {
  return (
    <div className="text-center py-10">
      <p className="text-lg text-dark">No rules found matching your search.</p>
      <button 
        onClick={clearSearch}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
      >
        Clear Search
      </button>
    </div>
  );
}

export default NoResults;