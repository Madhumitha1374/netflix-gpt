import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

 

export const VideoTitle = ({title, description}) => {
    return (
        <div className=' pt-[20%] w-full pl-[5%] absolute text-white bg-gradient-to-b  from-black'>
            <h1 className='font-extrabold text-5xl mb-3 w-4/12'>{title}</h1>
            <p className='text-sm w-4/12 font-semibold max-h-36 overflow-hidden'>{description}</p>
            <div>
                <button className='bg-white text-black px-7 py-2 rounded-md mt-4 text-sm'><FontAwesomeIcon icon={faPlay} className='text-black mr-1' />Play</button>
                <button className='bg-slate-300 bg-opacity-30  text-white px-7 py-2 ml-2 rounded-md mt-4 text-sm font-semibold'><FontAwesomeIcon icon={faCircleInfo} className='mr-2'/>More info</button>
            </div>
        </div>
    )
}
