import axios from "axios";


export default async function verifyUser(api_url, access_token){
     try {
       const response = await axios.post(api_url, {
        access_token: access_token
       });
       return response
       // Handle the response...
     } catch (error) {
       // Handle error...
     }
   }

   