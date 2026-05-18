import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalShell from './ModalShell';
import { ModalDescription, ActionButtons, ModalButton } from './ModalStyles';

const DemoStage = styled.div`
  background: #1a1a2e;
  border-radius: 10px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  min-height: 180px;
`;

const CyclerLabel = styled.span`
  font-size: 1rem;
  color: #8d8f91;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

const CyclerPhrase = styled.span`
  font-size: 1.9rem;
  font-weight: 800;
  color: #bf4956;
  letter-spacing: 0.02em;
  text-align: center;
  min-height: 2.4rem;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.35s ease;
`;

const DotRow = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${props => props.active ? '#bf4956' : 'rgba(255,255,255,0.18)'};
  transition: background 0.3s ease;
`;

const skillCycle = [
  'React 18 + TypeScript',
  'Next.js App Router',
  'AI Agents & Claude Code',
  'GitHub Copilot',
  'Shopify & WordPress',
  'Figma & Accessible UI',
];

const SkillCyclerModal = ({ isOpen, onClose }) => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setPhraseVisible(false);
      setTimeout(() => {
        setSkillIndex(i => (i + 1) % skillCycle.length);
        setPhraseVisible(true);
      }, 380);
    }, 2200);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <ModalShell isOpen={ isOpen } onClose={ onClose } title="Skill Phrase Cycler">
      <ModalDescription>
        Watch the phrase fade out, swap its text, and fade back in — driven by two state values and a single CSS opacity transition. No animation library required.
      </ModalDescription>

      <DemoStage>
        <CyclerLabel>Currently working with:</CyclerLabel>
        <CyclerPhrase visible={ phraseVisible }>
          { skillCycle[skillIndex] }
        </CyclerPhrase>
        <DotRow>
          { skillCycle.map((_, i) => (
            <Dot key={ i } active={ i === skillIndex } />
          )) }
        </DotRow>
      </DemoStage>

      <ActionButtons>
        <ModalButton secondary onClick={ onClose }>Close</ModalButton>
      </ActionButtons>
    </ModalShell>
  );
};

export default SkillCyclerModal;
