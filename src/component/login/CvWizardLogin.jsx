import React ,{useState} from "react";
import './CvWizardLogin.css'
function CvWizardLogin (){
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
  };
    return(
        
        <div className="login-container">
            <div class="circle-bg"></div>
            

            <div className="left-panel">
                <h1 className="main-login-heading">
                    Join <span className="total-customer">xxxx+</span> Professional
                </h1>
                 <p className="main-login-description">Create stunning resumes that get you hired faster with our AI-powered platform.</p>
                 <ul className="features-login">
                    <li>
                        <i class="ri-file-text-line"></i>
                        <strong>Professional Templates</strong>
                        <p>Access 50+ designer-crafted resume templates</p>
                    </li>
                    <li>
                        <i class="ri-ai-generate-2"></i>
                        <strong>AI-Powered Suggestions</strong>
                        <p>Get personalized content recommendations</p>
                    </li>
                    <li>
                        <i class="ri-shield-line"></i>
                        <strong>ATS Optimization</strong>
                        <p>Ensure your resume passes applicant tracking systems</p>
                    
                    </li>
                 </ul>
            <div className='testimonial'>
                <div className='avatar'></div>
                <div>
                    <strong>Lokesh Jangir</strong>
                    <p className="role">Web Developer</p>
                    <p>
                        "CV Wizard helped me land my dream job at Google. The AI suggestions were spot-on!"
                     </p>
                </div>
            </div>
            </div>
            <div className="right-panel">
                <h2>{isSignUp ? "Create Account" : "Sign In"}</h2>
                <p>{isSignUp ? "Sign up to start building your dream resume" : "Welcome back! Please sign in to continue."}</p>

                <form className="login-form">
                {isSignUp && (
                <div className="name-fields">
                    <div>
                        <label>First Name</label>
                        <input type="text" placeholder="John" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe" />
                    </div>
                </div>
                )}

                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" />

                {isSignUp && (
                <>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" />
                </>
                )}

                {!isSignUp && (
                    <div className="options">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#" className="forgot-link">Forgot password?</a>
                    </div>
                )}

                <button className="signin-button">{isSignUp ? "Create Account →" : "Sign In →"}</button>

                <div className="divider">OR CONTINUE WITH</div>
                <div className="social-buttons">
                    <button className="google"><i class="ri-google-line"></i>Google</button>
                    <button className="github"><i class="ri-github-line"></i>GitHub</button>
                </div>

                <p className="signup-text">
                {isSignUp ? (
                <>
                     Already have an account? <a href="#" onClick={toggleForm}>Sign in</a>
                 </>
                 ) : (
                <>
                    Don’t have an account? <a href="#" onClick={toggleForm}>Sign up</a>
                </>
                 )}
          </p>
        </form>
      </div>
            
        </div>
    )
}
export default CvWizardLogin