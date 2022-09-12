const reducer = (state, action) => {
  // Uncomment for data fetching
//   if (action.type === "LOADING") return { ...state, loading: true };

//   if (action.type === "ERROR") return { ...state, loading: false };

//   if (action.type === "DISPLAY_ITEMS")
//     return { ...state, cart: action.payload, loading: false };

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    const newCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE_ITEM" || action.type === "DECREASE_ITEM") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          if (action.type === "INCREASE_ITEM")
            return { ...item, amount: item.amount + 1 };
          else return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.amount += amount;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  throw new Error("no matching action type");
};

export default reducer;
