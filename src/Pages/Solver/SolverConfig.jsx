// SolverConfig.jsx
import React from 'react';

const SolverConfig = () => {
  return (
    <div className="card p-6 bg-light shadow-lg rounded-lg mt-6 text-dark">
      <h3 className="text-primary mb-4 font-bold text-lg">Solver Configuration</h3>

      {/* Data Structure Used */}
      <div className="form-group mb-4">
        <div>
          <label className="font-semibold">Select Data Structure Type: </label>
        </div>
        <select name="option" className="mt-2 px-2 py-1 rounded bg-secondary">
          <option value="">Select an option</option>
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
            <input type="radio" name="derivative-type" value="ordinary" checked />
            Ordinary (d/dx)
          </label>
          <label>
            <input type="radio" name="derivative-type" value="partial" />
            Partial (∂/∂x)
          </label>
          <label>
            <input type="radio" name="derivative-type" value="higher" />
            Higher Order
          </label>
        </div>
      </div>

      {/* Variables and Options */}
      <div className="form-group mb-4">
        <label className="font-semibold">Variables: </label>
        <div className="checkbox-group flex flex-col">
          <label>
            <input type="checkbox" name="variable" value="x" checked />
            x
          </label>
          <label>
            <input type="checkbox" name="variable" value="y" />
            y
          </label>
          <label>
            <input type="checkbox" name="variable" value="z" />
            z
          </label>
        </div>
      </div>

    </div>
  );
};

export default SolverConfig;

