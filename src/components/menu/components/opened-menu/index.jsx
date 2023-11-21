import { Article, House, Phone } from "phosphor-react";
import DiscoverySkinLogoName from "../../../../assets/logo/discovery-skin-name-logo.svg";
import { ItemMenu } from "./item-menu";
import { ArticleContainer, LeftMenu, MenuContainer } from "./styles";

export function OpenedMenu() {
  const menuItens = [
    {
      icon: <House color="#FF7A00" size={32} />,
      itemName: "Home",
      path: "/",
    },
    {
      icon: <Phone color="#FF7A00" size={32} />,
      itemName: "Fale conosco",
    },
  ];

  const articleItens = [
    {
      itemName: "Vitiligo",
    },
    {
      itemName: "Drink para melhora de pele",
    },
    {
      itemName: "Melanoma em crianças",
    },
    {
      itemName: "Fungos na pele",
    },
  ];

  return (
    <LeftMenu>
      <img src={DiscoverySkinLogoName} alt="discovery skin logo name" />

      <MenuContainer>
        <p>Menu</p>

        <div>
          {menuItens.map((item, key) => {
            return (
              <ItemMenu
                key={key}
                icon={item.icon}
                itemName={item.itemName}
                path={item.path}
              />
            );
          })}
        </div>
      </MenuContainer>

      <ArticleContainer>
        <p>Artigos</p>

        <div>
          {articleItens.map((item, key) => {
            return (
              <ItemMenu
                key={key}
                icon={<Article color="#FF7A00" size={32} />}
                itemName={item.itemName}
              />
            );
          })}
        </div>
      </ArticleContainer>
    </LeftMenu>
  );
}
