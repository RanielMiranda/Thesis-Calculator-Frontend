import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import Solver from "./Pages/Solver/Solver";
import Notes from "./Pages/Notes/Notes";
import Practice from "./Pages/Practice/Practice";
import Homepage from "./Pages/HomePage/HomePage";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f5f5dc]">
        <div className="flex justify-center items-center w-screen pt-16 ">
          <Routes>
          <Route path="/" element={<Homepage/>} />            
            <Route path="/solver" element={<Solver />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
