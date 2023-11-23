import { ItemMenuContainer } from "./styles";

export function ItemMenu({ icon, itemName, path, setSidebarOpen }) {
  return (
    <ItemMenuContainer to={path} onClick={() => setSidebarOpen(false)}>
      <span>{icon}</span>
      <p>{itemName}</p>
    </ItemMenuContainer>
  );
}
