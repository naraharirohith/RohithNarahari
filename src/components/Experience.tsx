import React from 'react';
import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-8 relative">
              <div className="absolute w-4 h-4 bg-white dark:bg-dark-bg border-2 border-black dark:border-white rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company} | {exp.period} | {exp.type}</p>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}