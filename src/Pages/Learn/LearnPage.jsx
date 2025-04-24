import React, { useState } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import Navbar from '../../Components/Navbar';
import Bottomcontent from '../../Components/Bottomcontent';
import SearchBar from './SearchBar';
import RulesGrid from './RulesGrid';
import NoResults from './NoResults';

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

  const clearSearch = () => {
    setSearchTerm('');
    setActiveSearchTerm('');
    setIsSearching(false);
  };

  return (
    <MathJaxContext>
      <div className="bg-bgcolor min-h-screen w-full flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center text-dark mb-10">Learn Differentiation Rules</h2>
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeSearchTerm={activeSearchTerm}
            setActiveSearchTerm={setActiveSearchTerm}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
          />
          {filteredRules.length > 0 ? (
            <RulesGrid filteredRules={filteredRules} />
          ) : (
            <NoResults clearSearch={clearSearch} />
          )}
        </main>
        <div className="fixed bottom-0 left-0 right-0">
        <Bottomcontent />
      </div>
      </div>
    </MathJaxContext>
  );
}

export default LearnPage;