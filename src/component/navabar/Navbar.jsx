import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar ({ scrollToFAQ }){
    return(
        <div className='navbar-container'>
            <Link to="/" className="cv-logo">Cv Wizard</Link>

            <div className="navbar-info">
                <ul>
                    <li><Link to="/faq" className='nav-links'>FAQs</Link></li>
                    <li><Link to="/contact" className='nav-links'>Contact Us</Link></li>
                    <li><Link to="/login" className='nav-links'><button className='login-btn'>Login</button></Link></li>
                </ul>
            </div>
        </div>
    )

}
export default Navbar