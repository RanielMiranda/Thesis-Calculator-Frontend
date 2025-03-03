import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Notes = () => {
  return (
    <MathJaxContext>
      <div className="w-full justify-center items-center flex flex-col gap-4">
        <div>
          <Topbar />
        </div>
        <h1 className="text-3xl font-bold hover:underline">Notes Page</h1>
        <div className="w-full justify-center items-center flex flex-row gap-4">
          <div className="w-2/12 bg-[#eadbcb] shadow-lg rounded-xl p-5 flex flex-col gap-5">
            {/* Topic Links */}
            <div>
              <h2 className="hover:underline">This is for Linking to Topics</h2>
            </div>
            <div>
              <h2 className="hover:underline">Power Rules</h2>
            </div>
          </div>

          <div className="w-8/12 flex flex-col gap-4 bg-[#eadbcb] shadow-lg rounded-xl p-5">
            {/* Notes Card */}
            <ul className="text-left mt-2 list-disc list-inside">
              <li style={{marginBottom: '50px'}}>
                <strong>Power Rule:</strong>
                <div style={{marginLeft: '50px'}} className = " flex flex-col gap-4">
                    <h1> Power rule description</h1>
                    <MathJax>{"\\( \\frac{d}{dx} x^n = n x^{n-1} \\)"}</MathJax>
                </div>
              </li>
              <li style={{marginBottom: '50px'}}>
                <strong>Product Rule:</strong>
                <div style={{marginLeft: '50px'}} className = " flex flex-col gap-4">
                    <h1>Product rule description</h1>
                    <MathJax>{"\\( \\frac{d}{dx} [uv] = u'v + uv' \\)"}</MathJax>
                </div>
              </li>
              <li style={{marginBottom: '50px'}}>
                <strong>Quotient Rule:</strong>
                <div style={{marginLeft: '50px'}} className = " flex flex-col gap-4">
                    <h1>Quotient rule description</h1>
                    <MathJax>{"\\( \\frac{d}{dx} \\left( \\frac{u}{v} \\right) = \\frac{u'v - uv'}{v^2} \\)"}</MathJax>
                </div>
              </li>
              <li style={{marginBottom: '50px'}}>
                <strong>Chain Rule:</strong>
                <div style={{marginLeft: '50px'}} className = " flex flex-col gap-4">
                    <h1>Chain rule description</h1>
                    <MathJax>{"\\( \\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x) \\)"}</MathJax>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Notes;

