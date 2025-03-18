import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Solver = () => {
  const [input, setInput] = useState(""); // User input state
  const [derivative, setDerivative] = useState(""); // Derivative result state

  // Handle input change
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

  // Insert symbols naturally
  const insertSymbol = (symbol) => {
    setInput((prev) => prev + symbol);
  };

  // Handle solve request to FastAPI
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

  return (
    <MathJaxContext>
      <div className="w-full justify-center items-center flex flex-col gap-4">
        <Topbar />
        <h1 className="text-3xl font-bold hover:underline">Solver Page</h1>

        <div className="w-full max-w-4xl flex flex-col gap-3">
          <div className="w-full flex flex-row gap-3">
            {/* Input and Display Column */}
            <div className="w-2/5 flex flex-col gap-4">
              {/* Input Card */}
              <div className="bg-[#eadbcb] shadow-lg rounded-xl p-5 flex flex-col gap-4">
                <h2 className="text-xl font-bold">Input</h2>
                <div className="flex flex-row gap-4">
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
                {/* Quick Insert Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => insertSymbol("1/2")}
                    className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded"
                  >
                    ½
                  </button>
                  <button
                    onClick={() => insertSymbol("√x")}
                    className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded"
                  >
                    √x
                  </button>
                  <button
                    onClick={() => insertSymbol("π")}
                    className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded"
                  >
                    π
                  </button>
                  <button
                    onClick={() => insertSymbol("e")}
                    className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded"
                  >
                    e
                  </button>
                </div>
              </div>

              {/* Display Card */}
              <div className="bg-[#eadbcb] shadow-lg rounded-xl p-5 flex flex-col">
                <h2 className="text-xl font-bold">This is displayed as:</h2>
                <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 flex items-center justify-center mt-2">
                  <MathJax>
                    {input
                      ? `\\( \\frac{d}{dx}\\left[${formatForMathJax(input)}\\right] \\)`
                      : "\\( \\frac{d}{dx}\\left[x^2 + 3x + 1\\right] \\)"}
                  </MathJax>
                </div>
              </div>
            </div>

            {/* Information Card */}
            <div className="w-3/5 bg-[#eadbcb] shadow-lg rounded-xl p-5 flex flex-col">
              <h2 className="text-xl font-bold">Some Settings</h2>
              <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5">
                <p>Type the equation you want to differentiate in the input field and press the Solve button to find the derivative.</p>
                <p>.</p>
                <p>You can also use the Quick Insert buttons to insert symbols into the input field.</p>
                <p>.</p>
                <p>Your inputs will automatically be formatted for LaTeX.</p>
                <p>.</p>
                <p>You can further configure the calculator in the settings tab at accessed from the button.</p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-[#eadbcb] shadow-lg rounded-xl p-5">
            <h2 className="text-xl font-bold mb-1">Answer:</h2>
            <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 mb-2">
              <MathJax>
                {derivative
                  ? `\\( ${derivative} \\)` // Display backend LaTeX result
                  : "\\( 2x + 3 \\)" /* Default until solved */}
              </MathJax>
            </div>
            <h2 className="text-xl font-bold mb-2">Step-by-Step Solution</h2>
            <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5">
              <p>Steps go here...</p> {/* Placeholder for future step-by-step */}
            </div>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Solver;