import verifyUser from "./verifyUser";
import { useState } from "react";
import { Avatar, Button, CircularProgress, Tooltip, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useGoogleLogin } from "@react-oauth/google";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import EvalutationControl from "../EvaluateMemebers";

window.assessment = Object()
window.assessment.user = null
window.assessment.group = null
// window.assessment.assessment = {
//   "project": null,
//   "members": null,
// }
window.assessment.submit = false

export default function AppLogin({setRatingData = null}) {

  const [hasLogin, setHasLogin] = useState(false)
  const [userData, setUserData] = useState(null)
  const [isClassStudent, setIsClassStudent] = useState(null)
  const [loginClicked, setLoginClicked] = useState(false)

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      verifyUser(tokenResponse.access_token)
        .then(res => {
          if (res.status === 200) {
            setHasLogin(true)
            if (res.data) {
              console.log(res.data)
              window.assessment.user = res.data.user
              window.assessment.group = res.data.group

              setUserData(res.data)
              setIsClassStudent(true)
              if (res.data.assessment) {
                console.log('res.data.assessment')
                console.log(res.data.assessment)
                console.log(window.assessment.assessment)
                window.assessment.assessment = res.data.assessment
                console.log(window.assessment.assessment)
                window.eval_members = window.assessment.assessment.members
                window.ratings = window.assessment.assessment.project
                setRatingData(res.data.assessment.project)
              }
            } else {
              setIsClassStudent(false)
            }
          }
        })
      // axios.post(api_url, {access_token: tokenResponse.access_token},
      //   {headers: {'Content-Type': 'text/plain'}})

    }
  });
  const handleLogin = () => {
    setLoginClicked(true)
    login()
  }

  const loginBtn = loginClicked ? <CircularProgress color="inherit" /> : <ButtonLogin onClick={handleLogin} />

  // const googleLogin = hasLogin ? <UserButtonGroup userData={userData} isClassStudent={isClassStudent} setRatingData={setRatingData}/> : loginBtn
  let googleLogin
  if (hasLogin) {
    // setRatingData(window.ratings)
    googleLogin = <UserButtonGroup userData={userData} isClassStudent={isClassStudent} />
  } else {
    googleLogin = loginBtn
  }

  return <>

    {googleLogin}
  </>
}

function ButtonLogin({ onClick }) {

  return <>
    <Tooltip title="登入">
      <Button color="inherit" onClick={onClick} ><LoginIcon /></Button>
    </Tooltip>
  </>
}

function UserButtonGroup({ userData, isClassStudent}) {

  console.log(isClassStudent)
  const ui = isClassStudent ? <>
    <EvalutationControl />
    <AvatarUser userData={userData} />
  </> : <Visitor />
  return <>
    {ui}
  </>
}

function AvatarUser({ userData }) {
  return <>
    <Avatar alt={userData.user} src={userData.photo} />
  </>
}
function Visitor() {
  return <>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="visitor">
      <AccessibilityIcon />
      訪客
    </Typography>
  </>
}
