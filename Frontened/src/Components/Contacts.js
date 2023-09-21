import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contacts.css';
function Contacts () {
  const history=useNavigate();
  const handleLogin=()=>{
  history("/front");
  }
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Thank you for considering our iventory portal for your inventory needs. We're here to assist you in any way we can. Whether you have questions, need support, or want to provide feedback, we're just a message away.If you have any questions or need assistance, please feel free to contact us:</p>
      </div>

      <div className="contact-methods">
        <div className="contact-method">
          <h3>Email</h3>
          <p>For general inquiries and support, please email us at <a href="contact@inventoryportal.com">contact@inventoryportal.com</a>. Our dedicated support team will respond promptly to assist you with any issues or questions you may have.</p>
        </div>

        <div className="contact-method">
          <h3>Phone</h3>
          <p>If you prefer to speak with a member of our team directly, you can reach our customer support hotline at +1 (555) 123-4567 during our business hours, Monday through Friday, 9:00 AM to 5:00 PM (Your Timezone).</p>
        </div>

        <div className="contact-method">
          <h3>Community Forums</h3>
          <p>Join our vibrant user community on our forums. Here, you can connect with other users, share tips and tricks, and get answers to your questions from experienced users and our support staff. Visit our forums at <a href="https://community.yourinventory.com">community.yourinventoryapp.com</a>.</p>
        </div>

        <div className="contact-method">
          <h3>Social Media</h3>
          <p>Stay up-to-date with our latest news, updates, and financial tips by following us on social media:</p>
          <ul>
            <li><a href="https://www.facebook.com/yourinventoryapp">Facebook</a></li>
            <li><a href="https://twitter.com/yourinventoryapp">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/yourinventoryapp">LinkedIn</a></li>
          </ul>
        </div>

        <div className="contact-method">
          <h3>Feedback</h3>
          <p>We value your feedback and are continually working to improve our application. If you have suggestions, feature requests, or any comments that can help us serve you better, please don't hesitate to let us know. You can share your feedback via email or through our community forums.</p>
        </div>

        <div className="contact-method">
          <h3>Business Address</h3>
          <p>If you prefer traditional mail or need to send us documents, you can reach us at our physical address:</p>
          <p>Your Inventory App, Inc.<br />123 Main Street<br />Suite 456<br />City, State, ZIP</p>
        </div>
      </div>
      <button onClick={handleLogin}>LOGOUT!</button>
    </div>
  );
};

export default Contacts;