import React from 'react'

export const MainPageShimmerUi = () => {
    return (
        <div className='h-full w-full aspect-video bg-cover fixed'>
            <div className='h-full w-full bg-gray-300'>
                <div className='pt-[20%] mx-5 mb-[15%]'>
                    <div className='w-96 h-11 bg-gray-400 m-3'></div>
                    <div className='w-80 h-9 bg-gray-400 m-3'></div>
                    <div className='flex '>
                    <div className='w-20 h-9 bg-gray-400 m-3 rounded-md'>
                    </div>
                    <div className='w-20 h-9 bg-gray-400 m-3 rounded-md'>
                    </div>
                    </div>
                </div>
                <div className='mx-6 flex'>
                    <div className='w-44 h-60 bg-gray-400 rounded-md mr-4'></div>
                    <div className='w-40 h-60 bg-gray-400 rounded-md mr-4'></div>
                    <div className='w-40 h-60 bg-gray-400 rounded-md mr-4'></div>
                    <div className='w-40 h-60 bg-gray-400 rounded-md mr-4'></div>
                    <div className='w-40 h-60 bg-gray-400 rounded-md mr-4'></div>
                    <div className='w-40 h-60 bg-gray-400 rounded-md mr-4'></div>
                    <div className='w-44 h-60 bg-gray-400 rounded-md'></div>
                </div>
            </div>

        </div>
    )
}
