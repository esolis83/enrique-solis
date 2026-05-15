import styled from 'styled-components';

export const FooterWrapper = styled.section`
  position: relative;
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 80px 48px 48px;
  margin: 0 auto;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.md} {
    padding: 48px 32px 40px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 40px 16px 32px;
    width: calc(100vw - 32px);
  }
`;

export const ContactCard = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media ${props => props.theme.breakpoints.sm} {
    padding-top: 36px;
    align-items: center;
    text-align: center;
  }
`;

/* Cycling skill phrase animation */
export const SkillCyclerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  font-size: 14px;
  color: #8d8f91;
  font-weight: 500;
  letter-spacing: 0.02em;
  min-height: 22px;
`;

export const SkillPhrase = styled.span`
  color: ${props => props.theme.colors.secondary1};
  font-weight: 700;
  letter-spacing: 0.03em;
  transition: opacity 0.35s ease;
  opacity: ${props => props.visible ? 1 : 0};
`;

export const ContactHeadline = styled.h2`
  color: ${props => props.theme.colors.primary1};
  font-size: 46px;
  font-weight: 800;
  line-height: 1.05;
  margin: 4px 0 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 34px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 26px;
  }
`;

export const ContactSubtext = styled.p`
  color: ${props => props.theme.colors.background2};
  font-size: 16px;
  margin-bottom: 32px;
  max-width: 480px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 36px;
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${props => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const ContactIconWrap = styled.div`
  color: ${props => props.theme.colors.secondary1};
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const ContactLink = styled.a`
  color: ${props => props.theme.colors.background2};
  font-size: 17px;
  font-weight: 500;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary1};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const CopyButton = styled.button`
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 6px;
  color: #8d8f91;
  font-size: 13px;
  padding: 3px 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${props => props.theme.colors.secondary1};
    color: ${props => props.theme.colors.secondary1};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 48px;

  @media ${props => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  color: ${props => props.theme.colors.background2};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 18px;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${props => props.theme.colors.secondary1};
    color: ${props => props.theme.colors.secondary1};
    background: rgba(191, 73, 86, 0.04);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  color: ${props => props.theme.colors.background2};
  font-size: 13px;
  width: 100%;
  text-align: center;
`;
