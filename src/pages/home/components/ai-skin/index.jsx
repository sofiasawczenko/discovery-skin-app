import TwoCellphonesSkin from "../../../../assets/cellphone/two-cellphones-skin.svg";
import { AISkinContainer, AISkinImg, AISkinTitleContainer } from "./styles";

export function AISkin() {
  return (
    <AISkinContainer>
    <AISkinImg src={TwoCellphonesSkin} alt="two cellphones image skin" />
    <AISkinTitleContainer>
      <h1>Entenda sua Pele!</h1>

      <p>
        Nossa IA analisa imagens instantaneamente, revelando possíveis
        causas de condições cutâneas. Receba diagnósticos personalizados
        para uma abordagem proativa. Lembre-se, consultas com
        dermatologistas são essenciais. Experimente a revolução nos
        cuidados com a pele com nossa IA avançada.
      </p>
    </AISkinTitleContainer>
  </AISkinContainer>
  )
}