export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  link?: string;
}