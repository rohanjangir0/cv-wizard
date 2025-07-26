import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1 className="faq-title">
          Frequently Asked <span className="highlight">Questions</span>
        </h1>
        <p className="faq-subtitle">
          Find answers to common questions about CV Wizard. Can’t find what you're looking for? Contact our support team.
        </p>

        <div className="faq-search">
          <input type="text" placeholder="Search questions..." />
        </div>

        <div className="faq-stats">
          <div className="stat-card">
            <div className="icon">📄</div>
            <p><strong>50,000+</strong><br />Resumes Created</p>
          </div>
          <div className="stat-card">
            <div className="icon">👥</div>
            <p><strong>24/7</strong><br />Support Available</p>
          </div>
          <div className="stat-card">
            <div className="icon">🔒</div>
            <p><strong>100%</strong><br />Secure & Private</p>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Getting Started</h2>
          {[
            { q: 'How do I create my first resume with CV Wizard?', a: 'To create your first resume, simply sign up and follow our step-by-step guide!' },
            { q: 'Can I import my existing resume?', a: 'Yes, you can import your existing resume to edit and enhance it.' },
            { q: 'Is CV Wizard free to use?', a: 'We offer both free and premium features depending on your needs.' }
          ].map((item, index) => (
            <div className="faq-item" onClick={() => toggleQuestion(index)} key={index}>
              <div className="question">
                <span className="arrow">{activeQuestion === index ? '↓' : '→'}</span>
                {item.q}
              </div>
              {activeQuestion === index && <div className="answer">{item.a}</div>}
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h2 className="section-title">Features & Tools</h2>
          {[
            { q: 'What makes CV Wizard’s AI assistant special?', a: 'Our AI assistant helps personalize your resume based on industry standards.' },
            { q: 'How many resume templates are available?', a: 'We offer a variety of modern and professional templates to choose from.' },
            { q: 'Can I customize the templates?', a: 'Yes, you can fully customize fonts, colors, and layout.' },
            { q: 'What file formats can I download my resume in?', a: 'You can download your resume in PDF, DOCX, and more.' }
          ].map((item, index) => (
            <div className="faq-item" onClick={() => toggleQuestion(index + 10)} key={index + 10}>
              <div className="question">
                <span className="arrow">{activeQuestion === index + 10 ? '↓' : '→'}</span>
                {item.q}
              </div>
              {activeQuestion === index + 10 && <div className="answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
