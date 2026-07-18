import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    title: 'MERN Stack',
    skills: [
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original"></i>' },
      { name: 'React.js', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: '<i class="devicon-html5-plain colored"></i>' },
      { name: 'CSS3', icon: '<i class="devicon-css3-plain colored"></i>' },
      { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
      { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
      { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain colored"></i>' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
      { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
      { name: 'Java', icon: '<i class="devicon-java-plain colored"></i>' },
      { name: 'C', icon: '<i class="devicon-c-plain colored"></i>' },
    ],
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'Next.js', icon: '<i class="devicon-nextjs-plain"></i>' },
      { name: 'Firebase', icon: '<i class="devicon-firebase-plain colored"></i>' },
      { name: 'Supabase', icon: '<i class="devicon-supabase-plain colored"></i>' },
    ],
  },
  
  {
    title: 'Data Analytics',
    skills: [
      { name: 'Pandas', icon: '<i class="devicon-pandas-original colored"></i>' },
      { name: 'NumPy', icon: '<i class="devicon-numpy-original colored"></i>' },
      { name: 'Scikit-learn', icon: '<i class="devicon-scikitlearn-plain colored"></i>' },
      { name: 'Matplotlib', icon: '<i class="devicon-python-plain colored"></i>' },
      { name: 'Power BI', icon: '<i class="devicon-azuresqldatabase-plain colored"></i>' },
      { name: 'Tableau', icon: '<i class="devicon-tableau-plain colored"></i>' },
    ],
  },
  {
    title: 'Tools & Software',
    skills: [
      { name: 'VS Code', icon: '<i class="devicon-vscode-plain colored"></i>' },
      { name: 'Figma', icon: '<i class="devicon-figma-plain colored"></i>' },
      { name: 'Excel', icon: '<i class="devicon-microsoftoffice-plain colored"></i>' },
      { name: 'Git', icon: '<i class="devicon-git-plain colored"></i>' },
      { name: 'GitHub', icon: '<i class="devicon-github-original"></i>' },
      { name: 'ShadCN UI', icon: '<i class="devicon-react-original colored"></i>' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-block">
      <div className="skills-content section-inner">
        <ScrollReveal>
          <header className="section-header">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
              Technologies and tools I use to build modern applications.
            </p>
          </header>
        </ScrollReveal>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card glass-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="skill-header">
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    key={`${category.title}-${skill.name}`}
                    className="skill-tag"
                    dangerouslySetInnerHTML={{
                      __html: `${skill.icon} <span>${skill.name}</span>`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
