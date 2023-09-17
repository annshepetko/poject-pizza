import React from "react";
import Card from "../cards/Card";
import classes from './Cards_Container.module.css'

export let Cards_Container = (props) =>{
    return (

        <div className={classes.flex_container}>
            <Card title = 'Today 10:00 am - 7:00 pm' content = 'Working hours' image = ''/>
            <Card title = 'Velyka Vasylkivska 100' content = 'Get Directions'/>
            <Card title = '+38 (063)833 24 15' content = 'Call Online' />
        </div>
    )
}
