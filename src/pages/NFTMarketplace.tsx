import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

// Sample NFT data
const nftData = [
  {
    id: 1,
    name: "MLGHunt #001",
    description: "The original MLGHunt with psychedelic powers.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: "0.05 ETH",
    creator: "MLGHunt Team",
    rarity: "Legendary",
    category: "Original"
  },
  {
    id: 2,
    name: "Psychedelic Mushroom #42",
    description: "A rare psychedelic mushroom from the MLGHunt universe.",
    image: "https://images.unsplash.com/photo-1647437835152-09c7a9e88a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: "0.03 ETH",
    creator: "Mushroom Master",
    rarity: "Rare",
    category: "Collectible"
  },
  {
    id: 3,
    name: "MLG Sunglasses",
    description: "The iconic MLG sunglasses worn by the MLGHunt himself.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    price: "0.02 ETH",
    creator: "PixelArtist",
    rarity: "Uncommon",
    category: "Accessory"
  },
  {
    id: 4,
    name: "MLGHunt's Potion",
    description: "A magical potion brewed by the MLGHunt.",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: "0.01 ETH",
    creator: "PotionMaker",
    rarity: "Common",
    category: "Consumable"
  },
  {
    id: 5,
    name: "MLG Landscape",
    description: "A psychedelic landscape from the MLGHunt universe.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: "0.04 ETH",
    creator: "LandscapeArtist",
    rarity: "Rare",
    category: "Art"
  },
  {
    id: 6,
    name: "MLGHunt's Staff",
    description: "The powerful staff used by the MLGHunt.",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    price: "0.06 ETH",
    creator: "StaffCrafter",
    rarity: "Legendary",
    category: "Weapon"
  }
];

const NFTMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [cart, setCart] = useState<number[]>([]);
  const { address, connectWallet } = useWallet();

  const categories = ['All', 'Original', 'Collectible', 'Accessory', 'Consumable', 'Art', 'Weapon'];
  const rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary'];

  const filteredNFTs = nftData.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          nft.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          nft.creator.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || nft.category === selectedCategory;
    const matchesRarity = selectedRarity === 'All' || nft.rarity === selectedRarity;
    
    return matchesSearch && matchesCategory && matchesRarity;
  });

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(itemId => itemId !== id));
  };

  const handleCheckout = () => {
    if (!address) {
      connectWallet();
      return;
    }
    
    alert(`Checkout functionality would connect to the blockchain here. Items: ${cart.join(', ')}`);
  };

  return (
    <div className="py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        NFT Marketplace
      </motion.h1>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search NFTs, collections, or creators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="relative">
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 bg-purple-800 bg-opacity-50 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              >
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity}>{rarity}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredNFTs.map((nft, index) => (
          <motion.div
            key={nft.id}
            className="bg-purple-900 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-purple-700 hover:border-yellow-500 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={nft.image} 
                alt={nft.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-purple-900 bg-opacity-70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                {nft.rarity}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{nft.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-400">Creator</p>
                  <p className="font-medium">{nft.creator}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="font-bold text-yellow-400">{nft.price}</p>
                </div>
              </div>
              
              {cart.includes(nft.id) ? (
                <motion.button
                  onClick={() => removeFromCart(nft.id)}
                  className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Remove from Cart
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => addToCart(nft.id)}
                  className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Cart Section */}
      {cart.length > 0 && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-purple-900 bg-opacity-90 backdrop-blur-md p-4 border-t-2 border-purple-700 z-40"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <ShoppingCart size={24} className="mr-2" />
              <span className="font-bold">{cart.length} item{cart.length !== 1 ? 's' : ''} in cart</span>
            </div>
            
            <div className="flex items-center">
              <p className="mr-6 font-bold text-yellow-400">
                Total: {cart.reduce((total, id) => {
                  const nft = nftData.find(n => n.id === id);
                  return total + parseFloat(nft?.price.split(' ')[0] || '0');
                }, 0).toFixed(2)} ETH
              </p>
              
              <motion.button
                onClick={handleCheckout}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-2 px-6 rounded-full flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {address ? 'Checkout' : 'Connect Wallet to Checkout'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Coming Soon Section */}
      <motion.div 
        className="mt-8 bg-gradient-to-r from-purple-800 to-yellow-700 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Create Your Own NFTs</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Soon you'll be able to create and mint your own MLGHunt-themed NFTs directly on our platform. Stay tuned for updates!
        </p>
        <motion.button
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full opacity-70 cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
        >
          Coming Soon
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NFTMarketplace;