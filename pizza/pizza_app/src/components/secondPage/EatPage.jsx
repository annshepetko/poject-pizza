import React, {useState, useContext} from 'react'

import Popup from "../popup/Popup";
import {MyContext} from "../../App";
import PizzaItem from "./EatItems/EatItem";
import classes from './EatPage.module.css'
import {Animation_item} from "../animation_items/Animation_item";
import {animation_data} from "../animation_items/Animation_data";

const EatPage = () => {
    const [pizzas, setPizzas] = useContext(MyContext);

    const [popup, setPopup] = useState(false)
    const closePopup = () => {
        setPopup(false)
    }
    const openPopup = () => {
        setPopup(true)
    }

    return (
        <div>
            <div className={classes.pizza__shell}>
                <h1 style={{textAlign: 'left', marginBottom:'40px', marginTop: '-25px' }}>Піци</h1>
                {pizzas.map((item, key) => (
                        <PizzaItem key={key} {...item}/>
                    )
                )
                }
                <button onClick={openPopup} className={classes.pizza__shell_buttonOrder}>Замовити</button>
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