import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FiCopy, FiCheck } from 'react-icons/fi';
import {
  FooterWrapper,
  ContactCard,
  SkillCyclerWrap,
  SkillPhrase,
  ContactHeadline,
  ContactSubtext,
  ContactMethods,
  ContactRow,
  ContactIconWrap,
  ContactLink,
  CopyButton,
  SocialRow,
  SocialButton,
  FooterBottom
} from './FooterStyles';
import { trackEvent } from '../../utils/analytics';
import { copyToClipboard } from '../../utils/clipboard';

const EMAIL = 'e_solis83@yahoo.com';

const skillCycle = [
  'React 18 + TypeScript',
  'Next.js App Router',
  'AI Agents & Claude Code',
  'GitHub Copilot',
  'Shopify & WordPress',
  'Figma & Accessible UI',
];

const ContactSection = ({ handleCopyEmail, copied }) => (
  <ContactMethods>
    <ContactRow>
      <ContactIconWrap><MdPhone /></ContactIconWrap>
      <ContactLink
        href="tel:323-393-8751"
        aria-label="Phone Number"
        onClick={ () => trackEvent('contact_phone_click') }
      >
        (323) 393-8751
      </ContactLink>
    </ContactRow>
    <ContactRow>
      <ContactIconWrap><MdEmail /></ContactIconWrap>
      <ContactLink
        href={ `mailto:${EMAIL}` }
        aria-label="Email Address"
        onClick={ () => trackEvent('contact_email_click') }
      >
        { EMAIL }
      </ContactLink>
      <CopyButton type="button" onClick={ handleCopyEmail } aria-label="Copy email address">
        { copied ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy</> }
      </CopyButton>
    </ContactRow>
  </ContactMethods>
);

const SocialLinks = () => (
  <SocialRow>
    <SocialButton
      href="https://www.linkedin.com/in/enriquesolis/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      onClick={ () => trackEvent('contact_linkedin_click') }
    >
      <AiFillLinkedin size="1.2rem" /> LinkedIn
    </SocialButton>
    <SocialButton
      href="https://github.com/esolis83"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      onClick={ () => trackEvent('contact_github_click') }
    >
      <AiFillGithub size="1.2rem" /> GitHub
    </SocialButton>
  </SocialRow>
);

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseVisible(false);
      setTimeout(() => {
        setSkillIndex(i => (i + 1) % skillCycle.length);
        setPhraseVisible(true);
      }, 380);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(EMAIL);
    if (success) {
      setCopied(true);
      trackEvent('contact_email_copy');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <FooterWrapper id="footer">
      <ContactCard>
        <SkillCyclerWrap>
          Currently working with:&nbsp;
          <SkillPhrase visible={ phraseVisible }>{ skillCycle[skillIndex] }</SkillPhrase>
        </SkillCyclerWrap>
        <ContactHeadline>Let's Build Something Great!!</ContactHeadline>
        <ContactSubtext>
          Have a project in mind or just want to connect? I usually respond within 24 hours.
        </ContactSubtext>
        <ContactSection handleCopyEmail={ handleCopyEmail } copied={ copied } />
        <SocialLinks />
        <FooterBottom>
          © { new Date().getFullYear() } Enrique Solis — Frontend Engineer
        </FooterBottom>
      </ContactCard>
    </FooterWrapper>
  );
};

export default Footer;
