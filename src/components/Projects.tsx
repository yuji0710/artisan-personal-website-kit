
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

// Import local images
import project1 from "/assets/images/project-1.png";
import project2 from "/assets/images/project-2.png";
import project3 from "/assets/images/project-3.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Fashion Recommender',
      description: 'A web application that uses computer vision to recommend similar fashion products based on user-uploaded images. Built with React, TensorFlow.js, and a product database.',
      tags: ['React', 'TensorFlow.js', 'Computer Vision', 'Machine Learning'],
      github: 'https://github.com/yuji0710',
      external: '#',
      image: project1
    },
    {
      title: 'House Price Prediction Model',
      description: 'A machine learning project that predicts house prices using features like location, BHK, and square footage. The model pipeline includes data cleaning, feature engineering, outlier removal, and linear regression using scikit-learn. Implemented with Python and pandas.',
      tags: ['Python', 'scikit-learn', 'pandas', 'Data Cleaning', 'Linear Regression'],
      github: 'https://github.com/yuji0710/House-Price-Prediction',
      external: '#',
      image: project2
    },
    {
      title: 'MERN Stack Portfolio Website',
      description: 'A responsive portfolio website built using the MERN stack (MongoDB, Express, React, Node.js) featuring dynamic content management and contact form functionality.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/yuji0710',
      external: '#',
      image: project3
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-navy-dark">
      <div className="container mx-auto">
        <motion.h2
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-highlight font-mono mr-2">03.</span>Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="bg-navy border border-slate/20 hover:border-highlight/50 transition-all duration-300 h-full flex flex-col">
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
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={projects.length + 1}
        >
          <a href="https://github.com/yuji0710" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;




// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Github, Link } from "lucide-react";

// // Import local images
// import project1 from "/assets/images/project-1.png";
// import project2 from "/assets/images/project-2.png";
// import project3 from "/assets/images/project-3.png";

// const Projects = () => {
//   const projects = [
//     {
//       title: 'AI-Powered Fashion Recommender',
//       description: 'A web application that uses computer vision to recommend similar fashion products based on user-uploaded images. Built with React, TensorFlow.js, and a product database.',
//       tags: ['React', 'TensorFlow.js', 'Computer Vision', 'Machine Learning'],
//       github: 'https://github.com/yuji0710',
//       external: '#',
//       image: project1
//     },
//     {
//       title: 'House Price Prediction Model',
//       description: 'A machine learning project that predicts house prices using features like location, BHK, and square footage. The model pipeline includes data cleaning, feature engineering, outlier removal, and linear regression using scikit-learn. Implemented with Python and pandas.',
//       tags: ['Python', 'scikit-learn', 'pandas', 'Data Cleaning', 'Linear Regression'],
//       github: 'https://github.com/yuji0710',
//       external: '#',
//       image: project2
//     },
    
//     {
//       title: 'MERN Stack Portfolio Website',
//       description: 'A responsive portfolio website built using the MERN stack (MongoDB, Express, React, Node.js) featuring dynamic content management and contact form functionality.',
//       tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
//       github: 'https://github.com/yuji0710',
//       external: '#',
//       image: project3
//     },
//   ];

//   return (
//     <section id="projects" className="py-24 px-6 bg-navy-dark">
//       <div className="container mx-auto">
//         <h2 className="section-heading">
//           <span className="text-highlight font-mono mr-2">03.</span>Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, i) => (
//             <Card key={i} className="bg-navy border border-slate/20 hover:border-highlight/50 transition-all duration-300 h-full flex flex-col">
//               <CardContent className="p-0">
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden bg-navy-dark h-48">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </div>
                
//                 <div className="p-6 flex-grow flex flex-col">
//                   <h3 className="text-slate-lighter text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-slate mb-4 flex-grow">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span 
//                         key={tagIndex} 
//                         className="text-xs font-mono text-slate-lighter bg-navy-dark px-2 py-1 rounded"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex space-x-4">
//                     <a 
//                       href={project.github} 
//                       className="text-slate-light hover:text-highlight transition-colors duration-300"
//                       aria-label="GitHub Repository"
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                     >
//                       <Github size={20} />
//                     </a>
//                     <a 
//                       href={project.external} 
//                       className="text-slate-light hover:text-highlight transition-colors duration-300"
//                       aria-label="Live Demo"
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                     >
//                       <Link size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         <div className="mt-12 text-center">
//           <a href="https://github.com/yuji0710" target="_blank" rel="noopener noreferrer" className="btn-primary">
//             View More Projects on GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
