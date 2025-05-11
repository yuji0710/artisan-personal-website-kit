
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Education', url: '#education' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="font-mono text-highlight text-lg font-semibold">
          Harsh Modi
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              className="nav-link"
            >
              <span className="text-highlight font-mono mr-1">{`0${i + 1}.`}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary ml-4"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-lighter hover:text-highlight"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-navy-light z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.url}
                className="text-slate-lighter hover:text-highlight text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-highlight font-mono mr-2">{`0${i + 1}.`}</span>
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mt-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
