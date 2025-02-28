import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500">MLGHunt</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">
              A new revolution in cryptocurrency - easy, fast, and fun. Join the MLGHunt community today!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy on Pump.fun
                <ArrowRight className="ml-2" size={18} />
              </motion.a>
              <Link to="/DuckHunt-game">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Play DuckHunt Game
                  <span className="ml-2">🎮</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-8xl md:text-9xl">🧙‍♂️</span>
                </div>
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <span className="text-4xl md:text-5xl">🍄</span>
                </div>
                <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
                  <span className="text-4xl md:text-5xl">⚡</span>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/3">
                  <span className="text-4xl md:text-5xl">🔥</span>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-purple-500 bg-opacity-30 filter blur-3xl rounded-full z-0"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MLGHunt Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Fast Transactions",
              description: "Lightning-fast transactions with minimal fees on the blockchain."
            },
            {
              icon: "🎮",
              title: "Gaming Integration",
              description: "Play games and earn MLGHunt tokens while having fun."
            },
            {
              icon: "🎨",
              title: "NFT Marketplace",
              description: "Create, buy, and sell unique digital assets on our NFT marketplace."
            },
            {
              icon: "🍄",
              title: "Psychedelic Community",
              description: "Join our vibrant community of crypto enthusiasts and meme lovers."
            },
            {
              icon: "🔒",
              title: "Secure Wallet",
              description: "Your assets are protected with state-of-the-art security measures."
            },
            {
              icon: "🎁",
              title: "Regular Airdrops",
              description: "Participate in regular airdrops and earn free tokens."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:bg-purple-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <motion.div 
          className="bg-gradient-to-r from-purple-800 to-yellow-700 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join the MLGHunt revolution?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't miss out on the next big thing in cryptocurrency. Get your MLGHunt tokens today and become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy on Pump.fun
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
            <Link to="/airdrops">
              <motion.button
                className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Airdrop
                <span className="ml-2">🎁</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;