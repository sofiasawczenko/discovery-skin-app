import { ChartBar, FileSearch, FirstAid, Share } from "phosphor-react";
import AppStores from "../../assets/cellphone/app-stores.svg";
import MainScreen from "../../assets/cellphone/main-screen-cellphone.svg";
import SixCellphones from "../../assets/cellphone/six-cellphones.svg";
import ThreeCellphones from "../../assets/cellphone/three-cellphones.svg";
import TwoCellphonesSkin from "../../assets/cellphone/two-cellphones-skin.svg";

import { Articles } from "./components/articles";
import {
  AISkinContainer,
  AISkinImg,
  AISkinTitleContainer,
  AppInformationContainer,
  AppInformationTitleContainer,
  ApresentationContainer,
  ApresentationTitleContainer,
  DownloadAppContainer,
  DownloadAppImg,
  DownloadAppTitleContainer,
  HomeContainer,
  MainScreenPhoneImg,
  ThreeCellphonesImg,
  VideoContainer,
} from "./styles";

export function Home() {
  return (
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
              <FirstAid color="#FF7A00" size={32} /> Agende as suas consultas em
              clínicas e hospitais
            </li>
            <li>
              <FileSearch color="#FF7A00" size={32} /> Registre as suas manchas
              para observar padrões
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

      <AISkinContainer>
        <AISkinImg src={TwoCellphonesSkin} alt="two cellphones image skin" />
        <AISkinTitleContainer>
          <h1>Entenda sua Pele!</h1>

          <p>
            Nossa IA analisa imagens instantaneamente, revelando possíveis
            causas de condições cutâneas. Receba diagnósticos personalizados
            para uma abordagem proativa. Lembre-se, consultas com
            dermatologistas são essenciais. Experimente a revolução nos cuidados
            com a pele com nossa IA avançada.
          </p>
        </AISkinTitleContainer>
      </AISkinContainer>

      <VideoContainer>
        <iframe
          width="900"
          height="400"
          src="https://www.youtube.com/embed/l5Wnys2I1io?si=N0vnwPgKzr0St1N0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </VideoContainer>

      <Articles />

      <DownloadAppContainer>
        <DownloadAppTitleContainer>
          <h1>
            Baixe o <span>Discovery Skin</span>
          </h1>
          <p>Tenha sua saude de pele controlada na palma da sua mao.</p>

          <img src={AppStores} alt="stores available" />
        </DownloadAppTitleContainer>
        <DownloadAppImg src={SixCellphones} alt="six cellphones image" />
      </DownloadAppContainer>

    </HomeContainer>
  );
}
