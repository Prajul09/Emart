import React from 'react';
import CartItems from './CartItems';

const Cart = ({ cartItems = [], onIncrease, onDecrease, onDelete, subtotal }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-2xl text-red-500 flex justify-center'>Your cart is empty.</p>
      ) : (
        <div>
          <CartItems
            cartItems={cartItems}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
          />
          <p className="text-xl mt-4">Subtotal: ${subtotal}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;








