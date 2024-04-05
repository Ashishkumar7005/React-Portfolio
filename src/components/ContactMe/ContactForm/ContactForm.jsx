import React, { useState } from 'react';
import "./ContactForm.css";

const ContactForm = () => {
  // State variables to store form field values and validation errors
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = {};
    if (!formData.firstname.trim()) {
      validationErrors.firstname = "First name is required";
    }
    if (!formData.lastname.trim()) {
      validationErrors.lastname = "Last name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    // Set errors if any, otherwise submit the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form (you can implement this part)
      console.log("Form submitted:", formData);
      // Clear form data
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
      });
      // Clear errors
      setErrors({});
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    // Clear validation errors when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined
    }));
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
          <input 
            type="text" 
            name='firstname' 
            placeholder='First Name' 
            value={formData.firstname} 
            onChange={handleInputChange} 
            className={errors.firstname && 'error'}
          />
          <input 
            type="text" 
            name='lastname' 
            placeholder='Last Name' 
            value={formData.lastname} 
            onChange={handleInputChange} 
            className={errors.lastname && 'error'}
          />
        </div>
        <input 
          type="text" 
          name='email' 
          placeholder='Email' 
          value={formData.email} 
          onChange={handleInputChange} 
          className={errors.email && 'error'}
        />
        <textarea 
          type="text" 
          name="message" 
          placeholder='Message' 
          rows={3} 
          value={formData.message} 
          onChange={handleInputChange} 
          className={errors.message && 'error'}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
