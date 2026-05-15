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

const EMAIL = 'e_solis83@yahoo.com';

const skillCycle = [
  'React 18 + TypeScript',
  'Next.js App Router',
  'AI Agents & Claude Code',
  'GitHub Copilot',
  'Shopify & WordPress',
  'Figma & Accessible UI',
];

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
    let success = false;

    // Strategy 1: modern clipboard API (HTTPS / secure context)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(EMAIL);
        success = true;
      } catch (_) { /* fall through */ }
    }

    // Strategy 2: execCommand fallback (HTTP / localhost / older browsers)
    if (!success) {
      try {
        const el = document.createElement('textarea');
        el.value = EMAIL;
        el.setAttribute('readonly', '');
        el.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';
        document.body.appendChild(el);
        el.select();
        success = document.execCommand('copy');
        document.body.removeChild(el);
      } catch (_) { /* truly failed */ }
    }

    if (success) {
      setCopied(true);
      trackEvent('contact_click', { method: 'email_copy' });
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

        <ContactMethods>
          <ContactRow>
            <ContactIconWrap><MdPhone /></ContactIconWrap>
            <ContactLink
              href="tel:323-393-8751"
              aria-label="Phone Number"
              onClick={ () => trackEvent('contact_click', { method: 'phone' }) }
            >
              (323) 393-8751
            </ContactLink>
          </ContactRow>
          <ContactRow>
            <ContactIconWrap><MdEmail /></ContactIconWrap>
            <ContactLink
              href={ `mailto:${EMAIL}` }
              aria-label="Email Address"
              onClick={ () => trackEvent('contact_click', { method: 'email' }) }
            >
              { EMAIL }
            </ContactLink>
            <CopyButton type="button" onClick={ handleCopyEmail } aria-label="Copy email address">
              { copied ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy</> }
            </CopyButton>
          </ContactRow>
        </ContactMethods>

        <SocialRow>
          <SocialButton
            href="https://www.linkedin.com/in/enriquesolis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            onClick={ () => trackEvent('social_click', { platform: 'linkedin', location: 'footer' }) }
          >
            <AiFillLinkedin size="1.2rem" /> LinkedIn
          </SocialButton>
          <SocialButton
            href="https://github.com/esolis83"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            onClick={ () => trackEvent('social_click', { platform: 'github', location: 'footer' }) }
          >
            <AiFillGithub size="1.2rem" /> GitHub
          </SocialButton>
        </SocialRow>

        <FooterBottom>
          © { new Date().getFullYear() } Enrique Solis — Frontend Engineer
        </FooterBottom>
      </ContactCard>
    </FooterWrapper>
  );
};

export default Footer;
