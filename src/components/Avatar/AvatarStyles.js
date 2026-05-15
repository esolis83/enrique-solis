import styled, { keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(500px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(500px);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const AvatarContainer = styled.div`
  position: fixed;
  bottom: 22%;
  right: -1%;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  z-index: 999;
  opacity: ${props => props.isVisible ? 1 : 0};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(500px)'};
  transition: all 0.8s ease-out;

  @media ${props => props.theme.breakpoints.lg} {
    bottom: 10%;
    right: 0%;
    gap: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    bottom: 15%;
    right: -10%;
    gap: 1rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 330px;
    height: 200px;
    bottom: 20%;
    right: -16%;
    gap: 0.5rem;
  }
  
`;

export const ThoughtBubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 224px;
  height: 315px;
  object-fit: cover;
  animation: ${float} 4s ease-in-out infinite;
  transition: transform 0.3s ease;
  rotate: -13deg;
  margin: -42px;

  &:hover {
    transform: scale(1.02);
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 176px;
    height: 208px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 150px;
    height: 200px;
    margin: -17px;
  }
`;

export const BubbleTail = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-top: 20px solid #bf4956;
  right: 0px;
  bottom: 31px;
  z-index: -1;
  &:hover {
    background: #8d8f91;
  }
  @media ${props => props.theme.breakpoints.md} {
    border-left: 12px solid transparent;
    border-top: 16px solid #bf4956;
    bottom: 25px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    bottom: 26px;
  }
`;

export const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.75rem;
  background: #bf4956;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  max-width: 220px;
  position: relative;
  z-index: 1;
  font: inherit;

  &:hover {
    background-color: ${props => props.theme.colors.background2};;
  }

  &:active {
    transform: translateY(-2px);
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 1.25rem 1.5rem;
    max-width: 200px;
  }
`;

export const CTAText = styled.span`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.4;
  font-family: ${props => props.theme.fonts.title};

  @media ${props => props.theme.breakpoints.md} {
    font-size: 0.85rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;
