import React from 'react';
import CustomButton from './custom_button';
import buttonLinks from '../../config/buttonLinks';

const PageTopTool = ({ section, author }) => {
  const topContent = section.topContent;

  const getButtonLink = () => {
    return buttonLinks['KREADO']?.workbench || '#';
  };

  return (
    <div 
      className="banner-container w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(255,255,255,1)), url('/images/kreado-top-bg.png')`,
        minHeight: '800px'
      }}
    >
      <div className="relative z-10 pt-32">
        <CustomButton 
          variant="KREADO" 
          href={getButtonLink()}
          className="block mx-auto bg-indigo-100/90 hover:bg-indigo-50 text-indigo-900 font-semibold px-6 rounded-full shadow-sm text-sm h-8 flex items-center gap-2"
        >
          {/* <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
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

      {/* 添加底部装饰元素 */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent"></div>
    </div>
  );
};

export default PageTopTool;