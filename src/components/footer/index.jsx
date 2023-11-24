import DisoverySkinLogo from "../../assets/logo/discovery-skin-logo-column.svg";
import { FooterContainer } from "./styles";

export function Footer() {
  const backToBeginning = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <img
        src={DisoverySkinLogo}
        alt="discovery skin logo FooterContainer"
        onClick={backToBeginning}
      />
      <hr />
      <p>© 2023 Discovery Skin | All Rights Reserved</p>
    </FooterContainer>
  );
}
