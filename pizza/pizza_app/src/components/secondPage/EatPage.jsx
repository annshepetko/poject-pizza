import React, {useState} from 'react'
import PizzaItem from "./Pizza";
import {pizzas} from "../../assets/data";



const EatPage = () => {
    const [popup, setPopup] = useState(false)



    return (
        <div>
            <div className='pizza__shell'>
                {pizzas.map((item, key) => (
                    <PizzaItem key={item.id} {...item} />
                ))}
                    <button onClick={() => {setPopup(true)}} className='pizza__shell_buttonOrder'>Замовити </button>
                {
                    popup ?
                     <div className= 'popup'>
                        <div className= 'popup__body'>
                            <div className= 'popup__content'>

                                <div className='popup__title'>Підтвердіть замовлення </div>
                               
                                <button onClick={() => {setPopup(false); console.log(pizzas) }} className='popup__closer'>закрити</button>
                            </div>
                        </div>
                     </div>
                        :
                     ''
                    }
            </div>
        </div>
    )
}
export default EatPage