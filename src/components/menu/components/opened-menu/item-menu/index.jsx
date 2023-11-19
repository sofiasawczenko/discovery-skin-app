import { ItemMenuContainer } from "./styles";

export function ItemMenu({ icon, itemName }) {
  return (
    <ItemMenuContainer href="">
      <span>{icon}</span>
      <p>{itemName}</p>
    </ItemMenuContainer>
  );
}
