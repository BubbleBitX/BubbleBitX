'use client';

import { useState } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Fast Service', path: '/services' },
    { name: 'Our Products', path: '/products' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', external: false },
    { icon: <Facebook size={20} />, href: '#', external: false },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/company/bubblebitx/posts/?feedView=all',
      external: true,
    },
  ];

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1
      },
    },
  } as const;

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <Link href="/">
            <div className="relative h-10 w-32">
              <Image
                src="/Logo.png" // Ensure this file exists in public/Logo.png
                alt="BubbleBitX Logo"
                fill
                sizes="128px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="px-5 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-3 ml-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div 
          className="md:hidden z-50"
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-gray-300" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-sm z-40 md:hidden pt-24 px-4"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div className="flex flex-col items-center space-y-6 w-full max-w-md mx-auto">
              {navItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="w-full">
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 px-6 text-xl font-medium text-gray-300 hover:text-white transition-colors text-center hover:bg-gray-800/50 rounded-lg w-full"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="flex space-x-6 pt-4 pb-8"
                variants={itemVariants}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}