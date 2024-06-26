import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";
import Activity from "./pages/Аctivity";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/activity/" element={<Activity />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
