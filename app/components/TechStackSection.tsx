'use client';

import { motion } from "framer-motion";
import { Cpu, Database, Globe, Smartphone, Palette, Layers, Zap, ArrowRight } from "lucide-react";

const techStack = [
  { 
    name: "UI/UX Design", 
    icon: <Palette className="w-6 h-6" />,
    description: "Beautiful and intuitive interfaces that delight users"
  },
  { 
    name: "AI Solutions", 
    icon: <Cpu className="w-6 h-6" />,
    description: "Cutting-edge AI and machine learning applications"
  },
  { 
    name: "Blockchain", 
    icon: <Layers className="w-6 h-6" />,
    description: "Secure and decentralized blockchain solutions"
  },
  { 
    name: "CRM/ERP Systems", 
    icon: <Database className="w-6 h-6" />,
    description: "Custom business process automation"
  },
  { 
    name: "Web & Mobile Apps", 
    icon: <Smartphone className="w-6 h-6" />,
    description: "Cross-platform applications for all devices"
  },
  { 
    name: "Brand Identity", 
    icon: <Globe className="w-6 h-6" />,
    description: "Memorable brand experiences"
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" }
];

export default function TechStackSection() {
  return (
    <section id="expertise" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-pink-400 mb-4">
            Our Expertise
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Excel In</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We combine innovative technology with creative solutions to deliver exceptional results
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-pink-500/20 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center text-pink-400 mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400">{tech.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-pink-400 group-hover:text-pink-300 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-pink-400 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Ready to start your project?
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s build something amazing together
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get in touch with our team to discuss how we can help bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-white bg-gray-800 hover:bg-gray-700 transition-all border border-gray-700"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}