import React, { useState, Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BackgroundMedia from './components/BackgroundMedia';

import Hero from './sections/Hero';
import Footer from './components/Footer';

// Code-splitting below-the-fold sections
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Skills = lazy(() => import('./sections/Skills'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasToggledSidebar, setHasToggledSidebar] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      once: false,
      duration: 1000,
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setHasToggledSidebar(true);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center gap-[100px] ">
      <BackgroundMedia />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} hasToggled={hasToggledSidebar} />

      <Hero />

      <Suspense fallback={<div className="h-screen flex items-center justify-center text-white">Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
