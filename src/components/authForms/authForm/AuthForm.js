import React, {useEffect, useState} from 'react';
import styles from './AuthForm.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../../../constants";
import {registration} from "./AuthFormFunctions/registration";
import {authentication} from "./AuthFormFunctions/authentication";

const AuthForm = ({isRegisterForm, headerMessage}) => {
    const [requestState,setRequestState ] = useState({
        firstname: "",
        lastName: "",
        email: "",
        password: ""
    });

    const setUsernameInRequest = (event) =>{
        setRequestState({...requestState, [event.target.name]: event.target.value })
    }
    const authUser = async (userObj) =>{
        if (isRegisterForm){
            registration(userObj)
        }else {
            authentication(userObj)
        }
    }
    const authWithGoogle = async (event) =>{
           event.preventDefault()
          await axios.get(baseUrl + '/api/v1/auth/takeUrl').then(response => {
              window.location.href = response.data
          })

    }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        localStorage.setItem('token', urlParams.get('token'))
        if (urlParams.get('token') !== "" && urlParams.get('token') !== null ){
            window.location.href = "/"
        }
    });
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
                    <NavLink onClick={() => authUser(requestState)} className={styles.register_btn} to={""}>
                        Відправити
                    </NavLink>
                    { !isRegisterForm ?
                        <div>
                        <p className={styles.choise_text}>Або</p>
                        <button onClick={(e) => authWithGoogle(e)} className={styles.google_btn}></button>
                        </div>: ""}

                </form>
            </div>

        </div>
    )
}

export default AuthForm;