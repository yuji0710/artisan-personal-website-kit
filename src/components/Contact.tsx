
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically integrate with a form submission service
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">03.</span>Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-slate">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-lighter mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-navy-light border-slate/20 focus:border-highlight/50 text-slate-lighter"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-lighter mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-navy-light border-slate/20 focus:border-highlight/50 text-slate-lighter"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-lighter mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-navy-light border-slate/20 focus:border-highlight/50 text-slate-lighter h-32"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary">
                Send Message
              </Button>
            </form>
            
            <div className="flex space-x-6 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-highlight transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-highlight transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:example@example.com" 
                className="text-slate hover:text-highlight transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-navy-light p-8 rounded-lg border border-slate/10">
            <h3 className="text-xl font-bold text-slate-lighter mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-highlight mb-1">Location</h4>
                <p className="text-slate">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-mono text-highlight mb-1">Email</h4>
                <p className="text-slate">john.doe@example.com</p>
              </div>
              <div>
                <h4 className="font-mono text-highlight mb-1">Phone</h4>
                <p className="text-slate">(123) 456-7890</p>
              </div>
              <div>
                <h4 className="font-mono text-highlight mb-1">Availability</h4>
                <p className="text-slate">Open to freelance and full-time opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
