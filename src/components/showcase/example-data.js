/**
 * Component Showcase Example Data
 * 
 * 组件展示顺序建议：
 * 1. Hero & Title - 页面顶部核心组件
 *    - heroSectionWithVideo
 *    - titleSection
 * 
 * 2. Feature & Benefits - 产品特性和优势展示
 *    - productBenefitsWithFourBlocks
 *    - whyChooseUsWithSixBlocks
 *    - whyChooseUsWithTwoBlocks
 * 
 * 3. How It Works - 使用流程说明
 *    - howItWorksWithWorkflow
 *    - howItWorksWithThreeBlocks
 * 
 * 4. Comparison & Tables - 比较和详细信息
 *    - productComparisonTable
 *    - callToActionWithTable
 * 
 * 5. Content Sections - 内容展示区域
 *    - textBlock
 *    - moreInsightsWithFourCards
 *    - imageBanner
 * 
 * 6. Support Sections - 支持信息
 *    - faqSection
 *    - pricingWithThreeCards
 * 
 * 7. CTA - 行动召唤
 *    - callToAction
 * 
 * 最佳实践：
 * - Hero Section 通常应该是第一个组件
 * - CTA Section 通常应该是最后一个组件
 * - FAQ 和 Pricing 通常放在页面下部
 * - Feature 相关组件建议放在上部
 */

