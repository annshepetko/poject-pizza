import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AuthForm from "./authForm/AuthForm";
import styles from './AuthPage.module.css'
const AuthPage = ({isRegisterForm, headerMessage}) =>{
        return (
            <div className={styles.auth_wrap}>
                <AuthForm isRegisterForm={isRegisterForm} headerMessage={headerMessage} />

            </div>
        );

}
export default AuthPage;