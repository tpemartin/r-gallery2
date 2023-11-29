import { useEffect, useState } from 'react'
import './App.css'
import GalleryCard from './components/GalleryCard'
import data from './data.json'
import { create_dataObjects_from_data, fetchData } from './fetchData'
import axios from 'axios'
import GalleryCardDescription from './components/GalleryCard/GalleryCardDescription'

function App() {
  

  const [dataObjectsState, setDataObjectsState] = useState(null)


  useEffect(()=>{
    fetchData()
      .then((dataObjects)=>{
          console.log(dataObjects)
          console.log(dataObjects[0])
          setDataObjectsState(dataObjects)
      })
  },[])
  


  const ui = dataObjectsState ? <>
  {
    dataObjectsState.map((project,i)=>{
      return <GalleryCard project={project} number={i+1} key={i}/>
    })
  }
  </> : <div>loading...</div>
  
  // const ui = <GalleryCard project={dataObjects[1]}/>
  return (
    <>
    {ui}
    </>
  )
}

export default App
