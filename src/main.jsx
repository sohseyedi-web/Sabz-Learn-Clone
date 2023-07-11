import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductProvider from "./context/ProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
      <Toaster position={"top-right"} />
    </ProductProvider>
  </React.StrictMode>
);
