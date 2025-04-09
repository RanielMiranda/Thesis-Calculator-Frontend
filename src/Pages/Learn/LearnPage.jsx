import React, { useState, useRef } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Navbar from '../../Components/Navbar';
import Bottomcontent from '../../Components/Bottomcontent';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

const rules = [
  {
    title: "Constant Rule",
    formula: "\\frac{d}{dx} c = 0",
    example: "\\frac{d}{dx} 3 = 0",
  },
  {
    title: "Sum & Difference Rule",
    formula: "\\frac{d}{dx} [f(x) \\pm g(x)] = f'(x) \\pm g'(x)",
    example: "\\frac{d}{dx} [x^2 + \\sin(x)] = 2x + \\cos(x)",
  },
  {
    title: "Power Rule",
    formula: "\\frac{d}{dx} x^n = nx^{n-1}",
    example: "\\frac{d}{dx} x^5 = 5x^4",
  },
  {
    title: "Product Rule",
    formula: "\\frac{d}{dx} [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
    example: "\\frac{d}{dx} [x^2 \\sin(x)] = 2x\\sin(x) + x^2\\cos(x)",
  },
  {
    title: "Quotient Rule",
    formula: "\\frac{d}{dx} \\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}",
    example: "\\frac{d}{dx} \\left[\\frac{x^2}{\\sin(x)}\\right] = \\frac{2x\\sin(x) - x^2\\cos(x)}{\\sin^2(x)}",
  },
  {
    title: "Chain Rule",
    formula: "\\frac{d}{dx} [f(g(x))] = f'(g(x))g'(x)",
    example: "\\frac{d}{dx} [\\sin(x^2)] = 2x\\cos(x^2)",
  },
  {
    title: "Trigonometric Identities for Sine",
    formula: "\\frac{d}{dx} (\\sin(x)) = \\cos(x)",
    example: "\\frac{d}{dx} (\\sin(x)) = \\cos(x)",
  },
  {
    title: "Trigonometric Identities for Cosine",
    formula: "\\frac{d}{dx} (\\cos(x)) = -\\sin(x)",
    example: "\\frac{d}{dx} (\\cos(x)) = -\\sin(x)",
  },
  {
    title: "Trigonometric Identities for Tangent",
    formula: "\\frac{d}{dx} (\\tan(x)) = \\sec^2(x)",
    example: "\\frac{d}{dx} (\\tan(x)) = \\sec^2(x)",
  },
  {
    title: "Trigonometric Identities for Cotangent",
    formula: "\\frac{d}{dx} (\\cot(x)) = -\\csc^2(x)",
    example: "\\frac{d}{dx} (\\cot(x)) = -\\csc^2(x)",
  },
  {
    title: "Trigonometric Identities for Secant",
    formula: "\\frac{d}{dx} (\\sec(x)) = \\sec(x)\\tan(x)",
    example: "\\frac{d}{dx} (\\sec(x)) = \\sec(x)\\tan(x)",
  },
  {
    title: "Trigonometric Identities for Cosecant",
    formula: "\\frac{d}{dx} (\\csc(x)) = -\\csc(x)\\cot(x)",
    example: "\\frac{d}{dx} (\\csc(x)) = -\\csc(x)\\cot(x)",
  },
  {
    title: "Inverse Trigonometric Identities for Arcsine",
    formula: "\\frac{d}{dx} (\\arcsin(x)) = \\frac{1}{\\sqrt{1-x^2}}",
    example: "\\frac{d}{dx} (\\arcsin(x)) = \\frac{1}{\\sqrt{1-x^2}}",
  },
  {
    title: "Inverse Trigonometric Identities for Arccosine",
    formula: "\\frac{d}{dx} (\\arccos(x)) = -\\frac{1}{\\sqrt{1-x^2}}",
    example: "\\frac{d}{dx} (\\arccos(x)) = -\\frac{1}{\\sqrt{1-x^2}}",
  },
  {
    title: "Inverse Trigonometric Identities for Arctangent",
    formula: "\\frac{d}{dx} (arctan(x)) = \\frac{1}{1+x^2}",
    example: "\\frac{d}{dx} (arctan(x)) = \\frac{1}{1+x^2}",
  },
  {
    title: "Inverse Trigonometric Identities for Arccotangent",
    formula: "\\frac{d}{dx} (arccot(x)) = -\\frac{1}{1+x^2}",
    example: "\\frac{d}{dx} (arccot(x)) = -\\frac{1}{1+x^2}",
  },
  {
    title: "Inverse Trigonometric Identities for Arcsecant",
    formula: "\\frac{d}{dx} (arcsec(x)) = \\frac{1}{|x|\\sqrt{x^2-1}}",
    example: "\\frac{d}{dx} (arcsec(x)) = \\frac{1}{|x|\\sqrt{x^2-1}}",
  },
  {
    title: "Inverse Trigonometric Identities for Arccosecant",
    formula: "\\frac{d}{dx} (arccsc(x)) = -\\frac{1}{|x|\\sqrt{x^2-1}}",
    example: "\\frac{d}{dx} (arccsc(x)) = -\\frac{1}{|x|\\sqrt{x^2-1}}",
  },
];

function LearnPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
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

  const filteredRules = rules.filter(rule => {
    if (!activeSearchTerm) return true;
    
    const title = rule.title.toLowerCase();
    const formula = rule.formula.toLowerCase();
    const example = rule.example.toLowerCase();
    const searchTermLower = activeSearchTerm.toLowerCase();

    return (
      title.includes(searchTermLower) ||
      formula.includes(searchTermLower) ||
      example.includes(searchTermLower)
    );
  });

  return (
    <MathJaxContext>
      <div className="bg-bgcolor min-h-screen w-full flex flex-col">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center text-dark mb-10">Learn Differentiation Rules</h2>

          <div className="mb-10 relative max-w-2xl mx-auto">
            <div className="relative text-dark">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for a rule..."
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-light focus:outline-none focus:ring-2 focus:ring-primary  transition-all duration-200"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-light rounded-xl shadow-md p-6 hover:-translate-y-1 transition transform"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{rule.title}</h3>

                <div className="bg-light px-4 py-3 rounded mb-4 overflow-auto">
                  <MathJax dynamic className="text-dark">{`\\(${rule.formula}\\)`}</MathJax>
                </div>

                <div className="bg-light px-4 py-3 rounded-md border-l-4 border-green-500">
                  <p className="mb-2 font-medium text-dark">Example:</p>
                  <MathJax dynamic className="text-dark">{`\\(${rule.example}\\)`}</MathJax>
                </div>
              </div>
            ))}
          </div>

          {filteredRules.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-dark">No rules found matching your search.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveSearchTerm('');
                  setIsSearching(false);
                }}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </main>

        <Bottomcontent />
      </div>
    </MathJaxContext>
  );
}

export default LearnPage;
