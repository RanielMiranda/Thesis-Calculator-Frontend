import React, { useState } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Topbar from "../../Components/Topbar";
import Navbar from '../../Components/Navbar';
import PopupContainer from '../../Components/PopupContainer';
import Bottomcontent from '../../Components/Bottomcontent.jsx';

const Solver = () => {
    const [input, setInput] = useState("");
    const [derivative, setDerivative] = useState("");
    const [steps, setSteps] = useState([]);
    const [isHovering, setIsHovering] = useState(false);

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

    const solveExpression = async () => {
        if (!input.trim()) {
            alert("Please enter a function to solve.");
            return;
        }

        try {
            const solveResponse = await fetch("http://127.0.0.1:8000/solve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ expression: input }),
            });

            if (!solveResponse.ok) throw new Error("Failed to fetch derivative");
            const solveData = await solveResponse.json();
            setDerivative(solveData.derivative);
        } catch (error) {
            console.error("Error:", error);
            alert("Error processing the expression. Please check your input.");
        }
    };

    // Example rule logic (this could be dynamic based on backend response)
    const getRule = () => {
        if (input === "sin(x)") return "Trigonometric Rule: d/dx [sin(x)] = cos(x)";
        return "Rule not specified"; // Default for other cases
    };

    return (
        <MathJaxContext>
            <div className="bg-ct1 w-full h-full">
                <Topbar bg="bg-ct1" ct2="text-ct2" />
                <div className="flex flex-col w-2/3 mx-auto">
                    <div className="flex flex-row items-end justify-end flex-grow space-x-4">
                        <Navbar bt3="bg-bt3 " bt2="hover:bg-bt2 " ct2="hover:text-ct2 " tx1="text-tx1 "/>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-2/4 mx-auto">
                    <div className="flex flex-row space-x-4 mt-10">
                        {/* Input Container */}
                        <div className="bg-bt2 rounded-2xl p-4 space-x-10 w-1/2">
                            <InputContainer 
                                handleInputChange={handleInputChange} 
                                formatForMathJax={formatForMathJax} 
                                input={input} 
                                solveExpression={solveExpression}
                            />
                        </div>
                        {/* Graph Container */}
                        <div className="bg-bt3 rounded-2xl p-4 space-x-10 w-1/2">
                            <div className="flex justify-center items-center">
                                <h1 className="text-tx1 font-bold text-md">Graph</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solution Container */}
                <div className="flex justify-center items-center mt-4 w-2/4 mx-auto">
                    <div className="bg-bt3 rounded-2xl p-4 space-x-10 w-full flex">
                        <div className="flex flex-col space-y-4 w-full">
                            <strong className="text-tx1 font-bold text-md">Solution</strong>
                            <div className="bg-ct2 rounded-2xl p-4 w-full justify-center items-center flex">
                                <MathJax>{`$$${derivative || "No solution yet"}$$`}</MathJax>
                            </div>
                            <strong className="text-tx1 font-bold text-md">Step-by-Step Process</strong>
                            <div 
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                className="bg-ct2 rounded-2xl p-4 w-full flex flex-col justify-center items-center relative"
                            >
                                <h1>Step-by-Step Solution: hover over the equation to see the rules applied</h1>
                                <MathJax>{`$$${derivative || "\\cos(x)"}$$`}</MathJax>
                                <PopupContainer 
                                    content={"Trigonometric Rule : d/dx [sin(x)] = cos(x)"}
                                    show={isHovering}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Content (Placeholder) */}
                <Bottomcontent />
            </div>
        </MathJaxContext>
    );
};

const InputContainer = ({ handleInputChange, formatForMathJax, input, solveExpression }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <strong className="text-ct2 text-md">Input function:</strong>
            </div>
            <div className="flex flex-row space-x-4">
                <input 
                    type="text" 
                    className="bg-ct2 rounded-md p-2 outline-none" 
                    placeholder="Enter a function"
                    onChange={handleInputChange} 
                    style={{ width: '400px' }}
                />
                <button 
                    className="bg-bt3 rounded-md p-2 text-tx1 font-semibold"
                    onClick={solveExpression}
                >
                    Solve
                </button>
            </div>
            <div className="flex flex-row space-x-1">
                <button className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                    <h1>/</h1>
                </button>
                <button className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                    <h1>√</h1>
                </button>
                <button className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                    <h1>e</h1>
                </button>
                <button className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                    <h1>log</h1>
                </button>
                <button className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                    <h1>ln</h1>
                </button>
                <button className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                    <h1>π</h1>
                </button>
            </div>
            <div>
                <strong className="text-ct2 text-md">Formatted Input:</strong>
            </div>    
            <div className="bg-ct2 h-20 w-full rounded-md p-4 flex items-center justify-center"> 
                <MathJax>{`$$\\frac{d}{dx} [ ${formatForMathJax(input)} ]$$`}</MathJax>
            </div>   
            <div className="flex flex-col">
                <div className="flex flex-row space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <button key={i} className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                            <h1>Option</h1>
                        </button>
                    ))}
                </div>
                <div className="flex flex-row space-x-2 mt-5">
                    {[...Array(5)].map((_, i) => (
                        <button key={i} className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                            <h1>Option</h1>
                        </button>
                    ))}
                </div>
                <div className="flex flex-row space-x-2 mt-5">
                    {[...Array(5)].map((_, i) => (
                        <button key={i} className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                            <h1>Option</h1>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solver;

<div className="mt-20 flex justify-center items-center">
<div className="flex flex-row items-center space-x-4">
    <strong><a href="/" className="text-tx1 text-sm hover:underline">About</a></strong>
    <span className="bg-tx1 h-8 w-px"></span>
    <strong><a href="/" className="text-tx1 text-sm hover:underline">Contact</a></strong>
    <span className="bg-tx1 h-8 w-px"></span>
    <strong><a href="/" className="text-tx1 text-sm hover:underline">FAQs</a></strong>
    <span className="bg-tx1 h-8 w-px"></span>
    <strong><a href="/" className="text-tx1 text-sm hover:underline">Help</a></strong>
</div>
</div>