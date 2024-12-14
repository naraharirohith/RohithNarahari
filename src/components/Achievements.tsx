import React from 'react';
import { ExternalLink } from 'lucide-react';
import { achievements } from '../data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-2 h-2 mt-2 bg-black dark:bg-white rounded-full" />
              <div>
                {achievement.link ? (
                  <a 
                    href={achievement.link}
                    className="text-lg hover:text-gray-600 dark:text-gray-300 dark:hover:text-white flex items-center space-x-2"
                  >
                    <span>{achievement.title}</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <p className="text-lg dark:text-gray-300">{achievement.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}