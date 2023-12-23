import { useEffect, useState } from 'react'
import './App.css'
import data from './data.json'
import Gallery from './components/Gallery'
import { AppBar } from '@mui/material'
import AppBarLayout from './components/AppBarLayout'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google'
import { Button } from '@mui/material'
import RowRadioButtonsGroup from './components/FormControl'

window.assessment = {
  user: null,
  group: null,
  members: null,
  projects: null,
  submit: false
}

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="235254569809-suckfgfkjcf9p4c04oofodo6ropcj6nf.apps.googleusercontent.com">
        {/* <RowRadioButtonsGroup/> */}
        <AppBarLayout />
      </GoogleOAuthProvider>;
    </>
  )
}


export default App
