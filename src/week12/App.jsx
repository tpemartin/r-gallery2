import { useEffect, useState } from 'react'
import './App.css'
import GalleryCard from './components/GalleryCard'
import data from './data.json'
import { create_dataObjects_from_data, fetchData } from './fetchData'
import axios from 'axios'
import GalleryCardDescription from './components/GalleryCard/GalleryCardDescription'

function App() {
 
  const [dataObjects, setDataObjects] = useState(null)

  const ui = dataObjects? <> 
  {
    dataObjects.map((e,i)=>{
      return <GalleryCard project={e} key={i}/>
    })
  }
  </>: <div> loading....</div>

  useEffect(() => {
    fetchData().then(
      (res) => {
        setDataObjects(res)
      }
    )

  },[])

  return (
    <>
    {ui}
    </>
  )
}

export default App
