import React from 'react';
import './Integrations.css';

const integrations = [
  { name: "LinkedIn", icon: "💼" },
  { name: "GitHub", icon: "🐙" },
  { name: "Google Drive", icon: "📁" },
  { name: "Dropbox", icon: "📦" },
  { name: "OneDrive", icon: "☁️" },
  { name: "Slack", icon: "💬" }
];

function Integrations() {
  return (
    <section className="integration-section">
      <div className="integration-heading">
        <div className="integration-tag">
          <span className="tag-icon">🐙</span> Integrations
        </div>
        <h2>
          Seamless <span>Integrations</span>
        </h2>
        <p>
          Connect with your favorite tools and platforms to streamline your job search
        </p>
      </div>

      <div className="integration-icons">
        {integrations.map((item, idx) => (
          <div key={idx} className="integration-box">
            <div className="emoji">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrations;
