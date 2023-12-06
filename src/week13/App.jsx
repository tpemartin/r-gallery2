import { useEffect, useState } from 'react'
import './App.css'
import data from './data.json'
import Gallery from './components/Gallery'
import {Example1, Example2} from './components/Layout/demo'

function App() {

  return (
    <>
    {/* <Example1 /> */}
    {/* <Example2 /> */}
    <Gallery />
    </>
  )
}

export default App
