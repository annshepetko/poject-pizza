import axios from "axios";
import {baseUrl} from "../../../../constants";

export const authentication = async ( requestState) =>{
    const token = await axios.post(baseUrl + "/api/v1/auth/authenticate", requestState)
    localStorage.setItem('token', token.data.token)
}
