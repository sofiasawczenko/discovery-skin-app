import { ChartBar, FileSearch, FirstAid, Share } from "phosphor-react";
import ThreeCellphones from "../../../../assets/cellphone/three-cellphones.svg";
import {
  AppInformationContainer,
  AppInformationTitleContainer,
  ThreeCellphonesImg,
} from "./styles";

export function AppInformation() {
  const appFeatures = [
    {
      icon: <FirstAid color="#FF7A00" size={32} />,
      description: "Agende as suas consultas em clínicas e hospitais",
    },
    {
      icon: <FileSearch color="#FF7A00" size={32} />,
      description: "Registre as suas manchas para observar padrões",
    },
    {
      icon: <ChartBar color="#FF7A00" size={32} />,
      description: "Receba previsões das manchas através de IA",
    },
    {
      icon: <Share color="#FF7A00" size={32} />,
      description: "Envio facilitado aos médicos",
    },
  ];

  return (
    <AppInformationContainer>
      <ThreeCellphonesImg src={ThreeCellphones} alt="three cellphones" />

      <AppInformationTitleContainer>
        <h1>Um aplicativo completo</h1>
        <ul>
          {appFeatures.map((feature, key) => {
            return (
              <li key={key}>
                {feature.icon}{' '}{feature.description}
              </li>
            );
          })}
        </ul>
      </AppInformationTitleContainer>
    </AppInformationContainer>
  );
}
