import styled, { keyframes } from 'styled-components';

const squareMove = keyframes`
  0%, 12.5% {
    transform: translate(-50%, -50%) translate(110px, -110px);
  }
  25%, 37.5% {
    transform: translate(-50%, -50%) translate(110px, 110px);
  }
  50%, 62.5% {
    transform: translate(-50%, -50%) translate(-110px, 110px);
  }
  75%, 87.5% {
    transform: translate(-50%, -50%) translate(-110px, -110px);
  }
  100% {
    transform: translate(-50%, -50%) translate(110px, -110px);
  }
`;

export const LogoStripContainer = styled.div`
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media ${props => props.theme.breakpoints.sm} {
    height: 50%;
    margin: 0 auto;
  }
`;

export const LogoOrbit = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  overflow: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    max-width: 220px;
    max-height: 240px;
  }
`;

export const LogoItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${squareMove} 16s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  transition: transform 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
 
  &:hover {
    z-index: 2;
  }

  @media ${props => props.theme.breakpoints.sm} { 
    top: -163%;
    left: 0%;
    width: 5.2rem;
    height: 5.2rem;
  }
  svg {
    display: block;
    width: 5.6rem;
    height: 5.6rem;
    backface-visibility: hidden;
    transition: transform 0.4s ease;
    padding: 0.2rem;
   
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

export const LogoLabel = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primary1};
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.65rem;
  }
`;
