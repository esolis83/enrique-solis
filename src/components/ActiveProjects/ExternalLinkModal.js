import React, { useState } from 'react';
import styled from 'styled-components';
import ModalShell from './ModalShell';
import { ModalDescription, ActionButtons, CtaButton, ModalButton } from './ModalStyles';

const Disclaimer = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #856404;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const DisclaimerTitle = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
`;

const RevealButton = styled.button`
  margin-top: 0.75rem;
  background: none;
  border: 1px solid #856404;
  border-radius: 4px;
  color: #856404;
  font-size: 1.2rem;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #856404;
    color: #fff;
  }
`;

const PasswordBadge = styled.span`
  display: inline-block;
  margin-top: 0.6rem;
  background: #0F1624;
  color: #fff;
  font-family: monospace;
  font-size: 1rem;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
`;

const ExternalLinkModal = ({ isOpen, onClose, project }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!project) return null;

  return (
    <ModalShell isOpen={ isOpen } onClose={ onClose } title={ project.title } maxWidth="500px">
      <ModalDescription>{ project.description }</ModalDescription>

      { project.disclaimer && (
        <Disclaimer>
          <DisclaimerTitle>⚠️ Access Information</DisclaimerTitle>
          { project.disclaimer }
          { project.sitePassword && (
            <>
              <br />
              { passwordVisible ? (
                <>
                  Password: <PasswordBadge>{ project.sitePassword }</PasswordBadge>
                  <RevealButton onClick={ () => setPasswordVisible(false) } style={ { marginLeft: '0.5rem' } }>
                    Hide
                  </RevealButton>
                </>
              ) : (
                <RevealButton onClick={ () => setPasswordVisible(true) }>
                  🔒 Reveal Password
                </RevealButton>
              ) }
            </>
          ) }
        </Disclaimer>
      ) }

      <ActionButtons>
        <CtaButton href={ project.externalLink } target="_blank" rel="noopener noreferrer">
          Visit Live Site →
        </CtaButton>
        <ModalButton secondary onClick={ onClose }>Close</ModalButton>
      </ActionButtons>
    </ModalShell>
  );
};

export default ExternalLinkModal;
