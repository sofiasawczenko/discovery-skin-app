import MainScreen from "../../assets/cellphone/main-screen-cellphone.svg";
import { AISkin } from "./components/ai-skin";
import { AppInformation } from "./components/app-information";
import { Articles } from "./components/articles";
import { ContactUs } from "./components/contact-us";
import { DownloadApp } from "./components/download-app";
import { Video } from "./components/video";

import {
  ApresentationContainer,
  ApresentationTitleContainer,
  HomeContainer,
  MainScreenPhoneImg,
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
      <AppInformation />
      <AISkin />
      <Video />
      <Articles />
      <DownloadApp />
      <ContactUs/>
    </HomeContainer>
  );
}
