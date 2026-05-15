import React from 'react';
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
  max-width: 600px;
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
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const DemoContainer = styled.div`
  background: linear-gradient(135deg, #bf4956 0%, #8d8f91 100%);
  border-radius: 8px;
  padding: 2rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const AvatarImageInModal = styled.img`
  width: 200px;
  height: 280px;
  object-fit: cover;
  animation: float 4s ease-in-out infinite;
  rotate: -13deg;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
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

const AvatarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={ onClose }>
      <ModalContent onClick={ (e) => e.stopPropagation() }>
        <CloseButton onClick={ onClose }>×</CloseButton>

        <ModalTitle>Avatar Animation Demo</ModalTitle>

        <ModalDescription>
          This is a scroll-triggered avatar animation with floating effects. In the real website, the avatar appears when you scroll past 22% of the page and slides in from the right side with a smooth floating motion.
        </ModalDescription>

        <DemoContainer>
          <AvatarImageInModal src="/images/avatar-one.png" alt="Avatar Animation Demo" />
        </DemoContainer>

        <ModalDescription style={ { fontSize: '1.2rem', color: '#888', marginBottom: '1rem' } }>
          The animation features:
          <ul style={ { margin: '0.5rem 0 0 1.5rem', color: '#666' } }>
            <li>Scroll-based visibility trigger (22% page scroll)</li>
            <li>Continuous floating motion</li>
            <li>Smooth slide-in transition</li>
            <li>Fully responsive design</li>
            <li>Hover scale effect on avatar</li>
          </ul>
        </ModalDescription>

        <ActionButtons>
          <CtaButton href="/" style={ { cursor: 'pointer' } }>View on Homepage</CtaButton>
          <CtaButton as="button" onClick={ onClose } style={ { background: '#8d8f91', cursor: 'pointer' } }>Close</CtaButton>
        </ActionButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AvatarModal;
