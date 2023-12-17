import axios from "axios";

window.axios = axios;

export default async function verifyUser(access_token) {
    
    const deployId="AKfycbyZ69w3XZ8zGdIYu1qrBFgX6oA39rXy8UJSS6UrhO1tDnl3ufh-vvwlm9Z860WBcbsyjQ"
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

