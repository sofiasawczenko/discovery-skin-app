import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultFooter } from "./layout/default-footer";
import { DefaultMenu } from "./layout/default-menu";
import { ChildMortality } from "./pages/child-mortality";
import { CommunicableDiseases } from "./pages/communicable-diseases";
import { GeneralHealth } from "./pages/general-health";
import { Home } from "./pages/home";
import { VitiligoArticle } from "./pages/vitiligo-article";

export function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigo/vitiligo" element={<VitiligoArticle />} />
          <Route path="/artigo/saude-geral" element={<GeneralHealth />} />
          <Route
            path="/artigo/mortalidade-infantil"
            element={<ChildMortality />}
          />
          <Route
            path="/artigo/combate-doencas-transmissiveis"
            element={<CommunicableDiseases />}
          />
        </Routes>
        <DefaultFooter />
      </BrowserRouter>
    </>
  );
}
