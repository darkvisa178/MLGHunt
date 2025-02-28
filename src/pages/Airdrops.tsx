import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle, Link as LinkIcon } from 'lucide-react';

// Добавляем типы для Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
          };
        };
      };
    };
  }
}

const Airdrops = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [telegramUserId, setTelegramUserId] = useState<string | null>(null);
  const [referralLink, setReferralLink] = useState('');
  const [showReferralCopied, setShowReferralCopied] = useState(false);

  // Получаем Telegram ID при загрузке компонента
  useEffect(() => {
    // Сначала пробуем получить из Telegram WebApp
    if (window.Telegram?.WebApp?.initDataUnsafe?.user?.id) {
      setTelegramUserId(window.Telegram.WebApp.initDataUnsafe.user.id.toString());
      return;
    }
    
    // Если не получилось, пробуем из URL-параметра
    const queryParams = new URLSearchParams(window.location.search);
    const tgParam = queryParams.get('tg');
    if (tgParam) {
      setTelegramUserId(tgParam);
    }
  }, []);

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

  // Обновленная функция для получения и копирования реферальной ссылки
  const handleGetReferralLink = () => {
    if (!telegramUserId) {
      setError('Не удалось получить Telegram ID. Пожалуйста, откройте приложение через Telegram бота.');
      return;
    }
    
    try {
      const link = `https://t.me/MLGHuntBot?start=${telegramUserId}`;
      setReferralLink(link);
      
      // Копируем ссылку в буфер обмена
      navigator.clipboard.writeText(link)
        .then(() => {
          setShowReferralCopied(true);
          setTimeout(() => setShowReferralCopied(false), 3000);
        })
        .catch(err => {
          console.error('Ошибка копирования:', err);
          // Показываем ссылку, даже если не удалось скопировать
          setError('Не удалось скопировать ссылку автоматически. Пожалуйста, скопируйте её вручную.');
        });
    } catch (e) {
      console.error('Ошибка в handleGetReferralLink:', e);
      setError('Произошла ошибка при создании реферальной ссылки');
    }
  };

  // Функция для мобильных устройств (шеринг вместо копирования)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const handleShareReferralLink = () => {
    if (!telegramUserId) return;
    
    const link = `https://t.me/MLGHuntBot?start=${telegramUserId}`;
    setReferralLink(link);
    
    if (navigator.share) {
      navigator.share({
        title: 'MLGHunt Referral Link',
        text: 'Join MLGHunt using my referral link!',
        url: link,
      })
      .catch(error => console.error('Error sharing:', error));
    } else {
      // Если Web Share API не поддерживается, возвращаемся к копированию
      handleGetReferralLink();
    }
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
      
      {/* Основной контент без изменений */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ... здесь остальной код без изменений ... */}
      </div>
      
      {/* Секция с реферальной ссылкой - обновленная */}
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
          <div className="w-full md:w-auto flex flex-col items-center">
            <motion.button
              className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isMobile ? handleShareReferralLink : handleGetReferralLink}
            >
              <LinkIcon size={18} className="mr-2" />
              {isMobile ? 'Share Referral Link' : 'Get Referral Link'}
            </motion.button>
            
            {showReferralCopied && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm bg-green-800 bg-opacity-70 p-2 rounded-lg"
              >
                Ссылка скопирована!
              </motion.div>
            )}
            
            {referralLink && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 w-full bg-purple-800 bg-opacity-50 p-3 rounded-lg text-sm overflow-hidden break-all"
              >
                {referralLink}
              </motion.div>
            )}
            
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-400 bg-red-900 bg-opacity-30 p-2 rounded-lg"
              >
                {error}
              </motion.div>
            )}
            
            {!telegramUserId && !error && (
              <div className="mt-2 text-sm text-yellow-400">
                Откройте приложение через Telegram бота для получения реферальной ссылки
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Airdrops;
