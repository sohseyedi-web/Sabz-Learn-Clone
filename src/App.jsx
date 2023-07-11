import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/home/Layout";
import Cart from "./components/cart/Cart";
import Single from "./components/singlepage/Single";
import Products from "./components/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={"/"} />
        <Route element={<Cart />} path={"/cart"} />
        <Route element={<Single />} path={"/:name"} />
        <Route element={<Products />} path={"/products"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;