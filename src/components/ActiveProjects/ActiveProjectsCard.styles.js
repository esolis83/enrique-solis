import styled from 'styled-components';

const STATUS_COLORS = {
  'Done': '#4CAF50',
  'Active Development': '#4CAF50',
  'In Progress': '#FF9800',
  'Planning': '#2196F3',
};

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
  background: ${({ status }) => STATUS_COLORS[status] ?? '#9C27B0'};
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
