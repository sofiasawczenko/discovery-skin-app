import { ArticleCardContainer } from "./styles";

export function ArticleCard({
  articleImg,
  title,
  description,
  author,
  articleLink,
}) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <ArticleCardContainer to={articleLink} onClick={handleClick}>
      <img src={articleImg} alt={title.substring(0, 10)} />
      <h4>{title}</h4>

      <p>{description}</p>

      <small>Por {author}</small>
    </ArticleCardContainer>
  );
}
