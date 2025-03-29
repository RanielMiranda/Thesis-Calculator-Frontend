import React, { useState } from 'react'
import Topbar from "../../Components/Topbar"
import { Link } from 'react-router-dom';
import { MathJax } from "better-react-mathjax";

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


  return (
    <div className = "bg-ct1 w-full h-screen">
        <Topbar bg = "bg-ct1"/>

        {/* Main Content */}
        <div className = "flex flex-col w-2/3 mx-auto" >
            <div className = "flex flex-row items-end justify-end flex-grow space-x-4">
                <Navbar />
            </div>


            <div className = "flex flex-row items-center justify-center flex-grow space-x-4">
                <h1 className ="text-ct2 text-md">Solver</h1>
            </div>

            <div className = "flex flex-row space-x-4">

                {/* Input Container*/}
                <div className="bg-bt2 rounded-2xl p-4 space-x-10 w-1/2">
                        <div className = "flex flex-col space-y-4">
                            <div>
                                <strong className="text-ct2 text-md">Input function:</strong>
                            </div>
                            <div className = "flex flex-row space-x-4">
                            <input
                                type="text"
                                className="bg-ct2 rounded-md p-2 outline-none"
                                placeholder="f(x)="
                                value={inputFunction}
                                onChange={(e) => setInputFunction(e.target.value)}
                            />
                                <button className="bg-bt3 rounded-md p-2 text-ct1 font-bold" onClick={handleSolve}>Solve</button>
                            </div>
        
                            {/* Display */}
                            <div>
                                <h className="text-ct2 text-md text-bold">Display:</h>
                            </div>    
                            <div className = "bg-ct2 h-20 w-full rounded-md p-4"> 
                                <div className = "flex flex-row space-x-4 justify-center h-full ">
                                <MathJax>{displayFunction || "Enter a function to display"}</MathJax>
                                </div>
                            </div>   

                            <div>
                                hell
                            </div>         
                        </div>
                </div>

                {/* Graph Container*/}
                <div className="bg-bt3 rounded-2xl p-4 space-x-10 w-1/2">
                    <div className = "flex justify-center items-center">
                        <h1 className="text-tx1 font-bold text-md">Graph</h1>
                    </div>
                </div>
            </div>

            <div className = "bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3 mt-5">
                answer
            </div>

        </div>

    </div>
  )
}

const Navbar = () => (
    <div className="flex flex-row items-end justify-end flex-grow space-x-4">
        <Link to="/" className="text-bt3">
            <div className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                <strong className="text-tx1 text-sm font-semibold">Home</strong>
            </div>
        </Link>
        <Link to="/solver" className="text-bt3">
            <div className="bg-bt2 rounded-2xl flex items-center justify-center h-10 px-3">
                <strong className="text-ct2 text-sm font-semibold">Solver</strong>
            </div>
        </Link>
        <Link to="/learn" className="text-bt3">
            <div className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                <strong className="text-ct1 text-sm font-semibold">Learn</strong>
            </div>
        </Link>
        <Link to="/generate" className="text-bt3">
            <div className="bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3">
                <strong className="text-ct1 text-sm font-semibold">Generate</strong>
            </div>
        </Link>
    </div>
)

export default Solver

