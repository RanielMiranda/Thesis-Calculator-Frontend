import React from 'react';
import { MathJax } from 'better-react-mathjax';

const GenerationSettings = ({ 
  selectedMode, 
  handleModeChange, 
  selectedRules, 
  handleRuleToggle, 
  input, 
  clearInput,
  insertSymbol,
  handleInputChange, 
  handleGenerate 
}) => {
  const rulesList = [
    "Power Rule", "Product Rule", "Quotient Rule",
    "Chain Rule", "Sum Rule", "Difference Rule",
    "Trig Rule", "Inverse Trig Rule"
  ];

  return (
    <div className="card bg-light p-6 shadow-lg rounded-lg">
      <h3 className="text-primary text-lg mb-4 font-bold">Generation Settings</h3>

      {/* Mode Selection */}
      <div className="mb-4">
        <label className="font-semibold text-dark">Mode</label>
        <select
          className="w-full mt-2 p-2 rounded bg-secondary text-dark"
          value={selectedMode}
          onChange={handleModeChange}
        >
          <option value="MCM">Multiple Choice</option>
          <option value="answer">Answer Only</option>
        </select>
      </div>

      {/* Rule Checkboxes */}
      <div className="mb-4 text-dark">
        <label className="font-semibold">Select Rules</label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {rulesList.map(rule => (
            <label key={rule} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedRules.includes(rule)}
                onChange={() => handleRuleToggle(rule)}
              />
              {rule}
            </label>
          ))}
        </div>
      </div>

      {/* Manual Input */}
      <div className="relative">
        <input
          type="text"
          id="equation-input"
          className="input-field w-full px-4 py-2 rounded-md border-hover:border focus:border-primary pr-24 bg-secondary text-dark"
          placeholder="e.g., sin(x^2) + e^(3y)"
          value={input}
          onChange={handleInputChange}
        />
        <div className="absolute right-2 transform -translate-y-8 flex">
          <button
            onClick={clearInput}
            className="btn text-red-500 hover:text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a2 2 0 00-2 2h8a2 2 0 00-2-2m-4 0V3m-3 4h10"
              />
            </svg>
          </button>
        </div>
        
        {/* Math Symbol Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { symbol: 'π', className: 'bg-primary hover:bg-primarylight text-dark'},
            { symbol: '√(', className: 'bg-primary hover:bg-primarylight text-dark'},
            { symbol: 'e', className: 'bg-primary hover:bg-primarylight text-dark'},
            { symbol: '/', className: 'bg-primary hover:bg-primarylight text-dark', special: true },
            { symbol: '^2', className: 'bg-primary hover:bg-primarylight text-dark', special: true }
          ].map((btn, index) => (
            <button
              key={index}
              onClick={() => insertSymbol(btn.symbol)}
              className={`btn ${btn.className} px-3 py-1 rounded-md h-10 ${btn.special ? 'flex items-center' : ''}`}
            >
              <MathJax inline>
                {btn.special 
                  ? btn.symbol === '/' 
                    ? <MathJax inline style={{fontSize: '0.7em'}}>{'$$ \\frac{[\\,]}{[\\,]} $$'}</MathJax> 
                    : '$$ x^{2} $$' 
                  : btn.symbol}
              </MathJax>
            </button>
          ))}
        </div>
      </div>

      {/* Generate and Accept Button */}
      <div className="flex flex-row mx-auto text-dark">
        <button
          className="btn bg-primary hover:bg-primarylight w-full mt-4 py-2 rounded-md"
          onClick={handleGenerate}
        >
          Generate
        </button>
        <button
          className="btn bg-primary hover:bg-primarylight w-full mt-4 py-2 rounded-md mx-4"
          // onClick={handleAccept} - Uncomment and implement if needed
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default GenerationSettings;

