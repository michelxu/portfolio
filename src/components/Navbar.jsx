import { useContext } from 'react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { HiDocumentText } from "react-icons/hi"
import Contexto from '../context/Contexto'

const Navbar = () => {
  const {darkMode, setDarkMode} = useContext(Contexto)

  return (
    <>
    <nav className='flex items-center justify-between pt-5 pb-10 mb-4 select-none'>
      <h1 className='font-montse font-semibold text-xl dark:text-gray-100'>
        {`<JeanB />`}
      </h1>
      <ul className='flex items-center'>
        <li className='p-2 bg-gray-200 border border-gray-200 hover:bg-gray-300 rounded-md cursor-pointer dark:border dark:border-midnight-300 dark:bg-transparent dark:hover:bg-gunmetal'
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}>
          {darkMode
          ? <BsFillSunFill className='text-2xl dark:text-gray-100'/>
          : <BsFillMoonStarsFill className='text-2xl dark:text-gray-100'/>
          }
        </li>
        <li className='-ms-2'>
          <a target='_blank' href='https://drive.google.com/file/d/1Fvl1lD67U4mbFc4Cftr3nnWFsXnkmbKz/view?usp=sharing'
          className='flex flex-row items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-100 px-4 py-2 rounded-md ml-6 dark:border dark:border-midnight-300 dark:hover:bg-gunmetal dark:bg-gradient dark:from-transparent dark:to-transparent'>
            <HiDocumentText className='text-xl'/>
            <span className='font-montse'>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar