import React from 'react';
import './Projects.css';



const projects = [
  {
    title: 'E-commerce+Admin',
    description:
      'A full-stack eCommerce website built using the MERN stack, featuring user authentication, product management, and a powerful admin dashboard for real-time order and inventory control.',
    image:'https://static.vecteezy.com/system/resources/previews/000/270/486/non_2x/vector-online-shopping-web-banner.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/rabbit.git',
    liveLink: 'https://rabbit-frontend-0und.onrender.com',
  },
   {
    title: 'Real time chatting application',
    description:
      'A real-time chatting application built using the MERN stack, Socket.io, and Tailwind CSS for seamless messaging and responsive UI.',
   image:'https://img.freepik.com/premium-vector/chat-app-smartphone-messenger-communication-application-ui-templates-with-sign-messaging-contacts-screens-collection-mobile-interfaces-with-buttons-vector-phones-set_176516-3076.jpg?w=2000',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Socket.io','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/ChatX.git',
    liveLink: 'https://chatx-e7ya.onrender.com',
  },
  {
    title: 'AI-Interview Mocker',
    description:
      'An AI-based interview system that simulates real-time mock interviews using intelligent question generation, voice/text interaction, and performance feedback to help users prepare effectively for job interviews.',
   image:'https://thumbs.dreamstime.com/z/ai-stealing-our-jobs-ai-job-interview-generative-ai-ai-getting-interviewed-job-ai-taking-our-jobs-office-robot-machine-274169270.jpg',
    tags: ['Next.js', 'Drizzle ORM', 'Gemini AI', 'Clerk'],
    githubLink: 'https://github.com/Dhanush18100/AI_Mock_Interview.git',
    liveLink: 'https://ai-mock-interview-zeta-lilac.vercel.app',
  },
  {
    title: 'Smart Study',
    description:
      'A full-stack MERN application that enables students to share study materials and access learning resources uploaded by other students.',
    image:'smartStudy.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/SmartStudy.git',
    liveLink: 'https://smartstudy-frontend-xunm.onrender.com/',
  },
  {
    title: 'Doctor Appointment',
    description:
      'A full-stack MERN application that allows patients to book and manage doctor appointments online, with secure authentication and role-based dashboards for doctors ,admin and patients.',
    image:'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/CareConnect.git',
    liveLink: 'https://careconnect-frontend-o78v.onrender.com',
  },
  // {
  //    title: 'QuickGPT',
  //   description:
  //     'An AI-powered chat application built with the MERN stack that enables users to interact with an intelligent chatbot for instant answers and task assistance.',
  //   image:'https://tse4.mm.bing.net/th/id/OIP.yi3qtV520pDYsFpmS2gcTgHaGK?pid=Api&P=0&h=180',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss','Gemini AI'],
  //   githubLink: 'https://github.com/Dhanush18100/QuickGPT.git',
  //   liveLink: 'https://quick-gpt-mauve-three.vercel.app/',
  // },
  // {
  //    title: 'NotePad',
  //   description:
  //     'A simple and responsive MERN Notepad application for creating, organizing, and managing notes efficiently.',
  //   image:'https://user-images.githubusercontent.com/119804168/213908189-71d6683f-50e3-4d44-a010-9e62bcb346eb.png',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
  //   githubLink: 'https://github.com/Dhanush18100/mern-note.git',
  //   liveLink: 'https://mern-note-9k3i.onrender.com/',
  // },
  {
     title: 'Food-View',
    description:
      'A platform where users can explore food reels while food partners upload and showcase their dishes through short videos.',
    image:'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5c2dd049775555d2d4093e0c2dfeae5dce619d8d',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss'],
    githubLink: 'https://github.com/Dhanush18100/food_view.git',
    liveLink: 'https://food-view-frontend.onrender.com/register',
  },
  //  {
  //    title: 'Heart Guard (Major Project)',
  //   description:
  //     'A MERN-based AI web application that uses a Random Forest model to predict heart disease risk from patient health data for early detection and prevention.',
  //   image:'/banner.png',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Express.js','Tailwindcss','Python','Flask','Random Forest'],
  //   githubLink: 'https://github.com/Dhanush18100/Heart_Guard.git',
  //   liveLink: 'https://github.com/Dhanush18100/Heart_Guard.git',
  // },
 
];

const Projects = () => {
  return (
     <section className="projects-section" id="projects">
      <div className="projects-content">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
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
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
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
      </div>
    </section>
  );
};

 

export default Projects;
