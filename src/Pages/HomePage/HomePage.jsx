import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const HomePage = () => {
    const [hoveredRule, setHoveredRule] = useState(null);
    const [isEquationHovered, setIsEquationHovered] = useState(false);
    
    const [showExampleEquation, setShowExampleEquation] = useState(true);
    const [showExampleGeneration, setShowExampleGeneration] = useState(true);
    const [showExampleGeneration2, setShowExampleGeneration2] = useState(true);

    const toggleExampleEquation = () => setShowExampleEquation(!showExampleEquation);
    const toggleExampleGeneration = () => setShowExampleGeneration(!showExampleGeneration);
    const toggleExampleGeneration2 = () => setShowExampleGeneration2(!showExampleGeneration2);

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
                <div>
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
                        <button
                            className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
                            onClick={toggleExampleEquation}
                        >
                            {showExampleEquation ? "Hide" : "Show"}
                        </button>
                    </div>
                    {showExampleEquation && (
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
                    )}
                </div>

                {/* Example Generation Container */}
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Example Generation</h2>
                        <button
                            className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
                            onClick={toggleExampleGeneration}
                        >
                            {showExampleGeneration ? "Hide" : "Show"}
                        </button>
                    </div>
                    {showExampleGeneration && (
                        <div>
                            <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative">
                                <p className="text-lg">What rule was used to get the derivative of:</p>
                                <MathJax>{"\\( \\frac{d}{dx} (5x^3+5) \\)"}</MathJax>
                                <MathJax>{"\\( 15x^2 \\)"}</MathJax>
                            </div>
    
                            {/* Multiple-Choice Buttons */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {[
                                    { rule: "Power Rule", formula: "\\( \\frac{d}{dx} x^n = n x^{n-1} \\)" },
                                    { rule: "Product Rule", formula: "\\( \\frac{d}{dx} [uv] = u'v + uv' \\)" },
                                    { rule: "Quotient Rule", formula: "\\( \\frac{d}{dx} \\left( \\frac{u}{v} \\right) = \\frac{u'v - uv'}{v^2} \\)" },
                                    { rule: "Chain Rule", formula: "\\( \\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x) \\)" },
                                ].map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            className="bg-[#f5f5dc] text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md w-full hover:bg-[#cda882] transition-colors duration-200"
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
                        </div>
                    )}
                </div>

                {/* Second Example Generation Container */}
                <div className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6 mx-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Example Generation</h2>
                        <button
                            className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
                            onClick={toggleExampleGeneration2}
                        >
                            {showExampleGeneration2 ? "Hide" : "Show"}
                        </button>
                    </div>
                    {showExampleGeneration2 && (
                        <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md text-center relative">
                            <p className="text-lg">What is the final derivative of:</p>
                            <MathJax>{"\\( \\frac{d}{dx} 5x^3+5 \\)"}</MathJax>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cda882]"
                                placeholder={"15x^2"} 
                            />
                            <div>
                                This is displayed as:
                                <MathJax>{"\\( 15x^2 \\)"}</MathJax>
                            </div>                        
                        </div>
                    )}
                </div>
            </div>
        </MathJaxContext>
    );
};

export default HomePage;