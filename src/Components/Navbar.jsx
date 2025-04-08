import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from '../Context/ThemeContext';
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; // Keep these for the toggle

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Learn", path: "/learn" },
  { name: "Solver", path: "/solver" },
  { name: "Generator", path: "/generate" },
];

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-light shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-dark">Derivative Solver</h1>
        <div className = "flex flex-row items-center justify-end">
          <nav className="space-x-6">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`font-medium text-dark hover:text-primary transition-colors text-base ${
                  location.pathname === path ? "text-primary" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <button
            className="bg-primary hover:bg-primary-light text-dark font-bold py-2 px-2 rounded mx-4 flex items-center hover:bg-primary-light"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <>
                <SunIcon className="w-5 h-5 mr-1" /> <span>Light</span>
              </>
            ) : (
              <>
                <MoonIcon className="w-5 h-5 mr-1" /> <span>Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

