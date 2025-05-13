
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create decoration element for the background
const createDecorativeElements = () => {
  // Create floating shapes container
  const floatingShapes = document.createElement('div');
  floatingShapes.className = 'floating-shapes';
  document.body.appendChild(floatingShapes);
  
  // Add various decorative shapes
  const shapes = ['circle', 'square', 'triangle', 'hexagon', 'plus'];
  const colors = ['#64ffda33', '#8892b030', '#a8b2d120', '#ccd6f625'];
  
  // Create 15 random shapes
  for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    shape.className = `floating-shape ${shapeType}`;
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.top = `${Math.random() * 100}vh`;
    shape.style.backgroundColor = color;
    shape.style.animationDelay = `${Math.random() * 10}s`;
    shape.style.animationDuration = `${Math.random() * 20 + 20}s`;
    
    floatingShapes.appendChild(shape);
  }
};

// Initialize floating shapes on load
window.addEventListener('DOMContentLoaded', createDecorativeElements);

createRoot(document.getElementById("root")!).render(<App />);
