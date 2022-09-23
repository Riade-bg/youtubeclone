import React from 'react'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'

const Navbar = () => (
    <nav className='w-full bg-white px-5 py-2 shadow flex flex-col md:flex-row justify-start md:justify-between items-center'>
        <Link to='/' className='uppercase text-2xl font-title'>
          YouTube Clone
        </Link>
        <SearchBar />
    </nav>
  )

  export default Navbar