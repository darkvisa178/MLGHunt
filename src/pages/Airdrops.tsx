import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

const Airdrops = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate inputs
    if (!email || !walletAddress) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (walletAddress.length < 42) {
      setError('Please enter a valid wallet address');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Airdrops
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Airdrop Program</h2>
          <p className="text-lg mb-6">
            MLGHunt is committed to rewarding our community. Sign up for our airdrop program to receive free tokens and exclusive NFTs.
          </p>
          
          <div className="space-y-6">
            <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                  <span className="text-xl">🎁</span>
                </div>
                <h3 className="text-xl font-bold">Community Airdrop</h3>
              </div>
              <p className="mb-2">
                10,000 MLGHunt tokens will be distributed to early community members.
              </p>
              <div className="flex items-center text-yellow-400">
                <span className="mr-2">Status:</span>
                <span className="font-bold">Coming Soon</span>
              </div>
            </div>
            
            <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                  <span className="text-xl">🖼️</span>
                </div>
                <h3 className="text-xl font-bold">NFT Airdrop</h3>
              </div>
              <p className="mb-2">
                Limited edition MLGHunt NFTs for our most active community members.
              </p>
              <div className="flex items-center text-yellow-400">
                <span className="mr-2">Status:</span>
                <span className="font-bold">Phase 2</span>
              </div>
            </div>
            
            <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                  <span className="text-xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold">Game Rewards</h3>
              </div>
              <p className="mb-2">
                Play our DuckHunt game and other upcoming games to earn MLGHunt tokens.
              </p>
              <div className="flex items-center text-green-400">
                <span className="mr-2">Status:</span>
                <span className="font-bold">Active</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-purple-900 bg-opacity-50 backdrop-blur-md rounded-xl p-8 border-2 border-purple-700"
        >
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Register for Airdrops</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="wallet" className="block text-sm font-medium mb-2">
                    Wallet Address (ERC-20)
                  </label>
                  <input
                    type="text"
                    id="wallet"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full px-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    placeholder="0x..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-purple-600 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm">
                    I agree to receive emails about MLGHunt airdrops and promotions
                  </label>
                </div>
                
                {error && (
                  <div className="bg-red-900 bg-opacity-50 text-white px-4 py-3 rounded-lg flex items-center">
                    <AlertCircle size={18} className="mr-2" />
                    {error}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {loading ? 'Registering...' : 'Register for Airdrops'}
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
              <p className="text-lg mb-6">
                Thank you for registering for MLGHunt airdrops. We'll notify you at {email} when the next airdrop is available.
              </p>
              <div className="bg-purple-800 bg-opacity-50 p-4 rounded-lg inline-block">
                <p className="font-medium">Stay tuned for updates!</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-16 bg-gradient-to-r from-purple-800 to-yellow-700 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-2">Invite Friends, Get Rewards</h2>
            <p className="text-lg">
              Refer your friends to MLGHunt and earn additional tokens for each successful referral.
            </p>
          </div>
          <motion.button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Referral Link
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Airdrops;
