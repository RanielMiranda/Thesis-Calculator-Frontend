import { Link } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon } from "lucide-react"; // Using Lucide icons for better design

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#eadbcb] text-black p-4 shadow-md">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-2">
          {/* Dark Mode Toggle */}          
          <button 
            type="button" 
            className="flex items-center p-2 rounded-md hover:bg-[#cda882] hover:text-black"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            <span className="ml-2">{darkMode ? "Dark" : "Light"}</span>
          </button>
          <div className="w-5" />
          <h1 className="text-xl font-bold">Derivative Teaching Aid</h1>          
        </div>

        <div className="flex items-center space-x-4">
        {/* Links */}
        <Link
          to="/"
          className="flex items-center p-2 rounded-md bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out"
        >
          Solver
        </Link>
        <Link
          to="/notes"
          className="flex items-center p-2 rounded-md bg-[#eadbcb] hover:bg-[#cda882] transition duration-200 ease-in-out"
        >
          Notes
        </Link>
      </div>

      </div>
    </nav>
  );
};

export default Topbar;

