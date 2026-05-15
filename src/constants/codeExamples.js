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
