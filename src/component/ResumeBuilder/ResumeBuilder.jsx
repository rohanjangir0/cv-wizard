import React from 'react';
import "./ResumeBuilder.css";


const ResumeBuilder = () => {
  return (
    <div className="resume-ui-wrapper">
      <header className="resume-header">
        <button className="back-button">← Back to Home</button>
        <h1 className="title">📄 Resume Builder</h1>
        <div className="header-actions">
          <button className="save-btn">Save Draft</button>
          <button className="download-btn">⬇ Download PDF</button>
        </div>
      </header>

      <section className="template-section">
        <h3>📄 Template</h3>
        <div className="template-buttons">
          <button className="active">Modern</button>
          <button>Traditional</button>
          <button>Minimal</button>
        </div>
      </section>

      <div className="main-section">
        <nav className="section-tabs">
          <button className="active">👤 Personal</button>
          <button>💼 Work</button>
          <button>🎓 Education</button>
          <button>📁 Projects</button>
          <button>🛠 Skills</button>
        </nav>

        <div className="resume-content">
          <div className="form-section">
            <h2>👤 Personal Information</h2>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Website/LinkedIn" />
            <textarea placeholder="Professional Summary"></textarea>
          </div>

          <div className="preview-section">
            <div className="preview-paper">
              <h1>John Doe</h1>
              <p>john.doe@email.com | (555) 123-4567 | San Francisco, CA</p>
              <p>linkedin.com/in/johndoe</p>
              <p>A brief professional summary goes here.</p>

              <h2>PROFESSIONAL EXPERIENCE</h2>
              <p><strong>Senior Software Engineer</strong> – Tech Corp (Jan 2022 – Present)</p>
              <ul>
                <li>Led microservices architecture serving 1M+ users</li>
                <li>Mentored junior developers and improved productivity by 40%</li>
                <li>Reduced deployment time by 60%</li>
              </ul>

              <h2>EDUCATION</h2>
              <p><strong>B.Sc. in Computer Science</strong> – Stanford University (May 2020)</p>
              <p>GPA: 3.8</p>

              <h2>PROJECTS</h2>
              <p><strong>Resume Maker (CV Wizard)</strong> <a href="#">↗ View</a></p>
              <p>React.js, HTML, CSS, JavaScript, GitHub Pages</p>

              <h2>SKILLS</h2>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>

              <h2>HONORS & AWARDS</h2>
              <ul>
                <li>Top Performer - 2024</li>
                <li>Dean’s List - 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
