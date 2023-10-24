import React, {useEffect, useState} from 'react'
import Header from './header/Header'
import {Cards_Container} from "./cardsContainer/Cards_Container";
import {Basic} from "./basicContainer/Basic";
import {Animation_item} from "./animation_items/Animation_item";
import {animation_data} from "./animation_items/Animation_data";
import {NavLink} from "react-router-dom";
import Button from "./button/Button";
import styles from './MainPage.module.css'
import axios from "axios";
import {baseUrl} from "../constants";


export default function MainPage() {


    const [authButtonState, setAuthButtonState] = useState(true);
    const  checkTokenStatus = async ()  =>{
        const checkToken = await axios.get(baseUrl + "/secured", {
            headers :{
                Authorization : "Bearer " + localStorage.getItem('token')
            }
        })
        if (checkToken.status == 200){
            setAuthButtonState(false)
        }else{
            setAuthButtonState(true)
        }
        console.log(checkToken)
    }

    useEffect(() => {
        checkTokenStatus();

    }, []);
  return (
    <div className="image">
    <div>
        <div>
            <div className={styles.btns_auth}>
                {
                    authButtonState ?
                        <>
                        <NavLink className={styles.auth_btn} to={'/authenticate'}>Sign in</NavLink>
                        <NavLink className={styles.auth_btn} to={'/register'}>Register</NavLink>
                        </>
                        :
                    <NavLink className={styles.auth_btn} to={ "/"} > Ви автентифіковані</NavLink>
                }
            </div>

        </div>
        <Header/>
        <Cards_Container/>
        <Basic/>
        <div className='menu__container'>
        <Animation_item {...animation_data.pizza}/>

        </div>
    </div>
    </div>
  )
}
