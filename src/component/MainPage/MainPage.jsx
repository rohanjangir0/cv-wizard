import './MainPage.css'
import { useNavigate } from "react-router-dom";
import CompanyCarousel from '../Companycarousel/CompanyCarousel';
import ThreeSteps from '../ThreeSteps/ThreeSteps';
import Integrations from '../Integrations/Integrations';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import StatsSection from '../StatsSection/StatsSection';
import FAQ from '../FAQ/FAQ';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
function MainPage() {
    const navigate = useNavigate();

    const handleCreateResume = () => {
        navigate("/resume-builder");
        
    const faqRef = useRef(null);

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };    
  };
  return (
    <>
    <div className="mainpage">
      <div className="circle-bg"></div>
      <div className="glow-circle"></div>


      <div className="left-main">
        <h1 className="main-page-heading">
          Build Your <span>Dream Resume</span> in Minutes
        </h1>
        <p>
          Create stunning, professional resumes that stand out from the crowd.
          Our AI-powered platform helps you craft the perfect resume with beautiful templates, smart suggestions, and instant formatting.
        </p>
        <div className="resume_btns">
          <button className="create-resume" onClick={handleCreateResume}>
            <i className="ri-file-edit-line"></i> Create Resume
          </button>
          <button className="upload-exiting">
            <i className="ri-upload-2-line"></i> Upload Existing Resume
          </button>
        </div>
      </div>

      <div className="right-main">
        <div className="cards">
          <div className="card-row upper-card">
            <div className="card github-card">
              <i className="ri-github-line"></i>
              <h2>GitHub Integration</h2>
              <h4>Showcase your open source contributions and projects</h4>
            </div>

            <div className="card template-card">
              <i className="ri-star-line"></i>
              <h2>Premium Templates</h2>
              <h4>Access exclusive, designer-crafted resume templates</h4>
            </div>
          </div>

          <div className="card-row lower-card">
            <div className="card ai-assistant">
              <i className="ri-quill-pen-line"></i>
              <h2>AI Assistant</h2>
              <h4>Get personalized suggestions and optimization tips</h4>
            </div>

            <div className="card card-community">
              <i className="ri-group-line"></i>
              <h2>Community</h2>
              <h4>Join thousands of successful job seekers worldwide</h4>
            </div>
          </div>
        </div>

        <div className="status-tag">
          {/* Optional Tag or Status Indicator */}
        </div>
      </div>
    </div>
    <CompanyCarousel />
    <ThreeSteps></ThreeSteps>
    <Integrations></Integrations>
    <AdvancedFeatures></AdvancedFeatures>
    <StatsSection></StatsSection>
    <FAQ></FAQ>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
  )
}

export default MainPage;
