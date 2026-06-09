export const avatarAnimation = {
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
};
