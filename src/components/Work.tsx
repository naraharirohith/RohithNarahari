import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "Digital product design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Web development",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Brand identity",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

export function Work() {
  return (
    <section id="work" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}