import React from "react";
import {NavLink} from "react-router-dom";

export let Animation_pizza = (props) => {
    return (
        <div>

            <p className="pizza__order"><NavLink className='pizza__order_button' to='eat'>Перейти до
                замовлення </NavLink></p>
        </div>
    )
}
