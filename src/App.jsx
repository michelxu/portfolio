import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function App() {

  return (
    <>
    <main className='px-6 max-w-6xl items-center justify-center mx-auto'>
      <section className='min-h-screen'>
        <Navbar/>
        <Profile/>
        <TechStack/>
        <Projects/>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default App
