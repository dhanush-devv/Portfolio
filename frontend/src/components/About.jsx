import React from 'react';
import ScrollReveal from './ScrollReveal';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-surface section-block" id="about">
      <div className="about-content section-inner">
        <ScrollReveal>
          <header className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Full stack developer passionate about AI and building reliable, user-centered products.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="about-card glass-card">
            <p>
              Hello! I'm a passionate Full Stack Developer with a strong foundation in web development
              and a keen eye for creating user-friendly applications. My journey in programming
              began with a curiosity to understand how things work in the digital world, and it has
              evolved into a professional career where I bring ideas to life through code.
            </p>
            <p>
              I specialize in building full-stack web applications, combining both frontend and
              backend technologies to create seamless user experiences. I'm especially passionate about
              AI — exploring how large language models, intelligent automation, and data-driven features
              can enhance real-world products.
            </p>
            <p>
              When I'm not coding, I enjoy staying up-to-date with the latest technology and AI trends,
              participating in tech communities, and contributing to open-source projects. I believe
              in continuous learning and am always excited to take on new challenges that push my
              boundaries as a developer.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
