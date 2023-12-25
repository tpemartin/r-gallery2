import axios from "axios";

window.axios = axios;
const uri = "https://script.google.com/macros/s/AKfycbw5BfTuCLqLeVjKOTbqA7XUWXknOy57t3wTKedYUjUu3989_AWUtigDl8aN-Jk4_B6O/exec"

export default async function verifyUser(access_token) {
    

    const data = JSON.stringify({
        accessToken: access_token
    })
    const response = await axios.post(
        uri, 
        data)


    return response
}

export async function submit_save_Assessment(access_token, assessment, submit = false) {

    const data = JSON.stringify({
        accessToken: access_token,
        assessment: assessment
    })
    const response = await axios.post(
        uri, 
        data,
        {params: {submit: submit}})


    return response

}