import * as actions from "./actions";
import items from "./products";
const initialStore = {
  productsToSale: items,
  cart: [],
  total: 0,
  itemQuantity: 0
};
const reducer = (state = initialStore, action) => {
  if (action.type === actions.ADD_TO_CART) {
    return {
      ...state,
      itemQuantity: state.itemQuantity + 1,
      cart: [...state.cart, action.payload],
      total: (state.total += action.payload.price)
    };
  }

  return state;
};

export default reducer;
