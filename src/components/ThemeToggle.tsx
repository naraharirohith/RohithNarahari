import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function ThemeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun size={20} className="text-gray-300 hover:text-white" />
      ) : (
        <Moon size={20} className="text-gray-600 hover:text-black" />
      )}
    </button>
  );
}