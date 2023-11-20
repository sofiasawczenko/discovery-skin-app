import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 5rem;
`;

export const ApresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;

  padding: 0 4rem;

  width: 100%;

  @media only screen and (max-width: 1430px) {
    align-items: center;
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

export const MainScreenPhoneImg = styled.img`
  width: 20rem;

  @media only screen and (max-width: 1430px) {
    width: 15rem;
  }

  @media only screen and (max-width: 767px) {
    width: 10rem;
  }
`;

export const ApresentationTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  h1 {
    font-size: 6rem;
    color: #ff7a00;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 1430px) {
    margin-top: 0;

    h1 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
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

export const AppInformationContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 8rem;

  gap: 15rem;

  h1 {
    white-space: nowrap;
    font-size: 3rem;
  }

  @media only screen and (max-width: 1430px) {
    gap: 10rem;

    h1 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    padding: 0;

    h1 {
      white-space: normal;
      text-align: center;
    }
  }
`;

export const ThreeCellphonesImg = styled.img`
  width: 40rem;

  @media only screen and (max-width: 1430px) {
    width: 25rem;
  }

  @media only screen and (max-width: 767px) {
    width: 15rem;
  }
`;

export const AppInformationTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  @media only screen and (max-width: 1430px) {
  }

  @media only screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    
    padding: 0 1rem;

    ul {
      justify-content: center;
      li {
        align-items: start;
      }
    }
  }
`;

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

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 1rem 0;
`;

export const ArticlesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  place-items: center;

  @media only screen and (max-width: 1430px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
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