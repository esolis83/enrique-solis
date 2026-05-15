import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AvatarContainer, AvatarImage, ThoughtBubble, CTAButton, CTAText, BubbleTail } from './AvatarStyles';
import { trackEvent } from '../../utils/analytics';

const Avatar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 22 && !isVisible) {
        setIsVisible(true);
      }

      if (scrollPercentage < 22 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

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
