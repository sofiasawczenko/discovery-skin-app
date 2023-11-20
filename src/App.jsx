import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultFooter } from "./layout/default-footer";
import { DefaultMenu } from "./layout/default-menu";
import { Home } from './pages/home';

export function App() {
  return (
    <>
     <BrowserRouter basename="/">
      <DefaultMenu />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teste" element={<h1>hello world</h1>}/>
      </Routes>
      <DefaultFooter />
    </BrowserRouter>
    </>
  );
}