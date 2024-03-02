import React, { useState } from 'react';
import "../Styles/Contact.css"; 
import '../App.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // Handle success or error
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contactContainer" id="contact">
      <h1>Contact me</h1>
      <form className="contactFormContainer" onSubmit={handleSubmit}>
        <label className="contactLabel">Name:</label>
        <input className="contactInput" type="text" name="name" value={formData.name} onChange={handleChange} />
        <label className="contactLabel">Email:</label>
        <input className="contactInput" type="email" name="email" value={formData.email} onChange={handleChange} />
        <label className="contactLabel">Message:</label>
        <textarea className="contactTextarea" name="message" value={formData.message} onChange={handleChange}></textarea>
        <button className="contactFormBtn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactSection;
