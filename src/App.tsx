import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Team } from './components/Team';

function App() {
  const [currentTheme, setCurrentTheme] = useState<'buzoko' | 'newsblitz'>('buzoko');

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'buzoko' ? 'newsblitz' : 'buzoko');
  };

  return (
    <div className="min-h-screen no-select">
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <main className="transition-all duration-500 ease-in-out">
        <Hero theme={currentTheme} />
        <Features theme={currentTheme} />
        <Team />
      </main>
    </div>
  );
}

export default App;