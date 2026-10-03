"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  captionText: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = "800px",
  containerWidth = "800px",
  imageHeight = "800px",
  imageWidth = "800px",
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setTilt({
      x: x * rotateAmplitude,
      y: -y * rotateAmplitude,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="inline-block">
      {showMobileWarning && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-lg text-sm">
          <strong>Mobile Notice:</strong> Tilt effect works best on desktop with mouse interaction.
        </div>
      )}
      
      <motion.div
        ref={cardRef}
        className="relative cursor-pointer"
        style={{
          width: containerWidth,
          height: containerHeight,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          scale: 1,
        }}
        whileHover={{
          scale: scaleOnHover,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
          style={{
            transform: 'translateZ(50px)',
            background: 'var(--bg)',
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: 'translateZ(25px)',
            }}
            onError={() => {
              console.error('Image failed to load:', imageSrc);
              setImageError(true);
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', imageSrc);
              setImageError(false);
            }}
          />
          
          {imageError && (
            <div className="absolute inset-0 bg-red-500 text-white flex items-center justify-center">
              <p className="text-center p-4">Failed to load image</p>
            </div>
          )}
          
          {displayOverlayContent && overlayContent && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-4"
              style={{
                transform: 'translateZ(75px)',
              }}
            >
              {overlayContent}
            </div>
          )}
          
          <div 
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-3 text-center"
            style={{
              transform: 'translateZ(50px)',
            }}
          >
            <p className="text-base font-medium">{captionText}</p>
          </div>
        </div>
        
        {showTooltip && (
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0, y: tilt.x !== 0 || tilt.y !== 0 ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            Hover to tilt
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TiltedCard;
