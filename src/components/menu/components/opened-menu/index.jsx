import { Article, House } from "phosphor-react";
import DiscoverySkinLogoName from "../../../../assets/logo/discovery-skin-name-logo.svg";
import { ItemMenu } from "./item-menu";
import { ArticleContainer, LeftMenu, MenuContainer } from "./styles";

export function OpenedMenu({ setSidebarOpen }) {
  const menuItens = [
    {
      icon: <House color="#FF7A00" size={32} />,
      itemName: "Home",
      path: "/",
    }
  ];

  const articleItens = [
    {
      itemName: "Vitiligo",
      path: "/artigo/vitiligo",
    },
    {
      itemName: "Drink para melhora de pele",
      path: "/artigo/saude-geral",
    },
    {
      itemName: "Melanoma em crianças",
      path: "/artigo/mortalidade-infantil",
    },
    {
      itemName: "Fungos na pele",
      path: "/artigo/combate-doencas-transmissiveis",
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
                setSidebarOpen={setSidebarOpen}
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
                path={item.path}
                setSidebarOpen={setSidebarOpen}
              />
            );
          })}
        </div>
      </ArticleContainer>
    </LeftMenu>
  );
}
