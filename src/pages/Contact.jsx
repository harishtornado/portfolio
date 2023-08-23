import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to send an email with the form data here
    console.log('Form data:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn">Send Email</button>
          </form>
        </div>
        <div className="social-icons">
          <a href="https://github.com/harishtornado" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/harish-js-527496230/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          {/* Add more social media icons and links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
