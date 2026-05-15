import styled from 'styled-components';

export const Section = styled.div`
  display: grid;
  flex-direction: row;
  padding: 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns:0 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 80px 48px 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 80px 48px 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: auto;
    padding: 16px 16px 0
  }
`
export const SectionText = styled.div`
  display: block;
  color: #000;
  p {
    padding: 10px 0;
    font-size: 20px;
    line-height: 1.5;
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
    }
  }
`
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
export const RightSection = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
export const AboutMePhoto = styled.div`
  width: 350px; 
  height: 350px;
  border-radius: 50%; 
  overflow: hidden; 
  border: 4px solid #8d8f91; 
  max-block-size: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 250px;
    height: 250px;
  }
  img {
    margin: 0 auto;
    object-fit: cover;
    max-block-size: 100%;
    transform: scale(1.1);
    margin: 5px 0px 0px 44px;
  }
`;