import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Cart from './Cart';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import { AuthContext } from './AuthContext';
import OrderPage from './orderpage'; // ✅ Import OrderPage
import './App.css';

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className='rightnav'>
        <nav>
          <ul>
            {isAuthenticated ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><button onClick={logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<h2>Signup Page</h2>} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard addToCart={addToCart} cart={cart} />} />} />
          <Route path="/cart" element={<ProtectedRoute element={<Cart cart={cart} setCart={setCart} />} />} />
          <Route path="/order" element={<ProtectedRoute element={<OrderPage cart={cart} setCart={setCart} />} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
