
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[300ms]`}>
          <p className="font-mono text-highlight mb-5">Hi, my name is</p>
        </div>
        
        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[600ms]`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4">
            John Doe.
          </h1>
        </div>
        
        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[900ms]`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6">
            I build things for the web.
          </h2>
        </div>
        
        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[1200ms] max-w-xl`}>
          <p className="text-slate mb-12">
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
        </div>
        
        <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'} delay-[1500ms]`}>
          <a href="#projects" className="btn-primary">
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
