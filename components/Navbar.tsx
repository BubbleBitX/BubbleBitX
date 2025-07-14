'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Use scroll handler once — without referencing state inside handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 👈 Only run once

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Fast Service', path: '/services' },
    { name: 'Our Products', path: '/products' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: 'Instagram', href: '#', external: false },
    { icon: <Facebook size={20} />, label: 'Facebook', href: '#', external: false },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/bubblebitx/posts/?feedView=all', external: true }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <a href="/" className="block">
            <img
              src="/Logo.png"
              alt="BubblebitX Logo"
              className={`h-12 md:h-16 transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
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
              aria-label={link.label}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 px-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : ''}
                aria-label={link.label}
                className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
