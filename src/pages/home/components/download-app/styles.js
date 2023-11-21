import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const DownloadAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 4rem;

  gap: 10rem;
  
  @media only screen and (max-width: 1430px) {
    gap: 5rem;
    padding: 5rem;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 0;
  }
`;

export const DownloadAppImg = styled.img`
  width: 25rem;
  animation: ${floatAnimation} 3s ease-in-out infinite;;

  @media only screen and (max-width: 1430px) {
    width: 20rem;
  }

  @media only screen and (max-width: 767px) {
    width: 15rem;
  }
`

export const DownloadAppTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 900;
  }

  span{
    color: #ff7a00;
  }

  p {
    font-size: 1.2rem;
  }

  img {
    margin-top: 2rem;
    align-self: center;
    width: 10rem;
  }

  @media only screen and (max-width: 1430px) {

  }

  @media only screen and (max-width: 767px) {
    h1 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    img {
      width: 6rem;
    }
  }
`