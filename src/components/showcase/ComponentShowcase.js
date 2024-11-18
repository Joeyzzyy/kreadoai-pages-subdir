'use client';
import React, { useState } from 'react';
import { exampleData } from './example-data';
import TitleContent from '../common_components/title_content';
import TitleTopPricingDown from '../common_components/title_top_three_pricing_bottom';
import TitleTopThreeFlowDown from '../common_components/title_top_three_arrow_flow_bottom';
import TitleTopSixModulesDown from '../common_components/title_top_six_modules_bottom';
import TitleRightTableLeft from '../common_components/title_right_table_left';
import TitleLeftModulesRight from '../common_components/title_left_three_modules_right';
import TitleLeftFourModulesRight from '../common_components/title_left_four_modules_right';
import TitleTopTwoModulesDown from '../common_components/title_top_two_modules_bottom';
import PageDownCTA from '../common_components/page_bottom_cta';
import PageTopTool from '../common_components/page_top_tool';
import FAQ from '../common_components/faq';
import ArticleContent from '../common_components/common_article_content';
import MoreInsights from '../common_components/more_insights';
import ImageBanner from '../common_components/image_banner';
import ComparisonTable from '../common_components/product_comparison_table';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ComponentShowcase = () => {
  const [expandedCodes, setExpandedCodes] = useState({});
  const [isNavOpen, setIsNavOpen] = useState(false);
  const componentRefs = {};

  const toggleCode = (key) => {
    setExpandedCodes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scrollToComponent = (key) => {
    componentRefs[key]?.scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 w-full">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 w-full">
        <div className="w-[80%] mx-auto py-12">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Component Library</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Explore our comprehensive collection of pre-built components designed for creating modern, responsive web applications.
          </p>
          <p className="mt-2 text-base text-slate-500">
            Currently featuring {Object.keys(exampleData).length} components
          </p>
        </div>  
      </div>

      {/* Main Content */}
      <div className="w-[80%] mx-auto py-12">
        {Object.entries(exampleData).map(([key, data]) => (
          <div key={key} className="mb-8" ref={el => componentRefs[key] = el}>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Component Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
                <h2 className="text-xl font-semibold text-white break-words">
                  <span className="mr-2 text-slate-400">#{data.order}</span>
                  {data.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <p className="text-slate-300 text-sm">
                    <span className="font-medium">Recommended Position:</span> {data.recommendedPosition}
                  </p>
                  <div className="hidden sm:block h-4 w-px bg-slate-700"></div>
                  <button
                    onClick={() => toggleCode(key)}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {expandedCodes[key] ? 'Hide Data Structure' : 'View Data Structure'}
                  </button>
                </div>
              </div>

              {/* Component Description */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <p className="text-slate-600">{data.description}</p>
                
                {/* Data Structure Preview */}
                {expandedCodes[key] && (
                  <div className="mt-4 bg-white rounded-lg border border-slate-200">
                    <SyntaxHighlighter 
                      language="json"
                      style={github}
                      className="text-sm"
                    >
                      {JSON.stringify(data.props, null, 2)}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>

              {/* Component Preview */}
              <div className="p-6 overflow-x-auto">
                <div className={`${
                  key === 'pageTopTool' ? 'max-w-full md:max-w-[900px] lg:max-w-[1200px] mx-auto' : ''
                }`}>
                  {key === 'titleContent' && <TitleContent {...data.props} author="KREADOAI" />}
                  {key === 'titleTopPricing' && <TitleTopPricingDown {...data.props} author="KREADOAI" />}
                  {key === 'titleTopThreeFlow' && <TitleTopThreeFlowDown {...data.props} author="KREADOAI" />}
                  {key === 'titleTopSixModules' && <TitleTopSixModulesDown {...data.props} author="KREADOAI" />}
                  {key === 'titleRightTable' && <TitleRightTableLeft {...data.props} author="KREADOAI" />}
                  {key === 'titleLeftModules' && <TitleLeftModulesRight {...data.props} author="KREADOAI" />}
                  {key === 'titleLeftFourModules' && <TitleLeftFourModulesRight {...data.props} author="KREADOAI" />}
                  {key === 'titleTopTwoModules' && <TitleTopTwoModulesDown {...data.props} author="KREADOAI" />}
                  {key === 'pageDownCTA' && <PageDownCTA {...data.props} author="KREADOAI" />}
                  {key === 'pageTopTool' && <PageTopTool {...data.props} author="KREADOAI" />}
                  {key === 'faq' && <FAQ {...data.props} author="KREADOAI" />}
                  {key === 'articleContent' && <ArticleContent {...data.props} author="KREADOAI" />}
                  {key === 'moreInsights' && <MoreInsights {...data.props} author="KREADOAI" />}
                  {key === 'imageBanner' && <ImageBanner {...data.props} author="KREADOAI" />}
                  {key === 'comparisonTable' && <ComparisonTable {...data.props} author="KREADOAI" />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 添加悬浮导航菜单 */}
      <div className="fixed bottom-6 right-6 z-50">
        {isNavOpen ? (
          <div className="bg-white rounded-lg shadow-lg p-3 w-[280px]">
            <div className="flex justify-between items-center mb-2 pb-2 border-b">
              <h3 className="font-medium text-slate-700 text-sm">组件导航</h3>
              <button
                onClick={() => setIsNavOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {Object.entries(exampleData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => scrollToComponent(key)}
                  className="w-full text-left px-2 py-1.5 text-xs text-slate-600 hover:bg-slate-50 rounded-md"
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsNavOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ComponentShowcase; 