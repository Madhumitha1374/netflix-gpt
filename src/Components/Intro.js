import React from 'react'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Intro = () => {

      const navigate = useNavigate()
    
      useEffect(() => {
        setTimeout(() => {
            navigate('/browse')
        }, 5000)
      }, [navigate])

      return <div >
      <iframe 
          className="w-screen h-screen aspect-video bg-cover" 
          src={"https://www.youtube.com/watch?v=GV3HUDMQ-F8?&mute=1&controls=0&modestbranding=0"} 
          title="YouTube video player" 
          // allowFullScreen="true" 
          // webkitAllowFullScreen="true" 
          // mozallowfullscreen="true"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; modestbranding; picture-in-picture; web-share" 
          >
      </iframe>
  </div>
}
