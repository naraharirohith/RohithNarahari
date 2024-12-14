import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { links } from '../config/links';

export function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Blockchain Development"
            className="rounded-lg w-full"
          />
        </div>
        <div>
          <SectionTitle>About Me</SectionTitle>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a Blockchain Developer with expertise in blockchain development, security, and integration. My focus is on creating innovative decentralized solutions and smart contracts that drive the future of Web3.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            With experience in cryptography and blockchain protocols, I specialize in developing secure and efficient decentralized applications while staying at the forefront of blockchain technology.
          </p>
          <div className="flex space-x-6">
            <a href={links.social.twitter} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">Twitter</a>
            <a href={links.social.linkedin} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">LinkedIn</a>
            <a href={links.social.github} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </Section>
  );
}