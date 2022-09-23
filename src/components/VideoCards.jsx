import React from 'react'
import { Link } from 'react-router-dom'

function VideoCards({ video:{
   id:{videoId},
   snippet
} }) {

  return (
      <div className={`drop-shadow bg-white rounded-md overflow-hidden col-span-6 md:col-span-4 lg:col-span-3`}>
        <Link to={videoId ? `/video/${videoId}` : '' }>
          <img src={snippet?.thumbnails?.high?.url} alt={"d"} className="" />
        </Link>
        <Link to={videoId ? `/video/${videoId}` : '' }>
            <h1 className='px-3 text-base py-1 font-bold line-clamp-1'>{snippet?.title}</h1>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '' }>
            <p className='text-sm text-gray-400 hover:text-gray-500 transition px-3 py-2 md:py-4'>{snippet?.channelTitle}</p>
        </Link>
      </div>
  )
}

export default VideoCards