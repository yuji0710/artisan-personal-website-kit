
import React from 'react';

const About = () => {
  const skills = [
    'Python', 'Machine Learning', 'SQL', 'React.js', 
    'Java', 'C++', 'C', 'MERN Stack', 'Bash'
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">01.</span>About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-slate">
            <p>
              Hello! I'm Harsh, a passionate data scientist and developer currently completing my BSc in Information Technology, 
              set to graduate in March 2025. My journey in tech began with programming languages like C and Java, but I quickly 
              found my passion in the world of data science and machine learning.
            </p>
            
            <p>
              I'm particularly interested in building intelligent systems that can extract meaningful insights from data 
              and solve real-world problems. Throughout my academic journey, I've worked on various projects combining 
              my knowledge of software development and data science to create innovative solutions.
            </p>
            
            <p>
              Here are a few technologies I work with:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-5">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-highlight mr-2">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative rounded-md overflow-hidden w-full max-w-[300px] mx-auto">
              {/* Replace with your image or placeholder */}
              <div className="aspect-square bg-navy-light rounded-md hover:shadow-xl transition-all duration-300">
                <div className="h-full w-full flex items-center justify-center text-slate text-lg">
                  Your Photo
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-highlight rounded-md translate-x-5 translate-y-5 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
