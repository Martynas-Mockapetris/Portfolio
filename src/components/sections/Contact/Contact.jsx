import './Contact.css';
import { useState } from 'react';
import { useSocialLinks, useContactData, useSectionDecorations } from '../../../hooks/useContent';
import IconButton from '../../common/IconButton/IconButton';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

// Dynamic imports for section decorations
const sectionImages = import.meta.glob('../../../assets/Sections/*.png', { eager: true });

const getSectionImage = (filename) => {
  const path = `../../../assets/Sections/${filename}`;
  return sectionImages[path]?.default || '';
};

const iconMap = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub
};

const Contact = () => {
  const socialLinks = useSocialLinks();
  const contactData = useContactData();
  const decorations = useSectionDecorations();
  const formFields = contactData.formFields || [];
  
  const sectionImage = getSectionImage(decorations.contact);
  
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
    if (formData[fieldName] === '' || !formData[fieldName]) {
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
      <img src={sectionImage} alt="Section decoration" className="section-decoration section-decoration-4" />
      <div className="contact-container">
        <h2 className="contact-title">{contactData.title}</h2>
        <p className="contact-subtitle">{contactData.subtitle}</p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.name} className="form-group">
                <label className={`form-label ${focused[field.name] || formData[field.name] ? 'form-label--active' : ''}`}>
                  {field.placeholder}
                </label>
                <input 
                  type={field.type} 
                  name={field.name} 
                  value={formData[field.name] || ''} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus(field.name)} 
                  onBlur={() => handleBlur(field.name)} 
                  className="form-input" 
                  required={field.required}
                />
              </div>
            ))}
          </div>

          {formFields.slice(2).map((field) => (
            <div key={field.name} className="form-group">
              <label className={`form-label ${focused[field.name] || formData[field.name] ? 'form-label--active' : ''}`}>
                {field.placeholder}
              </label>
              {field.type === 'textarea' ? (
                <textarea 
                  name={field.name} 
                  value={formData[field.name] || ''} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus(field.name)} 
                  onBlur={() => handleBlur(field.name)} 
                  className="form-textarea" 
                  required={field.required}
                />
              ) : (
                <input 
                  type={field.type} 
                  name={field.name} 
                  value={formData[field.name] || ''} 
                  onChange={handleChange} 
                  onFocus={() => handleFocus(field.name)} 
                  onBlur={() => handleBlur(field.name)} 
                  className="form-input" 
                  required={field.required}
                />
              )}
            </div>
          ))}

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : contactData.submitButtonText || 'Send'}
          </button>
        </form>

        {submitStatus === 'success' && <div className="form-message form-message--success">✅ {contactData.successMessage}</div>}

        {submitStatus === 'error' && <div className="form-message form-message--error">❌ {contactData.errorMessage}</div>}

        {/* Social Links */}
        <div className="contact-social">
          <p>{contactData.socialLinksMessage || "Don't hesitate to reach out!"}</p>
          <div className="social-links-group">
            {Object.entries(socialLinks).map(([platform, url]) => {
              const IconComponent = iconMap[platform];
              return (
                <IconButton 
                  key={platform}
                  icon={IconComponent}
                  href={url}
                  title={platform}
                  size={24}
                  variant="icon"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

