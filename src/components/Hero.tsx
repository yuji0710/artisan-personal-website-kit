
// import { useEffect, useState } from 'react';
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 px-6">
//       <div className="container mx-auto">
//         <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[300ms]`}>
//           <p className="font-mono text-highlight mb-5">Hi, my name is</p>
//         </div>
        
//         <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[600ms]`}>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4">
//             Harsh Modi.
//           </h1>
//         </div>
        
//         <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[900ms]`}>
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6">
//             I build data-driven solutions.
//           </h2>
//         </div>
        
//         <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[1200ms] max-w-xl`}>
//           <p className="text-slate mb-12">
//             I'm a data scientist and software developer with a BSc in IT, graduating in March 2025. 
//             I specialize in machine learning, data analysis, and full-stack development, creating intelligent solutions 
//             that solve real-world problems.
//           </p>
//         </div>
        
//         <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[1500ms]`}>
//           <a href="#projects" className="btn-primary">
//             View My Projects
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  })
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="container mx-auto">
        {mounted && (
          <>
            <motion.p
              className="font-mono text-highlight mb-5"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.2}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.4}
            >
              Harsh Modi.
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.6}
            >
              I build data-driven solutions.
            </motion.h2>

            <motion.p
              className="text-slate mb-12 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.8}
            >
              I'm a data scientist and software developer with a BSc in IT, graduating in March 2025. 
              I specialize in machine learning, data analysis, and full-stack development, creating intelligent solutions 
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1.0}
            >
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
