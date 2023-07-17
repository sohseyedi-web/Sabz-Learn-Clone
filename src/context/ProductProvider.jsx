import { createContext, useContext, useReducer } from "react";
import dataItem from "./../data/dataItem";
import { productReducer } from "./ProductReducer";

export const ProductContext = createContext();
export const ProductContextActions = createContext();

const initialState = {
  products: [],
  data: dataItem,
};

const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={product}>
      <ProductContextActions.Provider value={dispatch}>
        {children}
      </ProductContextActions.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);
export const useProductDispatch = () => useContext(ProductContextActions);
