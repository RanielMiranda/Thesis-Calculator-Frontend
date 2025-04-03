import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Topbar from "../../Components/Topbar";
import Navbar from '../../Components/Navbar';

// Reusable ContentCard Component with MathJax rules
function ContentCard({ title, formula }) {
  return (
    <div className="flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center">
      <div className="flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
        <MathJax>{formula}</MathJax>
      </div>
      <div className="text-ct2 text-sm font-bold">
        <h className="text-ct1 text-sm font-bold">{title}</h>            
      </div>
    </div>
  );
}

// Main LearnPage Component
function LearnPage() {
  // Array of topics with corresponding MathJax formulas
  const topics = [
    { title: "Sum and Difference Rule", formula: "\\(\\frac{d}{dx} [f(x) \\pm g(x)] = f'(x) \\pm g'(x)\\)" },
    { title: "Quotient Rule", formula: "\\(\\frac{d}{dx} \\left[ \\frac{f(x)}{g(x)} \\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}\\)" },
    { title: "Product Rule", formula: "\\(\\frac{d}{dx} [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)\\)" },
    { title: "Trigonometric (sin)", formula: "\\(\\frac{d}{dx} [\\sin(x)] = \\cos(x)\\)" },
    { title: "Trigonometric (cos)", formula: "\\(\\frac{d}{dx} [\\cos(x)] = -\\sin(x)\\)" },
    { title: "Trigonometric (tan)", formula: "\\(\\frac{d}{dx} [\\tan(x)] = \\sec^2(x)\\)" },
    { title: "Trigonometric (cot)", formula: "\\(\\frac{d}{dx} [\\cot(x)] = -\\csc^2(x)\\)" },
    { title: "Trigonometric (sec)", formula: "\\(\\frac{d}{dx} [\\sec(x)] = \\sec(x)\\tan(x)\\)" },
    { title: "Trigonometric (csc)", formula: "\\(\\frac{d}{dx} [\\csc(x)] = -\\csc(x)\\cot(x)\\)" },
    { title: "Inverse Trigonometric (arcsin)", formula: "\\(\\frac{d}{dx} [\\arcsin(x)] = \\frac{1}{\\sqrt{1 - x^2}}\\)" },
    { title: "Inverse Trigonometric (arccos)", formula: "\\(\\frac{d}{dx} [\\arccos(x)] = -\\frac{1}{\\sqrt{1 - x^2}}\\)" },
    { title: "Inverse Trigonometric (arctan)", formula: "\\(\\frac{d}{dx} [\\arctan(x)] = \\frac{1}{1 + x^2}\\)" },
    { title: "Inverse Trigonometric (arccot)", formula: "\\(\\frac{d}{dx} [arccot(x)] = -\\frac{1}{1 + x^2}\\)" },
    { title: "Inverse Trigonometric (arcsec)", formula: "\\(\\frac{d}{dx} [arcsec(x)] = \\frac{1}{|x|\\sqrt{x^2 - 1}}\\)" },
    { title: "Inverse Trigonometric (arccsc)", formula: "\\(\\frac{d}{dx} [arccsc(x)] = -\\frac{1}{|x|\\sqrt{x^2 - 1}}\\)" },
    { title: "Special functions Logarithm", formula: "\\(\\frac{d}{dx} [\\ln(x)] = \\frac{1}{x}\\)" },
  ];

  return (
    <MathJaxContext>
      <div className="bg-bt3 min-h-screen w-full flex flex-col">
        <Topbar bg="bg-bt3" ct2="text-ct1" />

        <div className="flex flex-col w-2/3 mx-auto">
          <div className="flex flex-row items-end justify-end flex-grow space-x-4">
            <Navbar bt3="bg-ct1" bt2="hover:bg-bt2" ct2="hover:text-ct2" tx1="text-ct2" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row w-4/6 mx-auto space-x-4 mt-4">
          {/* Links */}
          <div className="flex flex-col w-2/6 mx-auto bg-bt2 rounded-2xl justify-center items-center">
            <h className="text-ct2 text-md font-bold">Links</h>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-4/6 mx-auto">
            {/* Search Bar */}
            <div className="flex flex-row w-full mx-auto justify-center items-center">
              <input
                type="text"
                className="flex w-full rounded-l-lg py-2 px-4 text-ct1 h-full"
                placeholder="Search..."
              />
              <button className="bg-bt2 w-full text-ct2 font-bold text-md rounded-r-lg h-full">
                Search
              </button>
            </div>

            {/* Reusable Content Section */}
            <div className="flex flex-col w-full mx-auto bg-ct1 rounded-2xl justify-center items-center mt-4 pb-4">
              {Array.from({ length: Math.ceil(topics.length / 2) }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-row w-full mx-auto rounded-2xl justify-center items-center mt-4 space-x-4 pr-4 pl-4"
                >
                  <ContentCard
                    title={topics[rowIndex * 2]?.title || ""}
                    formula={topics[rowIndex * 2]?.formula || ""}
                  />
                  <ContentCard
                    title={topics[rowIndex * 2 + 1]?.title || ""}
                    formula={topics[rowIndex * 2 + 1]?.formula || ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
}

export default LearnPage;