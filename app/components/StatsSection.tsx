'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Check, Users, Code, ThumbsUp } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "4.9/5",
    label: "Average Rating",
    icon: <Star className="w-8 h-8" />,
    suffix: "stars",
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: 2,
    value: "50+",
    label: "Projects Completed",
    icon: <Code className="w-8 h-8" />,
    suffix: "and counting",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 3,
    value: "100%",
    label: "Client Satisfaction",
    icon: <ThumbsUp className="w-8 h-8" />,
    suffix: "success rate",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: 4,
    value: "10+", 
    label: "Team Members",
    icon: <Users className="w-8 h-8" />,
    suffix: "talented professionals",
    color: "from-purple-400 to-pink-500"
  }
];

export default function StatsSection() {
  const controls = useAnimation();
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
    
    const handleScroll = () => {
      if (!hasMounted) return;
      
      const y = window.scrollY;
      controls.start({
        y: -y * 0.03,
        transition: { type: "spring", stiffness: 100, damping: 30 }
      });
    };
    
    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      // Trigger initial position
      handleScroll();
    }, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, hasMounted]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Our Impact</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            By The <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Numbers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${stat.color}/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.suffix}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-700/50 group-hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                    <span className="text-xs font-medium text-gray-400">Achieved in 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-gray-800" />
              ))}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-300">Trusted by 50+ clients worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
