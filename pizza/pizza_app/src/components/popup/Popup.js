import React from 'react';
import './popup.style.css'
import {useContext} from "react";
import {MyContext} from "../../App";
import Pizza from "../secondPage/Pizza";

const Popup = ({onClick}) => {
    let [orderCard, setOrderCard] = useContext(MyContext)
    return (
        <div className='popup'>
            <div className='popup__body'>
                <div className='popup__content'>
                    <div className='popup__title'>Підтвердіть замовлення</div>
                    <div>
                        {orderCard.map(el => {
                            if (el.quantity > 0){
                                return <Pizza title={el.title} image={el.image} price={el.price} quantity={el.quantity}/>
                            }else{
                                return  ''
                            }
                        })}
                    </div>
                    <div className='popup__button_close' onClick={onClick}>Close</div>
                </div>
            </div>
            </div>
    );
};

export default Popup;