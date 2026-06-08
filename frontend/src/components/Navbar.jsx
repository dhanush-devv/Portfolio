import React, { useState, useEffect, useMemo } from 'react';
import './Navbar.css';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = ({ toggleDarkMode, darkMode, onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { title: 'Home', id: 'home' },
      { title: 'About', id: 'about' },
      { title: 'Skills', id: 'skills' },
      { title: 'Experience', id: 'experience' },
      { title: 'Projects', id: 'projects' },
      { title: 'Contact', id: 'contact' },
    ],
    []
  );

  // Optimized scroll handler for 'scrolled' state with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking (zero layout thrashing)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navItems]);

  const handleNavClick = (id) => {
    onNavClick(id);
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <button type="button" className="nav-logo" onClick={() => handleNavClick('home')}>
          Dhanush<span className="nav-logo-dot">.</span>
        </button>

        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="nav-controls">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
