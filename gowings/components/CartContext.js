import React, { createContext, useReducer } from 'react';

const initialState = {
  items: [],
  totalCost: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          totalCost: state.totalCost + action.payload.price,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          totalCost: state.totalCost + newItem.price,
        };
      }
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      const updatedTotalCost = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        totalCost: updatedTotalCost,
      };
    }

    case 'REMOVE_FROM_CART': {
      const filteredItems = state.items.filter(
        item => item.id !== action.payload.id
      );

      const newTotalCost = filteredItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: filteredItems,
        totalCost: newTotalCost,
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        totalCost: 0,
      };

    default:
      return state;
  }
};


export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
