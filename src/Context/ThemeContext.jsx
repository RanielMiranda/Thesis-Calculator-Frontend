// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'pastel' ? 'pastel' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'pastel' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
