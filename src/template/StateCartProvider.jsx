import React, { useReducer, useState } from "react";

const initialState = {
  cartItems: [],
  confirmation: {
    product: null,
    confirm: false,
  },
  popupRef: null,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "DELETE_ALL_ITEMS":
      return { ...state, cartItems: [] };
    case "SET_CONFIRMATION":
      return {
        ...state,
        confirmation: action.payload,
      };
    default:
      return state;
  }
};

export const CartContext = React.createContext();

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
