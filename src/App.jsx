// import ColorPicker from "./ColorPicker.jsx"
// import MyComponent from "./MYComponent.jsx"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navabar/Navbar.jsx";
import CvWizardLogin from "./component/login/CvWizardLogin.jsx";
import MainPage from "./component/MainPage/MainPage.jsx";
import ResumeBuilder from "./component/ResumeBuilder/ResumeBuilder.jsx";



// Wrapper to access location for dynamic Navbar
function AppWrapper() {
  const location = useLocation();

  return (
    <>
      {/* Always show Navbar — you can style it differently per page if needed */}
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<CvWizardLogin />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

