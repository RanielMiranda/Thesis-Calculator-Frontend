// StepByStep.jsx
import React, { useState } from 'react';
import { MathJax } from "better-react-mathjax";

const StepByStep = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleHover = (rule) => {
    setHoveredStep(rule);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  const stepExplanation = {
    chainRule: `Chain Rule: If ( f(x) = sin(u(x)) ), then\( f'(x) = cos(u(x)) cdot u'(x) )`,
    powerRule: `Power Rule: If ( f(x) = x^n ), then ( f'(x) = n \\cdot x^{n-1} )`,
    sineRule: ` Sine Identity: Sin(u) = Cos(u)`
  };

  return (
    <div className="card p-6 bg-light shadow-lg rounded-lg mt-6 mx-auto w-full items-center flex flex-col pb-40">
      <h3 className="text-primary mb-4 font-bold text-xl md:text-2xl text-center pb-10">
        Step-by-Step Explanation
      </h3>
      <div className="steps-container space-y-4">
        {/* Step 1: sin(x^2) */}
        <div
          className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'sineRule' ? 'text-primary' : ''} ${hoveredStep === 'chainRule' ? 'text-primary' : ''}`}
          onMouseEnter={() => handleHover('chainRule')}
          onMouseLeave={handleMouseLeave}
        >
          <MathJax>{`$$ \\sin(x^2) $$`}</MathJax>
        </div>

        {/* Step 2: Split into cos(x) and d/dx x^2 */}
        <div className="flex gap-4">
          <div className="step text-dark text-lg font-medium"> = </div>
          <div
            className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'chainRule' ? 'text-primary' : ''} ${hoveredStep === 'sineRule' ? 'text-primary' : ''}`}
            onMouseEnter={() => handleHover('sineRule')}
            onMouseLeave={handleMouseLeave}
          >
            <MathJax>{`$$ \\cos(x^2) $$`}</MathJax>
          </div>
          <div>*</div>
          <div
            className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'chainRule' ? 'text-primary' : ''} ${hoveredStep === 'powerRule' ? 'text-primary' : ''}`}
            onMouseEnter={() => handleHover('powerRule')}
            onMouseLeave={handleMouseLeave}
          >
            <MathJax>{`$$ \\frac{d}{dx} x^2 $$`}</MathJax>
          </div>
        </div>

        {/* Step 3: Final result */}
        <div className="flex gap-4">
          <div className="step text-dark text-lg font-medium"> = </div>
          <div className={`step text-dark text-lg font-medium`}>
            <MathJax>{`$$ \\cos(x^2) $$`}</MathJax>
          </div>
          <div>*</div>
          <div
            className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'powerRule' ? 'text-primary' : ''}`}
            onMouseEnter={() => handleHover('powerRule')}
            onMouseLeave={handleMouseLeave}
          >
            <MathJax>{`$$ 2x $$`}</MathJax>
          </div>
        </div>
        <div className={`step text-dark text-lg font-medium`}>
          <MathJax>{`$$ 2x \\cos(x^2) $$`}</MathJax>
        </div>

        <div>
    
        </div>
      </div>

      {/* Explanation on Hover */}
      {hoveredStep && (
        <div className="mt-6 p-4 rounded-lg bg-bgcolor w text-dark shadow-md">
          <p className="text-sm md:text-base">
            <MathJax>{`$$ ${stepExplanation[hoveredStep]} $$`}</MathJax>
          </p>
        </div>
      )}
    </div>
  );
};

export default StepByStep;

