import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const CART_KEY = 'cart';
const EMPTY_CART = {
  items: [],
  totalPrice: 0,
  totalCount: 0
}
export default function CartProvider({ children }) {
  const initCart = getCartFromLocalStorage();
  const [cartItems, setCartItems] = useState(initCart.items);
  const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
  const [totalCount, setTotalCount] = useState(initCart.totalCount);

  useEffect(() => {
    const totalPrice = sum(cartItems.map(item => item.price * item.quantity));
    const totalCount = sum(cartItems.map(item => item.quantity));
    setTotalPrice(totalPrice);
    setTotalCount(totalCount);

    localStorage.setItem(CART_KEY, JSON.stringify({ items: cartItems, totalPrice, totalCount }));
  },[cartItems])
  
  function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
  }
  const sum =items=>
    {
        return items.reduce((prevValue,currValue)=>prevValue+currValue,0)
    }
  const removeFromCart = (foodId) => {
    const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
    setCartItems(filteredCartItems);
    const itemToRemove = cartItems.find(item => item.food.id === foodId);
    setTotalCount(prev => prev - itemToRemove.quantity);
    setTotalPrice(prev => prev - itemToRemove.price);
  };
  const addToCart = (food) => {
    const cartItem = cartItems.find(item => item.food.id === food.id);
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    }
    else{
        setCartItems(prev => [...prev, { food, quantity: 1, price: food.price }])
    }
  }

  const changeQuantity = (cartItem, newQuantity) => {
    const { food } = cartItem;
    const oldQuantity = cartItem.quantity;
    const newPrice = food.price * newQuantity;

    const updatedCartItems = cartItems.map(item =>
      item.food.id === food.id ? { ...item, quantity: newQuantity, price: newPrice } : item
    );

    setCartItems(updatedCartItems);

    const priceDifference = newPrice - cartItem.price;
    const quantityDifference = newQuantity - oldQuantity;

    setTotalPrice(prev => prev + priceDifference);
    setTotalCount(prev => prev + quantityDifference);
  };

  return (
    <CartContext.Provider value={{ cart: { items: cartItems, totalPrice, totalCount }, removeFromCart, changeQuantity,addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
