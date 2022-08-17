import React, {useContext, useState} from "react";
import {BurgerContext, MyContext} from "../../App";
import classes from '../secondPage/EatPage.module.css'
import BurgerItem from "./BurgerItem";
import {Animation_item} from "../animation_items/Animation_item";
import {animation_data} from "../animation_items/Animation_data";
import popup from "../popup/Popup";
import Popup from "../popup/Popup";

export let BurgerPage = () => {
    let [burgerDataFromContext,setBurgerDataFromContext] = useContext(BurgerContext)
    let [popupState, setPopupState] = useState(false)

        let closePopup = () => {
            setPopupState(false)
        }
    return(
        <div>
            <div className={classes.pizza__shell}>
                <h1 style={{textAlign: 'left', marginBottom: '40px', marginTop: '-25px'}}>Бургери</h1>
                {burgerDataFromContext.map((item, index) => <BurgerItem key={index} {...item}/>)}

                {
                    popupState
                        ? <Popup PopupText={'Підтвердіть замовлення '} onClick={closePopup}/>
                        :

                        ''

                }
                <button onClick={() => {setPopupState(true)}}  className={classes.pizza__shell_buttonOrder}>Замовити</button>
            </div>

            <hr/>
            <Animation_item {...animation_data.pizza}/>
        </div>
    )
}