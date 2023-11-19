import styled from 'styled-components'

export const ItemMenuContainer = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #000;

  gap: 1rem;

  &:hover{
    color: #FF7A00;
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
`