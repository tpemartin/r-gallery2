import axios from "axios";

window.axios = axios;

export default async function verifyUser(access_token) {
 
    const uri ="https://script.google.com/macros/s/AKfycby4gX1fL_BWw_xvdjd6D0FosXyQyQFCpySt7JSCLgCTLxij5-sSS8QCjVRN5aTG-KByvw/exec"    


    const response = await axios.post(
        uri, 
        access_token)


    return response
}

