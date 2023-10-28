import { BrowserRouter, Route, Routes } from "react-router-dom";
import Renderer from "./three/Renderer";
import "./App.css";
import LandingPage from "./pages/Landingpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Render" element={<Renderer />} />
          <Route path="/" element={<LandingPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
