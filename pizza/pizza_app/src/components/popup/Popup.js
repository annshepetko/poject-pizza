import React, {useState} from 'react';
import './popup.style.css'
import {useContext} from "react";
import {BurgerContext, MyContext} from "../../App";
import EatItem from "../secondPage/EatItems/EatItem";
import {NavLink} from "react-router-dom";
import BurgerItem from "../thirdPage/BurgerItem";

const Popup = ({onClick, PopupText, none, margin, lineHeight,  eat}) => {
    let [orderCard] = useContext(MyContext) // pizza array
    let [burgerCardOrder] = useContext(BurgerContext) // burger array
    let orderData = [...orderCard, ...burgerCardOrder] // main array
    let [inputPizzaValue, setInputPizzaValue] = useState('') // pizza
    let [inputBurgerValue, setInputBurgerValue] = useState('')
    let inputBurgerHandler = (e) => {
        setInputBurgerValue(e.target.value)
    }
    let inputPizzaHandler = (e) => {
        setInputPizzaValue(e.target.value)
    }
    let filterPizza = orderCard.filter(pizza => pizza.title.toLowerCase().includes(inputPizzaValue.toLowerCase()))
    let filterBurgers = burgerCardOrder.filter(burger => burger.title.toLowerCase().includes(inputBurgerValue.toLowerCase()))
    return (
        <div className='popup'>
            <div  className='popup__body'>

                <div className='popup__content'>

                    <div className='popup__title' style={{marginTop: margin, lineHeight: lineHeight}}>{PopupText}</div>


                    {eat === 'pizza' ?

                        <input onChange={(e) => {inputPizzaHandler(e)}}/>

                        :
                    ''
                    }
                    {eat === 'burger' ?
                        <input onChange={(e) => {inputBurgerHandler(e)}}/>
                        :
                        ''
                    }

                    {
                        inputPizzaValue.length > 0 ? filterPizza.map(eat => <EatItem {...eat} description={''} height={'250px'}/>)
                        :
                       ''
                    }
                    {
                        inputBurgerValue.length > 0 ? filterBurgers.map(burger => <BurgerItem {...burger}  description={''} height={'250px'}/>): ''
                    }
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
                                 <NavLink style ={{display: none}} to={'/form'}> <button className='popup__form_button'> Заповнити форму</button></NavLink>
                            : ''
                        }
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Popup;