import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()

      if(searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')
      }
    }

  return (
        <form className='relative w-full md:w-1/2 my-1 md:my-0' onSubmit={handleSubmit}>
            <input type="text" className='rounded ring-0 px-5 py-2 w-full bg-slate-100' placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} />
            <span onClick={handleSubmit} className="absolute right-3 top-3 text-lg cursor-pointer">
              <FiSearch />
            </span>
        </form>
  )
}

export default SearchBar