import React from 'react';

const CartItems = ({ cartItems = [], onIncrease, onDecrease, onDelete }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="border p-4 mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-fill mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="mb-4 sm:mb-0">
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-gray-700 mt-2">${item.newPrice * item.quantity}</p>
            </div>
            <div className="flex items-center">
              <button
                className="text-xl font-bold"
                onClick={() => onDecrease(item.id)}
              >
                -
              </button>
              <span className="text-xl mx-2">{item.quantity}</span>
              <button
                className="text-xl font-bold"
                onClick={() => onIncrease(item.id)}
              >
                +
              </button>
              <button
                className="text-red-500 ml-4"
                onClick={() => onDelete(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;








