import React, { useState, useRef } from 'react';
import { MathJax } from "better-react-mathjax";

const StepByStep = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const stepRefs = useRef({});

  const handleHover = (rule, event) => {
    setHoveredStep(rule);
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.top + window.scrollY - 5, // Position above the element
      left: rect.left + window.scrollX + (rect.width / 2) // Center horizontally
    });
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  const stepExplanation = {
    chainRule: `Chain Rule: sin(u(x)) * u'(x) = cos(u(x)) * u'(x)`,
    powerRule: `Power Rule: f'(x) = n \\cdot x^{n-1} `,
    sineRule: ` Sine ` + ` Identity: Sin(u) = Cos(u)`
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
          onMouseEnter={(e) => handleHover('chainRule', e)}
          onMouseLeave={handleMouseLeave}
          ref={(el) => (stepRefs.current['chainRule'] = el)}
        >
          <MathJax>{`$$ \\frac{d}{dx} sin(x^2) $$`}</MathJax>
        </div>

        {/* Step 2: Split into cos(x) and d/dx x^2 */}
        <div className="flex gap-4">
          <div className="step text-dark text-lg font-medium"> = </div>
          <div
            className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'chainRule' ? 'text-primary' : ''} ${hoveredStep === 'sineRule' ? 'text-primary' : ''}`}
            onMouseEnter={(e) => handleHover('sineRule', e)}
            onMouseLeave={handleMouseLeave}
            ref={(el) => (stepRefs.current['sineRule'] = el)}
          >
            <MathJax>{`$$ \\cos(x^2) $$`}</MathJax>
          </div>
          <div className = "text-dark">*</div>
          <div
            className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'chainRule' ? 'text-primary' : ''} ${hoveredStep === 'powerRule' ? 'text-primary' : ''}`}
            onMouseEnter={(e) => handleHover('powerRule', e)}
            onMouseLeave={handleMouseLeave}
            ref={(el) => (stepRefs.current['powerRule'] = el)}
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
          <div className = "text-dark">*</div>
          <div
            className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${hoveredStep === 'powerRule' ? 'text-primary' : ''}`}
            onMouseEnter={(e) => handleHover('powerRule', e)}
            onMouseLeave={handleMouseLeave}
            ref={(el) => (stepRefs.current['powerRule2'] = el)}
          >
            <MathJax>{`$$ 2x $$`}</MathJax>
          </div>
        </div>
        <div className={`step text-dark text-lg font-medium`}>
          <MathJax>{`$$ 2x *\\cos(x^2) $$`}</MathJax>
        </div>

        <div>
    
        </div>
      </div>

      {/* Explanation Popup on Hover */}
      {hoveredStep && (
        <div
          className="absolute p-8 rounded-lg bg-bgcolor text-dark shadow-lg z-20 max-w-lg"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            transform: 'translateX(-50%) translateY(-100%)', // Center horizontally and position above the element
          }}
        >
          <p className="text-base md:text-lg whitespace-normal">
            <MathJax>{`$$ ${stepExplanation[hoveredStep]} $$`}</MathJax>
          </p>
        </div>
      )}
    </div>
  );
};

export default StepByStep;
