const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.payload.product],
      };
    case "REMOVE_FROM_CART":
      state.cart.forEach((product, i) => {
        if (product.id === action.payload.id) {
          state.cart.splice(i, 1);
          return;
        }
      });
      console.log(state.cart);
      return { cart: [...state.cart] };
    default:
      return state;
  }
};

export default cartReducer;
