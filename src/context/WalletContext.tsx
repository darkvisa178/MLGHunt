import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  address: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  provider: any;
  isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  provider: null,
  isConnecting: false,
});

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Check if wallet was previously connected
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
      setAddress(savedAddress);
      checkConnection();
    }
  }, []);

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAddress(accounts[0].address);
          localStorage.setItem('walletAddress', accounts[0].address);
        } else {
          setAddress(null);
          localStorage.removeItem('walletAddress');
        }
      } catch (error) {
        console.error('Error checking connection:', error);
        setAddress(null);
        localStorage.removeItem('walletAddress');
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        
        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          localStorage.setItem('walletAddress', accounts[0]);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert('Please install MetaMask or another Ethereum wallet to connect.');
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    localStorage.removeItem('walletAddress');
  };

  return (
    <WalletContext.Provider
      value={{
        address,
        connectWallet,
        disconnectWallet,
        provider,
        isConnecting,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};