import VitiligoArticleImage from "../../../../assets/article/vitiligo-card.svg";
import { ArticleCard } from "../../../../components/article-card";
import { ArticlesCardContainer } from "./styles";

export function Articles() {
  const articles = [
    {
      title: "Prevenção e tratamento de doenças não transmissíveis",
      description:
        "Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal",
      img: VitiligoArticleImage,
      author: "Dra Sarah",
    },
    {
      title: "Redução da mortalidade infantil",
      description:
        "Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal",
      img: VitiligoArticleImage,
      author: "Dra Sarah",
    },
    {
      title: "Combate a doenças transmissíveis",
      description:
        "Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal",
      img: VitiligoArticleImage,
      author: "Dra Sarah",
    },
    {
      title: "Melhoria Geral da saúde",
      description:
        "Uma Profunda Exploração da Condição de Pele que Desafia a Pigmentação Normal",
      img: VitiligoArticleImage,
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
