import React, { FC, useState, useRef } from 'react';
import { useEffect } from 'react';
import { CSSProperties } from 'react';
import placeholder from '../../assets/lazy_loader.gif';

interface IProps {
  style?: CSSProperties;
  className?: string;
  src: string;
}

const LazyImage: FC<IProps> = ({ children, className, src, style }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      const callback = ([entry]: any[]) => entry.isIntersecting && setIsIntersecting(true);
      const config = { threshold: 0.01, rootMargin: '75%' };

      const observer = new IntersectionObserver(callback, config);
      observer.observe(currentImageRef);

      return () => {
        observer.disconnect();
      };
    }
  }, [imageRef]);

  return (
    <div
      className={className}
      ref={imageRef}
      style={{ ...style, backgroundImage: `url(${isIntersecting ? src : placeholder})` }}
    >
      {children}
    </div>
  );
};

export default LazyImage;
