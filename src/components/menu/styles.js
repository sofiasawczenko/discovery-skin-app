import { List as ListIcon } from "phosphor-react";
import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #fff;

  display: flex;
  gap: 2rem;

`;

export const List = styled(ListIcon)`
  margin-top: 1.1rem;
  margin-left: 1rem;
  cursor: pointer;
  color: #FF7A00;
  transition: 500ms;
  
  &:hover {
    color: #000
  }
`;

export const Logo = styled.img`
  align-self: start;
`
