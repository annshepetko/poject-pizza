import React, {useContext, useEffect, useState} from "react";
import classes from './form.module.css'
import {MyContext, } from "../App";
import {NavLink} from "react-router-dom";
import Popup from "../components/popup/Popup";
import EatItem from "../components/secondPage/EatItems/EatItem";

export const Form = () => {
    const [popup, setPopup] = useState(false)
    let [userName, setUserName] = useState('')
    let [userSurname, setUserSurname] = useState('')
    let [userAddress, setUserAddress] = useState('')
    let [userPhoneNumber, setUserPhoneNumber] = useState('')


    let [formArray] = useContext(MyContext)



    let orderData = [...formArray, ]

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])
    let userNameInput = (e) => {
        setUserName(e.target.value)
    }
    let userSurnameInput = (e) => {
        setUserSurname(e.target.value)
    }
    let userAddressInput = (e) => {
        setUserAddress(e.target.value)
    }
    let userPhoneNumberInput = (e) => {
        setUserPhoneNumber(e.target.value)
    }
    let closePopup = () => {
        setPopup(false)
    }
    let num = orderData.map(item => item.quantity > 0 ? item.quantity * item.price : 0)
    let totalPrice = num.reduce((acc, item) => acc + item)
    let [priceNumber, setPriceNumber] = useState(totalPrice)

    let sendData = (e) => {
        e.preventDefault()
        if (userSurname.length > 3 && userAddress.length > 35 && userName.length > 1 && userPhoneNumber.length > 9) {
            setUserSurname('')
            setUserAddress('')
            setUserName('')
            setUserPhoneNumber('')
            setPriceNumber(0)
            setPopup(true)
        }
    }
        return (
            <form className={classes.form__eat} onSubmit={sendData}>
                <p className={classes.form__title}>Заповніть форму</p>
                <div className={classes.form__eat_input}>
                    {orderData.map((item, index) => item.quantity > 0 ? <EatItem key = {index} {...item} description={''}  fontSize={'25px'} height={'100px'} width={'100px'}  none={'none'}  /> : '' )}
                    <div>
                        <input value={userName} onChange={userNameInput} type='text' placeholder='Введіть своє ім`я'/>
                        {userName.length > 1 ? <span className={classes.form__special_character}>&#10004;</span> : ''}
                    </div>
                    <div>
                        <input value={userSurname} onChange={userSurnameInput} type='text'
                               placeholder='Введіть своє прізвище '/>
                        {userSurname.length > 3 ?
                            <span className={classes.form__special_character}>&#10004;</span> : ''}
                    </div>
                    <div>
                        <input value={userAddress} onChange={userAddressInput} type='text'
                               placeholder='Місто, вулиця, будинок, номер під`  їзду, квартира '/>

                        {userAddress.length > 35 ?
                            <span className={classes.form__special_character}>&#10004;</span> : ''}
                    </div>
                    <div>
                        <input value={userPhoneNumber} onChange={userPhoneNumberInput} type='number'
                               placeholder='Введіть свій номер телефону '/>
                        {userPhoneNumber.length > 9 ?
                            <span className={classes.form__special_character}>&#10004;</span> : ''}
                    </div>
                    {}
                        <div className={classes.form__total_price}>
                           Сумма замовлення: {priceNumber} грн
                        </div>
                    <button className={classes.form__button_order} type='submit'>Готово</button>
                    <button><NavLink className={classes.form__button_back} to='/'  >Назад</NavLink></button>
                    {
                        popup
                            ? <Popup lineHeight='55px' margin='160px' none={'none'}
                                     PopupText={'Ваше замовлення прийняте, очікуйте на кур`єра 30-45хв'}
                                     onClick={closePopup}/>
                            : ''
                    }
                </div>
            </form>
        )
    }