import React from 'react';
import { MathJax } from 'better-react-mathjax';

function RuleCard({ rule }) {
  return (
    <div className="bg-light rounded-xl shadow-md p-6 hover:-translate-y-1 transition transform">
      <h3 className="text-xl font-semibold text-primary mb-4">{rule.title}</h3>
      <div className="bg-light px-4 py-3 rounded mb-4 overflow-auto">
        <MathJax dynamic className="text-dark">{`\\(${rule.formula}\\)`}</MathJax>
      </div>
      <div className="bg-light px-4 py-3 rounded-md border-l-4 border-green-500">
        <p className="mb-2 font-medium text-dark">Example:</p>
        <MathJax dynamic className="text-dark">{`\\(${rule.example}\\)`}</MathJax>
      </div>
    </div>
  );
}

export default RuleCard;