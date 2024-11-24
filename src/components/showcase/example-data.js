/**
 * Component Showcase Example Data
 * 
 * Recommended Component Order:
 * 1. Hero & Title - Core components for page top
 *    - heroSectionWithVideo
 *    - titleSection
 * 
 * 2. Feature & Benefits - Product features and advantages
 *    - productBenefitsWithFourBlocks
 *    - productBenefitsWithATable
 *    - whyChooseUsWithSixBlocks
 *    - whyChooseUsWithTwoBlocksge
 * 
 * 3. How It Works - Process explanation
 *    - howItWorksWithWorkflow
 *    - howItWorksWithThreeBlocks
 * 
 * 4. Comparison & Tables - Detailed information
 *    - productComparisonTable
 *    - callToActionWithTable
 * 
 * 5. Content Sections - Content display areas
 *    - textBlock
 *    - moreInsightsWithFourCards
 *    - imageBanner
 * 
 * 6. Support Sections - Support information
 *    - faqSection
 *    - pricingWithThreeCards
 * 
 * 7. CTA - Call to action
 *    - callToAction
 * 
 * Best Practices:
 * - Hero Section should typically be the first component
 * - CTA Section should typically be the last component
 * - FAQ and Pricing usually go in the lower section
 * - Feature-related components recommended for upper section
 */

