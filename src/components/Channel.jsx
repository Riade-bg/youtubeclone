import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {fetchFromApi} from '../utils/FetchFromApi'
import {ChannelCards, Videos} from './'

const Channel = () => {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data.items));
    console.log(channelDetails)
  },[id])

  return (
    <>
      <div className='w-96 mx-auto p-5'>
        <ChannelCards channel={channelDetails} />
      </div>
      <div className='grid grid-cols-12 gap-3 p-4 overflow-scroll'>
          <Videos videos={videos} />
        </div>
    </>
  )
}

export default Channel
