import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'E-commerce + Admin Dashboard',
    description:
      'A full-stack eCommerce website built using the MERN stack, featuring user authentication, product management, and a powerful admin dashboard for real-time order and inventory control.',
    image:
      'https://static.vecteezy.com/system/resources/previews/000/270/486/non_2x/vector-online-shopping-web-banner.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/rabbit.git',
    liveLink: 'https://rabbit-frontend-0und.onrender.com',
  },
  {
    title: 'Real time chatting application',
    description:
      'A real-time chatting application built using the MERN stack, Socket.io, and Tailwind CSS for seamless messaging and responsive UI.',
    image:
      'https://img.freepik.com/premium-vector/chat-app-smartphone-messenger-communication-application-ui-templates-with-sign-messaging-contacts-screens-collection-mobile-interfaces-with-buttons-vector-phones-set_176516-3076.jpg?w=2000',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/ChatX.git',
    liveLink: 'https://chatx-e7ya.onrender.com',
  },
  {
    title: 'AI-Interview Mocker',
    description:
      'An AI-based interview system that simulates real-time mock interviews using intelligent question generation, voice/text interaction, and performance feedback to help users prepare effectively for job interviews.',
    image:
      'https://thumbs.dreamstime.com/z/ai-stealing-our-jobs-ai-job-interview-generative-ai-ai-getting-interviewed-job-ai-taking-our-jobs-office-robot-machine-274169270.jpg',
    tags: ['Next.js', 'Drizzle ORM', 'Gemini AI', 'Clerk'],
    githubLink: 'https://github.com/Dhanush18100/AI_Mock_Interview.git',
    liveLink: 'https://ai-mock-interview-zeta-lilac.vercel.app',
  },
  {
    title: 'Smart Study',
    description:
      'A full-stack MERN application that enables students to share study materials and access learning resources uploaded by other students.',
    image: 'smartStudy.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/SmartStudy.git',
    liveLink: 'https://smartstudy-frontend-xunm.onrender.com/',
  },
  {
    title: 'Doctor Appointment',
    description:
      'A full-stack MERN application that allows patients to book and manage doctor appointments online, with secure authentication and role-based dashboards for doctors ,admin and patients.',
    image: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/CareConnect.git',
    liveLink: 'https://careconnect-frontend-o78v.onrender.com',
  },
  {
    title: 'Food-View',
    description:
      'A platform where users can explore food reels while food partners upload and showcase their dishes through short videos.',
    image:
      'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5c2dd049775555d2d4093e0c2dfeae5dce619d8d',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/food_view.git',
    liveLink: 'https://food-view-frontend.onrender.com/register',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  return (
    <section className="projects-section section-surface section-block" id="projects">
      <div className="projects-content section-inner">
        <ScrollReveal>
          <header className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Selected work spanning full-stack apps, real-time systems, and AI tools.
            </p>
          </header>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src =
                      'https://placehold.co/400x200/e9ecef/495057/png?text=Project+Image';
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="view-more-container">
            <a
              href="https://github.com/dhanush-devv"
              target="_blank"
              rel="noopener noreferrer"
              className="view-more-btn"
            >
              View more projects on GitHub →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
