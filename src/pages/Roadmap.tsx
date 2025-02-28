import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Launch & Community Building",
    items: [
      "Launch on Pump.fun",
      "Website development",
      "Social media presence",
      "Community building",
      "Initial marketing campaign"
    ],
    icon: "🚀",
    color: "from-yellow-500 to-yellow-600",
    status: "completed"
  },
  {
    phase: "Phase 2",
    title: "Ecosystem Development",
    items: [
      "DuckHunt game integration",
      "Community events",
      "Partnerships with other projects",
      "Liquidity pool expansion",
      "First community airdrop"
    ],
    icon: "🎮",
    color: "from-purple-500 to-purple-600",
    status: "in-progress"
  },
  {
    phase: "Phase 3",
    title: "NFT Marketplace",
    items: [
      "NFT marketplace development",
      "Artist collaborations",
      "Limited edition NFT drops",
      "NFT staking mechanism",
      "Community governance for NFT curation"
    ],
    icon: "🎨",
    color: "from-pink-500 to-pink-600",
    status: "upcoming"
  },
  {
    phase: "Phase 4",
    title: "Expansion & Utility",
    items: [
      "Cross-chain integration",
      "Additional games and utilities",
      "MLGHunt DAO formation",
      "Decentralized governance",
      "Community treasury"
    ],
    icon: "🌐",
    color: "from-blue-500 to-blue-600",
    status: "upcoming"
  },
  {
    phase: "Phase 5",
    title: "Metaverse Integration",
    items: [
      "MLGHunt metaverse land",
      "Virtual events and gatherings",
      "Play-to-earn ecosystem",
      "Virtual marketplace",
      "Metaverse partnerships"
    ],
    icon: "🌌",
    color: "from-indigo-500 to-indigo-600",
    status: "upcoming"
  }
];

const Roadmap = () => {
  return (
    <div className="py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MLGHunt Roadmap
      </motion.h1>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600 hidden md:block"></div>
        
        <div className="space-y-12 relative">
          {roadmapItems.map((item, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-yellow-500 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-purple-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-700 hover:border-yellow-500 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-yellow-500 flex items-center justify-center mr-4 md:hidden">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.phase}</h3>
                        <h4 className="text-lg text-yellow-400">{item.title}</h4>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {item.items.map((listItem, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                        >
                          <span className="text-yellow-400 mr-2">•</span>
                          {listItem}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${item.color} ${
                        item.status === 'completed' ? 'w-full' : 
                        item.status === 'in-progress' ? 'w-1/2' : 'w-0'
                      } transition-all duration-1000 mr-3`}></div>
                      <span className={
                        item.status === 'completed' ? 'text-green-400' : 
                        item.status === 'in-progress' ? 'text-yellow-400' : 'text-gray-400'
                      }>
                        {item.status === 'completed' ? 'Completed' : 
                         item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="mt-16 bg-gradient-to-r from-purple-800 to-yellow-700 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Join us on this exciting journey!</h2>
        <p className="text-lg mb-6">
          The MLGHunt roadmap is a living document that will evolve with our community's feedback and the changing landscape of cryptocurrency.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="hhttps://x.com/mlg_hunt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Follow on Twitter
          </a>
          <a 
            href="t.me/MLGHuntBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-colors"
          >
            Join Telegramm
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;
