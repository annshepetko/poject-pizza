import React, {useState} from 'react';
import styles from  './popup.module.css'
import {useContext} from "react";
import { MyContext} from "../../App";
import EatItem from "../secondPage/EatItems/EatItem";
import {NavLink} from "react-router-dom";


const Popup = ({onClick, PopupText, none, margin, lineHeight,  eat}) => {
    let [orderCard] = useContext(MyContext) // pizza array

    let orderData = [...orderCard, ] // main array
    let [inputPizzaValue, setInputPizzaValue] = useState('') // pizza
    let [inputBurgerValue, setInputBurgerValue] = useState('')
    let inputBurgerHandler = (e) => {
        setInputBurgerValue(e.target.value)
    }
    let inputPizzaHandler = (e) => {
        setInputPizzaValue(e.target.value)
    }
    let filterPizza = orderCard.filter(pizza => pizza.title.toLowerCase().includes(inputPizzaValue.toLowerCase()))

    return (
        <div className={styles.popup}>
            <div  className={styles.popup__body}>

                <div className={styles.popup__content}>

                    <div className={styles.popup__title} style={{marginTop: margin, lineHeight: lineHeight}}>{PopupText}</div>


                    {eat === 'pizza' ?

                        <input onChange={(e) => {inputPizzaHandler(e)}}/>

                        :
                    ''
                    }


                    {
                        inputPizzaValue.length > 0 ? filterPizza.map(eat => <EatItem {...eat} description={''} height={'250px'}/>)
                        :
                       ''
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
                    <div className={styles.popup__btn_s}>
                        <div className={styles.popup__button_close} onClick={onClick}>Закрити</div>
                        {
                             orderData.filter(el => el.quantity > 0).length
                            ?
                                 <NavLink style ={{display: none}} to={'/form'}> <button className={styles.popup__form_button}> Заповнити форму</button></NavLink>
                            : ''
                        }
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Popup;