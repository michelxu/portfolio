import { BiLinkExternal } from 'react-icons/bi'

const AProject = ({props}) => {
  const {title, description, image, tags, url, repo} = props

  return (
    <>
    <div className='flex flex-col gap-2 pb-4 mb-4 w-full bg-gray-200 rounded-md border border-gray-300 dark:bg-gunmetal dark:border-midnight-300'>
      {/* thumbnail image */}
      <div className='h-48 sm:h-64 rounded-t-md'>
        <img src={image} className='w-full h-full object-cover rounded-t-md'/>
      </div>
      <div className='flex flex-col px-4 py-2 gap-2'>
        {/* title */}
        <h2 className='font-montse font-semibold text-xl dark:text-gray-100 uppercase'>
          {title}
        </h2>
        {/* tags */}
        <div className='flex flex-wrap gap-2'>
          {tags.map(tag => (
            <span key={tag} className='flex py-0.5 px-1 bg-gray-300 text-sm font-medium font-montse rounded-md dark:bg-transparent dark:border dark:border-midnight-300 dark:text-gray-300'>
              {tag}
            </span>
          ) )}
        </div>
        {/* description */}
        <p className='font-montse mb-4 dark:text-gray-100'>
          {description}
        </p>
      </div>
      <div className='flex flex-1'></div>
      {/* button */}
      <a href={url} target="_blank"
      className='flex flex-row mx-auto w-1/2 justify-center items-center py-2 gap-2 bg-zinc-900 rounded-md dark:bg-gradient-to-r from-indigo-600 to-indigo-400 dark:border dark:border-indigo-500'>
        <span className='font-montse text-gray-100'>Live App</span>
        <BiLinkExternal className='text-gray-100'/>
      </a>
    </div>
    </>
  )
}

export default AProject