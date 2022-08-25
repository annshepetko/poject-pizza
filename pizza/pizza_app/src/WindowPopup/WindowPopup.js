import React from 'react';
import classes from  './WindowPopup.module.css'
import {useSpring,animated } from "react-spring";
const WindowPopup = ({openMainPopup}) => {

    let animation = useSpring({ to:{opacity: 1, } ,from: {opacity: 0}, config:{duration: 200}})
    return (
        <div  className={classes.popup}>
            <div  className={classes.popup__body}>
                <animated.div style={animation}  className={classes.popup__content} >
                    <ul>

                        <li onClick={openMainPopup} >Пошук </li>
                    </ul>

                </animated.div>
            </div>
        </div>
    );
};

export default WindowPopup;