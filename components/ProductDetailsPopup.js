import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ProductDetailsPopup = ({ product, onClose, onAddToCart }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.star; i++) {
      stars.push(<AiFillStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal-container bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            Close (X)
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <div className="image-container">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-h-60 object-contain mb-4"
          />
        </div>
        <div><p className="text-xl font-semibold mb-2">{product.description}</p></div>
        <div className="flex items-center mb-2">
          {renderStars()}
          <span className="text-gray-600 ml-2">{product.reviews} Reviews</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-600 text-sm line-through">
            ${product.prevPrice}
          </span>
          <span className="text-lg font-semibold ml-2">${product.newPrice}</span>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none"
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;









