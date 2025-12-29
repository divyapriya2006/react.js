

import React, { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState('electronics'); // default category

  const productData = {
    electronics: [
      { id: 1, name: 'Smartphone', price: '$500' },
      { id: 2, name: 'Laptop', price: '$1000' },
      { id: 3, name: 'Headphones', price: '$100' },
    ],
    clothing: [
      { id: 4, name: 'T-Shirt', price: '$20' },
      { id: 5, name: 'Jeans', price: '$40' },
      { id: 6, name: 'Jacket', price: '$60' },
    ],
    books: [
      { id: 7, name: 'React Guide', price: '$25' },
      { id: 8, name: 'JavaScript Basics', price: '$15' },
      { id: 9, name: 'CSS Mastery', price: '$20' },
    ],
  };

  const products = productData[category] || [];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Product Store</h1>

      {/* Category buttons */}
      <div style={{ marginBottom: '20px' }}>
        {Object.keys(productData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              background: category === cat ? '#333' : '#555',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product list */}
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      {products.length === 0 ? (
        <p>No products in this category.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} - <strong>{p.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

 One attachment
  •  Scanned by Gmail
Displaying Screenshot (5).png.
