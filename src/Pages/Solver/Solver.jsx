import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Solver = () => {
    const backgroundColor = "#eadbcb";    
  return (
    <MathJaxContext>
      <div className = "w-full justify-center items-center flex flex-col gap-4">

        <div>
            <Topbar />
        </div>

        <div>
          <h1 className="text-3xl font-bold hover:underline">Solver Page</h1>
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
                            <h2 className="text-xl font-bold">Input</h2>
                        </div>
                        <div className="flex flex-row gap-4">
                            <input type="text" className="w-full p-2 border rounded-lg flex-1" placeholder="Enter function (e.g., x^2 + sin(x))" />
                            <button className="bg-[#cda882] hover:bg-[#a36638] text-white font-bold py-2 px-4 rounded">
                                Solve
                            </button>
                        </div>                                        
                    </div>
                  </div>
                    
                    {/* Display Card */}
                    <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5 flex flex-col`}>
                      <h2 className="text-xl font-bold">This is displayed as: </h2>
                      <div className="flex-1">
                        <div className="bg-[#f5f5dc] shadow-lg rounded-xl p-5 flex items-center justify-center mt-2">
                          <MathJax>{"\\( \\frac{d}{dx}\\left[x^{3}+3x+1\\right] \\)"}</MathJax>
                        </div>
                      </div>
                    </div>
                  </div>
                
            
                {/* Information Card */}
                <div className={`w-3/5 bg-[${backgroundColor}]  shadow-lg rounded-xl p-5 flex flex-col`}>
                    <h2 className="text-xl font-bold">Some  Settings</h2>
                    <div className="flex-1"></div>
                    
                    </div>
                </div>
            
            
              {/* Solution Section */}
              <div className={`bg-[${backgroundColor}] shadow-lg rounded-xl p-5`}>
                <h2 className="text-xl font-bold mb-1">Answer: </h2>   
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

export default Solver;

