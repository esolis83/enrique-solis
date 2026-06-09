import styled from 'styled-components';

export const CodeSection = styled.div`
  background: #f5f5f5;
  border-left: 4px solid #bf4956;
  padding: 1.25rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  font-size: 0.95rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const CodeTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 800;
  color: #bf4956;
  margin-bottom: 0.75rem;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CodeSectionTabs = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #e0e0e0;
  overflow-x: auto;
`;

export const CodeTab = styled.button`
  background: none;
  border: none;
  padding: 0.8rem 1.25rem;
  font-size: 1.3rem;
  color: ${(props) => props.active ? '#bf4956' : '#888'};
  font-weight: ${(props) => props.active ? '700' : '600'};
  cursor: pointer;
  border-bottom: 3px solid ${(props) => props.active ? '#bf4956' : 'transparent'};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #bf4956;
  }
`;

export const CodeBlock = styled.pre`
  background: #2d2d2d;
  color: #45c1fa;
  padding: 1.25rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-family: 'Courier New', monospace;
`;

export const CodeLanguage = styled.span`
  font-size: 1.2rem;
  color: #888;
  font-style: italic;
  font-weight: 500;
`;

export const ContactButton = styled.a`
  display: inline-block;
  background: #bf4956;
  color: white;
  padding: 0.85rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: 0.75rem;
  border: 2px solid #bf4956;

  &:hover {
    background: white;
    color: #bf4956;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(191, 73, 86, 0.3);
  }
`;

export const ExternalLinkButton = styled.button`
  display: inline-block;
  background: #bf4956;
  color: white;
  padding: 0.85rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: 0.75rem;
  border: 2px solid #bf4956;
  cursor: pointer;

  &:hover {
    background: white;
    color: #bf4956;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(191, 73, 86, 0.3);
  }
`;
