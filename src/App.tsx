import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'


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
      <Hero />
      <About />
    </div>
  )
}

export default App
