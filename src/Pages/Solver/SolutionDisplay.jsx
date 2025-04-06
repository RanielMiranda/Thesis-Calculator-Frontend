// SolutionDisplay.jsx
import React from 'react';
import { MathJax } from "better-react-mathjax";

const SolutionDisplay = ({ derivative, formatForMathJax }) => {
  return (
    <div className="card p-6 bg-light shadow-lg rounded-lg">
      <h3 className="text-primary mb-4 font-bold text-lg">Solution</h3>
      <div className="math-display bg-secondary py-2 rounded-lg text-dark">
        <MathJax className = "text-dark">{`$$ ${formatForMathJax(derivative)} $$`}</MathJax>
      </div>
      <button className="btn bg-primary btn-primary hover:bg-primarylight px-4 py-2 rounded-md mt-4 text-dark">
        Show Steps
      </button>
    </div>
  );
};

export default SolutionDisplay;