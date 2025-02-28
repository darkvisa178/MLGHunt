import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Disc as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 bg-opacity-80 backdrop-blur-md py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl">🧙‍♂️</span>
              </motion.div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500">
                MLGHunt
              </span>
            </div>
            <p className="text-gray-300 mt-2 max-w-md">
              A new revolution in cryptocurrency - easy, fast, and fun. Join the MLGHunt community today!
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#1DA1F2' }}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#6e5494' }}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#5865F2' }}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Discord size={24} />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MLGHunt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;