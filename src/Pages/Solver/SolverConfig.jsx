import React, { useState } from 'react';

const SolverConfig = () => {
  const [derivativeType, setDerivativeType] = useState('ordinary');
  const [variables, setVariables] = useState(['x']); // Default to 'x'

  const handleDerivativeTypeChange = (e) => {
    setDerivativeType(e.target.value);
  };

  const handleVariableChange = (e) => {
    const value = e.target.value;
    setVariables((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  return (
    <div className="card p-6 bg-light shadow-lg rounded-lg mt-6 text-dark">
      <h3 className="text-primary mb-4 font-bold text-lg">Solver Configuration</h3>

      {/* Data Structure Used */}
      <div className="form-group mb-4">
        <div>
          <label className="font-semibold">Select Data Structure Type: </label>
        </div>
        <select name="option" className="mt-2 px-2 py-1 rounded bg-secondary">
          <option value="AST">AST</option>          
          <option value="DAG">DAG</option>
          <option value="NLL">NLL</option>
        </select>
      </div>

      {/* Derivative Type */}
      <div className="form-group mb-4">
        <label className="font-semibold">Derivative Type:</label>
        <div className="radio-group flex flex-col">
          <label>
            <input
              type="radio"
              name="derivative-type"
              value="ordinary"
              checked={derivativeType === 'ordinary'}
              onChange={handleDerivativeTypeChange}
            />
            Ordinary (d/dx)
          </label>
          <label>
            <input
              type="radio"
              name="derivative-type"
              value="partial"
              checked={derivativeType === 'partial'}
              onChange={handleDerivativeTypeChange}
            />
            Partial (∂/∂x)
          </label>
        </div>
      </div>

      {/* Variables and Options */}
      <div className="form-group mb-4">
        <label className="font-semibold">Variables: </label>
        <div className="checkbox-group flex flex-col">
          {['x', 'y', 'z'].map((varName) => (
            <label key={varName}>
              <input
                type="checkbox"
                name="variable"
                value={varName}
                checked={variables.includes(varName)}
                onChange={handleVariableChange}
              />
              {varName}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolverConfig;