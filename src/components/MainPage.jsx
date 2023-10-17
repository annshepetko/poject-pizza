import React from 'react'
import Header from './header/Header'
import {Cards_Container} from "./cardsContainer/Cards_Container";
import {Basic} from "./basicContainer/Basic";
import {Animation_item} from "./animation_items/Animation_item";
import {animation_data} from "./animation_items/Animation_data";
import {NavLink} from "react-router-dom";
import Button from "./button/Button";
import styles from './MainPage.module.css'


export default function MainPage() {
  return (
    <div className="image">
    <div>
        <div>
            <div className={styles.btns_auth}>
                    <NavLink className={styles.auth_btn} to={'/authenticate'}>Sign in</NavLink>
                    <NavLink className={styles.auth_btn} to={'/register'}>Register</NavLink>
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
