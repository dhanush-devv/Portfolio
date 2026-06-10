import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/dhanush-devv' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dhanush-a29b38284/' },
    { name: 'Email', url: 'mailto:dhanush.nayak.100@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Profile section */}
        <div className="footer-section">
          <h3 className="footer-title">Dhanush</h3>
          <p className="footer-description">
            Full Stack Developer specializing in MERN stack and AI-integrated applications.
            Building modern, scalable web solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Dhanush. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
