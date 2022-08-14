import {useContext} from "react";
import {MyContext} from "../../App";


const   PizzaItem = ({title, image, description, price, id, quantity}) => {
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
        <div className="pizza__content">
            <div className="pizza__img">
                <img src={image} alt=""/>
                <div className='pizza__body'>
                    <div className='pizza__title'>
                        <div className="pizza__name">{title}</div>
                        <div className="pizza__description">{description} </div>
                    </div>
                    <div className='pizza__btn-s'>
                        <div className="pizza__count">{quantity}</div>
                        <div>
                            <button onClick={increaseQuantity} className='increment'>+</button>
                        </div>
                        <div>
                            <button onClick={decreaseQuantity} className='decrement'>-</button>
                        </div>
                        <div className="pizza__price">{price}грн</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem;