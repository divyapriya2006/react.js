

import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Smartphone", price: 25000 },
  { id: 4, name: "Keyboard", price: 1500 },
];

function Ecommerce() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Product List</h2>

      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h3>🧾 Cart ({cart.length})</h3>

      {cart.length === 0 && <p>No items in cart</p>}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} – ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  button: {
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Ecommerce;

app.jsx



import Ecommerce from "./assets/core conpect/Helloworld/product";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Simple E-Commerce App
      </h1>
      <Ecommerce />
    </div>
  );
}

export default App;




 One attachment
  •  Scanned by Gmail
Displaying Screenshot (5).png.
