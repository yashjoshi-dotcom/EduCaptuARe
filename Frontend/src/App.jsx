import { BrowserRouter, Route, Routes } from "react-router-dom";
import Renderer from "./three/Renderer";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import Listing from "./pages/Listing";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Testimonials from "./pages/Testimonials";
import Models from "./pages/Models";
import Reward from "./pages/Rewards";
import Upload_form from "./pages/Upload_form"
import Knowmore from "./pages/Knowmore";


function App() {
  return (
    <>
    {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Render" element={<Renderer />} />
          <Route path="/listing" element={<Listing/>} />  
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/profile" element={<Profile/> } />        
          <Route path="/singin" element={<Signin/> } />  
          <Route path="/testimonials" element={<Testimonials/> } />       
          <Route path="/models" element={<Models/> } />    
          <Route path="/reward" element={<Reward/> } />  
          <Route path="/knowmore" element={<Knowmore/> } />  
          <Route path="/form" element={<Upload_form/> } /> 
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
