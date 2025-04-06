import React from 'react';

const AnswerInput = ({ userAnswer, setUserAnswer, handleCheckAnswer, feedback }) => {
  return (
    <div className="card bg-light p-6 shadow-lg rounded-lg mb-6">
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
        <button
          className="btn bg-primary hover:bg-primarylight px-4 py-2 rounded-md mx-4"
          // onClick={handleNextQuestion} - Uncomment and implement if needed
        >
          Next Question
        </button>
      </div>
      {feedback && (
        <p className={`mt-2 font-semibold ${feedback === "correct" ? "text-green-600" : "text-red-600"}`}>
          {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect. Try again."}
        </p>
      )}
    </div>
  );
};

export default AnswerInput;