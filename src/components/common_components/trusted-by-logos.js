'use client';
import React, { useEffect, useState } from 'react';

const TrustedByLogos = ({ logos = [] }) => {
  const [position, setPosition] = useState(0);
  
  // 临时使用固定的logo图片，确保至少有6个
  const tempLogos = Array(6).fill({
    imageUrl: '/images/kreado-logo.webp',
    altText: 'Kreado Logo'
  });
  
  useEffect(() => {
    const containerWidth = tempLogos.length * (96 + 32); // 96px(w-24) + 32px(gap-8)
    
    const interval = setInterval(() => {
      setPosition((prev) => {
        // 当移动到一个logo宽度时，重置位置到开始
        if (prev <= -containerWidth) {
          return 0;
        }
        return prev - 1;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 py-8 md:py-12 overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="relative flex items-center justify-center mx-auto max-w-7xl">
        <div 
          className="flex items-center gap-8"
          style={{
            transform: `translateX(${position}px)`,
            transition: 'transform 0.5s linear',
          }}
        >
          {/* 重复两次logo数组以实现无缝循环 */}
          {[...tempLogos, ...tempLogos, ...tempLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-sm p-4 border border-gray-100"
            >
              <img
                src={logo.imageUrl}
                alt={logo.altText || 'Company logo'}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default TrustedByLogos;