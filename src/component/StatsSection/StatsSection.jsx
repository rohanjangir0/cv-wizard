import React from "react";
import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-content">
        <h2 className="stats-title">
          Trusted by <span className="highlight">Industry Leaders</span>
        </h2>
        <p className="stats-subtitle">
          Our platform has helped thousands of professionals worldwide achieve
          their career goals
        </p>

        <div className="stats-boxes">
          <div className="stat-item">
            <h3 className="stat-value blue">5+</h3>
            <p className="stat-label">Active Users</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value pink">98%</h3>
            <p className="stat-label">ATS Pass Rate</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value green">85%</h3>
            <p className="stat-label">Interview Rate</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value orange">4.9★</h3>
            <p className="stat-label">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
