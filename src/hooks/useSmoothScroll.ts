import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollConfig = {
  top?: number;
  left?: number;
  behavior?: 'smooth' | 'auto';
};

export const useSmoothScroll = (config?: ScrollConfig) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth', ...config });
  }, [location.pathname, config]);
};
