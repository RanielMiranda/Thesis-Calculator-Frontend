// PopupContainer.jsx
import React from 'react';

const PopupContainer = ({ content, show }) => {
  return (
    <div
      className={`transition-all duration-300 absolute top-0 left-0 w-32 h-32 bg-gray-300 rounded-md p-4 shadow-lg ${show ? 'opacity-100' : 'opacity-0'}`}
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <div className="text-center">{content}</div>
    </div>
  );
};

export default PopupContainer;
