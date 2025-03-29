import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import Solver from "./Pages/Solver/Solver";
// import Notes from "./Pages/Notes/Notes";
// import Practice from "./Pages/Practice/Practice";
import Homepage from "./Pages/HomePage/HomePage";

function App() {
return (
      <Router>
        <MathJaxContext>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/solver" element={<Solver />} />
            </Routes>
        </MathJaxContext>
      </Router>
  );
}

export default App;