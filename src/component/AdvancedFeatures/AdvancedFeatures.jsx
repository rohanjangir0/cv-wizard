import React from "react";
import "./AdvancedFeatures.css";

function AdvancedFeatures() {
  return (
    <section className="advanced-features">
      <div className="section-label">⭐ Advanced Features</div>
      <h2 className="features-heading">
        Powerful Tools for <span>Professional Results</span>
      </h2>
      <p className="features-subheading">
        Discover cutting-edge features that set your resume apart from the competition
      </p>

      <div className="features-grid">
        {/* ATS Optimization */}
        <div className="feature-card ats">
          <div className="icon-box green">
            <i className="ri-shield-check-line"></i>
          </div>
          <h3>ATS Optimization</h3>
          <p>
            Our advanced algorithm ensures your resume passes through Applicant
            Tracking Systems with a 98% success rate.
          </p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "98%" }}></div>
          </div>
          <span className="progress-label">98%</span>
        </div>

        {/* AI Content Generation */}
        <div className="feature-card ai-content">
          <div className="icon-box pink">
            <i className="ri-magic-line"></i>
          </div>
          <h3>AI Content Generation</h3>
          <p>
            Generate compelling bullet points and descriptions tailored to your
            industry and role automatically.
          </p>
          <ul className="feature-list">
            <li>Industry-specific keywords</li>
            <li>Action-oriented language</li>
            <li>Quantified achievements</li>
          </ul>
        </div>

        {/* Real-time Collaboration */}
        <div className="feature-card realtime">
          <div className="icon-box blue">
            <i className="ri-user-shared-line"></i>
          </div>
          <h3>Real-time Collaboration</h3>
          <p>
            Get feedback from mentors, career coaches, and peers with our
            collaborative editing features.
          </p>
          <div className="collaborators">
            <div className="avatars">
              <span className="dot a"></span>
              <span className="dot b"></span>
              <span className="dot c"></span>
              <span className="dot d"></span>
            </div>
            <p className="online-label">4 collaborators online</p>
          </div>
        </div>

        {/* Smart Formatting */}
        <div className="feature-card smart-format">
          <div className="icon-box orange">
            <i className="ri-layout-2-line"></i>
          </div>
          <h3>Smart Formatting</h3>
          <p>
            Intelligent layout adjustments ensure perfect formatting across all
            devices and print formats.
          </p>
          <div className="file-types">
            <span className="type pdf">PDF</span>
            <span className="type doc">DOCK</span>
            <span className="type png">PNG</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvancedFeatures;
