import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/home/Layout";
import Cart from "./components/cart/Cart";
import Single from "./components/singlepage/Single";
import * as HiIcon from "react-icons/hi2";
import Products from "./components/products/Products";
import Auth from './components/auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={"/"} />
        <Route element={<Cart />} path={"/cart"} />
        <Route element={<Single />} path={"/products/:id"} />
        <Route element={<Products />} path={"/products"} />
        <Route element={<Auth />} path={"/auth"} />
      </Routes>
      <div className="contact">
        <HiIcon.HiOutlineChatBubbleOvalLeft size={30}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
