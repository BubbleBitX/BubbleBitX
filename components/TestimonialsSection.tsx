'use client';

import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "BubbleBitX transformed our digital presence completely. Their team delivered beyond our expectations with innovative solutions and exceptional attention to detail.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechNova",
    rating: 5,
    avatar: "/avatars/avatar1.jpg"
  },
  {
    id: 2,
    quote: "The level of professionalism and technical expertise at BubbleBitX is unmatched. They delivered our project ahead of schedule with zero compromises on quality.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnoVentures",
    rating: 5,
    avatar: "/avatars/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Working with BubbleBitX was a game-changer for our startup. Their creative approach and technical prowess helped us build a product that truly stands out.",
    author: "Priya Patel",
    role: "Product Lead",
    company: "StartUpX",
    rating: 5,
    avatar: "/avatars/avatar3.jpg"
  },
  {
    id: 4,
    quote: "Exceptional service and outstanding results! BubbleBitX understood our vision and brought it to life with precision and creativity.",
    author: "David Kim",
    role: "Marketing Director",
    company: "GrowthHack",
    rating: 5,
    avatar: "/avatars/avatar4.jpg"
  },
  {
    id: 5,
    quote: "The team at BubbleBitX is incredibly talented and professional. They delivered our project on time and within budget, exceeding our expectations.",
    author: "Emily Rodriguez",
    role: "Founder & CEO",
    company: "NovaTech",
    rating: 5,
    avatar: "/avatars/avatar5.jpg"
  },
  {
    id: 6,
    quote: "BubbleBitX's technical expertise and creative solutions helped us solve complex challenges and achieve our business goals efficiently.",
    author: "James Wilson",
    role: "CTO",
    company: "CloudScale",
    rating: 5,
    avatar: "/avatars/avatar6.jpg"
  },
];

export default function TestimonialsSection() {
  const controls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      controls.start({
        y: -y * 0.05,
        transition: { type: "spring", stiffness: 100, damping: 30 }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black/90">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider text-pink-400 uppercase">Testimonials</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -right-10 bottom-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-pink-400/30 mb-4" />
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center mt-8 pt-6 border-t border-gray-700/50 group-hover:border-pink-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=7e22ce&color=fff`;
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role} • {testimonial.company}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">Join our growing list of satisfied clients</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
