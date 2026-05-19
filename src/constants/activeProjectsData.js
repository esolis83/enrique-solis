export const activeProjects = [
  {
    id: 1,
    title: 'Frameshift',
    description: 'A streaming-service-style portfolio app built with a headless WordPress CMS backend and a React + TypeScript frontend. WordPress manages all content via its REST API while the frontend handles genre rows, hover previews, Framer Motion layout animations, and a full detail modal — all with strict TypeScript throughout.',
    heroImage: '/images/frameshift-hero.webp',
    thumbnail: '/images/frameshift-thumbnail.webp',
    tags: ['React', 'TypeScript', 'WordPress', 'CSS'],
    technologies: ['React 18', 'TypeScript', 'Vite 5', 'Zustand', 'TanStack Query v5', 'Framer Motion', 'CSS Modules', 'WordPress REST API', 'ACF', 'Netlify'],
    status: 'Live Demo',
    codeExample: null,
    features: [
      'Headless WordPress CMS — content updates without frontend rebuilds',
      'WordPress REST API + ACF serving all movie data',
      'TanStack Query v5 for caching and data synchronization',
      'Zustand for lightweight global state management',
      'Framer Motion layout animations on detail modal open/close',
      'Genre-based horizontal scroll rows with fade-in controls',
      'Movie card hover animations with autoplay preview clips',
      'AnimatePresence page transitions between views',
      'Search filtering by title',
      'Strict TypeScript throughout — interfaces for all API shapes'
    ],
    externalLink: 'https://frameshift.enriquesolis.me',
    disclaimer: 'This project is in active development. More features and content are on the way.'
  },
  {
    id: 2,
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
    isInteractive: true,
    demoType: 'avatar'
  },
  {
    id: 3,
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
    id: 4,
    title: 'Hidden Gems Travel Blog',
    description: 'A WordPress-powered travel blog showcasing unique and lesser-known destinations around the world. Features stunning photography, detailed travel guides, and insider tips for off-the-beaten-path adventures.',
    heroImage: '/images/wordpress-blog-hero.webp',
    thumbnail: '/images/wordpress-blog-hero.webp',
    tags: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript'],
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Custom Theme Development', 'API Integration', 'ACF'],
    status: 'Live Demo',
    codeExample: null,
    features: [
      'Custom WordPress theme',
      'Blog post categories and tags',
      'Photo galleries and media management',
      'SEO optimization and meta descriptions',
      'Social media integration',
      'Responsive mobile design',
      'Custom post types for destinations'
    ],
    externalLink: 'https://enrique-test-shop.myshopify.com/',
    disclaimer: 'This is a WordPress development site in developer mode. Work in progress.'
  },
  {
    id: 5,
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
    id: 6,
    title: 'Skills Dashboard',
    description: 'An interactive skills showcase built for this portfolio\'s homepage — organized into four category cards with hover-reveal proficiency levels. Each skill tag fades its name out and slides a color-coded level badge in on hover, all driven by a CSS ::after pseudo-element and a single data-level attribute.',
    heroImage: '/images/skills-dashboard.webp',
    thumbnail: '/images/skills-dashboard-thumbnail.webp',
    tags: ['React', 'CSS', 'JavaScript', 'Styled Components'],
    technologies: ['React', 'Styled Components', 'CSS Animations', 'CSS Pseudo-elements', 'react-icons'],
    status: 'Done',
    codeExample: 'skills_dashboard',
    features: [
      'Four category cards: Frontend, Backend & DevOps, AI Tooling, Design & UX',
      'Hover-reveal proficiency level on every skill tag',
      'Color-coded levels: Expert (green), Advanced (red), Intermediate (amber), Familiar (gray)',
      'CSS ::after pseudo-element slide-up animation — zero JavaScript',
      'data-level attribute drives all color and label states',
      'Legend row with color-dot indicators',
      'Responsive 2-column → 1-column grid layout'
    ]
  },
  {
    id: 7,
    title: 'Skill Phrase Cycler',
    description: 'A lightweight React animation pattern used in the portfolio footer — a rotating phrase that fades out, swaps its text, then fades back in on a loop. Built with two useState values, a single useEffect interval, and one CSS opacity transition. No animation library needed.',
    heroImage: null,
    thumbnail: null,
    tags: ['React', 'CSS', 'JavaScript', 'Styled Components'],
    technologies: ['React', 'Styled Components', 'CSS Transitions', 'useEffect', 'setInterval'],
    status: 'Done',
    isInteractive: true,
    demoType: 'cycler',
    codeExample: 'skill_cycler',
    features: [
      'Rotating phrase loop driven by setInterval',
      'Fade-out → text swap → fade-in via two useState values',
      'setTimeout offsets the swap to the midpoint of the fade',
      'CSS opacity transition handles the entire visual effect',
      'Cleanup function prevents memory leaks on unmount',
      'Zero external animation libraries',
      'Easily reusable — swap in any string array'
    ]
  }
];
