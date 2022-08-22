import {useContext} from "react";
import {MyContext} from "../../../App";
import classes from './Pizza.module.css'

const  EatItem = ({title, image, description, price, id, quantity, none, height, width, fontSize}) => {
    const [stateFromContext, setStateFromContext] = useContext(MyContext);
    // MyContext should be imported

    const increaseQuantity = () => {
        buttonHandler(id, 1)
    }
    const decreaseQuantity = () => {
        if (quantity !== 0) buttonHandler(id, -1)

    }
    const buttonHandler = (id, diff) => {
        setStateFromContext(
            stateFromContext.map((item) =>
                item.id === id ? {...item, quantity: item.quantity + diff} : item
            )
        );
    };
    return (
        <div  style={{height: height}}  className={classes.pizza__content}>
            <div className={classes.pizza__img}>
                <img style={{height: height, width: width }}  src={image} alt=""/>
                <div className={classes.pizza__body}>
                    <div className={classes.pizza__title}>
                        <div  style={{fontSize: fontSize}} className={classes.pizza__name}>{title}</div>
                        <div className={classes.pizza__description}>{description} </div>
                    </div>
                    <div className={classes.pizza__btn_s}>
                        <div className={classes.pizza__count}>{quantity}</div>
                        <div>
                            <button style={{display: none}} onClick={increaseQuantity} className={classes.increment}>+</button>
                        </div>
                        <div>
                            <button style={{display: none}} onClick={decreaseQuantity} className={classes.decrement}>-</button>
                        </div>
                        <div className={classes.pizza__price}>{price}грн</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EatItem;