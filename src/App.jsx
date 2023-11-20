import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/default-layout";
import { Home } from './pages/home';

export function App() {
  return (
    <>
     <BrowserRouter basename="/">
      <DefaultLayout />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teste" element={<h1>hello world</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}