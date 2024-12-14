import React from 'react';
import { ArrowRight } from 'lucide-react';
import { links } from '../config/links';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
          Blockchain Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Experienced in blockchain development, security, and integration. 
          Specialized in Web3, cryptography, and building innovative decentralized solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="inline-flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href={`mailto:${links.social.email}`}
            className="inline-flex items-center space-x-2 border border-black dark:border-white px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}