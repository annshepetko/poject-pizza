import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Animation_item.module.css'
export let   Animation_item = ({image, title, path}) => {
    return (
        <div className= {classes.pizza__order}>


                <div className={classes.pizza__button_shell}>
                    <NavLink  to={path}>
                        <img src={image} />
                        <p className={classes.pizza__order_text}>{title}</p>
                    </NavLink>
                </div>


        </div>
    )
}
