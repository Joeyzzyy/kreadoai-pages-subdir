'use client';
import React from 'react';
import CustomButton from './custom_button';
import authorStyles from '../../styles/textStyles';
import buttonLinks from '../../config/buttonLinks';

const PageDownCTA = ({ section, author }) => {
  const styles = authorStyles[author];
  const isKreado = author === 'KREADO';
  const headerBackground = isKreado 
    ? '/images/kreado-header-bg.png'
    : '/images/hix-down-bg.png';

const paragraphColorClass = isKreado ? 'text-white' : styles.paragraph.color;

const getButtonLink = () => {
  return buttonLinks[author]?.workbench || '#';
};

  return (
    <div 
      className="banner-container w-screen relative bg-cover bg-bottom bg-no-repeat flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${headerBackground})`,
        height: '24vw',
        marginBottom: '-1px'
      }}
    >
      <div className="text-center max-w-3xl mx-auto py-16">
        <h2 className={`${styles.h2.fontSize} ${styles.h2.fontWeight} ${styles.h2.color} mb-8`}>
          {section.title}
        </h2>
        <p className={`${styles.paragraph.fontSize} ${paragraphColorClass} mb-10 px-4 leading-relaxed`}>
          {section.subTitle}
        </p>
        <CustomButton 
          variant={author}
          href={getButtonLink()}
        >
          {section.buttonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default PageDownCTA;