import { useEffect, useState } from 'react'
import './App.css'
import GalleryCard from './components/GalleryCard'
import data from './data.json'
import { create_dataObjects_from_data, fetchData } from './fetchData'

function App() {
  
  // console.log(data)

  // // 取出第一個元素，並且將其餘元素放入data （data比之前少一個元素）
  // const keys = data.shift()

  // // 功能：將data的每一個元素轉換成物件
  // function create_data_object(value){
  //   const obj = Object()
  //   value.forEach((v,i)=>{
  //       obj[keys[i]] = v
  //   })
  //   return obj
  // }

  // // Array.map is to create a new array with the results of 
  // // calling a function for every array element.
  // const dataObjects = data.map((value)=>{
  //   return create_data_object(value)
  // })

  const dataObjects = create_dataObjects_from_data(data)

  console.log(dataObjects)

  // useEffect hook
  const [dataObjectsState, setDataObjectsState] = useState(null)

  useEffect(()=>{
    
    fetchData()
     .then((res)=>{
        console.log(res)
        setDataObjectsState(
          res
        )
     })
  }
  ,[])

  const ui = dataObjectsState ? <GalleryCard/> : <div>loading...</div>
  
  return (
    <>
      {ui}
      {/* <GalleryCard /> */}
    </>
  )
}

export default App
