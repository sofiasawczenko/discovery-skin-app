import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 27rem;
  text-decoration: none;
  color: #000;

  gap: 1rem;

  padding-bottom: 0.5rem;

  background-color: #f5f6fa;

  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  img {
    object-fit: cover;
    height: 10rem;
  }

  h4 {
    padding: 0 1rem;
  }

  p {
    padding: 0 1rem;
    color: #000;
  }

  small {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 1430px) {
    width: 23rem;
  }

  @media only screen and (max-width: 767px) {
    width: 18rem;
  }
`;
