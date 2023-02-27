import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      let quantityPrice = state.cartItems.map(
        (item) => item.price * item.quantity
      );

      state.totalAmount = quantityPrice.reduce((total, item) => total + item);
    },
    deleteItem: (state, action) => {
      const idItemWeWhantDelete = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === idItemWeWhantDelete
      );

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== idItemWeWhantDelete
        );
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
