import styled from "styled-components";

export const TitleContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 30px;
  margin-top: 1rem;
  font-weight: 700;
  font-family: sans-serif;
  margin-top: 10rem;

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

export const MacroImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8rem;
  gap: 15rem;

  h1 {
    white-space: nowrap;
    font-size: 3rem;
  }

  img {
    max-width: 180%; 
    height: auto; 
  }

  @media only screen and (max-width: 1430px) {
    gap: 10rem;
    width: 28rem;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 0rem;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;

    h1 {
      text-align: center;
      font-size: 30rem; 
    }
  }
`;

export const TextContent = styled.div`
  font-size: 18px;
  margin: 4rem;
  padding: 4rem;
  margin: 20rem;
  margin-top: 0rem;
  line-height: 1.5;
  text-align: justify;

  p {
    margin-bottom: 1.5rem; 
    text-align: justify; 
  }

  @media only screen and (max-width: 767px) {

    margin: 2rem;
    padding: 2rem;
  }
`;

export const DefinicaoVitiligo = styled.div`
    margin-left: 2rem;
    background-color: #F4F4F4;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.0rem;
    color: black;
    line-height: 1.5rem;
    letter-spacing: .16px;
    padding: 24px;
    margin-bottom: 15px;
    display: table-cell;
    width: 50%; 

    @media only screen and (max-width: 1430px) {
      margin-left: -0.5rem;
      width: 20rem;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`;

export const DefinicaoVitiligo2 = styled.div`
  margin-top: 4rem;

  @media only screen and (max-width: 1430px) {
      margin-left: -0.5rem;
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TopicosVitiligo = styled.div`
  margin-top: 4rem;
  margin-left: 2rem;

  @media only screen and (max-width: 1430px) {
      margin-left: 1.5rem;
      width: 17rem;
      font-size: 1.05rem;
      display: flex;
  }
`

export const PorcentagemComVitiligo = styled.div`
  margin-top: 2rem;

  @media only screen and (max-width: 1430px) {
      margin-left: -0.5rem;
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TopicosTratamento = styled.div`
  margin-top: 4rem;
  margin-left: 2rem;

  @media only screen and (max-width: 1430px) {
      margin-left: 1.5rem;
      width: 17rem;
      font-size: 1.05rem;
      display: flex;
      margin-bottom: 1rem;
  }
`

export const TerapiaTopica = styled.div`
  margin-top: 1.5rem;

  @media only screen and (max-width: 1430px) {
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TopicoFototerapia = styled.div`
  margin-top: 1.5rem;

  @media only screen and (max-width: 1430px) {
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TopicoCirurgia = styled.div`
  margin-top: 1.5rem;

  @media only screen and (max-width: 1430px) {
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TopicoBranqueamento = styled.div`
  margin-top: 1.5rem;

  @media only screen and (max-width: 1430px) {
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TextGeral = styled.div`
  font-size: 17px;
  margin: 1rem;
  margin-top: 0rem;

  @media only screen and (max-width: 1430px) {
      width: 18rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`

export const TratamentoText = styled.div`
  font-size: 15px;
  margin-top: 4rem;
  line-height: 1.5;
  text-align: justify;

  @media only screen and (max-width: 1430px) {
      width: 20rem;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      text-align: center;
  }
`