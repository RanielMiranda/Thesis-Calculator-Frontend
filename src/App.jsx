import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import Homepage from "./Pages/HomePage/HomePage";
import Solver from "./Pages/Solver/Solver";
import Learn from "./Pages/Learn/LearnPage";
import Generate from "./Pages/Generate/Generate";
import Constant from "./Pages/Constant";




function App() {
return (
      <Router>
        <MathJaxContext>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/solver" element={<Solver />} />
              <Route path ="/learn" element={<Learn />} />
              <Route path ="/generate" element={<Generate />} />
              <Route path ="/Constant" element={<Constant />} />
            </Routes>
        </MathJaxContext>
      </Router>
  );
}

export default App;