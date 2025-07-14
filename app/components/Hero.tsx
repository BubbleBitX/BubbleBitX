'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const BubbleButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createBubble = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setBubbles(prev => [
      ...prev.slice(-4), // Keep only the last 4 bubbles
      {
        id: Date.now(),
        x,
        y,
        size: Math.random() * 20 + 10
      }
    ]);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={createBubble}
      className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 group"
    >
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.span
            key={bubble.id}
            initial={{
              x: bubble.x - bubble.size / 2,
              y: bubble.y - bubble.size / 2,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              x: bubble.x - bubble.size / 2,
              y: bubble.y - bubble.size / 2,
              scale: [0, 1.5, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            style={{
              width: bubble.size,
              height: bubble.size,
              position: 'absolute',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
      <motion.span 
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="flex items-center justify-center gap-2 w-full"
      >
        LET'S MAKE BUBBLES
        <span className="group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </span>
      </motion.span>
    </button>
  );
};

export default function Hero() {
  return (
    <section className="relative bg-black text-white -mt-[1px]">
      <div className="min-h-screen w-full flex items-center pt-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                BubbleBit<span className="text-blue-300">X</span>
              </span>
            </h1>
            
            <p className="text-xl font-medium text-pink-400 mb-6">Trust | Achieve | Lead</p>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              We are a young, ready to go technical team of people, where we take any work passionately.
            </p>
            <p className="text-lg text-gray-300 mb-10">
              Ping us any time here to make your solutions and businesses stand out and make your dream exceptional!
            </p>
            
            <div className="relative flex justify-center">
              <BubbleButton />
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
