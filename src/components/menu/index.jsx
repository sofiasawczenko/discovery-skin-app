import { useState } from "react";
import Sidebar from "react-sidebar";
import DiscoverySkinNameLogo from "../../assets/logo/discovery-skin-name-logo.svg";
import { OpenedMenu } from "./components/opened-menu";
import { List, Logo, NavBar } from "./styles";

export function Menu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <div>
      <Sidebar
        sidebar={<OpenedMenu />}
        open={sidebarOpen}
        onSetOpen={(open) => setSidebarOpen(open)}
        styles={{ sidebar: { background: '#f5f6fa' } }}
      >
        <NavBar>
          <List size={32} onClick={() => onSetSidebarOpen(!sidebarOpen)} />
          <Logo src={DiscoverySkinNameLogo} alt="discovery skin logo name" />
        </NavBar>
      </Sidebar>
    </div>
  );
}
