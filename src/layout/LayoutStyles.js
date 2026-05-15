import styled from 'styled-components';

export const Container = styled.div`
max-width: 100%;
width: 100%;
margin: auto;
@media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 5.3em;
  }
`;
