import React from "react";


export let Basic = (props) =>{
    return (
        <div className="basic">

            <h2>Базові  піци</h2>
            <div className="basic__container">
                <p className="basic__content">
                    Hа наш погляд базовою піцою є папероні ,
                    цю піцу здається куштував кожний,
                    <br />

                    <br/> і не спроста ця піца доволі проста в приготуванн але дуже і дуже смачна
                </p>
                <div className="pizza__container">
                    <img src="https://assets.dots.live/misteram-public/331fc5f3-41a0-4684-8539-52f6a344d076-826x0.png" alt="" />
                    <img src="http://smach.com.ua/wp-content/uploads/img_4874.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
