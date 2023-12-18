import axios from "axios";

window.axios = axios;

export default async function verifyUser(access_token) {
    
    // const deployId="AKfycbzOCQ_JJEXknRrgfzIzKpMp6pzxkJ1kuEY2_HgZX6_jnxUXQZ6QFjzAruEzfaTAXsoDUw"
    // const uri =
    // `https://script.google.com/macros/s/${deployId}/exec`;


       const uri ="https://script.google.com/macros/s/AKfycbxPh-taP6l4ED44GzzKO_BwLYvE_AeIoRc4KcKiSktyRkUUZEK_67ZJG6qY4f0FXPWF8g/exec"    

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

    console.log("verifyUser")
    console.log(response)
    
    return response
}

