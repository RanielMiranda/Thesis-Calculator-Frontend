// StepByStep.jsx
import React from 'react';

const StepByStep = () => {
  return (
    <div className="card p-6 bg-light shadow-lg rounded-lg mt-6">
      <h3 className="text-primary mb-4 font-bold text-lg">Step-by-Step Explanation</h3>
      <div className="steps-container">
        <div className="step text-dark">
          Enter an equation and click "Solve" to see the step-by-step solution.
        </div>
      </div>
    </div>
  );
};

export default StepByStep;