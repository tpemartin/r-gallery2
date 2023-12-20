import axios from "axios";

window.axios = axios;

export default async function verifyUser(access_token) {
 
    const uri ="https://script.google.com/macros/s/AKfycbw2EVs98nX2H2zuJ1vagPKwB4Qd4H0fA7qcwtE5DtIU57Qi_8GHdAec2v4PwBhO9agM_A/exec"    


    const response = await axios.post(
        uri, 
        access_token)


    return response
}

