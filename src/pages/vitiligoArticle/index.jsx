import { 
TitleContainer, 
MacroImage,
SubTitle,
ReadingTime,
TextContent,
DefinicaoVitiligo,
DefinicaoVitiligo2,
TopicosVitiligo,
PorcentagemComVitiligo,
TopicosTratamento,
TerapiaTopica,
TopicoFototerapia,
TopicoCirurgia,
TopicoBranqueamento,
TextGeral,
TratamentoText,
} from "./styles";
import VitiligoImage from '/src/assets/article/vitiligo-image.svg';

export function VitiligoArticle() {
  return (
    <><><><TitleContainer>
      <p>
        Vitiligo: Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal
      </p>
    </TitleContainer>
    <SubTitle>
      PREVENÇÃO E TRATAMENTO DE DOENÇAS
      NÃO TRANSMISSÍVEIS
    </SubTitle>


      <MacroImage>
        <img src={VitiligoImage} alt="Pessoa com Vitiligo" title="Pessoa com Vitiligo" />
      </MacroImage></><ReadingTime>
        <p>
          Tempo de Leitura: 6 minutos
        </p>
      </ReadingTime></><TextContent>
        <DefinicaoVitiligo>
          <p>O Vitiligo é uma condição dermatológica caracterizada pela perda gradativa de pigmentação da pele, resultando em manchas brancas ou áreas despigmentadas. Embora não seja uma doença prejudicial à saúde, o impacto emocional e psicossocial do Vitiligo pode ser significativo, desafiando padrões convencionais de beleza e aceitação.</p>
        </DefinicaoVitiligo>

        <DefinicaoVitiligo2>
        <p>
        O Vitiligo ocorre quando as células produtoras de pigmento, melanócitos, são destruídas ou param de funcionar. Isso leva à falta de melanina, o pigmento responsável pela coloração da pele, cabelo e olhos. As manchas brancas que resultam podem se manifestar em qualquer parte do corpo, variando em tamanho e forma.
        </p>
        </DefinicaoVitiligo2>

        <TopicosVitiligo>
        <ul>
          <li>As manchas de pele embranquecida estão presentes em várias partes do corpo.</li>
          <li>Geralmente, os médicos baseiam o diagnóstico na aparência da pele.</li>
          <li>Os cremes corticosteroides, outros medicamentos ou fototerapia mais medicamentos sensíveis à luz podem ajudar na repigmentação da pele.</li>
          <li>Se necessário, é possível usar enxertos para restaurar a pigmentação em áreas afetadas.</li>
        </ul>
        </TopicosVitiligo>

        <PorcentagemComVitiligo>
        <p>O vitiligo afeta até 2% das pessoas.</p>
        </PorcentagemComVitiligo>

        <TextGeral>
        <p>A causa do vitiligo é desconhecida, mas trata-se de um distúrbio de pigmentação cutânea que pode envolver um ataque do sistema imunológico às células que produzem o pigmento cutâneo melanina (melanócitos). 
          O vitiligo costuma ser hereditário, ou as pessoas podem desenvolvê-lo espontaneamente. O vitiligo pode ocorrer com certas doenças. Ele está associado a doenças autoimunes (quando o corpo ataca seus próprios tecidos), 
          sendo a doença da tireoide a mais comum. Ele está mais fortemente associado a uma tireoide hiperativa (hipertireoidismo, particularmente quando causado pela doença de Graves) e hipoativa (hipotireoidismo, particularmente quando causado pela tireoidite de Hashimoto). 
          Pessoas com diabetes, doença de Addison e anemia perniciosa também têm mais probabilidade de desenvolver vitiligo. 
          Entretanto, a relação entre essas doenças e o vitiligo é incerta.
        </p></TextGeral>

        <TextGeral><p>
        Ocasionalmente, o vitiligo ocorre depois de lesão física na pele, por exemplo, como resposta a uma queimadura por produto químico ou queimadura solar. 
        As pessoas também podem observar que o vitiligo é desencadeado por um episódio de estresse emocional.
        </p></TextGeral>

        <TratamentoText>
          <h2>Abordagens de Tratamento:</h2>
        </TratamentoText>

        <TopicosTratamento>
          <ul>
            <li>Creme contendo um corticosteroide e calcipotriol ou às vezes outras substâncias aplicadas na pele (terapia tópica)</li>
            <li>Fototerapia e psoralenos</li>
            <li>Cirurgia</li>
            <li>Descoloração da pele não afetada</li>
          </ul>
        </TopicosTratamento>
            <p>
            Não se conhece a cura para o vitiligo, e o distúrbio pode ser difícil de controlar. No entanto, a cor da pele pode voltar de forma espontânea. O tratamento pode ser útil. Todas as áreas afetadas da pele correm risco de queimadura solar grave e devem ser protegidas do sol com vestuário e protetor solar. A exposição prolongada à luz solar pode aumentar o risco de câncer de pele.

            O creme tópico de ruxolitinibe está disponível para o tratamento do vitiligo. No entanto, a despigmentação pode reaparecer após a interrupção no uso desse medicamento.

            <TerapiaTopica><h3>Terapia tópica</h3></TerapiaTopica>
            Por vezes, as manchas pequenas escurecem (repigmentam-se) quando se aplica um tratamento com cremes à base de corticosteroides fortes. Medicamentos, como tacrolimo ou pimecrolimo, podem ser aplicados às manchas no rosto ou na virilha, onde os cremes à base de corticosteroides fortes podem causar efeitos colaterais. Um creme contendo calcipotrieno (também chamado calcipotriol), que é uma forma de vitamina D, e betametasona (um creme de corticosteroide) são mais eficazes em conjunto do que cada um dos cremes usado individualmente. Algumas pessoas utilizam bronzeadores, colorações para a pele ou maquiagem para escurecer a área.

            <TopicoFototerapia><h3>Fototerapia e psoralenos</h3></TopicoFototerapia>
            Como muitas pessoas ainda têm um pouco de melanócitos nas manchas de vitiligo, a exposição à luz ultravioleta (UV) no consultório médico (fototerapia) reestimula a produção de pigmentos em mais da metade deles (Fototerapia). Em particular, podem ser administrados os psolarenos (medicamentos que deixam a pele mais sensível à luz) combinados com luz UVA (PUVA) ou tratamento de luz UVB de banda estreita sem psoralenos. No entanto, a fototerapia precisa de meses para demonstrar a sua eficácia e pode precisar ser continuada indefinidamente. Também pode dar origem ao câncer de pele. Os médicos também usam laser em algumas pessoas que tenham pequenas manchas que não respondem aos cremes à base de corticosteroide.

            <TopicoCirurgia><h3>Cirurgia</h3></TopicoCirurgia>
            As áreas que não respondem à fototerapia podem ser tratadas com várias técnicas de enxerto de pele e até mesmo transplante de melanócitos, que crescem em áreas da pele que não foram afetadas. A tatuagem é bem útil para zonas onde é difícil reestimular a produção de pigmentos (como mamilos, lábios ou ponta dos dedos).

            <TopicoBranqueamento><h3>Branqueamento</h3></TopicoBranqueamento>
            Algumas pessoas que têm extensões muito grandes de vitiligo preferem, às vezes, descolorir a pigmentação da pele que não foi afetada para conseguir uma tonalidade uniforme. O branqueamento é feito com repetidas aplicações de um creme de hidroquinona forte sobre a pele durante várias semanas a um ano ou mais. O creme pode causar muita irritação. Os efeitos do branqueamento (como a perda permanente do pigmento) são irreversíveis.
            </p>
      </TextContent></>
  );
}


