'use client';

import { motion } from "framer-motion";
import { Rocket, Users, Globe, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Lightning Fast",
    description: "We deliver quality work with speed and efficiency, ensuring your projects launch on time, every time.",
    icon: <Rocket className="w-12 h-12 text-pink-500" />,
  },
  {
    title: "Dedicated Team",
    description: "Our passionate technical professionals are committed to turning your vision into reality with precision.",
    icon: <Users className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Global Reach",
    description: "Whether you're local or international, we adapt our workflow to fit your timezone and business needs.",
    icon: <Globe className="w-12 h-12 text-blue-400" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider text-pink-400 uppercase">Why Choose Us</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            Building Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              <div className="mt-6 pt-4 border-t border-gray-700/50 group-hover:border-pink-500/30 transition-colors">
                <a href="#contact" className="text-sm font-medium text-pink-400 hover:text-pink-300 inline-flex items-center">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
