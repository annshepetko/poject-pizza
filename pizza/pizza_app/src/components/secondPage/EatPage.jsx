import React, {useState, useContext, useEffect} from 'react'

import Popup from "../popup/Popup";
import {MyContext} from "../../App";
import PizzaItem from "./EatItems/EatItem";
import classes from './EatPage.module.css'
import {Animation_item} from "../animation_items/Animation_item";
import {animation_data} from "../animation_items/Animation_data";
import Button from "../button/Button";
import WindowPopup from "../../WindowPopup/WindowPopup";
import EatItem from "./EatItems/EatItem";

const EatPage = () => {
    const [pizzas, setPizzas] = useContext(MyContext);

    const [popup, setPopup] = useState(false)
    const  [windowPopup, setWindowPopup]  = useState(false)
    const [searchPopup, setSearchPopup] = useState(false)

    const closePopup = () => {
        setPopup(false)
    }

    const openPopup = () => {
        setPopup(true)
    }

    let openSearchPopup = () => {
        setSearchPopup(true)
    }
    let closeSearchPopup = () =>{
        setSearchPopup(false)
    }


    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])

    const [scrollPosition, setScrollPosition] = useState(0);
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






    return (
        <div>
            <div className={classes.pizza__shell}>
                <h1 style={{textAlign: 'left', marginBottom:'40px', marginTop: '-25px' }}>Піци</h1>
                {pizzas.map((item, key) => <EatItem {...item} key ={key}/>)}

                {
                    searchPopup ? <Popup PopupText='Знайдіть піцу ' onClick={closeSearchPopup} eat = 'pizza' none = 'none' /> : ''
                }
                {
                    windowPopup ? <WindowPopup openMainPopup={openSearchPopup} /> : ''
                }

                <Button onClick={openPopup} >Замовити</Button>
                <hr/>

                <Animation_item {...animation_data.burger}  />

                {
                    popup ?
                        <Popup PopupText={'Підтвердіть замовлення'} onClick={closePopup}/>
                        :
                        ''
                }

            </div>
        </div>
    )
}
export default EatPage