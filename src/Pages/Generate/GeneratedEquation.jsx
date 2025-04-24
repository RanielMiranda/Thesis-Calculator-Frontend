import React from 'react';
import { MathJax } from "better-react-mathjax";

const GeneratedEquation = ({ generatedResult, input, formatForMathJax }) => {
  const displayEquation = input.trim() ? input : generatedResult.equation || "No equation available";

  return (
    <div className="card bg-light p-6 shadow-lg rounded-lg mb-6">
      <h3 className="text-primary text-lg mb-4 font-bold">
        {input.trim() ? "User-Entered Equation" : "Generated Equation"}
      </h3>
      <div className="text-xl bg-secondary py-2 rounded-lg text-dark">
        <MathJax>{`$$ ${formatForMathJax(displayEquation)} $$`}</MathJax>
      </div>
    </div>
  );
};

export default GeneratedEquation;