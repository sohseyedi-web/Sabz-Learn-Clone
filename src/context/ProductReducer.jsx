import dataItem from "./../data/dataItem";
export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const addProduct = [...state.products];
      const addProductIndex = addProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      if (addProductIndex >= 0) {
        const updatedaddItem = { ...addProduct[addProductIndex] };
        updatedaddItem.quantity++;
        addProduct[addProductIndex] = updatedaddItem;
      } else {
        let tempProduct = { ...action.payload, quantity: 1 };
        addProduct.push(tempProduct);
      }
      localStorage.setItem("products", JSON.stringify(addProduct));
      return { ...state, products: addProduct };
    }
    case "REMOVE_ITEM": {
      const delProduct = [...state.products];
      const delProductIndex = delProduct.findIndex(
        (item) => item.id === action.payload.id
      );

      const updateProduct = { ...delProduct[delProductIndex] };
      if (updateProduct.quantity === 1) {
        const filterProduct = delProduct.filter(
          (i) => i.id !== action.payload.id
        );
        localStorage.setItem("products", JSON.stringify(filterProduct));
        return {
          ...state,
          products: filterProduct,
        };
      } else {
        updateProduct.quantity--;
        delProduct[delProductIndex] = updateProduct;
        localStorage.setItem("products", JSON.stringify(delProduct));
        return {
          ...state,
          products: delProduct,
        };
      }
    }
    case "SEARCH_ITEM": {
      const value = action.event.target.value;

      if (value === "") {
        return { ...state, data: dataItem };
      } else {
        const filterItems = dataItem.filter((i) =>
          i.title.toLowerCase().includes(value.toLowerCase())
        );
        return { ...state, data: filterItems };
      }
    }
    default:
      return state;
  }
};
