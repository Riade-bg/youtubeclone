import React from 'react'
import { VideoCards, ChannelCards, Loading } from './'

const Videos = ({videos}) => {

  if(!videos?.length) return <Loading />

  return (
    <>
        {videos.map((item, idx)=>(
            <>
                {item.id.videoId && <VideoCards video={item} />}
                {item.id.channelId && <ChannelCards channel={item} />}
            </>
        ))}
    </>
  )
}

export default Videos
