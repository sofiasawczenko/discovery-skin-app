import CotoveloImage from "../../../../assets/article/cotovelo.svg";
import ChildImage from "../../../../assets/child/baby2.svg";
import FungiImage from "../../../../assets/fungi/fungi.svg";
import WaterImage from "../../../../assets/water/water1.svg";
import { ArticleCard } from "../../../../components/article-card";
import { ArticlesCardContainer } from "./styles";

export function Articles() {
  const articles = [
    {
      title: "Prevenção e tratamento de doenças não transmissíveis",
      description:
        "Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal",
      img: CotoveloImage,
      author: "Dra Sarah",
    },
    {
      title: "Redução da mortalidade infantil",
      description:
        "A Realidade Alarmante - Melanoma em crianças e seus riscos mortais",
      img: ChildImage,
      author: "Dra Sarah",
    },
    {
      title: "Combate a doenças transmissíveis",
      description:
        "Além da Superfície: Entenda e previna fungos na pele transmissíveis",
      img: FungiImage,
      author: "Dra Sarah",
    },
    {
      title: "Melhoria Geral da saúde",
      description: "Como melhorar sua pele somente com um drink",
      img: WaterImage,
      author: "Dra Sarah",
    },
  ];

  return (
    <ArticlesCardContainer>
      {articles.map((article, key) => {
        return (
          <ArticleCard
            key={key}
            title={article.title}
            description={article.description}
            author={article.author}
            articleImg={article.img}
          />
        );
      })}
    </ArticlesCardContainer>
  );
}
