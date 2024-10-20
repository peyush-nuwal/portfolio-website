
import './App.css'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Projects from './components/Projects.jsx'
function App() {
  return (
    <main className=' h-screen w-full'>
       <Loader/>
           <Nav/>
          <Hero/>
          <About/>
          <Experience/>
        
          <Projects/> 
          <Footer/>
    </main>
  )
}

export default App
