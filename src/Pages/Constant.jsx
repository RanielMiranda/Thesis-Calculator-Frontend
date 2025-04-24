import React from 'react';
import { MathJax } from 'better-react-mathjax';
import Navbar from '../Components/Navbar';
import Bottomcontent from '../Components/Bottomcontent';
import { Link } from 'react-router-dom';

const rules = [
  {
    title: "Constant Rule",
    formula: "\\frac{d}{dx} c = 0",
    example: "\\frac{d}{dx} 3 = 0",
    description: "The constant rule states that the derivative of any constant is zero. This makes sense because constants don't change, so their rate of change is always zero.",
    whenToUse: "Use this rule whenever you're differentiating a standalone constant term.",
    mistakes: [
      "Forgetting that the derivative is zero (especially when the constant appears with other terms)",
      "Confusing constants with coefficients (coefficients are multiplied by the derivative)"
    ]
  }
];

function Constant() {
  return (
    <div className="bg-bgcolor text-dark min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 p-8 max-w-4xl mx-auto">
        <Link to="/learn">
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primarylight">
            Back to Learn
          </button>
        </Link>
        {rules.map((rule, index) => (
          <div key={index} className="bg-light rounded-xl shadow-md p-6">
            <h2 className="text-primary text-3xl font-bold text-center mb-4">{rule.title}</h2>

            <h3 className="text-primary font-semibold text-xl mb-2">Description</h3>
            <p className="mb-4">{rule.description}</p>

            <h3 className="text-primary font-semibold text-xl mb-2">Formula</h3>
            <div className="bg-secondary p-4 rounded shadow-sm mb-4 py-10">
              <MathJax>{`\\(${rule.formula}\\)`}</MathJax>
            </div>

            <h3 className="text-primary font-semibold text-xl mb-2">Example</h3>
            <div className="bg-secondary p-4 rounded shadow-sm mb-4 border-l-4 border-green-500 py-10">
              <MathJax>{`\\(${rule.example}\\)`}</MathJax>
            </div>

            <h3 className="text-primary font-semibold text-xl mb-2">When to Use</h3>
            <p className="mb-4">{rule.whenToUse}</p>

            <h3 className="text-primary font-semibold text-xl mb-2">Common Mistakes</h3>
            <ul className="list-disc pl-6 space-y-1">
              {rule.mistakes.map((mistake, i) => (
                <li key={i}>{mistake}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="mt-auto">
        <Bottomcontent />
      </div>
    </div>
  );
}

export default Constant;

