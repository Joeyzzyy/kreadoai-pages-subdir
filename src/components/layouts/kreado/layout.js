"use client";
import React from 'react';

import HeroSectionWithVideo from '../../common/sections/hero-section-with-video';
import CallToAction from '../../common/sections/call-to-action';
import HowItWorksWithThreeBlocks from '../../common/sections/how-it-works-with-three-blocks';
import WhyChooseUsWithTwoHugeBlocks from '../../common/sections/why-choose-us-with-two-huge-blocks';
import WhyChooseUsWithSixSmallBlocks from '../../common/sections/why-choose-us-with-six-small-blocks';
import HowItWorksWithWorkflow from '../../common/sections/how-it-works-with-workflow';
import ProductBenefitsWithFourBlocks from '../../common/sections/product-benefits-with-four-blocks';
import Faqs from '../../common/sections/faqs';
import ProductComparisonTable from '../../common/sections/product-comparison-table';
import MoreInsightsWithFourCards from '../../common/sections/more-insights-with-four-cards';
import ImageBanner from '../../common/sections/image-banner';
import TitleSection from '../../common/sections/title-section';
import TitleSectionWithImage from '../../common/sections/title-section-with-image';

// 更新组件映射表
const COMPONENT_MAP = {
  CallToAction: CallToAction,
  Faqs: Faqs,
  HowItWorksWithThreeBlocks: HowItWorksWithThreeBlocks,
  ProductBenefitsWithFourBlocks: ProductBenefitsWithFourBlocks,
  HowItWorksWithWorkflow: HowItWorksWithWorkflow,
  WhyChooseUsWithSixSmallBlocks: WhyChooseUsWithSixSmallBlocks,
  WhyChooseUsWithTwoHugeBlocks: WhyChooseUsWithTwoHugeBlocks,
  MoreInsightsWithFourCards: MoreInsightsWithFourCards,
  ImageBanner: ImageBanner,
  ProductComparisonTable: ProductComparisonTable,
  HeroSectionWithVideo: HeroSectionWithVideo,
  TitleSection: TitleSection,
  TitleSectionWithImage: TitleSectionWithImage
};

const LayoutKoreadoai = ({ article, keywords }) => {
  console.log('heyheyheyarticle: ', article);
  const sections = article?.sections || [];
  const author = article?.author || 'default';

  const renderSection = (section) => {
    const Component = COMPONENT_MAP[section.componentName];
    if (!Component) {
      console.log('未找到对应组件:', section.componentName);
      return null;
    }
    
    return <Component 
      key={`${section.componentName}-${section.position}`} 
      section={section}
      author={author}
      date={article.createdAt}
    />;
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-0 m-0">
      <div className="relative flex-1 w-full max-w-[100vw] overflow-x-hidden p-0 m-0">
        <div className="relative z-10 w-full">
          {(() => {
            // 先分离CTA和普通部分
            const normalSections = [];
            let ctaSection = null;
            
            sections
              .sort((a, b) => a.position - b.position)
              .forEach(section => {
                if (section.componentName === 'CallToAction') {
                  ctaSection = section;
                } else {
                  normalSections.push(section);
                }
              });

            // 合并普通部分和CTA部分并渲染
            return [...normalSections, ...(ctaSection ? [ctaSection] : [])]
              .map(renderSection);
          })()}
        </div>
        <TableOfContents />
      </div>
    </div>
  );
};

export default LayoutKoreadoai;
