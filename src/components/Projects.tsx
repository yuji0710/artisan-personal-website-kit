import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Fashion Recommender',
      description: 'A web application that uses computer vision to recommend similar fashion products based on user-uploaded images. Built with React, TensorFlow.js, and a product database.',
      tags: ['React', 'TensorFlow.js', 'Computer Vision', 'Machine Learning'],
      github: 'https://github.com/yuji0710',
      external: '#',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      title: 'House Price Prediction Model',
      description: 'A machine learning model that predicts house prices based on various features like location, size, and amenities. Implemented using Python, scikit-learn, and pandas for data analysis.',
      tags: ['Python', 'scikit-learn', 'pandas', 'Data Analysis'],
      github: 'https://github.com/yuji0710',
      external: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
      title: 'MERN Stack Portfolio Website',
      description: 'A responsive portfolio website built using the MERN stack (MongoDB, Express, React, Node.js) featuring dynamic content management and contact form functionality.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/yuji0710',
      external: '#',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">03.</span>Projects
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
          <a href="https://github.com/yuji0710" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
