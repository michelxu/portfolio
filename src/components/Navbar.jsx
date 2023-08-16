import {BsFillMoonStarsFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between pt-5 pb-10 mb-4'>
      <h1 className='font-montse font-semibold text-xl'>
        {`<JeanB/>`}
      </h1>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill className='text-2xl cursor-pointer'/>
        </li>
        <li>
          <a className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
          href='#'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar