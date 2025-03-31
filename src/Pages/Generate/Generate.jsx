import React, { useState } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Topbar from "../../Components/Topbar";
import Navbar from '../../Components/Navbar';

const Generate = () => {
    const [input, setInput] = useState("");
    const [selectedMode, setSelectedMode] = useState("manual");
    const [selectedRules, setSelectedRules] = useState([]); // Track selected rules
    const [generatedResult, setGeneratedResult] = useState({ equation: "", derivative: "" }); // Store backend response

    const handleModeChange = (e) => {
        setSelectedMode(e.target.value);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const formatForMathJax = (text) => {
        return text
            .replace(/\\sqrt\(([^)]+)\)/g, "\\sqrt{$1}")
            .replace(/\\sqrt([a-zA-Z0-9]+)/g, "\\sqrt{$1}")
            .replace(/([^\s]+)\/([^\s]+)/g, "\\frac{$1}{$2}")
            .replace(/(\w+)\^(\d+)/g, "$1^{$2}");
    };

    const handleGenerate = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ rules: selectedRules }), // Send selected rules
            });

            if (!response.ok) {
                throw new Error("Failed to fetch from backend");
            }

            const data = await response.json();
            setGeneratedResult({ equation: data.equation, derivative: data.derivative });
        } catch (error) {
            console.error("Error generating equation:", error);
            alert("Failed to generate equation. Check console for details.");
        }
    };

    return (
        <MathJaxContext>
            <div className="bg-bt2 min-h-screen w-full flex flex-col">
                <Topbar bg="bg-bt2" ct2="text-ct1" />

                <div className="flex flex-col w-2/3 mx-auto">
                    <div className="flex flex-row items-end justify-end flex-grow">
                        <Navbar bt3="bg-bt3 " bt2="hover:bg-ct1 " ct2="hover:text-ct2 " tx1="text-ct1"/>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-2/3 mx-auto mt-4 bg-ct1 rounded-xl pt-4 pl-4 pr-4 pb-4">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-full mx-auto ">
                            {/* Top Content */}
                            <div className="flex flex-row items-start justify-center space-x-4 flex-grow ">
                                {/* Input field */}
                                <div className="flex flex-col w-1/2">
                                    <h1 className="text-ct2 font-bold text-sm">Input Custom Equation</h1>
                                    <div className="flex flex-row items-center justify-center flex-grow">
                                        <input
                                            type="text"
                                            className="flex w-full rounded-md py-2 px-4 text-ct1 h-full"
                                            placeholder="Enter a function"
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex flex-row pt-2 space-x-2">
                                        <button className="bg-bt3 rounded-2xl flex items-center justify-center h-8 px-3">
                                            <h1>/</h1>
                                        </button>
                                        <button className="bg-bt3 rounded-2xl flex items-center justify-center h-8 px-3">
                                            <h1>√</h1>
                                        </button>
                                        <button className="bg-bt3 rounded-2xl flex items-center justify-center h-8 px-3">
                                            <h1>e</h1>
                                        </button>
                                        <button className="bg-bt3 rounded-2xl flex items-center justify-center h-8 px-3">
                                            <h1>log</h1>
                                        </button>
                                        <button className="bg-bt3 rounded-2xl flex items-center justify-center h-8 px-3">
                                            <h1>ln</h1>
                                        </button>
                                    </div>

                                    {/* Display field */}
                                    <div className="mt-4">
                                        <h1 className="text-ct2 font-bold text-sm">This will be displayed as:</h1>
                                        <div className="bg-ct2 rounded-2xl px-4 py-2">
                                            <MathJax>{`$$\\frac{d}{dx} [ ${formatForMathJax(input)} ]$$`}</MathJax>
                                        </div>
                                    </div>

                                    <div className="flex flex-row pt-2 space-x-2 mt-2 justify-center">
                                        <button
                                            onClick={handleGenerate}
                                            className="bg-bt2 hover:bg-bt3 rounded-2xl flex items-center justify-center h-10 p-3 text-ct2 hover:text-ct1 text-md font-bold px-10"
                                        >
                                            Generate
                                        </button>
                                        <button className="bg-bt2 hover:bg-bt3 rounded-2xl flex items-center justify-center h-10 p-3 text-ct2 hover:text-ct1 text-md font-bold px-12">
                                            Accept
                                        </button>
                                    </div>
                                </div>

                                {/* Setting field */}
                                <div className="w-1/2 bg-bt3 rounded-xl p-4 flex flex-col">
                                    <Settings
                                        selectedMode={selectedMode}
                                        handleModeChange={handleModeChange}
                                        selectedRules={selectedRules}
                                        setSelectedRules={setSelectedRules}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Content (Generated Result) */}
                    <div className="bg-bt3 rounded-2xl mt-4 w-full p-4 flex flex-col">
                        <h1 className="font-bold text-ct1 text-sm">Generated Question</h1>
                        <div className="bg-ct2 rounded-2xl px-4 py-2">
                            <MathJax>{`$$\\frac{d}{dx} [ ${formatForMathJax(generatedResult.equation)} ]$$`}</MathJax>
                        </div>
                        {generatedResult.derivative && (
                            <div className="mt-2">
                                <h1 className="font-bold text-ct1 text-sm">Derivative</h1>
                                <div className="bg-ct2 rounded-2xl px-4 py-2">
                                    <MathJax>{`$$${generatedResult.derivative}$$`}</MathJax>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MathJaxContext>
    );
};

const Rules = ({ selectedRules, setSelectedRules }) => {
    const rules = [
        "Sum And Difference Rule",
        "Product Rule",
        "Quotient Rule",
        "Chain Rule",
        "Trigonometric Functions",
        "Inverse Trigonometric Functions"
    ];

    const handleRuleChange = (rule) => {
        if (selectedRules.includes(rule)) {
            setSelectedRules(selectedRules.filter((r) => r !== rule));
        } else {
            setSelectedRules([...selectedRules, rule]);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-2">
            {rules.map((rule, index) => (
                <div key={index} className="flex items-center">
                    <input
                        type="checkbox"
                        id={`rule-${index}`}
                        className="mr-2"
                        checked={selectedRules.includes(rule)}
                        onChange={() => handleRuleChange(rule)}
                    />
                    <label htmlFor={`rule-${index}`} className="text-ct1">{rule}</label>
                </div>
            ))}
        </div>
    );
};

const Settings = ({ selectedMode, handleModeChange, selectedRules, setSelectedRules }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-ct1 text-sm">Generation Rule Configurations</h1>
            <h1 className="text-ct1 text-xsm">Select or deselect the rules you don't want</h1>

            <div className="flex flex-row items-center justify-center bg-ct2 rounded-2xl p-4">
                <Rules selectedRules={selectedRules} setSelectedRules={setSelectedRules} />
            </div>

            <h1>select mode:</h1>
            <div className="flex flex-row items-center justify-center bg-ct2 rounded-2xl p-4 w-full space-x-4">
                <div>
                    <input
                        type="radio"
                        id="MCM"
                        name="mode"
                        value="manual"
                        checked={selectedMode === "manual"}
                        onChange={handleModeChange}
                    />
                    <label htmlFor="MCM" className="ml-2 text-ct1">Multiple Choice Mode</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="AOM"
                        name="mode"
                        value="answerOnly"
                        checked={selectedMode === "answerOnly"}
                        onChange={handleModeChange}
                    />
                    <label htmlFor="AOM" className="ml-2 text-ct1">Answer Only Mode</label>
                </div>
            </div>
        </div>
    );
};

export default Generate;