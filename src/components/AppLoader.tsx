import React, { useEffect, useState } from 'react';
import NFTLoader from './NFTLoader';

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // For Telegram mini-app, always show loading on fresh page loads
    const isRefresh = performance.navigation?.type === 1 || !sessionStorage.getItem('nft_app_loaded');
    
    if (!isRefresh) {
      // Skip loading animation only on same-session navigations
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('nft_app_loaded', 'true');
    setIsLoading(false);
    
    // Small delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  if (isLoading) {
    return <NFTLoader onComplete={handleLoadingComplete} duration={6000} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default AppLoader;