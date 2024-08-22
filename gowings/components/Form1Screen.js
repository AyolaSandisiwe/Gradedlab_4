import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();
const ThemeContext = createContext();
const CartContext = createContext();

export const FormProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    
    const updateFormData = (data) => {
        setUserData(prevData => ({ ...prevData, ...data }));
    };
    
    return (
        <FormContext.Provider value={{ userData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        textColor: '#000000',
        backgroundColor: '#FFFFFF'
    });
    
    const updateTheme = (newTheme) => {
        setTheme(prevTheme => ({ ...prevTheme, ...newTheme }));
    };
    
    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };
    
    const removeFromCart = (item) => {
        setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
    };
    
    const updateQuantity = (id, quantity) => {
        setCartItems(prevItems => 
            prevItems.map(item => item.id === id ? { ...item, quantity } : item)
        );
    };
    
    const clearCart = () => {
        setCartItems([]);
    };
    
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useFormContext = () => useContext(FormContext);
export const useThemeContext = () => useContext(ThemeContext);
export const useCartContext = () => useContext(CartContext);
