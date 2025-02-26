// src/pages/CartPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, total, removeFromCart, clearCart } = useContext(CartContext);
  
  if (cart.length === 0) {
    return (
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/catalog" className="bg-blue-600 text-white px-4 py-2 rounded">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          {cart.map(item => (
            <div key={item.id} className="p-4 border-b">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    className="text-red-500 mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link to="/catalog" className="bg-blue-600 text-white px-4 py-2 rounded">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;