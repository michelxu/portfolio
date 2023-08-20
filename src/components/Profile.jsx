import {BsGithub, BsFillSendFill} from 'react-icons/bs'
import profile_pic from '../assets/profile_pic.jpg'
import profile_avatar from '../assets/profile_avatar.png'

const Profile = () => {

  return (
    <>
    <div className='flex flex-col items-center py-8 mb-8 px-2 border border-gray-300 rounded dark:bg-gunmetal dark:border-midnight-300'>
      <img src={profile_avatar} className='h-48 w-48 bg-gray-100 rounded-full border-2 border-gray-500 dark:border-midnight-300'/>
      <h2 className='font-montse font-semibold text-2xl dark:text-gray-100'>
        Jean Bustamante
      </h2>
      <h3 className='font-montse font-normal text-md text-gray-500 mb-4 dark:text-gray-400'>
        Lic. en Informática
      </h3>
      <p className='font-montse font-normal text-center text-md max-w-xl mb-4 dark:text-gray-100'>
        Adepto al
        <span className='font-semibold'> desarrollo front-end </span>
        y apasionado por el aprendizaje de
        <span className='font-semibold'> nuevas tecnologías </span>
        que permitan impulsar mi crecimiento personal y profesional.
      </p>
      {/* ***** Buttons ***** */}
      <div className='flex flex-row gap-2'>
        <a href='https://github.com/michelxu' target='_blank'
        className='flex flex-row items-center gap-2 border border-black text-black hover:shadow-lg px-4 py-2 rounded-md dark:text-gray-100 dark:border-blue-500'>
          <BsGithub className='text-xl'/>
          <span className='font-montse'>Github</span>
        </a>
        <a href='mailto:jeanm.bustamantes@gmail.com' target='_blank'
        className='flex flex-row items-center gap-2 bg-black border border-black hover:shadow-lg text-gray-100 px-4 py-2 rounded-md dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-400 dark:border dark:border-indigo-500'>
          <BsFillSendFill className='text-md'/>
          <span className='font-montse'>Email</span>
        </a>
      </div>
    </div>
    </>
  )
}

export default Profile