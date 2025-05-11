
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">02.</span>Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* College Education */}
          <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
                <img 
                  src="https://glsuniversity.ac.in/public/img/header-logo.png" 
                  alt="GLS University Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <CardTitle className="text-slate-lightest">BSc in Information Technology</CardTitle>
                <CardDescription className="text-slate">GLS University</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-highlight" />
                  <span>Expected graduation: March 2025</span>
                </div>
                <p className="text-sm mt-2">
                  Currently pursuing Bachelor of Science in Information Technology, with focus on data science
                  and machine learning applications.
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

          {/* School Education */}
          <Card className="bg-navy-light border-slate/20 overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white p-2">
                <img 
                  src="https://divanballubhai.edu.in/wp-content/uploads/2021/06/cropped-logo-dbs.jpg" 
                  alt="Diwan Ballubhai School Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <CardTitle className="text-slate-lightest">HSC & SSC</CardTitle>
                <CardDescription className="text-slate">Diwan Ballubhai School</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate space-y-2">
                <div className="flex items-center gap-2">
                  <School size={18} className="text-highlight" />
                  <span>Higher Secondary & Secondary Education</span>
                </div>
                <p className="text-sm mt-2">
                  Completed both HSC and SSC in Gujarati medium, building a strong foundation for further
                  academic pursuits in technology and information sciences.
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
        </div>
      </div>
    </section>
  );
};

export default Education;
