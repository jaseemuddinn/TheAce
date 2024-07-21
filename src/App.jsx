
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Sponsors from './components/Sponsors/Sponsors'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Register />
      <Sponsors />
      <Contact />
    </>
  )
}

export default App
