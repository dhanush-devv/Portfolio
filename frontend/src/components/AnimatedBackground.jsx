import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = ({ darkMode }) => {
  return (
    <div
      className={`animated-bg ${darkMode ? 'dark' : 'light'}`}
      aria-hidden="true"
    >
      <div className="animated-bg__gradient" />
      <div className="animated-bg__mesh" />
      <div className="animated-bg__grid" />
      <div className="animated-bg__orb animated-bg__orb--1" />
      <div className="animated-bg__orb animated-bg__orb--2" />
      <div className="animated-bg__orb animated-bg__orb--3" />
      <div className="animated-bg__noise" />
    </div>
  );
};

export default AnimatedBackground;
