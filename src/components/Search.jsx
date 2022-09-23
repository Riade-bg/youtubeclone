import { useEffect, useState } from 'react'
import { Videos} from './'
import { fetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'

const Search = () => {
      const { searchTerm } = useParams()

      const [videos, setVideos] = useState([])
      useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
      }, [searchTerm])
    return(
        <>
          <h1 className="uppercese font-bold font-base p-5">Search Results For {searchTerm}:</h1>
          <div className='grid grid-cols-12 gap-3 p-4 overflow-scroll'>
            <Videos videos={videos} />
            </div>
        </>
    )
}

export default Search