import VitiligoArticleImage from "../../../../assets/article/vitiligo-card.svg";
import { ArticleCard } from "../../../../components/article-card";
import { ArticlesCardContainer } from "./styles";

export function Articles() {
  return (
    <ArticlesCardContainer>
      <ArticleCard
        title="Vitiligo: Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal"
        author="Dra Sarah"
        description="Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer"
        articleImg={VitiligoArticleImage}
      />
      <ArticleCard
        title="Vitiligo: Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal"
        author="Dra Sarah"
        description="Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer"
        articleImg={VitiligoArticleImage}
      />
      <ArticleCard
        title="Vitiligo: Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal"
        author="Dra Sarah"
        description="Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer"
        articleImg={VitiligoArticleImage}
      />
    </ArticlesCardContainer>
  );
}
