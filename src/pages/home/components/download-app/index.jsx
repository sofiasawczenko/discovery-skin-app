import AppStores from '../../../../assets/cellphone/app-stores.svg';
import SixCellphones from '../../../../assets/cellphone/six-cellphones.svg';
import { DownloadAppContainer, DownloadAppImg, DownloadAppTitleContainer } from "./styles";

export function DownloadApp() {
  return (
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
  )
}