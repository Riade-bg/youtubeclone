import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/FetchFromApi'
import {Videos, Loading} from './'
import ReactPlayer from 'react-player'

const Video = () => {
    const { id } = useParams()
    const [videoDetails, setVideoDetails] = useState([]) 
    const [relatedVideos, setRelatedVideos] = useState([])


    useEffect(()=>{
      fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetails(data.items[0]))
      fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setRelatedVideos(data.items))
    }, [id])

    if (!videoDetails?.snippet) return <Loading />

    const { snippet, statistics } = videoDetails;

  return (
    <>
            <div className='p-4 h-screen'>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" controls={true} height={"85%"} playing={true} />
              <h1 className='text-xl font-bold text-lg md:text-3xl my-3'>{snippet.title}</h1>
              <div className="flex justify-between">
                  <Link to={`/channel/${snippet.channelId}`}>
                    <p className='underline font-bold'>{snippet.channelTitle}</p>
                  </Link>
                  <ul className="flex justify-between text-sm uppercase">
                    <li className="mr-3">{parseInt(statistics.viewCount).toLocaleString()} Views</li>
                    <li>{parseInt(statistics.likeCount).toLocaleString()} Likes</li>
                  </ul>
              </div>
            </div>

      <div className='grid grid-cols-12 gap-3 p-4 overflow-scroll'>
        <Videos videos={relatedVideos}/>
      </div>
    </>
  )
}

export default Video