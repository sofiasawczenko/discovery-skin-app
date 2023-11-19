import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemMenuContainer = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #000;

  gap: 1rem;

  transition: transform 0.3s ease;

  &:hover {
    color: #ff7a00;
    transform: scale(
      1.1
    );
  }

  span {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 10px;
  }

  p {
    font-weight: 600;
  }
`;
