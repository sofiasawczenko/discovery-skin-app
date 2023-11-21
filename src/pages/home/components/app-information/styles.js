import styled from "styled-components";

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