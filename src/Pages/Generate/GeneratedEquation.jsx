import React from 'react';
import { MathJax } from "better-react-mathjax";

const GeneratedEquation = ({ generatedResult, formatForMathJax }) => {
  return (
    <div className="card bg-light p-6 shadow-lg rounded-lg mb-6">
      <h3 className="text-primary text-lg mb-4 font-bold">Generated Equation</h3>
      <div className="text-xl bg-secondary py-2 rounded-lg text-dark">
        <MathJax>{`$$ ${formatForMathJax(generatedResult.equation)} $$`}</MathJax>
      </div>
    </div>
  );
};

export default GeneratedEquation;