import { BiCode, BiLogoCss3, BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss, BiLogoReact,
  BiLogoTypescript, BiCloud, BiLogoRedux, BiLogoGithub } from 'react-icons/bi'
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


const TechStack = () => {
  return (
    <>
    <div className='relative flex flex-col justify-center py-8 mb-8 rounded'>
      <div className='flex flex-row gap-2 mx-2 items-center mb-4 dark:text-gray-100'>
        <BiCode className='text-4xl'/>
        <h2 className='font-montse font-bold text-xl sm:text-2xl pe-2'>CURRENT STACK</h2>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      {/* STACK ICONS */}
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2'>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <FaHtml5 className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            HTML
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoCss3 className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            CSS
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoJavascript className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            JavaScript
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoTypescript className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            TypeScript
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoBootstrap className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            Bootstrap
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoTailwindCss className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            Tailwind CSS
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoReact className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            React
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiCloud className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            API Rest
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoReact className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            Context API
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoRedux className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            Redux
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <SiMysql className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            MySQL
          </span>
        </li>
        <li className='flex items-center gap-3 rounded-md p-2 bg-gray-100 border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
          <div className='bg-gray-200 p-1.5 rounded-md dark:bg-primary'>
            <BiLogoGithub className='text-2xl dark:text-gray-100'/>
          </div>
          <span className='font-montse font-medium text-sm sm:text-base dark:text-gray-100'>
            Github
          </span>
        </li>
      </ul>
    </div>
    </>
  )
}

export default TechStack