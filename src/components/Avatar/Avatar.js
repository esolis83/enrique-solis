import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AvatarContainer, AvatarImage, ThoughtBubble, CTAButton, CTAText, BubbleTail } from './AvatarStyles';
import { trackEvent } from '../../utils/analytics';

const Avatar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(pct >= 22);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AvatarContainer isVisible={ isVisible }>
      <ThoughtBubble>
        <Link href="/explore-active-projects" passHref legacyBehavior>
          <CTAButton as="a" aria-label="View my active projects" onClick={ () => trackEvent('avatar_cta_click') }>
            <CTAText>View Active Projects</CTAText>
          </CTAButton>
        </Link>
        <BubbleTail />
      </ThoughtBubble>
      <AvatarImage src="/images/avatar-one.png" alt="Enrique Solis Avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
