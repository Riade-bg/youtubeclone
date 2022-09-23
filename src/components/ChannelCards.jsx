import React from 'react'
import { Link } from 'react-router-dom'

function ChannelCards({channel}) {
  return (
      <div className='drop-shadow rounded-md overflow-hidden col-span-6 md:col-span-4 lg:col-span-3'>
        <Link to={`/channel/${channel?.id?.channelId}`} className="flex flex-col items-center justify-center h-full">
            <img src={channel?.snippet?.thumbnails?.high?.url} alt="" className='rounded-full w-1/2 ' />
            <h1 className='font-bold text-xl text-center'>{channel?.snippet?.title}</h1>
            {channel?.statistics?.subscriberCount && (
              <p className='text-sm font-bold uppercase'>{parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscriber</p>
            )}
        </Link>
      </div>
  )
}

export default ChannelCards