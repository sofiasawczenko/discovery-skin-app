import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultFooter } from "./layout/default-footer";
import { DefaultMenu } from "./layout/default-menu";
import { Home } from './pages/home';
import { VitiligoArticle } from './pages/vitiligoArticle';
import {GeneralHealth} from './pages/generalHealth';
import { ChildMortality } from './pages/childMortality';
import { CommunicableDiseases}  from './pages/communicableDiseases';
import { ContactUs}  from './pages/contactUs';

export function App() {
  return (
    <>
     <BrowserRouter basename="/">
      <DefaultMenu />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vitiligoArticle" element={<VitiligoArticle/>}/>
          <Route path="/generalHealth" element={<GeneralHealth/>}/>
          <Route path="/childMortality" element={<ChildMortality/>}/>
          <Route path="/communicableDiseases" element={<CommunicableDiseases/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
      <DefaultFooter />
    </BrowserRouter>
    </>
  );
}