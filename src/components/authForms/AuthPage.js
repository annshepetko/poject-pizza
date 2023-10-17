import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RegisterForm from "./authForm/RegisterForm";
import styles from './AuthPage.module.css'
const AuthPage = ({isRegisterForm, headerMessage}) =>{
        return (
            <div className={styles.auth_wrap}>
                <RegisterForm isRegisterForm={isRegisterForm} headerMessage={headerMessage} />

            </div>
        );

}
export default AuthPage;