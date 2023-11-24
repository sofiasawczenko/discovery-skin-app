import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: #fafafa;

  gap: 1rem;

  padding: 1rem 0;

  img {
    width: 15rem;
    transition: transform 0.3s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  hr {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    img {
      width: 10rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
