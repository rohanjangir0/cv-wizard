import React from 'react';
import './ThreeSteps.css'; // Make sure to create and link the CSS file

const ThreeSteps = () => {
  return (
    <section className="steps-section">
      <div className="steps-header">
        <span className="tag">🔖 Simple Process</span>
        <h2>
          Create Your Resume in <span className="highlight">3 Easy Steps</span>
        </h2>
        <p>Our streamlined process makes resume creation effortless and enjoyable</p>
      </div>

      <div className="steps-wrapper">
        <div className="step-box">
          <div className="step-number">1</div>
          <div className="step-icon">📄</div>
          <h3>Choose Template</h3>
          <p>
            Browse our collection of 50+ professional templates designed by experts for every industry.
          </p>
        </div>

        <div className="step-box">
          <div className="step-number">2</div>
          <div className="step-icon">🎓</div>
          <h3>AI-Powered Content</h3>
          <p>
            Our AI assistant provides personalized suggestions and optimizes your content for maximum impact.
          </p>
        </div>

        <div className="step-box">
          <div className="step-number">3</div>
          <div className="step-icon">⬆️</div>
          <h3>Download & Apply</h3>
          <p>
            Download your polished resume in multiple formats and start applying to your dream jobs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
