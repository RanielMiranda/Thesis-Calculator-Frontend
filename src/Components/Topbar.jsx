import { useTheme } from '../Context/ThemeContext';

export default function Topbar({bg, ct2}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={bg + " p-4 flex justify-between w-2/3 mx-auto"}>
      <div className="bg-ct1 rounded-full p-3">
        <h1 className="text-sm font-bold text-ct2" style={{letterSpacing: '0.08em', marginLeft: '10px', marginRight: '10px'}}>Derivative Solver</h1>
      </div>
      <button
        className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-txt1 py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Pastel' : 'Light'}
      </button>
    </div>
  );
}
