import React from 'react';
import { MathJax } from "better-react-mathjax";
import StepByStep from '../Solver/StepByStep';

const AnswerOnly = ({ 
  userAnswer, 
  setUserAnswer, 
  feedback, 
  setFeedback,
  generatedResult, 
  formatForMathJax,
  questionStep,
  handleNextQuestion 
}) => {
  const questions = [
    {
      text: "What is the derivative of the inner function",
      equation: generatedResult.inner,
      correctAnswer: generatedResult.innerDerivative,
      CorrectResponse: "Correct!, the inner function involves an exponent, x^2 which is nx^(n-1)", 
      IncorrectResponse: "Incorrect!, the inner function does involves an exponent which rule can be used?"
    },
    {
      text: "What is the derivative of the outer function",
      equation: generatedResult.outer,
      correctAnswer: generatedResult.outerDerivative,
      CorrectResponse: "Correct!, the equation involves a trigonometric function, which is sin(u) = cos(u)", 
      IncorrectResponse: "Incorrect!, the equation involves a trigonometric function which identity can be used?"      
    },
    {
      text: "What is the full derivative of",
      equation: generatedResult.equation,
      correctAnswer: generatedResult.derivative,
      CorrectResponse: "Correct!, The equation involves an inner and outer function, which is the chain rule f(x) = g(h(x)) = g'(h(x))*h'(x)", 
      IncorrectResponse: "Incorrect!, The equation involves an inner and outer function, which rule can be used?"      
    }
  ];

  const currentQuestion = questions[questionStep];

  const handleCheckAnswer = () => {
    if (userAnswer.replace(/\s/g, '') === currentQuestion.correctAnswer.replace(/\s/g, '')) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  return (
<div>
      <div className="card bg-light p-6 shadow-lg rounded-lg mb-6">
        <h3 className="text-primary text-lg mb-4 font-bold">Generated Question</h3>
        <div className="bg-secondary py-2 rounded-lg text-dark flex-col items-center justify-center flex mx-auto">
          <div className="flex mt-2">
            <p>{currentQuestion.text}: </p>
          </div>
          <div>
            <MathJax>{`$$ ${formatForMathJax(currentQuestion.equation)} $$`}</MathJax>
          </div>
        </div>
        <h3 className="text-primary text-lg mb-4 font-bold">Your Answer</h3>
        <input
          type="text"
          className="w-full p-2 rounded mb-4 bg-secondary text-dark"
          placeholder="Enter derivative"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <div className="flex flex-row text-dark">
          <button
            className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md"
            onClick={handleCheckAnswer}
          >
            Check Answer
          </button>
          {feedback === 'correct' && questionStep < 2 && (
            
          <button
            className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md mx-4"
            onClick={handleNextQuestion}
            disabled={questionStep === 2}
          >
            Next Question
          </button>
          )}
        </div>
        {feedback && (
          <p className={`mt-2 font-semibold ${feedback === "correct" ? "text-green-600" : "text-red-600"}`}>
            {feedback === "correct" ? "✅" + currentQuestion.CorrectResponse : "❌" + currentQuestion.IncorrectResponse}
          </p> 
        )}
      </div>
      <div>
        {feedback === 'correct' && questionStep === 2 && (
          <div>
            <h className = "text-dark text-lg mb-4 font-bold items-center flex justify-center">Equation is fully solved, generate a new equation to be solved </h>
            <StepByStep />
          </div>
            )}      
      </div>
</div>
  );
};

export default AnswerOnly;
