import { createContext, useContext, useReducer } from "react";
import dataItem from "./../data/dataItem";

export const ProductContext = createContext();
export const ProductContextActions = createContext();

const initialState = {
  products: localStorage.getItem("poroducts")
    ? JSON.parse(localStorage.getItem("poroducts"))
    : [],
};

const productHandler = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(productHandler, dataItem);

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
