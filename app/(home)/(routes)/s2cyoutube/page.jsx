import React from 'react'
import Link from 'next/link'
    
function VideoPlayer() {
  return (
    <div className='border rounded-lg p-3'>
      <h2 className='text-gray-400 mb-3'>Success Study</h2>
      <iframe width="1000" height="500" src="https://www.youtube.com/embed/2_kZ37e86aU?si=9J_DIeEHZlFXqOHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="p-4 justify-center">
      <a href='https://www.youtube.com/@S2C_tnpsc/videos' target="_blank" rel="noopener noreferrer">
      <button className="bg-purple-800 text-white font-bold  py-3 px-5 rounded 
       hover:bg-red-700">
        Visit My YouTube Channel
      </button>
    </a>
      </div>
    </div>
  )
}

export default VideoPlayer
