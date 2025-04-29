import React, { useState, useRef } from 'react';
import { MathJax } from "better-react-mathjax";

const StepByStep = ({ steps }) => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const stepRefs = useRef({});

  const handleHover = (index, event) => {
    setHoveredStep(index);
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.top + window.scrollY - 5, // Position above the element
      left: rect.left + window.scrollX + (rect.width / 2) // Center horizontally
    });
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <div className="card p-6 bg-light shadow-lg rounded-lg mt-6 mx-auto w-full items-center flex flex-col pb-40">
      <h3 className="text-primary mb-4 font-bold text-xl md:text-2xl text-center pb-10">
        Step-by-Step Explanation
      </h3>
      <div className="steps-container space-y-4">
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <div
              key={index}
              className={`step text-dark text-lg font-medium cursor-pointer transition-colors duration-300 ${
                hoveredStep === index ? 'text-primary' : ''
              }`}
              onMouseEnter={(e) => handleHover(index, e)}
              onMouseLeave={handleMouseLeave}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              <MathJax>{`$$ ${step.expression} \\rightarrow ${step.result} $$`}</MathJax>
            </div>
          ))
        ) : (
          <div className="text-dark text-lg font-medium">
            No steps available. Please solve an expression.
          </div>
        )}
      </div>

      {/* Explanation Popup on Hover */}
      {hoveredStep !== null && steps[hoveredStep] && (
        <div
          className="absolute p-8 rounded-lg bg-secondary text-dark shadow-lg z-20 max-w-lg"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            transform: 'translateX(-50%) translateY(-100%)', // Center horizontally and position above
          }}
        >
          <p className="text-base md:text-lg whitespace-normal">
            <MathJax>{`$$ ${steps[hoveredStep].rule} $$`}</MathJax>
          </p>
        </div>
      )}
    </div>
  );
};

export default StepByStep;