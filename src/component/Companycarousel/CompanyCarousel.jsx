import React from 'react';
import './CompanyCarousel.css';

// import images
import Google from "../../assets/Google_2015_logo.svg";
import Meta from "../../assets/Meta_Platforms_Inc._logo.svg";
import IBM from "../../assets/IBM_logo.svg";
import Netflix from "../../assets/Netflix_2015_logo.svg";
import Salesforce from "../../assets/Salesforce.com_logo.svg";
import BroCode from "../../assets/bro_code.jpg";


const CompanyCarousel = () => {
   return (
    <div className="company-carousel-section">
      <h2 className="carousel-heading">
        Create resumes that help you land jobs at top companies
      </h2>

      <div className="company-carousel-wrapper">
        <div className="company-carousel">
          <img src={Google} alt="Google" />
          <img src={Meta} alt="Meta" />
          <img src={IBM} alt="IBM" />
          <img src={Netflix} alt="Netflix" />
          <img src={Salesforce} alt="Salesforce" />
          <img src={BroCode} alt="Bro Code" />

          {/* Duplicate for loop effect */}
          <img src={Google} alt="Google" />
          <img src={Meta} alt="Meta" />
          <img src={IBM} alt="IBM" />
          <img src={Netflix} alt="Netflix" />
          <img src={Salesforce} alt="Salesforce" />
          <img src={BroCode} alt="Bro Code" />
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
