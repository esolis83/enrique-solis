import React from 'react';
import styled from 'styled-components';
import ModalShell from './ModalShell';
import { ModalDescription, ActionButtons, CtaButton, ModalButton } from './ModalStyles';

const DemoContainer = styled.div`
  background: linear-gradient(135deg, #bf4956 0%, #8d8f91 100%);
  border-radius: 8px;
  padding: 2rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

const AvatarImageInModal = styled.img`
  width: 200px;
  height: 280px;
  object-fit: cover;
  rotate: -13deg;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-20px); }
  }

  animation: float 4s ease-in-out infinite;
`;

const AvatarModal = ({ isOpen, onClose }) => (
  <ModalShell isOpen={ isOpen } onClose={ onClose } title="Avatar Animation Demo" maxWidth="600px">
    <ModalDescription>
      This is a scroll-triggered avatar animation with floating effects. In the real website, the avatar appears when you scroll past 22% of the page and slides in from the right with a smooth floating motion.
    </ModalDescription>

    <DemoContainer>
      <AvatarImageInModal src="/images/avatar-one.png" alt="Avatar Animation Demo" />
    </DemoContainer>

    <ModalDescription style={ { fontSize: '1.1rem', color: '#888', marginBottom: '1rem' } }>
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
      <CtaButton href="/">View on Homepage</CtaButton>
      <ModalButton secondary onClick={ onClose }>Close</ModalButton>
    </ActionButtons>
  </ModalShell>
);

export default AvatarModal;
