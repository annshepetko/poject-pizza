import React, {useState, useContext} from 'react'

import Popup from "../popup/Popup";
import {MyContext} from "../../App";
import PizzaItem from "./Pizza";
import classes from './EatPage.module.css'

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
                {pizzas.map((item, key) => (
                        <PizzaItem key={key} {...item}/>
                    )
                )
                }
                <button onClick={openPopup} className={classes.pizza__shell_buttonOrder}>Замовити
                </button>
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