import React from 'react';
import './HomePage.css'; 
import { useNavigate } from 'react-router-dom';

function HomePage  ()  {
  const history=useNavigate();
  const handleLogin=()=>{
  history("/crud");
  }
  return (
    <div className="about-page">
    <button onClick={handleLogin}>CRUD OPERATIONS</button>
      <h1>About Our Inventory Management Portal</h1>
      
      <p>
        Welcome to our Inventory Management Portal! We are dedicated to
        providing you with the best tools to manage your inventory efficiently
        and effectively.
      </p>
      <p>
        Our portal is designed to help businesses of all sizes keep track of
        their products, manage stock levels, and streamline inventory-related
        tasks.
      </p>
      <p>
        Whether you are a small business owner or part of a large enterprise,
        our portal is tailored to meet your inventory management needs. We
        understand the importance of efficient inventory management in
        maintaining your business operations and profitability.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the complexities of inventory management,
          enabling businesses to focus on growth and success.
        </p>
        
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time inventory tracking</li>
          <li>Customizable reporting</li>
          <li>Multi-location support</li>
          <li>Inventory forecasting</li>
        </ul>
      </section>

      <section>
        <h2>Team</h2>
        <p>
          Meet our talented team of experts who are dedicated to providing you
          with the best inventory management solutions.
        </p>
        <ul>
        <li>PADMAPRIYA K - CEO</li>
        <li>MRIDULA K - Senior Manager</li>
        </ul>
        <p>Immortals of the team working in the backend.</p>
      </section>
      
    </div>
  );
};

export default HomePage;
