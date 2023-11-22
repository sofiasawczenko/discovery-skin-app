import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 30px;
  margin-top: 1rem;
  font-weight: 300;
  margin-top: 10rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  margin-bottom: 6rem;
  margin-top: 1rem;

`
export const ReadingTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
export const CenteredImage = styled.img`
    display: block;
    margin: 0 auto;

    @media only screen and (max-width: 1430px) {
    width: 20rem;
    margin-left: 3rem;

    }
`

export const BodyText = styled.div`
    font-size: 17px;
    margin-top: 0rem;
    margin: 10rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;

@media only screen and (max-width: 1430px) {
    width: 30rem;
    margin-left: 3rem;
  }
  
`

export const BodyTextRecomendacao = styled.div`
    font-size: 17px;
    margin-top: 0rem;
    margin: 10rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;

@media only screen and (max-width: 1430px) {
    width: 20rem;
    margin-left: 3rem;
  }
  
`

export const CenteredImage2 = styled.img`
    display: block;
    margin: 0 auto;

    @media only screen and (max-width: 1430px) {
    width: 20rem;
    margin-left: 3rem;

    }
`

export const AlertasText = styled.div`
    font-size: 17px;
    margin-top: 1rem;
    margin: 10rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;

@media only screen and (max-width: 1430px) {
    width: 20rem;
    margin-left: 3rem;
  }
  
`

export const BodyTextQuantidade = styled.div`
    font-size: 17px;
    margin-top: 1rem;
    margin: 10rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;

@media only screen and (max-width: 1430px) {
    width: 20rem;
    margin-left: 3rem;
  }
  
`