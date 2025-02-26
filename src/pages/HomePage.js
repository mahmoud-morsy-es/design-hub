// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to DesignHub</h1>
          <p className="text-xl text-gray-600 mb-6">Transform your space with our curated furniture collection</p>
          <div className="flex justify-center">
            <Link to="/catalog" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium">
              Shop Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;