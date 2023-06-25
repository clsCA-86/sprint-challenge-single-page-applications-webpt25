import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Pizza App!</h1>
      <Link to="/pizza" id="order-pizza">Order Pizza</Link>
    </div>
  );
};

export default HomePage;
