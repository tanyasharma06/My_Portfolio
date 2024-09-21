import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    // Replace with your actual service ID, template ID, and user ID
    const serviceID = 'service_x8bua6j';
    const templateID = 'template_r2ylypq';
    const userID = '5LvaW1o9po7qCp7GO';

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setSuccessMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);  // Add this to check for errors
        setErrorMessage('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <Navbar />
      <h2 className="heading">Contact Us</h2>
      <h3 className="sub-heading">Questions,thoughts,or just want to say hello?</h3>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;





















