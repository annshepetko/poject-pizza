import React from 'react'
import classes from './Card.module.css'
export default function Card(props) {
  return (
    <div className={classes.card__shell}>
    <div className={classes.card__body}>

        <div className={classes.card__body_title}>
            {props.title}
        </div>
        <div className={classes.card__body_content}>{props.content}</div>
    </div>
</div>
  )
}
