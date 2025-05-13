
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6, ease: 'easeOut' },
  }),
};

const About = () => {
  const skills = [
    'Python', 'Machine Learning', 'SQL',
    'Java', 'C++', 'C', 'MERN Stack', 'Bash'
  ];

  const paragraphs = [
    `Hello! I'm Harsh, a passionate data scientist and developer currently completed my BSc in Information Technology, set to graduate in March 2025. My journey in tech began with programming languages like C, C++, and Java, but I quickly found my passion in the world of data science and machine learning.`,
    `I have a strong foundation in machine learning, with experience in core algorithms such as linear regression, logistic regression, decision trees, random forests, support vector machines (SVM), K-means clustering, and principal component analysis (PCA). I’m proficient in Python and its essential libraries like pandas, NumPy, and scikit-learn for data analysis and model development.`,
    `I also have hands-on experience in data preprocessing, feature engineering, and model evaluation techniques. Currently, I’m working on real-world projects like real estate price prediction, which help me deepen my practical understanding of how machine learning can solve real-life challenges.`,
    `I'm particularly interested in building intelligent systems that extract meaningful insights from data and contribute to impactful solutions. Throughout my academic journey, I’ve combined my software development skills and data science expertise to create innovative, data-driven applications.`,
    `Here are a few technologies I work with:`
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="section-heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
        >
          <span className="text-highlight font-mono mr-2">01.</span>About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-slate">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.3 + i * 0.2}
              >
                {text}
              </motion.p>
            ))}

            <motion.ul
              className="grid grid-cols-2 gap-2 mt-5"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1.5}
            >
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-highlight mr-2">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1.7}
          >
            <div className="relative rounded-md overflow-hidden w-full max-w-[300px] mx-auto">
              <div className="aspect-square bg-navy-light rounded-md hover:shadow-xl transition-all duration-300">
                <div className="h-full w-full flex items-center justify-center text-slate text-lg">
                  <img
                    src="assets/images/me.jpeg"
                    alt="Harsh's Portrait"
                    className="object-cover w-full h-full rounded-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-highlight rounded-md translate-x-5 translate-y-5 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;



// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const skills = [
//     'Python', 'Machine Learning', 'SQL', 'React.js',
//     'Java', 'C++', 'C', 'MERN Stack', 'Bash'
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay, duration: 0.6, ease: 'easeOut' }
//     })
//   };

//   return (
//     <section id="about" className="py-24 px-6">
//       <div className="container mx-auto">
//         <motion.h2
//           className="section-heading"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           custom={0.2}
//         >
//           <span className="text-highlight font-mono mr-2">01.</span>About Me
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-12">
//           <div className="md:col-span-2 space-y-4 text-slate">
//             {[
//               "Hello! I'm Harsh, a passionate data scientist and developer currently completing my BSc in Information Technology, set to graduate in March 2025. My journey in tech began with programming languages like C, C++, and Java, but I quickly found my passion in the world of data science and machine learning.",
//               "I have a strong foundation in machine learning, with experience in core algorithms such as linear regression, logistic regression, decision trees, random forests, support vector machines (SVM), K-means clustering, and principal component analysis (PCA). I’m proficient in Python and its essential libraries like pandas, NumPy, and scikit-learn for data analysis and model development.",
//               "I also have hands-on experience in data preprocessing, feature engineering, and model evaluation techniques. Currently, I’m working on real-world projects like real estate price prediction, which help me deepen my practical understanding of how machine learning can solve real-life challenges.",
//               "I'm particularly interested in building intelligent systems that extract meaningful insights from data and contribute to impactful solutions. Throughout my academic journey, I’ve combined my software development skills and data science expertise to create innovative, data-driven applications.",
//               "Here are a few technologies I work with:"
//             ].map((text, i) => (
//               <motion.p
//                 key={i}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 custom={0.3 + i * 0.2}
//               >
//                 {text}
//               </motion.p>
//             ))}

//             <motion.ul
//               className="grid grid-cols-2 gap-2 mt-5"
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               custom={1.4}
//             >
//               {skills.map((skill, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-highlight mr-2">▹</span>
//                   <span className="font-mono text-sm">{skill}</span>
//                 </li>
//               ))}
//             </motion.ul>
//           </div>

//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
//             viewport={{ once: true }}
//           >
//             <div className="relative rounded-md overflow-hidden w-full max-w-[300px] mx-auto">
//               <div className="aspect-square bg-navy-light rounded-md hover:shadow-xl transition-all duration-300">
//                 <div className="h-full w-full flex items-center justify-center text-slate text-lg">
//                   <img
//                     src="assets/images/me.jpeg"
//                     alt="Harsh's Portrait"
//                     className="object-cover w-full h-full rounded-md hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               </div>
//               <div className="absolute inset-0 border-2 border-highlight rounded-md translate-x-5 translate-y-5 -z-10"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
