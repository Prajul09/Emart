import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < product.star; i++) {
      stars.push(
        <AiFillStar key={i} className="text-yellow-500" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-48 object-fit"
        />
        <div className="absolute top-0 right-0 m-2 bg-gray-800 text-white p-2 rounded-full">
          <div className="flex items-center">
            {renderStars()} {product.reviews}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.company}</p>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {renderStars()} {product.reviews}
          </div>
        </div>
        <div className="text-gray-500 text-sm mt-2 flex">
          <del>${product.prevPrice}</del>
          <p className="font-semibold ml-2">
            ${product.newPrice}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
          >
            View Details
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;






