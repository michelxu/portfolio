import { BiCode, BiLogoCss3, BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss, BiLogoReact,
  BiLogoTypescript, BiCloud, BiLogoRedux, BiLogoGithub } from 'react-icons/bi'
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


const TechStack = () => {
  return (
    <>
    <div className='relative flex flex-col justify-center py-8 mb-8 rounded'>
      <div className='flex flex-row gap-2 mx-2 items-center mb-4'>
        <BiCode className='text-4xl'/>
        <h2 className='font-montse font-bold text-xl sm:text-2xl pe-2'>CURRENT STACK</h2>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      {/* STACK ICONS */}
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2'>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <FaHtml5 className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            HTML
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoCss3 className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            CSS
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoJavascript className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            JavaScript
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoTypescript className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            TypeScript
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoBootstrap className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            Bootstrap
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoTailwindCss className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            Tailwind CSS
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoReact className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            React
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiCloud className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            API Rest
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoReact className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            Context API
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoRedux className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            Redux
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <SiMysql className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            MySQL
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300'>
          <div className='bg-gray-200 p-1.5 rounded-md'>
            <BiLogoGithub className='text-2xl'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base'>
            Github
          </span>
        </li>
      </ul>
    </div>
    </>
  )
}

export default TechStack