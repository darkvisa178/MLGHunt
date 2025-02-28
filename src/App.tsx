import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DuckHuntGame from './pages/DuckHuntGame';
import Roadmap from './pages/Roadmap';
import Airdrops from './pages/Airdrops';
import NFTMarketplace from './pages/NFTMarketplace';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-yellow-600 text-white">
          <motion.div
            className="fixed inset-0 pointer-events-none z-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  rotate: Math.random() * 360 + 360,
                  scale: [
                    Math.random() * 0.5 + 0.5,
                    Math.random() * 0.7 + 0.3,
                    Math.random() * 0.5 + 0.5,
                  ],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {i % 3 === 0 ? (
                  <span className="text-4xl md:text-6xl">🍄</span>
                ) : i % 3 === 1 ? (
                  <span className="text-4xl md:text-6xl">⚡</span>
                ) : (
                  <span className="text-4xl md:text-6xl">🔥</span>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/DuckHunt-game" element={<DuckHuntGame />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/airdrops" element={<Airdrops />} />
                <Route path="/nft-marketplace" element={<NFTMarketplace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;