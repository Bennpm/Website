import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { TechStack } from "./pages/TechStack";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="experience" element={<Experience />} />
        <Route path="tech-stack" element={<TechStack />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
