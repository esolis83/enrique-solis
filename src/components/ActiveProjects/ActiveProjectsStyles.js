import styled from 'styled-components';

export const ActiveProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  color: #bf4956;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3rem;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

export const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #8d8f91;
  margin-bottom: 4rem;
  line-height: 1.8;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2.5rem;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProjectCard = styled.article`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(191, 73, 86, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(191, 73, 86, 0.15);
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 8px;
  }
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #e0e0e0;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 220px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const DemoButton = styled.button`
  background: white;
  color: #bf4956;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #bf4956;
    color: white;
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.75rem;
  }
`;

export const ProjectStatus = styled.span`
  display: inline-block;
  background: ${(props) => {
    switch (props.status) {
      case 'Done':
        return '#4CAF50';
      case 'Active Development':
        return '#4CAF50';
      case 'In Progress':
        return '#FF9800';
      case 'Planning':
        return '#2196F3';
      default:
        return '#9C27B0';
    }
  }};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #bf4956;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.25rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.75rem;
  flex-grow: 1;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const TechStack = styled.div`
  margin-bottom: 2rem;
`;

export const TechLabel = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #bf4956;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Tag = styled.span`
  background: #f0f0f0;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;
  
  &:hover {
    background: #bf4956;
    color: white;
    border-color: #bf4956;
  }
`;

export const FeaturesSection = styled.div`
  margin-bottom: 2rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

export const FeatureItem = styled.li`
  font-size: 1.2rem;
  color: #666;
  padding: 0.6rem 0;
  padding-left: 1.75rem;
  position: relative;
  line-height: 1.6;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4CAF50;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

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
  color: #f8f8f2;
  padding: 1.25rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-family: 'Courier New', monospace;
  color: #45c1fa;
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

export const HeroImagePlaceholder = styled.div`
  width: 100%;
  height: 280px;
  background: linear-gradient(135deg, #bf4956 0%, #8d8f91 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 220px;
    font-size: 2rem;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2.5rem 0 1rem;
`;

export const PageButton = styled.button`
  min-width: 42px;
  height: 42px;
  padding: 0 0.5rem;
  border-radius: 8px;
  border: 2px solid ${props => props.active ? '#bf4956' : '#e0e0e0'};
  background: ${props => props.active ? '#bf4956' : '#fff'};
  color: ${props => props.active ? '#fff' : '#555'};
  font-size: 1.4rem;
  font-weight: ${props => props.active ? '700' : '500'};
  cursor: ${props => props.active ? 'default' : 'pointer'};
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  font-family: inherit;

  &:hover:not([disabled]) {
    border-color: #bf4956;
    color: ${props => props.active ? '#fff' : '#bf4956'};
    background: ${props => props.active ? '#bf4956' : 'rgba(191, 73, 86, 0.05)'};
  }
`;

export const PageArrow = styled.button`
  padding: 0 1.2rem;
  height: 42px;
  border-radius: 8px;
  border: 2px solid ${props => props.disabled ? '#f0f0f0' : '#e0e0e0'};
  background: #fff;
  color: ${props => props.disabled ? '#ccc' : '#555'};
  font-size: 1.3rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  transition: border-color 0.2s ease, color 0.2s ease;
  font-family: inherit;
  white-space: nowrap;

  &:hover {
    border-color: #bf4956;
    color: #bf4956;
  }
`;

export const PageInfo = styled.p`
  text-align: center;
  color: #8d8f91;
  font-size: 1.2rem;
  margin-top: 0.25rem;
  padding-bottom: 1rem;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const FilterButton = styled.button`
  padding: 0.55rem 1.4rem;
  border-radius: 20px;
  border: 2px solid ${props => props.active ? '#bf4956' : '#e0e0e0'};
  background: ${props => props.active ? '#bf4956' : '#fff'};
  color: ${props => props.active ? '#fff' : '#555'};
  font-size: 1.1rem;
  font-weight: ${props => props.active ? '700' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  letter-spacing: 0.3px;

  &:hover {
    border-color: #bf4956;
    color: ${props => props.active ? '#fff' : '#bf4956'};
    background: ${props => props.active ? '#bf4956' : 'rgba(191, 73, 86, 0.05)'};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  color: #8d8f91;
  font-size: 1.4rem;
  font-weight: 300;
  grid-column: 1 / -1;
`;
