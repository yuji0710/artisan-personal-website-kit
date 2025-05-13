
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">
          <span className="text-highlight font-mono mr-2">04.</span>Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-navy-light p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform">
              <h3 className="text-2xl font-bold text-slate-lighter mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-navy rounded-lg">
                    <Mail className="text-highlight" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-lighter font-medium">Email</p>
                    <a href="mailto:harshmodi@example.com" className="text-highlight hover:underline">
                      harshmodi@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-navy rounded-lg">
                    <Github className="text-highlight" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-lighter font-medium">GitHub</p>
                    <a 
                      href="https://github.com/yuji0710" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-highlight hover:underline"
                    >
                      github.com/yuji0710
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-navy rounded-lg">
                    <Linkedin className="text-highlight" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-lighter font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/harsh-modi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-highlight hover:underline"
                    >
                      linkedin.com/in/harsh-modi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-navy rounded-lg">
                    <Instagram className="text-highlight" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-lighter font-medium">Instagram</p>
                    <a 
                      href="https://instagram.com/harsh.modi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-highlight hover:underline"
                    >
                      @harsh.modi
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate/20">
                <h4 className="text-xl font-bold text-slate-lighter mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/yuji0710" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-navy rounded-full hover:bg-navy-dark transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-highlight" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/harsh-modi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-navy rounded-full hover:bg-navy-dark transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-highlight" />
                  </a>
                  <a 
                    href="mailto:harshmodi@example.com" 
                    className="p-3 bg-navy rounded-full hover:bg-navy-dark transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} className="text-highlight" />
                  </a>
                  <a 
                    href="https://instagram.com/harsh.modi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-navy rounded-full hover:bg-navy-dark transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-highlight" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-slate-lighter">Send Me a Message</h3>
            <p className="text-slate">
              Currently looking for opportunities in data science and software development. 
              Feel free to reach out if you have a question or want to discuss potential collaborations!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-lighter mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-navy border-slate/20 focus:border-highlight/50 text-slate-lighter"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-lighter mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-navy border-slate/20 focus:border-highlight/50 text-slate-lighter"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-lighter mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-navy border-slate/20 focus:border-highlight/50 text-slate-lighter"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-lighter mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Harsh, I'd like to talk about..."
                  className="bg-navy border-slate/20 focus:border-highlight/50 text-slate-lighter h-40"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full sm:w-auto flex items-center gap-2">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
