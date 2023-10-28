import { BrowserRouter, Route, Routes } from "react-router-dom";
import Renderer from "./three/Renderer";
import "./App.css";
import LandingPage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import Listing from "./pages/Listing";

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/Render" element={<Renderer />} />
          <Route path="/listing" element={<Listing/>} />  
          <Route path="/" element={<LandingPage />} /> 
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
