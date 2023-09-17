import React from 'react';
import classes from './Button.module.css'

const Button = ({children, onClick, variant}) => {
    return (
        <button
            onClick={onClick}
            className={classes.pizza__shell_buttonOrder}>
            {children}
        </button>
    );
};

export default Button;
