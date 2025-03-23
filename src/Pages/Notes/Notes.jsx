import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Notes = () => {
  const [showBasicRules, setShowBasicRules] = useState(true);
  const [showTrigonometryRules, setShowTrigonometryRules] = useState(true);
  const [showSpecialFunctionsRules, setShowSpecialFunctionsRules] = useState(true);

  const toggleBasicRules = () => setShowBasicRules(!showBasicRules);
  const toggleTrigonometryRules = () => setShowTrigonometryRules(!showTrigonometryRules);
  const toggleSpecialFunctionsRules = () => setShowSpecialFunctionsRules(!showSpecialFunctionsRules);

  return (
    <MathJaxContext>
      <div className="min-h-screen min-w-screen bg-[#f5f5dc]">
        {/* Topbar */}
        <div>
          <Topbar />
        </div>
        {/* Main Container */}
        <div className="ming-h-screen min-w-screen grid grid-cols-12 gap-6 pt-20 px-6 ">
          {/* Sidebar - Sticky */}
          <aside className="col-span-3 bg-[#eadbcb] shadow-lg rounded-xl p-5 h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4 ">
              Topics
            </h2>
            <ul className="space-y-3">
              <li className="hover:underline cursor-pointer" onClick={toggleBasicRules}>Basic Rules</li>
              <li className="hover:underline cursor-pointer" onClick={toggleTrigonometryRules}>Trigonometry Rules</li>
              <li className="hover:underline cursor-pointer" onClick={toggleSpecialFunctionsRules}>Special function Rules</li>
            </ul>
          </aside>
          {/* Main Content */}
          <main className="col-span-9 min">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Notes Page
            </h1>

            {/* Basic Rules Section */}
            <section className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Basic Rules
                </h2>
                <button
                  className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
                  onClick={toggleBasicRules}
                >
                  {showBasicRules ? "Hide" : "Show"}
                </button>
              </div>
              {showBasicRules && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Power Rule:</h3>
                    <p>Power rule description</p>
                    <MathJax>{"\\( \\frac{d}{dx} x^n = n x^{n-1} \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Product Rule:</h3>
                    <p>Product rule description</p>
                    <MathJax>{"\\( \\frac{d}{dx} [uv] = u'v + uv' \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Quotient Rule:</h3>
                    <p>Quotient rule description</p>
                    <MathJax>
                      {"\\( \\frac{d}{dx} \\left( \\frac{u}{v} \\right) = \\frac{u'v - uv'}{v^2} \\)"}
                    </MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Chain Rule:</h3>
                    <p>Chain rule description</p>
                    <MathJax>
                      {"\\( \\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x) \\)"}
                    </MathJax>
                  </div>
                </div>
              )}
            </section>

            {/* Trigonometry Rules Section */}
            <section className="mb-8 bg-[#eadbcb] shadow-lg rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Trigonometry Rules
                </h2>
                <button
                  className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
                  onClick={toggleTrigonometryRules}
                >
                  {showTrigonometryRules ? "Hide" : "Show"}
                </button>
              </div>
              {showTrigonometryRules && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Sine:</h3>
                    <p>Derivative of Sin(x)</p>
                    <MathJax>{"\\( \\frac{d}{dx} sin(x) = cos(x) \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Cosine:</h3>
                    <p>Derivative of Cos(x)</p>
                    <MathJax>{"\\( \\frac{d}{dx} cos(x) = -sin(x) \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Tangent:</h3>
                    <p>Derivative of Tan(x)</p>
                    <MathJax>{"\\( \\frac{d}{dx} tan(x) = sec^2(x) \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Cotangent:</h3>
                    <p>Derivative of Cot(x)</p>
                    <MathJax>{"\\( \\frac{d}{dx} cot(x) = -csc^2(x) \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Secant:</h3>
                    <p>Derivative of Sec(x)</p>
                    <MathJax>
                      {"\\( \\frac{d}{dx} sec(x) = sec(x)tan(x) \\)"}
                    </MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Cosecant:</h3>
                    <p>Derivative of Csc(x)</p>
                    <MathJax>
                      {"\\( \\frac{d}{dx} csc(x) = -csc(x)cot(x) \\)"}
                    </MathJax>
                  </div>
                </div>
              )}
            </section>
            {/* Special Functions Rules Section */}
            <section className="bg-[#eadbcb] shadow-lg rounded-xl p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Special Functions Rules
                </h2>
                <button
                  className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
                  onClick={toggleSpecialFunctionsRules}
                >
                  {showSpecialFunctionsRules ? "Hide" : "Show"}
                </button>
              </div>
              {showSpecialFunctionsRules && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Natural Logarithm:</h3>
                    <p>Derivative of ln(x)</p>
                    <MathJax>{"\\( \\frac{d}{dx} ln(x) = \\frac{1}{x} \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Exponential:</h3>
                    <p>Derivative of e^x</p>
                    <MathJax>{"\\( \\frac{d}{dx} e^x = e^x \\)"}</MathJax>
                  </div>
                  <div className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
                    <h3 className="font-bold">Logarithm:</h3>
                    <p>Derivative of log(x)</p>
                    <MathJax>{"\\( \\frac{d}{dx} log(x) = \\frac{1}{x} \\)"}</MathJax>
                  </div>
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Notes;
