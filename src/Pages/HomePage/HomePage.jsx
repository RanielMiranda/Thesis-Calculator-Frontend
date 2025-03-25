import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const HomePage = () => {
    const [hoveredRule, setHoveredRule] = useState(null);
    const [isEquationHovered, setIsEquationHovered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [inputtedAnswer, setInputtedAnswer] = useState(null);
    const [input, setInput] = useState(""); // User input state

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Function to format input into MathJax-friendly syntax (for display)
    const formatForMathJax = (text) => {
        return text
            .replace(/√\(([^)]+)\)/g, "\\sqrt{$1}")
            .replace(/√([a-zA-Z0-9]+)/g, "\\sqrt{$1}")
            .replace(/([^\s]+)\/([^\s]+)/g, "\\frac{$1}{$2}")
            .replace(/(\w+)\^(\d+)/g, "$1^{$2}");
    };

    // Check answer when button is clicked
    const checkAnswer = () => {
        const correctAnswer = "15x^2";
        setInputtedAnswer({
            isCorrect: input.trim() === correctAnswer
        });
    };

    // Define the rule used for the example equation
    const equationRule = {
        rule: "Power Rule",
        description: (
            <span>
                The Power Rule states that for a term of the form <MathJax inline>{"\\( x^n \\)"}</MathJax>, the derivative is{" "}
                <MathJax inline>{"\\( n x^{n-1} \\)"}</MathJax>. Here, it’s applied to <MathJax inline>{"\\( 5x^3 \\)"}</MathJax>, yielding{" "}
                <MathJax inline>{"\\( 15x^2 \\)"}</MathJax>, and the constant 5 has a derivative of 0.
            </span>
        ),
        formula: <MathJax>{"\\( \\frac{d}{dx} x^n = n x^{n-1} \\)"}</MathJax>,
    };

    return (
        <MathJaxContext>
            <div className="min-h-screen min-w-screen flex flex-col justify-center bg-[#f5f5dc]">
                {/* Topbar */}
                <div>
                    <Topbar />
                </div>

                {/* Title */}
                <div className="pt-5 pb-5">
                    <h1 className="text-4xl font-bold text-gray-800 flex justify-center">Home Page</h1>
                </div>

                {/* Introduction Container */}
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                    <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                        <h1>This is a derivative teaching aid with equation generation, practice modes, and a notes page.</h1>
                    </div>
                </div>

                {/* Example Equation Container */}
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Example Equation</h2>
                    </div>

                    <div
                        className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative"
                        onMouseEnter={() => setIsEquationHovered(true)}
                        onMouseLeave={() => setIsEquationHovered(false)}
                    >
                        <p className="text-lg">Find the derivative of:</p>
                        <MathJax>{"\\( \\frac{d}{dx} 5x^3+5 \\)"}</MathJax>
                        <MathJax>{"\\( 15x^2 \\)"}</MathJax>

                        {/* Hover popup for the equation */}
                        {isEquationHovered && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded-lg shadow-lg border border-gray-300 w-64 text-center z-20">
                                <p className="font-bold">{equationRule.rule}</p>
                                <div>{equationRule.formula}</div>
                                <p className="text-sm">{equationRule.description}</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-2">
                        <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative">
                            You can hover over the equations to display the rules used to solve them.
                        </div>
                    </div>
                </div>

                {/* Example Generation Container */}
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Example Generation</h2>
                    </div>
                    <div>
                        <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative">
                            <p className="text-lg">What rule was used to get the derivative of:</p>
                            <MathJax>{"\\( \\frac{d}{dx} (5x^3+5) \\)"}</MathJax>
                            <MathJax>{"\\( 15x^2 \\)"}</MathJax>
                        </div>

                        {/* Multiple-Choice Buttons */}
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            {[
                                { rule: "Power Rule", formula: "\\( \\frac{d}{dx} x^n = n x^{n-1} \\)", isCorrect: true },
                                { rule: "Product Rule", formula: "\\( \\frac{d}{dx} [uv] = u'v + uv' \\)", isCorrect: false },
                                { rule: "Quotient Rule", formula: "\\( \\frac{d}{dx} \\left( \\frac{u}{v} \\right) = \\frac{u'v - uv'}{v^2} \\)", isCorrect: false },
                                { rule: "Chain Rule", formula: "\\( \\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x) \\)", isCorrect: false },
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <button
                                        className="bg-[#f5f5dc] text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md w-full hover:bg-[#cda882] transition-colors duration-200"
                                        onClick={() => {
                                            setSelectedAnswer(item);
                                            setShowFeedback(true);
                                        }}
                                        onMouseEnter={() => setHoveredRule(item)}
                                        onMouseLeave={() => setHoveredRule(null)}
                                    >
                                        {item.rule} <MathJax>{item.formula}</MathJax>
                                    </button>

                                    {/* Hover rule popup */}
                                    {hoveredRule === item && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white p-2 rounded-lg shadow-lg border border-gray-300 w-48 text-center z-20">
                                            <p className="font-bold">{item.rule}</p>
                                            <MathJax>{item.formula}</MathJax>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Feedback Message */}
                        {showFeedback && selectedAnswer && (
                            <div className="mt-4 text-center">
                                <p className={selectedAnswer.isCorrect ? "text-green-600" : "text-red-600"}>
                                    {selectedAnswer.isCorrect 
                                        ? "Correct! The Power Rule was used to find this derivative."
                                        : "Incorrect. Try again! Hint: Look at how x³ becomes 3x² multiplied by the coefficient."}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="pt-2">
                        <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative">
                            You can hover over the rules to display the equations used to solve them.
                        </div>
                    </div>
                </div>

                {/* Second Example Generation Container */}
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Example Generation</h2>
                    </div>
                    <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative">
                        <p className="text-lg">What is the final derivative of:</p>
                        <MathJax>{"\\( \\frac{d}{dx} 5x^3+5 \\)"}</MathJax>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg flex-1 bg-[#f5f5dc]"
                            placeholder="Enter answer: '15x^2'"
                            value={input}
                            onChange={handleInputChange}
                        />
                        <button
                            className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded mt-2"
                            onClick={checkAnswer}
                        >
                            Check Answer
                        </button>
                        <div>
                            This is displayed as:
                            <MathJax>{"\\( 15x^2 \\)"}</MathJax>
                            {inputtedAnswer !== null && (
                                <p className={inputtedAnswer.isCorrect ? "text-green-600" : "text-red-600"}>
                                    {inputtedAnswer.isCorrect 
                                        ? "Correct! The derivative is indeed 15x^2."
                                        : "Incorrect. Try again! Hint: Apply the Power Rule to 5x^3 and remember constants become 0."}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                References:
                    <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md relative">
                        <a href="https://www.cuemath.com/calculus/derivatives/" target="_blank" rel="noopener noreferrer">Cuemath - Derivatives</a>
                    </div>
                </div>
            </div>
        </MathJaxContext>
    );
};

export default HomePage;