import styled from "styled-components";

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

export const TitleContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  h1 {
    text-align: center;
  }

  img {
    width: 70rem;
  }

  p {
    text-align: center;
  }

  @media only screen and (max-width: 1430px) {
    h1 {
      font-size: 1rem;
    }

    img {
      width: 40rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 767px) {
    img {
      width: 20rem;
    }
  }
`;

export const TitleDescription = styled.p`
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 70rem;

  img {
    width: 50rem;
    align-self: center;
  }

  @media only screen and (max-width: 1430px) {
    width: 50rem;

    img {
      width: 30rem;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 20rem;
    img {
      width: 20rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;

  gap: 2rem;

  p {
    font-weight: bolder;
  }

  ul {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 1430px) {
    width: 50rem;
  }

  @media only screen and (max-width: 767px) {
    width: 20rem;
    ul {
      li {
        font-size: 0.8rem;
      }
    }
  }
`;
