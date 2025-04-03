import { useTheme } from '../Context/ThemeContext';
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; // Keep these for the toggle
// Import your custom image (adjust the path as necessary)
import CustomIcon from '../assets/icon.png'; // Example path

export default function Topbar({ bg, ct2 }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${bg} p-4 flex justify-between w-2/3 mx-auto`}>
      <div className="bg-ct1 rounded-full p-3 flex items-center">
        {/* Add the custom image before the text */}
        <img 
          src={CustomIcon} 
          alt="Derivative Solver Icon" 
          className="w-6 h-6 mr-2" // Adjust size and spacing
        />
        <h1 
          className="text-sm font-bold text-ct2 ml-2 mr-2" 
          style={{ letterSpacing: '0.08em' }}
        >
          Derivative Solver
        </h1>
      </div>

      {/* Theme Toggle Button (unchanged) */}
      <button
        className={`${ct2} bg-transparent hover:bg-gray-500 font-semibold hover:text-txt1 py-2 px-4 border border-gray-500 hover:border-transparent rounded flex items-center space-x-2`}
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <>
            <SunIcon className="w-5 h-5" /> <span>Light</span>
          </>
        ) : (
          <>
            <MoonIcon className="w-5 h-5" /> <span>Pastel</span>
          </>
        )}
      </button>
    </div>
  );
}