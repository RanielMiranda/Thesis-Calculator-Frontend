import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Practice = () => {
    const backgroundColor = "#eadbcb";   
    const [input, setInput] = useState("");
    const [derivative, setDerivative] = useState("");
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
    
    const handleSolve = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/solve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ expression: input }),
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setDerivative(data.derivative);
      } catch (error) {
        console.error("Error:", error);
        setDerivative("Error: Invalid input");
      }
    };

  return (
    <MathJaxContext>
      <div className = "w-full justify-center items-center flex flex-col gap-4">

        <div>
            <Topbar />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Practice Page</h1>
        </div>
        
        <div className = "w-full justify-center items-center flex flex-col gap-4">
            <div className=" w-full max-w-4xl flex flex-col gap-3">
              <div className=" w-full flex flex-row gap-3">
            
            
                {/* Input and Display Column */}
                <div className = "w-2/5 flex flex-col gap-4">
                  {/* Input Card */}                

                  <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5 flex flex-row gap-4`}>
                    <div className="flex flex-col gap-4 flex-1">
                        <div>
                            <h2 className="text-xl font-bold">Instructions:</h2>
                        </div>
                        <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 justify-center mt-2">
                          Select the Rules then the type of mode to be included in the generation
                        </div>                                        
                    </div>  
                  </div>
                    
                    {/* Display Card */}
                    <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5 flex flex-col`}>
                      <h2 className="text-xl font-bold">This is displayed as: </h2>
                      
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
                <div className={`w-3/5 bg-[${backgroundColor}]  shadow-lg rounded-xl p-5 flex flex-col`}>
                    <h2 className="text-xl font-bold">Rule Configuration: </h2>
                      <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 flex flex-row gap-4">
                        <div className="flex flex-col gap-4">
                          
                          {/* Generation Options */}
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <label>Power Rule</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <label>Product Rule</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <label>Quotient Rule</label>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <label>Chain Rule</label>
                            </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <label>Trigonometry</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <label>Inverse Trigonometry</label>
                          </div>
                        </div>              
                      </div>

                      {/* Mode Types */}
                      <div style={{marginTop: '10px'}} className="flex items-center bg-[#f5f5dc] shadow-lg rounded-xl p-5">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <label>Solution Only Mode</label>
                        </div>
                        <div className="flex items-center ml-4">
                          <input type="checkbox" className="mr-2" />
                          <label>Multiple Choice</label>
                        </div>
                      </div>
                      <button style={{marginTop: '10px'}} className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded">
                        Generate
                      </button>             
                    </div>
                </div>
            
            
              {/* Solution Section */}
              <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5`}>
                <div className = "flex flex-row gap-4">
                  <h2 className="text-xl font-bold mb-1">Answer: </h2>   
                    <div style={{marginTop: '-4px'}}>
                      <button className="bg-[#cda882] hover:bg-[#a36638] text-black font-bold py-2 px-4 rounded">
                      Solve
                      </button>
                    </div>
                </div>
                {/* Solution Card */}
                <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 mb-2">
                <MathJax>{"\\( 3x^2 + 3 \\)"}</MathJax>
                
                </div> 
                <h2 className="text-xl font-bold mb-2">Step-by-Step Solution</h2>
                
                {/* Step-by-Step Card */}
                <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5">
                    <p>spacing out the solution card</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    
                </div>
                
              </div>
            </div>
        </div>

      </div>
    </MathJaxContext>
  );
};

export default Practice;

