import {BsGithub, BsFillSendFill} from 'react-icons/bs'
import pp from '../assets/profile_pic.jpg'

const Profile = () => {
  return (
    <>
    <div className='flex flex-col items-center py-8 mb-8 px-2 border border-gray-300 rounded'>
      <img src={pp} className='h-32 w-32 rounded-full border-2 border-gray-500'/>
      <h2 className='font-montse font-semibold text-2xl'>
        Jean Bustamante
      </h2>
      <h3 className='font-montse font-normal text-md text-gray-500 mb-4'>
        Lic. en Informática
      </h3>
      <p className='font-montse font-normal text-center text-md max-w-xl mb-4'>
        Adepto al
        <span className='font-semibold'> desarrollo front-end </span>
        y apasionado por el aprendizaje de
        <span className='font-semibold'> nuevas tecnologías </span>
        que permitan impulsar mi crecimiento personal y profesional.
      </p>
      <div className='flex flex-row gap-2'>
        <a href='https://github.com/michelxu' target='_blank' className='flex flex-row items-center gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md'>
          <span className='font-montse'>Github</span>
          <BsGithub className='text-xl'/>
        </a>
        <a href='mailto:jeanm.bustamantes@gmail.com' target='_blank' className='flex flex-row items-center gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md'>
          <span className='font-montse'>Email</span>
          <BsFillSendFill className='text-md'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Profile