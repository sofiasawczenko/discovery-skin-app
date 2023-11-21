import styled from "styled-components";

export const LeftMenu = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 100%;

  padding: 1rem 2rem;

  background-color: #f5f6fa;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
