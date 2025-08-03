import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Tech from './components/Tech/Tech'

function App() {
  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
          setMousePos({x: e.pageX, y: e.pageY}) // could do clienX + window.scrollX, clientY + window.scrollY
      };       
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      }
  }, []);

  const containerStyle = {
      '--mouse-x': `${mousePos.x}px`,
      '--mouse-y': `${mousePos.y}px`
  };

  return (
    <div className='appContainer' style={containerStyle as React.CSSProperties}>
      <Navbar />
      <div id='home'>
        <Hero />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='experience'>
        <Experience />
      </div>
      <div id='projects'>
        <Project />
      </div>
      <div id='tech'>
        <Tech />
      </div>
    </div>
  )
}

export default App
