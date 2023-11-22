import { TitleContainer, SubTitle, ReadingTime, TiposText, AlertasText, CenteredImage, BodyText, CenteredImage2 } from "./styles";
import fungi from '/src/assets/fungi/fungi.svg'; 
import micose from '/src/assets/fungi/micose.svg'; 

export function CommunicableDiseases() {
  return (
    <div>
      <TitleContainer>
        <p>Além da Superfície: Entenda e Previna Fungos na Pele Transmissíveis.</p>
      </TitleContainer>

      <SubTitle>COMBATE A DOENÇAS TRANSMISSÍVEIS</SubTitle> 

      <CenteredImage src={fungi} alt="fungi" title="fungi" />

      <ReadingTime>
        <p>Tempo de Leitura: 10 minutos</p>
      </ReadingTime>

      <BodyText>
        <p>
            As micoses são infecções causadas por fungos. Como existem diversos tipos deles, as doenças causadas por esses microrganismos também são variadas.

            Quando se fala naquelas que atingem pele, cabelo e unhas, os fungos mais comuns causam micoses superficiais —as profundas, por sua vez, podem atingir órgãos internos e provocar sérios problemas para a saúde.

            Os fungos são transmitidos de pessoa para pessoa, de animais para pessoa e também da natureza para a pessoa, envolvendo plantas, solo e espinhos. As formas de contaminação mais comuns são as de pessoa para pessoa, por causa da proximidade e do contato com a área atingida. Piscinas, areia, áreas de banho, animais infectados e chão são locais potenciais para adquirir um fungo. No entanto, existem pessoas que possuem predisposição genética para doenças fúngicas e podem precisar de acompanhamento médico mais próximo para tratá-las...
        </p>
      </BodyText>

      <TiposText>
        <h3>Tipos de Micoses:</h3>
        <ul>
            <li>Micose de unha</li>
            <li>Pitiríase versicolor</li>
            <li>Pé de atleta</li>
            <li>Micose na virilha</li>
        </ul>
      </TiposText>

      <CenteredImage2 src={micose} alt="fungi" title="fungi" />

      <AlertasText>
        <h3>Alertas gerais dos especialistas</h3>
        O aumento de umidade e calor favorece o aparecimento de fungos, portanto, para prevenir a contaminação, é importante manter a pele seca e saudável, além de se atentar a qualquer sinal diferente pelo corpo. Muitas pessoas têm infecções fúngicas recorrentes, então, aos primeiros sinais de micose é necessário procurar atendimento médico para confirmar o diagnóstico. A doença pode ser confundida com alergia e outros problemas, por isso é tão importante identificar alterações desde o início. O tratamento depende do tipo de micose e da área que ela atingiu. O acompanhamento é fundamental, pois alguns medicamentos têm interação com outros remédios e alguns podem até causar alterações no... 
      </AlertasText>
    </div>
  );
}
