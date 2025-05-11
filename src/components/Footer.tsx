
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-navy-dark border-t border-slate/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate text-sm mb-4 md:mb-0">
            Designed & Built by John Doe © {new Date().getFullYear()}
          </p>
          
          <div className="text-sm font-mono text-slate-light">
            <a 
              href="#hero" 
              className="hover:text-highlight transition-colors duration-300"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
