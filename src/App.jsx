import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-gray-100'>
        <main className='px-6 max-w-6xl items-center justify-center mx-auto'>
          <section className='min-h-screen'>
            <Navbar/>
            <Profile/>
            <TechStack/>
            <Projects/>
          </section>
        </main>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
