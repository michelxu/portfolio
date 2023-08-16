import { BiCode, BiLinkExternal } from 'react-icons/bi'
import img_project1 from '../assets/project1.png'
import img_project2 from '../assets/project2.png'
import img_project3 from '../assets/project3.png'
import img_project4 from '../assets/project4.png'

const Projects = () => {
  return (
    <>
    <div className='flex flex-col justify-center py-8 mb-8 bg-gray-200 rounded'>
      <div className='flex flex-row gap-2 mx-2 items-center'>
        <BiCode className='text-4xl'/>
        <h2 className='font-montse font-semibold text-2xl pe-2'>FEATURED PROJECTS</h2>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
    </div>
    {/* P R O J E C T S */}
    <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-8 gap-4'>
      {/* KUMITE MMA */}
      <div className='flex flex-col gap-2 pb-4 mb-4 w-full bg-gray-200 rounded-md'>
        <div className='h-64 rounded-t-md'>
          <img src={img_project1} className='w-full h-full object-cover rounded-t-md'/>
        </div>
        <div className='flex flex-col px-4 py-2 gap-2'>
          <h2 className='font-montse font-semibold text-xl'>KUMITE MMA</h2>
          <div className='flex flex-wrap gap-2'>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>JavaScript</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>React</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Tailwind CSS</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Context API</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Responsive</span>
          </div>
          <p className='font-montse mb-4'>
            MMA Card Collection App. Consigue <span className='font-bold'>recompensas</span> a través de desafíos y mini juegos para
            abrir packs y conseguir todas las cartas.
          </p>
        </div>
        <div className='flex flex-1'></div>
        <a href='https://michelxu.github.io/kumitemma/kumite' target="_blank"
        className='flex flex-row mx-auto w-1/2 justify-center items-center p-2 gap-2 bg-gray-300 rounded-md'>
          <span className='font-montse'>Live App</span>
          <BiLinkExternal/>
        </a>
      </div>
      {/* MOVIES */}
      <div className='flex flex-col gap-2 pb-4 mb-4 w-full bg-gray-200 rounded-md'>
        <div className='h-64 rounded-t-md'>
          <img src={img_project2} className='w-full h-full object-cover rounded-t-md'/>
        </div>
        <div className='flex flex-col px-4 py-2 gap-2'>
          <h2 className='font-montse font-semibold text-xl'>POPCORNCAT</h2>
          <div className='flex flex-wrap gap-2'>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>JavaScript</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>SPA</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Bootstrap</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>API REST</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Responsive</span>
          </div>
          <p className='font-montse mb-4'>
            Movie site usando la API de <span className='font-bold'>themoviedb.org </span>
            Filtra películas por categoría y consulta su disponibilidad de renta, streaming o compra según el país.
          </p>
        </div>
        <div className='flex flex-1'></div>
        <a href='https://michelxu.github.io/thepopcorncat/' target="_blank"
        className='flex flex-row mx-auto w-1/2 justify-center items-center p-2 gap-2 bg-gray-300 rounded-md'>
          <span className='font-montse'>Live App</span>
          <BiLinkExternal/>
        </a>
      </div>
      {/* MY STORE APP */}
      <div className='flex flex-col gap-2 pb-4 mb-4 w-full bg-gray-200 rounded-md'>
        <div className='h-64 rounded-t-md'>
          <img src={img_project3} className='w-full h-full object-cover rounded-t-md'/>
        </div>
        <div className='flex flex-col px-4 py-2 gap-2'>
          <h2 className='font-montse font-semibold text-xl'>E-COMMERCE SITE</h2>
          <div className='flex flex-wrap gap-2'>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>JavaScript</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>React</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Tailwind CSS</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>API REST</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Responsive</span>
          </div>
          <p className='font-montse mb-4'>
            Tienda en línea utilizando la API de <span className='font-bold'>fakestoreapi.com </span>
          </p>
        </div>
        <div className='flex flex-1'></div>
        <a href='https://michelxu.github.io/mystoreapp/' target="_blank"
        className='flex flex-row mx-auto w-1/2 justify-center items-center p-2 gap-2 bg-gray-300 rounded-md'>
          <span className='font-montse'>Live App</span>
          <BiLinkExternal/>
        </a>
      </div>
      {/* CAT GRAM APP */}
      <div className='flex flex-col gap-2 pb-4 mb-4 w-full bg-gray-200 rounded-md'>
        <div className='h-64 rounded-t-md'>
          <img src={img_project4} className='w-full h-full object-cover rounded-t-md'/>
        </div>
        <div className='flex flex-col px-4 py-2 gap-2'>
          <h2 className='font-montse font-semibold text-xl'>SOCIAL FEED APP</h2>
          <div className='flex flex-wrap gap-2'>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>JavaScript</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Bootstrap</span>
            <span className='p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>API REST</span>
            <span className='flex p-1 bg-gray-300 text-sm font-medium font-montse rounded-md'>Responsive</span>
          </div>
          <p className='font-montse mb-4'>
            App simulando una red social con feed, usando la API de <span className='font-bold'>thecatapi.com </span>
            La API permite subir imágenes y guardar otras en favoritos.
          </p>
        </div>
        <div className='flex flex-1'></div>
        <a href='https://michelxu.github.io/cat-gram-project/' target="_blank"
        className='flex flex-row mx-auto w-1/2 justify-center items-center p-2 gap-2 bg-gray-300 rounded-md'>
          <span className='font-montse'>Live App</span>
          <BiLinkExternal/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Projects