"use client";

import { useState, useEffect } from 'react';

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}

export function useViewportHeight(): number {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    // Set initial viewport height
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportHeight;
}
