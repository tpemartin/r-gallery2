import { useState } from 'react'
import './App.css'
import ImagePanel_fixedContent from '../components/InfoOnDoor/ImagePanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImagePanel_fixedContent />
    </>
  )
}

export default App
