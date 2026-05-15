import styled from 'styled-components';

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 1.5rem 0 3.5rem;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    gap: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 14px;
    margin: 1rem 0 2.5rem;
  }
`;

export const SkillCard = styled.div`
  background: rgba(191, 73, 86, 0.06);
  border: 1px solid rgba(191, 73, 86, 0.25);
  border-radius: 14px;
  padding: 28px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(191, 73, 86, 0.55);
    box-shadow: 0 4px 24px rgba(191, 73, 86, 0.1);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
`;

export const CardIcon = styled.div`
  color: ${props => props.theme.colors.secondary1};
  font-size: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  color: ${props => props.theme.colors.secondary1};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 13px;
  }
`;

export const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillTag = styled.span`
  position: relative;
  overflow: hidden;
  background: rgba(191, 73, 86, 0.08);
  border: 1px solid rgba(191, 73, 86, 0.28);
  color: ${props => props.theme.colors.primary1};
  font-size: 12.5px;
  padding: 5px 13px;
  border-radius: 100px;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease;
  cursor: default;
  user-select: none;

  /* Level label — hidden by default, slides up on hover */
  &::after {
    content: attr(data-level);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.22s ease, transform 0.22s ease;
  }

  /* Fade skill name out, slide level text in */
  &:hover {
    color: transparent;

    &::after {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Expert — green */
  &:hover[data-level="Expert"] {
    background: rgba(34, 197, 94, 0.14);
    border-color: rgba(34, 197, 94, 0.55);
    &::after { color: #22c55e; }
  }

  /* Advanced — accent red */
  &:hover[data-level="Advanced"] {
    background: rgba(191, 73, 86, 0.18);
    border-color: rgba(191, 73, 86, 0.7);
    &::after { color: #bf4956; }
  }

  /* Intermediate — amber */
  &:hover[data-level="Intermediate"] {
    background: rgba(245, 158, 11, 0.14);
    border-color: rgba(245, 158, 11, 0.55);
    &::after { color: #f59e0b; }
  }

  /* Familiar — gray */
  &:hover[data-level="Familiar"] {
    background: rgba(141, 143, 145, 0.14);
    border-color: rgba(141, 143, 145, 0.55);
    &::after { color: #8d8f91; }
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 11.5px;
    padding: 4px 10px;
  }
`;

/* Legend below the grid */
export const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const LegendHint = styled.span`
  font-size: 13px;
  color: ${props => props.theme.colors.background2};
  font-style: italic;
  margin-right: 4px;

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    margin-right: 0;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.background2};
  letter-spacing: 0.03em;
`;

export const LegendDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color};
  flex-shrink: 0;
`;
