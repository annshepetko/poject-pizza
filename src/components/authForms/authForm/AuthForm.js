import React, {useState} from 'react';
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
                </form>
            </div>

        </div>
    )
}

export default AuthForm;