import axios from "axios";
import {baseUrl} from "../../../../constants";

export const registration = async (requestState) =>{
    const token =  await axios.post(baseUrl + "/api/v1/auth/register", requestState)

    localStorage.setItem('token', token.data.token)
    console.log(localStorage.getItem('token'))

}