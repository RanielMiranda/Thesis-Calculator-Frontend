import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import Homepage from "./Pages/HomePage/HomePage";
import Solver from "./Pages/Solver/Solver";
import Learn from "./Pages/Learn/LearnPage";
import Generate from "./Pages/Generate/Generate";



function App() {
return (
      <Router>
        <MathJaxContext>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/solver" element={<Solver />} />
              <Route path ="/learn" element={<Learn />} />
              <Route path ="/generate" element={<Generate />} />
            </Routes>
        </MathJaxContext>
      </Router>
  );
}

export default App;