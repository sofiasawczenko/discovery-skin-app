import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultFooter } from "./layout/default-footer";
import { DefaultMenu } from "./layout/default-menu";
import { ChildMortality } from "./pages/childMortality";
import { CommunicableDiseases } from "./pages/communicableDiseases";
import { ContactUs } from "./pages/contactUs";
import { GeneralHealth } from "./pages/generalHealth";
import { Home } from "./pages/home";
import { VitiligoArticle } from "./pages/vitiligoArticle";

export function App() {
  return (
    <>
      <BrowserRouter basename="/">
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
          <Route path="/fale-conosco" element={<ContactUs />} />
        </Routes>
        <DefaultFooter />
      </BrowserRouter>
    </>
  );
}