export const exampleData = {
  HeroSectionWithVideo: {
    order: 1,
    title: 'Hero Section With Video',
    description: 'Display main tools and feature introduction with video background',
    recommendedPosition: 'Must be first component if Demo Showcase is not used',
    filePath: 'src/components/common_components/hero-section-with-video.js',
    props: {
      author: 'KREADO',
      topContent: {
        buttonText: 'Get Started',
        title: 'AI Video Creation Tool',
        description: 'Quickly Generate Multilingual Marketing Videos',
        desc: 'Support 40+ languages, auto-generate subtitles and voiceovers'
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

  TitleSectionWithImage: {
    order: 3,
    title: 'Title Section With Image',
    description: 'Title section with image, supports adaptive layout for multiple languages',
    recommendedPosition: 'Upper section, after Hero Section',
    filePath: 'src/components/common_components/title-section-with-image.js',
    props: {
      title: 'AI Video Creation Platform',
      subtitle: 'Transform your content into engaging videos with AI technology',
      leftContent: {
        author: 'KREADO',
        publishDate: '2024-11.23',
      },
      rightContent: {
        image: '/images/kreado-demo-pic1.webp'
      }
    }
  },

  ProductBenefitsWithFourBlocks: {
    order: 4,
    title: 'Product Benefits With Four Blocks',
    description: 'Display core product features or service highlights in four modules',
    recommendedPosition: 'Upper section, after title',
    filePath: 'src/components/common_components/product-benefits-with-four-blocks.js',
    props: {
      author: 'KREADO',
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
  },

  ProductBenefitsWithATable: {
    order: 5,
    title: 'Product Benefits With A Table',
    description: 'Display benefits list with right-side call to action',
    recommendedPosition: 'Upper section, after other benefits sections',
    filePath: 'src/components/common_components/product-benefits-with-a-table.js',
    props: {
      author: 'KREADO',
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
  },

  WhyChooseUsWithSixBlocks: {
    order: 6,
    title: 'Why Choose Us With Six Blocks',
    description: 'Display product features or service advantages in six-grid layout',
    recommendedPosition: 'Upper-mid section, after benefits introduction',
    filePath: 'src/components/common_components/why-choose-us-with-six-small-blocks.js',
    props: {
      author: 'KREADO',
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
  },

  WhyChooseUsWithTwoBlocks: {
    order: 7,
    title: 'Why Choose Us With Two Blocks',
    description: 'Display two main product features or service advantages with images',
    recommendedPosition: 'Mid section, after feature blocks',
    filePath: 'src/components/common_components/why-choose-us-with-two-huge-blocks.js',
    props: {
      author: 'KREADO',
      topContent: {
        title: 'Transform Your Video Marketing',
        subtitle: 'Create engaging videos in minutes with AI'
      },
      bottomContent: [
        {
          title: 'AI-Powered Creation',
          content: 'Our advanced AI technology transforms your text into professional marketing videos automatically, saving you time and resources.',
          buttonText: 'Try Now',
          image: '/images/kreado-demo-pic1.webp'
        },
        {
          title: 'Global Marketing Ready',
          content: 'Instantly localize your videos into multiple languages, reaching global audiences with culturally adapted content.',
          buttonText: 'Learn More',
          image: '/images/kreado-demo-pic2.webp'
        }
      ]
    }
  },

  HowItWorksWithWorkflow: {
    order: 8,
    title: 'How It Works With Workflow',
    description: 'Display product usage process or service steps with arrow indicators',
    recommendedPosition: 'Mid section, after features',
    filePath: 'src/components/common_components/how-it-works-with-workflow.js',
    props: {
      author: 'KREADO',
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
  },

  HowItWorksWithThreeBlocks: {
    order: 9,
    title: 'How It Works With Three Blocks',
    description: 'Display product workflow with three detailed feature blocks',
    recommendedPosition: 'Mid section, after workflow',
    filePath: 'src/components/common_components/how-it-works-with-three-blocks.js',
    props: {
      author: 'KREADO',
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
  },

  ProductComparisonTable: {
    order: 10,
    title: 'Product Comparison Table',
    description: 'Compare features between your product and competitors',
    recommendedPosition: 'Mid-lower section, before pricing',
    filePath: 'src/components/common_components/product_comparison_table.js',
    props: {
      author: 'KREADO',
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
  },

  UserReviews: {
    order: 11,
    title: 'User Reviews',
    description: 'Display user testimonials and feedback',
    recommendedPosition: 'Mid-lower section, after product comparison',
    filePath: 'src/components/common_components/user-reviews.js',
    props: {
      BottomContent: [
        {
          name: "Sarah Chen",
          position: "Marketing Director - TechCorp",
          avatarUrl: "/images/avatar1.webp",
          title: "Dramatically Improved Our Marketing Efficiency",
          content: "After implementing KREADO AI, our video production time decreased by 90%. The AI-generated content quality is impressive, and the multilingual capabilities have made international expansion effortless."
        },
        {
          name: "Michael Zhang",
          position: "Content Lead - GlobalMedia",
          avatarUrl: "/images/avatar2.webp",
          title: "Revolutionary Video Production Tool",
          content: "As a content team leader, I'm impressed by KREADO AI's efficiency. It not only saves significant time and resources but also maintains consistent high-quality video output."
        },
        {
          name: "Emily Wang",
          position: "E-commerce Manager - ShopNow",
          avatarUrl: "/images/avatar3.webp",
          title: "Perfect Solution for E-commerce Videos",
          content: "We needed numerous product showcase videos, and KREADO AI solved this perfectly. The automated multilingual video generation helps us enter new markets quickly."
        },
        {
          name: "David Liu",
          position: "Founder - StartupX",
          avatarUrl: "/images/avatar4.webp",
          title: "Ideal for Startups",
          content: "As a startup founder, KREADO AI has been a game-changer. It allows us to produce professional marketing videos at a fraction of the traditional cost and time."
        }
      ]
    }
  },

  UserReviewsMovingCards: {
    order: 12,
    title: 'User Reviews Moving Cards',
    description: 'Animated user testimonials carousel display with enhanced visual effects',
    recommendedPosition: 'Mid-lower section, after product features',
    filePath: 'src/components/common_components/user-reviews-moving-cards.js',
    props: {
      BottomContent: [
        {
          name: "David Miller",
          position: "Innovation Director - FutureCorp",
          title: "Revolutionary Content Creation",
          content: "KREADO AI has completely transformed our approach to video marketing. The AI-driven content generation is not just fast - it's incredibly intelligent and adaptable."
        },
        {
          name: "Alexandra Peters",
          position: "Global Marketing Head - TechVision",
          title: "Exceptional Marketing Results",
          content: "The versatility and speed of KREADO AI's video generation have given us a competitive edge. Our marketing campaigns are now more dynamic and engaging than ever."
        },
        {
          name: "Thomas Wright",
          position: "Digital Strategy Lead - MediaPro",
          title: "Game-Changing Efficiency",
          content: "What used to take our team weeks now happens in minutes. The quality and consistency of the AI-generated videos have exceeded all our expectations."
        },
        {
          name: "Caroline Foster",
          position: "Brand Director - GlobalBrands",
          title: "Perfect for Brand Building",
          content: "KREADO AI maintains our brand consistency across all markets while allowing for local customization. It's the perfect balance of efficiency and brand control."
        },
        {
          name: "Richard Martinez",
          position: "Operations Manager - ScaleUp Inc",
          title: "Streamlined Production Process",
          content: "The automated workflow and intelligent content generation have revolutionized our video production. We're creating more content with better results and lower costs."
        }
      ]
    }
  },

  UserReviewsSquareCards: {
    order: 13,
    title: 'User Reviews Square Cards',
    description: 'Three-column layout square user review cards with gradient star ratings',
    recommendedPosition: 'Mid-lower section, alternative to standard reviews',
    filePath: 'src/components/common_components/user-reviews-square-cards.js',
    props: {
      BottomContent: [
        {
          name: "Jennifer Lee",
          position: "Marketing VP - TechGrowth",
          title: "Exceeded All Expectations",
          content: "The AI-powered video generation has revolutionized our marketing approach. We're now producing high-quality content at unprecedented speed."
        },
        {
          name: "Robert Chen",
          position: "Digital Director - MediaForce",
          title: "Game-Changing Platform",
          content: "KREADO AI has transformed our content strategy. The multilingual capabilities and quick turnaround time are exactly what we needed."
        },
        {
          name: "Lisa Wang",
          position: "CEO - InnovateTech",
          title: "Outstanding Results",
          content: "The efficiency and quality of videos produced through KREADO AI have significantly improved our marketing ROI across all channels."
        },
        {
          name: "Mark Zhang",
          position: "Growth Lead - StartupPro",
          title: "Highly Recommended",
          content: "From quick social media content to full marketing campaigns, KREADO AI delivers consistent quality across all our video needs."
        },
        {
          name: "Sarah Johnson",
          position: "Content Manager - GlobalBrands",
          title: "Perfect for Global Marketing",
          content: "The ability to quickly generate localized content for multiple markets has been invaluable for our international expansion."
        },
        {
          name: "Kevin Liu",
          position: "Product Director - FutureTech",
          title: "Impressive Technology",
          content: "The AI's understanding of content and automatic visual matching capabilities are truly impressive. A must-have tool for modern marketing."
        }
      ]
    }
  },

  CallToActionWithTable: {
    order: 14,
    title: 'Call To Action With Table',
    description: 'Display feature list with right-side call to action',
    recommendedPosition: 'Mid-lower section, after comparison',
    filePath: 'src/components/common_components/call-to-action-with-a-table.js',
    props: {
      author: 'KREADO',
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
  },

  KeyResultsWithTextBlock: {
    order: 15,
    title: 'Key Results With Text Block',
    description: 'Display article content with title and paragraphs',
    recommendedPosition: 'Content area, flexible positioning',
    filePath: 'src/components/common_components/key-results-with-text-block.js',
    props: {
      title: 'Understanding AI Video Creation',
      leftContent: [
        {
          percentage: 90,
          description: 'Reduction in video production time compared to traditional methods'
        },
        {
          percentage: 40,
          description: 'Languages supported for automatic localization and voiceover generation'
        },
        {
          percentage: 70,
          description: 'Average cost savings for businesses switching to AI-powered video creation'
        }
      ],
      rightContent: [
        {
          content: {
            contentTitle: 'The Power of AI in Video Production',
            contentText: 'AI technology has revolutionized the way we create and distribute video content. With advanced algorithms and machine learning capabilities, what once took days or weeks can now be accomplished in minutes. Our cutting-edge AI system analyzes your content requirements, automatically selects appropriate visuals, generates professional transitions, and ensures perfect timing for each scene. This breakthrough technology not only saves time but also maintains consistent quality across all your video productions.'
          }
        },
        {
          content: {
            contentTitle: 'Multilingual Support',
            contentText: 'Our platform supports over 40 languages, making it easy to reach global audiences. The AI automatically generates appropriate translations and voiceovers while maintaining the original message and tone. Each translation is carefully optimized for cultural nuances and local preferences, ensuring your message resonates with viewers worldwide. The system also automatically adjusts visual elements and timing to accommodate different language lengths and reading speeds, delivering a truly localized experience.'
          }
        },
        {
          content: {
            contentTitle: 'Cost-Effective Solution for Modern Marketing',
            contentText: 'Traditional video production often requires extensive resources, including professional videographers, editors, and voice talent. Our AI-powered platform eliminates these requirements, providing a comprehensive solution that delivers professional results at a fraction of the cost. By automating the entire video creation process, businesses can produce more content more frequently, enabling them to maintain an active presence across all marketing channels.'
          }
        },
        {
          content: {
            contentTitle: 'Advanced Customization Options',
            contentText: 'Our platform offers extensive customization capabilities to ensure your videos perfectly align with your brand identity. From color schemes and typography to transition styles and audio preferences, every aspect can be tailored to your specific needs. The AI learns from your preferences over time, making future video creation even more efficient while maintaining brand consistency across all your content.'
          }
        },
        {
          content: {
            contentTitle: 'Data-Driven Performance Optimization',
            contentText: 'Leverage the power of analytics to optimize your video content. Our AI system tracks viewer engagement, retention rates, and conversion metrics to provide actionable insights. These data-driven recommendations help you understand what works best for your audience, allowing you to continuously improve your video marketing strategy and maximize ROI across different platforms and markets.'
          }
        },
        {
          content: {
            contentTitle: 'Enterprise-Grade Security and Scalability',
            contentText: 'Built with enterprise needs in mind, our platform offers robust security features and unlimited scalability. All content is processed and stored with bank-level encryption, ensuring your sensitive data remains protected. The cloud-based infrastructure automatically scales to handle any volume of video generation, making it suitable for businesses of all sizes, from startups to global enterprises.'
          }
        }
      ]
    }
  },

  KeyResultsWithThreeCards: {
    order: 16,
    title: 'Key Results With Three Cards',
    description: 'Display competitor comparison data in three cards',
    recommendedPosition: 'Mid section, after features or case studies',
    filePath: 'src/components/common_components/key-results-with-three-cards.js',
    props: {
      BottomContent: [
        {
          competitorLogo: '/images/competitor1-logo.webp',
          competitorName: 'Traditional Video Production',
          percentage: 85,
          metric: 'Cost Reduction',
          description: 'Businesses using KREADO AI report significant cost savings compared to traditional video production methods, with faster turnaround times.'
        },
        {
          competitorLogo: '/images/competitor2-logo.webp',
          competitorName: 'Manual Localization',
          percentage: 90,
          metric: 'Time Saved',
          description: 'Our AI-powered localization process is dramatically faster than manual translation and voiceover recording methods.'
        },
        {
          competitorLogo: '/images/competitor3-logo.webp',
          competitorName: 'Basic Video Tools',
          percentage: 73,
          metric: 'Higher Engagement',
          description: 'Videos created with KREADO AI show significantly higher viewer engagement rates compared to basic video creation tools.'
        }
      ]
    }
  },

  KeyResultsWithImage: {
    order: 17,
    title: 'Key Results With Image',
    description: 'Display key metrics with right-side image',
    recommendedPosition: 'Content area, flexible positioning',
    filePath: 'src/components/common_components/key-results-with-image.js',
    props: {
      BottomContent: [
        {
          percentage: 95,
          description: 'Customer Satisfaction Score, based on over 10,000 user feedbacks'
        },
        {
          percentage: 80,
          description: 'Average marketing efficiency improvement compared to traditional video production methods'
        },
        {
          percentage: 70,
          description: 'Investment return ratio in the first month'
        }
      ]
    }
  },

  MoreInsightsWithFourCards: {
    order: 18,
    title: 'More Insights With Four Cards',
    description: 'Display related articles or insights in card format',
    recommendedPosition: 'Lower section, after main content',
    filePath: 'src/components/common_components/more_insights_with_four_cards.js',
    props: {
        TopContent: [
          {
            imageUrl: '/images/kreado-demo-pic1.webp',
            subTitle: 'AI TECHNOLOGY',
            title: 'The Future of Video Marketing'
          },
          {
            imageUrl: '/images/kreado-demo-pic2.webp',
            subTitle: 'CASE STUDY',
            title: 'Success Stories with AI Videos'
          },
          {
            imageUrl: '/images/kreado-demo-pic1.webp',
            subTitle: 'TUTORIAL',
            title: 'Getting Started with KREADO AI'
          },
          {
            imageUrl: '/images/kreado-demo-pic2.webp',
            subTitle: 'INDUSTRY NEWS',
            title: 'Latest Trends in AI Marketing'
          }
        ]
    }
  },

  ImageBanner: {
    order: 19,
    title: 'Image Banner',
    description: 'Display full-width image banner',
    recommendedPosition: 'Flexible, used to break up text sections',
    filePath: 'src/components/common_components/image_banner.js',
    props: {
      TopContent: {
        imageUrl: '/images/kreado-top-bg.webp',
        altText: 'AI Video Creation'
      }
    }
  },

  Faqs: {
    order: 20,
    title: 'FAQ Section',
    description: 'Display frequently asked questions in two columns',
    recommendedPosition: 'Lower section, before CTA',
    filePath: 'src/components/common_components/faqs.js',
    props: {
      author: 'KREADO',
      title: 'Frequently Asked Questions',
      BottomContent: [
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
  },

  FaqTwoColumnsWithSmallTitle: {
    order: 21,
    title: 'FAQ Two Columns With Small Title',
    description: 'Two-column FAQ section with left title and right expandable Q&A',
    recommendedPosition: 'Lower section, before pricing',
    filePath: 'src/components/common_components/faq-two-columns-with-small-title.js',
    props: {
      author: 'KREADO',
      BottomContent: [
        {
          question: 'How does the AI video creation process work?',
          answer: 'Our AI technology analyzes your input content and automatically generates professional videos by selecting appropriate visuals, animations, and transitions. The process is fully automated and typically takes just minutes.'
        },
        {
          question: 'What languages do you support?',
          answer: 'We currently support over 40 languages including English, Spanish, Chinese, Japanese, French, German, and many more. Each language comes with natural-sounding AI voiceover capabilities.'
        },
        {
          question: 'How long does it take to create a video?',
          answer: 'Most videos can be generated within 5-10 minutes, depending on the length and complexity of your content. This is significantly faster than traditional video production methods.'
        },
        {
          question: 'Can I customize the video style and branding?',
          answer: 'Yes, you can customize various aspects including visual style, color schemes, fonts, logos, and other branding elements to match your company identity.'
        }
      ]
    }
  },

  FaqTwoColumnsWithBigTitle: {
    order: 22,
    title: 'FAQ Two Columns With Big Title',
    description: 'Two-column FAQ section with left large title and right expandable Q&A',
    recommendedPosition: 'Lower section, before pricing',
    filePath: 'src/components/common_components/faq-two-columns-with-big-title.js',
    props: {
      author: 'KREADO',
      BottomContent: [
        {
          question: 'What is KREADO AI Video Generator?',
          answer: 'KREADO AI is an advanced platform that automatically transforms your text content into professional marketing videos using artificial intelligence technology.'
        },
        {
          question: 'How many languages are supported?',
          answer: 'We support over 40 languages with automatic subtitle generation and AI voiceover capabilities, making it perfect for global marketing campaigns.'
        },
        {
          question: 'What makes KREADO different from traditional video tools?',
          answer: 'Our AI-powered approach allows for rapid video creation in minutes instead of days, with automatic language localization and significant cost savings.'
        },
        {
          question: 'Do I need video editing experience?',
          answer: 'No experience needed. Our AI handles all the technical aspects of video creation, making it accessible to everyone regardless of their video editing skills.'
        }
      ]
    }
  },

  PricingWithThreeCards: {
    order: 23,
    title: 'Pricing With Three Cards',
    description: 'Display pricing plans with feature comparison',
    recommendedPosition: 'Lower section, after FAQ and before final CTA',
    filePath: 'src/components/common_components/pricing-with-three-cards.js',
    props: {
      author: 'KREADO',
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
  },

  CallToAction: {
    order: 24,
    title: 'Call To Action',
    description: 'Final call to action section with strong message',
    recommendedPosition: 'Must be the last component',
    filePath: 'src/components/common_components/call-to-action.js',
    props: {
      author: 'KREADO',
      title: 'Ready to Transform Your Video Marketing?',
      subTitle: 'Join thousands of businesses already using KREADO AI',
      buttonText: 'Get Started Free'
    }
  },

  CallToActionWithImage: {
    order: 25,
    title: 'Call To Action With Image',
    description: 'Final call to action section with background image',
    recommendedPosition: 'Must be the last component',
    filePath: 'src/components/common_components/call-to-action-with-image.js',
    props: {
      author: 'KREADO',
      title: 'Ready to Transform Your Video Marketing?',
      subtitle: 'Join thousands of businesses already using KREADO AI',
      bottomContent: {
        buttonText: 'Get Started Free',
        backgroundImage: '/images/cta-background.jpg'
      }
    }
  },

  TrustedByLogos: {
    order: 26,
    title: 'Trusted By Logos',
    description: 'Component to showcase partner/client logos in a carousel',
    recommendedPosition: 'Upper section, usually after Hero Section',
    filePath: 'src/components/common_components/trusted-by-logos.js',
    props: {
      BottomContent: [
        {
          imageUrl: '/images/partner-logo1.webp',
          altText: 'Partner Company 1'
        },
        {
          imageUrl: '/images/partner-logo2.webp',
          altText: 'Partner Company 2'
        },
        {
          imageUrl: '/images/partner-logo3.webp',
          altText: 'Partner Company 3'
        },
        {
          imageUrl: '/images/partner-logo4.webp',
          altText: 'Partner Company 4'
        },
        {
          imageUrl: '/images/partner-logo5.webp',
          altText: 'Partner Company 5'
        },
        {
          imageUrl: '/images/partner-logo6.webp',
          altText: 'Partner Company 6'
        }
      ]
    }
  }
};

export default exampleData; 