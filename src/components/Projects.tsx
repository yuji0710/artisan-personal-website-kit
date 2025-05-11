
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application that helps users track their daily habits and goals. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      external: '#',
      image: '/placeholder.svg'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform built with React and a headless CMS. Features include product filtering, cart functionality, and payment integration.',
      tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
      github: '#',
      external: '#',
      image: '/placeholder.svg'
    },
    {
      title: 'Project Three',
      description: 'A real-time chat application with authentication, message persistence, and online status indicators.',
      tags: ['React', 'Firebase', 'WebSockets', 'Styled-Components'],
      github: '#',
      external: '#',
      image: '/placeholder.svg'
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">02.</span>Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card key={i} className="bg-navy border border-slate/20 hover:border-highlight/50 transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-navy-dark h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-slate-lighter text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-mono text-slate-lighter bg-navy-dark px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      className="text-slate-light hover:text-highlight transition-colors duration-300"
                      aria-label="GitHub Repository"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.external} 
                      className="text-slate-light hover:text-highlight transition-colors duration-300"
                      aria-label="Live Demo"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-primary">
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
