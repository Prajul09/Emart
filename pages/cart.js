import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleIncrease = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleDecrease = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // If quantity is 1, remove the item from the cart
          return null;
        }
      }
      return item;
    });
  
    // Remove null values (items with quantity 0) from the updated cart
    const filteredCartItems = updatedCartItems.filter((item) => item !== null);
  
    setCartItems(filteredCartItems);
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
  };
  

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cartItems) {
      subtotal += item.newPrice * item.quantity;
    }
    return subtotal;
  };

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <h3 className="text-blue-500 hover:underline flex gap-2"><AiOutlineArrowLeft />Continue Shopping</h3>
      </Link>
      <Cart
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onDelete={handleDelete}
        subtotal={calculateSubtotal()}
      />
    </div>
  );
};

export default CartPage;






