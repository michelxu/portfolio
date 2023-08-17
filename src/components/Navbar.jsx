import {BsFillMoonStarsFill} from 'react-icons/bs'
import { HiDocumentText } from "react-icons/hi"

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between pt-5 pb-10 mb-4'>
      <h1 className='font-montse font-semibold text-xl'>
        {`<JeanB/>`}
      </h1>
      <ul className='flex items-center'>
        <li className='p-2 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer'
        onClick={() => alert('Work in progress...')}>
          <BsFillMoonStarsFill className='text-2xl'/>
        </li>
        <li className='-ms-2'>
          <a target='_blank' href='https://drive.google.com/file/d/1Fvl1lD67U4mbFc4Cftr3nnWFsXnkmbKz/view?usp=sharing'
          className='flex flex-row items-center gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>
            <span className='font-montse'>Resume</span>
            <HiDocumentText className='text-xl'/>
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar