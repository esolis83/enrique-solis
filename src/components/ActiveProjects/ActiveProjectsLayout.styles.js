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
