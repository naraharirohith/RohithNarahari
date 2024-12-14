import React from 'react';
import { Github } from 'lucide-react';
import { projects } from '../data/projects';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

export function Projects() {
  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}