import React from 'react';
import { Github } from 'lucide-react';
import { Project } from '../../types';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
        {project.github && (
          <a 
            href={project.github} 
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <TechBadge key={i}>{tech}</TechBadge>
        ))}
      </div>
    </div>
  );
}