// PopupContainer.jsx
import React from 'react';

const PopupContainer = ({ content, show }) => {
  return (
    <div
      className={`transition-all duration-300 w-50 h-50 bg-ct2 rounded-md p-4 shadow-lg ${show ? 'opacity-100' : 'opacity-0'}`}
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <div className="text-center">{content}</div>
    </div>
  );
};

export default PopupContainer;
