
// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { GraduationCap, School } from "lucide-react";

// const Education = () => {
//   return (
//     <section id="education" className="py-24 px-6">
//       <div className="container mx-auto">
//         <h2 className="section-heading">
//           <span className="text-highlight font-mono mr-2">02.</span>Education
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* College Education */}
//           <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
//                 <img 
//                   src="assets/images/gls-naac.png" 
//                   alt="GLS University Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <CardTitle className="text-slate-lightest">BSc in Information Technology</CardTitle>
//                 <CardDescription className="text-slate">GLS University</CardDescription>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="text-slate space-y-2">
//                 <div className="flex items-center gap-2">
//                   <GraduationCap size={18} className="text-highlight" />
//                   <span>Expected graduation: March 2025</span>
//                 </div>
//                 <p className="text-sm mt-2">
//                   Currently pursuing Bachelor of Science in Information Technology, with focus on data science
//                   and machine learning applications.
//                 </p>
//                 <a 
//                   href="https://glsuniversity.ac.in/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-highlight text-sm hover:underline flex items-center mt-2"
//                 >
//                   Visit university website
//                 </a>
//               </div>
//             </CardContent>
//           </Card>

//           {/* School Education */}
//           <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
//                 <img 
//                   src="assets/images/logo.png" 
//                   alt="Diwan Ballubhai School Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <CardTitle className="text-slate-lightest">HSC & SSC</CardTitle>
//                 <CardDescription className="text-slate">Diwan Ballubhai School</CardDescription>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="text-slate space-y-2">
//                 <div className="flex items-center gap-2">
//                   <School size={18} className="text-highlight" />
//                   <span>Higher Secondary & Secondary Education</span>
//                 </div>
//                 <p className="text-sm mt-2">
//                   Completed both HSC and SSC in Gujarati medium, building a strong foundation for further
//                   academic pursuits in technology and information sciences.
//                 </p>
//                 <a 
//                   href="https://divanballubhai.edu.in/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-highlight text-sm hover:underline flex items-center mt-2"
//                 >
//                   Visit school website
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6, ease: 'easeOut' },
  }),
};

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="section-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
        >
          <span className="text-highlight font-mono mr-2">02.</span>Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* College Education */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.4}
          >
            <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
                  <img
                    src="assets/images/gls-naac.png"
                    alt="GLS University Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-slate-lightest">
                    BSc in Information Technology
                  </CardTitle>
                  <CardDescription className="text-slate">
                    GLS University
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-highlight" />
                    <span>Completed in April 2025</span>
                  </div>
                  <p className="text-sm mt-2">
                    Successfully completed a 3-year undergraduate program focused on core IT concepts.<br />
                    Gained practical knowledge in web development, databases, networking, and programming.<br />
                    Developed multiple projects using technologies like React, Node.js, and MongoDB.<br />
                    Explored data science, machine learning, and AI through elective subjects and hands-on assignments.<br />
                    Participated in workshops and coding events to enhance real-world problem-solving skills.
                  </p>
                  <a
                    href="https://glsuniversity.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight text-sm hover:underline flex items-center mt-2"
                  >
                    Visit university website
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* School Education */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
          >
            <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
                  <img
                    src="assets/images/logo.png"
                    alt="Diwan Ballubhai School Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <CardTitle className="text-slate-lightest">HSC & SSC</CardTitle>
                  <CardDescription className="text-slate">
                    Diwan Ballubhai School
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate space-y-2">
                  <div className="flex items-center gap-2">
                    <School size={18} className="text-highlight" />
                    <span>HSC: 2022 | SSC: 2020</span>
                  </div>
                  <p className="text-sm mt-2">
                    Completed both secondary and higher secondary education in Gujarati medium.<br />
                    Opted for science stream with computer subjects in HSC to build a tech foundation.<br />
                    Developed interest in coding and technology during school projects and activities.<br />
                    Took part in school-level competitions and science exhibitions.<br />
                    These years helped shape my direction toward a career in IT and data science.
                  </p>
                  <a
                    href="https://divanballubhai.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight text-sm hover:underline flex items-center mt-2"
                  >
                    Visit school website
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;




// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { GraduationCap, School } from "lucide-react";

// const Education = () => {
//   return (
//     <section id="education" className="py-24 px-6">
//       <div className="container mx-auto">
//         <h2 className="section-heading">
//           <span className="text-highlight font-mono mr-2">02.</span>Education
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* College Education */}
//           <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
//                 <img 
//                   src="assets/images/gls-naac.png" 
//                   alt="GLS University Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <CardTitle className="text-slate-lightest">BSc in Information Technology</CardTitle>
//                 <CardDescription className="text-slate">GLS University</CardDescription>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="text-slate space-y-2">
//                 <div className="flex items-center gap-2">
//                   <GraduationCap size={18} className="text-highlight" />
//                   <span>Completed in April 2025</span>
//                 </div>
//                 <p className="text-sm mt-2">
//                   Successfully completed a 3-year undergraduate program focused on core IT concepts.<br />
//                   Gained practical knowledge in web development, databases, networking, and programming.<br />
//                   Developed multiple projects using technologies like React, Node.js, and MongoDB.<br />
//                   Explored data science, machine learning, and AI through elective subjects and hands-on assignments.<br />
//                   Participated in workshops and coding events to enhance real-world problem-solving skills.
//                 </p>
//                 <a 
//                   href="https://glsuniversity.ac.in/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-highlight text-sm hover:underline flex items-center mt-2"
//                 >
//                   Visit university website
//                 </a>
//               </div>
//             </CardContent>
//           </Card>

//           {/* School Education */}
//           <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
//                 <img 
//                   src="assets/images/logo.png" 
//                   alt="Diwan Ballubhai School Logo" 
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <CardTitle className="text-slate-lightest">HSC & SSC</CardTitle>
//                 <CardDescription className="text-slate">Diwan Ballubhai School</CardDescription>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="text-slate space-y-2">
//                 <div className="flex items-center gap-2">
//                   <School size={18} className="text-highlight" />
//                   <span>HSC: 2022 | SSC: 2020</span>
//                 </div>
//                 <p className="text-sm mt-2">
//                   Completed both secondary and higher secondary education in Gujarati medium.<br />
//                   Opted for science stream with computer subjects in HSC to build a tech foundation.<br />
//                   Developed interest in coding and technology during school projects and activities.<br />
//                   Took part in school-level competitions and science exhibitions.<br />
//                   These years helped shape my direction toward a career in IT and data science.
//                 </p>
//                 <a 
//                   href="https://divanballubhai.edu.in/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-highlight text-sm hover:underline flex items-center mt-2"
//                 >
//                   Visit school website
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
