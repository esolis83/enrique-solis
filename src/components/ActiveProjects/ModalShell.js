import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`;

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
  max-width: ${props => props.maxWidth || '560px'};
  width: 100%;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.22s ease;
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
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const ModalShell = ({ isOpen, onClose, title, maxWidth, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={ onClose }>
      <ModalContent maxWidth={ maxWidth } onClick={ e => e.stopPropagation() }>
        <CloseButton onClick={ onClose }>×</CloseButton>
        { title && <ModalTitle>{ title }</ModalTitle> }
        { children }
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalShell;
