import { useContext } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contexto from './context/Contexto'
import bg_img from './assets/bg-JgOeRuGD_Y4-unsplash.jpg'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const {darkMode} = useContext(Contexto)
  console.log('darkMode', darkMode);

  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-primary h-full bg-cover bg-center" /*style={{ backgroundImage: `url(${bg_img})` }}*/>
        <main className='px-6 max-w-6xl items-center justify-center mx-auto'>
          <section className='min-h-screen'>
            <ScrollToTop />
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
