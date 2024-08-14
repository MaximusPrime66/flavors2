import React, { useState } from 'react';
import './Contact.css'; // Ensure this CSS file is updated with the following styles
import axios from 'axios'; // Ensure you have axios installed (npm install axios)

const ContactUs = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // State to manage form submission status
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Replace with your backend API endpoint
      await axios.post('http://localhost:8080/api/contact', formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' }); // Clear form fields on success

      // Alert user on success
      window.alert('Message sent successfully!');
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-8">
                    <div className="contact_form_inner">
                      <h3>Contact Us</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="contact_field">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control form-group"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="contact_field">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            className="form-control form-group"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="contact_field">
                          <label htmlFor="message">Message</label>
                          <textarea
                            id="message"
                            className="kil"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="contact_form_submit" disabled={status.loading}>
                          {status.loading ? 'Sending...' : 'Send'}
                        </button>
                        {status.success && <p className="success_message">Message sent successfully!</p>}
                        {status.error && <p className="error_message">Error: {status.error}</p>}
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* Additional content like contact information or social media links can be added here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <div className="map_bind">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
