import styled from 'styled-components';

export const ModalDescription = styled.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

/* For anchor-based CTA (external links, page navigation) */
export const CtaButton = styled.a`
  display: inline-block;
  background: ${props => props.secondary ? '#8d8f91' : '#bf4956'};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

/* Same visual as CtaButton but renders as a <button> */
export const ModalButton = styled.button`
  display: inline-block;
  background: ${props => props.secondary ? '#8d8f91' : '#bf4956'};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;
