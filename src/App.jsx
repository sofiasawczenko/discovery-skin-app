import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/home';

export function App() {
  return (
    <>
     <BrowserRouter basename="/">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teste" element={<h1>hello world</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}