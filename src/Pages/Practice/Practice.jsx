import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Practice = () => {
  const backgroundColor = "#eadbcb";
  const [input, setInput] = useState(""); // Generated equation
  const [derivative, setDerivative] = useState(""); // Derivative in LaTeX
  const [rules, setRules] = useState({
    "Power Rule": true,
    "Product Rule": false,
    "Quotient Rule": false,
    "Chain Rule": true,
    Trigonometry: true,
    "Inverse Trigonometry": false,
  });

  const formatForMathJax = (text) => {
    if (!text) return "";
    let formatted = text
      // Replace ** with ^ for exponents
      .replace(/\*\*/g, "^")
      // Replace * with \cdot for multiplication (or leave as-is for implicit multiplication)
      .replace(/\*/g, " ")
      // Wrap variables and numbers in proper spacing
      .replace(/([a-zA-Z])\s*([a-zA-Z0-9])/g, "$1 $2") // e.g., "x sin" → "x sin"
      // Handle trigonometric and exponential functions
      .replace(/sin/g, "\\sin")
      .replace(/cos/g, "\\cos")
      .replace(/e\^/g, "e^") // Keep e^x as-is, no extra backslash needed
      .replace(/ln/g, "\\ln")
      // Add parentheses where needed (optional, for clarity)
      .replace(/\^([a-zA-Z0-9]+)/g, "^{$1}") // e.g., x^2 → x^{2}
      // Replace / with fraction notation (if implementing Quotient Rule later)
      .replace(/([^\s]+)\/([^\s]+)/g, "\\frac{$1}{$2}");
    return formatted;
  };

  const handleCheckboxChange = (rule) => {
    setRules((prev) => ({ ...prev, [rule]: !prev[rule] }));
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSolve = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: input }), // Send input as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to fetch derivative");
      }

      const data = await response.json();
      setDerivative(data.derivative); // Set LaTeX result from backend
    } catch (error) {
      console.error("Error:", error);
      setDerivative("Error: Invalid input or server issue");
    }
  };

  const handleGenerate = async () => {
    try {
      const selectedRules = Object.keys(rules).filter((rule) => rules[rule]);
      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rules: selectedRules }),
      });
      if (!response.ok) throw new Error("Failed to generate");
      const data = await response.json();

      // Format the equation for MathJax
      const formattedEquation = formatForMathJax(data.equation);
      setInput(formattedEquation);
      setDerivative(data.derivative); // Derivative is already in LaTeX from backend
    } catch (error) {
      console.error("Error:", error);
      setInput("");
      setDerivative("Error: Could not generate equation");
    }
  };

  return (
    <MathJaxContext>
      <div className="w-full justify-center items-center flex flex-col gap-4">
        <div>
          <Topbar />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Practice Page</h1>
        </div>
        <div className="w-full justify-center items-center flex flex-col gap-4">
          <div className="w-full max-w-4xl flex flex-col gap-3">
            <div className="w-full flex flex-row gap-3">
              {/* Input and Display Column */}
              <div className="w-2/5 flex flex-col gap-4">
                <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5 flex flex-row gap-4`}>
                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-xl font-bold">Custom Equation:</h2>
                    <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 flex gap-4 items-center mt-2">
                      <input
                      type="text"
                      className="w-full p-2 border rounded-lg flex-1 bg-[#f5f5dc]"
                      placeholder="Enter function: 'x^2 + 3x + 1'"
                      value={input}
                      onChange={handleInputChange}
                      />
                      <button
                        onClick={handleSolve} // Trigger POST request
                        className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded"
                      >
                        Solve
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5 flex flex-col`}>
                  <h2 className="text-xl font-bold">The generated equation is:</h2>
                  <div className="flex-1">
                    <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 flex items-center justify-center mt-2">
                      <MathJax>
                        {input
                          ? `\\( \\frac{d}{dx}\\left[${input}\\right] \\)`
                          : "\\( \\frac{d}{dx}\\left[x^2 + 3x + 1\\right] \\)"}
                      </MathJax>
                    </div>
                  </div>
                </div>
              </div>
              {/* Information Card */}
              <div className={`w-3/5 bg-[${backgroundColor}] shadow-lg rounded-xl p-5 flex flex-col`}>
                <h2 className="text-xl font-bold">Rule Configuration:</h2>
                <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 flex flex-row gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={rules["Power Rule"]}
                        onChange={() => handleCheckboxChange("Power Rule")}
                      />
                      <label>Power Rule</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={rules["Product Rule"]}
                        onChange={() => handleCheckboxChange("Product Rule")}
                      />
                      <label>Product Rule</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={rules["Quotient Rule"]}
                        onChange={() => handleCheckboxChange("Quotient Rule")}
                      />
                      <label>Quotient Rule</label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={rules["Chain Rule"]}
                        onChange={() => handleCheckboxChange("Chain Rule")}
                      />
                      <label>Chain Rule</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={rules["Trigonometry"]}
                        onChange={() => handleCheckboxChange("Trigonometry")}
                      />
                      <label>Trigonometry</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={rules["Inverse Trigonometry"]}
                        onChange={() => handleCheckboxChange("Inverse Trigonometry")}
                      />
                      <label>Inverse Trigonometry</label>
                    </div>
                  </div>
                </div>
                <button
                  style={{ marginTop: "10px" }}
                  className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>
            </div>
            {/* Solution Section */}
            <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5`}>
              <h2 className="text-xl font-bold mb-2">Derivative</h2>
              <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5">
                <MathJax>{derivative ? `\\( ${derivative} \\)` : "No derivative yet"}</MathJax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Practice;