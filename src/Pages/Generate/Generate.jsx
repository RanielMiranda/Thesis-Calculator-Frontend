import React, { useState } from 'react';
import { MathJaxContext } from "better-react-mathjax";
import Navbar from '../../Components/Navbar';
import Bottomcontent from '../../Components/Bottomcontent';
import GenerationSettings from './GenerationSettings';
import GeneratedEquation from './GeneratedEquation';
import AnswerInput from './AnswerInput';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

const Generate = () => {
  const [input, setInput] = useState("");
  const [selectedMode, setSelectedMode] = useState("Multiple Choice");
  const [selectedRules, setSelectedRules] = useState([]);
  const [generatedResult, setGeneratedResult] = useState({ equation: "sin(x)", derivative: "cos(x)" });
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
    setFeedback(null);
    setUserAnswer("");
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
    try {
      const payload = input.trim() === ""
        ? { rules: selectedRules }
        : { expression: input };

      alert(`Sending data: ${JSON.stringify(payload)}`);

      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to fetch from backend");

      const data = await response.json();
      setGeneratedResult({ equation: data.equation, derivative: data.derivative });
      setFeedback(null);
      setUserAnswer("");
    } catch (error) {
      console.error("Error generating equation:", error);
      alert("Failed to generate equation. Check console for details.");
    }
  };

  const handleCheckAnswer = () => {
    if (userAnswer.replace(/\s/g, '') === generatedResult.derivative.replace(/\s/g, '')) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
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
              <AnswerInput
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                handleCheckAnswer={handleCheckAnswer}
                feedback={feedback}
              />
            )}

            {selectedMode !== "answer" && (
              <MultipleChoiceQuestion
                generatedResult={generatedResult}
                formatForMathJax={formatForMathJax}
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
