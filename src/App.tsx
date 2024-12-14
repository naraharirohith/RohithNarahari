import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg dark:text-white">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;