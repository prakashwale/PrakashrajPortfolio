import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Prakash</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Prakash</h1>
          <h2>Backend Developer</h2>
          <p>I build robust, scalable backend systems and microservices</p>
          <button 
            className="cta-button"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate backend engineer with expertise in Java, Spring Boot, and microservices architecture. 
                I specialize in building scalable, high-performance backend systems that power modern applications.
              </p>
              <p>
                With experience in cloud platforms like AWS and a deep understanding of distributed systems, 
                I design and implement robust APIs, database solutions, and microservices that handle millions of requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Backend Technologies</h3>
              <div className="skill-items">
                <span className="skill-item">Java</span>
                <span className="skill-item">Spring Boot</span>
                <span className="skill-item">Spring Security</span>
                <span className="skill-item">Spring Data JPA</span>
                <span className="skill-item">Microservices</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases & Cloud</h3>
              <div className="skill-items">
                <span className="skill-item">MySQL</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Redis</span>
                <span className="skill-item">AWS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & DevOps</h3>
              <div className="skill-items">
                <span className="skill-item">Docker</span>
                <span className="skill-item">Kubernetes</span>
                <span className="skill-item">Jenkins</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">Maven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/stylecuts-project.png" 
                  alt="StyleCuts Project" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>StyleCuts</div>
              </div>
              <div className="project-content">
                <h3>StyleCuts</h3>
                <p>A barber booking application with RESTful APIs and real-time booking management.</p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                </div>
                <div className="project-links">
                  <a href="https://style-cuts.vercel.app" className="project-link">Live Demo</a>
                  <a href="https://github.com/prakashwale/StyleCuts" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/ecommerce-api.png" 
                  alt="E-Commerce API" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>E-Commerce API</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Microservices API</h3>
                <p>A scalable microservices architecture with product catalog, order management, and payment processing.</p>
                <div className="project-tech">
                  <span>Spring Boot</span>
                  <span>Microservices</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">API Docs</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/user-management.png" 
                  alt="User Management System" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{display: 'none'}}>User Management</div>
              </div>
              <div className="project-content">
                <h3>User Management & Authentication System</h3>
                <p>A secure user management system with JWT authentication, role-based access control, and audit logging.</p>
                <div className="project-tech">
                  <span>Spring Security</span>
                  <span>JWT</span>
                  <span>MongoDB</span>
                  <span>AWS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">API Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  your.email@example.com
                </a>
                <a href="https://github.com/prakashwale" className="contact-link">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="contact-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Prakash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
