export const activeProjects = [
  {
    id: 1,
    title: 'Avatar Animation',
    description: 'An interactive scroll-triggered avatar animation featuring floating effects, responsive design, and smooth transitions. Built with React and Styled Components for a seamless user experience.',
    heroImage: '/images/avatar-one-hero.webp',
    thumbnail: '/images/avatar-one-hero.webp',
    tags: ['React', 'JavaScript', 'CSS', 'Styled Components'],
    technologies: ['React', 'JavaScript', 'Styled Components', 'CSS Animations', 'Responsive Design'],
    status: 'Done',
    codeExample: 'avatar_animation',
    features: [
      'Scroll-triggered animation',
      'Smooth floating effect',
      'Responsive design',
      'CSS keyframe animations',
      'Fixed positioning with z-index management'
    ],
    isInteractive: true
  },
  {
    id: 2,
    title: 'Shopify E-Commerce Store',
    description: 'A fully functional Shopify e-commerce store featuring modern design, product catalog, shopping cart functionality, and seamless checkout process. Built with Shopify Liquid templates and custom theme development.',
    heroImage: '/images/shopify-ecommerce-hero.webp',
    thumbnail: '/images/shopify-ecommerce-hero.webp',
    tags: ['Shopify', 'Liquid', 'E-commerce', 'CSS', 'JavaScript'],
    technologies: ['Shopify Liquid', 'HTML', 'CSS', 'JavaScript', 'E-commerce'],
    status: 'Live Demo',
    codeExample: null,
    features: [
      'Products page with catalog view',
      'Add to cart functionality',
      'Shopping cart section',
      'Homepage with featured products',
      'Contact page with form',
      'Responsive mobile design',
      'SEO optimized'
    ],
    externalLink: 'https://enrique-test-shop.myshopify.com/',
    disclaimer: 'This is a Shopify development store. A password is required to access this site.',
    sitePassword: 'Testdev25'
  },
  {
    id: 3,
    title: 'Hidden Gems Travel Blog',
    description: 'A WordPress-powered travel blog showcasing unique and lesser-known destinations around the world. Features stunning photography, detailed travel guides, and insider tips for off-the-beaten-path adventures.',
    heroImage: '/images/wordpress-blog-hero.webp',
    thumbnail: '/images/wordpress-blog-hero.webp',
    tags: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Custom Theme Development', 'API Integration', 'ACF'],
    status: 'Live Demo',
    codeExample: 'null',
    features: [
      'Custom WordPress theme',
      'Blog post categories and tags',
      'Photo galleries and media management',
      'SEO optimization and meta descriptions',
      'Social media integration',
      'Responsive mobile design',
      'Custom post types for destinations',
    ],
    externalLink: 'https://enrique-test-shop.myshopify.com/',
    disclaimer: 'This is a WordPress development site in developer mode. Work in progress.'
  },
  {
    id: 4,
    title: 'Developer Portfolio',
    description: 'The portfolio site you are viewing right now — built with Next.js, React, and Styled Components. Features scroll-triggered animations, an interactive skills section with proficiency hover states, GA4 event tracking, and a paginated active projects showcase.',
    heroImage: '/images/portfolio-hero.webp',
    thumbnail: '/images/portfolio-thumbnail.webp',
    tags: ['Next.js', 'React', 'Styled Components', 'GA4'],
    technologies: ['Next.js', 'React 17', 'Styled Components', 'Google Analytics 4', 'Vercel'],
    status: 'Active Development',
    codeExample: null,
    features: [
      'Scroll-triggered avatar animation',
      'Skill proficiency hover reveal',
      'Paginated active projects section',
      'GA4 click event tracking throughout',
      'Copy-to-clipboard contact email',
      'Mobile-first responsive design',
      'Static export via next export'
    ]
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A comprehensive React + TypeScript dashboard for tracking social media metrics across platforms. Displays engagement analytics, follower growth, and post performance in a clean, data-rich interface.',
    heroImage: null,
    thumbnail: null,
    tags: ['React', 'TypeScript', 'Next.js', 'Chart.js'],
    technologies: ['React 18', 'TypeScript', 'Next.js App Router', 'Chart.js', 'Tailwind CSS', 'REST APIs'],
    status: 'In Progress',
    codeExample: null,
    features: [
      'Multi-platform metrics aggregation',
      'Interactive charts and graphs',
      'Engagement rate calculations',
      'Follower growth timeline',
      'Post performance breakdown',
      'Dark/light theme toggle',
      'Fully responsive layout'
    ]
  },
  {
    id: 6,
    title: 'React Component Library',
    description: 'A reusable, accessible component library built with React and TypeScript, published as an npm package. Designed for rapid prototyping with consistent design tokens, dark mode support, and full accessibility compliance.',
    heroImage: null,
    thumbnail: null,
    tags: ['React', 'TypeScript', 'Storybook', 'npm'],
    technologies: ['React 18', 'TypeScript', 'Styled Components', 'Storybook', 'Jest', 'npm'],
    status: 'Planning',
    codeExample: null,
    features: [
      'Themeable design token system',
      'WCAG 2.1 AA accessibility compliance',
      'Storybook documentation',
      'Jest + Testing Library test coverage',
      'Dark mode out of the box',
      'Tree-shakeable npm package',
      'TypeScript type definitions included'
    ]
  }
];
