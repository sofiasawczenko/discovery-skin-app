import DisoverySkinLogo from '../../assets/logo/discovery-skin-logo-column.svg';
import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <img src={DisoverySkinLogo} alt="discovery skin logo FooterContainer" />
      <hr />
      <p>© 2023 Discovery Skin | All Rights Reserved</p>
    </FooterContainer>
  )
}