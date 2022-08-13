import React, {useState} from 'react'
import {pizzas} from "../../assets/data";

const PizzaItem = ({ title, image, description, price, id}) => {
    const [count, setCount] = useState(0)

    const increase = () => {

        setCount(count + 1)
        pizzas.filter(el => {
            if (el.id === id){
                el.count = count
            }
        })
    }
    const decrease = () => {
        if (count !== 0) {
            setCount(count - 1)
            pizzas.filter(el => {
                if (el.id === id){
                    el.count = count
                }
            })
        } else {
            setCount(0)
        }
    }


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
                        <div className="pizza__count">{count}</div>
                        <div>
                            <button onClick={ increase} className='increment'>+</button>
                        </div>
                        <div>
                            <button onClick={decrease} className='decrement'>-</button>
                        </div>
                        <div className="pizza__price">{price}грн</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem;