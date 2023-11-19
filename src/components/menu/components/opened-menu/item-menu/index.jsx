import { ItemMenuContainer } from "./styles";

export function ItemMenu({ icon, itemName, path }) {
  return (
    <ItemMenuContainer to={path}>
      <span>{icon}</span>
      <p>{itemName}</p>
    </ItemMenuContainer>
  );
}
