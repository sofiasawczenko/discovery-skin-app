import {
  Article,
  ContentContainer,
  TitleContainer,
  TitleDescription,
  Topics,
} from "./styles";
import Baby1 from "/src/assets/child/baby1.svg";
import Baby2 from "/src/assets/child/baby2.svg";

export function ChildMortality() {
  return (
    <Article>
      <TitleContainer>
        <h1>
          A Realidade Alarmante - Melanoma em Crianças e Seus Riscos Mortais
        </h1>
        <p>REDUÇÃO DA MORTALIDADE INFANTIL</p>
        <img src={Baby1} alt="Child" title="Child" />
        <TitleDescription>Tempo de Leitura: 6 minutos</TitleDescription>
      </TitleContainer>

      <ContentContainer>
        <p>
          O melanoma e outros tipos de câncer de pele são bastante raros em
          crianças e adolescentes. No entanto, eles não estão isentos da
          possibilidade de desenvolver a doença. Nos Estados Unidos, todos os
          anos cerca de 300 pacientes pediátricos recebem o diagnóstico do
          câncer de pele mais perigoso. Nas crianças, diferentemente do que
          ocorre com os adultos, o melanoma está mais relacionado a síndromes
          hereditárias e a lesões de pele que podem sofrer modificações do que
          ao dano solar. Mas é extremamente importante iniciar as medidas de
          fotoproteção desde cedo, pois os danos causados pela radiação
          ultravioleta são cumulativos. Um histórico de queimaduras solares na
          infância aumenta o risco de melanoma na idade adulta. As crianças têm
          a pele mais sensível e delicada. Por isso, o melanoma nessa faixa
          etária se apresenta de uma forma diferente dosadultos. Enquanto nos
          adultos geralmente as lesões têm coloração escura, nas crianças elas
          costumam ser esbranquiçadas, amareladas ou rosadas.
        </p>

        <h3>Os sintomas de melanoma infantil mais comuns são:</h3>
        <Topics>
          <ul>
            <li>Saliências na pele que coçam ou sangram.</li>
            <li>
              Uma lesão similar a uma verruga, de cor amarelada, esbranquiçada
              ou rosada.
            </li>
            <li>
              Sinais de aparência estranha e tamanho grande, diferentes de
              outras pintas existentes no corpo da criança.
            </li>
          </ul>
        </Topics>

        <img src={Baby2} alt="child image" />

        <p>
          Os fatores de risco para o melanoma na infância são iguais aos dos
          adultos: pele clara, sardas, cabelos claros ou ruivos, histórico de
          queimaduras solares, muitos sinais espalhados pelo corpo, histórico
          familiar de melanoma ou câncer de pele. É importante lembrar que as
          crianças normalmente têm algumas pintas no corpo. Os sinais
          desenvolvidos nesta idade são os nevos, pequenas manchas marrons ou
          saliências, que surgem progressivamente e são mais comuns no tronco.
          Quanto mais intensa e frequente for a exposição solar, maior será a
          ocorrência dos nevos. Normalmente, as pintas dos pequenos são
          benignas, mas mesmo assim os pais devem observar sua pele todos os
          meses e atentar para qualquer mudança ou anormalidade. Lembrando que
          uma quantidade excessiva de nevos é fator de risco para melanoma. Para
          saber se um sinal é suspeito de câncer de pele, os pais podem usar a
          REGRA do ABCDE, onde:
        </p>

        <Topics>
          <ul>
            <li>
              A corresponde à Assimetria. Sinais normais são assimétricos.
            </li>

            <li>
              B corresponde a Bordas irregulares. Pintas benignas têm bordas
              arredondadas, e lesões potencialmente cancerígenas têm bordas
              irregulares.
            </li>

            <li>
              C corresponde à Cor. Lesões benignas têm coloração uniformes,
              enquanto lesões cancerígenas têm diversas cores.
            </li>

            <li>
              D corresponde a Diâmetro. Pintas maiores de 0,5 cm são suspeitas.
            </li>
          </ul>
        </Topics>
        <p>
          E corresponde à Evolução. A lesão que tenha alterações no tamanho,
          espessura, coloração ou apresente sangramento ou coceira pode indicar
          um câncer de pele. Ao examinar a pele das crianças, observe todo o
          corpo, inclusive áreas não expostas, como couro cabeludo, pés, mãos e
          unhas. Uma ideia interessante é anotar, a cada exame, os sinais
          existentes nas diferentes partes do corpo dos filhos, e verificar as
          mudanças ocorridas ao longo do tempo.
        </p>
      </ContentContainer>
    </Article>
  );
}
