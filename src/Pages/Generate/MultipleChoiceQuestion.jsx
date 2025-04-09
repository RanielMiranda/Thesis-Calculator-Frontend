import React, { useState } from 'react';
import { MathJax } from "better-react-mathjax";

const MultipleChoiceQuestion = ({ generatedResult, formatForMathJax, questionStep, setFeedback, handleNextQuestion, feedback }) => {
  const questions = [
    {
      text: "What is the derivative of the inner function",
      equation: generatedResult.inner,
      correctAnswer: generatedResult.innerDerivative,
      options: ["2x", "x", "2", "x^2"]
    },
    {
      text: "What is the derivative of the outer function",
      equation: generatedResult.outer,
      correctAnswer: generatedResult.outerDerivative,
      options: ["cos(x^2)", "-sin(x^2)", "sin(x^2)", "-cos(x^2)"]
    },
    {
      text: "What is the full derivative of",
      equation: generatedResult.equation,
      correctAnswer: generatedResult.derivative,
      options: ["2x*cos(x^2)", "2x*sin(x^2)", "cos(x^2)", "x^2*cos(x^2)"]
    }
  ];

  const currentQuestion = questions[questionStep];

  const handleClick = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="card bg-light p-6 shadow-lg rounded-lg">
      <h3 className="text-primary text-lg mb-4 font-bold">Generated Question</h3>
      <div className="bg-secondary py-2 rounded-lg text-dark flex-col items-center justify-center flex mx-auto">
        <div className="flex mt-2">
          <p>{currentQuestion.text}: </p>
        </div>
        <div>
          <MathJax>{`$$ ${formatForMathJax(currentQuestion.equation)} $$`}</MathJax>
        </div>
      </div>
      <div className="flex flex-row gap-2 mt-4 text-dark">
        {currentQuestion.options.map((option, index) => (
          <button 
            key={index}
            onClick={() => handleClick(option)} 
            className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md w-1/4"
          >
            <MathJax>{`$$ ${formatForMathJax(option)} $$`}</MathJax>
          </button>
        ))}
      </div>
      <div>
      {feedback && (
        <p className={`mt-2 font-semibold ${feedback === "correct" ? "text-green-600" : "text-red-600"}`}>
          {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect. Try again."}
        </p>
      )}
      </div>
      
      <button 
        className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md mt-4 text-dark"
        onClick={handleNextQuestion}
        disabled={questionStep === 2}
      >
        Next Question
      </button>
    </div>
  );
};

export default MultipleChoiceQuestion;