import React, {useContext} from "react";
import classes from '../secondPage/EatItems/Pizza.module.css'
import {BurgerContext} from "../../App";

const  BurgerItem = ({title, image, description, price, id, quantity, none}) => {
    let [burgerDataFromContext, setBurgerDataFromContext] = useContext(BurgerContext)
    let addBurgerCount = (id) => {
        burgerQuantityHandler(id, 1)
    }
    let removeBurgerCount = (id) => {
        if (quantity > 0) burgerQuantityHandler(id, -1)
    }
    let burgerQuantityHandler = (burgerId, diff) => {
        setBurgerDataFromContext(
            burgerDataFromContext.map(item => item.id === burgerId ? {...item, quantity: item.quantity + diff} : item)
        )
    }

    let eatClass = [classes.pizza__content,]
    return (
        <div style={{border: '2px solid rgba(201, 58, 53, 0.78)', borderLeft: 'none'}} className={eatClass.join(' ')}>
            <div className={classes.pizza__img}>
                <img src={image} alt=""/>
                <div className={classes.pizza__body}>
                    <div className={classes.pizza__title}>
                        <div className={classes.pizza__name}>{title}</div>
                        <div className={classes.pizza__description}>{description} </div>
                    </div>
                    <div className={classes.pizza__btn_s}>
                        <div className={classes.pizza__count}>{quantity}</div>
                        <div>
                            <button style={{display: none}} onClick={() => {addBurgerCount(id)}} className={classes.increment}>+</button>
                        </div>
                        <div>
                            <button style={{display: none}} onClick={() => {removeBurgerCount(id)}}  className={classes.decrement}>-</button>
                        </div>
                        <div className={classes.pizza__price}>{price}грн</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerItem;