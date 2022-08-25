import React, {useContext, useEffect, useState} from "react";
import {BurgerContext, MyContext} from "../../App";
import classes from '../secondPage/EatPage.module.css'
import BurgerItem from "./BurgerItem";
import {Animation_item} from "../animation_items/Animation_item";
import {animation_data} from "../animation_items/Animation_data";

import Popup from "../popup/Popup";
import Button from "../button/Button";
import WindowPopup from "../../WindowPopup/WindowPopup";

export let BurgerPage = () => {
    let [burgerDataFromContext,setBurgerDataFromContext] = useContext(BurgerContext)
    let [popupState, setPopupState] = useState(false)
    const  [windowPopup, setWindowPopup]  = useState(false)

    const [searchPopup, setSearchPopup] = useState(false)


    const [scrollPosition, setScrollPosition] = useState(0);

        let closePopup = () => {
            setPopupState(false)
        }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

        let handleSearchPopup = (val) => {
            setSearchPopup(val)
        }

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);


    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (scrollPosition > 600 ){
            setWindowPopup(true)
        }else {
            setWindowPopup(false)
        }
    }, [scrollPosition])

    return(
        <div>
            <div className={classes.pizza__shell}>
                <h1 style={{textAlign: 'left', marginBottom: '40px', marginTop: '-25px'}}>Бургери</h1>
                {burgerDataFromContext.map((item, index) => <BurgerItem key={index} {...item}/>)}

                {windowPopup ? <WindowPopup openMainPopup={() => {handleSearchPopup(true)}} /> : ''}
                {searchPopup ? <Popup onClick={() => {handleSearchPopup(false)}} eat = 'burger' none = 'none' PopupText={'Знайдіть бургер '}   /> : ''}
                {
                    popupState
                        ? <Popup   PopupText={'Підтвердіть замовлення '} onClick={closePopup}/>
                        :

                        ''
                }
                {/*<button onClick={() => {setPopupState(true)}}  className={classes.pizza__shell_buttonOrder}>Замовити</button>*/}
                <Button onClick={() => {setPopupState(true)}}>Замовити</Button>
            </div>
            <hr/>
            <Animation_item {...animation_data.pizza}/>
        </div>
    )
}