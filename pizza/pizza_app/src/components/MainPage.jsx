import React from 'react'
import Card from './cards/Card'
import { NavLink } from 'react-router-dom'
import Header from './header/Header'
import {Cards_Container} from "./cardsContainer/Cards_Container";
import {Basic} from "./basicContainer/Basic";
import {Animation_pizza} from "./animation_pizza/Animation_pizza";

export default function MainPage() {
  return (
    <div className="image">
    <div>
        
        <Header/>
        <Cards_Container/>
        <Basic/>
        <Animation_pizza/>
    </div>
    </div>
  )
}
