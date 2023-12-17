import axios from "axios";

window.axios = axios;

export default async function verifyUser(access_token) {
    
    const deployId="AKfycbx3u5T02oxlLYLfQYk_mSluLzjEzaB7k5DKWFZXNcsI6xU4Rmy1_mPlhaL16HiZrv1e9w"
    const uri =
    `https://script.google.com/macros/s/${deployId}/exec`;


    

    const myHeaders = {
        "Content-Type": "text/plain; charset=utf-8"
    };

    const requestOptions = {
        headers: myHeaders
    };

    const response = await axios.post(
        uri, 
        access_token, // if not string, need to JSON.stringify
        requestOptions)
    console.log(response)
    
    return response
}

