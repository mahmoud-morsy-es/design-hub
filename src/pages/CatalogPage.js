// src/pages/CatalogPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CatalogPage = () => {
  const { addToCart } = useContext(CartContext);
  
  // Sample products
  const products = [
    {
      id: "1",
      name: "Modern Leather Sofa",
      price: 1299.99,
      category: "living-room"
    },
    {
      id: "2",
      name: "Coffee Table",
      price: 349.99,
      category: "living-room"
    }
  ];
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => addToCart(product, 1)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;