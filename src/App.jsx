import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/home/Layout";
import Cart from "./components/cart/Cart";
import Single from "./components/singlepage/Single";
import * as BiIcon from "react-icons/bi";
import Products from "./components/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={"/"} />
        <Route element={<Cart />} path={"/cart"} />
        <Route element={<Single />} path={"/products/:id"} />
        <Route element={<Products />} path={"/products"} />
      </Routes>
      <div className="contact">
        <BiIcon.BiMessageDetail size={30}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
