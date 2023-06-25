import React, { useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState({
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
  });
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    const { name: toppingName, checked } = event.target;
    setToppings((prevToppings) => ({
      ...prevToppings,
      [toppingName]: checked,
    }));
  };

  const handleSpecialInstructionsChange = (event) => {
    setSpecialInstructions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the payload object
    const payload = {
      name,
      size,
      ...toppings,
      special: specialInstructions,
    };

    // Send the payload to the server or perform any other necessary actions
    console.log(payload);
  };

  return (
    <div>
      <h2>Order Pizza</h2>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={handleNameChange}
        />
        {name.length < 2 && (
          <p style={{ color: 'red' }}>name must be at least 2 characters</p>
        )}

        <label htmlFor="size-dropdown">Size:</label>
        <select id="size-dropdown" value={size} onChange={handleSizeChange}>
          <option value="">Select size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label>Choose Toppings:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="topping1"
              checked={toppings.topping1}
              onChange={handleToppingChange}
            />
            Topping 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="topping2"
              checked={toppings.topping2}
              onChange={handleToppingChange}
            />
            Topping 2
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="topping3"
              checked={toppings.topping3}
              onChange={handleToppingChange}
            />
            Topping 3
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="topping4"
              checked={toppings.topping4}
              onChange={handleToppingChange}
            />
            Topping 4
          </label>
        </div>

        <label htmlFor="special-text">Special Instructions:</label>
        <input
          type="text"
          id="special-text"
          value={specialInstructions}
          onChange={handleSpecialInstructionsChange}
        />

        <button type="submit">Add to Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
