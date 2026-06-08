import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import './Timeline.css';

const timelineData = [
  {
    type: 'work',
    role: 'Fullstack Development Intern',
    company: 'Elogixa Technology India Private Limited',
    location: 'Onsite',
    duration: 'January 2026 – May 2026',
    points: [
      'Redesigned the company website with a modern, fully responsive UI using React.js and Tailwind CSS, improving user experience across devices.',
      'Developed and integrated a job application system enabling users to apply for roles directly through the platform.',
      'Built a secure admin portal to manage job postings, including creating, updating, and deleting job listings.',
      'Implemented functionality for admins to view candidate applications, including resume uploads and automated ATS score evaluation.',
      'Integrated an AI-powered chatbot using Dialogflow with NLP to deliver real-time assistance to user queries.'
    ]
  },
  {
    type: 'education',
    degree: 'Bachelor of Engineering',
    field: 'Information Science & Engineering',
    institution: 'Mangalore Institute of Technology & Engineering, Moodabidre',
    duration: 'Expected: May 2026',
    grade: 'CGPA: 8.94/10'
  },
  {
    type: 'work',
    role: 'Frontend Development Intern',
    company: 'Edunet Foundation & IBM SkillBuild',
    location: 'Remote',
    duration: 'August 2025 - September 2025',
    points: [
      'Developed web-based study planner with task management, progress tracking, and visual timelines using HTML5, CSS3, and JavaScript.',
      'Implemented Local Storage for data persistence and created responsive UI with cross-browser compatibility.',
      'Designed an intuitive UI with a reminder system, helping users manage tasks more efficiently and improving productivity.'
    ]
  },
  {
    type: 'work',
    role: 'Web Development Intern',
    company: 'InnoByte Services',
    location: 'Remote',
    duration: 'November 2024 – December 2024',
    points: [
      'Redesigned a guest accommodation website with a modern and responsive user interface using React.js and Tailwind CSS.',
      'Developed reusable React components to improve code maintainability and scalability.',
      'Enhanced website navigation and user experience with an intuitive and visually appealing design.',
      'Optimized layouts for seamless performance across mobile, tablet, and desktop devices.',
      'Implemented responsive design principles and modern frontend development best practices.',
      'Improved page structure, styling, and overall usability to create a more engaging user experience.',
      'Collaborated on frontend development tasks while ensuring clean, efficient, and maintainable code.'
    ]
  },
  {
    type: 'education',
    degree: 'Senior Secondary (12th)',
    field: 'DPUE',
    institution: 'Mahatma Gandhi Memorial College, Udupi',
    duration: '2022',
    grade: 'Percentage: 83.5%'
  },
  {
    type: 'education',
    degree: 'Secondary School (SSLC)',
    field: 'KSEEB',
    institution: 'Parkala High School, Parkala',
    duration: '2020',
    grade: 'Percentage: 87.5%'
  }
];

const itemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
    y: 20
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Timeline = () => {
  return (
    <section id="experience" className="timeline-section section-block">
      <div className="timeline-inner section-inner">
        <ScrollReveal>
          <header className="section-header">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">
              A chronological roadmap of my professional experience and academic achievements.
            </p>
          </header>
        </ScrollReveal>

        <div className="timeline-container">
          {/* Central Line */}
          <div className="timeline-center-line"></div>

          {timelineData.map((item, index) => {
            const isLeft = item.type === 'work';
            const direction = isLeft ? 'left' : 'right';

            return (
              <motion.div
                key={index}
                className={`timeline-item-center ${isLeft ? 'left' : 'right'}`}
                custom={direction}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Timeline badge in the middle */}
                <div className={`timeline-badge-center ${item.type === 'education' ? 'education' : ''}`}>
                  {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>

                {/* Content Card */}
                <div className="timeline-card-center glass-card">
                  <div className="timeline-card-header">
                    <span className="timeline-duration">
                      <FaCalendarAlt className="meta-icon" /> {item.duration}
                    </span>
                    <h4 className="timeline-item-title">
                      {item.type === 'work' ? item.role : item.degree}
                    </h4>
                    {item.field && <h5 className="timeline-item-field">{item.field}</h5>}
                    <h5 className="timeline-item-subtitle">
                      {item.type === 'work' ? item.company : item.institution}
                    </h5>
                    {item.location && (
                      <span className="timeline-location">
                        <FaMapMarkerAlt className="meta-icon" /> {item.location}
                      </span>
                    )}
                    {item.grade && (
                      <div className="timeline-grade-badge">
                        {item.grade}
                      </div>
                    )}
                  </div>

                  {item.points && (
                    <div className="timeline-card-body">
                      <ul className="timeline-bullets">
                        {item.points.map((point, ptIdx) => (
                          <li key={ptIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
