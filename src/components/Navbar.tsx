import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWallet } from '../context/WalletContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { connectWallet, address } = useWallet();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">🧙‍♂️</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500"
              whileHover={{ scale: 1.05 }}
            >
              MLGHunt
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/DuckHunt-game" className="hover:text-yellow-400 transition-colors">DuckHunt Game</Link>
            <Link to="/roadmap" className="hover:text-yellow-400 transition-colors">Roadmap</Link>
            <Link to="/airdrops" className="hover:text-yellow-400 transition-colors">Airdrops</Link>
            <Link to="/nft-marketplace" className="hover:text-yellow-400 transition-colors">NFT Marketplace</Link>
            
            <motion.button
              onClick={connectWallet}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-yellow-500 px-4 py-2 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet size={18} />
              <span>{address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'Connect Wallet'}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/DuckHunt-game" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>DuckHunt Game</Link>
              <Link to="/roadmap" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Roadmap</Link>
              <Link to="/airdrops" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>Airdrops</Link>
              <Link to="/nft-marketplace" className="hover:text-yellow-400 transition-colors" onClick={toggleMenu}>NFT Marketplace</Link>
              
              <motion.button
                onClick={() => {
                  connectWallet();
                  toggleMenu();
                }}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-yellow-500 px-4 py-2 rounded-full font-medium w-full justify-center"
                whileTap={{ scale: 0.95 }}
              >
                <Wallet size={18} />
                <span>{address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'Connect Wallet'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;