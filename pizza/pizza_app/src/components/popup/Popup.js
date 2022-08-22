import React from 'react';
import './popup.style.css'
import {useContext} from "react";
import {BurgerContext, MyContext} from "../../App";
import EatItem from "../secondPage/EatItems/EatItem";
import {NavLink} from "react-router-dom";

const Popup = ({onClick, PopupText, none, margin, lineHeight}) => {
    let [orderCard] = useContext(MyContext)
    let [burgerCardOrder] = useContext(BurgerContext)
    let orderData = [...orderCard, ...burgerCardOrder]

    return (
        <div className='popup'>
            <div className='popup__body'>
                <div className='popup__content'>
                    <div className='popup__title' style={{marginTop: margin, lineHeight: lineHeight}}>{PopupText}</div>
                    <div style={{display: none}}>
                        {orderData.map((el, index)  => {
                            if (el.quantity > 0){
                                return  <EatItem key = {index} none = 'none' title={el.title} image={el.image} price={el.price} quantity={el.quantity}/>
                            }else{
                                return ''
                            }
                        })}
                    </div>
                    <div className='popup__btn-s'>
                        <div className='popup__button_close' onClick={onClick}>Закрити</div>
                        {
                             orderData.filter(el => el.quantity > 0).length
                            ?
                                 <NavLink to={'/form'}> <button className='popup__form_button'> Заповнити форму</button></NavLink>
                            : ''
                        }
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Popup;