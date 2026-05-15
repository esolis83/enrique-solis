import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #bf4956;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #8d8f91;
    transform: scale(1.1);
  }
`;

const ModalTitle = styled.h2`
  color: #bf4956;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ModalDescription = styled.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

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
  color: #856404;
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

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CtaButton = styled.a`
  display: inline-block;
  background: #bf4956;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background: #8d8f91;
    transform: translateY(-2px);
  }
`;

const ExternalLinkModal = ({ isOpen, onClose, project }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!isOpen || !project) return null;

  return (
    <ModalOverlay onClick={ onClose }>
      <ModalContent onClick={ (e) => e.stopPropagation() }>
        <CloseButton onClick={ onClose }>×</CloseButton>

        <ModalTitle>{ project.title }</ModalTitle>

        <ModalDescription>
          { project.description }
        </ModalDescription>

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
          <CtaButton
            href={ project.externalLink }
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site →
          </CtaButton>
          <CtaButton as="button" onClick={ onClose } style={ { background: '#8d8f91', cursor: 'pointer' } }>
            Close
          </CtaButton>
        </ActionButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ExternalLinkModal;
