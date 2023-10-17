import React, {useState} from 'react';
import styles from './Register.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../../../constants";
const RegisterForm = ({isRegisterForm, headerMessage}) => {
    const [registerRequestState,setRegisterRequestState ] = useState({
        firstname: "",
        lastName: "",
        email: "",
        password: ""
    });

    const setUsernameInRequest = (event) =>{

        setRegisterRequestState({...registerRequestState, [event.target.name]: event.target.value })

    }
    const authUser = async (userObj) =>{
        if (isRegisterForm){
            const token =  await axios.post(baseUrl + "/api/v1/auth/register", registerRequestState)
            console.log(token.data)
            localStorage.setItem('token', token.data)

        }else {
            const token = await  axios.post(baseUrl + "/api/v1/auth/authenticate", registerRequestState)
            console.log(token.data)
            localStorage.setItem('token', token.data)
        }
    }

    return(
        <div className={styles.page_wraper} >
            <div className={styles.form_wraper}>
                <form className={styles.form} >
                    <h2>{headerMessage}</h2>
                    { isRegisterForm ?

                        <div>

                            <div>
                                <input name={'firstname'} placeholder={'Введіть ім`я'} onChange={
                                    (e) => setUsernameInRequest(e)
                                } id={'firstname'}/>
                            </div>
                            <div>
                                <input name={"lastname"} onInput={
                                    (e) => setUsernameInRequest(e)
                                } placeholder={"Введіть прізвище"}/>
                            </div>
                        </div>

                        : ""

                    }

                    <div >
                        <input name={"email"} onInput={
                            (e) => setUsernameInRequest(e)
                        } placeholder={"Введіть пошту"}/>
                    </div>
                    <div>
                        <input name={"password"} type={"password"} onInput={
                            (e) => setUsernameInRequest(e)
                        } placeholder={"Введіть пароль"}/>
                    </div>
                    <NavLink onClick={() => authUser(registerRequestState)} className={styles.register_btn} to={""}>
                        Відправити
                    </NavLink>
                </form>
            </div>

        </div>
    )
}

export default RegisterForm;