import verifyUser from "./verifyUser";
import { useState } from "react";
import { Avatar, Button, CircularProgress, Tooltip, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useGoogleLogin } from "@react-oauth/google";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import EvalutationControl from "../EvaluateMemebers";


export default function AppLogin({setAssessment}) {

  const [hasLogin, setHasLogin] = useState(false)
  const [userData, setUserData] = useState(null)
  const [isClassStudent, setIsClassStudent] = useState(null)
  const [loginClicked, setLoginClicked] = useState(false)

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      window.accessToken = tokenResponse.access_token
      verifyUser(tokenResponse.access_token)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            setHasLogin(true)
            if (res.data) {

              window.assessment.user = res.data.user
              window.assessment.group = res.data.group
              window.assessment.members = res.data.members
              window.assessment.projects = res.data.assessment.projects ? res.data.assessment.projects : window.assessment_project_template
              setUserData(res.data)
              setIsClassStudent(true)
              if (res.data.assessment) {
                console.log(res.data.assessment)
                // window.tt = res.data.assessment.project
                // const projectAssessment = JSON.parse(res.data.assessment.project)
                // console.log("projectAssessment",projectAssessment)
                console.log(res.data)
                window.assessment.projects = res.data.assessment.projects ? res.data.assessment.projects : window.assessment_project_template
                window.assessment.members = res.data.assessment.members
                window.assessment.submit = res.data.assessment.submit
                window.eval_members = window.assessment.members 
                setAssessment(window.assessment)
                console.log('login')
                console.log(
                   assessment)
                // console.log(window.assessment)
                // window.eval_members = window.assessment.members
                // window.ratings = projectAssessment
                // setRatingData(projectAssessment)
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
    console.log(userData)
    googleLogin = userData ? <UserButtonGroup userData={userData} isClassStudent={isClassStudent} /> : <Visitor />
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

  const membersAssessment = userData.assessment.members

  console.log(isClassStudent)
  console.log(userData)
  
  const ui = isClassStudent ? <>
    <EvalutationControl membersAssessment={membersAssessment}/>
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