export const exampleData = {
  // 1. Hero & Title (页面顶部组件)
  HeroSectionWithVideo: {
    order: 1,
    title: 'Hero Section With Video',
    description: 'Display main tools and feature introduction with video background',
    recommendedPosition: 'Must be first component if Demo Showcase is not used',
    filePath: 'src/components/common_components/hero-section-with-video.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          buttonText: 'Get Started',
          title: 'AI Video Creation Tool',
          description: 'Quickly Generate Multilingual Marketing Videos',
          desc: 'Support 40+ languages, auto-generate subtitles and voiceovers'
        }
      }
    }
  },

  TitleSection: {
    order: 2,
    title: 'Title Section',
    description: 'Display article or page main title and subtitle',
    recommendedPosition: 'Upper section, after Hero Section',
    filePath: 'src/components/common_components/title_section.js',
    props: {
      title: 'How to Improve Work Efficiency with AI',
      subtitle: 'Explore AI Applications in Daily Work',
      author: 'KREADO'
    }
  },

  // 2. Feature & Benefits (产品特性和优势)
  ProductBenefitsWithFourBlocks: {
    order: 3,
    title: 'Product Benefits With Four Blocks',
    description: 'Display core product features or service highlights in four modules',
    recommendedPosition: 'Upper section, after title',
    filePath: 'src/components/common_components/product-benefits-with-four-blocks.js',
    props: {
      author: 'KREADO',
      section: {
        leftContent: {
          title: 'Smart Video Creation Platform',
          description: 'Make video creation easier and marketing more efficient',
          buttonText: 'Free Trial'
        },
        rightContent: [
          {
            icon: '🎥',
            title: 'AI Video Generation',
            content: 'Just input text to automatically generate professional videos'
          },
          {
            icon: '🎯',
            title: 'Precise Marketing',
            content: 'Customize multilingual video content for different markets'
          },
          {
            icon: '⚡',
            title: 'Efficiency Boost',
            content: 'Reduce video production time by 90%'
          },
          {
            icon: '💰',
            title: 'Cost Saving',
            content: 'Significantly reduce video production and localization costs'
          }
        ]
      }
    }
  },

  WhyChooseUsWithSixBlocks: {
    order: 4,
    title: 'Why Choose Us With Six Blocks',
    description: 'Display product features or service advantages in six-grid layout',
    recommendedPosition: 'Upper-mid section, after benefits introduction',
    filePath: 'src/components/common_components/why-choose-us-with-six-small-blocks.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          emoji: '🚀',
          title: 'Why Choose KREADO AI',
          subtitle: 'Professional AI Video Creation Platform'
        },
        bottomContent: [
          {
            icon: '🎯',
            title: 'Precise Targeting',
            content: 'Customize content for different market segments'
          },
          {
            icon: '🌍',
            title: 'Global Reach',
            content: 'Support for 40+ languages and cultural adaptations'
          },
          {
            icon: '⚡',
            title: 'Lightning Fast',
            content: 'Generate videos in minutes, not days'
          },
          {
            icon: '💡',
            title: 'Smart AI',
            content: 'Advanced AI algorithms for optimal results'
          },
          {
            icon: '📊',
            title: 'Data Driven',
            content: 'Analytics and insights for better performance'
          },
          {
            icon: '🔒',
            title: 'Secure & Reliable',
            content: 'Enterprise-grade security and stability'
          }
        ]
      }
    }
  },

  WhyChooseUsWithTwoBlocks: {
    order: 5,
    title: 'Why Choose Us With Two Blocks',
    description: 'Display two main product features or service advantages with images',
    recommendedPosition: 'Mid section, after feature blocks',
    filePath: 'src/components/common_components/why-choose-us-with-two-huge-blocks.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          title: 'Transform Your Video Marketing',
          subtitle: 'Create engaging videos in minutes with AI'
        },
        bottomContent: [
          {
            title: 'AI-Powered Creation',
            content: 'Our advanced AI technology transforms your text into professional marketing videos automatically, saving you time and resources.',
            buttonText: 'Try Now',
            image: '/images/kreado-demo-pic1.png'
          },
          {
            title: 'Global Marketing Ready',
            content: 'Instantly localize your videos into multiple languages, reaching global audiences with culturally adapted content.',
            buttonText: 'Learn More',
            image: '/images/kreado-demo-pic2.png'
          }
        ]
      }
    }
  },

  // 3. How It Works (使用流程)
  HowItWorksWithWorkflow: {
    order: 6,
    title: 'How It Works With Workflow',
    description: 'Display product usage process or service steps with arrow indicators',
    recommendedPosition: 'Mid section, after features',
    filePath: 'src/components/common_components/how-it-works-with-workflow.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          title: 'How It Works',
          buttonText: 'Start Creating'
        },
        bottomContent: [
          {
            number: '01',
            content: 'Input your marketing text or script'
          },
          {
            number: '02',
            content: 'AI generates video with matching visuals'
          },
          {
            number: '03',
            content: 'Export in multiple languages and formats'
          }
        ]
      }
    }
  },

  HowItWorksWithThreeBlocks: {
    order: 7,
    title: 'How It Works With Three Blocks',
    description: 'Display product workflow with three detailed feature blocks',
    recommendedPosition: 'Mid section, after workflow',
    filePath: 'src/components/common_components/how-it-works-with-three-blocks.js',
    props: {
      author: 'KREADO',
      section: {
        leftContent: {
          icon: '🚀',
          title: 'How Our AI Works',
          subtitle: 'Transform your content into engaging videos with three simple steps',
          buttonText: 'Start Creating'
        },
        rightContent: [
          {
            icon: '📝',
            title: 'Input Content',
            content: 'Simply paste your text or upload your script to begin the creation process'
          },
          {
            icon: '🎨',
            title: 'AI Processing',
            content: 'Our AI analyzes your content and generates matching visuals and animations'
          },
          {
            icon: '🌐',
            title: 'Global Export',
            content: 'Export your video in multiple languages with auto-generated voiceovers'
          }
        ]
      }
    }
  },

  // 4. Comparison & Tables (比较和表格)
  ProductComparisonTable: {
    order: 8,
    title: 'Product Comparison Table',
    description: 'Compare features between your product and competitors',
    recommendedPosition: 'Mid-lower section, before pricing',
    filePath: 'src/components/common_components/product_comparison_table.js',
    props: {
      author: 'KREADO',
      section: {
        topContent: {
          title: 'Why Choose KREADO AI',
          subtitle: 'Compare our features with traditional solutions',
          companies: {
            competitor: 'Traditional',
            us: 'KREADO AI'
          }
        },
        bottomContent: {
          features: [
            {
              name: 'AI Video Generation',
              competitor: false,
              us: true
            },
            {
              name: 'Multilingual Support',
              competitor: false,
              us: true
            },
            {
              name: 'Auto Voice Generation',
              competitor: false,
              us: true
            },
            {
              name: 'Quick Turnaround',
              competitor: false,
              us: true
            },
            {
              name: 'Cost Effective',
              competitor: false,
              us: true
            }
          ]
        }
      }
    }
  },

  CallToActionWithTable: {
    order: 9,
    title: 'Call To Action With Table',
    description: 'Display feature list with right-side call to action',
    recommendedPosition: 'Mid-lower section, after comparison',
    filePath: 'src/components/common_components/call-to-action-with-a-table.js',
    props: {
      author: 'KREADO',
      section: {
        leftContent: [
          {
            icon: '🎥',
            title: 'AI Video Creation',
            content: 'Generate professional videos automatically'
          },
          {
            icon: '🌍',
            title: 'Global Reach',
            content: 'Support for 40+ languages'
          },
          {
            icon: '⚡',
            title: 'Fast Processing',
            content: 'Complete videos in minutes'
          },
          {
            icon: '💰',
            title: 'Cost Effective',
            content: 'Save up to 90% on video production'
          }
        ],
        rightContent: {
          icon: '🚀',
          title: 'Ready to Transform Your Video Marketing?',
          subtitle: 'Join thousands of businesses using KREADO AI',
          buttonText: 'Start Free Trial'
        }
      }
    }
  },

  // 5. Content Sections (内容展示)
  TextBlock: {
    order: 10,
    title: 'Text Block',
    description: 'Display article content with title and paragraphs',
    recommendedPosition: 'Content area, flexible positioning',
    filePath: 'src/components/common_components/text-block.js',
    props: {
      data: {
        title: 'Understanding AI Video Creation',
        bottomContent: [
          {
            content: {
              contentTitle: 'The Power of AI in Video Production',
              contentText: 'AI technology has revolutionized the way we create and distribute video content. With advanced algorithms and machine learning capabilities, what once took days or weeks can now be accomplished in minutes.'
            }
          },
          {
            content: {
              contentTitle: 'Multilingual Support',
              contentText: 'Our platform supports over 40 languages, making it easy to reach global audiences. The AI automatically generates appropriate translations and voiceovers while maintaining the original message and tone.'
            }
          }
        ]
      }
    }
  },

  MoreInsightsWithFourCards: {
    order: 11,
    title: 'More Insights With Four Cards',
    description: 'Display related articles or insights in card format',
    recommendedPosition: 'Lower section, after main content',
    filePath: 'src/components/common_components/more_insights_with_four_cards.js',
    props: {
      data: {
        topContent: [
          {
            imageUrl: '/images/kreado-demo-pic1.png',
            subTitle: 'AI TECHNOLOGY',
            title: 'The Future of Video Marketing'
          },
          {
            imageUrl: '/images/kreado-demo-pic2.png',
            subTitle: 'CASE STUDY',
            title: 'Success Stories with AI Videos'
          },
          {
            imageUrl: '/images/kreado-demo-pic1.png',
            subTitle: 'TUTORIAL',
            title: 'Getting Started with KREADO AI'
          },
          {
            imageUrl: '/images/kreado-demo-pic2.png',
            subTitle: 'INDUSTRY NEWS',
            title: 'Latest Trends in AI Marketing'
          }
        ]
      }
    }
  },

  ImageBanner: {
    order: 12,
    title: 'Image Banner',
    description: 'Display full-width image banner',
    recommendedPosition: 'Flexible, used to break up text sections',
    filePath: 'src/components/common_components/image_banner.js',
    props: {
      imageUrl: '/images/kreado-top-bg.png',
      altText: 'AI Video Creation'
    }
  },

  // 6. Support Sections (支持信息)
  Faqs: {
    order: 13,
    title: 'FAQ Section',
    description: 'Display frequently asked questions in two columns',
    recommendedPosition: 'Lower section, before CTA',
    filePath: 'src/components/common_components/faqs.js',
    props: {
      author: 'KREADO',
      section: {
        title: 'Frequently Asked Questions',
        contents: [
          {
            question: 'How does AI video creation work?',
            answer: 'Our AI analyzes your input text and automatically generates matching visuals, animations, and voiceovers to create professional videos.'
          },
          {
            question: 'What languages are supported?',
            answer: 'We support over 40 languages for both text and voice generation, making it perfect for global marketing.'
          },
          {
            question: 'How long does it take to create a video?',
            answer: 'Most videos can be generated within minutes, depending on length and complexity.'
          },
          {
            question: 'Can I customize the output?',
            answer: 'Yes, you can customize various aspects including style, tone, pace, and branding elements.'
          }
        ]
      }
    }
  },

  PricingWithThreeCards: {
    order: 14,
    title: 'Pricing With Three Cards',
    description: 'Display pricing plans with feature comparison',
    recommendedPosition: 'Lower section, after FAQ and before final CTA',
    filePath: 'src/components/common_components/pricing-with-three-cards.js',
    props: {
      author: 'KREADO',
      data: {
        title: 'Choose Your Plan',
        bottomContent: {
          planOne: {
            name: 'Basic',
            price: '$29',
            discount: 'SAVE 20%',
            buttonText: 'Start Basic',
            features: [
              '5 AI video generations/month',
              'Basic templates',
              '720p video quality',
              '10 languages support',
              'Email support'
            ]
          },
          planTwo: {
            name: 'Professional',
            price: '$79',
            discount: 'MOST POPULAR',
            buttonText: 'Start Pro',
            features: [
              '20 AI video generations/month',
              'Premium templates',
              '1080p video quality',
              '25 languages support',
              'Priority support',
              'Custom branding'
            ]
          },
          planThree: {
            name: 'Enterprise',
            price: 'Custom',
            discount: 'BEST VALUE',
            buttonText: 'Contact Sales',
            features: [
              'Unlimited video generations',
              'Custom templates',
              '4K video quality',
              'All languages support',
              '24/7 dedicated support',
              'API access',
              'Custom integration'
            ]
          }
        }
      }
    }
  },

  // 7. CTA (行动召唤)
  CallToAction: {
    order: 15,
    title: 'Call To Action',
    description: 'Final call to action section with strong message',
    recommendedPosition: 'Must be the last component',
    filePath: 'src/components/common_components/call-to-action.js',
    props: {
      author: 'KREADO',
      section: {
        title: 'Ready to Transform Your Video Marketing?',
        subtitle: 'Join thousands of businesses already using KREADO AI',
        buttonText: 'Get Started Free',
        backgroundImage: '/images/cta-background.jpg'
      }
    }
  }
};

export default exampleData; 