import React from 'react';

export function Header({ toggleTheme, currentTheme }: { toggleTheme: () => void; currentTheme: 'buzoko' | 'newsblitz' }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentTheme === 'buzoko' ? 'BuZoko' : 'News-Blitz'}
          </div>
          <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full">
            Beta
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity bg-[length:200%_200%] animate-gradient"
          >
            Switch to {currentTheme === 'buzoko' ? 'News-Blitz' : 'BuZoko'}
          </button>
        </div>
      </div>
    </header>
  );
}