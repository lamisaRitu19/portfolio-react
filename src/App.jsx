import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black text-whiteSmoke text-left'>
      <Hero></Hero>
      {/* <Navbar></Navbar> */}
      <div className='container'>
        <About></About>
        <Experience></Experience>
        {/* <Skills></Skills> */}
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <footer></footer>
    </div>
  )
}

export default App
