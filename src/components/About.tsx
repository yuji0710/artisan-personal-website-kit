
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'HTML & CSS', 'Tailwind CSS'
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
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these days 
              is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
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
