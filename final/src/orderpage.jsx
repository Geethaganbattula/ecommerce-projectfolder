import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage({ cart, setCart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    alert('🎉 Order Placed Successfully!');
    setCart([]); // Clear cart after placing order
    navigate('/'); // Go to home page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2><span role="img" aria-label="receipt">🧾</span> Order Summary</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} x {item.quantity} - ₹{item.price * item.quantity}
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default OrderPage;
