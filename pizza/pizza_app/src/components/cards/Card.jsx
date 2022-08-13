import React from 'react'

export default function Card(props) {
  return (
    <div className="card__shell">
    <div className="card__body">
        <div className='card__body_img'></div>
        <div className="card__body_title">
            {props.title}
        </div>
        <div className="card__body_content">{props.content}</div>
    </div>
</div>
  )
}
