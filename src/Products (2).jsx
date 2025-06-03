
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const sampleProducts = [
  { name: 'Mango Pickle', price: '₹120' },
  { name: 'Lemon Pickle', price: '₹100' },
  { name: 'Chili Pickle', price: '₹110' }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Pickles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
