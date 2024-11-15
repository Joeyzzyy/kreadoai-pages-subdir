import React from 'react';
import CustomButton from './custom_button';
import buttonLinks from '../../config/buttonLinks';
import Image from 'next/image';

const PageTopTool = ({ section, author }) => {
  const topContent = section.topContent;

  const getButtonLink = () => {
    return buttonLinks['KREADO']?.workbench || '#';
  };

  return (
    <div className="banner-container w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-cover bg-center bg-no-repeat" style={{ minHeight: '800px' }}>
      <div className="absolute inset-0">
        <Image
          src="/images/kreado-top-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-20" />
      </div>

      <div className="relative z-10 pt-32">
        <CustomButton 
          variant="KREADO" 
          href={getButtonLink()}
          className="block mx-auto bg-indigo-100/90 hover:bg-indigo-50 text-indigo-900 font-semibold px-6 rounded-full shadow-sm text-sm h-8 flex items-center gap-2"
        >
          {topContent.buttonText}
        </CustomButton>
      </div>

      <div className="relative z-10 pt-8 mb-12">
        <h1 className="text-center text-3xl font-bold text-white">
          {topContent.title}
        </h1>
        {topContent.description && (
          <p className="text-center text-lg mt-4 text-white/90 max-w-3xl mx-auto">
            {topContent.description}
          </p>
        )}
        {topContent.desc && (
          <p className="text-center text-base mt-4 text-white/80 max-w-2xl mx-auto">
            {topContent.desc}
          </p>
        )}
      </div>

      <div className="relative mx-auto" style={{ width: '50%' }}>
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="bg-white/80 rounded-xl shadow-lg overflow-hidden backdrop-blur-lg border border-indigo-100/20">
              <video
                className="w-full"
                src="https://www.kreadoai.com/img/home/newHome/video/brand-video-en.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent"></div>
    </div>
  );
};

export default PageTopTool;