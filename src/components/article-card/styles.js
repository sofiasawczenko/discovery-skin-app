import styled from "styled-components";


export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 27rem;

  gap: 1rem;

  background-color: #F5F6FA;

  h4 {
    padding: 0 1rem;
  }

  p {
    padding: 0 1rem;
    color: #000;
  }

  small {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 1430px) {
    width: 23rem;
  }

  @media only screen and (max-width: 767px) {
    width: 18rem;
  }
`