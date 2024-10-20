import React, { useRef } from 'react';
import './App.css';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Loader from './components/Loader.jsx';
import Nav from './components/Nav.jsx';
import Projects from './components/Projects.jsx';

function App() {
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  
  const handleScroll = (section) => {
    switch (section) {
      case 'Home':
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <main className='h-screen w-full'>
      <Loader />
      <Nav handleScroll={handleScroll} /> 
      <section ref={heroRef}><Hero /></section>  
      <section ref={aboutRef}><About /></section>
      <section ref={experienceRef}><Experience /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={footerRef}><Footer  handleScroll={handleScroll}/></section>
    </main>
  );
}

export default App;
