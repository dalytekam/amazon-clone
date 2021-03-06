import * as actions from "./actions";
import items from "./products";
const initialStore = {
  productsToSale: items,
  cart: [],
  total: 0,
  itemQuantity: 0,
  credentials: { email: "", password: "" }
};
const reducer = (state = initialStore, action) => {
  if (action.type === actions.ADD_TO_CART) {
    return {
      ...state,
      itemQuantity: state.itemQuantity + 1,
      cart: [...state.cart, action.payload],
      total: parseFloat((state.total += action.payload.price).toFixed(2))
    };
  }
  if (action.type === actions.REMOVE_FROM_CART) {
    const cartAfterRemove = state.cart.filter(
      item => item.prid !== action.payload.prid
    );
    return {
      ...state,
      itemQuantity: state.itemQuantity - 1,
      cart: cartAfterRemove,
      total: parseFloat((state.total -= action.payload.price).toFixed(2))
    };
  }
  if (action.type === actions.ON_CHANGE_EMAIL) {
    return {
      ...state,
      credentials: {
        email: action.payload,
        password: state.credentials.password
      }
    };
  }

  if (action.type === actions.ON_CHANGE_PASSWORD) {
    return {
      ...state,
      credentials: { email: state.credentials.email, password: action.payload }
    };
  }

  return state;
};

export default reducer;
