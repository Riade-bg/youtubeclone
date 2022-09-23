import React, { useEffect, useState } from 'react'
import {Sidebar, Videos} from './'
import { fetchFromApi } from '../utils/FetchFromApi'

const Feed = () => {
      const [selectedCategory, setSelectedCategory] = useState('New')
      const [videos, setVideos] = useState([])
      useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
      }, [selectedCategory])
    return(
      <>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <div
              className='grid grid-cols-12 gap-3 p-4 bg-slate-100'>
              <h1 className="uppercese font-bold font-base col-span-12">{selectedCategory} Videos</h1>
              <Videos videos={videos} />
          </div>
      </>
    )
}

export default Feed