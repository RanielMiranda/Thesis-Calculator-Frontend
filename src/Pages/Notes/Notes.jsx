import { useState } from "react";
import Topbar from "../../Components/Topbar";
import { MathJax, MathJaxContext } from "better-react-mathjax";

// Reusable Section Component
const Section = ({ title, isVisible, toggleVisibility, rules }) => {
  return (
    <section className="mb-4 bg-[#eadbcb] shadow-lg rounded-xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button
          className="bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out p-2 rounded-md"
          onClick={toggleVisibility}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && (
        <div className="grid grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <div key={index} className="bg-[#f5f5dc] p-4 rounded-lg shadow-md">
              <h3 className="font-bold">{rule.title}</h3>
              <p>{rule.description}</p>
              <MathJax>{rule.formula}</MathJax>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const Notes = () => {
  const [showBasicRules, setShowBasicRules] = useState(true);
  const [showTrigonometryRules, setShowTrigonometryRules] = useState(true);
  const [showSpecialFunctionsRules, setShowSpecialFunctionsRules] = useState(true);
  const [showAntiderivativeRules, setShowAntiderivativeRules] = useState(true);

  // Define sections data
  const sections = [
    {
      title: "Basic Rules",
      isVisible: showBasicRules,
      toggleVisibility: () => setShowBasicRules(!showBasicRules),
      rules: [
        {
          title: "Power Rule",
          description: "Power rule description",
          formula: "\\( \\frac{d}{dx} u^n = n u^{n-1} \\)",
        },
        {
          title: "Product Rule",
          description: "Product rule description",
          formula: "\\( \\frac{d}{dx} [uv] = u'v + uv' \\)",
        },
        {
          title: "Quotient Rule",
          description: "Quotient rule description",
          formula: "\\( \\frac{d}{dx} \\left( \\frac{u}{v} \\right) = \\frac{u'v - uv'}{v^2} \\)",
        },
        {
          title: "Chain Rule",
          description: "Chain rule description",
          formula: "\\( \\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x) \\)",
        },
        {
          title: "Sum Rule",
          description: "Sum rule description",
          formula: "\\( \\frac{d}{dx} (u+v) = u' + v' \\)",
        },
        {
          title: "Constant Rule",
          description: "Constant rule description",
          formula: "\\( \\frac{d}{dx} c = 0 \\)",
        }
      ],
    },
    {
      title: "Trigonometry Rules",
      isVisible: showTrigonometryRules,
      toggleVisibility: () => setShowTrigonometryRules(!showTrigonometryRules),
      rules: [
        { title: "Sine", description: "Derivative of Sin(x)", formula: "\\( \\frac{d}{dx} \\sin(x) = \\cos(x) \\)" },
        { title: "Cosine", description: "Derivative of Cos(x)", formula: "\\( \\frac{d}{dx} \\cos(x) = -\\sin(x) \\)" },
        { title: "Tangent", description: "Derivative of Tan(x)", formula: "\\( \\frac{d}{dx} \\tan(x) = \\sec^2(x) \\)" },
        { title: "Cotangent", description: "Derivative of Cot(x)", formula: "\\( \\frac{d}{dx} \\cot(x) = -\\csc^2(x) \\)" },
        { title: "Secant", description: "Derivative of Sec(x)", formula: "\\( \\frac{d}{dx} \\sec(x) = \\sec(x)\\tan(x) \\)" },
        { title: "Cosecant", description: "Derivative of Csc(x)", formula: "\\( \\frac{d}{dx} \\csc(x) = -\\csc(x)\\cot(x) \\)" },
      ],
    },
    {
      title: "Logarithm Functions Rules",
      isVisible: showSpecialFunctionsRules,
      toggleVisibility: () => setShowSpecialFunctionsRules(!showSpecialFunctionsRules),
      rules: [
        { title: "Natural Logarithm", description: "Derivative of ln(x)", formula: "\\( \\frac{d}{dx} \\ln(x) = \\frac{1}{x} \\)" },
        { title: "Exponential", description: "Derivative of e^x", formula: "\\( \\frac{d}{dx} e^x = e^x \\)" },
        { title: "Logarithm", description: "Derivative of log(x)", formula: "\\( \\frac{d}{dx} \\log(x) = \\frac{1}{x} \\)" },
      ],
    },
    {
      title: "Inverse Trigonometric Functions",
      isVisible: showAntiderivativeRules,
      toggleVisibility: () => setShowAntiderivativeRules(!showAntiderivativeRules),
      rules: [
        { title: "Arcsine", description: "Derivative of arcsin(x)", formula: "\\( \\frac{d}{dx} \\arcsin(x) = \\frac{1}{\\sqrt{1-x^2}} \\)" },
        { title: "Arctangent", description: "Derivative of arctan(x)", formula: "\\( \\frac{d}{dx} \\arctan(x) = \\frac{1}{1+x^2} \\)" },
        { title: "Arcsecant", description: "Derivative of arcsec(x)", formula: "\\( \\frac{d}{dx} \\arcsec(x) = \\frac{1}{|x|\\sqrt{x^2-1}} \\)" },
        { title: "Arccosine", description: "Derivative of arccos(x)", formula: "\\( \\frac{d}{dx} \\arccos(x) = -\\frac{1}{\\sqrt{1-x^2}} \\)" },
        { title: "Arccotangent", description: "Derivative of arccot(x)", formula: "\\( \\frac{d}{dx} \\arccot(x) = -\\frac{1}{1+x^2} \\)" },
        { title: "Arccosecant", description: "Derivative of arccsc(x)", formula: "\\( \\frac{d}{dx} \\arccsc(x) = -\\frac{1}{|x|\\sqrt{x^2-1}} \\)" },
      ],
    },
  ];

  return (
    <MathJaxContext>
      <div className="min-h-screen min-w-screen bg-[#f5f5dc]">
        {/* Topbar */}
        <div>
          <Topbar />
        </div>

        {/* Main Container */}
        <div className="min-h-screen min-w-screen grid grid-cols-12 gap-6 pt-5 px-6">
          {/* Sidebar - Sticky */}
          <aside className="col-span-3 bg-[#eadbcb] shadow-lg rounded-xl p-5 h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Topics</h2>
            <ul className="space-y-3">
              {sections.map((section, index) => (
                <li
                  key={index}
                  className="hover:underline cursor-pointer"
                  onClick={section.toggleVisibility}
                >
                  {section.title}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="col-span-9">
            <h1 className="text-3xl font-bold mb-6 text-center">Notes Page</h1>
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                isVisible={section.isVisible}
                toggleVisibility={section.toggleVisibility}
                rules={section.rules}
              />
            ))}
          </main>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Notes;