import React, { useState, useEffect } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import ProductCard from '../components/ProductCard';
import ProductDetailsPopup from '../components/ProductDetailsPopup';
import dummyData from '../dummyData';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setShowPopup(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSelectedColor('');
  };

  const handleColorFilter = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity++;
      setCartItems(updatedCartItems);
  
      // Store the updated cart items in local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      console.log('Cart items stored in local storage:', updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
  
      // Store the updated cart items in local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      console.log('Cart items stored in local storage in else part:', updatedCartItems);
    }
  
    // Store the selected product in state
    setSelectedProduct(product);
  };

  const filteredProducts = dummyData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === product.category;
    const matchesColor = !selectedColor || selectedColor === product.color;

    return matchesSearch && matchesCategory && matchesColor;
  });

  const uniqueCategories = Array.from(new Set(dummyData.map((product) => product.category)));
  const uniqueColors = Array.from(new Set(dummyData.map((product) => product.color)));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Product List</h1>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between mb-4">
        
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
  
        <Filters
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          uniqueCategories={uniqueCategories}
          uniqueColors={uniqueColors}
          handleCategoryFilter={handleCategoryFilter}
          handleColorFilter={handleColorFilter}
        />
      </div>
  
      {filteredProducts.length === 0 && (
        <div className="text-center text-red-500 text-xl">
          No products found.
        </div>
      )}
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={handleViewDetails}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
  
      
      {showPopup && selectedProduct && (
        <ProductDetailsPopup
          product={selectedProduct}
          onClose={handleClosePopup}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
  
      <div className="fixed bottom-0 right-0 p-4">
        <Link href="/cart" className="text-2xl cursor-pointer">
          <div>
            <RiShoppingCartLine />
            {cartItems.length > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );  
};

export default Home;
