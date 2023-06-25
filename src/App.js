import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import OrderForm from './OrderForm';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza" component={OrderForm} />
    </div>
  );
};

export default App;