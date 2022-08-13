import React from 'react';
import './popup.style.css'

const Popup = ({onClick}) => {
    return (
        <div className='popup'>
            <div className='popup__body'>
                <div className='popup__content'>
                    <div className='popup__title'>Підтвердіть замовлення</div>
                    <div>
                    </div>
                    <div onClick={onClick}>Close</div>
                </div>
            </div>
        </div>
    );
};

export default Popup;