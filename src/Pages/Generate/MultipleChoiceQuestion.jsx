import React, { useState } from 'react';
import { MathJax } from "better-react-mathjax";

const MultipleChoiceQuestion = ({ generatedResult, formatForMathJax }) => {
  const [feedback, setFeedback] = useState(null);

  const handleClick = (answer) => {
    if (answer === "cos(x)") {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="card bg-light p-6 shadow-lg rounded-lg">
      <h3 className="text-primary text-lg mb-4 font-bold">Generated Question</h3>
      <div className="bg-secondary py-2 rounded-lg text-dark flex-row items-center justify-center flex mx-auto">
        <div>
          <p> find the derivative of: </p>
        </div>
        <div>
          <MathJax>{`$$ ${formatForMathJax(generatedResult.derivative)} $$`}</MathJax>
        </div>
      </div>
      <div className="flex flex-row gap-2 mt-4 text-dark">
        <button onClick={() => handleClick('cos(x)')} className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md w-1/4">
          <MathJax>{`$$ ${formatForMathJax('cos(x)')} $$`}</MathJax>
        </button>
        <button onClick={() => handleClick('-cos(x)')} className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md w-1/4">
          <MathJax>{`$$ ${formatForMathJax('-cos(x)')} $$`}</MathJax>
        </button>
        <button onClick={() => handleClick('sin(x)')} className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md w-1/4">
          <MathJax>{`$$ ${formatForMathJax('sin(x)')} $$`}</MathJax>
        </button>
        <button onClick={() => handleClick('-sin(x)')} className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md w-1/4">
          <MathJax>{`$$ ${formatForMathJax('-sin(x)')} $$`}</MathJax>
        </button>
      </div>
      {feedback && (
        <p className={`mt-2 font-semibold ${feedback === "correct" ? "text-green-600" : "text-red-600"}`}>
          {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect. The equation is a Trigonometric function What rule can you use to find the derivative?"}
        </p>
      )}
      <button className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md mt-4 text-dark">
        Next Question
      </button>
    </div>
  );
};

export default MultipleChoiceQuestion;

