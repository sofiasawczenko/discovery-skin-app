import styled from "styled-components";

export const AISkinContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 4rem;

  gap: 10rem;

  @media only screen and (max-width: 1430px) {
    align-items: center;
    gap: 5rem;
    padding: 5rem;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 5rem;
    padding: 0;
  }
`;

export const AISkinImg = styled.img`
  width: 30rem;

  @media only screen and (max-width: 1430px) {
    width: 20rem;
  }

  @media only screen and (max-width: 767px) {
    width: 15rem;
  }
`;

export const AISkinTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    color: #ff7a00;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 1430px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;

    h1 {
      font-size: 3rem;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;