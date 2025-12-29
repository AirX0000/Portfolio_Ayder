import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CanvasContainer from './components/CanvasContainer';
import CyberScene from './components/CyberScene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import { Projects, Contact } from './components/ProjectsContact';
import Terminal from './components/Terminal';
import TechTicker from './components/TechTicker';
import MatrixRain from './components/MatrixRain';
import Resume from './components/Resume';

// Main Portfolio Page Layout
const Layout = () => {
  const [matrixMode, setMatrixMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="text-white relative">
      {matrixMode && <MatrixRain />}

      <CanvasContainer>
        <CyberScene />
      </CanvasContainer>

      <Navbar />
      <Terminal onCommand={(cmd) => {
        if (cmd === 'matrix') {
          setMatrixMode(!matrixMode);
          return "Matrix Mode Toggled... Follow the white rabbit.";
        }
        return null;
      }} />

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <TechTicker />
        <div className="bg-dark/50 backdrop-blur-[2px]">
          <About />
          <Experience />
          <Certificates />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer className="py-6 text-center text-gray-600 text-sm relative z-10 bg-dark">
        <p>© {new Date().getFullYear()} Ayder Parmankulov. All rights reserved.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}

export default App;
