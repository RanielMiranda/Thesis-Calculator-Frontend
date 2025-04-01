// Bottomcontent.jsx
import React from 'react';

const Bottomcontent = () => {
  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="flex flex-row items-center space-x-4">
        <strong>
          <a href="/about" className="text-tx1 text-sm hover:underline">
            About
          </a>
        </strong>
        <span className="bg-tx1 h-8 w-px"></span>
        <strong>
          <a href="/" className="text-tx1 text-sm hover:underline">
            Contact
          </a>
        </strong>
        <span className="bg-tx1 h-8 w-px"></span>
        <strong>
          <a href="/" className="text-tx1 text-sm hover:underline">
            FAQs
          </a>
        </strong>
        <span className="bg-tx1 h-8 w-px"></span>
        <strong>
          <a href="/" className="text-tx1 text-sm hover:underline">
            Help
          </a>
        </strong>
      </div>
    </div>
  );
};

export default Bottomcontent;

