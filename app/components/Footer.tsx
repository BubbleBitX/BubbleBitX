'use client';

import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Bubblebit<span className="text-white">X</span>
              </span>
            </h3>
            <p className="text-gray-400">
              We create innovative solutions that make a difference in people's lives through technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/bubblebitx/posts/?feedView=all" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-pink-400 transition-colors flex items-center">About Us</a></li>
              <li><a href="/services" className="hover:text-pink-400 transition-colors flex items-center">Our Services</a></li>
              <li><a href="/products" className="hover:text-pink-400 transition-colors flex items-center">Products</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors flex items-center">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="/products#gamecre8" className="hover:text-pink-400 transition-colors flex items-center">GameCre8</a></li>
              <li><a href="/products#forhumans" className="hover:text-pink-400 transition-colors flex items-center">ForHumans AI</a></li>
              <li><a href="/products#coming-soon" className="hover:text-pink-400 transition-colors flex items-center">Coming Soon</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-pink-400 flex-shrink-0" />
                <a href="mailto:contact@bubblebitx.com" className="hover:text-pink-400 transition-colors">contact@bubblebitx.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-pink-400 flex-shrink-0" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-pink-400 flex-shrink-0" />
                <span>Mumbai , India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} BubblebitX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
