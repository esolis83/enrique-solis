export const codeExamples = {
  avatar_animation: {
    title: 'Avatar Animation - Complete Implementation',
    description: 'Scroll-triggered avatar with floating animation',
    language: 'javascript',
    sections: [
      {
        name: 'HTML/JSX',
        language: 'jsx',
        code: `<AvatarContainer isVisible={isVisible}>
  <ThoughtBubble>
    <CTAButton href="/explore-active-projects">
      <CTAText>Explore Projects</CTAText>
    </CTAButton>
    <BubbleTail />
  </ThoughtBubble>
  <AvatarImage 
    src="/images/avatar-one.png" 
    alt="Avatar" 
  />
</AvatarContainer>`
      },
      {
        name: 'CSS Animations',
        language: 'css',
        code: `const float = keyframes\`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
\`;

const slideInFromRight = keyframes\`
  0% {
    opacity: 0;
    transform: translateX(500px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
\`;`
      },
      {
        name: 'Scroll Detection',
        language: 'javascript',
        code: `useEffect(() => {
  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / 
      (document.documentElement.scrollHeight - 
      window.innerHeight)) * 100;

    if (scrollPercentage >= 22 && !isVisible) {
      setIsVisible(true);
    }
    if (scrollPercentage < 22 && isVisible) {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener(
    'scroll', handleScroll
  );
}, [isVisible]);`
      },
      {
        name: 'Styled Component',
        language: 'javascript',
        code: `export const AvatarImage = styled.img\`
  width: 224px;
  height: 315px;
  object-fit: cover;
  animation: \${float} 4s ease-in-out infinite;
  transition: transform 0.3s ease;
  rotate: -13deg;

  &:hover {
    transform: scale(1.02);
  }
\`;`
      }
    ]
  },
  ecommerce_checkout: {
    title: 'E-Commerce Checkout Flow',
    description: 'Handling secure payment processing with Stripe integration',
    language: 'javascript',
    code: `// Checkout handler with Stripe integration
const handleCheckout = async (cartItems) => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cartItems,
        email: userEmail
      })
    });
    
    const { sessionId } = await response.json();
    const stripe = await stripePromise;
    
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Checkout error:', error);
  }
};`
  },
  wordpress_blog: {
    title: 'WordPress Custom Theme Development',
    description: 'Building a custom WordPress theme for travel blog',
    language: 'php',
    code: `<?php
// functions.php - Custom theme functions
function hidden_gems_theme_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu'
    ));
}
add_action('after_setup_theme', 'hidden_gems_theme_setup');

// Custom post type for destinations
function create_destination_post_type() {
    register_post_type('destination',
        array(
            'labels' => array(
                'name' => 'Destinations',
                'singular_name' => 'Destination'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-location-alt'
        )
    );
}
add_action('init', 'create_destination_post_type');

// Enqueue scripts and styles
function hidden_gems_scripts() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_script('navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'hidden_gems_scripts');
?>`
  },
  skills_dashboard: {
    title: 'Skills Dashboard - Hover-Reveal Proficiency',
    description: 'Each skill tag hides its name on hover and slides up a color-coded proficiency label — driven entirely by a CSS ::after pseudo-element and a data-level attribute. No JavaScript required for the interaction.',
    sections: [
      {
        name: 'Data Structure',
        language: 'javascript',
        code: `const skillCategories = [
  {
    icon: FaCode,
    title: 'Frontend Engineering',
    skills: [
      { name: 'HTML5 / CSS3', level: 'Expert' },
      { name: 'React 18',     level: 'Intermediate' },
      { name: 'TypeScript',   level: 'Intermediate' },
      { name: 'Vue.js',       level: 'Intermediate' },
    ]
  },
  {
    icon: FaServer,
    title: 'Backend & DevOps',
    skills: [
      { name: 'WordPress', level: 'Expert' },
      { name: 'Git',       level: 'Advanced' },
      { name: 'Node.js',   level: 'Intermediate' },
      { name: 'REST APIs', level: 'Familiar' },
    ]
  },
  // ... AI Tooling, Design & UX
];`
      },
      {
        name: 'CSS Hover Trick',
        language: 'css',
        code: `export const SkillTag = styled.span\`
  position: relative;
  overflow: hidden;
  padding: 5px 13px;
  border-radius: 100px;
  transition: background 0.22s ease,
              border-color 0.22s ease,
              color 0.22s ease;

  /* Level label — hidden, sitting below */
  &::after {
    content: attr(data-level);   /* pulls from JSX prop */
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.22s ease,
                transform 0.22s ease;
  }

  /* On hover: fade name out, slide level in */
  &:hover {
    color: transparent;
    &::after { opacity: 1; transform: translateY(0); }
  }

  /* Color per level */
  &:hover[data-level="Expert"] {
    background: rgba(34, 197, 94, 0.14);
    border-color: rgba(34, 197, 94, 0.55);
    &::after { color: #22c55e; }
  }
  &:hover[data-level="Advanced"] {
    background: rgba(191, 73, 86, 0.18);
    border-color: rgba(191, 73, 86, 0.7);
    &::after { color: #bf4956; }
  }
  &:hover[data-level="Intermediate"] {
    background: rgba(245, 158, 11, 0.14);
    border-color: rgba(245, 158, 11, 0.55);
    &::after { color: #f59e0b; }
  }
  &:hover[data-level="Familiar"] {
    background: rgba(141, 143, 145, 0.14);
    border-color: rgba(141, 143, 145, 0.55);
    &::after { color: #8d8f91; }
  }
\`;`
      },
      {
        name: 'JSX Render',
        language: 'jsx',
        code: `const Skills = () => (
  <Section id="tech">
    <LegendRow>
      <LegendHint>Hover a skill to see proficiency →</LegendHint>
      { levels.map(({ label, color }) => (
        <LegendItem key={label}>
          <LegendDot color={color} />
          {label}
        </LegendItem>
      )) }
    </LegendRow>

    <SkillsGrid>
      { skillCategories.map(({ icon: Icon, title, skills }) => (
        <SkillCard key={title}>
          <CardHeader>
            <CardIcon><Icon /></CardIcon>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <TagGrid>
            { skills.map(({ name, level }) => (
              // data-level is read by CSS ::after content
              <SkillTag key={name} data-level={level}>
                {name}
              </SkillTag>
            )) }
          </TagGrid>
        </SkillCard>
      )) }
    </SkillsGrid>
  </Section>
);`
      }
    ]
  },
  skill_cycler: {
    title: 'Skill Phrase Cycler — Fade & Swap Pattern',
    description: 'The trick is two state values working together: phraseVisible drives the CSS opacity, and a setTimeout waits for the fade-out to finish before swapping the text. The interval fires every 2.6s, kicks off a 380ms fade-out, then swaps and fades back in.',
    sections: [
      {
        name: 'Cycle Logic',
        language: 'javascript',
        code: `const skillCycle = [
  'React 18 + TypeScript',
  'Next.js App Router',
  'AI Agents & Claude Code',
  'GitHub Copilot',
  'Shopify & WordPress',
  'Figma & Accessible UI',
];

const [skillIndex, setSkillIndex] = useState(0);
const [phraseVisible, setPhraseVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    // 1. Fade out the current phrase
    setPhraseVisible(false);

    // 2. Wait for the CSS transition to finish,
    //    then swap the text and fade back in
    setTimeout(() => {
      setSkillIndex(i => (i + 1) % skillCycle.length);
      setPhraseVisible(true);
    }, 380); // matches the CSS transition duration

  }, 2600); // how long each phrase stays visible

  // Cleanup: stop the interval when component unmounts
  return () => clearInterval(interval);
}, []);`
      },
      {
        name: 'CSS Transition',
        language: 'css',
        code: `export const SkillCyclerWrap = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #8d8f91;
  font-weight: 500;
  /* min-height prevents layout shift as text swaps */
  min-height: 22px;
\`;

export const SkillPhrase = styled.span\`
  color: #bf4956;
  font-weight: 700;

  /* The entire animation lives here —
     visible prop toggles between 1 and 0 */
  opacity: \${props => props.visible ? 1 : 0};
  transition: opacity 0.35s ease;
\`;`
      },
      {
        name: 'JSX',
        language: 'jsx',
        code: `// The rendered output is just two elements.
// All the animation logic stays in state + CSS.

<SkillCyclerWrap>
  Currently working with:&nbsp;
  <SkillPhrase visible={ phraseVisible }>
    { skillCycle[skillIndex] }
  </SkillPhrase>
</SkillCyclerWrap>`
      }
    ]
  },
  social_media_integration: {
    title: 'Social Media API Integration',
    description: 'Fetching and aggregating data from multiple social platforms',
    language: 'javascript',
    code: `// GraphQL query for aggregated social metrics
const GET_SOCIAL_METRICS = gql\`
  query getSocialMetrics($userId: ID!, $platform: String!) {
    socialMetrics(userId: $userId, platform: $platform) {
      followers
      engagement
      reachLastMonth
      posts {
        id
        content
        likes
        comments
        shares
        createdAt
      }
    }
  }
\`;

// React Hook to fetch metrics
const useSocialMetrics = (userId) => {
  const { data, loading, error } = useQuery(GET_SOCIAL_METRICS, {
    variables: { userId }
  });
  
  return { metrics: data?.socialMetrics, loading, error };
};`
  },
  fitness_tracking_system: {
    title: 'Fitness Data Visualization',
    description: 'Creating interactive charts for progress tracking',
    language: 'javascript',
    code: `// React component with Chart.js for fitness progress
import { LineChart } from 'react-chartjs-2';

export const FitnessChart = ({ workoutData }) => {
  const chartData = {
    labels: workoutData.map(w => w.date),
    datasets: [
      {
        label: 'Calories Burned',
        data: workoutData.map(w => w.calories),
        borderColor: '#bf4956',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Workouts',
        data: workoutData.map(w => w.workouts),
        borderColor: '#8d8f91',
        fill: false,
        tension: 0.4
      }
    ]
  };
  
  return <LineChart data={chartData} options={{ responsive: true }} />;
};`
  }
};
