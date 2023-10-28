import { BrowserRouter, Route, Routes } from "react-router-dom";
import Renderer from "./three/Renderer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Render" element={<Renderer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
