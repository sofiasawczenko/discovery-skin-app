import styled from "styled-components";

export const ArticlesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2rem;
  place-items: center;

  @media only screen and (max-width: 1430px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`