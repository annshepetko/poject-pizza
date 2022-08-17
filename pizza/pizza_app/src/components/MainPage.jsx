import React from 'react'
import Header from './header/Header'
import {Cards_Container} from "./cardsContainer/Cards_Container";
import {Basic} from "./basicContainer/Basic";
import {Animation_item} from "./animation_items/Animation_item";
import {animation_data} from "./animation_items/Animation_data";



export default function MainPage() {
  return (
    <div className="image">
    <div>
        
        <Header/>
        <Cards_Container/>
        <Basic/>
        <div className='menu__container'>
        <Animation_item {...animation_data.pizza}/>
            <Animation_item {...animation_data.burger}/>
        </div>
    </div>
    </div>
  )
}
