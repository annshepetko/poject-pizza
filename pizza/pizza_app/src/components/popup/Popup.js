import React from 'react';
import './popup.style.css'
import {useContext} from "react";
import {MyContext} from "../../App";
import Pizza from "../secondPage/Pizza";
import {NavLink} from "react-router-dom";

const Popup = ({onClick, PopupText, none, margin, lineHeight}) => {
    let [orderCard, setOrderCard] = useContext(MyContext)
    return (
        <div className='popup'>
            <div className='popup__body'>
                <div className='popup__content'>
                    <div className='popup__title' style={{marginTop: margin, lineHeight: lineHeight}}>{PopupText}</div>
                    <div style={{display: none}}>
                        {orderCard.map(el => {
                            if (el.quantity > 0){
                                return  <Pizza none = 'none' title={el.title} image={el.image} price={el.price} quantity={el.quantity}/>
                            }else{
                                return ''
                            }
                        })}
                    </div>
                    <div className='popup__btn-s'>
                        <div className='popup__button_close' onClick={onClick}>Закрити</div>
                        {
                             orderCard.filter(el => el.quantity > 0).length
                            ?
                            <div style={{display: none}} className='popup__form' ><NavLink to={'/form'}> <button className='popup__form_button'>Заповнити форму</button></NavLink></div>
                            : ''
                        }
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Popup;