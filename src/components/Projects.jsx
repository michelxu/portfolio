import { BiCode, BiLinkExternal, BiSolidFolderOpen } from 'react-icons/bi'
import img_project1 from '../assets/project1.png'
import img_project2 from '../assets/project2.png'
import img_project3 from '../assets/project3.png'
import img_project4 from '../assets/project4.png'
import AProject from './AProject'

const Projects = () => {
  const projects = [
    {
      title: 'Kumite MMA',
      description: 'MMA Card Collection App. Consigue recompensas a través de desafíos y mini juegos para abrir packs y conseguir todas las cartas.',
      image: img_project1,
      tags: ['JavaScript', 'React', 'Tailwind CSS', 'Context API', 'Responsive'],
      url: 'https://michelxu.github.io/kumitemma/kumite',
      repo: ''
    },
    {
      title: 'Popcorn Movies',
      description: 'Movie site usando la API de themoviedb.org Filtra películas por categoría y consulta su disponibilidad de renta, streaming o compra según el país.',
      image: img_project2,
      tags: ['JavaScript', 'SPA', 'Bootstrap', 'API REST', 'Responsive'],
      url: 'https://michelxu.github.io/thepopcorncat/',
      repo: ''
    },
    {
      title: 'E-Commerce',
      description: 'Tienda en línea utilizando la API de fakestoreapi.com',
      image: img_project3,
      tags: ['JavaScript', 'React', 'Tailwind CSS', 'API REST', 'Responsive'],
      url: 'https://michelxu.github.io/mystoreapp/',
      repo: ''
    },
    {
      title: 'Social Feed App',
      description: 'App que simula el feed de una red social, usando la API de thecatapi.com La API permite subir imágenes y guardar otras en favoritos.',
      image: img_project4,
      tags: ['JavaScript', 'Bootstrap', 'API REST', 'Responsive'],
      url: 'https://michelxu.github.io/kumitemma/kumite',
      repo: ''
    },
  ]

  return (
    <>
    <div className='flex flex-col justify-center mb-4 rounded'>
      <div className='flex flex-row gap-2 mx-2 items-center dark:text-gray-100'>
        <BiSolidFolderOpen className='text-4xl'/>
        <h2 className='font-montse font-bold text-xl sm:text-2xl pe-2'>FEATURED PROJECTS</h2>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
    </div>
    {/* P R O J E C T S */}
    <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-8 gap-4'>
      {
        projects.map((project, i) => <AProject key={i} props={project}/>)
      }
    </div>
    </>
  )
}

export default Projects