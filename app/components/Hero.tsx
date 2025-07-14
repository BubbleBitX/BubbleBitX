'use client';

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

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
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-medium flex items-center mx-auto gap-2 group"
            >
              LET&apos;S MAKE BUBBLES
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
