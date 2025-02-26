// src/components/layout/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const { itemCount } = useContext(CartContext);
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">DesignHub</Link>
          
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/catalog" className="hover:text-blue-600">Shop</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              Cart ({itemCount})
            </Link>
            
            {isAuthenticated ? (
              <div>
                <span className="mr-2">Hi, {user.name}</span>
                <button onClick={logout} className="bg-blue-600 text-white px-4 py-2 rounded">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;