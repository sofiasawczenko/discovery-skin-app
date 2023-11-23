import styled from "styled-components";

export const TitleContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 28px;
  margin-top: 1rem;
  font-weight: 700;
  font-family: sans-serif;
  margin-top: 10rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const SubTitle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  margin-bottom: 6rem;
  margin-top: 1rem;
  margin-right: 2rem;
`

export const MacroImage = styled.img`
  @media only screen and (max-width: 600px) {
    width: 20rem;  
    margin-left: 2rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 70rem; 
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
    margin-left: 18rem;
  }
`

export const ReadingTime = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`


export const TextContent = styled.div`

  p {
    margin-bottom: 1.5rem; 
    text-align: justify; 
  }

  @media only screen and (max-width: 600px) {
    width: 18rem;
    margin-left: 2rem;
    text-align: justify;
    font-size: 17px;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 80rem;
    margin: 10rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`;

export const DefinicaoVitiligo = styled.div`
  @media only screen and (max-width: 600px) {
    width: 17rem;
    margin-left: 1rem;
    text-align: justify;
    font-size: 17px;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 80rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const DefinicaoVitiligo2 = styled.div`
  @media only screen and (max-width: 600px) {
    width: 17rem;
    margin-left: 1rem;
    text-align: justify;
    font-size: 17px;
  }

  @media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 80rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`

export const TopicosVitiligo = styled.div`
  @media only screen and (max-width: 600px) {
    width: 17rem;
    margin-left: 1rem;
    text-align: justify;
    font-size: 16px;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 80rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`

export const PorcentagemComVitiligo = styled.div`
  @media only screen and (max-width: 600px) {
    width: 15rem;
    margin-left: 1rem;
    text-align: justify;
    font-size: 17px;
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`

export const TopicosTratamento = styled.div`
  @media only screen and (max-width: 600px) {
    width: 17rem;
    margin-left: 1rem;
    text-align: justify;
    font-size: 15px;
    margin-bottom: 3rem;
    line-height: 2rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 80rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`

export const TerapiaTopica = styled.div`
  @media only screen and (max-width: 600px) {
    width: 15rem;
    margin-left: 3rem;
    text-align: justify;
    font-size: 17px;
    margin-top: 3rem;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 20rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`

export const TopicoFototerapia = styled.div`
  @media only screen and (max-width: 600px) {
    width: 15rem;
    margin-left: 3rem;
    text-align: justify;
    font-size: 17px;
    margin-top: 3rem;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 20rem;
    line-height: 2;
    margin-bottom: 2rem;
  }
`

export const TopicoCirurgia = styled.div`
  @media only screen and (max-width: 600px) {
    width: 15rem;
    margin-left: 3rem;
    text-align: justify;
    font-size: 17px;
    margin-top: 3rem;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 20rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`

export const TopicoBranqueamento = styled.div`
  @media only screen and (max-width: 600px) {
    width: 15rem;
    margin-left: 3rem;
    text-align: justify;
    font-size: 17px;
    margin-top: 3rem;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 20rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`

export const TratamentoText = styled.div`
  @media only screen and (max-width: 600px) {
    width: 15rem;
    margin-left: 3rem;
    text-align: justify;
    font-size: 17px;
    margin-top: 3rem;
  }

@media only screen and (min-width: 600px) {
    font-size: 17px;
    margin-top: 1rem;
    margin-right: -0.5rem;
    width: 20rem;
    line-height: 2;
    text-align: justify;
    margin-bottom: 2rem;
  }
`