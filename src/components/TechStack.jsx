import { BiCode, BiLogoCss3, BiLogoJavascript, BiLogoBootstrap } from 'react-icons/bi'
import { FaHtml5 } from "react-icons/fa";


const TechStack = () => {
  return (
    <>
    <div className='relative flex flex-col justify-center py-8 mb-8 bg-gray-200 rounded'>
      <div className='flex flex-row gap-2 mx-2 items-center mb-4'>
        <BiCode className='text-4xl'/>
        <h2 className='font-montse font-semibold text-2xl pe-2'>CURRENT STACK</h2>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      {/* STACK ICONS */}
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2'>
        <li className='flex items-center gap-3 rounded-md p-3 bg-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <FaHtml5 className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-md'>
            HTML
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-3 bg-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoCss3 className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-md'>
            CSS
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-3 bg-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoJavascript className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-md'>
            JavaScript
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-3 bg-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoBootstrap className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-md'>
            Bootstrap
          </span>
        </li>
      </ul>
    </div>
    </>
  )
}

export default TechStack