import { useEffect, useState } from 'react'
import './App.css'
import data from './data.json'
import Gallery from './components/Gallery'
import { AppBar } from '@mui/material'
import AppBarLayout from './components/AppBarLayout'
import { GoogleOAuthProvider } from '@react-oauth/google';




function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="235254569809-suckfgfkjcf9p4c04oofodo6ropcj6nf.apps.googleusercontent.com">
        <AppBarLayout mainContent={<Gallery data={data} />} />
      </GoogleOAuthProvider>;
    </>
  )
}

export default App
