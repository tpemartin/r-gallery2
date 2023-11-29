import { useState } from 'react'
import './App.css'
import GalleryCard from './components/GalleryCard'
import axios from 'axios'

function App() {
  
  // pass axios to window object
  window.axios = axios

  return (
    <>
      <GalleryCard />
    </>
  )
}

export default App
