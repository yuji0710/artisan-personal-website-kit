
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PaintBucket, Palette, Brush } from "lucide-react";

const DrawingArts = () => {
  const artworks = [
    {
      id: 1,
      title: "Abstract Data Visualization",
      description: "A creative interpretation of data patterns using vibrant colors.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      category: "Digital Art"
    },
    {
      id: 2,
      title: "Neural Network Imagination",
      description: "Visual representation of connected nodes in a neural network.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      category: "Mixed Media"
    },
    {
      id: 3,
      title: "Code as Art",
      description: "The beauty of programming visualized as an artistic expression.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Digital Illustration"
    },
    {
      id: 4,
      title: "Creative Innovation",
      description: "Where technology meets artistic creativity.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      category: "Concept Art"
    },
  ];

  return (
    <section id="drawing-arts" className="py-24 px-6 bg-navy">
      <div className="container mx-auto">
        <h2 className="section-heading mb-12">
          <span className="text-highlight font-mono mr-2">03.</span>Drawing Arts
        </h2>

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-navy-light rounded-lg">
              <Palette size={24} className="text-highlight" />
            </div>
            <h3 className="text-2xl font-bold text-slate-lighter">My Creative Side</h3>
          </div>
          <p className="text-slate max-w-3xl">
            Beyond coding and data science, I express my creativity through digital art and illustrations. 
            These works represent my visual thinking process and how I conceptualize complex ideas through art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {artworks.map((art) => (
            <div 
              key={art.id} 
              className="bg-navy-light rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-slate/10"
            >
              <div className="w-full">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-slate-lighter">{art.title}</h4>
                  <span className="text-xs px-3 py-1 bg-navy rounded-full text-highlight">
                    {art.category}
                  </span>
                </div>
                <p className="text-slate">{art.description}</p>
                
                <div className="mt-5 flex justify-between items-center">
                  {art.id % 2 === 0 ? (
                    <div className="flex items-center gap-2">
                      <PaintBucket size={16} className="text-highlight" />
                      <span className="text-sm text-slate">Digital Creation</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Brush size={16} className="text-highlight" />
                      <span className="text-sm text-slate">Creative Visualization</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrawingArts;
