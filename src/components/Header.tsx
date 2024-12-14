import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { links } from '../config/links';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold dark:text-white">Rohith Narahari</a>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="dark:text-white" />
            ) : (
              <Menu size={24} className="dark:text-white" />
            )}
          </button>
        </div>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white dark:bg-dark-bg md:bg-transparent p-6 md:p-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li><a href="#experience" className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-white">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-white">Projects</a></li>
            <li><a href="#achievements" className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-white">Achievements</a></li>
            <li><a href="#contact" className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-white">Contact</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href={links.social.github} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            <Github size={20} />
          </a>
          <a href={links.social.linkedin} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href={links.social.twitter} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            <Twitter size={20} />
          </a>
          <a href={`mailto:${links.social.email}`} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}