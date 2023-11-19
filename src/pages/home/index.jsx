import { ChartBar, FileSearch, FirstAid, Share } from "phosphor-react";
import MainScreen from "../../assets/cellphone/main-screen-cellphone.svg";
import ThreeCellphones from "../../assets/cellphone/three-cellphones.svg";
import { Menu } from "../../components/menu";
import {
  AppInformationContainer,
  AppInformationTitleContainer,
  ApresentationContainer,
  ApresentationTitleContainer,
  HomeContainer,
  MainScreenPhoneImg,
  ThreeCellphonesImg,
} from "./styles";

export function Home() {
  return (
    <>
      <Menu />
      <HomeContainer>
        <ApresentationContainer>
          <ApresentationTitleContainer>
            <h1>NÃO ESPERE SENTIR NA PELE</h1>
            <p>
              O Discovery Skin está com você no monitoramento das manchas
              desconhecidas
            </p>
          </ApresentationTitleContainer>
          <MainScreenPhoneImg src={MainScreen} alt="two cellphones image" />
        </ApresentationContainer>

        <AppInformationContainer>
          <ThreeCellphonesImg src={ThreeCellphones} alt="three cellphones" />

          <AppInformationTitleContainer>
            <h1>Um aplicativo completo</h1>

            <ul>
              <li>
                <FirstAid color="#FF7A00" size={32} /> Agende as suas consultas
                em clínicas e hospitais
              </li>
              <li>
                <FileSearch color="#FF7A00" size={32} /> Registre as suas
                manchas para observar padrões
              </li>
              <li>
                <ChartBar color="#FF7A00" size={32} /> Receba previsões das
                manchas através de IA
              </li>
              <li>
                <Share color="#FF7A00" size={32} /> Envio facilitado aos médicos
              </li>
            </ul>
          </AppInformationTitleContainer>
        </AppInformationContainer>
      </HomeContainer>
    </>
  );
}
