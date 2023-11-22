import { 
TitleContainer,
ReadingTime,
SubTitle,
CenteredImage,
BodyTextRecomendacao,
CenteredImage2,
BodyTextQuantidade,
    } from "./styles";
import water from '/src/assets/water/water1.svg';
import water2 from '/src/assets/water/water2.svg';

    
export function GeneralHealth () {
  return (
    <div>
      <TitleContainer>
        <p>Como melhorar sua pele somente com um drink</p>
      </TitleContainer>

      <SubTitle>MELHORIA GERAL DA SAÚDE</SubTitle> 

      <CenteredImage src={water2} alt="water" title="water" />

      <ReadingTime>
        <p>Tempo de Leitura: 3 minutos</p>
      </ReadingTime>

      <BodyTextRecomendacao>
      <h3>Você consegue seguir a recomendação diária?</h3>
      Se a tua resposta é a de que consome os dois litros ao dia, ponto para você! Mas, se a resposta é não, é hora de rever esse hábito. E para isso te oferecemos um bom motivo: o resultado na pele. 
      </BodyTextRecomendacao>

      <CenteredImage2 src={water} alt="water" title="water" />

      <BodyTextQuantidade>
      <h3>Como saber se a quantidade ingerida é pouca, suficiente ou excessiva?</h3>

      Em uma matéria no site do Dr Dráuzio Varella se encontra uma boa dica: reparar na cor do xixi - que deve ser amarelo-claro. Se a urina estiver amarelo-escura e com odor forte e você estiver indo menos vezes do que costuma ao banheiro, é sinal de que está ingerindo pouca água. Se estiver urinando muito e a urina estiver límpida, transparente, provavelmente você está ingerindo água em excesso. O tom deve ser amarelo-claro, nem escuro e com forte odor, e nem completamente transparente. Portanto, é preciso saber interpretar os sinais que o nosso corpo nos dá.

      <h3>Hidratação da pele: dentro e fora</h3>

      Sabia que a ingestão recomendada de água se reflete na tua pele? A SBD - Sociedade Brasileira de Dermatologia - indica que uma boa hidratação deve ser feita por dentro e por fora. Por isso, além do uso de dermocosméticos específicos [para cada tipo de pele], recomenda-se a ingestão diária de, no mínimo, dois litros de água. 

      Isso porque a pele é composta por células que por sua vez, têm água em sua composição. Uma pele bem hidratada (e com uma rotina de skincare) tem viço e elasticidade.

      O primeiro sinal de um consumo abaixo do recomendado pode ser visto com os sinais que a pele nos dá. É aquela velha história que tanto falamos aqui na Sallve: é importante nos conhecermos e aprendermos a entender os sinais que o nosso corpo nos dá. A falta de hidratação adequada tem como consequências a perda de elasticidade e uma pele ressecada, comprometendo a reposição da barreira lipídica, que defende o nosso organismo de agressões externas. 

      <h3>Comprovado</h3>
      Uma pesquisa conduzida por Lídia Palma, Liliana Tavares Marques, Julia Bujan e Luís Rodrigues Monteiro, publicada no NCBI (National Center for Biotechnology Information) quantifica o efeito da água na fisiologia da pele. 49 mulheres saudáveis com idade entre 22 e 34 anos participaram do estudo que concluiu que o aumento da ingestão de água na dieta regular pode afetar positivamente a fisiologia normal da pele, por seu comportamento hidratante e biomecânico.

      O estudo apresenta as recomendações diárias de consumo do guia Diretrizes de alimentação para americanos, que indica uma ingestão entre 3,7 litros e 2,7 litros (muito superior a indicação no Brasil); e as da Autoridade Europeia para a Segurança dos Alimentos, que indica um consumo diário de dois a 2,5 litros - para pessoas saudáveis entre 19 e 30 anos. A recomendação individual deve ser feita por um médico que examina a tua estrutura física, peso, altura, idade, além de atividade física e ambiente em que você vive. Não se pode decidir ao acaso o quanto é recomendado a cada pessoa. As diferenças exorbitantes entre as recomendações generais de um país a outro é também relativo à alimentação local e ao clima, temperatura e umidade do ar. 

      </BodyTextQuantidade>
    </div>
  )
}