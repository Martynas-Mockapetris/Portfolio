import './Contact.css';
import { useState } from 'react';
import { useSocialLinks } from '../hooks/useContent';
import sectionIMG4 from '../assets/Sections/sectionIMG4.png';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const iconMap = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub
};

const Contact = () => {
  const socialLinks = useSocialLinks();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocused((prev) => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const handleBlur = (fieldName) => {
    if (formData[fieldName] === '') {
      setFocused((prev) => ({
        ...prev,
        [fieldName]: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xgaonwya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setFocused({ name: false, email: false, message: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section--light">
      <img src={sectionIMG4} alt="Section decoration" className="section-decoration section-decoration--right section-decoration-4" />
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className={`form-label ${focused.name || formData.name ? 'form-label--active' : ''}`}>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => handleFocus('name')} onBlur={() => handleBlur('name')} className="form-input" required />
            </div>

            <div className="form-group">
              <label className={`form-label ${focused.email || formData.email ? 'form-label--active' : ''}`}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} className="form-input" required />
            </div>
          </div>

          <div className="form-group">
            <label className={`form-label ${focused.message || formData.message ? 'form-label--active' : ''}`}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')} className="form-textarea" required />
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>

        {submitStatus === 'success' && <div className="form-message form-message--success">✅ Message sent successfully! Thank you for reaching out.</div>}

        {submitStatus === 'error' && <div className="form-message form-message--error">❌ Oops! Something went wrong. Please try again.</div>}

        {/* Social Links */}
        <div className="contact-social">
          <p>Don't hesitate to reach out!</p>
          <div className="social-links-group">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const IconComponent = iconMap[platform];
              return (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="social-link-icon" title={platform}>
                  {IconComponent && <IconComponent size={24} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
