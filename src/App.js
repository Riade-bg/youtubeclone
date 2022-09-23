import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Channel, Navbar, Feed, Video, Search } from './components'
import './App.css'

const App = () => (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/search/:searchTerm' element={<Search />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/channel/:id' element={<Channel />} />
        </Routes>
      </BrowserRouter>
  )


  export default App