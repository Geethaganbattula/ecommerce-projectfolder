import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import staticProducts from './staticProducts'; // Local fallback

function Dashboard({ cart, addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [useStatic, setUseStatic] = useState(false); // Fallback state
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (category = '') => {
    try {
      const url = category
        ? `https://fakestoreapi.in/api/products/category?type=${category}`
        : 'https://fakestoreapi.in/api/products';
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setUseStatic(false);
      } else {
        throw new Error('Empty or invalid response');
      }
    } catch (error) {
      console.warn('API failed. Using static products.', error);
      // fallback to static products
      const filtered = category
        ? staticProducts.filter(p => p.category === category)
        : staticProducts;
      setProducts(filtered);
      setUseStatic(true);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  const resetCategory = () => {
    setSelectedCategory('');
    fetchProducts('');
  };

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div id="dashboard">
      <h1>{useStatic ? "Explore Products (Offline Mode)" : "Explore Products"}</h1>

      <div id="category-buttons">
        <button onClick={() => handleCategoryClick('audio')}>Audio</button>
        <button onClick={() => handleCategoryClick('gaming')}>Gaming</button>
        <button onClick={() => handleCategoryClick('appliances')}>Appliances</button>
        <button onClick={resetCategory}>Show All</button>
      </div>

      <div id="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <div className="product-price">
              <p>Price: ${product.price}</p>
              {isInCart(product) ? (
                <button onClick={() => navigate('/cart')}>Go to Cart</button>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
