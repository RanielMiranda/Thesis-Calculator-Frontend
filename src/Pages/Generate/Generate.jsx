import React, { useState } from 'react';
import { MathJaxContext } from "better-react-mathjax";
import Navbar from '../../Components/Navbar';
import Bottomcontent from '../../Components/Bottomcontent';
import GenerationSettings from './GenerationSettings';
import GeneratedEquation from './GeneratedEquation';
import AnswerOnly from './AnswerOnly';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

const Generate = () => {
  const [input, setInput] = useState("");
  const [selectedMode, setSelectedMode] = useState("Multiple Choice");
  const [selectedRules, setSelectedRules] = useState([]);
  const [generatedResult] = useState({ 
    equation: "sin(x^2)", 
    derivative: "2x*cos(x^2)",
    inner: "x^2",
    innerDerivative: "2x",
    outer: "sin(x^2)",
    outerDerivative: "cos(x^2)"
  });
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [questionStep, setQuestionStep] = useState(0); // 0: inner, 1: outer, 2: full

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
    setFeedback(null);
    setUserAnswer("");
    setQuestionStep(0);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleRuleToggle = (rule) => {
    setSelectedRules(prev =>
      prev.includes(rule)
        ? prev.filter(r => r !== rule)
        : [...prev, rule]
    );
  };

  const clearInput = () => {
    setInput("");
  };

  const insertSymbol = (symbol) => {
    const inputField = document.getElementById('equation-input');
    const start = inputField.selectionStart;
    const end = inputField.selectionEnd;
    const newValue = input.substring(0, start) + symbol + input.substring(end);
    setInput(newValue);
    inputField.focus();
    inputField.setSelectionRange(start + symbol.length, start + symbol.length);
  };

  const handleGenerate = async () => {
    // Keeping original backend call structure but not modifying it
    setFeedback(null);
    setUserAnswer("");
    setQuestionStep(0);
  };

  const handleNextQuestion = () => {
    if (questionStep < 2) {
      setQuestionStep(prev => prev + 1);
      setFeedback(null);
      setUserAnswer("");
    }
    else {
      alert("No more next questions.");
    }
  };

  const formatForMathJax = (text) => {
    return text
      .replace(/\\sqrt\(([^)]+)\)/g, "\\sqrt{$1}")
      .replace(/\\sqrt([a-zA-Z0-9]+)/g, "\\sqrt{$1}")
      .replace(/([^\s]+)\/([^\s]+)/g, "\\frac{$1}{$2}")
      .replace(/\*\*([a-zA-Z0-9]+)/g, "^$1")
      .replace(/(\w+)\^(\d+)/g, "$1^{$2}");
  };

  return (
    <MathJaxContext>
      <div className="bg-bgcolor min-h-full w-full flex flex-col">
        <Navbar />
        <h1 className="font-bold text-2xl text-dark text-center mt-10 mb-4">Practice Problem Generator</h1>

        <div className="flex flex-col md:flex-row gap-8 p-6 w-2/3 justify-center mx-auto">
          <div className="w-full md:w-1/3">
            <GenerationSettings
              selectedMode={selectedMode}
              handleModeChange={handleModeChange}
              selectedRules={selectedRules}
              handleRuleToggle={handleRuleToggle}
              input={input}
              clearInput={clearInput}
              insertSymbol={insertSymbol}
              handleInputChange={handleInputChange}
              handleGenerate={handleGenerate}
            />
          </div>

          <div className="w-full md:w-2/3">
            <GeneratedEquation 
              generatedResult={generatedResult}
              formatForMathJax={formatForMathJax}
            />
            
            {selectedMode === "answer" && (
              <AnswerOnly
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                feedback={feedback}
                setFeedback={setFeedback}
                generatedResult={generatedResult}
                formatForMathJax={formatForMathJax}
                questionStep={questionStep}
                handleNextQuestion={handleNextQuestion}
              />
            )}

            {selectedMode !== "answer" && (
              <MultipleChoiceQuestion
                generatedResult={generatedResult}
                formatForMathJax={formatForMathJax}
                questionStep={questionStep}
                setFeedback={setFeedback}
                handleNextQuestion={handleNextQuestion}
                feedback={feedback}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
              />
            )}
          </div>
        </div>

        <div className="mt-28">
          <Bottomcontent />
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Generate;