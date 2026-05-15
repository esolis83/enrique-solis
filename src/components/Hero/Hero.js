import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { LeftSection, RightSection, SocialContainer, SocialIconsContainer } from './HeroStyles';
import LogoStrip from '../LogoStrip/LogoStrip';
import { trackEvent } from '../../utils/analytics';

const Hero = () => (

  <Section row nopadding id="home">
    <LeftSection>
      <SectionTitle main center>
        HELLO,<br />
        I'M ENRIQUE SOLIS!
      </SectionTitle>
      <SectionText>
        As a Frontend Engineer with expertise in React and TypeScript, as well as Vue.js, I concentrate on creating fast, accessible, and production-ready user interfaces.
      </SectionText>
      <Button>
        <a
          href="https://enriquesolis.me/pdf/enrique_solis_resume.pdf"
          aria-label="Download Resume"
          target="_blank"
          rel="noopener noreferrer"
          alt="Download Resume"
          style={ { padding: '10px' } }
          onClick={ () => trackEvent('resume_download') }
        >
          DOWNLOAD RESUME
        </a>
      </Button>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons
            href="https://www.linkedin.com/in/enriquesolis/"
            alt="LinkedIn Icon"
            aria-label="LinkedIn Profile Link"
            onClick={ () => trackEvent('social_click', { platform: 'linkedin' }) }
          >
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons
            href="https://github.com/esolis83"
            alt="GitHub Icon"
            aria-label="GitHub Profile Link"
            onClick={ () => trackEvent('social_click', { platform: 'github' }) }
          >
            <AiFillGithub size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </LeftSection>
    <RightSection>
      <LogoStrip />
    </RightSection>
  </Section>

);

export default Hero;